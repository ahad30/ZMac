import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { getProducts } from "@/lib/getProducts";
import { TProduct } from "@/types/productType";

const HomeProducts = async () => {
  const data: TProduct[] = await getProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 pt-8">
      <h2 className="text-center font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] pb-4">
        More to love
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-10 gap-y-6">
        {data.map(({ id, thumbnail_img, name, unit_price, discount }) => (
          <Card
            key={id}
            id={id}
            name={name}
            thumbnail_img={thumbnail_img}
            unit_price={unit_price}
            discount={discount}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button className="rounded-full font-bold h-12 w-[188px] text-base sm:text-lg">
          View more
        </Button>
      </div>
    </section>
  );
};

export default HomeProducts;
