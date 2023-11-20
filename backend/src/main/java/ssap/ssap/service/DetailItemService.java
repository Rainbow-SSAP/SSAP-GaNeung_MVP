package ssap.ssap.service;

import org.springframework.stereotype.Service;
import ssap.ssap.domain.DetailItem;
import ssap.ssap.dto.DetailItemDTO;
import ssap.ssap.repository.DetailItemRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DetailItemService {

    private final DetailItemRepository detailItemRepository;

    public DetailItemService(DetailItemRepository detailItemRepository) {
        this.detailItemRepository = detailItemRepository;
    }

    public List<DetailItemDTO> findAllDetailItemsByCategoryId(Long categoryId) {
        List<DetailItem> detailItems = detailItemRepository.findByCategoryId(categoryId);
        return detailItems.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private DetailItemDTO convertToDTO(DetailItem detailItem) {
        return new DetailItemDTO(detailItem.getId(), detailItem.getName());
    }
}

