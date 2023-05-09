package com.iads.webapp;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DAOs.Subscriber;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.DTOs.SubscriberDTO;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

@SpringBootTest
class WebappApplicationTests {

	@Test
	void contextLoads() {
	}


	//-------------------------------SUBSCRIBERS TEST-------------------------------//
	@Test
	public void createDefaultSubscriber(){
		Subscriber testSubscriber = new Subscriber();
		assertNotNull(testSubscriber);
	}
	@Test
	public void createSubscriber() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Subscriber testSubscriber = new Subscriber(1L,"Martin", "guidomartin7@gmail.com", date);
	    int validator = 0;
		if(Objects.equals(testSubscriber.getId(), 1L)){
			validator++;
		}
		if (Objects.equals(testSubscriber.getName(), "Martin")){
			validator++;
		}
		if(Objects.equals(testSubscriber.getMail(), "guidomartin7@gmail.com")){
			validator++;
		}
		if(Objects.equals(testSubscriber.getSubscriptionDate(), date)){
			validator++;
		}
	assertEquals(4,validator);
	}
	@Test
	public void createSubscriberWithSetters() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Subscriber testSubscriber = new Subscriber();
		testSubscriber.setId(1L);
		testSubscriber.setName("Martin");
		testSubscriber.setMail("guidomartin7@gmail.com");
		testSubscriber.setSubscriptionDate(date);
		int validator = 0;
		if(Objects.equals(testSubscriber.getId(), 1L)){
			validator++;
		}
		if (Objects.equals(testSubscriber.getName(), "Martin")){
			validator++;
		}
		if(Objects.equals(testSubscriber.getMail(), "guidomartin7@gmail.com")){
			validator++;
		}
		if(Objects.equals(testSubscriber.getSubscriptionDate(), date)){
			validator++;
		}
		assertEquals(4,validator);
	}
	@Test
	public void sameAndDifferentSubscriberHashcode() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Subscriber testSubscriber1 = new Subscriber(1L,"Martin", "guidomartin7@gmail.com", date);
		Subscriber testSubscriber2 = new Subscriber(2L,"Martin", "guidomartin7@gmail.com", date);
		Subscriber testSubscriber3 = new Subscriber(3L,"Otro", "guidomartin7@gmail.com", date);
		int validator = 0;
		if(testSubscriber1.hashCode()==testSubscriber2.hashCode()){
			validator++;
		}
		if(testSubscriber3.hashCode()==testSubscriber2.hashCode()){
			validator++;
		}
		if(testSubscriber1.hashCode()==testSubscriber3.hashCode()){
			validator++;
		}
		assertEquals(1,validator);
	}
	@Test
	public void sameAndDifferentSubscriberEquals() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Subscriber testSubscriber1 = new Subscriber(1L,"Martin", "guidomartin7@gmail.com", date);
		Subscriber testSubscriber2 = new Subscriber(1L,"Martin", "guidomartin7@gmail.com", date);
		Subscriber testSubscriber3 = new Subscriber(1L,"Otro", "guidomartin7@gmail.com", date);
		int validator = 0;
		if(testSubscriber1.equals(testSubscriber2)){
			validator++;
		}
		if(testSubscriber3.equals(testSubscriber2)){
			validator++;
		}
		if(testSubscriber1.equals(testSubscriber3)){
			validator++;
		}
		assertEquals(1,validator);
	}
	@Test
	public void subscriberToString() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Subscriber testSubscriber = new Subscriber(1L,"Martin", "guidomartin7@gmail.com", date);
		String str1 = "Subscriber{id=1, name='Martin', mail='guidomartin7@gmail.com', subscriptionDate=Wed Nov 12 00:00:00 ART 10}";
		String str2 = "Subscriber{id=2, name='Martin', mail='guidomartin7@gmail.com', subscriptionDate=Wed Nov 12 00:00:00 ART 10}";
		int validator = 0;
		if(Objects.equals(testSubscriber.toString(), str1)){
			validator++;
		}
		if(Objects.equals(testSubscriber.toString(), str2)){
			validator++;
		}
		assertEquals(1,validator);
	}
	//-------------------------------SUBSCRIBERS DTO TEST-------------------------------//
	@Test
	public void createDefaultSubscriberDTO(){
		SubscriberDTO testSubscriberDTO = new SubscriberDTO();
		assertNotNull(testSubscriberDTO);
	}
	@Test
	public void createSubscriberDTO() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		SubscriberDTO testSubscriberDTO = new SubscriberDTO("Martin", "guidomartin7@gmail.com", date);
		int validator = 0;
		if (Objects.equals(testSubscriberDTO.getName(), "Martin")){
			validator++;
		}
		if(Objects.equals(testSubscriberDTO.getMail(), "guidomartin7@gmail.com")){
			validator++;
		}
		if(Objects.equals(testSubscriberDTO.getSubscriptionDate(), date)){
			validator++;
		}
		assertEquals(3,validator);
	}
	@Test
	public void createSubscriberDTOWithSetters() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		SubscriberDTO testSubscriberDTO = new SubscriberDTO();
		testSubscriberDTO.setName("Martin");
		testSubscriberDTO.setMail("guidomartin7@gmail.com");
		testSubscriberDTO.setSubscriptionDate(date);
		int validator = 0;
		if (Objects.equals(testSubscriberDTO.getName(), "Martin")){
			validator++;
		}
		if(Objects.equals(testSubscriberDTO.getMail(), "guidomartin7@gmail.com")){
			validator++;
		}
		if(Objects.equals(testSubscriberDTO.getSubscriptionDate(), date)){
			validator++;
		}
		assertEquals(3,validator);
	}
	@Test
	public void sameAndDifferentSubscriberDTOHashcode() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		SubscriberDTO testSubscriberDTO1 = new SubscriberDTO("Martin", "guidomartin7@gmail.com", date);
		SubscriberDTO testSubscriberDTO2 = new SubscriberDTO("Martin", "guidomartin7@gmail.com", date);
		SubscriberDTO testSubscriberDTO3 = new SubscriberDTO("Otro", "guidomartin7@gmail.com", date);
		int validator = 0;
		if(testSubscriberDTO1.hashCode()==testSubscriberDTO2.hashCode()){
			validator++;
		}
		if(testSubscriberDTO3.hashCode()==testSubscriberDTO2.hashCode()){
			validator++;
		}
		if(testSubscriberDTO1.hashCode()==testSubscriberDTO3.hashCode()){
			validator++;
		}
		assertEquals(1,validator);
	}
	@Test
	public void sameAndDifferentSubscriberDTOEquals() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		SubscriberDTO testSubscriberDTO1 = new SubscriberDTO("Martin", "guidomartin7@gmail.com", date);
		SubscriberDTO testSubscriberDTO2 = new SubscriberDTO("Martin", "guidomartin7@gmail.com", date);
		SubscriberDTO testSubscriberDTO3 = new SubscriberDTO("Otro", "guidomartin7@gmail.com", date);
		int validator = 0;
		if(testSubscriberDTO1.equals(testSubscriberDTO2)){
			validator++;
		}
		if(testSubscriberDTO3.equals(testSubscriberDTO2)){
			validator++;
		}
		if(testSubscriberDTO1.equals(testSubscriberDTO3)){
			validator++;
		}
		assertEquals(1,validator);
	}
	@Test
	public void subscriberDTOToString() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		SubscriberDTO testSubscriberDTO = new SubscriberDTO("Martin", "guidomartin7@gmail.com", date);
		String str1 = "SubscriberDTO(name=Martin, mail=guidomartin7@gmail.com, subscriptionDate=Wed Nov 12 00:00:00 ART 10)";
		String str2 = "SubscriberDTO(name=Mario, mail=guidomartin7@gmail.com, subscriptionDate=Wed Nov 12 00:00:00 ART 10)";
		int validator = 0;
		if(Objects.equals(testSubscriberDTO.toString(), str1)){
			validator++;
		}
		if(Objects.equals(testSubscriberDTO.toString(), str2)){
			validator++;
		}
		assertEquals(1,validator);
	}



