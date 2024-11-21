import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MagneticButton({ children }) {
    const buttonRef = useRef(null)
    
    useEffect(() => {
        const button = buttonRef.current
        let bounds = {}
        
        function handleMouseMove(e) {
            const { clientX, clientY } = e
            const { left, top, width, height } = bounds
            
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            
            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.6,
                ease: "power3.out"
            })
        }
        
        function handleMouseEnter() {
            bounds = button.getBoundingClientRect()
            gsap.to(button, {
                scale: 1.1,
                duration: 0.6,
                ease: "power3.out"
            })
        }
        
        function handleMouseLeave() {
            gsap.to(button, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power3.out"
            })
        }
        
        button.addEventListener('mousemove', handleMouseMove)
        button.addEventListener('mouseenter', handleMouseEnter)
        button.addEventListener('mouseleave', handleMouseLeave)
        
        return () => {
            button.removeEventListener('mousemove', handleMouseMove)
            button.removeEventListener('mouseenter', handleMouseEnter)
            button.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])
    
    return (
        <button ref={buttonRef} className="relative">
            {children}
        </button>
    )
} 