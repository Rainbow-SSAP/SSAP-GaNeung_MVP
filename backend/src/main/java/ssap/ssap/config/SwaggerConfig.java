package ssap.ssap.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(title = "SSAP 심부름 플랫폼 API",
                description = "SSAP 심부름 플랫폼 API입니다.",
                version = "v1"))

@Configuration
public class SwaggerConfig {
}
