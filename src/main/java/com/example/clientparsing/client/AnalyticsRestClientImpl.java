package com.example.clientparsing.client;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
public class AnalyticsRestClientImpl implements AnalyticsRestClient {
    private RestClient restClient;

    private static final ParameterizedTypeReference<Map<String,Integer>> INFO_TYPE_REFERENCE =
            new ParameterizedTypeReference<>() {
            };

    @Override
    public Map<String, Integer> getSkillsUniversity() {
        return null;
    }

    @Override
    public Map<String, Integer> getSkillsSpecialties() {
        return null;
    }

    @Override
    public Map<String, Integer> getSkillsSpecialtiesYear() {
        return null;
    }

    @Override
    public Map<String, Integer> getWorkSchedule() {
        return null;
    }

    @Override
    public Map<String, Integer> getForeignLanguage() {
        return null;
    }

    @Override
    public Map<String, Integer> getForeignLanguageLevel() {
        return null;
    }
}
