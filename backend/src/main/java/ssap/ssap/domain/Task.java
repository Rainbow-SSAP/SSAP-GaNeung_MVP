package ssap.ssap.domain;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
@Table(name = "tasks")
public class Task {
    //ToDo: 테이블 필드 검증 추가 필요

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

//    private Long userId;
//
//    private String helperId;
//
//    private String categoryId;
//
//    private String detailedItemsId;
}
