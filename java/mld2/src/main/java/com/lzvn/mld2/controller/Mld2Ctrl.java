package com.lzvn.mld2.controller;

import org.springframework.web.bind.annotation.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import com.lzvn.mld2.service.Resources;



@RestController
@RequestMapping


public class Mld2Ctrl {

    @GetMapping("/")
    public String frontPage() throws Exception{
        return Resources.getMainPage();
    }

    @GetMapping("/search")
    public String searchPage(@RequestParam String param, @RequestParam String q) throws Exception {
        return Resources.getSearchPage(param, q);
    }
}