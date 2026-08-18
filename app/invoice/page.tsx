
import Link from 'next/link'

import Image from 'next/image'
export default function Invoice() {
    return (
        <>
            <section className="layout-pt-lg layout-pb-lg bg-light-4">
                <div className="container sm:px-0">
                    <div className="row justify-end sm:justify-center sm:mt-48">
                        <div className="col-auto">
                            <button className="button -md -accent text-white -uppercase">Print</button>
                        </div>
                    </div>
                    <div className="bg-white shadow-card rounded-8 pt-120 md:pt-64 mt-60">
                        <div className="row y-gap-32 px-100 md:px-80 sm:px-24">
                            <div className="col-xl-3 col-lg-4">
                                <Link href="/">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/general/logo.svg" alt="logo" />
                                </Link>
                            </div>
                            <div className="col-lg-4 offset-lg-4 pt-12">
                                <div className="d-flex justify-between">
                                    <p className="text-25 fw-600">Invoice #</p>
                                    <p className="text-25 fw-600">0043128641</p>
                                </div>
                            </div>
                        </div>
                        <div className="row y-gap-32 pt-48 px-100 md:px-80 sm:px-24">
                            <div className="col-xl-3 col-lg-4">
                                <p>Invoice date:</p>
                                <p className="text-lg fw-600">03/10/2024</p>
                            </div>
                            <div className="col-lg-4 offset-lg-4">
                                <p>Due date:</p>
                                <p className="text-lg fw-600">03/10/2024</p>
                            </div>
                        </div>
                        <div className="row y-gap-32 pt-48 px-100 md:px-80 sm:px-24">
                            <div className="col-xl-3 col-lg-4">
                                <p className="text-2xl fw-600">Supplier</p>
                                <p className="mt-16">Jobio LLC</p>
                                <p>2301 Ravenswood Rd Madison, WI 53711</p>
                            </div>
                            <div className="col-lg-4 offset-lg-4">
                                <p className="text-2xl fw-600">Customer</p>
                                <p className="mt-16">John Doe</p>
                                <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                            </div>
                        </div>
                        <div className="row y-gap-32 pt-60 px-100 md:px-80 sm:px-0">
                            <div className="col-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>VAT (20%)</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Standard Plan</td>
                                            <td>$443.00</td>
                                            <td>$921.80</td>
                                            <td>$9243</td>
                                        </tr>
                                        <tr>
                                            <td>Extra Plan</td>
                                            <td>$413.00</td>
                                            <td>$912.80</td>
                                            <td>$5943</td>
                                        </tr>
                                        <tr className="border-none">
                                            <td className="text-2xl fw-600 text-dark-1">Total Due</td>
                                            <td />
                                            <td />
                                            <td className="text-2xl fw-600 text-dark-1">$9,750</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row px-16 mt-100">
                            <div className="col-12 py-48 border-top-dark">
                                <div className="d-flex justify-center flex-wrap y-gap-16 x-gap-60">
                                    <a href="#">www.jobio.com</a>
                                    <a href="#">invoice@jobio.com</a>
                                    <a href="#">(123) 123-456</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}