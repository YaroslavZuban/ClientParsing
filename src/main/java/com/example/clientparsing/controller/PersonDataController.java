package com.example.clientparsing.controller;

import com.example.clientparsing.client.DataRestClient;
import com.example.clientparsing.client.ResumeRestClient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("fpmi/resume")
public class PersonDataController {
    private final ResumeRestClient restClient;
    private final DataRestClient dataRestClient;

    @GetMapping("list")
    public String getResumesList(Model model,
                                 @RequestParam(value = "cityResidence", required = false) String cityResidence,
                                 @RequestParam(value = "wages", required = false) Integer wages,
                                 @RequestParam(value = "foreignLanguage", required = false) String foreignLanguage,
                                 @RequestParam(value = "foreignLanguageLevel", required = false) String foreignLanguageLevel,
                                 @RequestParam(value = "educations", required = false) List<String> educations,
                                 @RequestParam(value = "gender", required = false) String gender,
                                 @RequestParam(value = "workSchedules", required = false) List<String> workSchedules,
                                 @RequestParam(value = "rightsCategory", required = false) List<String> rightsCategory,
                                 @RequestParam(value = "businessTrips", required = false) List<String> businessTrips,
                                 @RequestParam(value = "educationalInstitution", required = false) String educationalInstitution,
                                 @RequestParam(value = "specialization", required = false) String specialization,
                                 @RequestParam(value = "graduationYear", required = false) Integer graduationYear,
                                 @RequestParam(value = "skills", required = false) List<String> skills,
                                 @RequestParam(value = "citizenship", required = false) List<String> citizenship,
                                 @RequestParam(value = "educationLevel", required = false) String educationLevel,
                                 @RequestParam(defaultValue = "1", required = false) int pageNumber) {
        model.addAttribute("resumes", this.restClient.findAllResumeDto(
                cityResidence,
                wages,
                foreignLanguage,
                foreignLanguageLevel,
                educations,
                gender,
                workSchedules,
                rightsCategory,
                businessTrips,
                educationalInstitution,
                specialization,
                graduationYear,
                skills,
                citizenship,
                educationLevel,
                pageNumber
        ));

        model.addAttribute("cityResidence", cityResidence);
        model.addAttribute("wages", wages);
        model.addAttribute("foreignLanguage", foreignLanguage);
        model.addAttribute("foreignLanguageLevel", foreignLanguageLevel);
        model.addAttribute("educations", educations);
        model.addAttribute("gender", gender);
        model.addAttribute("workSchedules", workSchedules);
        model.addAttribute("rightsCategory", rightsCategory);
        model.addAttribute("businessTrips", businessTrips);
        model.addAttribute("educationalInstitution", educationalInstitution);
        model.addAttribute("specialization", specialization);
        model.addAttribute("graduationYear", graduationYear);
        model.addAttribute("skills", skills);
        model.addAttribute("workSchedules", workSchedules);
        model.addAttribute("citizenship", citizenship);
        model.addAttribute("educationLevel", educationLevel);
        model.addAttribute("pageNumber", pageNumber);

        // Данные фильтры
        model.addAttribute("city", dataRestClient.getCityAll());
        model.addAttribute("foreign_language", dataRestClient.getLanguageAll());
        model.addAttribute("language_level", dataRestClient.getLanguageLevel());
        model.addAttribute("education", dataRestClient.getEducationLevelAll());
        model.addAttribute("schedule_work", dataRestClient.getWortTypeAll());
        model.addAttribute("rights_category", dataRestClient.getLicenceCategoryAll());
        model.addAttribute("floor", dataRestClient.getGenderAll());

        return "fpmi/resume/list";
    }

    @GetMapping("/{resumeId:\\d+}")
    public String getResume() {
        return null;
    }
}
