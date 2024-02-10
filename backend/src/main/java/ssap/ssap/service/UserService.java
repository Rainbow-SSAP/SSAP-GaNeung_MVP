package ssap.ssap.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.validator.routines.EmailValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import ssap.ssap.domain.User;
import ssap.ssap.dto.Account;
import ssap.ssap.dto.UserAddressDTO;
import ssap.ssap.exception.CustomServiceException;
import ssap.ssap.exception.UserNotFoundException;
import ssap.ssap.repository.UserRepository;

import java.util.Optional;

@Service
@Slf4j
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Optional<Account> getUserByEmail(String email) {
        log.debug("사용자 이메일로 조회: {}", email);

        if (email == null || email.trim().isEmpty()) {
            log.warn("이메일이 null 또는 빈 문자열: {}", email);
            throw new IllegalArgumentException("이메일은 null이거나 빈 값일 수 없습니다.");
        }

        try {
            Optional<User> userOptional = userRepository.findByEmail(email);
            if (!userOptional.isPresent()) {
                log.warn("사용자 정보를 찾을 수 없음: {}", email);
                return Optional.empty();
            }

            User user = userOptional.get();
            Account account = new Account();
            account.setUserName(user.getName());
            account.setUserEmail(user.getEmail());
            account.setGender(user.getGender());
            account.setBirthdate(user.getBirthdate());
            account.setAgeRange(user.getAgeRange());
            account.setProfileImageUrl(user.getProfileImageUrl());

            log.debug("사용자 정보 조회 완료: {}", email);
            return Optional.of(account);

        } catch (DataAccessException e) {
            log.error("데이터베이스 접근 중 오류 발생: {}", email, e);
            throw new CustomServiceException("데이터베이스 접근 중 오류 발생", e);
        }
    }
    public UserAddressDTO updateUserAddress(String email, String address) {
        if (email == null || email.isBlank() || !EmailValidator.getInstance().isValid(email)) {
            log.warn("유효하지 않은 이메일 형식: {}", email);
            throw new IllegalArgumentException("유효하지 않은 이메일 형식입니다.");
        }

        if (email == null || email.isBlank()) {
            log.debug("이메일이 null이거나 공백입니다: {}", email);
            throw new IllegalArgumentException("이메일은 비어 있을 수 없습니다.");
        }

        if (!EmailValidator.getInstance().isValid(email)) {
            log.info("유효하지 않은 이메일 형식: {}", email);
            throw new IllegalArgumentException("유효하지 않은 이메일 형식입니다: " + email);
        }


        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("사용자를 찾을 수 없음: " + email));

        user.setAddress(address);
        User savedUser = userRepository.save(user);
        log.info("사용자 주소 정보 업데이트: {}", email);

        UserAddressDTO userAddressDTO = new UserAddressDTO();
        userAddressDTO.setEmail(savedUser.getEmail());
        userAddressDTO.setAddress(savedUser.getAddress());

        return userAddressDTO;
    }
}
