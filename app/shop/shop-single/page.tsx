
'use client'
import QuantityInput from '@/components/elements/QuantityInput'
import Layout from '@/components/layout/Layout'
import { useState } from 'react'

import * as Icon from 'react-feather'

import Image from 'next/image'
export default function ShopSingle() {
    const [active, setActive] = useState(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }

    const imageStyle = {
        width: '100%',
        minWidth: '100%',
        height: 'auto',
    }

    return (
        <>
            <Layout footerLayout={6}>
                <div>
                    <section className="pt-100 layout-pb-sm">
                        <div className="container pt-100 md:pt-60 sm:pt-40">
                            <div className="row y-gap-60 items-center">
                                <div className="col-lg-6">
                                    <div className="js-shop-slider">
                                        <div className="shopSingle-preview__image js-slider-slider">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <a href="img/shop/products/1.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                                        <div className="ratio ratio-62:60">
                                                            <Image width="0" height="0" sizes="100vw" style={imageStyle} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/1.jpg" alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a href="img/shop/products/2.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                                        <div className="ratio ratio-62:60">
                                                            <Image width="0" height="0" sizes="100vw" style={imageStyle} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/2.jpg" alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a href="img/shop/products/3.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                                        <div className="ratio ratio-62:60">
                                                            <Image width="0" height="0" sizes="100vw" style={imageStyle} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/3.jpg" alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="swiper-slide">
                                                    <a href="img/shop/products/4.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                                        <div className="ratio ratio-62:60">
                                                            <Image width="0" height="0" sizes="100vw" style={imageStyle} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/4.jpg" alt="project image" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row y-gap-10 x-gap-10 pt-10 js-slider-pagination">
                                            <div data-cursor className="col-auto gallery__item">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="size-96 rounded-8 object-fit-cover" src="/img/shop/products/1.jpg" alt="project image" />
                                            </div>
                                            <div data-cursor className="col-auto gallery__item">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="size-96 rounded-8 object-fit-cover" src="/img/shop/products/2.jpg" alt="project image" />
                                            </div>
                                            <div data-cursor className="col-auto gallery__item">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="size-96 rounded-8 object-fit-cover" src="/img/shop/products/3.jpg" alt="project image" />
                                            </div>
                                            <div data-cursor className="col-auto gallery__item">
                                                <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="size-96 rounded-8 object-fit-cover" src="/img/shop/products/4.jpg" alt="project image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-40 pb-80 lg:pl-0 md:pb-0">
                                        <h2 className="text-32 mt-4">Wild Cosmos blue hoodie</h2>
                                        <div className="text-xl fw-600 text-accent mt-12">$18.00</div>
                                        <div className="mt-30">
                                            <p>Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments and its many variants have been employed.</p>
                                        </div>
                                        <div className="shopSingle-info__action row x-gap-20 y-gap-24 pt-30">
                                            <div className="col-auto">
                                                <QuantityInput />
                                            </div>
                                            <div className="col-auto">
                                                <button className="button -md -accent -uppercase text-white">Add to cart</button>
                                            </div>
                                        </div>
                                        <div className="pt-30">
                                            <button className="d-flex items-center">
                                                <Icon.Heart className="icon size-20 mr-8" />
                                                Add to withlist
                                            </button>
                                        </div>
                                        <div className="pt-30">
                                            <p>Category: Classic</p>
                                            <p>Tags: Men, Sports, Women</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="tabs -active-accent js-tabs">
                            <div className="row pt-30 border-top-dark">
                                <div className="col-12">
                                    <div className="tabs__controls d-flex justify-center js-tabs-controls">
                                        <button className={`tabs__button js-tabs-button ${active == 1 ? "is-active" : ""}`} onClick={() => handleOnClick(1)} type="button">
                                            Description
                                        </button>
                                        <button className={`tabs__button js-tabs-button ml-32 ${active == 2 ? "is-active" : ""}`} onClick={() => handleOnClick(2)} type="button">
                                            Reviews (2)
                                        </button>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="tabs__content pt-60 js-tabs-content">
                                                <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                                    <div className="row justify-center">
                                                        <div className="col-xl-8 col-lg-9 col-md-11">
                                                            <h4 className="text-xl fw-600">This is a secondary heading</h4>
                                                            <p className="mt-20">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                                <br />
                                                                <br />
                                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                                    <div className="row justify-between">
                                                        <div className="col-xl-5 col-lg-6">
                                                            <div className="blogPost -comments">
                                                                <div className="blogPost__content">
                                                                    <h2 className="text-22 fw-600">
                                                                        02 Comments
                                                                    </h2>
                                                                    <ul className="comments__list mt-32">
                                                                        <li className="comments__item">
                                                                            <div className="comments__item-inner md:direction-column">
                                                                                <div className="comments__img size-64">
                                                                                    <div className="bg-image size-64 rounded-full js-lazy" style={{ backgroundImage: 'url("/img/avatars/2.png")' }} />
                                                                                </div>
                                                                                <div className="comments__body md:mt-16">
                                                                                    <div className="comments__header">
                                                                                        <h4 className="text-xl fw-600 lh-16">Brooklyn Simmons</h4>
                                                                                        <p className="mt-10">July 21, 2022</p>
                                                                                    </div>
                                                                                    <div className="comments__text mt-10">
                                                                                        <p>Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="comments__item">
                                                                            <div className="comments__item-inner md:direction-column">
                                                                                <div className="comments__img size-64">
                                                                                    <div className="bg-image size-64 rounded-full js-lazy" style={{ backgroundImage: 'url("/img/avatars/3.png")' }} />
                                                                                </div>
                                                                                <div className="comments__body md:mt-16">
                                                                                    <div className="comments__header">
                                                                                        <h4 className="text-xl fw-600 lh-16">Kathryn Murphy</h4>
                                                                                        <p className="mt-10">Web Designer</p>
                                                                                    </div>
                                                                                    <div className="comments__text mt-10">
                                                                                        <p>Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="respondForm">
                                                                <h3 className="text-22 mb-30">
                                                                    Leave a Reply
                                                                </h3>
                                                                <form className="contact-form respondForm__form row y-gap-32" action="#">
                                                                    <div className="col-lg-6">
                                                                        <input type="text" name="name" placeholder="Full Name" />
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <input type="text" name="email" placeholder="Your Email Address" />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <input type="text" name="website" placeholder="Website" />
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <textarea name="comment" placeholder="Message" rows={8} defaultValue={""} />
                                                                    </div>
                                                                    <div className="form-checkbox col-12">
                                                                        <label>
                                                                            <span className="checkbox-wrap">
                                                                                <input name="wp-comments-cookies-consent" type="checkbox" />
                                                                                <span />
                                                                            </span>
                                                                            I agree that my submitted data is being collected and stored. *
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <button type="submit" name="submit" id="submit" className="button -md -accent -uppercase text-white">
                                                                            Submit comment
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionHeading ">
                                        <div className="sectionHeading__subtitle">
                                            <span>Keep reading...</span>
                                        </div>
                                        <h2 className="sectionHeading__title">You may also like</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row y-gap-32 pt-60 sm:pt-40">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="text-center">
                                        <div className="ratio ratio-27:30 hover-group">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/1.jpg" alt="Product image" />
                                            <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                    <Icon.Eye className="icon size-20" />
                                                </a>
                                                <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                    <Icon.Heart className="icon size-20" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="shopCard__content mt-20">
                                            <div>
                                                <a href="#" className="decoration-none">Clothing</a>,
                                                <a href="#" className="decoration-none">Glasses</a>,
                                                <a href="#" className="decoration-none">T-Shirts</a>
                                            </div>
                                            <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                            <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                            <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="text-center">
                                        <div className="ratio ratio-27:30 hover-group">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/2.jpg" alt="Product image" />
                                            <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                    <Icon.Eye className="icon size-20" />
                                                </a>
                                                <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                    <Icon.Heart className="icon size-20" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="shopCard__content mt-20">
                                            <div>
                                                <a href="#" className="decoration-none">Clothing</a>,
                                                <a href="#" className="decoration-none">Glasses</a>,
                                                <a href="#" className="decoration-none">T-Shirts</a>
                                            </div>
                                            <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                            <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                            <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="text-center">
                                        <div className="ratio ratio-27:30 hover-group">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/3.jpg" alt="Product image" />
                                            <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                    <Icon.Eye className="icon size-20" />
                                                </a>
                                                <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                    <Icon.Heart className="icon size-20" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="shopCard__content mt-20">
                                            <div>
                                                <a href="#" className="decoration-none">Clothing</a>,
                                                <a href="#" className="decoration-none">Glasses</a>,
                                                <a href="#" className="decoration-none">T-Shirts</a>
                                            </div>
                                            <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                            <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                            <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="text-center">
                                        <div className="ratio ratio-27:30 hover-group">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/4.jpg" alt="Product image" />
                                            <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                    <Icon.Eye className="icon size-20" />
                                                </a>
                                                <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                    <Icon.Heart className="icon size-20" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="shopCard__content mt-20">
                                            <div>
                                                <a href="#" className="decoration-none">Clothing</a>,
                                                <a href="#" className="decoration-none">Glasses</a>,
                                                <a href="#" className="decoration-none">T-Shirts</a>
                                            </div>
                                            <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                            <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                            <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                Add to cart
                                            </a>
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