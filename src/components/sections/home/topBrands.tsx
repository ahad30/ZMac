import FilterCard from "./filterCard"
import { getProducts } from "@/lib/getProducts"
import { productType, TProduct } from "@/types/productType"

const TopBrands = async () => {
    const data: TProduct[] = await getProducts()
    return (
        <div className="bg-popover rounded-2xl p-6">
            <div className="pb-5">
                <h5 className="text-primary-foreground text-2xl font-bold">Top Brands</h5>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    data.slice(0, 3).map(({ id, thumbnail_img, discount, unit_price }) =>
                        <FilterCard
                            id={id}
                            key={id}
                            thumbnail_img={thumbnail_img}
                            discount={discount}
                            unit_price={unit_price}
                        />)
                }
            </div>
        </div>
    )
}

export default TopBrands

