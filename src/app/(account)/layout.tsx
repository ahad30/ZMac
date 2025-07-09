import React, { ReactNode } from 'react'
import AccountLayoutSidebar from '@/components/accountLayoutSidebar'
import Footer from '@/components/sections/footer'
import TopHeader from '@/components/sections/header/topHeader'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-popover">
            <div className="">
                <TopHeader isCategoryMenuShow={true} />
            </div>
            <section className="py-20 bg-page-header-liner">
                <h2 className="text-4xl text-center">My Account</h2>
            </section>
            <div className="container grid grid-cols-[23%_auto] gap-5 items-start pt-20 pb-25 max-w-[1280px] mx-auto">
                <AccountLayoutSidebar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default layout