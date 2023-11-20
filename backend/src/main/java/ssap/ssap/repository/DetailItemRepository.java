package ssap.ssap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssap.ssap.domain.DetailItem;

import java.util.List;

public interface DetailItemRepository extends JpaRepository<DetailItem, Long> {
    List<DetailItem> findByCategoryId(Long categoryId);
}
