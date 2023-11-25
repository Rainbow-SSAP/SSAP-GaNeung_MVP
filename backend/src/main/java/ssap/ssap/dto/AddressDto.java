package ssap.ssap.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class AddressDto {

    @NotNull
    private String address;
}
