
import Layout from '@/components/layout/Layout'
import BlogOne from '@/components/sections/homepage/BlogOne'
import ClientOne from '@/components/sections/homepage/ClientOne'
import CreativeVisionOne from '@/components/sections/homepage/CreativeVisionOne'
import HeroFive from '@/components/sections/homepage/HeroFive'
import ServiceFive from '@/components/sections/homepage/ServiceFive'
import TeamOne from '@/components/sections/homepage/TeamOne'
import TestimonialFive from '@/components/sections/homepage/TestimonialFive'
import WhyUsOne from '@/components/sections/homepage/WhyUsOne'

import dynamic from 'next/dynamic'
const CaseStudyOne = dynamic(() => import('@/components/sections/homepage/CaseStudyOne'), {
    ssr: false,
})

export default function Home5() {
    return (
        <>
            <Layout
                headerLayout={5}
                footerLayout={5}
                navColor="" // text-white, "" (blank is default dark)
                logo="logo-5" // logo, logo-flat, logo-5
            >
                <HeroFive />
                <WhyUsOne />
                <CreativeVisionOne />
                <ClientOne layoutPt="sm" layoutPb="lg" mt="0" />
                <ServiceFive />
                <CaseStudyOne />
                <TestimonialFive />
                <TeamOne />
                <BlogOne />
            </Layout>

        </>
    )
}