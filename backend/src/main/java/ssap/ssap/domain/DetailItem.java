package ssap.ssap.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "detail_items")
public class DetailItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column(name = "category_id")
    private Long categoryId;
}
