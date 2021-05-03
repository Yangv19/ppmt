package com.vincentppmt.app.services;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vincentppmt.app.DAO.ProjectDAO;
import com.vincentppmt.app.entities.Project;
import com.vincentppmt.app.entities.AppUser;
import com.vincentppmt.app.exceptions.SingleException;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectDAO projectDAO;
	
	@Autowired
	private UserService userService;
	
	public void validProjectId(Integer userId, Integer projectId) {
		AppUser user = userService.findUserById(userId);
		Project project = projectDAO.getById(projectId);
		
		if (project == null) {
			throw new SingleException("Project Not Found");
		}
		
		if (project.getUser().getId() != user.getId()) {
			throw new SingleException("Project Not Found");
		}
	}
	
	public void createProject(Project newProject, Integer userId) {
		AppUser user = userService.findUserById(userId);
		newProject.setUser(user);
		projectDAO.save(newProject);
	}
	
	public List<Project> findAllProjects(Integer userId) {
		AppUser user = userService.findUserById(userId);
		List<Project> projects = projectDAO.findByUser(user);
		Collections.sort(projects); 
		return projects;
	}
	
	public Project findProject(Integer userId, Integer projectId) {
		validProjectId(userId, projectId);
		return projectDAO.getById(projectId); 
	}
	
	public void updateProject(Project newProject, Integer userId, Integer projectId) {
		validProjectId(userId, projectId);
		newProject.setId(projectId);
		newProject.setUser(userService.findUserById(userId));
		projectDAO.save(newProject);
	}
	
	public void deleteProject(Integer userId, Integer projectId) {
		validProjectId(userId, projectId);
		projectDAO.deleteById(projectId);
	}
}
