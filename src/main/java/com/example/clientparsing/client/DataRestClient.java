package com.example.clientparsing.client;

import java.util.List;

public interface DataRestClient {
    List<String> getLanguageAll();

    List<String> getLanguageLevel();

    List<String> getCityAll();

    List<String> getWortTypeAll();

    List<String> getLicenceCategoryAll();

    List<String> getGenderAll();

    List<String> getEducationLevelAll();

    List<String> getCitizenshipAll();
}