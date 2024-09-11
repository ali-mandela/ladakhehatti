import HeroComponent from "@/components/Hero";
import {SliderItems} from "@/shared/itemsSlider";
import Image from "next/image";
import Values from '../components/Values';
import Brands from '../components/Brands';
import Products from "@/components/Products";
export default function Home() {
    return (
        <main className="">
            <HeroComponent/> 
            <Brands/>
            <Values/>
            <Products title="Popular Products"/>
        </main>
    );
}
