package com.vincentppmt.app.routes;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vincentppmt.app.auth.JWTAuth;
import com.vincentppmt.app.entities.ProjectTask;
import com.vincentppmt.app.responses.DeletedResponse;
import com.vincentppmt.app.services.ProjectTaskService;
import com.vincentppmt.app.services.ValidationService;

@RestController
@RequestMapping("/api/projectTasks")
public class ProjectTaskController {
	
	@Autowired
	private ValidationService validateService;
	
	@Autowired
	private JWTAuth auth;
	
	@Autowired
	private ProjectTaskService projectTaskService;
	
	@PostMapping("/{projectId}")
	public ResponseEntity<ProjectTask> createProjectTask(@RequestHeader("x-auth-token") String token, 
						  								 @PathVariable String projectId,
            											 @Valid @RequestBody ProjectTask projectTask, BindingResult result) {
		Integer userId = auth.authenticate(token);
		Integer verifiedProjectId = validateService.validateIntegerParam(projectId);
		validateService.validateInput(result);
		projectTaskService.createProjectTask(projectTask, userId, verifiedProjectId);
		return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
	}
	
	@GetMapping("/{projectId}")
	public ResponseEntity<List<ProjectTask>> getAllProjectTasks(@RequestHeader("x-auth-token") String token, @PathVariable String projectId) {
		Integer userId = auth.authenticate(token);
		Integer verifiedProjectId = validateService.validateIntegerParam(projectId);
		List<ProjectTask> projectTasks = projectTaskService.findAllProjectTasks(userId, verifiedProjectId);
		return new ResponseEntity<List<ProjectTask>>(projectTasks, HttpStatus.OK);
	}
	
	@GetMapping("/{projectId}/{projectTaskId}")
	public ResponseEntity<ProjectTask> getProjectTask(@RequestHeader("x-auth-token") String token, @PathVariable String projectId,
													  @PathVariable String projectTaskId) {
		Integer userId = auth.authenticate(token);
		Integer verifiedProjectId = validateService.validateIntegerParam(projectId);
		Integer verifiedProjectTaskId = validateService.validateIntegerParam(projectTaskId);
		ProjectTask projectTask = projectTaskService.findProjectTask(userId, verifiedProjectId, verifiedProjectTaskId);
		return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
	}
	
	@PatchMapping("/{projectId}/{projectTaskId}")
	public ResponseEntity<ProjectTask> updateProjectTask(@RequestHeader("x-auth-token") String token, @PathVariable String projectId,
													     @PathVariable String projectTaskId,
													     @Valid @RequestBody ProjectTask projectTask, BindingResult result) {
		Integer userId = auth.authenticate(token);
		Integer verifiedProjectId = validateService.validateIntegerParam(projectId);
		Integer verifiedProjectTaskId = validateService.validateIntegerParam(projectTaskId);
		validateService.validateInput(result);
		projectTaskService.updateProjectTask(projectTask, userId, verifiedProjectId, verifiedProjectTaskId);
		return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
	}
	
	@DeleteMapping("/{projectId}/{projectTaskId}")
	public ResponseEntity<DeletedResponse> deleteProjectTask(@RequestHeader("x-auth-token") String token, @PathVariable String projectId,
		     	 											 @PathVariable String projectTaskId) {
		Integer userId = auth.authenticate(token);
		Integer verifiedProjectId = validateService.validateIntegerParam(projectId);
		Integer verifiedProjectTaskId = validateService.validateIntegerParam(projectTaskId);
		projectTaskService.deleteProjectTask(userId, verifiedProjectId, verifiedProjectTaskId);
		return new ResponseEntity<DeletedResponse>(new DeletedResponse(), HttpStatus.OK);
	}
}
