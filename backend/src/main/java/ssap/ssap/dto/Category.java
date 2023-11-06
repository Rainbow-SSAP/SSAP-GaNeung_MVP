package ssap.ssap.dto;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category_name", nullable = true)
    private String category_name;
}
