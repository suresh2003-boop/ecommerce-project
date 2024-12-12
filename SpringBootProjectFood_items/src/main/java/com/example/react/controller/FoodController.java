package com.example.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.react.model.FoodModel;
import com.example.react.service.FoodService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1")
public class FoodController {
	@Autowired
	FoodService foodService;
	
	
	@PostMapping("/savedata")
	public String saveData(@RequestBody FoodModel foodModel) {
	    foodService.saveData(foodModel);
	    return "Product successfully added";
	}
	
	 @GetMapping("/getFoodItems")
	    public List<FoodModel> getFoodItems() {
	        return foodService.getAllFoodItems();
	    }
	 
	 
	 
	 // Delete a food item by ID
	    @DeleteMapping("/deleteProduct/{id}")
	    public String deleteFoodItem(@PathVariable Long id) {
	        boolean isDeleted = foodService.deleteFoodItem(id);
	        return isDeleted ? "Product successfully deleted" : "Error deleting product";
	    }

	    // Update a food item by ID
	    @PutMapping("/updateProduct/{id}")
	    public String updateFoodItem(@PathVariable Long id, @RequestBody FoodModel updatedFood) {
	        boolean isUpdated = foodService.updateFoodItem(id, updatedFood);
	        return isUpdated ? "Product successfully updated" : "Error updating product";
	    }
	

	
	

}