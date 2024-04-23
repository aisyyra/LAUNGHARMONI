"use client";
import React, { useState } from "react";

import Image1 from "@/assets/rully-sabil/Foto_1C.png";
import Image2 from "@/assets/rully-sabil/Foto_2C.png";
import Image3 from "@/assets/rully-sabil/Foto_3C.png";
import Image4 from "@/assets/rully-sabil/S2.png";
import Image5 from "@/assets/rully-sabil/S3.png";

import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

const MobileImgGallery = (props) => {
  
  const {
    _data,
	} = props;

  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  // const activeImageIndex = wrap(0, ImageGalleryPhotos.length, imageCount);
  const activeImageIndex = wrap(0, (_data?.length || 0), imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  // Pulling to the right is positive
  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 10;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  return (
    <motion.div
      className="animate-in relative overflow-hidden w-4/4"
      style={{ "--index": 1 }}
    >
      <img className={"w-full h-[255px] bg-white opacity-0"} />
      <motion.div 
        className={"absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed opacity-100"}
      >
        <AnimatePresence initial={false} custom={direction} className=''>
        <motion.div className="w-full h-full flex justify-center items-center py-2">
          <motion.img
            className={"w-4/6 h-full object-cover object-center p-2 bg-white drop-shadow-[3px_5px_2px_rgba(0,0,0,0.2)] "}
            key={imageCount}
            // src={ImageGalleryPhotos[activeImageIndex].image.src}
            src={_data[activeImageIndex]}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          />
        </motion.div>
        </AnimatePresence>
      </motion.div>

    </motion.div>
  );
}

const ImageGalleryPhotos = [
  {
    image: Image1,
    alt: "Image of me",
    rotate: "-rotate-6",
    width: 320,
    height: 360,
  },
  {
    image: Image2,
    alt: "Image of me",
    rotate: "rotate-6",
    width: 320,
    height: 360,
  },

  {
    image: Image3,
    alt: "Image of me",
    rotate: "-rotate-6",
    width: 320,
    height: 380,
  },
  {
    image: Image4,
    alt: "Image of me",
    rotate: "rotate-6",
    width: 220,
    height: 460,
  },
  {
    image: Image5,
    alt: "Image of me",
    rotate: "-rotate-6",
    width: 320,
    height: 360,
  },
];
const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? 0 : -0,
    scale: 0.4,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0,
  }),
};

const sliderTransition = {
  duration: .5,
  ease: [0.056, 0.35, 0.12, 1.04],
};

export default MobileImgGallery;