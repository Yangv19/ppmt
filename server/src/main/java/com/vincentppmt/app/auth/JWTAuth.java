package com.vincentppmt.app.auth;

import static com.vincentppmt.app.auth.Constants.EXPIRATION_TIME;
import static com.vincentppmt.app.auth.Constants.SECRET_TOKEN;

import java.nio.charset.StandardCharsets;
import java.util.Date;

import javax.crypto.SecretKey;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vincentppmt.app.entities.User;
import com.vincentppmt.app.exceptions.SingleException;
import com.vincentppmt.app.requests.LoginRequest;
import com.vincentppmt.app.services.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTAuth {
	
	SecretKey key = Keys.hmacShaKeyFor(SECRET_TOKEN.getBytes(StandardCharsets.UTF_8));
	
	@Autowired
	private UserService userService;

	public String generateToken(Integer id) {
		String subject = Integer.toString(id);
		Date now = new Date(System.currentTimeMillis());
		Date expiryDate = new Date(now.getTime() + EXPIRATION_TIME);
		return Jwts.builder().setSubject(subject).setIssuedAt(now).setExpiration(expiryDate).signWith(key).compact();
	}
	
	public String register(Integer id) {
		return generateToken(id);
	}
	
	public String login(LoginRequest login) {
		User user = userService.findUserByEmail(login.getEmail());
		
		if (user == null || !BCrypt.checkpw(login.getPassword(), user.getPassword())) {
			throw new SingleException("Invalid Credentials");
		}
		
		return generateToken(user.getId());
	}
	
	public Integer authenticate(String token) {
		try {
			String id = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
			return Integer.parseInt(id);
		} catch (Exception e) {
			throw new SingleException("Invalid token, authorization denied");
		}
	}
}
