package ssap.ssap.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ssap.ssap.dto.ErrandResponseDto;
import ssap.ssap.service.ErrandService;
import ssap.ssap.service.OAuthService;

@CrossOrigin(origins = "*")
@RestController
@Slf4j
@RequestMapping("/api/errands")
@Tag(name = "메인페이지 실시간 심부름 리스트", description = "메인페이지 실시간 심부름 리스트 관련 API")
public class ErrandController {
    private final ErrandService errandService;
    private final OAuthService oAuthService;

    @Autowired
    public ErrandController(ErrandService errandService, OAuthService oAuthService) {
        this.errandService = errandService;
        this.oAuthService = oAuthService;
    }

    @Operation(summary = "모든 심부름 조회", description = "페이징 처리된 심부름 목록을 조회")
    @GetMapping
    public ResponseEntity<?> getErrands(@RequestParam(required = false) String address,
                                        @ParameterObject Pageable pageable,
                                        @RequestHeader("Authorization") String authorizationHeader) {
        try {
            String accessToken = authorizationHeader.substring("Bearer ".length());
            boolean isValid = oAuthService.isAccessTokenValid(accessToken);
            if (!isValid) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("액세스 토큰이 유효하지 않거나 만료되었습니다.");
            }

            // 리스트 조회
            Page<ErrandResponseDto> errands = errandService.getErrands(address, pageable);
            return ResponseEntity.ok(errands);

        }catch(Exception e){
            log.error("Exception e", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("요청을 처리하는 중에 서버에서 오류가 발생했습니다.");
        }
    }
}