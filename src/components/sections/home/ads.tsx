import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Ads = () => {
    return (
        <section className="bg-[rgb(10,128,56)] pt-8 pb-12">
            <div className="mx-auto px-4 bg-[url('/images/ads.png')] bg-no-repeat bg-contain bg-center lg:bg-right">
                {/* Heading */}
                <div className="text-lg sm:text-xl font-bold">
                    <span className="text-white">Sale Ends in:</span>
                </div>

                {/* Main Banner Title */}
                <h1 className="uppercase font-bold text-[rgb(255,237,190)] text-3xl sm:text-5xl md:text-6xl lg:text-[80px] leading-none flex flex-wrap items-center gap-3 mt-2">
                    Hours <span className="text-white font-medium">Left</span>
                    <Link
                        href={"#"}
                        className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center bg-background rounded-full text-[rgb(10,128,56)] ml-2"
                        aria-label="next-arrow"
                    >
                        <ChevronRight size={30} className="sm:size-[36px] md:size-[50px]" />
                    </Link>
                </h1>

                {/* Cards */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card
                        img="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp"
                        title="Top discount list"
                        price={72.56}
                    />
                    <Card
                        img="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp"
                        title="Stay warm"
                        price={50.56}
                        bgColor="bg-[rgb(255,237,190)]"
                        titleColor="text-[rgb(161,40,98)]"
                    />
                    <Card
                        img="https://ae-pic-a1.aliexpress-media.com/kf/S0bc42db0003f44cea321e7a8193f7141e.png_480x480.png_.webp"
                        title="Men's fashion"
                        price={60.56}
                        bgColor="bg-[rgb(240,220,255)]"
                        titleColor="text-[rgb(111,71,143)]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Ads;

// ==============================
// Responsive Card Component
// ==============================
type CardProps = {
    img: string;
    bgColor?: string;
    titleColor?: string;
    title: string;
    price: number;
};

const Card = ({ img, bgColor, titleColor, title, price }: CardProps) => {
    return (
        <div className={cn("flex flex-col sm:flex-row p-3 h-full rounded-md", bgColor ?? "bg-[rgb(255,177,233)]")}>
            <Link href={"#"} className="flex-shrink-0 mx-auto sm:mx-0">
                <Image
                    width={140}
                    height={140}
                    src={img}
                    alt="img"
                    className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] object-contain"
                />
            </Link>
            <div className="flex flex-col justify-between mt-3 sm:mt-0 sm:ml-3 w-full relative">
                <Link
                    href={"#"}
                    className={cn("text-xl font-bold", titleColor ?? "text-[rgb(161,40,98)]")}
                >
                    {title}
                </Link>
                <span className="absolute bottom-0 sm:bottom-2 inline-block text-base sm:text-xl font-medium text-white bg-[rgba(25,25,25,.7)] px-2 py-1">
                    US ${price}
                </span>
            </div>
        </div>
    );
};
