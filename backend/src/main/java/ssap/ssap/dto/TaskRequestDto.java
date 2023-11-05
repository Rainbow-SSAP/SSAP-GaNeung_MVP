package ssap.ssap.dto;

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
        private String title;
        private String description;
        private String location;
        private String roadAddress;
        private String jibunAddress;
        private String detailedAddress;
        private String preferredGender;
        private String startTime;
        private String endTime;
        private String fee;
        private String auctionStatus;
        private String termsAgreed;
        private String autionStartTime;
        private String autionEndTime;
        private String status;
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
