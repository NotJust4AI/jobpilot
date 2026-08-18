
import Layout from '@/components/layout/Layout'
import ProjectSliderTwo from '@/components/slider/ProjectSliderTwo'

import Image from 'next/image'
export default function About2() {
    return (
        <>
            <Layout
                footerLayout={6}
            >
                <section className="page-header -base -dark">
                    <div className="page-header__bg">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-dark.png" alt="Page header" />
                    </div>
                    <div className="page-header__content">
                        <div className="row justify-center text-center">
                            <div className="col-lg-9 col-md-10">
                                <div>
                                    <h1 className="page-header__title lh-14 text-white">About us</h1>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-9 col-md-10">
                                <div className="px-20">
                                    <p className="page-header__text text-white opac-80">With we want to optimize the customization process so your team can save time when building websites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="layout-pt-md layout-pb-md">
                    <div className="container">
                        <div className="row justify-center text-center">
                            <div className="col-xl-6 col-lg-7">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">How It Works</h2>
                                    <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                        </div>
                        <div className="row y-gap-48 pt-60 md:pt-48">
                            <div className="col-lg-3 col-sm-6">
                                <div className="px-24 text-center hover-group">
                                    <div className="d-flex justify-center items-center size-120 mx-auto rounded-full bg-white shadow-card | hg:bg-accent t-base">
                                        <i className="icon icon-drawing-1 text-3xl | hg:text-white t-base" />
                                    </div>
                                    <div className="mt-30">
                                        <h4 className="text-xl lh-12">Create Project</h4>
                                        <p className="mt-10">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="px-24 text-center hover-group">
                                    <div className="d-flex justify-center items-center size-120 mx-auto rounded-full bg-white shadow-card | hg:bg-accent t-base">
                                        <i className="icon icon-process text-3xl | hg:text-white t-base" />
                                    </div>
                                    <div className="mt-30">
                                        <h4 className="text-xl lh-12">Making Plan</h4>
                                        <p className="mt-10">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="px-24 text-center hover-group">
                                    <div className="d-flex justify-center items-center size-120 mx-auto rounded-full bg-white shadow-card | hg:bg-accent t-base">
                                        <i className="icon icon-task text-3xl | hg:text-white t-base" />
                                    </div>
                                    <div className="mt-30">
                                        <h4 className="text-xl lh-12">Custom Task Views</h4>
                                        <p className="mt-10">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="px-24 text-center hover-group">
                                    <div className="d-flex justify-center items-center size-120 mx-auto rounded-full bg-white shadow-card | hg:bg-accent t-base">
                                        <i className="icon icon-one-finger-click text-3xl | hg:text-white t-base" />
                                    </div>
                                    <div className="mt-30">
                                        <h4 className="text-xl lh-12">One Click Install</h4>
                                        <p className="mt-10">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about */}
                <section className="layout-pt-lg layout-pb-lg section-bg-color">
                    <div className="section-bg-color__item -wide" />
                    <div className="container">
                        <div className="row y-gap-48 justify-between items-center">
                            <div className="col-xl-5 col-lg-6">
                                <div className="rounded-8">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img rounded-8" src="/img/about-2/about/images.png" alt="image" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="wow animate__animated animate__fadeIn">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>What we</span>
                                        </div>
                                        <h2 className="sectionHeading__title">We help startups launch,<br /> grow and succeed very fast</h2>
                                    </div>
                                </div>
                                <div className="row y-gap-40 pt-32">
                                    <div className="col-sm-6">
                                        <h4 className="text-xl fw-600">Company Benefits</h4>
                                        <p className="mt-20">Since 2017, we have led innovation and new product delivery in business startup services delivered online.</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4 className="text-xl fw-600">Competitive Salary</h4>
                                        <p className="mt-20">Since 2017, we have led innovation and new product delivery in business startup services delivered online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-sm">
                    <div className="container">
                        <div className="row justify-between">
                            <div className="col-xl-4 col-lg-5">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>services</span>
                                    </div>
                                    <h2 className="sectionHeading__title">We help to create strategies,<br /> design  development.</h2>
                                </div>
                                <button className="button -md -uppercase -accent text-white mt-32">More Services</button>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="row y-gap-60 md:pt-60">
                                    <div className="col-sm-6">
                                        <div className="size-icon-50">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/icons/pen.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 lh-13 mt-20">Brand Strategy<br />  Art Direction</h4>
                                        <p className="mt-16">The template is really nice and offers quite a large set of options. it is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="size-icon-50">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/icons/web-design.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 lh-13 mt-20">UX/UI Design <br /> Website/App Design</h4>
                                        <p className="mt-16">The template is really nice and offers quite a large set of options. it is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="size-icon-50">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/icons/color-palette.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 lh-13 mt-20">Typography<br />  Video Production</h4>
                                        <p className="mt-16">The template is really nice and offers quite a large set of options. it is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="size-icon-50">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/icons/shape-builder.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 lh-13 mt-20">Marketing Campaigns <br /> Content Creation</h4>
                                        <p className="mt-16">The template is really nice and offers quite a large set of options. it is beautiful and the coding is done quickly and seamlessly. Thank you!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="layout-pt-sm layout-pb-sm">
                    <div className="sectionSlider overflow-hidden js-sectionSlider" data-cursor-slider="slider" data-gap={60} data-slider-col="base-2 lg-2 md-2 sm-1" data-center data-loop>
                        <div className="swiper-wrapper">
                            <ProjectSliderTwo />
                        </div>
                    </div>
                </section>
                {/* clients */}
                <section className="layout-pt-sm layout-pb-xl">
                    <div className="container">
                        <div className="row justify-center">
                            <div className="col text-center">
                                <p className="text-lg text-dark-1">Trusted by the world's best</p>
                            </div>
                        </div>
                        <div className="row y-gap-32 justify-between md:justify-center items-center mt-64">
                            <div className="col-lg-auto col-md-3 col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-lg-12 col-10" src="/img/clients/1.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-3 col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-lg-12 col-10" src="/img/clients/2.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-3 col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-lg-12 col-10" src="/img/clients/3.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-3 col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-lg-12 col-10" src="/img/clients/4.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-3 col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-lg-12 col-10" src="/img/clients/5.svg" alt="clients image" />
                                </div>
                            </div>
                            <div className="col-lg-auto col-md-3 col-4">
                                <div className="d-flex justify-center items-center px-4">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="col-lg-12 col-10" src="/img/clients/6.svg" alt="clients image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* cta */}
                <section className="layout-pt-md layout-pb-md section-bg-color">
                    <div className="section-bg-color__item" />
                    <div className="bg-element -sally">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/cta/Saly.png" alt="image" />
                    </div>
                    <div className="container">
                        <div className="row y-gap-32 justify-between items-center md:text-center md:justify-center">
                            <div className="col-lg-5">
                                <div>
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">Stay in the know</h2>
                                        <p className="sectionHeading__text mt-20">Get special offers on the lates developments from Fron.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="form-newsletter md:mx-auto">
                                    <form action="post">
                                        <div className="form-group">
                                            <input className="border-light rounded-200" type="email" placeholder="Enter Your Email Address" />
                                            <button className="button -md -accent -uppercase rounded-200 text-white" type="submit">Get Started</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}