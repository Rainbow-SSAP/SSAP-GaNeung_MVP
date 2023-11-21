package ssap.ssap.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data
public class ErrandDTO {
    private Long taskId;
    private String title;
    private String description;
    private String fee;
    private String district;
    private String startTime;
    private String endTime;
    private String thumbnailUrl;
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    // LocalDateTime을 받아 String으로 변환하여 저장
    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime != null ? startTime.format(formatter) : null;
    }
    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime != null ? endTime.format(formatter) : null;
    }
}
