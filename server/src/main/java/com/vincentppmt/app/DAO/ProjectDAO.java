package com.vincentppmt.app.DAO;

import org.springframework.data.repository.CrudRepository;

import com.vincentppmt.app.entities.Project;
import com.vincentppmt.app.entities.User;

public interface ProjectDAO extends CrudRepository<Project, Integer> {
	Iterable<Project> findByUser(User user);
	Project getById(Integer id);
}
