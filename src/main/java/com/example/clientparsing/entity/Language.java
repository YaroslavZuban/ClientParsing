package com.example.clientparsing.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Language {

    private int id;

    private String name;

    public Language() {
    }

    public Language(String name) {
        this.name = name;
    }
}