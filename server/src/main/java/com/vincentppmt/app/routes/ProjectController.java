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
import com.vincentppmt.app.entities.Project;
import com.vincentppmt.app.responses.DeletedResponse;
import com.vincentppmt.app.services.ProjectService;
import com.vincentppmt.app.services.ValidationService;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
	
	@Autowired
	private ValidationService validateService;
	
	@Autowired
	private JWTAuth auth;
	
	@Autowired
	private ProjectService projectService;
	
	@PostMapping("")
	public ResponseEntity<Project> createProject(@RequestHeader("x-auth-token") String token, 
			                                     @Valid @RequestBody Project project, BindingResult result) {
		Integer userId = auth.authenticate(token);
		validateService.validateInput(result);
		projectService.createProject(project, userId);
		return new ResponseEntity<Project>(project, HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<List<Project>> getAllProjects(@RequestHeader("x-auth-token") String token) {
		Integer userId = auth.authenticate(token);
		List<Project> projects = projectService.findAllProjects(userId);
		return new ResponseEntity<List<Project>>(projects, HttpStatus.OK);
	}
	
	@GetMapping("/{projectId}")
	public ResponseEntity<Project> getProject(@RequestHeader("x-auth-token") String token, @PathVariable String projectId) {
		Integer userId = auth.authenticate(token);
		Integer verifiedProjectId = validateService.validateIntegerParam(projectId);
		Project project = projectService.findProject(userId, verifiedProjectId);
		return new ResponseEntity<Project>(project, HttpStatus.OK);
	}
	
	@PatchMapping("/{projectId}")
	public ResponseEntity<Project> updateProject(@RequestHeader("x-auth-token") String token, @PathVariable String projectId,
												 @Valid @RequestBody Project project, BindingResult result) {
		Integer userId = auth.authenticate(token);
		Integer verifiedProjectId = validateService.validateIntegerParam(projectId);
		validateService.validateInput(result);
		projectService.updateProject(project, userId, verifiedProjectId);
		return new ResponseEntity<Project>(project, HttpStatus.OK);
	}
	
	@DeleteMapping("/{projectId}")
	public ResponseEntity<DeletedResponse> deleteProject(@RequestHeader("x-auth-token") String token, @PathVariable String projectId) {
		Integer userId = auth.authenticate(token);
		Integer verifiedProjectId = validateService.validateIntegerParam(projectId);
		projectService.deleteProject(userId, verifiedProjectId);
		return new ResponseEntity<DeletedResponse>(new DeletedResponse(), HttpStatus.OK);
	}
}
