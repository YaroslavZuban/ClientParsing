package com.example.clientparsing.client;

import com.example.clientparsing.entity.PersonDataDto;
import com.example.clientparsing.entity.PersonalData;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

public interface ResumeRestClient {
    List<PersonDataDto> findAllResumeDto(String cityResidence,
                                         Integer wages,
                                         String foreignLanguage,
                                         String foreignLanguageLevel,
                                         List<String> educations,
                                         String gender,
                                         List<String> workSchedules,
                                         List<String> rightsCategory,
                                         List<String> businessTrips,
                                         String educationalInstitution,
                                         String specialization,
                                         Integer graduationYear,
                                         List<String> skills,
                                         List<String> citizenship,
                                         String educationLevel,
                                         int pageNumber);

    Optional<PersonalData> findPersonData(int resumeId);
}
