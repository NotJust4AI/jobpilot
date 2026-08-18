
import Layout from '@/components/layout/Layout'
import TeamSliderOne from '@/components/slider/TeamSliderOne'
import TestimonialSliderThree from '@/components/slider/TestimonialSliderThree'

import * as Icon from 'react-feather'

import Image from 'next/image'
export default function About3() {
    return (
        <>
            <Layout>
                <div>
                    <section className="page-header -text -">
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-center text-center">
                                    <div className="col-xl-6 col-lg-9 col-md-10">
                                        <div>
                                            <h1 className="page-header__title lh-14">About us</h1>
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
                            <div className="row y-gap-32">
                                <div className="col-lg-5">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/about-3/gallery/1.jpg" alt="image" />
                                </div>
                                <div className="col-lg-3">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/about-3/gallery/2.jpg" alt="image" />
                                </div>
                                <div className="col-lg-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/about-3/gallery/3.jpg" alt="image" />
                                </div>
                                <div className="col-lg-3">
                                    <div className="d-flex direction-column y-gap-32">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/about-3/gallery/4.jpg" alt="image" />
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/about-3/gallery/5.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/about-3/gallery/6.jpg" alt="image" />
                                </div>
                                <div className="col-lg-5">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/about-3/gallery/7.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Who we are`</span>
                                        </div>
                                        <h2 className="sectionHeading__title">We love to work with clients all over the world to develop unique, innovative and modern websites.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row y-gap-32 justify-between pt-40">
                                <div className="col-xl-5 col-lg-6">
                                    <h4 className="text-xl fw-600">Our Vision</h4>
                                    <p className="text-16 fw-600 mt-16">Our vision is to build the most efficient and intuitive UI stuff on the web in order to give developers some amazing possibilities to create high quality digital products with less time and money spent.</p>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="text-xl fw-600">Our Values</h4>
                                    <p className="mt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-xl-6 col-lg-7">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">Awesome Features</h2>
                                        <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row x-gap-60 y-gap-48 pt-60 sm:pt-40">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex sm:direction-column">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-100 rounded-full bg-red-light mr-30 sm:mr-0">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-2/features/sketch.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Awesome design</h4>
                                            <p className="mt-12">Duis aute irure dolor reprehen derit in volu velit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex sm:direction-column">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-100 rounded-full bg-green-light mr-30 sm:mr-0">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-2/features/color-palette.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Easy Customize</h4>
                                            <p className="mt-12">Duis aute irure dolor reprehen derit in volu velit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex sm:direction-column">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-100 rounded-full bg-yellow-light mr-30 sm:mr-0">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-2/features/secure-data.svg" alt="icon" />
                                        </div>
                                        <div className="sm:mt-20">
                                            <h4 className="text-xl fw-600 lh-1">Extreme Security</h4>
                                            <p className="mt-12">Duis aute irure dolor reprehen derit in volu velit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* testimonials */}
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Explore new places</span>
                                        </div>
                                        <h2 className="sectionHeading__title">What our customers say</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center relative pt-60">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="sectionSlider overflow-hidden js-sectionSlider" data-cursor-slider="slider" data-gap={30} data-slider-col="base-1 lg-1 md-1 sm-1">
                                        <div className="swiper-wrapper">
                                            <TestimonialSliderThree />
                                        </div>
                                        <div className="nav -slider -absolute-center justify-between md:justify-center md:pt-60 sm:pt-40">
                                            <div data-cursor className="nav__item -left js-prev">
                                                <Icon.ArrowLeft className="icon" />
                                            </div>
                                            <div data-cursor className="nav__item -right ml-20 js-next">
                                                <Icon.ArrowRight className="icon" />
                                            </div>
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
                    <section className="layout-pt-sm layout-pb-lg">
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
                </div>

            </Layout>

        </>
    )
}