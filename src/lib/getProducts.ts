// export const getProducts = async () => {
//     const res = await fetch('https://dummyjson.com/products')
//     const data = await res.json();
//     return data.products
// }

import { createConnection } from "./db";

// export const getProducts = async () => {
//     const db = await createConnection();
//     const sql = "SELECT * FROM products";
//     const [products] = await db.query(sql);
//     return products;
// }

export const getProducts = async () => {
    const db = await createConnection();
    
    // SQL query to select all columns from products table along with transformed image fields
    const sql = `
        SELECT 
            p.*,  -- Fetch all columns from products table
            GROUP_CONCAT(u.file_name) AS photos_files,
            (SELECT u2.file_name FROM uploads u2 WHERE u2.id = p.thumbnail_img) AS thumbnail_file,
            (SELECT u2.file_name FROM uploads u2 WHERE u2.id = p.meta_img) AS meta_file
        FROM products p
        LEFT JOIN uploads u ON FIND_IN_SET(u.id, p.photos) > 0
        GROUP BY p.id
    `;
    
    // Execute the query
    const [products] = await db.query(sql);
    
    // Map the result to update the photos, thumbnail_img, and meta_img fields with the file names
    const updatedProducts = products.map(product => ({
        ...product,  // Spread the original product fields
        photos: product.photos_files ? product.photos_files.split(',') : [],  // Convert photos_files string to an array
        thumbnail_img: product.thumbnail_file || '',  // Set thumbnail_img to file name or empty if not present
        meta_img: product.meta_file || '',  // Set meta_img to file name or empty if not present
    }));
    
    return updatedProducts;
}

