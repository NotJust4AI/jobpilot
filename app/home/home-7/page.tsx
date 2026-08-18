
import Layout from "@/components/layout/Layout"
import ClientOne from "@/components/sections/homepage/ClientOne"
import FeatureEight from "@/components/sections/homepage/FeatureEight"
import FeatureFive from "@/components/sections/homepage/FeatureFive"
import FeatureSeven from "@/components/sections/homepage/FeatureSeven"
import FeatureSix from "@/components/sections/homepage/FeatureSix"
import HeroSeven from "@/components/sections/homepage/HeroSeven"
import PricingFive from "@/components/sections/homepage/PricingFive"
import ServiceSix from "@/components/sections/homepage/ServiceSix"
import TestimonialThree from "@/components/sections/homepage/TestimonialThree"


export default function Home7() {
    return (
        <>
            <Layout
                headerLayout={7}
                footerLayout={7}
                navColor="text-white" // text-white, "" (blank is default dark)
                logo="logo-flat" // logo, logo-flat, logo-5
                verticalLine // if vertical line true, show vertical line show
            >
                <HeroSeven />
                <ClientOne title />
                <FeatureSix />
                <FeatureSeven />
                <FeatureEight />
                <TestimonialThree />
                <FeatureFive />
                <ServiceSix />
                <PricingFive />
            </Layout>
        </>
    )
}