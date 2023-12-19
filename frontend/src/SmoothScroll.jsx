import React, { useState, useEffect, useRef } from "react";
import { TweenLite, Power4 } from "gsap";

const SmoothScroll = (props) => {
  const [height, setHeight] = useState(window.innerHeight);
  const viewportRef = useRef(null);

  const ro = new ResizeObserver((elements) => {
    for (let elem of elements) {
      const crx = elem.contentRect;
      console.log(crx);
      setHeight(crx.height);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    ro.observe(viewportRef.current);

    return () => {
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  const onScroll = () => {
    TweenLite.to(viewportRef.current, 1, {
      y: -window.pageYOffset,
      ease: Power4.easeOut,
    });
  };

  return (
    <div>
      <div className="viewport" ref={viewportRef}>
        {props.children}
      </div>
      {/* <div
        ref={ref => (this.fake = ref)}
        style={{
          height: height
        }}
      /> */}
    </div>
  );
};

export default SmoothScroll;
