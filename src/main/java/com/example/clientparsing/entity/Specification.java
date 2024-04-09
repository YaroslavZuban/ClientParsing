package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class Specification {

    private int id;

    private int ending;

    private String educationalInstitution;

    private String direction;

    private EducationType educationType;

    @JsonIgnore
    private List<PersonalData> personalData;

    public Specification() {
    }

    public Specification(int ending, String educationalInstitution, String direction, EducationType educationType) {
        this.ending = ending;
        this.educationalInstitution = educationalInstitution;
        this.direction = direction;
        this.educationType = educationType;
    }
}