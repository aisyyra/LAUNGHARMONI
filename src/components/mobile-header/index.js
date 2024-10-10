'use client'
import { memo } from "react";
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

function MobileMenu(props) {

	const {
		data,
		menu_length,
		activeLink,
		setActiveLink,
		togglePlay,
		toggleMute,
	} = props;  

	const [audio, setAudio] = useState(true);
	const [play, setPlay] = useState(true);

	return (
		<nav className="fixed lg:hidden bottom-0 left-0 right-0 z-50">

			{/* Mobile Navigation */}
			<div className="bg-white border-t drop-shadow-lg">
				<div className={"flex w-full py-2 px-[7px] " + menu_length}>

					{data?.map((item, index) => (
						<motion.div key={index} whileTap={{ scale: 0.95 }}>
							<LinkScroll
								activeClass="active"
								to={item.id}
								spy={true}
								smooth={true}
								duration={1000}
								onSetActive={() => {setActiveLink(item.id);}}
								className="flex flex-col items-center text-xs transition-all"
							>
								{activeLink == item.id ? (

									<div 
										className="w-[45px] h-[48px] bg-contain bg-no-repeat bg-center"
										style={{ backgroundImage: `url(${item.icon?.src})` }}
									></div>

								) : (

									<div 
										className="w-[45px] h-[48px] bg-contain bg-no-repeat bg-center"
										style={{ backgroundImage: `url(${item.iconSelected?.src})` }}
									></div>

								)}
							</LinkScroll>
						</motion.div>
					))}

				</div>
			</div>
			{/* End Mobile Navigation */}

		</nav>
	);
};

export default memo(MobileMenu);