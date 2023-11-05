package ssap.ssap.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ssap.ssap.domain.Task;
import ssap.ssap.dto.ErrorField;
import ssap.ssap.dto.ErrorResponseDto;
import ssap.ssap.dto.TaskRequestDto;
import ssap.ssap.service.TaskService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class RequestController {

    private final TaskService taskService;

    @PostMapping("/request")
    public ResponseEntity<?> createErrandRequestForm(
            @Validated @RequestBody TaskRequestDto.CreateForm request, BindingResult bindingResult
    ) {
        if(bindingResult.hasErrors()) {
            List<ErrorField> errors = bindingResult.getFieldErrors().stream()
                    .map(error -> new ErrorField(error.getField()))
                    .collect(Collectors.toList());

            return ResponseEntity.badRequest().body(ErrorResponseDto.error("입력 값 검증 오류", errors));
        }

        try {
            Task task = taskService.createPost(request);

            return ResponseEntity.status(HttpStatus.CREATED).body(new TaskRequestDto.CreateFormResponse("심부름 요청이 생성되었습니다.", task));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ErrorResponseDto.error("요청을 처리하는 중에 서버에서 오류가 발생했습니다.", ""));
        }
    }
}
