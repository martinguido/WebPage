package com.iads.webapp.Controllers;

import com.iads.webapp.DAOs.Request;
import com.iads.webapp.DTOs.RequestDTO;
import com.iads.webapp.Services.RequestService;
import jakarta.annotation.PostConstruct;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "*")
public class RequestController {
    private RequestService requestService;
    public RequestController(RequestService requestService) {
        this.requestService = requestService;
    }
    @PostConstruct
    public void loadSampleRequest() throws ParseException {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date1 = format.parse("2022-02-05T12:12:12");
        Date date2 = format.parse("2023-10-10T12:00:00");
        List <Request> someSampleRequests = new ArrayList<>();
        Request sampleRequest1 = new Request(1L,"Martin Guido", "guidomartin7@gmail.com","Tengo un problema con la pagina de Mision", date1,"Cerrado");
        someSampleRequests.add(sampleRequest1);
        Request sampleRequest2 = new Request(2L,"Julian Garcia Terna", "juliangt@gmail.com","Me gustaria contactarme para ser voluntario", date2,"Abierto");
        someSampleRequests.add(sampleRequest2);
        Request sampleRequest3 = new Request(3L,"Mario Gieco", "mariogieco@yahoo.com.ar","Como se separan los residuos?", date1,"Cerrado");
        someSampleRequests.add(sampleRequest3);
        Request sampleRequest4 = new Request(4L,"Carlos Garcia", "carlogarcia@hotomail.com","Me puedo acercar a dejar botellas de plastico?", date2,"Abierto");
        someSampleRequests.add(sampleRequest4);
        Request sampleRequest5 = new Request(5L,"Ramon Martinez", "ramonm@gmail.com","No se como hacer para donar. Me pueden ayudar?", date1,"Abierto");
        someSampleRequests.add(sampleRequest5);
        Request sampleRequest6 = new Request(6L,"German Tromso", "germantromso@gmail.com","Que tipo de alimentos conviene consumir para no contaminar?", date2,"Abierto");
        someSampleRequests.add(sampleRequest6);
        Request sampleRequest7 = new Request(7L,"Hernan Signor", "hernansignor@gmail.com","Como puedo hacer para no acumular agua en recipientes y evitar el dengue?", date1,"Cerrado");
        someSampleRequests.add(sampleRequest7);
        Request sampleRequest8 = new Request(8L,"Mariano Hernandez", "mariano_h@outlook.com","Queria conocer las ultimas politicas que presentaron ", date2,"Abierto");
        someSampleRequests.add(sampleRequest8);
        Request sampleRequest9 = new Request(9L,"Victoria Bacco", "victoriab170@gmail.com","Como puedo ayudar a la ONG?", date1,"Abierto");
        someSampleRequests.add(sampleRequest9);
        Request sampleRequest10 = new Request(10L,"Nicolas Guillermo", "nicog10@hotmail.com.ar","Que puedo hacer si en mi barrio no hay recicladores?", date2,"Abierto");
        someSampleRequests.add(sampleRequest10);
        Request sampleRequest11 = new Request(11L,"Analia Cambea", "ana_cambea@outlook.com","Donde estan los puntos de reciclado en Saavedra?", date1,"Abierto");
        someSampleRequests.add(sampleRequest11);
        Request sampleRequest12 = new Request(12L,"Alejandro Fernandez", "alejandro_f@outlook.com.ar","Queria participar en el evento del lunes 24 de agosto", date2,"Cerrado");
        someSampleRequests.add(sampleRequest12);
        Request sampleRequest13 = new Request(13L,"Carmen Riccardo", "carmenricc@gmail.com","De que temas se van a hablar en el evento del 24 de agosto?", date1,"Abierto");
        someSampleRequests.add(sampleRequest13);
        Request sampleRequest14 = new Request(14L,"Agustina Vetton", "vetton.agus@yahoo.com","Me gustaria presentarles una propuesta para una carrera ecologica?", date2,"Abierto");
        someSampleRequests.add(sampleRequest14);
        Request sampleRequest15 = new Request(15L,"Ximena Sanchez", "xime_sanchez@hotmail.com","Como puedo ser miembro de la IADS?", date1,"Cerrado");
        someSampleRequests.add(sampleRequest15);
        requestService.saveAll(someSampleRequests);
    }
    @GetMapping ("/consultas")
    public ResponseEntity<List<Request>> getRequests(){
        List <Request> allRequests = requestService.getAllRequests();
        return new ResponseEntity<>( allRequests, HttpStatus.OK);
    }
    @PostMapping("/consultas/enviarConsulta")
    public ResponseEntity<?> createRequest(@RequestBody RequestDTO newRequestDTO) throws Exception{
        try {
            requestService.createRequest(newRequestDTO);
            return new ResponseEntity<>(newRequestDTO, HttpStatus.OK);
        }
        catch (Error e) {
            System.out.println(e);
            return new ResponseEntity<>("No se pudo enviar la consulta correctamente. Reintentar.",HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/consultas/actualizarConsulta")
    public ResponseEntity<?> updateRequest(@RequestParam(value = "id") Long idRequest){
        try {
            requestService.updateRequest(requestService.getById(idRequest));
            return ResponseEntity.ok("La consulta con id: " + idRequest + " ha sido actualizada correctamente.");
        } catch (DataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con id: " + idRequest + " no existe.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @PutMapping("/consultas/actualizarConsulta/{id}")
    public ResponseEntity<?> updateRequestById(@PathVariable("id") Long idRequest){
        try {
            requestService.updateRequest(requestService.getById(idRequest));
            return ResponseEntity.ok("La consulta con id: " + idRequest + " ha sido actualizada correctamente.");
        } catch (DataAccessException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con id: " + idRequest + " no existe.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}