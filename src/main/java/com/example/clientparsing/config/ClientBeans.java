package com.example.clientparsing.config;

import com.example.clientparsing.client.DataRestClientImpl;
import com.example.clientparsing.client.RestClientResumeRestClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class ClientBeans {
    @Bean
    public RestClientResumeRestClient resumeRestClient() {
        return new RestClientResumeRestClient(RestClient.builder()
                .baseUrl("http://localhost:8081")
                .build());
    }

    @Bean
    public DataRestClientImpl dataRestClient() {
        return new DataRestClientImpl(RestClient.builder()
                .baseUrl("http://localhost:8081")
                .build());
    }
}
