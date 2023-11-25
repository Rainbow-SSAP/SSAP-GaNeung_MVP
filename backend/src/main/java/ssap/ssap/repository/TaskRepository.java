package ssap.ssap.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ssap.ssap.domain.Task;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    Page<Task> findByCategoryId(Long categoryId, Pageable pageable);
    Page<Task> findByJibunAddressContaining(String district, Pageable pageable);
}
