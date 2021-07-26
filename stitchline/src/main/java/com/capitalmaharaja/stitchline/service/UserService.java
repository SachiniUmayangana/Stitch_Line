package com.capitalmaharaja.stitchline.service;

import com.capitalmaharaja.stitchline.dto.UserDTO;

public interface UserService {
    void addUser(UserDTO dto);
    UserDTO userSignIn(String userName, String password);

}
