/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import bgImg from './../../../assests/cbg.jpg';
import '@/app/custom.css'
import Container from "@/components/Layout";
import Button from "@/components/Button";

const page = () => {
    return (
        <>
          <section className="cbg bg-[#AAAAAA] px-3 md:px-8 lg:px-12 py-12 flex justify-center md:items-center">
            <div className="flex justify-center h-full  items-center flex-col gap-6">
                <h1 className="text-2xl md:text-4xl text-main font-semibold">Even the Mountains Are Listening!</h1>
                <p className=" text-base md:text-xl tetxwhi md:font-medium ">Your voice echoes through the Himalayas. Whether it's feedback, inquiries, or
                    ideas, we’re here to hear you loud and clear!

                </p>
                <Button/>
            </div>
        </section> 
        </>
    )
}

export default page