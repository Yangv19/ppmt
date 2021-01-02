package com.vincentppmt.app.DAO;

import org.springframework.data.repository.CrudRepository;

import com.vincentppmt.app.entities.Project;
import com.vincentppmt.app.entities.ProjectTask;

public interface ProjectTaskDAO extends CrudRepository<ProjectTask, Integer> {
	Iterable<ProjectTask> findByProject(Project project);
	ProjectTask getById(Integer id);
}
