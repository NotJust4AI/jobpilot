
import QuantityInput from '@/components/elements/QuantityInput'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'

import * as Icon from 'react-feather'

import Image from 'next/image'
export default function ShopCart() {
    return (
        <>
            <Layout footerLayout={6}>
                <div>
                    <section className="page-header -base -dark">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-dark.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14 text-white">Shop Cart</h1>
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
                    <section className="layout-pt-lg layout-pb-lg">
                        <div className="container">
                            <div className="row justify-end">
                                <div className="col-12">
                                    <div className="px-30 py-24 rounded-8 bg-accent-light sm:d-none">
                                        <div className="row justify-between">
                                            <div className="col-md-4">
                                                <div className="text-16 fw-600 text-accent">Product</div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="text-16 fw-600 text-accent">Price</div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="text-16 fw-600 text-accent">Quantity</div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="text-16 fw-600 text-accent">Subtotal</div>
                                            </div>
                                            <div className="col-md-1">
                                                <div className="text-16 fw-600 text-accent">Remove</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-30">
                                        <div className="row y-gap-24 justify-between items-center pt-30 pb-30 border-bottom-dark">
                                            <div className="col-md-4">
                                                <div className="d-flex items-center">
                                                    <div>
                                                        <div className="size-96 bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("/img/shop/products/1.jpg")' }} />
                                                    </div>
                                                    <div className="text-16 fw-600 text-dark-1 ml-32">Grey Velvet Chair</div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 sm:mt-16">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        PRICE
                                                    </div>
                                                    <p>$350.00</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        QUANTITY
                                                    </div>
                                                    <QuantityInput />
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        SUBTOTAL
                                                    </div>
                                                    <p>$350.00</p>
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <Icon.X className="icon" />
                                            </div>
                                        </div>
                                        <div className="row y-gap-24 justify-between items-center pt-30 pb-30 border-bottom-dark">
                                            <div className="col-md-4">
                                                <div className="d-flex items-center">
                                                    <div>
                                                        <div className="size-96 bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("/img/shop/products/2.jpg")' }} />
                                                    </div>
                                                    <div className="text-16 fw-600 text-dark-1 ml-32">Grey Velvet Chair</div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 sm:mt-16">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        PRICE
                                                    </div>
                                                    <p>$350.00</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        QUANTITY
                                                    </div>
                                                    <QuantityInput />
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        SUBTOTAL
                                                    </div>
                                                    <p>$350.00</p>
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <Icon.X className="icon" />
                                            </div>
                                        </div>
                                        <div className="row y-gap-24 justify-between items-center pt-30 pb-30 border-bottom-dark">
                                            <div className="col-md-4">
                                                <div className="d-flex items-center">
                                                    <div>
                                                        <div className="size-96 bg-image rounded-8 js-lazy" style={{ backgroundImage: 'url("/img/shop/products/3.jpg")' }} />
                                                    </div>
                                                    <div className="text-16 fw-600 text-dark-1 ml-32">Grey Velvet Chair</div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 sm:mt-16">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        PRICE
                                                    </div>
                                                    <p>$350.00</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        QUANTITY
                                                    </div>
                                                    <QuantityInput />
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <div>
                                                    <div className="shopCart-products__title d-none sm:d-block mr-8">
                                                        SUBTOTAL
                                                    </div>
                                                    <p>$350.00</p>
                                                </div>
                                            </div>
                                            <div className="col-md-1">
                                                <Icon.X className="icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopCart-footer px-16 mt-30">
                                        <div className="row justify-between y-gap-32">
                                            <div className="col-xl-5">
                                                <div>
                                                    <form action="post">
                                                        <div className="d-flex justify-between pr-24 rounded-200 border-dark">
                                                            <input className="rounded-200 px-24 py-12" type="text" placeholder="Coupon Code" />
                                                            <button className="text-black fw-600" type="submit">Apply coupon</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="shopCart-footer__item">
                                                    <button className="button -md -light-accent text-accent -uppercase">Update cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-100 md:mt-60 sm:mt-40">
                                    <div className="py-30 bg-white rounded-8 shadow-card">
                                        <h5 className="px-40 text-22 fw-600">
                                            Cart Totals
                                        </h5>
                                        <div className="d-flex justify-between px-40 item mt-20">
                                            <div className="py-16 text-16 fw-600 text-black">Subtotal</div>
                                            <div className="py-16 text-16 fw-600 text-black">$1.298</div>
                                        </div>
                                        <div className="d-flex justify-between px-40 item border-top-dark">
                                            <div className="pt-16 text-16 fw-600 text-black">Total</div>
                                            <div className="pt-16 text-16 fw-600 text-black">$3.298</div>
                                        </div>
                                    </div>
                                    <Link href="shop-checkout" className="button -md -accent -uppercase text-white col-12 mt-30">Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}