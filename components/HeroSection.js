import React, { useEffect } from "react";

const HeroSection = () => {
	
	return (
		<div className="h-screen flex justify-center items-center flex-col text-center font-bold lg:text-8xl text-6xl space-y-2 hero-sec">
			<h3 data-aos="fade-down" className="text-white pb-10">
				Welcome To Habiby-s
			</h3>
			<div data-aos="fade-up" className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-red-900 rounded-lg w-64 h-16">
				<h1 className="text-center">Book Table</h1>
			</div>
		</div>
	);
}

export default HeroSection;