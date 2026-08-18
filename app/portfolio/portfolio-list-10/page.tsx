
import Layout from '@/components/layout/Layout'
import PortfolioSliderOne from '@/components/slider/PortfolioSliderOne'
import Link from "next/link"
import * as Icon from 'react-feather'

export default function Portfolio10() {
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
                        <div className="container">
                            <div className="sectionSlider relative js-sectionSlider" data-cursor-slider="slider" data-gap={30} data-slider-col="base-3 lg-3 md-2 sm-1" data-scrollbar>
                                <div className="swiper-wrapper z-1">
                                    <PortfolioSliderOne />
                                </div>
                                <div className="nav -slider -absolute-center z-5 px-30 justify-between md:justify-center md:pt-60 sm:pt-40">
                                    <div className="nav__item -left js-prev  swiper-button-prev-style-3">
                                        <Icon.ArrowLeft className="icon" />
                                    </div>
                                    <div className="nav__item -right ml-20 js-next swiper-button-next-style-3">
                                        <Icon.ArrowRight className="icon" />
                                    </div>
                                </div>
                                <div className="scrollbar -slider mt-60 md:mt-40 js-scrollbar" />
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
                                    <Link href="/about/about-5" className="button -md -accent text-white mt-40 md:mt-30">Get Started</Link>
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