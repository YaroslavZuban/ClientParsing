package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class CitizenshipType {

    private int id;

    private String name;

    @JsonIgnore
    private List<PersonalData> personalDataList;

    public CitizenshipType() {
    }

    public CitizenshipType(String name) {
        this.name = name;
    }
}