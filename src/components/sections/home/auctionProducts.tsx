'use client'
import Card from "@/components/ui/card"
import { productType, TProduct } from "@/types/productType"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const AuctionProducts = ({ data }: { data: TProduct[] }) => {


    return (
        <section className="max-w-7xl mx-auto px-4  pt-8 mb-5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h2 className="text-center font-bold text-[24px] sm:text-[32px] sm:pb-2">Auction Products</h2>
                <div className="flex gap-2">
                    <span className="next-el cursor-pointer"><ChevronLeft /></span>
                    <span className=" prev-el cursor-pointer"><ChevronRight /></span>
                </div>
            </div>
            <Swiper
              
                navigation={{
                    nextEl: ".prev-el",
                    prevEl: ".next-el"
                }}
                // loop={true}
                modules={[Navigation]}
                breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
  }}
            >
             
                 {
                     data.map(({ id, thumbnail_img, name, unit_price, discount }) =>
                        <SwiperSlide key={id} className="pt-3 sm:p-5 !h-[500px]">
                            <Card
                                id={id}
                                name={name}
                                thumbnail_img={thumbnail_img}
                                unit_price={unit_price}
                                discount={discount}
                            />
                        </SwiperSlide>
                    )
                }
       
            </Swiper>
        </section>
    )
}

export default AuctionProducts