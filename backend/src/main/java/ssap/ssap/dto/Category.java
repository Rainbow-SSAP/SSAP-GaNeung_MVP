package ssap.ssap.dto;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category_name")
    private String category_name;
}
