import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { getSameCategoryProduct } from "@/services/Category";
import { TProduct } from "@/types/productType";

const ProductList = async({params}:{params: Promise<{slug:string[]}>}) => {
    const { slug } = await params;
    console.log('slug', slug)
    const products: TProduct[] = await getSameCategoryProduct(slug[2]);
    // const data: productType[] = await getProducts();
    // const categories = await getAllCategory();
    
    return (
       <>
        <section className="pt-8">
            <h2 className="text-center font-bold text-[32px] pb-2 uppercase">{slug[2]}</h2>
            <div className="grid 2xl:grid-cols-6 grid-cols-5 gap-x-4 gap-y-2">
                {
                    products.map(({ id, thumbnail_img, name, unit_price, discount }) =>
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            thumbnail_img={thumbnail_img}
                            unit_price={unit_price}
                            discount={discount}
                        />
                    )
                }
            </div>
            <div className="flex justify-center  mt-6 mb-6">
                <Button className="rounded-full font-bold h-12 w-[188px]">View more</Button>
            </div>
        </section>
       </>
    );
};

export default ProductList;