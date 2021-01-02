package com.vincentppmt.app.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.vincentppmt.app.exceptions.MultipleException;
import com.vincentppmt.app.exceptions.SingleException;

@Service
public class ValidationService {
	
	public void validateInput(BindingResult result) {
		if (result.hasErrors()) {
			List<String> errors = new ArrayList<String>();
			
			for (FieldError error : result.getFieldErrors()) {
				errors.add(error.getDefaultMessage());
			}
			
			throw new MultipleException(errors);
		}
	}
	
	public Integer validateIntegerParam(String param) {
		try {
			return Integer.parseInt(param);
		} catch (Exception e) {
			throw new SingleException("Invalid parameter");
		}
	}
}
