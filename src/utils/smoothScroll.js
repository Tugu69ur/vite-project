import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function initSmoothScroll() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 0.5,
        lerp: 0.05,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    })
    
    return scroll
} 