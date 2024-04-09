package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class EmployeesExperience {

    private int id;

    private String post;

    private String responsibilities; //Обязанности

    private String company;

    @JsonIgnore
    private List<PersonalData> personalDataList;

    public EmployeesExperience() {
    }

    public EmployeesExperience(String post, String responsibilities, String company) {
        this.post = post;
        this.responsibilities = responsibilities;
        this.company = company;
    }
}