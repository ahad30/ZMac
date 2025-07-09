
import { getAllCategory } from "@/services/Category";
import { NextResponse } from "next/server";

export const GET = async()=>{
 const categories = await getAllCategory();
 return NextResponse.json(categories);   
}