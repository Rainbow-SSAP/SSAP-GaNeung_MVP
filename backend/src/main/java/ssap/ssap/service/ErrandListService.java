package ssap.ssap.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssap.ssap.domain.Auction;
import ssap.ssap.domain.Category;
import ssap.ssap.domain.Task;
import ssap.ssap.domain.User;
import ssap.ssap.repository.AuctionRepository;
import ssap.ssap.repository.TaskRepository;
import ssap.ssap.repository.UserRepository;

import java.util.HashMap;
import java.util.Map;

@Service
public class ErrandListService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;
    private final AuctionRepository auctionRepository;

    @Autowired
    public ErrandListService(TaskRepository taskRepository, UserRepository userRepository, AuctionRepository auctionRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
        this.auctionRepository = auctionRepository;
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getErrandDetails(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new EntityNotFoundException("id: " + taskId + " 를 찾을 수 없습니다"));

        // User 정보를 가져올 때는, Task 엔티티에서 직접 가져옵니다.
        // 이 예제에서는 UserRepository를 사용하지 않습니다.
        User user = task.getUser();
        if (user == null) {
            throw new EntityNotFoundException("User id: " + taskId + " 에 해당하는 사용자를 찾을 수 없습니다");
        }

        Category category = task.getCategory();
        if (category == null) {
            throw new EntityNotFoundException("Category id: " + taskId + " 에 해당하는 사용자를 찾을 수 없습니다");
        }

        Auction auction = task.getAuction();
        if (auction == null) {
            throw new EntityNotFoundException("Auction id: " + taskId + " 에 해당하는 사용자를 찾을 수 없습니다");
        }

        Map<String, Object> errandList = new HashMap<>();

        // Task 정보
        errandList.put("title", task.getTitle());
        errandList.put("description", task.getDescription());
        errandList.put("fee", task.getFee());
        errandList.put("auctionStartTime", task.getAuctionStartTime());
        errandList.put("auctionEndTime", task.getAuctionEndTime());
        errandList.put("StartTime", task.getStartTime());
        errandList.put("EndTime", task.getEndTime());
        errandList.put("roadAddress", task.getRoadAddress());
        errandList.put("jibunAddress", task.getJibunAddress());
        errandList.put("detailedAddress", task.getDetailedAddress());

        // User 정보
        errandList.put("name", task.getUser().getName());
        errandList.put("ageRange", task.getUser().getAgeRange());
        errandList.put("gender", task.getUser().getGender());
        errandList.put("profileImageUrl", task.getUser().getProfileImageUrl());

        // Category 정보
        errandList.put("categoryTag", task.getCategory().getCategoryName());
        errandList.put("detailitem", task.getDetailedItem().getDetailedItemName()); // 필요 시 사용

        // Auction 정보
        errandList.put("auctionId",auction.getId());

        return errandList;
    }
}
