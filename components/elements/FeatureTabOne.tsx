'use client'
import { useState } from "react"

import Image from 'next/image'
export default function AccordionOne() {
    const [active, setActive] = useState<number>(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }
    return (
        <>
            <div className="tabs -button-bg-white pt-60 js-tabs">
                <div className="row y-gap-48 items-center">
                    <div className="col-xl-5 col-lg-6">
                        <div className="tabs__controls js-tabs-controls">
                            <div className=" wow animate__animated animate__fadeInUp">
                                <div
                                    className={`tabs__button rounded-8 js-tabs-button ${active == 1 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(1)}
                                >
                                    <div className="d-flex rounded-8 py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-50 mr-40 md:mr-32">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/features/laptop.svg" alt="icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl fw-600 lh-1">Themes Made Easy</h4>
                                            <p className="mt-12">
                                                Our astonishing style structure makes your customization
                                                process a breeze
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" wow animate__animated animate__fadeInUp" data-wow-delay='0.2s'>
                                <div
                                    className={`tabs__button rounded-8 js-tabs-button ${active == 2 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(2)}
                                >
                                    <div className="d-flex rounded-8 py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-50 mr-40 md:mr-32">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/features/pencil.svg" alt="icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl fw-600 lh-1">Powerful Design</h4>
                                            <p className="mt-12">
                                                With ready-to-use content you'll deploy your
                                                implementation in no time
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" wow animate__animated animate__fadeInUp" data-wow-delay='0.4s'>
                                <div
                                    className={`tabs__button rounded-8 js-tabs-button ${active == 3 ? "is-active" : ""}`}
                                    onClick={() => handleOnClick(3)}
                                >
                                    <div className="d-flex rounded-8 py-36 pr-20 pl-50 md:px-30 | hover-group h:bg-white">
                                        <div className="d-flex justify-center items-center flex-grow size-icon-50 mr-40 md:mr-32">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/features/shapes.svg" alt="icon" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl fw-600 lh-1">Creative Content</h4>
                                            <p className="mt-12">
                                                Repetitive styles all across the web? Nevermind that!
                                                Shine with unique styles
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="tabs__content js-tabs-content">
                            <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"

                                                    className="initial-img"
                                                    src="/img/home-1/features/group-2.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"

                                                    className="initial-img"
                                                    src="/img/home-1/phones/images-1.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                <div className="atropos -no-shadow js-atropos">
                                    <div className="atropos-scale">
                                        <div className="atropos-rotate">
                                            <div className="atropos-inner overflow-visible d-flex justify-end">
                                                <Image
                                                    width="0"
                                                    height="0"
                                                    sizes="100vw"

                                                    className="initial-img"
                                                    src="/img/home-1/phones/images.png"
                                                    alt="image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}