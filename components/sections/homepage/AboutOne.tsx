import Image from 'next/image'
export default function AboutOne() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-sm overflow-visible">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionHeading">
                                <div className="sectionHeading__subtitle wow animate__animated animate__fadeInUp">
                                    <span>Safety first</span>
                                </div>
                                <h2 className="sectionHeading__title wow animate__animated animate__fadeInUp">You're in a secure company</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row y-gap-32 pt-80 md:pt-60 sm:pt-24">
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/timer.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Real time activity</h4>
                                    <p className="mt-20 md:mt-12">
                                        Get instant insight on what's happening in your business. It uses
                                        a dictionary of the over 200 Latin words
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/cloud-storage.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Instant deploy</h4>
                                    <p className="mt-20 md:mt-12">
                                        Deploy your project in a fraction of a second, no time! It uses a
                                        dictionary of the over 200 Latin words
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/touch.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Easy integrations</h4>
                                    <p className="mt-20 md:mt-12">
                                        Integrate our solution with other tech leaders in the industry. It
                                        uses a dictionary of the over 200 Latin words
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__animated animate__fadeInUp">
                            <div
                                className="d-flex rounded-8 py-40 pr-60 pl-50 md:px-34 md:py-34 sm:px-30 sm:py-30 md:direction-column bg-white shadow-card hover-up"
                            >
                                <div className="mr-48 md:mr-0">
                                    <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} src="/img/home-1/company/pen-tool.svg" alt="icon" />
                                </div>
                                <div className="md:mt-20">
                                    <h4 className="text-xl fw-600 lh-1">Perfect UI/UX</h4>
                                    <p className="mt-20 md:mt-12">
                                        Get instant insight on what's happening in your business. It uses
                                        a dictionary of the over 200 Latin words
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}