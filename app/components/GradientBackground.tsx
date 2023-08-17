'use client'
import { FC, useEffect, useRef } from 'react'

interface Props {
    children: React.ReactNode
}

const GradientBackground: FC<Props> = ({ children }) => {
    const divRef = useRef<HTMLDivElement | null>(null)
    let mousePosition = { x: 0 }

    let lastTime = 0
    const fpsInterval = 1000 / 30 // 30 FPS

    const updateGradient = (currentTime: number) => {
        if (currentTime - lastTime < fpsInterval) {
            requestAnimationFrame(updateGradient)
            return
        }

        lastTime = currentTime

        const percent = ((mousePosition.x / window.innerWidth - 0.5) * 150)

        if (divRef.current) {
            divRef.current.style.backgroundImage = `linear-gradient(to right, blue ${percent}%, transparent), url(https://grainy-gradients.vercel.app/noise.svg)`
        }

        requestAnimationFrame(updateGradient)
    }

    const handleMouseMove = (event: MouseEvent) => {
        mousePosition.x = event.clientX
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        requestAnimationFrame(updateGradient)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div ref={divRef} className="noise min-h-screen flex items-center justify-center text-5xl font-bold p-4 border-4 border-black">
            {children}
        </div>
    )
}

export default GradientBackground
