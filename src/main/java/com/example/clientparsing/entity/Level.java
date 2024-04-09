package com.example.clientparsing.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Level {

    private int id;

    private String knowledgeLevel;

    public Level() {
    }

    public Level(String knowledgeLevel) {
        this.knowledgeLevel = knowledgeLevel;
    }
}