//-------------------------------REQUEST TEST-------------------------------//

	@Test
	public void createDefaultRequest(){
		Request testRequest = new Request();
		assertNotNull(testRequest);
	}
	@Test
	public void createRequest() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Request testRequest = new Request(1L,"Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		int validator = 0;
		if(Objects.equals(testRequest.getId(), 1L)){
			validator++;
		}
		if (Objects.equals(testRequest.getName(), "Martin")){
			validator++;
		}
		if(Objects.equals(testRequest.getMail(), "guidomartin7@gmail.com")){
			validator++;
		}
		if(Objects.equals(testRequest.getRequest(), "testRequest")){
			validator++;
		}
		if(Objects.equals(testRequest.getRequestDate(), date)){
			validator++;
		}
		if(Objects.equals(testRequest.getStatus(), "open")){
			validator++;
		}
		assertEquals(6,validator);
	}
	@Test
	public void createRequestWithSetters() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Request testRequest = new Request();
		testRequest.setId(1L);
		testRequest.setName("Martin");
		testRequest.setMail("guidomartin7@gmail.com");
		testRequest.setRequest("testRequest");
		testRequest.setRequestDate(date);
		testRequest.setStatus("open");
		int validator = 0;
		if(Objects.equals(testRequest.getId(), 1L)){
			validator++;
		}
		if (Objects.equals(testRequest.getName(), "Martin")){
			validator++;
		}
		if(Objects.equals(testRequest.getMail(), "guidomartin7@gmail.com")){
			validator++;
		}
		if(Objects.equals(testRequest.getRequest(), "testRequest")){
			validator++;
		}
		if(Objects.equals(testRequest.getRequestDate(), date)){
			validator++;
		}
		if(Objects.equals(testRequest.getStatus(), "open")){
			validator++;
		}
		assertEquals(6,validator);
	}
	@Test
	public void sameAndDifferentRequestHashcode() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Request testRequest1 = new Request(1L,"Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		Request testRequest2 = new Request(2L,"Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		Request testRequest3 = new Request(3L,"Other", "guidomartin7@gmail.com","testRequest", date,"open");
		int validator = 0;
		if(testRequest1.hashCode() == testRequest2.hashCode()){
			validator++;
		}
		if(testRequest3.hashCode( )== testRequest2.hashCode()){
			validator++;
		}
		if(testRequest1.hashCode() == testRequest3.hashCode()){
			validator++;
		}
		assertEquals(1, validator);
	}
	@Test
	public void sameAndDifferentRequestEquals() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Request testRequest1 = new Request(1L,"Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		Request testRequest2 = new Request(1L,"Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		Request testRequest3 = new Request(1L,"Other", "guidomartin7@gmail.com","testRequest", date,"open");
		int validator = 0;
		if(testRequest1.equals(testRequest2)){
			validator++;
		}
		if(testRequest3.equals(testRequest2)){
			validator++;
		}
		if(testRequest1.equals(testRequest3)){
			validator++;
		}
		assertEquals(1, validator);
	}
	@Test
	public void requestToString() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		Request testRequest = new Request(1L,"Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		String str1 = "Request{id=1, name='Martin', mail='guidomartin7@gmail.com', request='testRequest', requestDate=Wed Nov 12 00:00:00 ART 10, status='open'}";
		String str2 = "Request{id=2, name='Martin', mail='guidomartin7@gmail.com', request='testRequest', requestDate=Wed Nov 12 00:00:00 ART 10, status='open'}";
		int validator = 0;
		if(Objects.equals(testRequest.toString(), str1)){
			validator++;
		}
		if(Objects.equals(testRequest.toString(), str2)){
			validator++;
		}
		assertEquals(1,validator);
	}
	//-------------------------------REQUEST DTO TEST-------------------------------//

	@Test
	public void createDefaultRequestDTO(){
		RequestDTO testRequestDTO = new RequestDTO();
		assertNotNull(testRequestDTO);
	}
	@Test
	public void createRequestDTO() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		RequestDTO testRequestDTO = new RequestDTO("Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		int validator = 0;
		if (Objects.equals(testRequestDTO.getName(), "Martin")){
			validator++;
		}
		if(Objects.equals(testRequestDTO.getMail(), "guidomartin7@gmail.com")){
			validator++;
		}
		if(Objects.equals(testRequestDTO.getRequest(), "testRequest")){
			validator++;
		}
		if(Objects.equals(testRequestDTO.getRequestDate(), date)){
			validator++;
		}
		if(Objects.equals(testRequestDTO.getStatus(), "open")){
			validator++;
		}
		assertEquals(5,validator);
	}
	@Test
	public void createRequestDTOWithSetters() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		RequestDTO testRequestDTO = new RequestDTO();
		testRequestDTO.setName("Martin");
		testRequestDTO.setMail("guidomartin7@gmail.com");
		testRequestDTO.setRequest("testRequest");
		testRequestDTO.setRequestDate(date);
		testRequestDTO.setStatus("open");
		int validator = 0;
		if (Objects.equals(testRequestDTO.getName(), "Martin")){
			validator++;
		}
		if(Objects.equals(testRequestDTO.getMail(), "guidomartin7@gmail.com")){
			validator++;
		}
		if(Objects.equals(testRequestDTO.getRequest(), "testRequest")){
			validator++;
		}
		if(Objects.equals(testRequestDTO.getRequestDate(), date)){
			validator++;
		}
		if(Objects.equals(testRequestDTO.getStatus(), "open")){
			validator++;
		}
		assertEquals(5,validator);
	}
	@Test
	public void sameAndDifferentRequestDTOHashcode() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		RequestDTO testRequestDTO1 = new RequestDTO("Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		RequestDTO testRequestDTO2 = new RequestDTO("Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		RequestDTO testRequestDTO3 = new RequestDTO("Other", "guidomartin7@gmail.com","testRequest", date,"open");
		int validator = 0;
		if(testRequestDTO1.hashCode() == testRequestDTO2.hashCode()){
			validator++;
		}
		if(testRequestDTO3.hashCode( )== testRequestDTO2.hashCode()){
			validator++;
		}
		if(testRequestDTO1.hashCode() == testRequestDTO3.hashCode()){
			validator++;
		}
		assertEquals(1, validator);
	}
	@Test
	public void sameAndDifferentRequestDTOEquals() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		RequestDTO testRequestDTO1 = new RequestDTO("Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		RequestDTO testRequestDTO2 = new RequestDTO("Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		RequestDTO testRequestDTO3 = new RequestDTO("Other", "guidomartin7@gmail.com","testRequest", date,"open");
		int validator = 0;
		if(testRequestDTO1.equals(testRequestDTO2)){
			validator++;
		}
		if(testRequestDTO3.equals(testRequestDTO2)){
			validator++;
		}
		if(testRequestDTO1.equals(testRequestDTO3)){
			validator++;
		}
		assertEquals(1, validator);
	}
	@Test
	public void requestDTOToString() throws ParseException {
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy");
		Date date = format.parse("2022-05-05T12:12:12");
		RequestDTO testRequestDTO = new RequestDTO("Martin", "guidomartin7@gmail.com","testRequest", date,"open");
		String str1 = "RequestDTO(name=Martin, mail=guidomartin7@gmail.com, request=testRequest, requestDate=Wed Nov 12 00:00:00 ART 10, status=open)";
		String str2 = "RequestDTO(name=Test, mail=guidomartin7@gmail.com, request=testRequest, requestDate=Wed Nov 12 00:00:00 ART 10, status=open)";
		int validator = 0;
		if(Objects.equals(testRequestDTO.toString(), str1)){
			validator++;
		}
		if(Objects.equals(testRequestDTO.toString(), str2)){
			validator++;
		}
		assertEquals(1,validator);
	}
}
