
'use client'
import React from 'react'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'



export default function TestimonialSliderOne() {

    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                navigation={{
                    prevEl: ".js-prev",
                    nextEl: ".js-next",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide className="swiper-slide">
                    <div className="testimonials -small">
                        <h4 className="testimonials__title text-xl fw-600 text-dark-1">
                            Design Quality
                        </h4>
                        <p className="testimonials__text mt-20">
                            The template is really nice and offers quite a large set of
                            options. It’s beautiful and the coding is done quickly and
                            seamlessly. Thank you!
                        </p>
                        <div className="testimonials__author mt-24">
                            <div className="testimonials__name text-lg fw-600 text-dark-1">
                                Devon Lane
                            </div>
                            <div className="testimonials__position">
                                Team Leader, Paypal
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonials -small">
                        <h4 className="testimonials__title text-xl fw-600 text-dark-1">
                            Design Quality
                        </h4>
                        <p className="testimonials__text mt-20">
                            The template is really nice and offers quite a large set of
                            options. It’s beautiful and the coding is done quickly and
                            seamlessly. Thank you!
                        </p>
                        <div className="testimonials__author mt-24">
                            <div className="testimonials__name text-lg fw-600 text-dark-1">
                                Devon Lane
                            </div>
                            <div className="testimonials__position">
                                Team Leader, Paypal
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonials -small">
                        <h4 className="testimonials__title text-xl fw-600 text-dark-1">
                            Design Quality
                        </h4>
                        <p className="testimonials__text mt-20">
                            The template is really nice and offers quite a large set of
                            options. It’s beautiful and the coding is done quickly and
                            seamlessly. Thank you!
                        </p>
                        <div className="testimonials__author mt-24">
                            <div className="testimonials__name text-lg fw-600 text-dark-1">
                                Devon Lane
                            </div>
                            <div className="testimonials__position">
                                Team Leader, Paypal
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="testimonials -small">
                        <h4 className="testimonials__title text-xl fw-600 text-dark-1">
                            Design Quality
                        </h4>
                        <p className="testimonials__text mt-20">
                            The template is really nice and offers quite a large set of
                            options. It’s beautiful and the coding is done quickly and
                            seamlessly. Thank you!
                        </p>
                        <div className="testimonials__author mt-24">
                            <div className="testimonials__name text-lg fw-600 text-dark-1">
                                Devon Lane
                            </div>
                            <div className="testimonials__position">
                                Team Leader, Paypal
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="nav -slider justify-end md:justify-start mt-60 md:mt-32">
                <div className="nav__item -left js-prev">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-left icon"
                    >
                        <line x1={19} y1={12} x2={5} y2={12} />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>

                </div>
                <div className="nav__item -right ml-20 js-next">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-right icon"
                    >
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>

                </div>
            </div>
        </>


    )
}