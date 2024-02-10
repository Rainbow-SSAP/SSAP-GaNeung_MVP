package ssap.ssap.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserAddressDTO {
    @Email(message = "유효하지 않는 이메일 형식입니다.")
    private String email;
    @NotBlank(message = "주소는 비어 있을 수 없습니다.")
    private String address;
}
