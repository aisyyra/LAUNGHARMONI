'use client'
import { memo } from "react";
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

import m_IcoAudio_On from "@/assets/rully-sabil/icon/Audio_On.svg";
import m_IcoAudio_Off from "@/assets/rully-sabil/icon/Audio_Off.svg";
import m_IcoPlay from "@/assets/rully-sabil/icon/Play.svg";
import m_IcoPause from "@/assets/rully-sabil/icon/Pause.svg";

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

			<div className="w-full flex justify-end items-end">
				<div className="grid grid-cols-1">
					{audio ? (
						<motion.div 
							className="w-[45px] h-[48px] bg-cover bg-no-repeat bg-center mr-[6px]"
							style={{ backgroundImage: `url(${m_IcoAudio_On.src})` }}
							whileTap={{ scale: 0.9 }}
							onClick={() => {
								setAudio(false);
								toggleMute();
							}}
						></motion.div>
					) : (
						<motion.div 
							className="w-[45px] h-[48px] bg-cover bg-no-repeat bg-center mr-[6px]"
							style={{ backgroundImage: `url(${m_IcoAudio_Off.src})` }}
							whileTap={{ scale: 0.95 }}
							onClick={() => {
								setAudio(true);
								toggleMute();
							}}
						></motion.div>
					)}

					{play ? (
						<motion.div 
							className="w-[45px] h-[48px] bg-cover bg-no-repeat bg-center mr-[6px] mb-[3px]"
							style={{ backgroundImage: `url(${m_IcoPause.src})` }}
							whileTap={{ scale: 0.9 }}
							onClick={() => {
								setPlay(false);
								togglePlay();
							}}
						></motion.div>
					) : (
						<motion.div 
							className="w-[45px] h-[48px] bg-cover bg-no-repeat bg-center mr-[6px] mb-[3px]"
							style={{ backgroundImage: `url(${m_IcoPlay.src})` }}
							whileTap={{ scale: 0.95 }}
							onClick={() => {
								setPlay(true);
								togglePlay();
							}}
						></motion.div>
					)}
				</div>
			</div>

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