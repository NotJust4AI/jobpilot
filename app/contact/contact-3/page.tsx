
import Layout from '@/components/layout/Layout'
import dynamic from 'next/dynamic'
import * as Icon from 'react-feather'

const LeafletMap = dynamic(() => import('@/components/elements/LeafletMap'), {
    ssr: false,
})

import Image from 'next/image'
export default function Contact3() {
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
                                        <h1 className="page-header__title lh-14">Contact us</h1>
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
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48 py-72 md:px-32 md:py-48 bg-white rounded-16 | t-base h:shadow-card">
                                        <div>
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/contact/3/share-location.svg" alt="icon" />
                                        </div>
                                        <h3 className="text-xl fw-600 mt-24">Location</h3>
                                        <p className="mt-16">328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                                        <a className="buttom -simple text-accent fw-600 mt-16" href="#">Open Google Map</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48 py-72 md:px-32 md:py-48 bg-white rounded-16 | t-base h:shadow-card">
                                        <div>
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/contact/3/smartwatch.svg" alt="icon" />
                                        </div>
                                        <h3 className="text-xl fw-600 mt-24">Hours</h3>
                                        <p className="mt-16">Mon to Fri: 10am to 06pm </p>
                                        <p>Sat: 10am to 02pm</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="d-flex direction-column text-center px-48 py-72 md:px-32 md:py-48 bg-white rounded-16 | t-base h:shadow-card">
                                        <div>
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/contact/3/phone-chat.svg" alt="icon" />
                                        </div>
                                        <h3 className="text-xl fw-600 mt-24">Contact</h3>
                                        <a className="text-16 fw-600 mt-16" href="#">+(1) 123 456 7890</a>
                                        <a className="text-16 fw-600 mt-4" href="#">hi@sassio.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div id="map" className="map h-md z-1">
                            <LeafletMap center={[51.505, -0.09]} zoom={13} />
                        </div>
                        <div className="container relative z-5 mt--220 sm:px-0">
                            <div className="bg-white py-60 rounded-8 shadow-card">
                                <div className="row justify-center">
                                    <div className="col-xl-10 col-11 sm:px-24">
                                        <div className="text-center">
                                            <div className="sectionHeading ">
                                                <div className="sectionHeading__subtitle">
                                                    <span>message</span>
                                                </div>
                                                <h2 className="sectionHeading__title">Tell us about yourself</h2>
                                            </div>
                                        </div>
                                        <form action="post" className="contact-form row y-gap-40 pt-60 sm:pt-40">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="name" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" name="email" placeholder="Your Email Address" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="subject" placeholder="Your Subject" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" name="phone" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <div className="form-checkbox">
                                                        <div className="checkbox">
                                                            <input type="checkbox" />
                                                            <div className="checkbox__mark">
                                                                <Icon.Check className="checkbox__icon" />
                                                            </div>
                                                        </div>
                                                        <label htmlFor="items">
                                                            I am bound by the terms of the Service I accept Privacy Policy.
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <button className="button -md -accent -uppercase text-white">Send Your Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* clients */}
                    <section className="layout-pt-sm layout-pb-lg">
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
                </div>
            </Layout>
        </>
    )
}