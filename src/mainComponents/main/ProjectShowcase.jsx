import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SLIDE_INTERVAL = 4200;
const SWIPE_THRESHOLD = 40;

function ProjectShowcase({ project, index }) {
    const { language } = useLanguage();
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(false);
    const rootRef = useRef(null);
    const dragRef = useRef(null);

    const reverse = index % 2 === 1;
    const { name, kicker, sector, description, images, logo, logoTheme, type, url } = project;
    const total = images.length;

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

    // `current` entra nas dependências: ao trocar manualmente (dot ou arraste) o timer recomeça do zero
    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!visible || reduceMotion || total < 2) return undefined;
        // Defasa o início de cada projeto para as trocas não acontecerem todas juntas
        const timer = setTimeout(() => setCurrent((c) => (c + 1) % total), SLIDE_INTERVAL + (index % 3) * 350);
        return () => clearTimeout(timer);
    }, [visible, total, index, current]);

    const goTo = (i) => setCurrent(((i % total) + total) % total);

    // Arrastar com mouse ou deslizar com o dedo: esquerda = próximo, direita = anterior
    const onPointerDown = (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        dragRef.current = { x: e.clientX, y: e.clientY };
    };
    const onPointerUp = (e) => {
        const start = dragRef.current;
        dragRef.current = null;
        if (!start) return;
        const dx = e.clientX - start.x;
        const dy = e.clientY - start.y;
        if (Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
            goTo(current + (dx < 0 ? 1 : -1));
        }
    };
    const onPointerCancel = () => { dragRef.current = null; };

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
                <div
                    className="projectSlides"
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerCancel}
                    onPointerLeave={onPointerCancel}
                >
                    {images.map((src, i) => (
                        <img
                            key={src}
                            src={src}
                            alt={`${name} - ${i + 1}/${total}`}
                            className={i === current ? 'active' : ''}
                            loading={i === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            draggable="false"
                        />
                    ))}
                </div>
                <div className="projectDots" role="tablist" aria-label={`${name} - ${language === 'pt' ? 'telas do projeto' : 'project screens'}`}>
                    {images.map((src, i) => (
                        <button
                            key={src}
                            type="button"
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`${language === 'pt' ? 'Ver tela' : 'View screen'} ${i + 1}`}
                            className={i === current ? 'active' : ''}
                            onClick={() => goTo(i)}
                        ></button>
                    ))}
                </div>
                <div className={`projectLogo ${logoTheme}`}>
                    <img src={logo} alt={`Logo ${name}`} loading="lazy" />
                </div>
            </div>

            <div className="projectInfo">
                <span className="projectSector">{sector[language]}</span>
                {kicker && <span className="projectKicker">{kicker}</span>}
                <h3 className="projectName">
                    {url ? (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={language === 'pt' ? `Abrir ${name}` : `Open ${name}`}
                        >
                            {name}
                        </a>
                    ) : (
                        name
                    )}
                </h3>
                <p className="projectDescription">{description[language]}</p>
            </div>
        </article>
    );
}

export default ProjectShowcase;
