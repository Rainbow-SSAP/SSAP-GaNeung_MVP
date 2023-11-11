package ssap.ssap.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition(
        info = @Info(title = "SSAP 심부름 플랫폼 API",
                description = "SSAP 심부름 플랫폼 API입니다.",
                version = "v1"),
        servers = @Server(url = "/", description = "Default Server URL")
)

@Configuration
public class SwaggerConfig {
}
