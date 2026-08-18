

import Layout from '@/components/layout/Layout'
import TeamSliderOne from '@/components/slider/TeamSliderOne'
import TestimonialSliderOne from '@/components/slider/TestimonialSliderOne'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function About1() {
    return (
        <>
            <Layout
                headerLayout={1}
                footerLayout={11}
            >
                <section className="page-header -base -">
                    <div className="page-header__bg">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                    </div>
                    <div className="page-header__content">
                        <div className="row justify-center text-center">
                            <div className="col-lg-9 col-md-10">
                                <div>
                                    <h1 className="page-header__title lh-14">About us</h1>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-9 col-md-10">
                                <div className="px-20">
                                    <p className="page-header__text">With we want to optimize the customization process so your team can save time when building websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="layout-pt-md layout-pb-sm">
                    <div className="container">
                        <div className="row y-gap-48 justify-between items-center">
                            <div className="col-xl-4 col-lg-5 col-md-10">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>about company</span>
                                    </div>
                                    <h2 className="sectionHeading__title">All services for your online presence</h2>
                                    <p className="sectionHeading__text mt-20">Since 2017, we have led innovation and new product delivery in business startup services delivered online.</p>
                                </div>
                                <div className="row pt-30 y-gap-32">
                                    <div className="col-lg-12 col-sm-6">
                                        <div className="d-flex md:direction-column">
                                            <div className="d-flex justify-center items-center flex-grow size-64 bg-red-light rounded-full mr-20 sm:mr-0">
                                                <div className="icon icon-sketch text-30 text-red" />
                                            </div>
                                            <div className="md:mt-20">
                                                <h4 className="text-xl fw-600 lh-1">Our Mission</h4>
                                                <p className="mt-12">We have all the business products in one place so you can focus on what you do best.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-6">
                                        <div className="d-flex md:direction-column">
                                            <div className="d-flex justify-center items-center flex-grow size-64 bg-green-light rounded-full mr-20 sm:mr-0">
                                                <div className="icon icon-color-palette text-30 text-green-dark" />
                                            </div>
                                            <div className="md:mt-20">
                                                <h4 className="text-xl fw-600 lh-1">Our Vision</h4>
                                                <p className="mt-12">We have all the business products in one place so you can focus on what you do best.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="image-group -type-1 atropos-inner overflow-visible d-flex justify-end">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }}  data-atropos-offset={-2} src="/img/about-1/about/pattern.png" alt="image" />
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }}  data-atropos-offset={0} src="/img/about-1/about/back.png" alt="image" />
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }}  data-atropos-offset={5} src="/img/about-1/about/front.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* counter */}
                <section className="layout-pt-sm layout-pb-lg">
                    <div className="container">
                        <div className="row y-gap-48">
                            <div className="col-lg-3 col-6">
                                <div className="numCounter">
                                    <div className="numCounter__number text-3xl text-dark-1 fw-700"><CounterUp count={773} time={1} /></div>
                                    <h5 className="numCounter__title text-dark text-lg">Components</h5>
                                    <div className="numCounter__line mt-20" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="numCounter">
                                    <div className="numCounter__number text-3xl text-dark-1 fw-700"><CounterUp count={1254} time={1} /></div>
                                    <h5 className="numCounter__title text-dark text-lg">Downloads</h5>
                                    <div className="numCounter__line mt-20" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="numCounter">
                                    <div className="numCounter__number text-3xl text-dark-1 fw-700"><CounterUp count={14941} time={1} /></div>
                                    <h5 className="numCounter__title text-dark text-lg">Followers</h5>
                                    <div className="numCounter__line mt-20" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="numCounter">
                                    <div className="numCounter__number text-3xl text-dark-1 fw-700"><CounterUp count={1254} time={1} /></div>
                                    <h5 className="numCounter__title text-dark text-lg">New users</h5>
                                    <div className="numCounter__line mt-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about */}
                <section className="layout-pt-md layout-pb-md section-bg-color">
                    <div className="section-bg-color__item -wide" />
                    <div className="container">
                        <div className="row justify-center text-center">
                            <div className="col-auto">
                                <div className="sectionHeading">
                                    <div className="sectionHeading__subtitle">
                                        <span>Safety first</span>
                                    </div>
                                    <h2 className="sectionHeading__title">You're in a secure company</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row y-gap-32 pt-80 md:pt-60 sm:pt-24">
                            <div className="col-md-6">
                                <div className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card">
                                    <div className="mr-48 md:mr-0">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/timer.svg" alt="icon" />
                                    </div>
                                    <div className="md:mt-20">
                                        <h4 className="text-xl fw-600 lh-1">Real time activity</h4>
                                        <p className="mt-20 md:mt-12">Get instant insight on what's happening in your business. It uses a dictionary of the over 200 Latin words</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card">
                                    <div className="mr-48 md:mr-0">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/cloud-storage.svg" alt="icon" />
                                    </div>
                                    <div className="md:mt-20">
                                        <h4 className="text-xl fw-600 lh-1">Instant deploy</h4>
                                        <p className="mt-20 md:mt-12">Deploy your project in a fraction of a second, no time! It uses a dictionary of the over 200 Latin words</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card">
                                    <div className="mr-48 md:mr-0">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/touch.svg" alt="icon" />
                                    </div>
                                    <div className="md:mt-20">
                                        <h4 className="text-xl fw-600 lh-1">Easy integrations</h4>
                                        <p className="mt-20 md:mt-12">Integrate our solution with other tech leaders in the industry. It uses a dictionary of the over 200 Latin words</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card">
                                    <div className="mr-48 md:mr-0">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/pen-tool.svg" alt="icon" />
                                    </div>
                                    <div className="md:mt-20">
                                        <h4 className="text-xl fw-600 lh-1">Perfect UI/UX</h4>
                                        <p className="mt-20 md:mt-12">Get instant insight on what's happening in your business. It uses a dictionary of the over 200 Latin words</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonials */}
                <section className="layout-pt-lg layout-pb-sm">
                    <div className="container">
                        <div className="row y-gap-32 justify-between">
                            <div className="col-xl-3 col-lg-4">
                                <div className="sectionHeading">
                                    <div className="sectionHeading__subtitle">
                                        <span>EXPLORE NEW PLACES</span>
                                    </div>
                                    <h2 className="sectionHeading__title">What our customers say</h2>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="sectionSlider overflow-hidden js-sectionSlider">
                                    <div className="swiper-wrapper">
                                        <TestimonialSliderOne />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* team */}
                <section className="layout-pt-sm layout-pb-sm">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col text-center">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>team</span>
                                    </div>
                                    <h2 className="sectionHeading__title">Creative mind by people like you</h2>
                                </div>
                            </div>
                        </div>
                        <div className="sectionSlider overflow-hidden pt-60 js-sectionSlider" data-cursor-slider="slider" data-gap={30} data-slider-col="base-4 lg-3 md-2 sm-1" data-pagination>
                            <div className="swiper-wrapper">
                                <TeamSliderOne />
                            </div>
                            <div className="pagination -slider mt-60 js-pagination" />
                        </div>
                    </div>
                </section>
                {/* clients */}
                <section className="layout-pt-md layout-pb-lg">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col text-center">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Partners</span>
                                    </div>
                                    <h2 className="sectionHeading__title">We work with the best brands</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row y-gap-32 justify-between sm:justify-center pt-60">
                            <div className="col-lg-auto col-md-auto col-6">
                                <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/1.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4 mt-40 md:mt-0">
                                <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/2.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-6">
                                <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/3.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4 mt-40 md:mt-0">
                                <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/4.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-6">
                                <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/5.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-auto col-4 mt-40 md:mt-0">
                                <div className="d-flex justify-center items-center size-120 bg-white rounded-full shadow-card">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-7" src="/img/clients/6.svg" alt="clients image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="svg-shape">
                    <svg width={1920} height={60} viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z" fill="#1A3454" />
                    </svg>
                </div>


            </Layout>
        </>
    )
}