package com.vincentppmt.app.DAO;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.vincentppmt.app.entities.AppUser;
import com.vincentppmt.app.entities.Project;

public interface ProjectDAO extends CrudRepository<Project, Integer> {
	List<Project> findByUser(AppUser user);
	Project getById(Integer id);
}
