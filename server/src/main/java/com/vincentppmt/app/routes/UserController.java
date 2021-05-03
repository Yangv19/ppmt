package com.vincentppmt.app.routes;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vincentppmt.app.auth.JWTAuth;
import com.vincentppmt.app.entities.AppUser;
import com.vincentppmt.app.requests.LoginRequest;
import com.vincentppmt.app.responses.TokenResponse;
import com.vincentppmt.app.services.UserService;
import com.vincentppmt.app.services.ValidationService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	@Autowired
	private ValidationService validateService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private JWTAuth auth;
	
	@PostMapping("/register")
	public ResponseEntity<TokenResponse> register(@Valid @RequestBody AppUser user, BindingResult result) {
		validateService.validateInput(result);
		Integer id = userService.createUser(user);
		String token = auth.register(id);
		return new ResponseEntity<TokenResponse>(new TokenResponse(token), HttpStatus.OK);
	}
	
	@PostMapping("/login")
	public ResponseEntity<TokenResponse> login(@Valid @RequestBody LoginRequest login, BindingResult result) {
		validateService.validateInput(result);
		String token = auth.login(login);
		return new ResponseEntity<TokenResponse>(new TokenResponse(token), HttpStatus.OK);
	}
	
	@GetMapping("")
	public ResponseEntity<AppUser> getUser(@RequestHeader("x-auth-token") String token) {
		Integer id = auth.authenticate(token);
		AppUser user = userService.findUserById(id);
		return new ResponseEntity<AppUser>(user, HttpStatus.OK);
	}
}
