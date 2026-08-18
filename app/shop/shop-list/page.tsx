
import Layout from '@/components/layout/Layout'
import * as Icon from 'react-feather'

import Image from 'next/image'
export default function ShopList() {
    return (
        <>
            <Layout footerLayout={9}>
                <div>
                    <section className="page-header -base -dark">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-dark.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14 text-white">Shop List</h1>
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
                            <div className="row x-gap-60">
                                <div className="col-xl-3 col-lg-4 order-lg-1 order-2">
                                    <div className="shopSidebar">
                                        <div className="row y-gap-32">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="shopSidebar__item">
                                                    <h4 className="text-xl fw-600">Search</h4>
                                                    <div className="search pt-4">
                                                        <form action="post">
                                                            <button className="submit" type="submit">
                                                                <Icon.Search className="icon" />
                                                            </button>
                                                            <input className="field" type="text" placeholder="Search" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-6">
                                                <div className="shopSidebar__item -category">
                                                    <h4 className="text-xl fw-600">Product categories</h4>
                                                    <ul className="ul-list y-gap-16 pt-20">
                                                        <li>
                                                            <a href="#" className="decoration-none">
                                                                Accessories (5)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="decoration-none">
                                                                Bags (3)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="decoration-none">
                                                                Fashion (2)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="decoration-none">
                                                                Furniture (3)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="decoration-none">
                                                                Gadgets (2)
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="decoration-none">
                                                                Uncategorized (0)
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-6">
                                                <div className="shopSidebar__item -tags">
                                                    <h4 className="fw-600 text-xl">Product tags</h4>
                                                    <div className="row x-gap-10 y-gap-10 pt-24">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 order-lg-2 order-1">
                                    <div className="d-flex justify-between">
                                        <div className="text-sm text-grey">Showing all 12 results</div>
                                        <div className="dropdown js-shop-dropdown">
                                            <div className="d-flex items-center text-sm text-grey">
                                                <span className="js-dropdown-title">
                                                    Default Sorting
                                                </span>
                                                <Icon.ChevronDown className="icon size-20 ml-40" />
                                            </div>
                                            <div className="dropdown__item">
                                                <div className="text-lg y-gap-16 js-dropdown-list">
                                                    <div>
                                                        <a className="d-block decoration-none js-dropdown-link" href="#">Default Sorting</a>
                                                    </div>
                                                    <div>
                                                        <a className="d-block decoration-none js-dropdown-link" href="#">Clothing</a>
                                                    </div>
                                                    <div>
                                                        <a className="d-block decoration-none js-dropdown-link" href="#">Glasses</a>
                                                    </div>
                                                    <div>
                                                        <a className="d-block decoration-none js-dropdown-link" href="#">T-Shirts</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row y-gap-32 mt-40 lg:mt-20">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/1.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/2.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/3.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/4.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/5.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/6.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/7.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/8.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="text-center">
                                                <div className="ratio ratio-27:30 hover-group">
                                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="absolute-full-center rounded-8 object-fit-cover" src="/img/shop/products/9.jpg" alt="Product image" />
                                                    <div className="absolute-full-center d-flex justify-center items-end py-20 px-20 opac-0 | t-base hg:opacity-100">
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Eye className="icon size-20" />
                                                        </a>
                                                        <a href="#" className="size-40 rounded-full bg-white d-flex justify-center items-center ml-10 text-black | t-base h:bg-dark-1 h:text-white">
                                                            <Icon.Heart className="icon size-20" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="shopCard__content mt-20">
                                                    <div>
                                                        <a href="#" className="decoration-none">Clothing</a>,
                                                        <a href="#" className="decoration-none">Glasses</a>,
                                                        <a href="#" className="decoration-none">T-Shirts</a>
                                                    </div>
                                                    <h4 className="text-16 fw-600 mt-8">Wall Clock Brown</h4>
                                                    <div className="text-16 fw-600 text-accent mt-4">$55.00</div>
                                                    <a href="#" className="button -md text-dark-1 -outline-dark-accent -uppercase mt-10">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center pt-60 sm:pt-40">
                                        <div className="col-auto">
                                            <div className="d-flex x-gap-16 fw-600">
                                                <div>
                                                    <a href="#" className="size-48 border-dark d-flex justify-center items-center decoration-none rounded-full | t-base h:bg-accent h:text-white">
                                                        <Icon.ArrowLeft className="icon size-20" />
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#" className="size-48 border-dark d-flex justify-center items-center decoration-none rounded-full | t-base h:bg-accent h:text-white">1</a>
                                                </div>
                                                <div>
                                                    <a href="#" className="size-48 border-dark d-flex justify-center items-center decoration-none rounded-full bg-accent text-white">2</a>
                                                </div>
                                                <div>
                                                    <a href="#" className="size-48 border-dark d-flex justify-center items-center decoration-none rounded-full | t-base h:bg-accent h:text-white">3</a>
                                                </div>
                                                <div>
                                                    <a href="#" className="size-48 border-dark d-flex justify-center items-center decoration-none rounded-full | t-base h:bg-accent h:text-white">4</a>
                                                </div>
                                                <div>
                                                    <a href="#" className="size-48 border-dark d-flex justify-center items-center decoration-none rounded-full | t-base h:bg-accent h:text-white">
                                                        <Icon.ArrowRight className="icon size-20" />
                                                    </a>
                                                </div>
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