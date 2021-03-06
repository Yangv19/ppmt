package com.vincentppmt.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Project implements Comparable<Project> {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank(message = "Name is required")
	private String name;
	
	@NotBlank(message = "Description is required")
	private String description;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotNull(message = "Start date is required")
	private LocalDate begin;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotNull(message = "End date is required")
	private LocalDate end;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private AppUser user;
	
	@OneToMany(cascade = CascadeType.REFRESH, mappedBy = "project", orphanRemoval = true)
	@JsonIgnore
	private List<ProjectTask> projectTasks = new ArrayList<>();
	
	protected Project () {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public LocalDate getBegin() {
		return begin;
	}

	public void setBegin(LocalDate start) {
		this.begin = start;
	}

	public LocalDate getEnd() {
		return end;
	}

	public void setEnd(LocalDate end) {
		this.end = end;
	}

	public AppUser getUser() {
		return user;
	}

	public void setUser(AppUser user) {
		this.user = user;
	}

	public List<ProjectTask> getProjectTasks() {
		return projectTasks;
	}

	public void setProjectTasks(List<ProjectTask> projectTasks) {
		this.projectTasks = projectTasks;
	}

	@Override
	public int compareTo(Project o) {
		return this.end.compareTo(o.getEnd());
	}
}
