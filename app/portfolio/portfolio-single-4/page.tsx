
import Layout from '@/components/layout/Layout'
import Link from "next/link"
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function PortfolioSingle4() {
    return (
        <>
            <Layout footerLayout={11}>
                <div>
                    <section className="page-header -text -">
                        <div className="container">
                            <div className="page-header__content">
                                <div className="row justify-center text-center">
                                    <div className="col-xl-6 col-lg-9 col-md-10">
                                        <div>
                                            <h1 className="page-header__title lh-14">Custom Designs</h1>
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
                            <div className="page-masthead__content js-pin-container">
                                <div className="row y-gap-40 justify-between">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="gallery y-gap-32">
                                            <a href="img/portfolio/single/4/1.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                                <div className="ratio ratio-57:60">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover" src="/img/portfolio/single/4/1.jpg" alt="project image" />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                            </a>
                                            <a href="img/portfolio/single/4/2.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                                <div className="ratio ratio-57:60">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover" src="/img/portfolio/single/4/2.jpg" alt="project image" />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                            </a>
                                            <a href="img/portfolio/single/4/3.jpg" className="gallery__item js-gallery" data-gallery="gallery1">
                                                <div className="ratio ratio-57:60">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover" src="/img/portfolio/single/4/3.jpg" alt="project image" />
                                                </div>
                                                <div className="gallery__button">
                                                    <Icon.Plus className="icon" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-lg-5 col-md-10">
                                        <div className="text-left pb-60 md:pb-0 js-pin-content">
                                            <div className="sectionHeading ">
                                                <h2 className="sectionHeading__title">Lifestars Bags</h2>
                                            </div>
                                            <p className="mt-20">Dicta sunt explicabo. Nemo ipsam voluptatem quia voluptas aspernatur aut odit aut fugit, sed quia. Dicta sunt explicabo. Nemo enim ipsam voluptas aspernatur aut odit.</p>
                                            <div className="col-xl-8 px-0">
                                                <div className="row x-gap-48 y-gap-48 justify-between pt-40">
                                                    <div className="col-6">
                                                        <h5 className="text-xl fw-600">Client</h5>
                                                        <div className="y-gap-4 mt-12">
                                                            <p>Creative Layers</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="text-xl fw-600">Year</h5>
                                                        <div className="y-gap-4 mt-12">
                                                            <p>2024</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="text-xl fw-600">Sevices</h5>
                                                        <div className="y-gap-4 mt-12">
                                                            <p>Content Strategy</p>
                                                            <p>Design</p>
                                                            <p>Development</p>
                                                            <p>Video Production</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5 className="text-xl fw-600">Awards</h5>
                                                        <div className="y-gap-4 mt-12">
                                                            <p>Site of the Day</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="button -md -accent -uppercase text-white mt-32">See Live</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="layout-pb-lg">
                        <section>
                            <div className="container">
                                <div className="related-nav py-30">
                                    <div className="row justify-between items-center">
                                        <div className="col-md-auto col-6">
                                            <Link href="/portfolio/portfolio-single-3" className="related-nav__item -prev decoration-none">
                                                <div className="related-nav__arrow">
                                                    <Icon.ArrowLeft className="icon size-20 pt-4" />
                                                </div>
                                                <div className="related-nav__content">
                                                    <div className="text-xl fw-600">Prev</div>
                                                    <p className="text-dark mt-8">Avg Event Cart</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-auto md:d-none">
                                            <div className="related-nav__icon row y-gap-4 x-gap-4">
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                                <div className="col-4">
                                                    <span />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-auto col-6 d-flex justify-end">
                                            <a href="portfolio-single-4.html" className="related-nav__item -prev text-right decoration-none">
                                                <div className="related-nav__content">
                                                    <div className="text-xl fw-600">Next</div>
                                                    <p className="text-dark mt-8">Realy Art</p>
                                                </div>
                                                <div className="related-nav__arrow">
                                                    <Icon.ArrowRight className="icon size-20 pt-4" />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
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