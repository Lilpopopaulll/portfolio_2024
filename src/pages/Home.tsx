import React, { useEffect } from 'react';
import '../styles/home.css';

const Home: React.FC = () => {

    // Fonction personnalisée pour faire défiler en douceur
    const smoothScroll = (targetPosition: number, duration: number) => {
        const startPosition = window.scrollX;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(run, 0);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    // Fonction d'easing pour rendre la transition plus douce
    const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            const currentScrollPosition = window.scrollX;
            const screenWidth = window.innerWidth;

            if (event.deltaY > 0 && currentScrollPosition < screenWidth) {
                // Scroll smoothly to the right (100vw)
                smoothScroll(screenWidth, 1000); // 1000ms = 1 second
            } else if (event.deltaY < 0 && currentScrollPosition > 0) {
                // Scroll smoothly to the left (0vw)
                smoothScroll(0, 1000); // 1000ms = 1 second
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className="home-page">
            <div className="home-nav-bar">
                <p className="home-nav-bar-title">Paul Drochon</p>
                <div className="home-top-bar"></div>
            </div>
            <div className="page-1">
            </div>
        </div>
    );
};

export default Home;
