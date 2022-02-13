import React, { useEffect } from "react";
import Image from "next/image";
import Burger from '../public/cardsImage/burger.png';
import Chiken from '../public/cardsImage/chiken.png';
import Pizza from '../public/cardsImage/pizza.png';
import Leg from '../public/cardsImage/leg.png';

const Cards = () => {

    return (
        <div className="my-32">
            <h3 className="text-2xl text-center mb-4 redressed text-rose-500">Our Popular Menu</h3>
            <h1 className="text-5xl text-center font-bold mb-20 poppins">WENT TO EAT ?</h1>
            <div class="grid grid-cols-4 gap-4 w-3/4 m-auto">
                <div className="bg-white rounded-2xl border-2 h-96 px-8 pt-10 hover:drop-shadow-xl cursor-pointer">
                    <h3 className="text-2xl font-semibold mb-4">COMBO PACK</h3>
                    <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum </p>
                    <div className="text-center mt-4">
                        <Image src={Burger}></Image>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border-2 px-8 pt-10 hover:drop-shadow-xl cursor-pointer">
                    <h3 className="text-2xl font-semibold mb-4">CHIKEN</h3>
                    <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum </p>
                    <div className="text-center mt-4">
                        <Image src={Chiken}></Image>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border-2 px-8 pt-10 hover:drop-shadow-xl cursor-pointer">
                    <h3 className="text-2xl font-semibold mb-4">PIZZA & DRINK</h3>
                    <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum </p>
                    <div className="text-center mt-4">
                        <Image src={Pizza}></Image>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border-2 px-8 pt-10 hover:drop-shadow-xl cursor-pointer">
                    <h3 className="text-2xl font-semibold mb-4">BOX MEALS</h3>
                    <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum </p>
                    <div className="text-center mt-4">
                        <Image src={Leg}></Image>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;