package ssap.ssap.dto;

import lombok.Data;

@Data
public class DetailedItemDTO {
    private Long itemId;
    private String name;

    public DetailedItemDTO(Long itemId, String name) {
        this.itemId = itemId;
        this.name = name;
    }
}
