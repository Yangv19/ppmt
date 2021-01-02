package com.vincentppmt.app.DAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.vincentppmt.app.entities.User;

@Repository
public interface UserDAO extends CrudRepository<User, Integer>{
	User findByEmail(String email);
	User getById(Integer id);
}
