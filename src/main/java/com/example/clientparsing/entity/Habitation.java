package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class Habitation {

    private int id;

    private String city;

    @JsonIgnore
    private List<PersonalData> personalData;

    public Habitation() {
    }

    public Habitation(String city) {
        this.city = city;
    }
}