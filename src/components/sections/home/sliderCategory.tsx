'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { EffectFade, Navigation } from "swiper/modules";
import { homeCategoryData } from "@/db/homeCategoryData";
import { calculateDiscountPrice } from "@/lib/calculateDiscountPrice";
import { productType, TProduct } from "@/types/productType";

const SliderCategory = ({ data }: { data: TProduct[] }) => {
    return (
        <section className="lg:px-5 mt-8">
            <h2 className="text-center font-bold text-[32px]">Shop by category</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[35px] mt-6">
                <div className="bg-[#1B5F48] h-full lg:h-[536px] flex flex-col justify-between">
                    <div className="mt-14 3xl:ml-12 ml-10">
                        <div>
                            <Image width={77} height={41} src="https://ae01.alicdn.com/kf/S73f17457c7224ac9a7174dafc9bcbd44h.png" alt="img" />
                        </div>
                        <p className="text-[rgb(255,255,255)] font-[450] mt-2.5 max-w-[292px]">Your fashion choice</p>
                        <Button asChild size={"sm"} className="bg-background text-black rounded-none 3xl:text-xl font-medium 3xl:mt-6 mt-3">
                            <Link href={"#"}>Shop now</Link>
                        </Button>
                    </div>
                    <div className="mx-10 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                        {
                            data.slice(0, 3).map(({ discount, id, unit_price, thumbnail_img }) =>
                                <ProductCard key={id} id={id} thumbnail_img={thumbnail_img} discount={discount} unit_price={unit_price} totalRating={4.7} totalSold={420} />
                            )
                        }
                    </div>
                </div>
                <div className="w-[90%] lg:w-full mx-auto">
                    <Swiper
                        // slidesPerView={2}
                        className="group"
                        navigation={{
                            nextEl: ".next-el",
                            prevEl: ".prev-el"
                        }}
                        effect="fade"
                        loop
                        modules={[Navigation, EffectFade]}
                    >

                        {
                            homeCategoryData.map(({ categories, id }) => {
                                return (
                  
                                      <SwiperSlide key={id}>
                                        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 place-content-center">
                                            {
                                                categories.map(({ id, image, title }) => {
                                                    return (
                                                        <Link key={id} href={"/products"} className="block 3xl:h-[213px] lg:h-[168px] w-full h-full lg:max-w-[384px] bg-cover" style={{ backgroundImage: `url(${image})` }}>
                                                            <span className="p-6 font-semibold 3xl:text-2xl text-xl  lg:max-w-[135px] block">{title}</span>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </SwiperSlide>
                        
                                )
                            })
                        }

                        <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="prev-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
                            <div className="next-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default SliderCategory


type CardProps = {
    id: number | string,
    thumbnail_img: string,
    unit_price: number,
    discount: number | null,
    totalRating: number,
    totalSold: number
}

const ProductCard = ({ id, thumbnail_img, unit_price, discount, totalRating, totalSold }: CardProps) => {
    const safeDiscount = discount ?? 0;
    const calculatePrice = calculateDiscountPrice(unit_price, safeDiscount)

    return (
        <div className="bg-background p-2 pt-2 pb-3 text-[#222]">
            <Link href={`/product-details/${id}`} className="max-w-[205px] max-h-[272px] h-[272px] block overflow-hidden group">
                <Image width={205} height={273} sizes="100vw" src={`https://bishal.com.bd/public/${thumbnail_img}`} alt="img" className="group-hover:scale-105 transition-all duration-300" />
            </Link>
            <div className="mt-3">
                <p className="3xl:text-xl text-base font-bold inline-block">US ${calculatePrice}</p>
                <p className="3xl:text-base text-xs text-muted inline-block ml-2">US ${unit_price}</p>
                <div className="text-sm flex items-center mt-1.5">
                    <div className="inline-flex items-center gap-1">
                        <span className="text-[#fbaa00]"><Star size={15} fill="#fbaa00"/></span>
                        <span className="font-bold inline-block">{totalRating}</span>
                    </div>
                    <span className="block h-2 border-r border-[#dbdbdb] ml-2"></span>
                    <p className="ml-2">
                        <span>{totalSold}</span>
                        <span className="inline-block ml-[3px]">sold</span>
                    </p>
                </div>
            </div>
        </div>
    )
}