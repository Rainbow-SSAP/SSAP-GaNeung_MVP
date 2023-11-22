package ssap.ssap.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ssap.ssap.domain.Task;
import ssap.ssap.domain.TaskAttachment;
import ssap.ssap.dto.TaskRequestDto;
import ssap.ssap.repository.TaskAttachmentRepository;
import ssap.ssap.repository.TaskRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
public class ErrandService {
    private final TaskRepository taskRepository;
    private final TaskAttachmentRepository taskAttachmentRepository;
    public ErrandService(TaskRepository taskRepository, TaskAttachmentRepository taskAttachmentRepository) {
        this.taskRepository = taskRepository;
        this.taskAttachmentRepository = taskAttachmentRepository;
    }
    @Transactional(readOnly = true)
    public Page<TaskRequestDto.CreateForm> findAllErrands(Pageable pageable) {
        return taskRepository.findAll(pageable)
                .map(this::convertToDto);
    }
    private TaskRequestDto.CreateForm convertToDto(Task task) {
        TaskRequestDto.CreateForm dto = new TaskRequestDto.CreateForm();
        dto.setTitle(task.getTitle());
        dto.setDescription(task.getDescription());
        dto.setFee(task.getFee());
        dto.setStartTime(task.getStartTime());
        dto.setEndTime(task.getEndTime());
        setFirstAttachmentFileData(task, dto);
        // '동'을 추출하는 로직
        String district = extractDistrictFromAddress(task.getJibunAddress());
        dto.setDistrict(district);

        return dto;
    }

    private void setFirstAttachmentFileData(Task task, TaskRequestDto.CreateForm dto) {
        TaskAttachment attachment = task.getTaskAttachment();
        if (attachment != null) {
            dto.setFileData(attachment.getFileData());
        }
    }

    // 주소에서 '동'을 추출하는 메소드
    public String extractDistrictFromAddress(String fullAddress) {
        if(fullAddress == null || fullAddress.isEmpty()) {
            return null;
        }
        String[] parts = fullAddress.split(" ");
        for (int i = parts.length - 1; i >= 0; i--) {
            if (parts[i].matches("\\d+.*")) {
                return i > 0 ? parts[i - 1] : null;
            }
        }
        return null; // '동'을 찾지 못한 경우
    }
    // 기타 CRUD 메소드 작성해야함. 현재는 조회만 가능.
}
