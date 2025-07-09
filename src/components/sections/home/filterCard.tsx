import { calculateDiscountPrice } from "@/lib/calculateDiscountPrice"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

type FilterCardProps = {
    id: string | number,
    discount: number | null,
    unit_price: number,
    thumbnail_img: string,
    imgSize?: string,
}
const FilterCard = ({ id, thumbnail_img, imgSize, discount, unit_price }: FilterCardProps) => {
      const safeDiscount = discount ?? 0;
    const calculatePrice = calculateDiscountPrice(unit_price, safeDiscount)
    // divided the price base on .
    const finalPrice = calculatePrice?.toString().match(/^(\d+)\.(\d{2})$/);
    return (
        <div className="group">
            <Link href={`/product-details/${id}`} className={cn("block overflow-hidden rounded-2xl", imgSize)}>
                <Image width={213} height={172} sizes="100vw" src={`https://bishal.com.bd/public/${thumbnail_img}`} alt="img" className={cn("rounded-2xl max-w-[184px] max-h-[184px] w-full h-full object-cover group-hover:scale-105 transition-all duration-300", imgSize)} />
            </Link>
            <div className="mt-3 flex justify-between items-center flex-wrap">
                <div className="flex items-center">
                    <p className="font-bold inline-block text-primary-foreground">
                        <span className="text-xs">US </span>
                        <span className="text-xl">${finalPrice && finalPrice[1]}</span>
                        <span className="text-xs">.{finalPrice && finalPrice[2]}</span>
                    </p>

                    <span className="text-[rgb(153,153,153)] line-through text-sm ml-2 custom-clamp-line max-w-[53px]">US ${unit_price}</span>
                </div>
                {/* {
                    discountPercentage &&
                    <div className="bg-[#ffe6e7] text-primary-foreground font-bold px-1 text-sm">
                        -{discount}%
                    </div>
                } */}
            </div>
        </div>
    )
}
export default FilterCard