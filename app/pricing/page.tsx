'use client'
import { useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function Pricing() {
    useEffect(() => {
        const handleClick = (event:any) => {
            const target = event.target.closest('[data-switch]')
            if (!target) return

            const trigger = target.getAttribute('data-switch')
            if (!trigger) return

            const elementsToToggle = document.querySelectorAll(trigger)

            elementsToToggle.forEach(element => {
                element.classList.toggle('is-active')
            })
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    return (
        <>
            <Layout
                footerLayout={11}
            >
                <section className="page-header -base">
                    <div className="page-header__bg">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                    </div>
                    <div className="page-header__content">
                        <div className="row justify-center text-center">
                            <div className="col-lg-9 col-md-10">
                                <div>
                                    <h1 className="page-header__title lh-14">Pricing</h1>
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
                <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        {/* row start */}
                        <div className="row justify-center text-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Plans</span>
                                    </div>
                                    <h2 className="sectionHeading__title">Simple Pricing</h2>
                                </div>
                                <div className="price-switch mt-32 justify-center">
                                    <span>Monthly</span>
                                    <div className="form-switch">
                                        <div className="switch" data-switch=".js-switch-content">
                                            <input type="checkbox" />
                                            <span className="switch__slider" />
                                        </div>
                                    </div>
                                    <span>Annually Save 30%</span>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row start */}
                        <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                        <div className="text-xl lh-1 fw-600">Basic</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                        </div>
                                        <div>per month</div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -outline-dark text-black -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-light-4">
                                        <div className="badge absolute-x-center top-30 bg-accent text-white">Most Popular</div>
                                        <div className="text-xl lh-1 fw-600">Professional</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">$599.95</h3>
                                            <h3 className="text-3xl fw-700 mt-4">$899.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -accent text-white -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                        <div className="text-xl lh-1 fw-600">Business</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                            <h3 className="text-3xl fw-700 mt-4">$1299.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -outline-dark text-black -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-lg section-bg-color">
                    <div className="section-bg-color__item -wide bg-light-4" />
                    <div className="container">
                        {/* row start */}
                        <div className="row justify-center text-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">Simple Pricing for Your Team</h2>
                                    <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row start */}
                        <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                        <div className="text-xl lh-1 fw-600">Basic</div>
                                        <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                        <div>per month</div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -dark-blue rounded-8 text-white ">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-blue-dark">
                                        <div className="badge absolute-x-center top-30 bg-accent text-white">Most Popular</div>
                                        <div className="text-xl lh-1 fw-600 text-white">Professional</div>
                                        <h3 className="text-3xl fw-700 mt-4 text-white">$599.95</h3>
                                        <div className="text-white opac-50">per month</div>
                                        <p className="text-left text-white mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32 text-white">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -white text-dark-1 rounded-8 -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                        <div className="text-xl lh-1 fw-600">Business</div>
                                        <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                        <div>per month</div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -dark-blue rounded-8 text-white ">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-sm">
                    <div className="container">
                        {/* row start */}
                        <div className="row justify-center text-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Plans</span>
                                    </div>
                                    <h2 className="sectionHeading__title">Simple Pricing</h2>
                                </div>
                                <div className="price-switch mt-32 justify-center">
                                    <span>Monthly</span>
                                    <div className="form-switch">
                                        <div className="switch" data-switch=".js-switch-content">
                                            <input type="checkbox" />
                                            <span className="switch__slider" />
                                        </div>
                                    </div>
                                    <span>Annually Save 30%</span>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row start */}
                        <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                        <div className="text-xl lh-1 fw-600">Basic</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                        </div>
                                        <div>per month</div>
                                        <div className="mt-48">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/1.png" alt="image" />
                                        </div>
                                        <div className="d-flex justify-center mt-80">
                                            <Link href="pricing" className="button -md -light-purple text-black">
                                                Join This Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center shadow-card bg-white border-purple">
                                        <div className="text-xl lh-1 fw-600 text-purple">Professional</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 text-purple mt-4">$599.95</h3>
                                            <h3 className="text-3xl fw-700 text-purple mt-4">$899.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <div className="mt-48">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/2.png" alt="image" />
                                        </div>
                                        <div className="d-flex justify-center mt-80">
                                            <Link href="pricing" className="button -md -purple text-white">
                                                Join This Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                        <div className="text-xl lh-1 fw-600">Business</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                            <h3 className="text-3xl fw-700 mt-4">$1299.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <div className="mt-48">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/1/3.png" alt="image" />
                                        </div>
                                        <div className="d-flex justify-center mt-80">
                                            <Link href="pricing" className="button -md -light-purple text-black">
                                                Join This Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                <section className="layout-pt-sm layout-pb-sm">
                    <div className="container">
                        {/* row start */}
                        <div className="row justify-center text-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Plans</span>
                                    </div>
                                    <h2 className="sectionHeading__title">Simple Pricing</h2>
                                </div>
                                <div className="price-switch mt-32 justify-center">
                                    <span>Monthly</span>
                                    <div className="form-switch">
                                        <div className="switch" data-switch=".js-switch-content">
                                            <input type="checkbox" />
                                            <span className="switch__slider" />
                                        </div>
                                    </div>
                                    <span>Annually Save 30%</span>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row start */}
                        <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                        <div className="text-xl lh-1 fw-600">Basic</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                        </div>
                                        <div>per month</div>
                                        <div className="pt-24">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/2/1.png" alt="image" />
                                        </div>
                                        <ul className="y-gap-18 pt-20">
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-32">
                                            <Link href="pricing" className="button -md -outline-dark -uppercase text-dark-1">
                                                Get Started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-dark-3">
                                        <div className="text-xl lh-1 fw-600 text-white">Professional</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 text-white mt-4">$599.95</h3>
                                            <h3 className="text-3xl fw-700 text-white mt-4">$899.95</h3>
                                        </div>
                                        <div className="text-white opac-60">per month</div>
                                        <div className="py-8">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/2/2.png" alt="image" />
                                        </div>
                                        <ul className="y-gap-18 pt-20 text-white">
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 text-white mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-32">
                                            <Link href="pricing" className="button -md -dark-7 -uppercase text-white">
                                                Get Started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white border-light">
                                        <div className="text-xl lh-1 fw-600">Business</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                            <h3 className="text-3xl fw-700 mt-4">$1299.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <div className="pt-24">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/2/3.png" alt="image" />
                                        </div>
                                        <ul className="y-gap-18 pt-20">
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex justify-center items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-32">
                                            <Link href="pricing" className="button -md -outline-dark -uppercase text-dark-1">
                                                Get Started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                <section className="layout-pt-sm layout-pb-lg">
                    <div className="container">
                        {/* row start */}
                        <div className="row justify-center text-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="sectionHeading ">
                                    <h2 className="sectionHeading__title">Choose a plan that's right for you</h2>
                                    <p className="sectionHeading__text mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row start */}
                        <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                        <div className="text-xl lh-1 fw-600">Basic</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                        </div>
                                        <div>per month</div>
                                        <div className="pt-32">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/3/1.svg" alt="image" />
                                        </div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-40">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -dark-4 -uppercase col-12 text-white">
                                                Join This Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                        <div className="text-xl lh-1 fw-600 text-red-2">Professional</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 text-red-2 mt-4">$599.95</h3>
                                            <h3 className="text-3xl fw-700 text-red-2 mt-4">$899.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <div className="pt-32">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/3/2.svg" alt="image" />
                                        </div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-40">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -red-2 -uppercase col-12 text-white">
                                                Join This Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                        <div className="text-xl lh-1 fw-600">Business</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                            <h3 className="text-3xl fw-700 mt-4">$1299.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <div className="pt-32">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/pricing/3/3.svg" alt="image" />
                                        </div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-40">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -dark-4 -uppercase col-12 text-white">
                                                Join This Plan
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-lg section-bg-color">
                    <div className="section-bg-color__item -wide bg-dark-5" />
                    <div className="container">
                        {/* row start */}
                        <div className="row justify-center text-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="sectionHeading -light">
                                    <div className="sectionHeading__subtitle">
                                        <span>Plans</span>
                                    </div>
                                    <h2 className="sectionHeading__title">Simple Pricing</h2>
                                </div>
                                <div className="price-switch mt-32 justify-center">
                                    <span className="text-white opac-60">Monthly</span>
                                    <div className="form-switch">
                                        <div className="switch" data-switch=".js-switch-content">
                                            <input type="checkbox" />
                                            <span className="switch__slider" />
                                        </div>
                                    </div>
                                    <span className="text-white opac-60">Annually Save 30%</span>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row start */}
                        <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-dark-6">
                                        <div className="text-xl lh-1 text-white fw-600">Basic</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 text-white mt-4">Free</h3>
                                            <h3 className="text-3xl fw-700 text-white mt-4">Free</h3>
                                        </div>
                                        <div className="text-white opac-50">per month</div>
                                        <p className="text-left text-white opca-80 mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32 text-white">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -outline-white text-white -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-dark-6">
                                        <div className="badge absolute-x-center top-30 bg-accent text-white">Most Popular</div>
                                        <div className="text-xl lh-1 text-white fw-600">Professional</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 text-white mt-4">$599.95</h3>
                                            <h3 className="text-3xl fw-700 text-white mt-4">$899.95</h3>
                                        </div>
                                        <div className="text-white opac-50">per month</div>
                                        <p className="text-left text-white opca-80 mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32 text-white">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -accent text-white -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-dark-6">
                                        <div className="text-xl lh-1 text-white fw-600">Business</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 text-white mt-4">$999.95</h3>
                                            <h3 className="text-3xl fw-700 text-white mt-4">$1299.95</h3>
                                        </div>
                                        <div className="text-white opac-50">per month</div>
                                        <p className="text-left text-white opca-80 mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32 text-white">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-teal mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -outline-white text-white -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        {/* row start */}
                        <div className="row justify-center text-center">
                            <div className="col-xl-7 col-lg-9">
                                <div className="sectionHeading ">
                                    <div className="sectionHeading__subtitle">
                                        <span>Plans</span>
                                    </div>
                                    <h2 className="sectionHeading__title">Simple Pricing</h2>
                                </div>
                                <div className="price-switch mt-32 justify-center">
                                    <span>Monthly</span>
                                    <div className="form-switch">
                                        <div className="switch" data-switch=".js-switch-content">
                                            <input type="checkbox" />
                                            <span className="switch__slider" />
                                        </div>
                                    </div>
                                    <span>Annually Save 30%</span>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                        {/* row start */}
                        <div className="row x-gap-32 y-gap-32 layout-pt-sm">
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                        <div className="text-xl lh-1 fw-600">Basic</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                            <h3 className="text-3xl fw-700 mt-4">Free</h3>
                                        </div>
                                        <div>per month</div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -outline-dark text-black -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                        <div className="badge absolute-x-center top-30 bg-accent text-white">Most Popular</div>
                                        <div className="text-xl lh-1 fw-600">Professional</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">$599.95</h3>
                                            <h3 className="text-3xl fw-700 mt-4">$899.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -dark-8 text-white -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div>
                                    <div className="relative rounded-16 pt-80 pb-60 px-40 text-center bg-white shadow-card">
                                        <div className="text-xl lh-1 fw-600">Business</div>
                                        <div className="switch-content js-switch-content">
                                            <h3 className="text-3xl fw-700 mt-4">$999.95</h3>
                                            <h3 className="text-3xl fw-700 mt-4">$1299.95</h3>
                                        </div>
                                        <div>per month</div>
                                        <p className="text-left mt-32">Standard listing submission, active for<br /> 30 days.</p>
                                        <ul className="y-gap-18 pt-32">
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">All Operating Supported</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Great Interface</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Allows encryption</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">Face recognized system</p>
                                            </li>
                                            <li className="d-flex items-center">
                                                <Icon.Check className="size-14 text-accent mr-10" />
                                                <p className="lh-13">24/7 Full support</p>
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-center mt-40">
                                            <Link href="pricing" className="button -md -outline-dark text-black -uppercase">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
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