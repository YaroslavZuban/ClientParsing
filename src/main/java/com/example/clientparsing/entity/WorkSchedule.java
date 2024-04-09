package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class WorkSchedule {

    private int id;

    private String workType;

    @JsonIgnore
    private List<PersonalData> personalData;

    public WorkSchedule() {
    }

    public WorkSchedule(String workType) {
        this.workType = workType;
    }
}
