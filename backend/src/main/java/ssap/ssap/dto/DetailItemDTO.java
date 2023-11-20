package ssap.ssap.dto;

import lombok.Data;

@Data
public class DetailItemDTO {
    private Long itemId;
    private String name;

    public DetailItemDTO(Long itemId, String name) {
        this.itemId = itemId;
        this.name = name;
    }
}
