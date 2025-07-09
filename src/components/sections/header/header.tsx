'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import CategoryMenu from "./categoryMenu";
import { ChevronDown, Menu, X } from "lucide-react";
import { menuList } from "@/db/menuList";
import TopHeader from "./topHeader";

const Header = () => {
    const [adjustedMenuList, setAdjustedMenuList] = useState(menuList || []);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            const tempMenuList = [...(menuList || [])];
            const moreMenu = tempMenuList.find((item) => item.name === "more");

            if (moreMenu) {
                const itemsExcludingMore = tempMenuList.filter((item) => item.name !== "more");

                if (window.innerWidth < 1440) {
                    const lastThreeItems = itemsExcludingMore.slice(-3);
                    moreMenu.dropdown = [...(moreMenu.dropdown || []), ...lastThreeItems];
                    const updatedMenuList = tempMenuList.filter(
                        (item) => !lastThreeItems.includes(item)
                    );
                    setAdjustedMenuList(updatedMenuList);
                } else if (window.innerWidth < 1792) {
                    const lastTwoItems = itemsExcludingMore.slice(-2);
                    moreMenu.dropdown = [...(moreMenu.dropdown || []), ...lastTwoItems];
                    const updatedMenuList = tempMenuList.filter(
                        (item) => !lastTwoItems.includes(item)
                    );
                    setAdjustedMenuList(updatedMenuList);
                } else {
                    setAdjustedMenuList(menuList || []);
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="w-full lg:max-w-7xl mx-auto">
            <TopHeader/>
            <div className="flex flex-col lg:flex-row px-5">
                <div className="flex items-center justify-between gap-5 pb-2.5">
                <div className="shrink-0">
                    <CategoryMenu />
                </div>

                {/* Hamburger menu icon */}
                <button
                    className="md:hidden ml-auto"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : "More"}
                </button>
            </div>

            {/* Navigation menu */}
            <nav className={`mt-4 md:mt-0 ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
                    {adjustedMenuList.map((item, index) => (
                        <li className="relative group" key={index}>
                            <button
                                className="capitalize w-full text-left px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-1 hover:bg-slate-100 transition-all md:w-auto"
                                onClick={() =>
                                    mobileMenuOpen
                                        ? setActiveDropdown(activeDropdown === index ? null : index)
                                        : undefined
                                }
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown size={14} />}
                            </button>

                            {/* Dropdown */}
                            {item.dropdown && (
                                <ul
                                    className={`
                                        bg-white py-3 px-4 rounded-3xl shadow-[0_2px_8px_0_rgba(0,0,0,.2)] transition-all duration-300 z-50
                                        ${mobileMenuOpen
                                            ? activeDropdown === index
                                                ? 'block'
                                                : 'hidden'
                                            : 'absolute right-0 min-w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible'}
                                    `}
                                >
                                    {item.dropdown.map((drop, idx) => (
                                        <li key={idx}>
                                            <Link
                                                href={drop.url || "#"}
                                                className="text-sm text-[#222] px-2.5 py-2.5 block hover:bg-slate-100 transition-all"
                                            >
                                                {drop.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header;
