package com.vincentppmt.app.DAO;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.vincentppmt.app.entities.Project;
import com.vincentppmt.app.entities.ProjectTask;

public interface ProjectTaskDAO extends CrudRepository<ProjectTask, Integer> {
	List<ProjectTask> findByProject(Project project);
	ProjectTask getById(Integer id);
}
