
import Layout from '@/components/layout/Layout'
import BlogOne from '@/components/sections/homepage/BlogOne'
import ClientOne from '@/components/sections/homepage/ClientOne'
import CounterTwo from '@/components/sections/homepage/CounterTwo'
import CreativeProcessOne from '@/components/sections/homepage/CreativeProcessOne'
import CtaFive from '@/components/sections/homepage/CtaFive'
import FeatureNine from '@/components/sections/homepage/FeatureNine'
import HeroEight from '@/components/sections/homepage/HeroEight'
import ProjectOne from '@/components/sections/homepage/ProjectOne'
import ServiceSeven from '@/components/sections/homepage/ServiceSeven'
import TestimonialSeven from '@/components/sections/homepage/TestimonialSeven'

export default function Home9() {
    return (
        <>
            <Layout
                headerLayout={9}
                footerLayout={9}
                navColor="" // text-white, "" (blank is default dark)
                logo="logo-flat" // logo, logo-flat, logo-5
            >
                <HeroEight />
                <ServiceSeven />
                <FeatureNine />
                <CounterTwo />
                <ProjectOne />
                <CreativeProcessOne />
                <TestimonialSeven />
                <ClientOne />
                <BlogOne />
                <CtaFive />
            </Layout>

        </>
    )
}