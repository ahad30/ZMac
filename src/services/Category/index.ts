import { createConnection } from "@/lib/db";


export const getAllCategory = async() =>{
    const db = await createConnection();
    const sql = "SELECT * FROM categories";
    const [categories] = await db.query(sql);

    return categories;
}

export const getSameCategoryProduct =  async(categoryName: string)=>{
    const db = await createConnection();
    const sql = `SELECT * FROM products JOIN categories ON products.category_id = categories.id WHERE LOWER(categories.name)=?`;

    const [products] = await db.query(sql, [categoryName]);
    return products;
}