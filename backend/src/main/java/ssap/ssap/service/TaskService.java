package ssap.ssap.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ssap.ssap.domain.Task;
import ssap.ssap.dto.TaskRequestDto;
import ssap.ssap.repository.TaskRepository;

@Slf4j
@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public Task createPost(TaskRequestDto.CreateForm createForm) {
        Task task = new Task();
        task.setTitle(createForm.getTitle());
        task.setDescription(createForm.getDescription());
        task.setLocation(createForm.getLocation());
        task.setRoadAddress(createForm.getRoadAddress());
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

        return taskRepository.save(task);
    }
}
