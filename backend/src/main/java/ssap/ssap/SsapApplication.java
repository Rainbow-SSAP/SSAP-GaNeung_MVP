package ssap.ssap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import ssap.ssap.repository.CategoryRepository;
import ssap.ssap.repository.DetailedItemRepository;
import ssap.ssap.repository.UserRepository;

@SpringBootApplication
public class SsapApplication {

	public static void main(String[] args) {
		SpringApplication.run(SsapApplication.class, args);
	}

	@Bean
	public TestDataInit testDataInit(UserRepository userRepository, CategoryRepository categoryRepository, DetailedItemRepository detailedItemRepository) {
		return new TestDataInit(userRepository, categoryRepository, detailedItemRepository);
	}
}
