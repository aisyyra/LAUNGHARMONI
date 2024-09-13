'use client'
import { memo } from "react";
import React, { useState, useEffect } from "react";
import { Playfair_Display, Playfair_Display_SC, Kapakana, Arapey } from '@/utils/fonts';

function Countdown(props) {

	const {
		project,		// custom by projects name
		target_date,
	} = props;  

	const COUNTDOWN_TARGET = new Date(target_date);

	const getTimeLeft = () => {
		const totalTimeLeft = COUNTDOWN_TARGET - new Date();

		let days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
		let hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
		let minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
		let seconds = Math.floor((totalTimeLeft / 1000) % 60);

		// Check single digit
		if (days < 10) days = '0' + days;
		if (hours < 10) hours = '0' + hours;
		if (minutes < 10) minutes = '0' + minutes;
		if (seconds < 10) seconds = '0' + seconds;

		return { days, hours, minutes, seconds };
	};

	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {

		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='countdown'>

			{/* Original Style */}
			{project == 'Original' && (
				<>
					<h2>Countdown</h2>
					<div className='content'>
						{Object.entries(timeLeft).map((el) => {
							const label = el[0];
							const value = el[1];
							return (
								<div className='box' key={label}>
									<div className='value'>
										<span>{value || 0}</span>
									</div>
									<span className='label'> {label} </span>
								</div>
							);
						})}
					</div>
				</>
			)}

			{/* Rully Sabil */}
			{project == 'Rully_Sabil' && (
				<>
					<div className='justify-center items-center col-span-7 text-[12.5px] grid grid-cols-4 ml-4 mr-[-25px]'>
						{Object.entries(timeLeft).map((el, i) => {
							const label = el[0];
							const value = el[1];
							const end = (Object.entries(timeLeft).length - 1);
							return (
								<div key={label} className="flex mt-[-25px]">
									<div className="flex-1 text-black justify-center items-center text-center">
										<div className={Arapey.className + ' text-[65px] tracking-wider w-full leading-[90px]'}>
											{value || 0}
										</div>
										<div className={Playfair_Display.className + " text-[12px] capitalize italic mt-[-10px] tracking-wider"}>
											{label}
										</div>
									</div>
									<div className="flex-1 text-black justify-center items-center text-center">
									{i != end && (
											<div className={Arapey.className + ' text-[55px] tracking-wider w-full'}>
												:
											</div>
									)}
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}

			{/* Rully Sabil Mobile */}
			{project == 'Rully_Sabil_Mobile' && (
				<>
					<div className='justify-center items-center grid grid-cols-2 px-3'>
						{Object.entries(timeLeft).map((el, i) => {
							const label = el[0];
							const value = el[1];
							const end = (Object.entries(timeLeft).length - 1);
							return (
								<div key={label} className=" justify-center items-center mt-5">
									<div className="text-white justify-center items-center text-center mx-7 mb-[100px]">
                                        <div className="px-[25px] py-[20px] bg-[#474747] rounded-[11px]">
                                            <div className={'text-[48px] font-Oranienbaum tracking-normal w-full leading-[75px] '}>
                                                {value || 0}
                                            </div>
                                            <div className={"text-[18px] font-Suranna capitalize mt-[-17px] tracking-wider "}>
                                                {label}
                                            </div>
                                        </div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}

		</div>
	);
};

export default memo(Countdown);