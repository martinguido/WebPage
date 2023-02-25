package com.arbolar.WebApp.DAO;
import java.time.LocalDate;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@EntityScan
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDate date;

    private String image;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "text")
    private String longDescription;

    public Event() {
    }

    public Event(LocalDate date, String image, String title, String longDescription) {
        this.date = date;
        this.image = image;
        this.title = title;
        this.longDescription = longDescription;
    }

    public Long getId() {
        return id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLongDescription() {
        return longDescription;
    }

    public void setLongDescription(String longDescription) {
        this.longDescription = longDescription;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", date=" + date +
                ", image='" + image + '\'' +
                ", title='" + title + '\'' +
                ", longDescription='" + longDescription + '\'' +
                '}';
    }
}
