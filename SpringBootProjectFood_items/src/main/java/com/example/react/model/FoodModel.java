package com.example.react.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Food")



public class FoodModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	
	private String name;
    private double price;
    private String category;
    private String quantity;
    private String image;
	

}
