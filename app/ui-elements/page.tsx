
'use client'
import AccordionOne from '@/components/elements/AccordionOne'
import Layout from '@/components/layout/Layout'
import { useEffect, useState } from 'react'
import * as Icon from 'react-feather'
import { Check } from 'react-feather'

import Image from 'next/image'
export default function UIElement() {
    const [active, setActive] = useState(1)

    const handleOnClick = (index: number) => {
        setActive(index)
    }
    useEffect(() => {
        const handleClick = (event:any) => {
            const target = event.target.closest('[data-switch]')
            if (!target) return

            const trigger = target.getAttribute('data-switch')
            if (!trigger) return

            const elementsToToggle = document.querySelectorAll(trigger)

            elementsToToggle.forEach(element => {
                element.classList.toggle('is-active')
            })
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    return (
        <>
            <Layout footerLayout={11}>
                <div>
                    <section className="page-header -base -">
                        <div className="page-header__bg">
                            <Image width="0" height="0" sizes="100vw" style={{ width: "auto", height: "auto" }} className="initial-img" src="/img/page-header/bg-light.png" alt="Page header" />
                        </div>
                        <div className="page-header__content">
                            <div className="row justify-center text-center">
                                <div className="col-lg-9 col-md-10">
                                    <div>
                                        <h1 className="page-header__title lh-14">UI Elements</h1>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-9 col-md-10">
                                    <div className="px-20">
                                        <p className="page-header__text">With we want to optimize the customization process so your team can save time when building websites.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-lg layout-pb-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 className="text-2xl fw-600">Accordions</h4>
                                    <AccordionOne />
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="text-2xl fw-600">Tabs</h4>
                                    <div className="tabs -buttons mt-40 js-tabs">
                                        <div className="tabs__controls js-tabs-controls">
                                            <button className={`tabs__button js-tabs-button ${active == 1 ? "is-active" : ""}`} onClick={() => handleOnClick(1)} type="button">
                                                Items 1
                                            </button>
                                            <button className={`tabs__button js-tabs-button ${active == 2 ? "is-active" : ""}`} onClick={() => handleOnClick(2)} type="button">
                                                Items 2
                                            </button>
                                            <button className={`tabs__button js-tabs-button ${active == 3 ? "is-active" : ""}`} onClick={() => handleOnClick(3)} type="button">
                                                Items 3
                                            </button>
                                        </div>
                                        <div className="tabs__content mt-16 js-tabs-content">
                                            <div className={`tabs__pane -tab-item-1  ${active == 1 ? "is-active" : ""}`}>
                                                <p className="text-sm">Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus.</p>
                                            </div>
                                            <div className={`tabs__pane -tab-item-2  ${active == 2 ? "is-active" : ""}`}>
                                                <p className="text-sm">Fermentum mauris pellentesque nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus.</p>
                                            </div>
                                            <div className={`tabs__pane -tab-item-3  ${active == 3 ? "is-active" : ""}`}>
                                                <p className="text-sm">Placerat quis vel fames interdum urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non risus. Elementum lectus a porta commodo suspendisse arcu, aliquam lectus faucibus.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-48">
                                <div className="col-lg-6">
                                    <h4 className="text-2xl fw-600">Table</h4>
                                    <table className="table mt-40">
                                        <thead>
                                            <tr>
                                                <th>Description</th>
                                                <th>Hour</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Design UX and UI</td>
                                                <td>14</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>Design UX and UI</td>
                                                <td>14</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>Design UX and UI</td>
                                                <td>14</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>Design UX and UI</td>
                                                <td>14</td>
                                                <td>3</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="text-2xl fw-600">Message Boxes</h4>
                                    <div className="row y-gap-20 pt-40">
                                        <div className="col-12">
                                            <div className="alert -info">
                                                <div className="alert__content">
                                                    <div className="alert__title text-sm">
                                                        Info: User pending action
                                                    </div>
                                                    <div className="alert__icon">
                                                        <Icon.X className="icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="alert -warning">
                                                <div className="alert__content">
                                                    <div className="alert__title text-sm">
                                                        Warning: User has to be admin
                                                    </div>
                                                    <div className="alert__icon">
                                                        <Icon.X className="icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="alert -error">
                                                <div className="alert__content">
                                                    <div className="alert__title text-sm">
                                                        Error: Internal Server Error
                                                    </div>
                                                    <div className="alert__icon">
                                                        <Icon.X className="icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="alert -success">
                                                <div className="alert__content">
                                                    <div className="alert__title text-sm">
                                                        Success: Updated members status
                                                    </div>
                                                    <div className="alert__icon">
                                                        <Icon.X className="icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="text-2xl fw-600">Buttons</h4>
                                </div>
                            </div>
                            <div className="row x-gap-16 y-gap-16 pt-16">
                                <div className="col-auto">
                                    <button className="button -md -accent text-white -uppercase">button primary</button>
                                </div>
                                <div className="col-auto">
                                    <button className="button -md -dark-2 text-white -uppercase">Button secondary</button>
                                </div>
                                <div className="col-auto">
                                    <button className="button -md -light-4 text-accent -uppercase">button Third</button>
                                </div>
                                <div className="col-auto">
                                    <button className="button -md -orange text-white -uppercase">Button Fourth</button>
                                </div>
                                <div className="col-auto">
                                    <button className="button -md -red text-white -uppercase">Fourth Secondary</button>
                                </div>
                            </div>
                            <div className="row pt-60 sm:pt-40">
                                <div className="col-12">
                                    <h4 className="text-2xl fw-600">Line Buttons</h4>
                                </div>
                            </div>
                            <div className="row x-gap-16 y-gap-16 pt-16">
                                <div className="col-auto">
                                    <button className="button -md -outline-accent text-accent -uppercase">button primary</button>
                                </div>
                                <div className="col-auto">
                                    <button className="button -md -outline-dark text-black -uppercase">Button secondary</button>
                                </div>
                                <div className="col-auto">
                                    <button className="button -md -outline-dark-accent text-black -uppercase">button Third</button>
                                </div>
                                <div className="col-auto">
                                    <button className="button -md -outline-orange text-orange -uppercase">Button Fourth</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm overflow-visible">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="text-lg">Form</h4>
                                    <div className="row mt-16">
                                        <div className="col-lg-6">
                                            <form action="post" className="contact-form row x-gap-24 y-gap-40">
                                                <div className="col-12">
                                                    <input type="text" name="InputText" placeholder="Input Text" />
                                                </div>
                                                <div className="col-12">
                                                    <select className="selectize wide js-selectize">
                                                        <option data-display="Select">Country</option>
                                                        <option value="Greece">Greece</option>
                                                        <option value="USA">USA</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="France">France</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <textarea name="notes" id="form_notes" rows={5} placeholder="Textarea" defaultValue={""} />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-lg-6">
                                            <form action="post" className="contact-form row x-gap-24 y-gap-40">
                                                <div className="col-12">
                                                    <input type="text" name="InputText" placeholder="Input Text" />
                                                </div>
                                                <div className="col-12">
                                                    <select className="selectize wide js-selectize">
                                                        <option value={1}>Some option</option>
                                                        <option value={2}>Another option</option>
                                                        <option value={3}>Another option</option>
                                                        <option value={4}>Potato</option>
                                                        <option value={5}>Potato</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <select className="selectize wide js-selectize-seachable">
                                                        <option data-display="Select">Nothing</option>
                                                        <option value={1}>Some option</option>
                                                        <option value={2}>Another option</option>
                                                        <option value={3}>Potato</option>
                                                        <option value={4}>Potato</option>
                                                        <option value={5}>Potato</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-sm">
                        <div className="container">
                            <div className="row y-gap-48">
                                <div className="col-lg-6">
                                    <div>
                                        <h4 className="text-lg">Tooltips</h4>
                                        <div className="d-flex mt-24">
                                            <div className="tooltip -top bg-light-4 rounded-8">
                                                Top
                                                <div className="tooltip__content">Top</div>
                                            </div>
                                            <div className="tooltip -bottom bg-light-4 rounded-8 ml-12">
                                                Bottom
                                                <div className="tooltip__content">Bottom</div>
                                            </div>
                                            <div className="tooltip -left bg-light-4 rounded-8 ml-12">
                                                Left
                                                <div className="tooltip__content">Left</div>
                                            </div>
                                            <div className="tooltip -right bg-light-4 rounded-8 ml-12">
                                                Right
                                                <div className="tooltip__content">Right</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="row x-gap-48 y-gap-48">
                                        <div className="col-lg-4 col-6">
                                            <h4 className="text-sm">Radiobox</h4>
                                            <div className="mt-20">
                                                <div className="form-radio">
                                                    <div className="radio">
                                                        <input type="radio" name="radio" />
                                                        <div className="radio__mark">
                                                            <div className="radio__icon" />
                                                        </div>
                                                    </div>
                                                    <label>Items</label>
                                                </div>
                                                <div className="form-radio mt-12">
                                                    <div className="radio">
                                                        <input type="radio" name="radio" />
                                                        <div className="radio__mark">
                                                            <div className="radio__icon">
                                                                <div className="radio__icon" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label>Items</label>
                                                </div>
                                                <div className="form-radio mt-12">
                                                    <div className="radio">
                                                        <input type="radio" name="radio" />
                                                        <div className="radio__mark">
                                                            <div className="radio__icon" />
                                                        </div>
                                                    </div>
                                                    <label>Items</label>
                                                </div>
                                                <div className="form-radio mt-12">
                                                    <div className="radio">
                                                        <input type="radio" name="radio" />
                                                        <div className="radio__mark">
                                                            <div className="radio__icon" />
                                                        </div>
                                                    </div>
                                                    <label>Items</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            <h4 className="text-sm">Checkbox</h4>
                                            <div className="mt-20">
                                                <div className="form-checkbox">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark">
                                                            <div className="checkbox__icon">
                                                                <Check className="size-16" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label htmlFor="items">Items</label>
                                                </div>
                                                <div className="form-checkbox mt-16">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark">
                                                            <div className="checkbox__icon">
                                                                <Check className="size-16" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label htmlFor="items">Items</label>
                                                </div>
                                                <div className="form-checkbox mt-16">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark">
                                                            <div className="checkbox__icon">
                                                                <Check className="size-16" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label htmlFor="items">Items</label>
                                                </div>
                                                <div className="form-checkbox mt-16">
                                                    <div className="checkbox">
                                                        <input type="checkbox" />
                                                        <div className="checkbox__mark">
                                                            <div className="checkbox__icon">
                                                                <Check className="size-16" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label htmlFor="items">Items</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6">
                                            <h4 className="text-sm">Switch</h4>
                                            <div className="mt-20">
                                                <div className="form-switch">
                                                    <div className="switch">
                                                        <input type="checkbox" />
                                                        <span className="switch__slider" />
                                                    </div>
                                                    <label>Items</label>
                                                </div>
                                                <div className="form-switch mt-24">
                                                    <div className="switch">
                                                        <input type="checkbox" />
                                                        <span className="switch__slider" />
                                                    </div>
                                                    <label>Items</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="layout-pt-sm layout-pb-lg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="text-22 fw-600">Typography</h4>
                                    <h5 className="text-base mt-60">Course Description</h5>
                                    <p className=" mt-20">Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.</p>
                                    <p className="mt-16">Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="py-40 px-40 bg-light-4 rounded-8 mt-48">
                                        <p className="italic text-dark-1">Consectetur adipiscing elit. Vitae, feugiat amet varius senectus bibendum cum nunc. Venenatis, lacus leo, semper porttitor sapien id in aliquet risus. Risus, faucibus lectus rhoncus cum duis non. Posuere pharetra felis, et urna enim id.</p>
                                        <div className="text-dark-1 text-lg mt-16">Luis Pickford</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row y-gap-48 mt-60">
                                <div className="col-md-6">
                                    <h5 className="text-lg fw-600">Requirements</h5>
                                    <ul className="ul-list y-gap-16 pt-24">
                                        <li>We do not require any previous experience or pre-defined skills to take this course. A great orientation would be enough to master UI/UX design.</li>
                                        <li>A computer with a good internet connection.</li>
                                        <li>Adobe Photoshop (OPTIONAL)</li>
                                    </ul>
                                </div>
                                <div className="col-md-4 offset-md-1">
                                    <h5 className="text-lg fw-600">What you'll learn</h5>
                                    <div className="y-gap-16 pt-24">
                                        <div className="d-flex align-items-center">
                                            <div className="size-20 rounded-full d-flex justify-center items-center bg-light-4">
                                                <Icon.Check className="size-10 text-accent" />
                                            </div>
                                            <p className="text-sm text-grey leading-6xl ml-12">Become a UI/UX designer.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="size-20 rounded-full d-flex justify-center items-center bg-light-4">
                                                <Icon.Check className="size-10 text-accent" />
                                            </div>
                                            <p className="text-sm text-grey leading-6xl ml-12">You will be able to start earning money Figma skills.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="size-20 rounded-full d-flex justify-center items-center bg-light-4">
                                                <Icon.Check className="size-10 text-accent" />
                                            </div>
                                            <p className="text-sm text-grey leading-6xl ml-12">Build a UI project from beginning to end.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="size-20 rounded-full d-flex justify-center items-center bg-light-4">
                                                <Icon.Check className="size-10 text-accent" />
                                            </div>
                                            <p className="text-sm text-grey leading-6xl ml-12">Work with colors  fonts.</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="size-20 rounded-full d-flex justify-center items-center bg-light-4">
                                                <Icon.Check className="size-10 text-accent" />
                                            </div>
                                            <p className="text-sm text-grey leading-6xl ml-12">You will create your own UI Kit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="svg-shape">
                        <svg width={1920} height={60} viewBox="0 0 1920 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 30C0 13.4315 13.4315 0 30 0H1890C1906.57 0 1920 13.4315 1920 30V60H0V30Z" fill="#1A3454" />
                        </svg>
                    </div>
                </div>

            </Layout>

        </>
    )
}