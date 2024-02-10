package ssap.ssap.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ssap.ssap.dto.UserAddressDTO;
import ssap.ssap.service.OAuthService;
import ssap.ssap.service.UserService;

@Slf4j
@CrossOrigin(origins = "*")
@Tag(name = "사용자 주소 API", description = "사용자의 주소 정보 관련 API")
@RestController
@RequestMapping("/api/user-address")
public class UserAddressController {

    private final UserService userService;
    private final OAuthService oAuthService;

    @Autowired
    public UserAddressController(UserService userService, OAuthService oAuthService) {
        this.userService = userService;
        this.oAuthService = oAuthService;
    }

    @Operation(summary = "사용자 주소 정보 업데이트", description = "사용자의 이메일과 새로운 주소 정보를 사용하여 사용자의 주소를 업데이트합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "사용자 주소 업데이트 성공", content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserAddressDTO.class))),
            @ApiResponse(responseCode = "400", description = "잘못된 요청/유효하지 않은 입력"),
            @ApiResponse(responseCode = "404", description = "사용자 정보를 찾을 수 없음"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
    })
    @PutMapping
    public ResponseEntity<?> updateUserAddress(@Valid @RequestBody UserAddressDTO userAddressDTO,
                                                            @RequestHeader("Authorization") String authorizationHeader) {

        String accessToken = authorizationHeader.substring("Bearer ".length());
        boolean isValid = oAuthService.isAccessTokenValid(accessToken);
        if (!isValid) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("액세스 토큰이 유효하지 않거나 만료되었습니다.");
        }

        UserAddressDTO updatedUserAddressDTO = userService.updateUserAddress(userAddressDTO.getEmail(), userAddressDTO.getAddress());
        return ResponseEntity.ok(updatedUserAddressDTO);

    }
}
