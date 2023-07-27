package com.example.springapp.model.flight;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;


@Entity
@Table(name = "flightfeed")
public class FlightFeedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedid;

    @Column(nullable = false)
    private String feedback;

    @Column(nullable = false)
    private int rating;

    public Long getId() {
        return feedid;
    }

    public void setId(Long id) {
        this.feedid = feedid;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public FlightFeedback(Long feedid, String feedback, int rating) {
        this.feedid = feedid;
        this.feedback = feedback;
        this.rating = rating;
    }


    public FlightFeedback() {

    }

    @Override
    public String toString() {
        return "FlightFeedback{" +
                "id=" + feedid +
                ", feedback='" + feedback + '\'' +
                ", rating=" + rating +
                '}';
    }
}
