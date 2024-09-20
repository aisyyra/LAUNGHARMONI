'use client'
import { memo } from "react";
import React, { useState, useEffect } from "react";
import { Playfair_Display, Playfair_Display_SC, Kapakana, Arapey } from '@/utils/fonts';

function Countdown(props) {

	const {
		project,	// custom by projects name
		target_date,
		target_date2,
	} = props;  

	const COUNTDOWN_TARGET = new Date(target_date);
	const COUNTDOWN_TARGET2 = new Date(target_date);

	const getTimeLeft = () => {
		const totalTimeLeft = COUNTDOWN_TARGET - new Date();

		let days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
		let hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);


		// Check single digit
		if (days < 10) days = '0' + days;
		if (hours < 10) hours = '0' + hours;
		
		return { days, hours};
	};

	const getTimeLeft2 = () => {
		const totalTimeLeft2 = COUNTDOWN_TARGET2 - new Date();

		let menit = Math.floor((totalTimeLeft2 / (1000 * 60)) % 60);
		let seconds = Math.floor((totalTimeLeft2 / 1000) % 60);

		// Check single digit
		if (menit < 10) menit = '0' + menit;
		if (seconds < 10) seconds = '0' + seconds;

		return { menit, seconds };
	};


	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
	const [timeLeft2, setTimeLeft2] = useState(() => getTimeLeft2());

	useEffect(() => {

		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		const timer2 = setInterval(() => {
			setTimeLeft2(getTimeLeft2());
		}, 1000);

		return () => {
			clearInterval(timer);
			clearInterval(timer2);
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
					<div className='justify-center items-center text-[12.5px] grid grid-cols-1'>
						{Object.entries(timeLeft).map((el, i) => {
							const label = el[0];
							const value = el[1];
							const end = (Object.entries(timeLeft).length - 1);
							return (
								<div key={label} className="justify-center items-center">
									<div className="text-black justify-center items-center text-center bg-[#EEF0F2] shadow-xl py-[30px]">
										<div className={'text-[40px] font-Suranna tracking-normal w-full leading-[75px] text-[#353B3C]'}>
											{value || 0}
										</div>
										<div className={"text-[15px] text-[#353B3C] font-inter capitalize tracking-wider"}>
											{label}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}

				{/* Rully Sabil Mobile ke dua*/}
				{project == 'Rully_Sabil_Mobile2' && (
				<>
					<div className='justify-center items-center text-[12.5px] grid grid-cols-1'>
						<div className="justify-center items-center bg-gradient-to-r from-[#A2999E] to-[#828282] py-[30px]">
							<p className="font-Suranna text-[40px] leading-[42px] text-[#EEF0F2]">
								Hitung<br></br>Mundur
							</p>
						</div>
						{Object.entries(timeLeft2).map((el, i) => {
							const label = el[0];
							const value = el[1];
							const end = (Object.entries(timeLeft2).length - 1);
							return (
								<div key={label} className="justify-center items-center">
									<div className="text-black justify-center items-center text-center bg-[#EEF0F2] shadow-xl py-[30px]">
										<div className={'text-[40px] font-Suranna tracking-normal w-full leading-[75px] text-[#353B3C]'}>
											{value || 0}
										</div>
										<div className={"text-[15px] text-[#353B3C] font-inter capitalize tracking-wider"}>
											{label}
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