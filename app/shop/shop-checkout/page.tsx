
import Layout from '@/components/layout/Layout'

import Image from 'next/image'
export default function ShopCheckout() {
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
                            <div className="row y-gap-40">
                                <div className="col-lg-7">
                                    <div className="shopCheckout-form">
                                        <form action="post" className="contact-form row x-gap-24 y-gap-40">
                                            <div className="col-12">
                                                <h4 className="text-22">Billing details</h4>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="firstName" placeholder="First name" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="lastName" placeholder="Last name" />
                                            </div>
                                            <div className="col-12">
                                                <input type="text" name="company" placeholder="Company name (optional)" />
                                            </div>
                                            <div className="col-12">
                                                <select className="selectize wide js-selectize">
                                                    <option data-display="Select">Country / Region *</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="USA">USA</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="France">France</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <input type="text" name="address" placeholder="House number adn street name" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="city" placeholder="Town / City *" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="state" placeholder="State *" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="zip" placeholder="ZIP *" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" name="phone" placeholder="Phone *" />
                                            </div>
                                            <div className="col-12">
                                                <input type="email" name="email" placeholder="Email address *" />
                                            </div>
                                            <div className="col-12">
                                                <h4 className="text-22 pb-16">Additional information</h4>
                                            </div>
                                            <div className="col-12">
                                                <textarea name="notes" id="form_notes" rows={8} placeholder="Order notes (optional)" defaultValue={""} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div>
                                        <div className="py-30 bg-white border-light rounded-8 shadow-card">
                                            <h5 className="px-40 text-22 fw-600">
                                                Your order
                                            </h5>
                                            <div className="d-flex justify-between px-40 item mt-20">
                                                <div className="py-16 text-16 fw-600 text-black">Product</div>
                                                <div className="py-16 text-16 fw-600 text-black">Subtotal</div>
                                            </div>
                                            <div className="d-flex justify-between border-top-dark px-40 item">
                                                <div className="py-16 text-grey">Hoodie x2</div>
                                                <div className="py-16 text-grey">$59.00</div>
                                            </div>
                                            <div className="d-flex justify-between px-40 item -border-none">
                                                <div className="py-16 text-grey">Seo Books x 1</div>
                                                <div className="py-16 text-grey">$67.00</div>
                                            </div>
                                            <div className="d-flex justify-between border-top-dark px-40 item -border-none">
                                                <div className="py-16 fw-600 text-black">Subtotal</div>
                                                <div className="py-16 fw-600 text-black">$178.00</div>
                                            </div>
                                            <div className="d-flex justify-between border-top-dark px-40 item">
                                                <div className="py-16 text-16 fw-600 text-black">Shipping</div>
                                                <div className="py-16 text-16 fw-600 text-black">$178.00</div>
                                            </div>
                                            <div className="d-flex justify-between border-top-dark px-40 item">
                                                <div className="py-16 text-16 fw-600 text-black">Total</div>
                                                <div className="py-16 text-16 fw-600 text-black">$9,218.00</div>
                                            </div>
                                        </div>
                                        <div className="py-30 px-40 bg-white mt-32 border-light rounded-8 shadow-card">
                                            <h5 className="text-22 fw-600">
                                                Payment
                                            </h5>
                                            <div className="mt-32">
                                                <div className="form-radio d-flex items-center">
                                                    <div className="radio">
                                                        <input type="radio" name="radio" />
                                                        <div className="radio__mark">
                                                            <div className="radio__icon" />
                                                        </div>
                                                    </div>
                                                    <h5 className="ml-12 text-16 fw-600 text-black">Direct bank transfer</h5>
                                                </div>
                                                <p className="ml-24 pl-4 mt-16">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                            </div>
                                            <div className="mt-32">
                                                <div className="form-radio d-flex items-center">
                                                    <div className="radio">
                                                        <input type="radio" name="radio" />
                                                        <div className="radio__mark">
                                                            <div className="radio__icon" />
                                                        </div>
                                                    </div>
                                                    <h5 className="ml-12 text-16 fw-600 text-black">Check payments</h5>
                                                </div>
                                            </div>
                                            <div className="mt-32">
                                                <div className="form-radio d-flex items-center">
                                                    <div className="radio">
                                                        <input type="radio" name="radio" />
                                                        <div className="radio__mark">
                                                            <div className="radio__icon" />
                                                        </div>
                                                    </div>
                                                    <h5 className="ml-12 text-16 fw-600 text-black">Cash on delivery</h5>
                                                </div>
                                            </div>
                                            <div className="mt-32">
                                                <div className="form-radio d-flex items-center">
                                                    <div className="radio">
                                                        <input type="radio" name="radio" />
                                                        <div className="radio__mark">
                                                            <div className="radio__icon" />
                                                        </div>
                                                    </div>
                                                    <h5 className="ml-12 text-16 fw-600 text-black">PayPal</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-32">
                                            <button className="button -md -accent col-12 -uppercase text-white">Place order</button>
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