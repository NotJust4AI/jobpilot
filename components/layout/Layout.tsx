'use client'
import { useEffect, useState } from 'react'

import Footer1 from './Footer/Footer1'
import Footer10 from './Footer/Footer10'
import Footer11 from './Footer/Footer11'
import Footer2 from './Footer/Footer2'
import Footer3 from './Footer/Footer3'
import Footer4 from './Footer/Footer4'
import Footer5 from './Footer/Footer5'
import Footer6 from './Footer/Footer6'
import Footer7 from './Footer/Footer7'
import Footer8 from './Footer/Footer8'
import Footer9 from './Footer/Footer9'
import Header1 from './Header/Header1'
import Header10 from './Header/Header10'
import Header11 from './Header/Header11'
import Header2 from './Header/Header2'
import Header3 from './Header/Header3'
import Header4 from './Header/Header4'
import Header5 from './Header/Header5'
import Header6 from './Header/Header6.'
import Header7 from './Header/Header7'
import Header8 from './Header/Header8'
import Header9 from './Header/Header9'

interface LayoutProps {
    headerLayout?: Number
    footerLayout?: Number
    children?: React.ReactNode
    bgColor?: string
    navColor?: string
    logo?: string
    verticalLine?: boolean
}

export default function Layout({ headerLayout, footerLayout, children, bgColor, navColor, logo, verticalLine }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false)
    const [navToggled, setNavToggled] = useState<boolean>(false)
    const navHandle = () => setNavToggled(!navToggled)
    useEffect(() => {
        const WOW: any = require('wowjs');
        (window as any).wow = new WOW.WOW({
            live: false
        });

        // Initialize WOW.js
        (window as any).wow.init()
        
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <div className="barba-container">
                <main className='main-content'>
                    {!headerLayout && < Header1 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} />}
                    {headerLayout == 1 ? < Header1 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 2 ? < Header2 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 3 ? < Header3 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 4 ? < Header4 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 5 ? < Header5 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 6 ? < Header6 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 7 ? < Header7 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 8 ? < Header8 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 9 ? < Header9 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 10 ? < Header10 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}
                    {headerLayout == 11 ? < Header11 navColor={navColor} scroll={scroll} logo={logo} navToggled={navToggled} navHandle={navHandle} /> : null}

                    {verticalLine &&
                        <div className="lines -vertical-lines">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    }
                    <div className="content-wrapper  js-content-wrapper">
                        {children}
                    </div>

                    {!footerLayout && < Footer6 />}
                    {footerLayout == 1 ? < Footer1 /> : null}
                    {footerLayout == 2 ? < Footer2 /> : null}
                    {footerLayout == 3 ? < Footer3 /> : null}
                    {footerLayout == 4 ? < Footer4 /> : null}
                    {footerLayout == 5 ? < Footer5 /> : null}
                    {footerLayout == 6 ? < Footer6 /> : null}
                    {footerLayout == 7 ? < Footer7 /> : null}
                    {footerLayout == 8 ? < Footer8 /> : null}
                    {footerLayout == 9 ? < Footer9 /> : null}
                    {footerLayout == 10 ? < Footer10 /> : null}
                    {footerLayout == 11 ? < Footer11 /> : null}
                </main>
            </div>
        </>
    )
}