package com.iads.webapp;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.DTOs.SubscriberDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import static org.junit.jupiter.api.Assertions.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

@SpringBootTest
@TestPropertySource(properties = "spring.profiles.active=test")
class WebappApplicationTests {

	@Test
	void contextLoads() {
	}


}
