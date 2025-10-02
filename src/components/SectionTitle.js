import React from 'react';
import Image from 'next/image';

/**
 * Section Title Component with Decorative Image
 *
 * A reusable component for section titles with the decorative bottom.png image
 * that automatically adjusts size based on screen size.
 *
 * @param {Object} props
 * @param {string} props.title - The title text to display
 * @param {string} props.className - Additional CSS classes (optional)
 * @param {Object} props.style - Additional inline styles (optional)
 * @param {boolean} props.showImage - Show decorative image (default: true)
 */
const SectionTitle = ({ title, className = '', style = {}, showImage = true }) => {
    const defaultStyle = { marginBottom: '30px', ...style };

    return (
        <div className={`title d-flex align-items-center flex-column ${className}`} style={defaultStyle}>
            {showImage && (
                <>
                    <Image
                        src="/assets/images/wedding-img/bottom.png"
                        alt="Decoración"
                        width={243}
                        height={49}
                        className="img-fluid title-img d-none d-lg-block"
                        priority
                    />
                    <Image
                        src="/assets/images/wedding-img/bottom.png"
                        alt="Decoración"
                        width={124}
                        height={25}
                        className="img-fluid title-img d-block d-lg-none"
                        priority
                    />
                </>
            )}
            <div className="main-title">
                <h2 className="gradient-text">{title}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;
