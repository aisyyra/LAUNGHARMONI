'use client'
import * as React from "react";
import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";


function MobileImgSlider(props) {

  const {
		_width,
    _height,              // custom in px
    _direction,           // -1 or 1
    _movementEnter,
    _movementExit,
    _scrollStiffness,
    _scrollDamping,
    _scrollInterval,
    _scrollDuration,
    _data,
	} = props;  

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? _movementEnter : (-0 * _movementEnter),      // default 1000
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? _movementExit : (-0 * _movementExit),      // default 1000
        opacity: 0
      };
    }
  };
  
  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */
  const swipeConfidenceThreshold = 10000;   // 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  // const imageIndex = wrap(0, images.length, page);
  const imageIndex = wrap(0, _data?.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };


  useEffect(() => {
    const autoplay = setInterval(() => {
        paginate(parseInt(_direction));
    }, (parseInt(_scrollInterval) || 3000));    // in ms 3s = 3000

    return () => clearInterval(autoplay);
  });

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-10 bg-black"
      >
        <div className="relative w-full h-screen">
          
          <div className={"bg-white opacity-10 w-full h-full"} />
          <div className="absolute bottom-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-80">

            <div>
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  className="absolute w-full h-full object-cover object-bottom"
                  key={page}
                  src={_data[imageIndex]}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: (parseInt(_scrollStiffness) || 300), damping: (parseInt(_scrollDamping) || 30) },     // { type: "spring", stiffness: 300, damping: 30 }
                    opacity: { duration: (parseFloat(_scrollDuration) || 0.2) }                                                           // 0.2
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                      }
                  }}
                />
              </AnimatePresence>
            </div>

          </div>

        </div>
      </nav>
    </>
  );
};

export default memo(MobileImgSlider);
