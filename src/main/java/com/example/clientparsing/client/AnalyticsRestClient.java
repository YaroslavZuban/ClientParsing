package com.example.clientparsing.client;

import java.util.Map;

public interface AnalyticsRestClient {
    Map<String, Integer> getSkillsUniversity();

    Map<String, Integer> getSkillsSpecialties();

    Map<String, Integer> getSkillsSpecialtiesYear();

    Map<String, Integer> getWorkSchedule();

    Map<String, Integer> getForeignLanguage();

    Map<String, Integer> getForeignLanguageLevel();
}
