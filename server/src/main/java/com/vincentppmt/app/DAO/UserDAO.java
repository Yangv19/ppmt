package com.vincentppmt.app.DAO;

import org.springframework.data.repository.CrudRepository;

import com.vincentppmt.app.entities.AppUser;

public interface UserDAO extends CrudRepository<AppUser, Integer>{
	AppUser findByEmail(String email);
	AppUser getById(Integer id);
}
