
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function Services1() {
    return (
        <>
            <Layout>
                <div>
                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">Our Services</h1>
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
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-32">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                        <div className="size-80 rounded-full d-flex justify-center items-center bg-blue-light">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/branding.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 mt-20">Branding</h4>
                                        <p className="mt-10">There is no one universal solution in online marketing.</p>
                                        <Link href="/services/services-3" className="button -simple text-accent fw-600 underline mt-12">Discover Now</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                        <div className="size-80 rounded-full d-flex justify-center items-center bg-yellow-light">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/ui-design.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 mt-20">UI/UX Design</h4>
                                        <p className="mt-10">There is no one universal solution in online marketing.</p>
                                        <Link href="/services/services-3" className="button -simple text-accent fw-600 underline mt-12">Discover Now</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                        <div className="size-80 rounded-full d-flex justify-center items-center bg-red-light">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/animate.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 mt-20">Animation</h4>
                                        <p className="mt-10">There is no one universal solution in online marketing.</p>
                                        <Link href="/services/services-3" className="button -simple text-accent fw-600 underline mt-12">Discover Now</Link>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="py-50 px-40 bg-white rounded-16 shadow-card">
                                        <div className="size-80 rounded-full d-flex justify-center items-center bg-green-light">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-4/solutions/seo.svg" alt="icon" />
                                        </div>
                                        <h4 className="text-xl fw-600 mt-20">SEO  Backlinks</h4>
                                        <p className="mt-10">There is no one universal solution in online marketing.</p>
                                        <Link href="/services/services-3" className="button -simple text-accent fw-600 underline mt-12">Discover Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>how our process works</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Simple 4-step system</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-48 items-center">
                                <div className="col-xl-5 col-lg-6">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/services/images.jpg" alt="image" />
                                </div>
                                <div className="col-xl-5 offset-xl-1 col-md-10 col-lg-6">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Strategy</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Provide the best digital<br /> experiences</h2>
                                    </div>
                                    <p className="mt-30 sm:mt-20 pr-100 lg:pr-0">With you get components and examples, including tons of variables that will help you customize this theme with ease.</p>
                                    <div className="mt-30">
                                        <Link href="/services/services-3" className="button -md -accent text-white -uppercase">
                                            Get Started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-48 justify-between items-center">
                                <div className="col-xl-5 col-lg-6 col-md-10 order-lg-1 order-2">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Design</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Provide the best digital<br /> experiences</h2>
                                    </div>
                                    <div className="row x-gap-64 y-gap-32 pt-40 md:pt-32">
                                        <div className="col-6">
                                            <div className="d-flex items-center">
                                                <div className="icon-circle-check mr-12">
                                                    <Icon.Check className="icon text-accent" />
                                                </div>
                                                <p className="text-lg text-dark-1 fw-600">Development</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex items-center">
                                                <div className="icon-circle-check mr-12">
                                                    <Icon.Check className="icon text-accent" />
                                                </div>
                                                <p className="text-lg text-dark-1 fw-600">App builder</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex items-center">
                                                <div className="icon-circle-check mr-12">
                                                    <Icon.Check className="icon text-accent" />
                                                </div>
                                                <p className="text-lg text-dark-1 fw-600">Web Design</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex items-center">
                                                <div className="icon-circle-check mr-12">
                                                    <Icon.Check className="icon text-accent" />
                                                </div>
                                                <p className="text-lg text-dark-1 fw-600">Web Design</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex items-center">
                                                <div className="icon-circle-check mr-12">
                                                    <Icon.Check className="icon text-accent" />
                                                </div>
                                                <p className="text-lg text-dark-1 fw-600">Do Magic</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex items-center">
                                                <div className="icon-circle-check mr-12">
                                                    <Icon.Check className="icon text-accent" />
                                                </div>
                                                <p className="text-lg text-dark-1 fw-600">Feedback</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex items-center">
                                                <div className="icon-circle-check mr-12">
                                                    <Icon.Check className="icon text-accent" />
                                                </div>
                                                <p className="text-lg text-dark-1 fw-600">Save Time</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-60 md:mt-32">
                                        <Link href="/services/services-3" className="button -md -accent text-white -uppercase">
                                            Get Started
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/services/images-1.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-48 items-center">
                                <div className="col-xl-5 col-lg-6">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/services/images-2.jpg" alt="image" />
                                </div>
                                <div className="offset-xl-1 col-lg-6 col-md-10">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Operation</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Provide the best digital<br /> experiences</h2>
                                    </div>
                                    <div className="row y-gap-32 pt-30">
                                        <div className="col-sm-6">
                                            <h5 className="text-xl fw-600">Company Benefits</h5>
                                            <p className="mt-20">Since 2017, we have led innovation and new product delivery in business startup services delivered online.</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <h5 className="text-xl fw-600">Competitive Salary</h5>
                                            <p className="mt-20">Since 2017, we have led innovation and new product delivery in business startup services delivered online.</p>
                                        </div>
                                    </div>
                                    <div className="mt-30">
                                        <Link href="/services/services-3" className="button -md -accent text-white -uppercase">
                                            Get Started
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-48 justify-between items-center">
                                <div className="col-xl-5 col-lg-6 col-md-10 order-lg-1 order-2">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Launch</span>
                                        </div>
                                        <h2 className="sectionHeading__title">Provide the best digital<br /> experiences</h2>
                                    </div>
                                    <p className="mt-30 sm:mt-20 pr-100 lg:pr-0">With you get components and examples, including tons of variables that will help you customize this theme with ease.</p>
                                </div>
                                <div className="col-xl-5 col-lg-6 order-lg-2 order-1">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/services/images-3.jpg" alt="image" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
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
                                            <button className="button -md -white text-accent">Get Started</button>
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