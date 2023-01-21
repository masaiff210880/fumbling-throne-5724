import React from "react";
import { useEffect, useState, useRef } from "react";
import "../components/Slider.css";

const colors = [
  "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/1fc22e2fa5b3f9f4.jpg?q=50",
  "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/a1c75ace6eb4ddea.jpg?q=50",
  "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/440a28c053a889e9.jpg?q=50",
  "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/5c336d7806225058.jpg?q=50",
];
const delay = 3500;

function Slider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            // style={{ backgroundColor }}
          >
            <img src={backgroundColor} alt="" width="100%" height="230px" />
          </div>
        ))}
      </div>

      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div> */}
    </div>
  );
}

export default Slider;
