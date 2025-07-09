import FilterCard from "./filterCard"
import { getProducts } from "@/lib/getProducts"
import { productType, TProduct } from "@/types/productType"

const WeeklyDeals = async () => {
    const data: TProduct[] = await getProducts()
    return (
        <div className="bg-popover rounded-2xl p-6 flex flex-col lg:flex-row justify-between">
            <div className="pb-4">
                <h5 className="text-2xl font-bold">Weekly deals</h5>
                <span>Low prices in the past 30 days</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    data.slice(0, 2).map(({ id, thumbnail_img, unit_price, discount }) =>
                        <FilterCard
                            key={id}
                            id={id}
                            thumbnail_img={thumbnail_img}
                            discount={discount}
                            unit_price={unit_price}
                            imgSize="max-w-[150px] max-h-[150px]"
                        />
                    )
                }
            </div>
        </div>
    )
}

export default WeeklyDeals