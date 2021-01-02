package com.vincentppmt.app.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vincentppmt.app.DAO.UserDAO;
import com.vincentppmt.app.entities.User;
import com.vincentppmt.app.exceptions.SingleException;

@Service
public class UserService {
	
	@Autowired
	private UserDAO userDAO;
	
	public Integer createUser(User newUser) {
		try {
			newUser.setPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt()));
			userDAO.save(newUser);
			return newUser.getId();
		} catch (Exception e) {
			throw new SingleException("User Already Exists");
		}
	}
	
	public User findUserByEmail(String email) {
		return userDAO.findByEmail(email);
	}
	
	public User findUserById(Integer id) {
		return userDAO.getById(id);
	}
}
