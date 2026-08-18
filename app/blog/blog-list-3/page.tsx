
import Layout from '@/components/layout/Layout'
import BlogStyleThree from '@/components/sections/blog/BlogStyleThree'
import Link from 'next/link'

import Image from 'next/image'
export default function BlogList3() {
    return (
        <>
            <Layout>
                <div>
                    <section className="page-header -base -dark">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-dark.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-xl-4 col-lg-9 col-md-10">
                                    <div>
                                        <div>
                                            <h1 className="page-header__title lh-14 text-white">Blog Styles</h1>
                                        </div>
                                        <div className="px-20">
                                            <p className="page-header__text text-white opac-80">With we want to optimize the customization process so your team can save time when building websites.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-lg">
                        <div className="container">
                            <BlogStyleThree />
                            <div className="row justify-center pt-60 sm:pt-40">
                                <div className="col-auto">
                                    <button className="button -md -accent -uppercase text-white" data-loadmore-trigger=".js-loadmore-content">Load More</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative z-5">
                        <div className="container">
                            <div className="relative rounded-16">
                                <div className="absolute-full-center z--1">
                                    <div className="bg-image rounded-16 js-lazy loaded" style={{ backgroundImage: 'url("../img/home-2/footer/cta.png")' }} />
                                </div>

                                <div className="py-50 px-64">
                                    <div className="row y-gap-32 justify-between items-center">
                                        <div className="col-auto">
                                            <h3 className="text-30 lh-15 text-white">Join Sassio and increase<br /> your productivity.</h3>
                                        </div>
                                        <div className="col-auto">
                                            <Link href="/login" className="button -md -white rounded-8 text-accent">Get Started</Link>
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