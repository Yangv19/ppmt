package com.vincentppmt.app.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vincentppmt.app.entities.AppUser;

@Repository
public interface UserDAO extends CrudRepository<AppUser, Integer>{
	AppUser findByEmail(String email);
	AppUser getById(Integer id);
}
