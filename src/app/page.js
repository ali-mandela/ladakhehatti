import HeroComponent from "@/components/Hero";
import {SliderItems} from "@/shared/itemsSlider";
import Image from "next/image";
import Values from '../components/Values';
import Brands from '../components/Brands';
export default function Home() {
    return (
        <main className="">
            <HeroComponent/> 
            <Brands/>
            <Values/>
        </main>
    );
}
