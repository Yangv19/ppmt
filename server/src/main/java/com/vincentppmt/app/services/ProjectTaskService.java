package com.vincentppmt.app.services;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vincentppmt.app.DAO.ProjectTaskDAO;
import com.vincentppmt.app.entities.Project;
import com.vincentppmt.app.entities.ProjectTask;
import com.vincentppmt.app.exceptions.SingleException;

@Service
public class ProjectTaskService {

	@Autowired
	private ProjectTaskDAO projectTaskDAO;
	
	@Autowired
	private ProjectService projectService;
	
	public void validProjectTaskId(Integer userId, Integer projectId, Integer projectTaskId) {
		Project project = projectService.findProject(userId, projectId);
		ProjectTask projectTask = projectTaskDAO.getById(projectTaskId);
		
		if (projectTask == null) {
			throw new SingleException("Project Task Not Found");
		}
		
		if (projectTask.getProject().getId() != project.getId()) {
			throw new SingleException("Project Task Not Found");
		}
	}
	
	public void createProjectTask(ProjectTask newProjectTask, Integer userId, Integer projectId) {
		projectService.validProjectId(userId, projectId);
		Project project = projectService.findProject(userId, projectId);
		newProjectTask.setProject(project);
		projectTaskDAO.save(newProjectTask);
	}
	
	public List<ProjectTask> findAllProjectTasks(Integer userId, Integer projectId) {
		projectService.validProjectId(userId, projectId);
		Project project = projectService.findProject(userId, projectId);		
		List<ProjectTask> projectTasks = projectTaskDAO.findByProject(project);
		Collections.sort(projectTasks); 
		return projectTasks;
	}
	
	public ProjectTask findProjectTask(Integer userId, Integer projectId, Integer projectTaskId) {
		validProjectTaskId(userId, projectId, projectTaskId);
		return projectTaskDAO.getById(projectTaskId);
	}
	
	public void updateProjectTask(ProjectTask newProjectTask, Integer userId, Integer projectId, Integer projectTaskId) {
		validProjectTaskId(userId, projectId, projectTaskId);
		newProjectTask.setId(projectTaskId);
		newProjectTask.setProject(projectService.findProject(userId, projectId));
		projectTaskDAO.save(newProjectTask);
	}
	
	public void deleteProjectTask(Integer userId, Integer projectId, Integer projectTaskId) {
		validProjectTaskId(userId, projectId, projectTaskId);
		projectTaskDAO.deleteById(projectTaskId);
	}
}
