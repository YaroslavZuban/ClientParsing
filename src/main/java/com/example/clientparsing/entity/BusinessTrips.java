package com.example.clientparsing.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class BusinessTrips {

    private int id;

    private String readiness;

    @JsonIgnore
    private List<Information> informationList;

    public BusinessTrips() {
    }

    public BusinessTrips(String readiness) {
        this.readiness = readiness;
    }
}