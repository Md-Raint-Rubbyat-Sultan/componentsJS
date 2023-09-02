import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./carousel.css";

const Carousel = ({ items }) => {
    const ref = useRef(null);
    const [currentIdx, setCurrentIdx] = useState(() => 0);
    const [currentWidth, setCurrentWidth] = useState(() => window.innerWidth);

    const goNext = useCallback(() => {
        (currentIdx < items.length - 1) ? setCurrentIdx((currentIdx) => currentIdx + 1) : setCurrentIdx(0);
    }, [currentIdx, items]);

    const goPrevious = () => {
        (currentIdx > 0) ? setCurrentIdx((currentIdx) => currentIdx - 1) : setCurrentIdx(items.length - 1);
    }

    const handelWindowSize = () => {
        const size = window.innerWidth;
        if (size < 1280) {
            setCurrentWidth(size);
        } else {
            setCurrentWidth(1280);
        }
    }

    useEffect(() => {
        if (ref.current) {
            clearTimeout(ref.current);
        }
        ref.current = setTimeout(goNext, 3000);
        window.addEventListener("resize", handelWindowSize)
        return () => clearTimeout(ref.current);
    }, [goNext, currentWidth])

    return (
        <div className='slider-container'>
            <div className='slides-container'>
                <div
                    className="slides"
                    style={{
                        width: `${currentWidth * items.length}px`
                    }}
                >
                    {
                        items.map((item, idx) =>
                            <img
                                key={idx}
                                src={item.url}
                                alt={item.slide}
                                style={{
                                    width: `${currentWidth}px`,
                                    transform: `translateX(-${currentIdx * 100}%)`,
                                }}
                            />
                        )
                    }
                </div>
                <div onClick={goPrevious} className='previous-btn'>
                    <p className='previous-icon'>&larr;</p>
                </div>
                <div onClick={goNext} className='next-btn'>
                    <p className='next-icon'>&rarr;</p>
                </div>
            </div>
            <div className="dots-container">
                {
                    items.map((_, idx) =>
                        <div
                            onClick={() => setCurrentIdx(idx)}
                            key={idx}
                            className={`dot ${(currentIdx === idx) ? "active" : ''}`}
                        >.</div>
                    )
                }
            </div>
        </div>
    );
};

export default Carousel;