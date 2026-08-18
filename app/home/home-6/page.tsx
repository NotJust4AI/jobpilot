
import Layout from '@/components/layout/Layout'
import BlogTwo from '@/components/sections/homepage/BlogTwo'
import ClientTwo from '@/components/sections/homepage/ClientTwo'
import CtaFour from '@/components/sections/homepage/CtaFour'
import FeatureFour from '@/components/sections/homepage/FeatureFour'
import HeroSix from '@/components/sections/homepage/HeroSix'
import PricingFive from '@/components/sections/homepage/PricingFive'
import SeoOne from '@/components/sections/homepage/SeoOne'
import SeoTwo from '@/components/sections/homepage/SeoTwo'
import SubscribeOne from '@/components/sections/homepage/SubscribeOne'
import TestimonialSix from '@/components/sections/homepage/TestimonialSix'

export default function Home6() {
    return (
        <>
            <Layout
                headerLayout={6}
                footerLayout={6}
                navColor="" // text-white, "" (blank is default dark)
                logo="logo-dark-2" // logo, logo-flat, logo-5
            >
                <HeroSix />
                <SeoOne />
                <SeoTwo />
                <SubscribeOne />
                <FeatureFour />
                <TestimonialSix />
                <PricingFive />
                <BlogTwo />
                <ClientTwo />
                <CtaFour />
            </Layout>

        </>
    )
}