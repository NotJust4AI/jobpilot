
import Layout from '@/components/layout/Layout'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const PortfolioFilterEight = dynamic(() => import('@/components/portfolio/PortfolioFilterEight'), {
    ssr: false,
})
export default function Portfolio8() {
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
                                            <h1 className="page-header__title lh-14">Portfolio Showcase</h1>
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
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="section-filter">
                            <PortfolioFilterEight />
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row justify-center">
                                <div className="col text-center">
                                    <p className="text-lg text-dark-1">Trusted by the world best</p>
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