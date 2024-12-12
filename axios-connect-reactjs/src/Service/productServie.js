import axios from "axios";

export const saveProduct = async (jsonPayload) => {
    try {
        // Await the axios POST request
        const response = await axios.post("http://localhost:4545/api/v1/savedata", jsonPayload);
        
        // Log the full response and data
        console.log("Product complete response:", response);
        console.log("Product only data response:", response.data);

        // Alert user that the product was saved successfully
        alert("Product saved successfully");
    } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error saving product:", error);
        alert("Error saving product. Please try again.");
    }
};

export const getProducts = async () => {
    try {
        // Fetch products using axios
        const response = await axios.get("http://localhost:4545/api/v1/getFoodItems");
        console.log(response.data);
       
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};



// Delete product
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`http://localhost:4545/api/v1/deleteProduct/${id}`);
        alert("Product deleted successfully");
    } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product. Please try again.");
    }
};

// Update product
export const updateProduct = async (id, updatedData) => {
    try {
        const response = await axios.put(`http://localhost:4545/api/v1/updateProduct/${id}`, updatedData);
        console.log("Product update response:", response);
        alert("Product updated successfully");
    } catch (error) {
        console.error("Error updating product:", error);
        alert("Error updating product. Please try again.");
    }
};