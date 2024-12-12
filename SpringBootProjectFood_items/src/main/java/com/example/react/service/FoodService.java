package com.example.react.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.react.model.FoodModel;
import com.example.react.repository.FoodRepository;



@Service
public class FoodService {
	@Autowired
	FoodRepository foodRepository;

	public void saveData(FoodModel foodModel) {
			foodRepository.save(foodModel);
		
	}
	

	public List<FoodModel> getAllFoodItems() {
		 return foodRepository.findAll();
	}

	
	
	
	   // Delete food item
    public boolean deleteFoodItem(Long id) {
        if (foodRepository.existsById(id)) {
            foodRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Update food item
    public boolean updateFoodItem(Long id, FoodModel updatedFood) {
        Optional<FoodModel> existingFoodOpt = foodRepository.findById(id);
        if (existingFoodOpt.isPresent()) {
            FoodModel existingFood = existingFoodOpt.get();
            
            existingFood.setName(updatedFood.getName());
            existingFood.setPrice(updatedFood.getPrice());
            existingFood.setQuantity(updatedFood.getQuantity());
            existingFood.setCategory(updatedFood.getCategory());
            existingFood.setImage(updatedFood.getImage());
            foodRepository.save(existingFood);
            return true;
        }
        return false;
    }
	
	
}