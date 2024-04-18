package com.example.clientparsing.client;

import com.example.clientparsing.entity.PersonDataDto;
import com.example.clientparsing.entity.PersonalData;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class RestClientResumeRestClient implements ResumeRestClient {
    private final RestClient restClient;

    private static final ParameterizedTypeReference<List<PersonDataDto>> RESUME_TYPE_REFERENCE =
            new ParameterizedTypeReference<>() {
            };

    @Override
    public List<PersonDataDto> findAllResumeDto(String cityResidence,
                                                Integer wages,
                                                String foreignLanguage,
                                                String foreignLanguageLevel,
                                                List<String> educations,// +
                                                String gender,
                                                List<String> workSchedules,
                                                List<String> rightsCategory,
                                                List<String> businessTrips,// +
                                                String educationalInstitution,
                                                String specialization,
                                                Integer graduationYear,
                                                List<String> skills,
                                                List<String> citizenship,
                                                String educationLevel,
                                                int pageNumber) {
        return this.restClient
                .get()
                .uri("http://localhost:8081/resume-api/resume?" +
                                "cityResidence={cityResidence}&" +
                                "wages={wages}&" +
                                "foreignLanguage={foreignLanguage}&" +
                                "foreignLanguageLevel={foreignLanguageLevel}&" +
                                "educations={educations}&" +
                                "gender={gender}&" +
                                "workSchedules={workSchedules}&" +
                                "rightsCategory={rightsCategory}&" +
                                "businessTrips={businessTrips}&" +
                                "educationalInstitution={educationalInstitution}&" +
                                "specialization={specialization}&" +
                                "graduationYear={graduationYear}&" +
                                "skills={skills}&" +
                                "citizenship={citizenship}&" +
                                "educationLevel={educationLevel}&" +
                                "pageNumber={pageNumber}",
                        cityResidence,
                        wages,
                        foreignLanguage,
                        foreignLanguageLevel,
                        lineJoin(educations),
                        gender,
                        lineJoin(workSchedules),
                        lineJoin(rightsCategory),
                        lineJoin(businessTrips),
                        educationalInstitution,
                        specialization,
                        graduationYear,
                        lineJoin(skills),
                        lineJoin(citizenship),
                        educationLevel,
                        pageNumber)
                .retrieve()
                .body(RESUME_TYPE_REFERENCE);
    }

    private String lineJoin(List<String> list){
        if(list!=null){
            return String.join(",",list);
        }

        return null;
    }

    @Override
    public Optional<PersonalData> findPersonData(int resumeId) {
        try {
            return Optional.ofNullable(this.restClient.get()
                    .uri("http://localhost:8081/resume-api/resume/{resumeId}", resumeId)
                    .retrieve()
                    .body(PersonalData.class));
        } catch (HttpClientErrorException.NotFound exception) {
            return Optional.empty();
        }
    }
}