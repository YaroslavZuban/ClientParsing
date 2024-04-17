package com.example.clientparsing.client;

import com.example.clientparsing.entity.PersonDataDto;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.client.RestClient;

import java.util.List;

@RequiredArgsConstructor
public class DataRestClientImpl implements DataRestClient {
    private final RestClient restClient;

    private static final ParameterizedTypeReference<List<String>> INFO_TYPE_REFERENCE =
            new ParameterizedTypeReference<>() {
            };

    @Override
    public List<String> getLanguageAll() {
        return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/data/language")
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public List<String> getLanguageLevel() {
         return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/data/language-level")
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public List<String> getCityAll() {
         return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/data/city")
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public List<String> getWortTypeAll() {
         return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/data/work-type")
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public List<String> getLicenceCategoryAll() {
         return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/data/licence-category")
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public List<String> getGenderAll() {
         return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/data/gender")
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public List<String> getEducationLevelAll() {
         return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/data/education-level")
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public List<String> getCitizenshipAll() {
         return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/data/citizenship")
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }
}
