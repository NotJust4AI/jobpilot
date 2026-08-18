
import Layout from '@/components/layout/Layout'
import BlogStyleSeven from '@/components/sections/blog/BlogStyleSeven'

import Image from 'next/image'
export default function BlogList7() {
    return (
        <>
            <Layout
                headerLayout={2}
                footerLayout={11}
                navColor="text-white"
                logo="logo-flat"
            >
                <div>
                    <section className="page-header -image -">
                        <div className="page-header__bg overlay-black-50 z-index--1">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-image-blog.jpg" alt="Page header" />
                        </div>
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-between items-center md:justify-center md:text-center">
                                    <div className="col-lg-6 col-md-10">
                                        <div>
                                            <h1 className="page-header__title lh-14 text-white">Blog Styles</h1>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-10">
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
                            <BlogStyleSeven />
                            <div className="row justify-center pt-60 sm:pt-40">
                                <div className="col-auto">
                                    <button className="button -md -bg-title-dark -uppercase text-white" data-loadmore-trigger=".js-loadmore-content">Load More</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="svg-shape">
                        <svg width={1920} height={60} viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z" fill="#1A3454" />
                        </svg>
                    </div>
                </div>

            </Layout>

        </>
    )
}