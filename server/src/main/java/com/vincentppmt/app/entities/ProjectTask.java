package com.vincentppmt.app.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class ProjectTask implements Comparable<ProjectTask> {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotBlank(message = "Summary is required")
	private String summary;
	
	@NotBlank(message = "Criteria is required")
	private String criteria;
	
	@NotBlank(message = "Priority is required")
	private String priority;
	
	@NotBlank(message = "Status is required")
	private String status;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@NotNull(message = "Due date is required")
	private Date due;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Project project;
	
	protected ProjectTask() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public String getCriteria() {
		return criteria;
	}

	public void setCriteria(String criteria) {
		this.criteria = criteria;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDue() {
		return due;
	}

	public void setDue(Date due) {
		this.due = due;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}
	
	@Override
	public int compareTo(ProjectTask o) {
		if (this.due.before(o.getDue())) {
			return -1;
		} else if (this.due.after(o.getDue())) {
			return 1;
		} else {
			return 0;
		}
	}
}
