import React from 'react';
import { FadeInUp } from './CinematicAnimations';
import { mediaUrl } from './media';
import { scrollBehavior } from './motion';
import './hero.css';

export const Hero: React.FC = () => {
  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: scrollBehavior() });
    if (window.history?.replaceState) {
      window.history.replaceState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className="hero" id="top">
      <div className="heroResponsiveImage">
        <picture>
          <source
            media="(max-width: 760px)"
            type="image/avif"
            srcSet={`${mediaUrl('hero-mobile-480.avif')} 480w, ${mediaUrl('hero-mobile-960.avif')} 960w, ${mediaUrl('hero-mobile-1500.avif')} 1500w`}
            sizes="100vw"
          />
          <source
            media="(max-width: 760px)"
            type="image/webp"
            srcSet={`${mediaUrl('hero-mobile-480.webp')} 480w, ${mediaUrl('hero-mobile-960.webp')} 960w, ${mediaUrl('hero-mobile-1500.webp')} 1500w`}
            sizes="100vw"
          />
          <source
            type="image/avif"
            srcSet={`${mediaUrl('hero-desktop-960.avif')} 960w, ${mediaUrl('hero-desktop-1600.avif')} 1600w, ${mediaUrl('hero-desktop-1838.avif')} 1838w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${mediaUrl('hero-desktop-960.webp')} 960w, ${mediaUrl('hero-desktop-1600.webp')} 1600w, ${mediaUrl('hero-desktop-1838.webp')} 1838w`}
            sizes="100vw"
          />
          <img
            src={mediaUrl('hero-desktop-1600.webp')}
            width="1838"
            height="856"
            alt="IAKOPA athlete in premium performance sportswear"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="heroAtmosphere" aria-hidden="true" />

      <div className="shell heroCopy">
        <FadeInUp delay={0.1}>
          <div className="eyebrow tracking-[0.24em]">IAKOPA / PERFORMANCE SPORTSWEAR</div>
        </FadeInUp>

        <h1 className="heroEditorialTitle mt-4 mb-6">
          <span className="block">DESIGNED FOR</span>
          <span className="block">THE MODERN</span>
          <span className="block">ATHLETE.</span>
        </h1>

        <FadeInUp delay={0.3}>
          <p className="heroSubcopy">
            Performance apparel designed for training, movement and everyday life. Built with technical purpose. Refined for life beyond training.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.45}>
          <div className="ctas heroCtas">
            <a
              id="hero-shop-collection-button"
              className="btn primary heroCtaPrimary"
              href="#system"
              aria-label="Shop IAKOPA Collection"
              onClick={(event) => handleScrollToSection(event, 'system')}
            >
              SHOP COLLECTION
            </a>
            <a
              id="hero-discover-button"
              className="btn secondary heroCtaSecondary"
              href="#about"
              aria-label="Discover IAKOPA brand philosophy"
              onClick={(event) => handleScrollToSection(event, 'about')}
            >
              DISCOVER IAKOPA
            </a>
          </div>
        </FadeInUp>
      </div>
    </header>
  );
};

export default Hero;
