'use client'
import { useState } from "react"
import * as Icon from 'react-feather'
interface ActiveState {
    status: boolean
    key: number
}

export default function AccordionOne() {
    const [active, setActive] = useState<ActiveState>({
        status: false,
        key: 1,
    })

    const handleToggle = (key: number) => {
        if (active.key === key) {
            setActive({
                ...active,
                status: false,
            })
        } else {
            setActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <div className="accordion -simple md:mt-24 js-accordion">
                <div className={active.key == 1 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(1)}>
                    <div className="accordion__button text-black">
                        <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                        </div>
                        <button className="text-lg md:text-base fw-600 text-black"> What does the
                            package include?</button>
                    </div>
                    <div className="accordion__content" style={active.key == 1 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                        <div className="accordion__content__inner">
                            <p>When you buy Sassio, you get all you see in the demo but the images.
                                We include SASS files for styling, complete JS files with comments,
                                all HTML variations. Besides we include all mobile PSD mockups.</p>
                        </div>
                    </div>
                </div>
                <div className={active.key == 2 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(2)}>
                    <div className="accordion__button text-black">
                        <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                        </div>
                        <button className="text-lg md:text-base fw-600 text-black">How does the 14-day
                            trial work?</button>
                    </div>
                    <div className="accordion__content" style={active.key == 2 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                        <div className="accordion__content__inner">
                            <p>When you buy Sassio, you get all you see in the demo but the images.
                                We include SASS files for styling, complete JS files with comments,
                                all HTML variations. Besides we include all mobile PSD mockups.</p>
                        </div>
                    </div>
                </div>
                <div className={active.key == 3 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(3)}>
                    <div className="accordion__button text-black">
                        <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                        </div>
                        <button className="text-lg md:text-base fw-600 text-black">How do I pay for your
                            service?</button>
                    </div>
                    <div className="accordion__content" style={active.key == 3 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                        <div className="accordion__content__inner">
                            <p>When you buy Sassio, you get all you see in the demo but the images.
                                We include SASS files for styling, complete JS files with comments,
                                all HTML variations. Besides we include all mobile PSD mockups.</p>
                        </div>
                    </div>
                </div>
                <div className={active.key == 4 ? "accordion__item is-active" : "accordion__item"} onClick={() => handleToggle(4)}>
                    <div className="accordion__button text-black">
                        <div className="accordion__icon">
                            <Icon.Plus className="icon" />
                            <Icon.Minus className="icon" />
                        </div>
                        <button className="text-lg md:text-base fw-600 text-black">Can I suggest a new
                            feature?</button>
                    </div>
                    <div className="accordion__content" style={active.key == 4 ? { maxHeight: 72 } : { maxHeight: 0 }}>
                        <div className="accordion__content__inner">
                            <p>When you buy Sassio, you get all you see in the demo but the images.
                                We include SASS files for styling, complete JS files with comments,
                                all HTML variations. Besides we include all mobile PSD mockups.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}