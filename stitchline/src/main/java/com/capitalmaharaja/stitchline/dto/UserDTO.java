package com.capitalmaharaja.stitchline.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {

        private String name;
        private String address;
        private String nic;
        private String employeeId;
        private String email;
        private String mobile;
        private String userName;
        private String password;
        private String type;
}

