import HeroComponent from "@/components/Hero";
import {ProductItems, SliderItems} from "@/shared/itemsSlider";
import Image from "next/image";
import Values from '../components/Values';
import Brands from '../components/Brands';
import Products from "@/components/Products";
import Container from "@/components/Layout";

export default function Home() {
    return (
        <main className="">
            <HeroComponent/> 
            <Brands/>
            <Values/>
            <Container>
            <Products data={ProductItems} title="Popular Products"/>
            </Container>
        </main>
    );
}
