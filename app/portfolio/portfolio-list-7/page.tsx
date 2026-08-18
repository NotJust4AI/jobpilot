
import Layout from '@/components/layout/Layout'
import dynamic from 'next/dynamic'
import Link from "next/link"
import * as Icon from 'react-feather'

const PortfolioFilterSeven = dynamic(() => import('@/components/portfolio/PortfolioFilterSeven'), {
    ssr: false,
})

import Image from 'next/image'
export default function Portfolio7() {
    return (
        <>
            <Layout footerLayout={11}>
                <div>
                    <section className="page-header -text -">
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-center text-center">
                                    <div className="col-xl-6 col-lg-9 col-md-10">
                                        <div>
                                            <h1 className="page-header__title lh-14">Portfolio Showcase</h1>
                                        </div>
                                    </div>
                                    <div className="w-1/1" />
                                    <div className="col-xl-5 col-lg-9 col-md-10">
                                        <div className="px-20">
                                            <p className="page-header__text">With we want to optimize the customization process so your team can save time when building websites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="section-filter">
                            <div className="container-wide">
                                <PortfolioFilterSeven />
                                <div className="masonry -col-4 -gap-32 pt-60 sm:pt-40 js-masonry js-masonry-no-filter">
                                    <div className="masonry__sizer" />
                                    <div className="masonry__item -no-ratio  e_commerce">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/1.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Billboard</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  e_commerce digital_design">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/2.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Creative Science</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  web_design digital_design branding">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/3.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Air Plane</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  e_commerce branding">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/10.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Lewis Baker</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  web_design digital_design branding">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/18.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">AG. Avent</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  web_design e_commerce branding">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/7.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Fortune Art</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  e_commerce">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/16.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Virtual Payment</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  e_commerce digital_design">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/17.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Good Food</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  digital_design web_design branding">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/20.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Enterprice Silver</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  e_commerce web_design branding">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/8.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Billboard</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  web_design digital_design branding">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/5.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Creative Science</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="masonry__item -no-ratio  web_design e_commerce branding">
                                        <div className="h:zoom">
                                            <div className="ratio ratio-42:50 hover-group overflow-hidden rounded-8">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover h:zoom__item z-1 rounded-8" src="/img/portfolio/cards/9.jpg" alt="image" />
                                                <div className="d-flex items-end px-30 py-30 absolute-full-center z-2 | opac-0 hg:opacity-100 t-base">
                                                    <div className="bg-accent rounded-8 opac-80 absolute-full-center" />
                                                    <Link href="/portfolio/portfolio-single-1" className="absolute-full-center z-1" />
                                                    <div className="absolute-center">
                                                        <div className="d-flex justify-center items-center border-2-white rounded-full size-60">
                                                            <Icon.ArrowRight className="icon text-white size-24" />
                                                        </div>
                                                    </div>
                                                    <div className="relative z-2">
                                                        <div className="x-gap-10 y-gap-10">
                                                            <a href="#" className="decoration-none text-white">#marketing</a>
                                                            <a href="#" className="decoration-none text-white">#design</a>
                                                            <a href="#" className="decoration-none text-white">#developer</a>
                                                        </div>
                                                        <h4 className="text-2xl fw-600 text-white mt-16">Air Plane</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">We help startups launch and succeed very fast</h2>
                                        <p className="sectionHeading__text mt-20">We appreciate your trust greatly! Our clients choose us and our products<br className="md:d-none" /> because they know we are the best.</p>
                                    </div>
                                    <a href="about-5.html" className="button -md -accent text-white mt-40 md:mt-30">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="svg-shape">
                        <svg width={1920} height={60} viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z" fill="#1A3454" />
                        </svg>
                    </div>
                </div>
            </Layout>
        </>
    )
}