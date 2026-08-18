
import Layout from '@/components/layout/Layout'
import ApiIntergration from '@/components/sections/homepage/ApiIntergration'
import CtaTwo from '@/components/sections/homepage/CtaTwo'
import EverythingOne from '@/components/sections/homepage/EverythingOne'
import FaqTwo from '@/components/sections/homepage/FaqTwo'
import FeatureTwo from '@/components/sections/homepage/FeatureTwo'
import HeroTwo from '@/components/sections/homepage/HeroTwo'
import HowWorkOne from '@/components/sections/homepage/HowWorkOne'
import PricingTwo from '@/components/sections/homepage/PricingTwo'
import ServiceOne from '@/components/sections/homepage/ServiceOne'
import TestimonialTwo from '@/components/sections/homepage/TestimonialTwo'

export default function Home2() {
    return (
        <>
            <Layout
                headerLayout={2}
                footerLayout={2}
                navColor="text-white"
                logo="logo-flat"
            >
                <HeroTwo />
                <HowWorkOne />
                <ServiceOne />
                <ApiIntergration />
                <EverythingOne />
                <FeatureTwo />
                <TestimonialTwo />
                <PricingTwo />
                <FaqTwo />
                <CtaTwo />
            </Layout>
        </>
    )
}
