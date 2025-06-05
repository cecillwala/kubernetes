package com.example.k8s_backend.controllers;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin( origins = "*")
public class Controller{
    @GetMapping("/")
    public String hello(){
        return "Backend is running";
    }

    @PostMapping("/search")
    public String search(){
        return "We don't have a database 🤡";
    }

    @PostMapping("/lucky")
    public String lucky(){
        return "C'mon, you're not that lucky😂";
    }
}
