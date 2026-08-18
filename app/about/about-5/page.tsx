
'use client'
import Layout from '@/components/layout/Layout'
import ProjectSliderOne from '@/components/slider/ProjectSliderOne'
import TeamSliderOne from '@/components/slider/TeamSliderOne'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import * as Icon from 'react-feather'
interface ActiveState {
    status: boolean
    key: number
}
export default function About5() {
    const [active, setActive] = useState<ActiveState>({
        status: false,
        key: 1,
    })

    const handleToggle = (key: number) => {
        if (active.key === key) {
            setActive({
                ...active,
                status: false,
            })
        } else {
            setActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout
                headerLayout={2}
                footerLayout={2}
                navColor="text-white" // text-white, "" (blank is default dark)
                logo="logo-flat" // logo, logo-flat, logo-5
            >
                <div>
                    <section className="page-header -image -">
                        <div className="page-header__bg overlay-black-50 z-index--1">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-image.png" alt="Page header" />
                        </div>
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-between items-center md:justify-center md:text-center">
                                    <div className="col-lg-6 col-md-10">
                                        <h1 className="page-header__title lh-14 text-white">About us</h1>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-10">
                                        <div className="px-20">
                                            <p className="page-header__text text-white opac-80">With we want to optimize the customization process so your team can save time when building websites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* clients */}
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row justify-center">
                                <div className="col text-center">
                                    <p className="text-lg text-dark-1">Trusted by the worlds best</p>
                                </div>
                            </div>
                            <div className="row y-gap-32 justify-between items-center mt-64">
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/1.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/2.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/3.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/4.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/5.svg" alt="clients image" />
                                    </div>
                                </div>
                                <div className="col-lg-auto col-md-auto col-4">
                                    <div className="d-flex justify-center items-center px-4">
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="w-1/1" src="/img/clients/6.svg" alt="clients image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row y-gap-48 justify-between items-center">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="atropos -no-shadow js-atropos">
                                        <div className="atropos-scale">
                                            <div className="atropos-rotate">
                                                <div className="atropos-inner">
                                                    <div className="image-group -type-2">
                                                        <Image width="0" height="0" sizes="100vw"  style={{ width: "auto", height: "auto" }} data-atropos-offset={-5} src="/img/about-1/about/pattern.png" alt="image" />
                                                        <Image width="0" height="0" sizes="100vw"  style={{ width: "auto", height: "auto" }} data-atropos-offset={0} className="shadow-card" src="/img/about-5/about/images.png" alt="image" />
                                                        <Image width="0" height="0" sizes="100vw"  style={{ width: "auto", height: "auto" }} data-atropos-offset={5} className="shadow-card" src="/img/about-5/about/images-1.png" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5">
                                    <div className="wow animate__animated animate__fadeIn">
                                        <div className="sectionHeading ">
                                            <h2 className="sectionHeading__title">IT solutions for your business.</h2>
                                            <p className="sectionHeading__text mt-20">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.</p>
                                        </div>
                                    </div>
                                    <div className="mt-24 y-gap-20">
                                        <div className="d-flex items-center">
                                            <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                <Icon.Check className="icon size-14 text-black" />
                                            </div>
                                            <h5 className="text-lg fw-600">Installation Guide</h5>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                <Icon.Check className="icon size-14 text-black" />
                                            </div>
                                            <h5 className="text-lg fw-600">Easy setup process</h5>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                <Icon.Check className="icon size-14 text-black" />
                                            </div>
                                            <h5 className="text-lg fw-600">Live call support</h5>
                                        </div>
                                        <div className="d-flex items-center">
                                            <div className="size-32 rounded-full bg-light-3 mr-12 d-flex justify-center items-center">
                                                <Icon.Check className="icon size-14 text-black" />
                                            </div>
                                            <h5 className="text-lg fw-600">Start a private group video call</h5>
                                        </div>
                                    </div>
                                    <div className="wow animate__animated animate__fadeIn">
                                        <Link href="/services/services-3" className="button -md -dark text-white rounded-8 mt-40">Explore</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* numbers */}
                    <section className="layout-pt-lg layout-pb-lg section-bg-color">
                        <div className="section-bg-color__item rounded-8">
                            <div className="rounded-8 bg-image js-lazy" style={{ backgroundImage: 'url("/img/about-5/blue/bg.png")' }} />
                        </div>
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-xl-8 col-lg-9">
                                    <div className="sectionHeading -light">
                                        <h2 className="sectionHeading__title">Forming strong and trusted connections with our clients</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row y-gap-48 pt-60">
                                <div className="col-lg-3 col-6">
                                    <div className="text-center">
                                        <div className="text-50 text-white fw-700">28k</div>
                                        <h5 className="text-white text-lg">Projects</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="text-center">
                                        <div className="text-50 text-white fw-700">100+</div>
                                        <h5 className="text-white text-lg">Locations</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="text-center">
                                        <div className="text-50 text-white fw-700">120%</div>
                                        <h5 className="text-white text-lg">Growth</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="text-center">
                                        <div className="text-50 text-white fw-700">22k</div>
                                        <h5 className="text-white text-lg">Customers</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-16 justify-between items-center">
                                <div className="col-md-6">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">Services</h2>
                                    </div>
                                </div>
                                <div className="col-md-auto">
                                    <Link href="/login" className="button -simple text-accent text-16 fw-600">Start Your Project</Link>
                                </div>
                            </div>
                            <div className="sectionSlider relative pt-60 md:pt-40 js-sectionSlider" data-cursor-slider="slider" data-gap={30} data-slider-col="base-3 lg-3 md-2 sm-1" data-scrollbar>
                                <ProjectSliderOne />
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container-fluid px-0 md:container md:px-20">
                            <div className="row y-gap-48 items-center">
                                <div className="col-xl-6 col-lg-5">
                                    <div>
                                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img rounded-8" src="/img/about-5/images/img.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="col-xl-4 offset-lg-1 col-lg-5">
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">The Creative Process</h2>
                                        <p className="sectionHeading__text mt-20">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.</p>
                                    </div>
                                    <div className="accordion -bordered mt-24 js-accordion">
                                        <div className={active.key == 1 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(1)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">What does the package include?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 1 ? { maxHeight: 150 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={active.key == 2 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(2)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">How does the 14-day trial work?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 2 ? { maxHeight: 150 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={active.key == 3 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(3)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">How do I pay for your service?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 3 ? { maxHeight: 150 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* team */}
                    <section className="layout-pt-sm layout-pb-lg">
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
                </div>

            </Layout>

        </>
    )
}