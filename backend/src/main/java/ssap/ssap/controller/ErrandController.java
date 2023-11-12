package ssap.ssap.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ssap.ssap.dto.ErrandDTO;
import ssap.ssap.service.ErrandService;

@RestController
@RequestMapping("/api/errands")
@Tag(name = "메인페이지 실시간 심부름 리스트", description = "메인페이지 실시간 심부름 리스트 관련 API")
public class ErrandController {
    private final ErrandService errandService;

    @Autowired
    public ErrandController(ErrandService errandService) {
        this.errandService = errandService;
    }

    @Operation(summary = "모든 심부름 조회", description = "페이징 처리된 심부름 목록을 조회")
    @GetMapping
    public ResponseEntity<Page<ErrandDTO>> getErrands(@ParameterObject Pageable pageable) {
        Page<ErrandDTO> errands = errandService.findAllErrands(pageable);
        return ResponseEntity.ok(errands);
    }
}
