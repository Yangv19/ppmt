package com.vincentppmt.app.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vincentppmt.app.DAO.UserDAO;
import com.vincentppmt.app.entities.AppUser;
import com.vincentppmt.app.exceptions.SingleException;

@Service
public class UserService {
	
	@Autowired
	private UserDAO userDAO;
	
	public Integer createUser(AppUser newUser) {
		try {
			newUser.setPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt()));
			userDAO.save(newUser);
			return newUser.getId();
		} catch (Exception e) {
			throw new SingleException("User Already Exists");
		}
	}
	
	public AppUser findUserByEmail(String email) {
		return userDAO.findByEmail(email);
	}
	
	public AppUser findUserById(Integer id) {
		return userDAO.getById(id);
	}
}
