import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SLIDE_INTERVAL = 4200;

function ProjectShowcase({ project, index }) {
    const { language } = useLanguage();
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(false);
    const rootRef = useRef(null);

    const reverse = index % 2 === 1;
    const { name, kicker, sector, description, images, logo, logoTheme, type } = project;

    // Só roda o fade quando o projeto está na tela (e o usuário não pediu menos movimento)
    useEffect(() => {
        const el = rootRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return undefined;
        }
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!visible || reduceMotion || images.length < 2) return undefined;
        // Defasa o início de cada projeto para as trocas não acontecerem todas juntas
        const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), SLIDE_INTERVAL + (index % 3) * 350);
        return () => clearInterval(timer);
    }, [visible, images.length, index]);

    return (
        <article
            ref={rootRef}
            className={`projectShowcase${reverse ? ' reverse' : ''}`}
            data-aos="fade-up"
            data-aos-duration="400"
        >
            <div className={`projectFrame ${type}`}>
                {type === 'web' && (
                    <div className="projectFrameBar" aria-hidden="true">
                        <span></span><span></span><span></span>
                    </div>
                )}
                <div className="projectSlides">
                    {images.map((src, i) => (
                        <img
                            key={src}
                            src={src}
                            alt={`${name} - ${i + 1}/${images.length}`}
                            className={i === current ? 'active' : ''}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                        />
                    ))}
                </div>
                <div className="projectDots" aria-hidden="true">
                    {images.map((src, i) => (
                        <span key={src} className={i === current ? 'active' : ''}></span>
                    ))}
                </div>
                <div className={`projectLogo ${logoTheme}`}>
                    <img src={logo} alt={`Logo ${name}`} loading="lazy" />
                </div>
            </div>

            <div className="projectInfo">
                <span className="projectSector">{sector[language]}</span>
                {kicker && <span className="projectKicker">{kicker}</span>}
                <h3 className="projectName">{name}</h3>
                <p className="projectDescription">{description[language]}</p>
            </div>
        </article>
    );
}

export default ProjectShowcase;
