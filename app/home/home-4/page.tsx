
import Layout from '@/components/layout/Layout'
import ClientTwo from '@/components/sections/homepage/ClientTwo'
import FaqThree from '@/components/sections/homepage/FaqThree'
import FeatureOne from '@/components/sections/homepage/FeatureOne'
import HeroFour from '@/components/sections/homepage/HeroFour'
import PricingFour from '@/components/sections/homepage/PricingFour'
import Quality from '@/components/sections/homepage/Quality'
import Reliability from '@/components/sections/homepage/Reliability'
import Responsive from '@/components/sections/homepage/Responsive'
import ServiceScrollNav from '@/components/sections/homepage/ServiceFour'
import ServiceThree from '@/components/sections/homepage/ServiceThree'
import TestimonialFour from '@/components/sections/homepage/TestimonialFour'

export default function Home4() {
    return (
        <>
            <Layout
                headerLayout={4}
                footerLayout={4}
                logo="logo"
            >
                <HeroFour />
                <ServiceThree />
                <ServiceScrollNav />
                <Quality />
                <Responsive />
                <Reliability />
                <FeatureOne />
                <TestimonialFour />
                <PricingFour />
                <FaqThree />
                <ClientTwo />
            </Layout>
        </>
    )
}