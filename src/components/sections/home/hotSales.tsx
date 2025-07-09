import { calculateDiscountPrice } from "@/lib/calculateDiscountPrice";
import { getProducts } from "@/lib/getProducts";
import { productType, TProduct } from "@/types/productType";
import Image from "next/image"
import Link from "next/link"

const HotSales = async () => {
    const data: TProduct[] = await getProducts()
    return (
        <div className="bg-popover rounded-2xl p-6 ">
            <div className="pb-4">
                <h5 className="text-primary-foreground text-2xl font-bold">Hot Sales</h5>
            </div>
            <div className="rounded-2xl grid  gap-5">
                {
                    data.slice(0, 2).map(({ discount, id, unit_price, thumbnail_img }) => (
                        <Card
                            key={id}
                            id={id}
                            discount={discount}
                            unit_price={unit_price}
                            thumbnail_img={thumbnail_img} />
                    ))
                }
            </div>
        </div>
    )
}

export default HotSales

type CardProps = {
    id: number | string,
    thumbnail_img: string,
    unit_price: number,
    discount: number|null
}
const Card = ({ id, thumbnail_img, unit_price, discount }: CardProps) => {
    const safeDiscount = discount ?? 0;
    const calculatePrice = calculateDiscountPrice(unit_price, safeDiscount)
    // divided the price base on .
    const finalPrice = calculatePrice?.toString().match(/^(\d+)\.(\d{2})$/);
    return (
        <div className="group">
            <Link href={`/product-details/${id}`} className="block overflow-hidden max-h-[200px] max-w-[340px] rounded-2xl">
                <Image width={340} height={200} sizes="100vw" src={`https://bishal.com.bd/public/${thumbnail_img}`} alt="img" className="rounded-2xl max-h-[200px] max-w-[340px] h-full w-full object-cover group-hover:scale-105 transition-all duration-300" />
            </Link>
            <div className="mt-1.5 flex items-center">
                <p className="font-bold inline-block text-primary-foreground">
                    <span className="text-xs">US </span>
                    <span className="text-xl">{finalPrice && finalPrice[1]}</span>
                    <span className="text-xs">.{finalPrice && finalPrice[2]}</span>
                </p>
                <span className="text-[rgb(153,153,153)] line-through text-sm ml-2">US ${unit_price}</span>
            </div>
        </div>
    )
}