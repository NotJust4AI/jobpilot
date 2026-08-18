
import Layout from '@/components/layout/Layout'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function ShopOrder() {
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
                                        <h1 className="page-header__title lh-14 text-white">Order Received</h1>
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
                            <div className="row no-gutters justify-content-center">
                                <div className="col-xl-8 col-lg-9 col-md-11">
                                    <div className="shopCompleted-header">
                                        <div className="icon">
                                            <Icon.Check className="icon" />
                                        </div>
                                        <h2 className="title">
                                            Your order is completed!
                                        </h2>
                                        <div className="subtitle">
                                            Thank you. Your order has been received.
                                        </div>
                                    </div>
                                    <div className="shopCompleted-info bg-light-4">
                                        <div className="row no-gutters y-gap-32">
                                            <div className="col-md-3 col-sm-6">
                                                <div className="shopCompleted-info__item">
                                                    <div className="subtitle">Order Number</div>
                                                    <div className="title text-accent mt-4">13119</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="shopCompleted-info__item">
                                                    <div className="subtitle">Date</div>
                                                    <div className="title text-accent mt-4">27/07/2024</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="shopCompleted-info__item">
                                                    <div className="subtitle">Total</div>
                                                    <div className="title text-accent mt-4">$40.10</div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6">
                                                <div className="shopCompleted-info__item">
                                                    <div className="subtitle">Payment Method</div>
                                                    <div className="title text-accent mt-4">Direct Bank Transfer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shopCompleted-footer bg-white border-light rounded-8 shadow-card">
                                        <div className="shopCompleted-footer__wrap">
                                            <h5 className="title">
                                                Order details
                                            </h5>
                                            <div className="item">
                                                <span className="text-16 fw-600 text-black">Product</span>
                                                <span className="text-16 fw-600 text-black">Subtotal</span>
                                            </div>
                                            <div className="item">
                                                <span>Hoodie x2</span>
                                                <span>$59.00</span>
                                            </div>
                                            <div className="item -border-none">
                                                <span>Seo Books x 1</span>
                                                <span>$67.00</span>
                                            </div>
                                            <div className="item -border-none">
                                                <span className="text-16 fw-600 text-black">Subtotal</span>
                                                <span className="text-16 fw-600 text-black">$178.00</span>
                                            </div>
                                            <div className="item">
                                                <span className="text-16 fw-600 text-black">Shipping</span>
                                                <span className="text-16 fw-600 text-black">$178.00</span>
                                            </div>
                                            <div className="item">
                                                <span className="text-16 fw-600 text-black">Total</span>
                                                <span className="text-16 fw-600 text-black">$9,218.00</span>
                                            </div>
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