package ssap.ssap.controller;

import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ssap.ssap.dto.LoginResponseDto;
import ssap.ssap.service.OAuthService;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/oauth")
@Tag(name = "OAuth 인증", description = "OAuth2 인증 및 권한 부여 과정을 위한 API EndPoint 입니다.")
public class OAuthController {
    private final OAuthService oauthService;

    @GetMapping("/{provider}/callback")
    public ResponseEntity<LoginResponseDto> callback(
            @Parameter(name = "provider", description = "OAuth 제공자", in = ParameterIn.PATH, required = true)
            @PathVariable String provider,

            @Parameter(name = "code", description = "인증 코드", in = ParameterIn.QUERY, required = true)
            @RequestParam("code") String code,
            HttpServletResponse response
    ) {
        LoginResponseDto oauthInfo = oauthService.kakaoLogin(provider, code, response);

        return ResponseEntity.ok(oauthInfo);
    }
}
