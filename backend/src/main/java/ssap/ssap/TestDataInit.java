package ssap.ssap;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import ssap.ssap.domain.Category;
import ssap.ssap.domain.DetailedItem;
import ssap.ssap.domain.User;
import ssap.ssap.repository.CategoryRepository;
import ssap.ssap.repository.DetailedItemRepository;
import ssap.ssap.repository.UserRepository;

@Slf4j
@RequiredArgsConstructor
public class TestDataInit {
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
    private final DetailedItemRepository detailedItemRepository;

    //Test User 추가
    @EventListener(ApplicationReadyEvent.class)
    public void initData() {
        log.info("test data init");
        userRepository.save(new User("레인보우", "rainbow@gmail.com", "남자", "2023.05.22", "010-1111-2222", true, true, "none", "0", "도로명1", "지번1"));
        userRepository.save(new User("쌉가능", "ssap@naver.com", "여자", "2023.10.12", "010-3333-4444", true, true, "사진", "3", "도로명2", "지번2"));

        CategoryAndDetailedItemTestData();
    }

    /**
     * Test Data Structure
     * Category1: 배달
     *      DetailItem1: 배달_상세_1
     *      DetailItem2: 배달_상세_2
     *      DetailItem3: 배달_상세_3
     * Category2: 세탁
     *      DetailItem1: 세탁_상세_1
     *      DetailItem2: 세탁_상세_2
     *      DetailItem3: 세탁_상세_3
     * Category3: 돌봄
     *      DetailItem1: 돌봄_상세_1
     *      DetailItem1: 돌봄_상세_2
     *      DetailItem1: 돌봄_상세_3
     */
    private void CategoryAndDetailedItemTestData() {
        Category category1 = new Category("배달");
        Category category2 = new Category("세탁");
        Category category3 = new Category("돌봄");
        categoryRepository.save(category1);
        categoryRepository.save(category2);
        categoryRepository.save(category3);

        //배달
        DetailedItem detailedItem1_1 = new DetailedItem("배달_상세_1");
        detailedItem1_1.setCategory(category1);
        detailedItemRepository.save(detailedItem1_1);

        DetailedItem detailedItem1_2 = new DetailedItem("배달_상세_2");
        detailedItem1_2.setCategory(category1);
        detailedItemRepository.save(detailedItem1_2);

        DetailedItem detailedItem1_3 = new DetailedItem("배달_상세_3");
        detailedItem1_3.setCategory(category1);
        detailedItemRepository.save(detailedItem1_3);

        //세탁
        DetailedItem detailedItem2_1 = new DetailedItem("세탁_상세_1");
        detailedItem2_1.setCategory(category2);
        detailedItemRepository.save(detailedItem2_1);

        DetailedItem detailedItem2_2 = new DetailedItem("세탁_상세_2");
        detailedItem2_2.setCategory(category2);
        detailedItemRepository.save(detailedItem2_2);

        DetailedItem detailedItem2_3 = new DetailedItem("세탁_상세_3");
        detailedItem2_3.setCategory(category2);
        detailedItemRepository.save(detailedItem2_3);

        //돌봄
        DetailedItem detailedItem3_1 = new DetailedItem("돌봄_상세_1");
        detailedItem3_1.setCategory(category3);
        detailedItemRepository.save(detailedItem3_1);

        DetailedItem detailedItem3_2 = new DetailedItem("돌봄_상세_2");
        detailedItem3_2.setCategory(category3);
        detailedItemRepository.save(detailedItem3_2);

        DetailedItem detailedItem3_3 = new DetailedItem("돌봄_상세_3");
        detailedItem3_3.setCategory(category3);
        detailedItemRepository.save(detailedItem3_3);
    }
}
