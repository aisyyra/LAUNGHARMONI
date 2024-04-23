'use client'
import React, { useRef, memo } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import "./styles.css";


function ScrollContainer(props) {

	const { content } = props;

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"]
	});

  	const { scrollY } = useScroll()

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		// console.log("Page scroll: ", latest)
	})

	return (
		<section className="h-auto flex flex-col justify-center items-center">
			<div ref={ref} className="w-full h-auto">    		{/* auto widht / height based on need */}

				{/* Scroll Tracker Preview */}
				{/* <figure className="sticky w-[45px] h-[45px] m-none p-none -translate-x-[50px] -rotate-90 border">
					<svg className="" width="40" height="40" viewBox="0 10 100 100">
						<circle cx="50" cy="50" r="30" pathLength="1" className="stroke-red-100 fill-none stroke-[5px]" />
						<motion.circle
							cx="50"
							cy="50"
							r="30"
							pathLength="0"
							className="stroke-red-500 stroke-[5px] fill-transparent"
							style={{ pathLength: scrollYProgress }}
						/>
					</svg>
				</figure> */}

				{/* Main Content */}
				{content}

			</div>
		</section>
	);
};

export default memo(ScrollContainer);