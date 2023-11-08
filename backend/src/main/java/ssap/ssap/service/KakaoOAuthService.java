package ssap.ssap.service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import ssap.ssap.dto.Account;
import ssap.ssap.dto.LoginResponseDto;
import ssap.ssap.dto.OAuthDTO;
import org.json.JSONObject;

@Service
public class KakaoOAuthService implements OAuthService {
    private final RestTemplate restTemplate;

    @Value("${KAKAO_CLIENT_ID:default_client_id}")
    private String clientId;

    @Value("${KAKAO_CLIENT_SECRET:default_client_secret}")
    private String clientSecret;

    @Value("${KAKAO_REDIRECT_URL:default_redirect_url}")
    private String redirectUri;

    @Value("${kakao.token-uri:https://kauth.kakao.com/oauth/token}")
    private String kakaoTokenUri;

    @Value("${kakao.user-info-uri:https://kapi.kakao.com/v2/user/me}")
    private String kakaoUserInfoUri;

    @Autowired
    public KakaoOAuthService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public LoginResponseDto kakaoLogin(String provider, String code, HttpServletResponse response) {
        OAuthDTO oauthInfo = requestAccessToken(code);

        OAuthDTO userInfo = fetchUserInfo(oauthInfo.getAccessToken());

        LoginResponseDto loginResponse = new LoginResponseDto();
        //TODO: 나중에 DB 연동을 통해 기존 회원 여부에 따라 로그인 성공 여부 설정하도록 수정 필요
        loginResponse.setLoginSuccess(true);

        Account account = new Account();
        account.setUserName(userInfo.getUserName());
        account.setUserEmail(userInfo.getUserEmail());
        loginResponse.setAccount(account);

        loginResponse.setAccessToken(oauthInfo.getAccessToken());

        Cookie refreshTokenCookie = new Cookie("refreshToken", oauthInfo.getRefreshToken());
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setPath("/");
        response.addCookie(refreshTokenCookie);

        // 토큰 정보를 LoginResponseDto에 설정
        loginResponse.setAccessToken(oauthInfo.getAccessToken());

        return loginResponse;
    }

    private OAuthDTO requestAccessToken(String code) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", clientId);
        params.add("client_secret", clientSecret);
        params.add("code", code);
        params.add("redirect_uri", redirectUri);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                kakaoTokenUri,
                HttpMethod.POST,
                request,
                String.class
        );

        JSONObject jsonObj = new JSONObject(response.getBody());

        OAuthDTO oauthInfo = new OAuthDTO();
        oauthInfo.setAccessToken(jsonObj.getString("access_token"));
        oauthInfo.setRefreshToken(jsonObj.optString("refresh_token"));

        return oauthInfo;
    }

    private OAuthDTO fetchUserInfo(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);

        HttpEntity<?> httpEntity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                kakaoUserInfoUri,
                HttpMethod.GET,
                httpEntity,
                String.class
        );

        JSONObject jsonObj = new JSONObject(response.getBody());
        JSONObject account = jsonObj.getJSONObject("kakao_account");

        OAuthDTO oauthInfo = new OAuthDTO();
        oauthInfo.setProvider("kakao");
        oauthInfo.setProviderId(String.valueOf(jsonObj.getLong("id")));
        oauthInfo.setUserName(account.optJSONObject("profile").optString("nickname"));
        oauthInfo.setUserEmail(account.optString("email"));
        oauthInfo.setAccessToken(accessToken);

        return oauthInfo;
    }
}