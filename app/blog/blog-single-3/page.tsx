
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function BlogSingle3() {
    return (
        <>
            <Layout footerLayout={11}>
                <div>
                    <section className="pt-100 pb-120 lg:pt-80 lg:pb-100 lg:pt-60 md:pb-60">
                        <div className="container pt-100 sm:pt-60">
                            <div className="row justify-center text-center">
                                <div className="col-xl-7 col-lg-9">
                                    <div className="d-flex items-center direction-column">
                                        <div>
                                            <h1 className="text-3xl sm:text-32 lh-16 fw-700">The best remote UX and UI design conferences to attend in 2022</h1>
                                        </div>
                                        <div className="row items-center y-gap-10 x-gap-10 pt-20">
                                            <div className="col-auto">
                                                <a href="#" className="decoration-none">Ronald Tufan</a>
                                            </div>
                                            <div className="col-auto">
                                                <span className="d-block size-4 rounded-full bg-font-dark" />
                                            </div>
                                            <div className="col-auto">
                                                <a href="#" className="decoration-none">July 20, 2022</a>
                                            </div>
                                            <div className="col-auto">
                                                <span className="d-block size-4 rounded-full bg-font-dark" />
                                            </div>
                                            <div className="col-auto">
                                                <a href="#" className="d-flex items-center decoration-none">
                                                    <Icon.MessageCircle className="icon size-16 mr-4" />
                                                    22
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container-wide">
                            <div className="ratio ratio-16:9 rounded-8 bg-image js-lazy" style={{ backgroundImage: 'url("../img/blog/single-page/bg.jpg")' }} />
                        </div>
                    </section>
                    <section className="layout-pt-lg sm:pt-40 layout-pb-lg relative js-pin-container" data-pin="onCenter">
                        <div className="container">
                            <div className="blogSocials js-pin-content">
                                <div className="row y-gap-10 d-flex direction-column text-center">
                                    <div className="col-12">
                                        <a href="#" className="text-dark-1">
                                            <i className="fa fa-facebook" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <a href="#" className="text-dark-1">
                                            <i className="fa fa-twitter" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <a href="#" className="text-dark-1">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="col-12">
                                        <a href="#" className="text-dark-1">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </div>
                                    <div className="col-12 mt-10">
                                        <p className="blogSocials__text fw-600 text-dark-1">Share</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blogSection">
                                <div className="blogCard">
                                    <div className="row justify-center">
                                        <div className="col-xl-8 col-lg-9 col-md-11">
                                            <div className="blogCard__content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    <br /><br />
                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                                </p>
                                                <h4 className="text-xl fw-600 mt-60">This is a secondary heading</h4>
                                                <p className="mt-20">Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                                <div className="py-24 pl-100 md:pl-80 sm:px-32 border-left-2-accent text-center mt-60 md:mt-40">
                                                    <div>
                                                        <i className="icon icon-quote" />
                                                    </div>
                                                    <div className="text-dark-1 fw-600 italic text-2xl lh-17">
                                                        The template is really nice and offers quite a large set of options. It's beautiful and the coding is done quickly and seamlessly. Thank you!
                                                    </div>
                                                </div>
                                                <p className="mt-60 md:mt-40">
                                                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
                                                    <br /><br />
                                                    Ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 pt-60 md:pt-40">
                                            <div className="row y-gap-32">
                                                <div className="col-sm-6">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/blog/single-page/1.jpg" alt="image" className="initial-img rounded-8" />
                                                </div>
                                                <div className="col-sm-6">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/blog/single-page/2.jpg" alt="image" className="initial-img rounded-8" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-8 col-lg-9 col-md-11 pt-60 md:pt-40">
                                            <div className="blogCard__content">
                                                <h4 className="text-xl fw-600">This is a secondary heading</h4>
                                                <p className="mt-20">Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                                <h4 className="text-xl fw-600 mt-60">Do something that keeps you live</h4>
                                                <p className="mt-20">Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-center pt-60 md:pt-40">
                                    <div className="col-xl-8 col-lg-9 col-md-11">
                                        <div className="row x-gap-10 y-gap-10">
                                            <div className="col-auto">
                                                <a href="#" className="d-block px-12 lh-2 bg-white border-dark rounded-4 decoration-none | t-base h:bg-accent h:text-white">
                                                    Web Design
                                                </a>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#" className="d-block px-12 lh-2 bg-white border-dark rounded-4 decoration-none | t-base h:bg-accent h:text-white">
                                                    UX/UI
                                                </a>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#" className="d-block px-12 lh-2 bg-white border-dark rounded-4 decoration-none | t-base h:bg-accent h:text-white">
                                                    Blogger
                                                </a>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#" className="d-block px-12 lh-2 bg-white border-dark rounded-4 decoration-none | t-base h:bg-accent h:text-white">
                                                    Development
                                                </a>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-60">
                                            <div>
                                                <div className="bg-image size-64 rounded-full js-lazy" style={{ backgroundImage: 'url("../img/avatars/4.png")' }} />
                                            </div>
                                            <div className="ml-30 md:ml-16">
                                                <h4 className="text-xl lh-16 fw-600">Brooklyn Simmons</h4>
                                                <p className="mt-10">Medical Assistant</p>
                                                <p className="mt-10">Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam scelerisque massa vel augue placerat, a tempor sem egestas. Curabitur placerat finibus lacus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-center layout-pt-lg">
                                    <div className="col-xl-8 col-lg-9 col-md-11">
                                        <div className="border-top-dark border-bottom-dark py-30">
                                            <div className="row x-gap-72 justify-between items-center">
                                                <div className="col-md-5 col-6">
                                                    <a href="#" className="related-nav__item -prev decoration-none ">
                                                        <div className="related-nav__arrow">
                                                            <Icon.ArrowLeft className="icon size-20 pt-4" />
                                                        </div>
                                                        <div className="related-nav__content">
                                                            <div className="text-xl fw-600">Prev</div>
                                                            <p className="text-dark mt-8">5 awesome steps to get rid of stress and routine</p>
                                                        </div>
                                                    </a>
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
                                                <div className="col-md-5 col-6 d-flex justify-end">
                                                    <a href="#" className="related-nav__item -prev text-right decoration-none">
                                                        <div className="related-nav__content">
                                                            <div className="text-xl fw-600">Next</div>
                                                            <p className="text-dark mt-8">Happy clients leave positive feedback less often</p>
                                                        </div>
                                                        <div className="related-nav__arrow">
                                                            <Icon.ArrowRight className="icon size-20 pt-4" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-center layout-pt-lg">
                                    <div className="col-xl-8 col-lg-9 col-md-11">
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
                                                    <textarea name="comment" placeholder="Message" rows={4} defaultValue={""} />
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
                                        <div className="blogPost -comments pt-60">
                                            <div className="blogPost__content">
                                                <h2 className="text-22">
                                                    02 Comments
                                                </h2>
                                                <ul className="comments__list mt-32">
                                                    <li className="comments__item">
                                                        <div className="comments__item-inner md:direction-column">
                                                            <div className="comments__img size-64">
                                                                <div className="bg-image size-64 rounded-full js-lazy" style={{ backgroundImage: 'url("../img/avatars/2.png")' }} />
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
                                                                <div className="bg-image size-64 rounded-full js-lazy" style={{ backgroundImage: 'url("../img/avatars/3.png")' }} />
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
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pb-lg">
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
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <Link href="blog-single-1" className="ratio ratio-37:25">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/1.jpg" alt="image" />
                                            <div className="d-flex justify-end items-start absolute-full-center py-10 px-10">
                                                <div className="px-12 py-4 bg-white rounded-8">
                                                    <p>Web Design</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="mt-20">
                                            <a href="#" className="d-block decoration-none mb-8">November 23, 2024</a>
                                            <h3 className="text-xl lh-16 fw-600">Problems everyone has when working remotely and how to solve them</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <Link href="blog-single-1" className="ratio ratio-37:25">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/2.jpg" alt="image" />
                                            <div className="d-flex justify-end items-start absolute-full-center py-10 px-10">
                                                <div className="px-12 py-4 bg-white rounded-8">
                                                    <p>Web Design</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="mt-20">
                                            <a href="#" className="d-block decoration-none mb-8">November 23, 2024</a>
                                            <h3 className="text-xl lh-16 fw-600">The best remote UX and UI design conferences to attend in 2020</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div>
                                        <Link href="blog-single-1" className="ratio ratio-37:25">
                                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center object-fit-cover rounded-8" src="/img/blog/single/3.jpg" alt="image" />
                                            <div className="d-flex justify-end items-start absolute-full-center py-10 px-10">
                                                <div className="px-12 py-4 bg-white rounded-8">
                                                    <p>Web Design</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="mt-20">
                                            <a href="#" className="d-block decoration-none mb-8">November 23, 2024</a>
                                            <h3 className="text-xl lh-16 fw-600">How can you help your team transition to remote with this</h3>
                                        </div>
                                    </div>
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