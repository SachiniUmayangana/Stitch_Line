package com.capitalmaharaja.stitchline.controller;

import com.capitalmaharaja.stitchline.dto.UserDTO;
import com.capitalmaharaja.stitchline.exception.NotFoundException;
import com.capitalmaharaja.stitchline.entity.User;
import com.capitalmaharaja.stitchline.repo.UserRepo;
import com.capitalmaharaja.stitchline.service.UserService;
import com.capitalmaharaja.stitchline.util.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")

public class UserController {

    @Autowired
    private UserService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addUser(@RequestBody UserDTO dto) {
        if (dto.getEmail().trim().length() <= 0) {
            throw new NotFoundException("Email cannot be empty");
        }
        service.addUser(dto);
        return new ResponseEntity(new StandradResponse("201", "Done", dto), HttpStatus.CREATED);
    }

    @GetMapping(path = "/signIn/{userName}/{password}")
    public ResponseEntity customerSignIn(@PathVariable String userName, @PathVariable String password) {
        UserDTO user = service.userSignIn(userName,password);

        return new ResponseEntity(new StandradResponse("200", "success", user), HttpStatus.OK);

    }
}
