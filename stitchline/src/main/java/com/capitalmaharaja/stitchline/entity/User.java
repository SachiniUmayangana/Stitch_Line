package com.capitalmaharaja.stitchline.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "User")
public class User {

    private String name;
    private String address;
    private String nic;
    private String employeeId;
    private String email;
    private String mobile;
    @Id
    private String userName;
    private String password;
    private String type;
}
