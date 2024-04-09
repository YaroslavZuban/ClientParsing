package com.example.clientparsing.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LicenceCategory {

    private int id;

    private String category;

    public LicenceCategory() {
    }

    public LicenceCategory(String category) {
        this.category = category;
    }
}