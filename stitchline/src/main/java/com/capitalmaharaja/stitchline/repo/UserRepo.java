package com.capitalmaharaja.stitchline.repo;

import com.capitalmaharaja.stitchline.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends MongoRepository <User,String>{
    Optional<User> findUserByUserNameAndPassword(String userName, String password);
}
