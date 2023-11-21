package ssap.ssap.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "Tasks")
public class ErrandEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "fee")
    private String fee;

    @Column(name = "jibunAddress")
    private String district;

    @Column
    private LocalDateTime startTime;

    @Column
    private LocalDateTime endTime;

    @OneToOne(mappedBy = "errand", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private ThumbNailEntity attachment;
}
