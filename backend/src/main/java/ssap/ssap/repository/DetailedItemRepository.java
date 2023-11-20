package ssap.ssap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssap.ssap.domain.DetailedItem;

import java.util.List;

public interface DetailedItemRepository extends JpaRepository<DetailedItem, Long> {
    List<DetailedItem> findByCategoryId(Long categoryId);
}
