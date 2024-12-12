package com.example.react.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.react.model.FoodModel;


@Repository

public interface FoodRepository extends JpaRepository<FoodModel, Long> {

}