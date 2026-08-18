
'use client'
import Layout from '@/components/layout/Layout'
import { useState } from 'react'
import * as Icon from 'react-feather'
interface ActiveState {
    status: boolean
    key: number
}

import Image from 'next/image'
export default function Faqs() {
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
                footerLayout={11}
            >
                <div>
                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">Frequently Asked Questions</h1>
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
                            <div className="row y-gap-60 justify-center">
                                <div className="col-xl-8 col-lg-9 col-md-11">
                                    <h3 className="text-22 fw-600">Payments</h3>
                                    <div className="accordion -simple pt-32 js-accordion">
                                        <div className={active.key == 1 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(1)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black"> What does the package include?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 1 ? { maxHeight: 72 } : { maxHeight: 0 }}>
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
                                            <div className="accordion__content" style={active.key == 2 ? { maxHeight: 72 } : { maxHeight: 0 }}>
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
                                            <div className="accordion__content" style={active.key == 3 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={active.key == 4 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(4)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">Can I suggest a new feature?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 4 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-9 col-md-11">
                                    <h3 className="text-22 fw-600">Suggestions</h3>
                                    <div className="accordion -bordered pt-32 js-accordion">
                                        <div className={active.key == 5 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(5)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black"> What does the package include?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 5 ? { maxHeight: 124 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={active.key == 6 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(6)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">How does the 14-day trial work?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 6 ? { maxHeight: 124 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={active.key == 7 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(7)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">How do I pay for your service?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 7 ? { maxHeight: 124 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={active.key == 8 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(8)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">Can I suggest a new feature?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 8 ? { maxHeight: 124 } : { maxHeight: 0 }}>
                                                <div className="accordion__content__inner">
                                                    <p>When you buy Sassio, you get all you see in the demo but the images. We include SASS files for styling, complete JS files with comments, all HTML variations. Besides we include all mobile PSD mockups.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={active.key == 9 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(9)}>
                                            <div className="accordion__button text-black">
                                                <div className="accordion__icon">
                                                    <Icon.Plus className="icon" />
                                                    <Icon.Minus className="icon" />
                                                </div>
                                                <button className="text-lg md:text-base fw-600 text-black">How to restore your chat history?</button>
                                            </div>
                                            <div className="accordion__content" style={active.key == 9 ? { maxHeight: 124 } : { maxHeight: 0 }}>
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