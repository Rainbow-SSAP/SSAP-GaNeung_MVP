package ssap.ssap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssap.ssap.dto.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
