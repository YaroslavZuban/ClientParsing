package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Information {

    private int id;

    private String courses;

    private String skills;

    private String aboutMe;

    private List<Language> languages;

    private List<Level> levels;

    private BusinessTrips businessTrips;

    private List<LicenceCategory> categoryList;

    @JsonIgnore
    private List<PersonalData> personalDataList;

    public Information() {
    }

    public Information(String courses, String skills, String aboutMe) {
        this.courses = courses;
        this.skills = skills;
        this.aboutMe = aboutMe;
    }
}