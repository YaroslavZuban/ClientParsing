package com.example.clientparsing.entity;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

@Getter
@Setter
public class PersonalData {

    private int id;

    private String name;

    private String title;

    private Integer wages;

    private Habitation habitation;

    private Gender gender;

    private Date birthData;

    private Information information;

    private List<EmployeesExperience> experienceList;

    private List<WorkSchedule> workSchedule;

    private List<Specification> specifications;

    private List<CitizenshipType> citizenshipType;

    public PersonalData() {
    }

    public PersonalData(String name, String title, Integer wages, Date birthData) {
        this.name = name;
        this.title = title;
        this.wages = wages;
        this.birthData = birthData;
    }
}
