package com.example.clientparsing.controller;

import com.aspose.cells.Workbook;
import com.example.clientparsing.client.AnalyticsFileRestClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("fpmi/resume/excel-download")
public class ExcelDownloadController {
    private final AnalyticsFileRestClient analyticsFileRestClient;

    @GetMapping("excel-skills-university")
    public Workbook getSkillsUniversity(@RequestParam("university") String university, @RequestParam("skills") List<String> skills) {
        return analyticsFileRestClient.getSkillsUniversity(university, skills);
    }

    @GetMapping("excel-skills-specialties")
    public Workbook getSkillsSpecialties(@RequestParam("university") String university,
                                         @RequestParam("specialties") String specialties,
                                         @RequestParam("skills") List<String> skills) {
        return analyticsFileRestClient.getSkillsSpecialties(university, specialties, skills);
    }

    @GetMapping("excel-skills-specialties-year")
    public Workbook getSkillsSpecialtiesYear(@RequestParam("university") String university, @RequestParam("specialties") String specialties,
                                             @RequestParam("skills") List<String> skills, @RequestParam("year") Integer year) {
        return analyticsFileRestClient.getSkillsSpecialtiesYear(university, specialties, year, skills);
    }
}
