
import Layout from '@/components/layout/Layout'
import ClientOne from '@/components/sections/homepage/ClientOne'
import CtaSix from '@/components/sections/homepage/CtaSix'
import FaqFour from '@/components/sections/homepage/FaqFour'
import FeatureEleven from '@/components/sections/homepage/FeatureEleven'
import FeatureTen from '@/components/sections/homepage/FeatureTen'
import HeroNine from '@/components/sections/homepage/HeroNine'
import PricingSix from '@/components/sections/homepage/PricingSix'
import TestimonialThree from '@/components/sections/homepage/TestimonialThree'

export default function Home10() {
    return (
        <>
            <Layout
                headerLayout={10}
                footerLayout={10}
                navColor="text-dark-8" // text-white, "" (blank is default dark)
                logo="logo-dark-3" // logo, logo-flat, logo-5
            >
                <HeroNine />
                <ClientOne title />
                <FeatureTen />
                <FeatureEleven />
                <TestimonialThree />
                <PricingSix />
                <FaqFour />
                <CtaSix />
            </Layout>
        </>
    )
}