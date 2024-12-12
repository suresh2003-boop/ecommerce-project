import React, { useRef, useState } from 'react';
import { saveProduct, getProducts, deleteProduct, updateProduct } from './Service/productservie';


import './ProductForm.css';

function ProductForm() {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();
    const categoryRef = useRef();
    const imageRef = useRef();

    const [products, setProducts] = useState([]);
    const [editingProductId, setEditingProductId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value,
            category: categoryRef.current.value,
            image: imageRef.current.files[0]?.name
        };

        if (editingProductId) {
            updateProduct(editingProductId, formData).then(() => {
                fetchResponse();
                setEditingProductId(null);
            });
        } else {
            saveProduct(formData).then(() => fetchResponse());
        }
    };

    const fetchResponse = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            alert("Error fetching products.");
        }
    };

    const handleDelete = (id) => {
        deleteProduct(id).then(() => fetchResponse());
    };

    const handleEdit = (product) => {
        setEditingProductId(product.id);
        nameRef.current.value = product.name;
        priceRef.current.value = product.price;
        quantityRef.current.value = product.quantity;
        categoryRef.current.value = product.category;
    };

    return (
        <>


<div className="product-page">
    {/* Form Section */}
    <div className="form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <h1>{editingProductId ? "Edit Product" : "Add Your Food Here"}</h1>
            <label>Product Name:</label>
            <input type="text" ref={nameRef} required />

            <label>Product Price:</label>
            <input type="text" ref={priceRef} required />

            <label>Product Quantity:</label>
            <input type="text" ref={quantityRef} required />

            <label>Product Category:</label>
            <input type="text" ref={categoryRef} required />

            <label>Product Image:</label>
            <input type="file" ref={imageRef} />

            <button type="submit">{editingProductId ? "Update" : "Submit"}</button>
        </form>
    </div>

    {/* Product List Section */}
    <div className="products-container">
        <button className="fetch-button" onClick={fetchResponse}>Fetch Products</button>
        <h3>Product List:</h3>
        {products.length > 0 ? (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.category}</td>
                            <td>
                                <img src={`/public/${product.image}`} alt={product.name} width="100" height="100" />
                            </td>
                            <td>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <p>No products available.</p>
        )}
    </div>
</div>


        </>
    );
}

export default ProductForm;