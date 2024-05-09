package com.example.clientparsing.client;

import com.aspose.cells.Workbook;
import com.example.clientparsing.entity.WorkSchedule;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
public class AnalyticsFileRestClientImpl implements AnalyticsFileRestClient {
    private final RestClient restClient;

    private static final ParameterizedTypeReference<Workbook> INFO_TYPE_REFERENCE =
            new ParameterizedTypeReference<>() {
            };

    @Override
    public Workbook getSkillsUniversity(String university, List<String> skills) {
        return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/analytics-file/skills-university?" +
                                "university=university&" +
                                "skills=skills",
                        university,
                        skills)
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public Workbook getSkillsSpecialties(String university, String specialties, List<String> skills) {
        return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/analytics-file/skills-specialties?" +
                                "university=university&" +
                                "specialties=specialties&" +
                                "skills=skills",
                        university,
                        specialties,
                        skills)
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

    @Override
    public Workbook getSkillsSpecialtiesYear(String university, String specialties, Integer year, List<String> skills) {
        return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/analytics-file/skills-specialties-year?" +
                                "university=university&" +
                                "specialties=specialties&" +
                                "year=year&" +
                                "skills=skills",
                        university,
                        specialties,
                        year,
                        skills)
                .retrieve()
                .body(INFO_TYPE_REFERENCE);
    }

}
