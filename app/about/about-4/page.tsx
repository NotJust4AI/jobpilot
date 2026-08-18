
import Layout from '@/components/layout/Layout'
import TestimonialSliderTwo from '@/components/slider/TestimonialSliderTwo'
import Link from 'next/link'

import Image from 'next/image'
export default function About4() {
    return (
        <>
            <Layout
                headerLayout={2}
                footerLayout={2}
                navColor="text-white" // text-white, "" (blank is default dark)
                logo="logo-flat" // logo, logo-flat, logo-5
            >
                <div>
                    <section className="page-header -blue -">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-blue.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-xl-4 col-lg-9 col-md-10">
                                    <div>
                                        <div>
                                            <h1 className="page-header__title lh-14 text-white">About us</h1>
                                        </div>
                                        <div className="px-20">
                                            <p className="page-header__text text-white opac-80">With we want to optimize the customization process so your team can save time when building websites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-xs">
                        <div className="container">
                            <div className="row x-gap-10 y-gap-20">
                                <div className="col-lg col-sm-6">
                                    <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                        <div className="d-flex direction-column items-center">
                                            <div>
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/timer.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">Real time activity</h4>
                                            <p className="feature-hover__content mt-20">Front template can be easily customized with its cutting-edge components and features.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-sm-6">
                                    <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                        <div className="d-flex direction-column items-center">
                                            <div>
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/cloud-storage.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">Instant deploy</h4>
                                            <p className="feature-hover__content mt-20">Front template can be easily customized with its cutting-edge components and features.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-sm-6">
                                    <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                        <div className="d-flex direction-column items-center">
                                            <div>
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/touch.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">Easy integrations</h4>
                                            <p className="feature-hover__content mt-20">Front template can be easily customized with its cutting-edge components and features.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-sm-6">
                                    <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                        <div className="d-flex direction-column items-center">
                                            <div>
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/pen-tool.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">Perfect UI/UX</h4>
                                            <p className="feature-hover__content mt-20">Front template can be easily customized with its cutting-edge components and features.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg col-sm-6">
                                    <div className="feature-hover text-center pt-60 pb-40 px-30 md:pt-30 md:pb-30 rounded-16 bg-white">
                                        <div className="d-flex direction-column items-center">
                                            <div>
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/features/phone-chat.svg" alt="icon" />
                                            </div>
                                            <h4 className="text-xl fw-600 mt-20">Friendly support</h4>
                                            <p className="feature-hover__content mt-20">Front template can be easily customized with its cutting-edge components and features.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row y-gap-40 justify-between items-center">
                                <div className="col-xl-4 col-lg-5 col-md-6 order-lg-1 order-2">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">Deliver a personal<br /> experience at scale.</h2>
                                    </div>
                                    <div className="mt-30">
                                        <p>Burke blow off arse gutted mate what a plonker cup of tea fantastic get stuffed mate.!
                                        </p><p className="mt-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt.</p>
                                        <Link href="/about/about-1" className="button -md -accent rounded-8 text-white mt-30">Discover More</Link>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-5 order-lg-2 order-1">
                                    <Image width="0" height="0" sizes="100vw"  className="initial-img" src="/img/about-4/images/image.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-lg section-bg-color">
                        <div className="section-bg-color__item -full rounded-0 bg-light-4" />
                        <div className="container">
                            <div className="row y-gap-60 items-center">
                                <div className="col-xl-6 col-lg-7 order-lg-1 order-2">
                                    <div className="row y-gap-32">
                                        <div className="col-sm-6">
                                            <div className="js-rellax">
                                                <div className="py-50 px-40 bg-white rounded-16 shadow-card  ">
                                                    <div className="size-80 rounded-full d-flex justify-center items-center bg-blue-light">
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/branding.svg" alt="icon" />
                                                    </div>
                                                    <h4 className="text-xl fw-600 mt-20">Branding</h4>
                                                    <p className="mt-10">There is no one universal solution in online marketing .</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="js-rellax">
                                                <div className="py-50 px-40 bg-white rounded-16 shadow-card  ">
                                                    <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/ui-design.svg" alt="icon" />
                                                    </div>
                                                    <h4 className="text-xl fw-600 mt-20">UI/UX Design</h4>
                                                    <p className="mt-10">There is no one universal solution in online marketing .</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="js-rellax" data-rellax-speed={0} data-rellax-desktop-speed={1} data-rellax-percentage="0.5">
                                                <div className="py-50 px-40 bg-white rounded-16 shadow-card  mt--20 md:mt-0">
                                                    <div className="size-80 rounded-full d-flex justify-center items-center bg-red-light">
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/animate.svg" alt="icon" />
                                                    </div>
                                                    <h4 className="text-xl fw-600 mt-20">Animation</h4>
                                                    <p className="mt-10">There is no one universal solution in online marketing .</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="js-rellax" data-rellax-speed={0} data-rellax-desktop-speed={-1} data-rellax-percentage="0.5">
                                                <div className="py-50 px-40 bg-white rounded-16 shadow-card mt-30 md:mt-0 ">
                                                    <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/seo.svg" alt="icon" />
                                                    </div>
                                                    <h4 className="text-xl fw-600 mt-20">SEO  Backlinks</h4>
                                                    <p className="mt-10">There is no one universal solution in online marketing .</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 offset-xl-1 col-lg-5 col-md-8 order-lg-2 order-1">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>services</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Best solutions for you</h2>
                                        <p className="sectionHeading__text mt-20">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.</p>
                                    </div>
                                    <div className="mt-30">
                                        <Link href="/services/services-1" className="button -md -accent rounded-8 text-white">All Services</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-md layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-xl-6 col-lg-7">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">User Review  Feedback</h2>
                                        <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-lg">
                            <div className="row pt-60 sm:pt-40">
                                <div className="sectionSlider testimonials-active overflow-hidden sm:overflow-visible js-sectionSlider" data-cursor-slider="slider" data-gap={50} data-slider-col="base-3 lg-2 md-2 sm-1" data-pagination data-center data-loop>
                                    <div className="swiper-wrapper">
                                        <TestimonialSliderTwo />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative z-5 mb-minus-170">
                        <div className="container">
                            <div className="relative rounded-16">
                                <div className="absolute-full-center z--1">
                                    <div className="bg-image rounded-16 js-lazy" style={{ backgroundImage: 'url("/img/home-2/footer/cta.png")' }} />
                                </div>
                                <div className="py-50 px-64">
                                    <div className="row y-gap-32 justify-between items-center">
                                        <div className="col-auto">
                                            <h3 className="text-30 lh-15 text-white">Join Sassio and increase<br /> your productivity.</h3>
                                        </div>
                                        <div className="col-auto">
                                            <Link href="/login" className="button -md -white rounded-8 text-accent">Get Started</Link>
                                        </div>
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