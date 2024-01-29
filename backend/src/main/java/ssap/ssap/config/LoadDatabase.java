package ssap.ssap.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ssap.ssap.domain.Category;
import ssap.ssap.repository.CategoryRepository;

import java.util.Arrays;
import java.util.List;

@Configuration
public class LoadDatabase {
    @Bean
    CommandLineRunner initDatabase(CategoryRepository repository) {
        return args -> {
            List<String> categories = Arrays.asList("배달·퀵", "청소", "운반·수리", "동행·육아", "펫", "역할대행", "알바", "벌레잡기", "기타");
            categories.forEach(name ->
                    repository.findByCategoryName(name)
                            .orElseGet(() -> repository.save(new Category(name))));
        };
    }
}

