package com.capitalmaharaja.stitchline.service.impl;

import com.capitalmaharaja.stitchline.dto.UserDTO;
import com.capitalmaharaja.stitchline.entity.User;
import com.capitalmaharaja.stitchline.exception.ValidateException;
import com.capitalmaharaja.stitchline.repo.UserRepo;
import com.capitalmaharaja.stitchline.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void addUser(UserDTO dto) {
        if (userRepo.existsById(dto.getEmail())) {
            throw new ValidateException("Email Already Exist");
        }
        userRepo.save(mapper.map(dto, User.class));
    }

    @Override
    public UserDTO userSignIn(String userName, String password) {
        Optional<User> user = userRepo.findUserByUserNameAndPassword(userName, password);

        if (user.isPresent()) {
                return mapper.map(user.get(), UserDTO.class);
        }
        throw new ValidateException("Incorrect UserName or Password");
    }


}
