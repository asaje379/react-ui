import { useEffect, useMemo, useRef, useState } from 'react';
import { CarouselProps } from './carousel.typings';

export default function Carousel({ animationDuration, imgs }: CarouselProps) {
  const values = new Array(imgs.length).fill(0);
  const valuesRef = useRef(new Array(imgs.length).fill(null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const id = useMemo(() => crypto.randomUUID(), []);

  const handleAnimate = (index: number) => {
    (valuesRef.current[0] as HTMLDivElement).style.marginLeft = `${
      index * -100
    }vw`;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = currentIndex + 1 > imgs.length - 1 ? 0 : currentIndex + 1;
    handleAnimate(index);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const index = currentIndex - 1 < 0 ? imgs.length - 1 : currentIndex - 1;
    handleAnimate(index);
    setCurrentIndex(index);
  };

  useEffect(() => {
    let counter = 0;
    setInterval(() => {
      handleAnimate(counter);
      counter++;
      if (counter > imgs.length - 1) counter = 0;
    }, animationDuration * 1000);
  }, []);

  return (
    <div className="tw-border-2 tw-border-gray-500 tw-overflow-hidden tw-w-screen tw-relative">
      <div className="tw-flex tw-w-screen">
        {values.map((_, index) => (
          <input
            key={index}
            type="radio"
            name={id}
            className="tw-hidden"
            id={`radio-${id}-${index}`}
          />
        ))}
        {imgs.map((img, index) => (
          <div
            className="tw-min-w-full tw-h-[400px] tw-transition-all tw-duration-1000"
            ref={(el) => (valuesRef.current[index] = el)}
            key={id + '-' + index}
          >
            <img className="tw-w-screen tw-h-full" src={img} alt="" />
          </div>
        ))}
        <div className="tw-absolute tw-bottom-0 tw-left-[50%] -tw-translate-x-[50%] tw-flex tw-gap-3 tw-mb-3">
          {values.map((_, index) => (
            <label
              className={`tw-p-3 tw-rounded-full tw-border tw-border-black tw-transition-all tw-duration-1000 ${
                currentIndex === index ? 'tw-bg-red-500' : 'tw-bg-white'
              }`}
              key={index}
              htmlFor={`radio-${id}-${index}`}
              onClick={() => handleAnimate(index)}
            />
          ))}
        </div>
        <div className="tw-absolute tw-bottom-[50%] tw-w-full tw-translate-y-[50%] tw-px-4 tw-flex tw-justify-between">
          <div
            className="tw-p-3 tw-bg-white tw-rounded-full tw-cursor-pointer"
            onClick={handlePrev}
          >
            {'<'}
          </div>
          <div
            className="tw-p-3 tw-bg-white tw-rounded-full tw-cursor-pointer"
            onClick={handleNext}
          >
            {'>'}
          </div>
        </div>
      </div>
    </div>
  );
}
