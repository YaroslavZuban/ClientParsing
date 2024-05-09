package com.example.clientparsing.client;

import com.aspose.cells.Workbook;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;


public interface AnalyticsFileRestClient {
    Workbook getSkillsUniversity(String university, List<String> skills);

    Workbook getSkillsSpecialties(String university, String specialties, List<String> skills);

    Workbook getSkillsSpecialtiesYear(String university, String specialties, Integer year, List<String> skills);

}
