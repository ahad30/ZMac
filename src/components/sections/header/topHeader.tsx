import Link from "next/link"
import { Menu, QrCode, ScanSearch, Search } from "lucide-react"
import CategoryMenu from "./categoryMenu"
import CountryLanguageDropdown from "./countryLanguageDropdown"
import AccountDropdown from "./accountDropdown"
import dynamic from "next/dynamic"

const CartSidebar = dynamic(() => import("./cartSidebar"), { ssr: false })

const TopHeader = ({ isCategoryMenuShow }: { isCategoryMenuShow?: boolean }) => {

    return (
        <div className="flex flex-col lg:flex-row lg:flex-nowrap justify-between items-center py-5 px-4 lg:px-8 gap-y-4">
  {/* Logo */}
  <div className="">
      <Link href="/" className="shrink-0 ">
    <img src="/images/logo.png" alt="logo" className="w-[120px] sm:w-[156px] max-h-10 object-contain" />
  </Link>
  </div>

  {/* Category Menu (hidden on small screens) */}
  {isCategoryMenuShow && (
    <div className="relative hidden sm:block group/categoryMenu">
      <div className="bg-popover w-[31px] h-[31px] rounded-full flex justify-center items-center shrink-0 ml-3 cursor-pointer">
        <Menu size={16} />
      </div>
      <div className="absolute -left-[100px] hidden group-hover/categoryMenu:block">
        <CategoryMenu menuListClass="block" menuListBtnClass="rounded-br-none rounded-bl-none font-bold" />
      </div>
    </div>
  )}

  {/* Search Bar (takes full width on small screens) */}
  <div className="w-full sm:flex-1 sm:pl-6 relative order-3 sm:order-none">
    <input
      type="text"
      placeholder="search product"
      className="h-9 border border-black rounded-3xl w-full pl-6 pr-[70px] py-2 text-sm outline-none"
    />
    <div className="absolute top-1.5 right-[70px] cursor-pointer">
      <ScanSearch />
    </div>
    <div className="absolute right-0.5 top-0.5 rounded-[20px] bg-[#191919] w-[52px] h-8 text-white flex justify-center items-center cursor-pointer">
      <Search size={21} />
    </div>
  </div>

  {/* Right side icons and dropdowns */}
  <div className="flex items-center gap-4 sm:gap-5 pl-0 sm:pl-8 shrink-0">
    {/* App Download */}
    <div className="relative group/app hidden lg:block">
      <div className="flex items-center gap-1.5 cursor-pointer">
        <span><QrCode /></span>
        <p className="max-w-[90px] text-xs font-medium">Download the ZMAC app</p>
      </div>
      <div className="absolute z-20 top-full left-0 mt-2 w-[28rem] bg-white shadow-lg rounded-md p-4 transform scale-0 group-hover/app:scale-100 transition-transform duration-300 origin-top-left">
        <div className="flex items-center space-x-4">
          <div>
            <img src="/images/qr-code.webp" alt="QR Code" className="w-[8rem] h-[8rem]" />
          </div>
          <div>
            <p className="text-lg font-semibold text-black">Download the ZMAC app</p>
            <p className="text-sm text-gray-500">Scan the QR code to download</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <a href="#" className="w-full flex justify-center items-center bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800">
            <img src="/images/playstore.webp" alt="Play Store" className="w-[2rem] h-[2rem] mr-3" />
            App Store
          </a>
          <a href="#" className="w-full flex justify-center items-center bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800">
            <img src="/images/apple-logo.webp" alt="App Store" className="w-[2rem] h-[2rem] mr-3" />
            Google Play
          </a>
        </div>
      </div>
    </div>

    {/* Dropdowns and Cart */}
    <CountryLanguageDropdown />
    <AccountDropdown />
    <CartSidebar />
  </div>
</div>

    )
}

export default TopHeader