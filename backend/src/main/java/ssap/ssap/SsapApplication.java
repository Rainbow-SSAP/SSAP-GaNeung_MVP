package ssap.ssap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import ssap.ssap.repository.CategoryRepository;
import ssap.ssap.repository.DetailedItemRepository;
import ssap.ssap.repository.UserTestRepository;

@SpringBootApplication
public class SsapApplication {

	public static void main(String[] args) {
		SpringApplication.run(SsapApplication.class, args);
	}
}
