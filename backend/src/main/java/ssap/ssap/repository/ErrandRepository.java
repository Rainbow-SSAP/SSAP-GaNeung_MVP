package ssap.ssap.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ssap.ssap.entity.ErrandEntity;

public interface ErrandRepository extends JpaRepository<ErrandEntity, Long> {
}
