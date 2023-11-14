package ssap.ssap.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import ssap.ssap.domain.Task;

public class TaskRequestDto {

    @Getter
    @Setter
    @AllArgsConstructor
    /*심부름 요청서 작성시 쓰는 DTO*/
    public static class CreateForm {
        @NotBlank
        private String category;
        @NotBlank
        private String detailedItem;

        @NotBlank
        private String title;

        @NotBlank
        private String description;

//        private String location;
        @NotBlank
        private String roadAddress;

        @NotBlank
        private String jibunAddress;

        @NotBlank
        private String detailedAddress;

        @NotBlank
        private String preferredGender;

        @NotBlank
        private String startTime;

        @NotBlank
        private String endTime;

        @NotBlank
        private String fee;

        @NotBlank
        private Boolean auctionStatus;

        @NotBlank
        private Boolean termsAgreed;

        @NotNull
        private String auctionStartTime;

        @NotNull
        private String auctionEndTime;

        private String fileData;
    }

    @Getter
    @Setter
    public static class CreateFormResponse {
        private String message;
        private Long requestId; //tasks table primary key
        private String taskStatus; // tasks table field: status

        public CreateFormResponse(String message, Task task) {
            this.message = message;
            this.requestId = task.getId();
            this.taskStatus = task.getStatus();
        }
    }

}
