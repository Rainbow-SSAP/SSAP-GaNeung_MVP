package ssap.ssap.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ssap.ssap.domain.Category;
import ssap.ssap.domain.DetailedItem;
import ssap.ssap.domain.Task;
import ssap.ssap.domain.User;
import ssap.ssap.dto.TaskRequestDto;
import ssap.ssap.repository.CategoryRepository;
import ssap.ssap.repository.DetailedItemRepository;
import ssap.ssap.repository.TaskRepository;
import ssap.ssap.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final CategoryRepository categoryRepository;
    private final DetailedItemRepository detailedItemRepository;

    //Test
    private final UserRepository userRepository;

    public Task createPost(TaskRequestDto.CreateForm createForm) {

        User user = null;
        Category category = null;
        DetailedItem detailedItem =null;

        Optional<Category> optionalCategory = categoryRepository.findByCategoryName(createForm.getCategory());
        if (optionalCategory.isPresent()) {
            category = optionalCategory.get();
            List<DetailedItem> detailedItems = detailedItemRepository.findByCategory_Id(category.getId());

            Optional<DetailedItem> optionalDetailedItem = detailedItems.stream()
                    .filter(item -> item.getDetailedItemName().equals(createForm.getDetailedItem()))
                    .findAny();

            if (optionalDetailedItem.isPresent()) {
                detailedItem = optionalDetailedItem.get();
            }
        }

        Task task = new Task();
        task.setTitle(createForm.getTitle());
        task.setDescription(createForm.getDescription());
        task.setLocation(createForm.getLocation());
        task.setRoadAddress(createForm.getRoadAddress());
        task.setJibunAddress(createForm.getJibunAddress());
        task.setDetailedAddress(createForm.getDetailedAddress());
        task.setPreferredGender(createForm.getPreferredGender());
        task.setStartTime(createForm.getStartTime());
        task.setEndTime(createForm.getEndTime());
        task.setFee(createForm.getFee());
        task.setAuctionStatus(createForm.getAuctionStatus());
        task.setTermsAgreed(createForm.getTermsAgreed());
        task.setAutionStartTime(createForm.getAutionStartTime());
        task.setAutionEndTime(createForm.getAutionEndTime());
        task.setStatus(createForm.getStatus());

        //Test User: 레인보우
        Optional<User> optionalUser = userRepository.findByName("쌉가능");
        if (optionalUser.isPresent()) {
            user = optionalUser.get();
        }

        task.setUser(user);
        task.setCategory(category);
        task.setDetailedItem(detailedItem);

        return taskRepository.save(task);
    }
}
