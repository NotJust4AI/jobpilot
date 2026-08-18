
import Layout from '@/components/layout/Layout'
import ClientOne from '@/components/sections/homepage/ClientOne'
import CtaThree from '@/components/sections/homepage/CtaThree'
import Deliver from '@/components/sections/homepage/Deliver'
import FeatureThree from '@/components/sections/homepage/FeatureThree'
import HeroThree from '@/components/sections/homepage/HeroThree'
import PricingThree from '@/components/sections/homepage/PricingThree'
import ServiceTwo from '@/components/sections/homepage/ServiceTwo'
import Solution from '@/components/sections/homepage/Solution'
import TestimonialThree from '@/components/sections/homepage/TestimonialThree'

export default function Home3() {
    return (
        <>
            <Layout
                headerLayout={3}
                footerLayout={3}
                navColor="text-white" // text-white, "" (blank is default dark)
                logo="logo-flat" // logo, logo-flat, logo-5
                verticalLine // if vertical line true, show vertical line show
            >
                <HeroThree />
                <ClientOne layoutPt="lg" layoutPb="sm" mt="0" />
                <FeatureThree />
                <Deliver />
                <div className="svg-shape">
                    <svg width="1920" height="326" viewBox="0 0 1920 326" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 281L1920 41V326H0V281Z" fill="#11243E"></path>
                        <path d="M1920 45L0 285V0H1920V45Z" fill="#F7F9FC"></path>
                    </svg>
                </div>
                {/* <ShapeOne fillOne="#11243E" fillTwo="#F7F9FC" height="326" /> */}
                <ServiceTwo />
                <Solution />
                <TestimonialThree />
                <PricingThree />
                <CtaThree />
            </Layout>
        </>
    )
}
