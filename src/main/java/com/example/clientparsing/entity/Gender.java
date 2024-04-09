package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class Gender {

    private int id;

    private String type;

    @JsonIgnore
    private List<PersonalData> personalDataList;

    public Gender() {
    }

    public Gender(String type) {
        this.type = type;
    }
}