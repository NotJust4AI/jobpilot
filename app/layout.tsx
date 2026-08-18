import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"

import '@/public/css/vendors.css'
import '@/public/css/animate.min.css'
import '@/public/css/main.css'

import "swiper/css"
import "swiper/css/navigation"

const nunito = Work_Sans({
    weight: ['300','400','500','600', '700', '800'],
    subsets: ["latin"]

})

export const metadata: Metadata = {
    title: "Sassio - NextJS Template by AliThemes",
    description: "NextJS Template by AliThemes",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={nunito.className}>{children}</body>
        </html>
    )
}
