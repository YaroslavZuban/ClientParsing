package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;


@Getter
@Setter
@ToString
public class EducationType {

    private int id;

    private String educationLevel;

    @JsonIgnore
    private List<Specification> specification;

    public EducationType() {
    }

    public EducationType(String educationLevel) {
        this.educationLevel = educationLevel;
    }

}