
import Layout from '@/components/layout/Layout'
import BlogStyleOne from '@/components/sections/blog/BlogStyleOne'

import Image from 'next/image'
export default function BlogList4() {
    return (
        <>
            <Layout>
                <section className="page-header -text -">
                    <div className="container">
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">Blog Styles</h1>
                                    </div>
                                </div>
                                <div className="w-1/1" />
                                <div className="col-xl-5 col-lg-9 col-md-10">
                                    <div className="px-20">
                                        <p className="page-header__text">With we want to optimize the customization process so your team can save time when building websites.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        <BlogStyleOne />
                    </div>
                </section>
                {/* cta */}
                <section className="layout-pt-md layout-pb-md section-bg-color">
                    <div className="section-bg-color__item" />
                    <div className="bg-element -sally">
                        <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/about-2/cta/Saly.png" alt="image" />
                    </div>
                    <div className="container">
                        <div className="row y-gap-32 justify-between items-center md:text-center md:justify-center">
                            <div className="col-lg-5">
                                <div>
                                    <div className="sectionHeading ">
                                        <h2 className="sectionHeading__title">Stay in the know</h2>
                                        <p className="sectionHeading__text mt-20">Get special offers on the lates developments from Fron.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="form-newsletter md:mx-auto">
                                    <form action="post">
                                        <div className="form-group">
                                            <input className="border-light rounded-200" type="email" placeholder="Enter Your Email Address" />
                                            <button className="button -md -accent -uppercase rounded-200 text-white" type="submit">Get Started</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Layout>

        </>
    )
}