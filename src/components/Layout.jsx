import { useEffect } from 'react'

export default function Layout() {
    return (
        <main data-scroll-container>
            <Header />
            
            {/* Hero Section with full-screen video */}
            <section className="h-screen relative">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    className="w-full h-full object-cover"
                >
                    <source src="/your-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-8xl font-bold text-white">Your Title</h1>
                </div>
            </section>

            {/* Horizontal Scroll Section */}
            <section className="relative h-screen" data-scroll-section>
                <div className="flex space-x-8 absolute whitespace-nowrap" data-scroll data-scroll-speed="4" data-scroll-direction="horizontal">
                    {/* Your horizontally scrolling content */}
                </div>
            </section>

            {/* Project Grid */}
            <section className="grid grid-cols-2 gap-8 p-8" data-scroll-section>
                {/* Project items */}
            </section>
        </main>
    )
} 