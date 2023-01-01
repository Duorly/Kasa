import {useState} from 'react';

export const Slideshow = ({logement}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePreviousClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < logement.pictures.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div>
            {logement.pictures && (
                <div
                    className="slide"
                    style={{backgroundImage: `url(${logement.pictures[currentIndex]})`}}
                >
                    {logement.pictures.length > 1 && (
                        <div className="slide-arrow">
                            <div>
                                {currentIndex > 0 && (
                                    <i onClick={handlePreviousClick} className="fa-solid fa-chevron-left fa-4x arrow"/>
                                )}
                            </div>
                            <div>
                                {currentIndex < logement.pictures.length - 1 && (
                                    <i onClick={handleNextClick} className="fa-solid fa-chevron-right fa-4x arrow"/>
                                )}
                            </div>
                        </div>
                    )}
                    {logement.pictures.length > 1 && (
                        <div className="count">{`${currentIndex + 1}/${logement.pictures.length}`}</div>
                    )}
                </div>
            )}
        </div>
    );
};
