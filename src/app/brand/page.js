import PagesHeader from '@/components/PagesHeader';
import src2 from '../../assests/bbg.jpg';
import Values from '@/components/Values';
import Container from '@/components/Layout';
import { BrandItem } from '@/components/Brand';

const BrandPage = () => {
    return ( <> 
    {/* <PagesHeader title='Top Locals from Ladakh' src={src2}/> */}
        {/* <Values/> */
    }  
    {/* Intro */}
     <Container> <section className='flex '>
    <div className='basis-1/2'>
        <h2>Top Locals from Ladakh</h2>
        <p className='leading-8'>
            lorem A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design, directly in
            your markup.A utility-first CSS framework packed with classes like flex, pt-4,
            text-center and rotate-90 that can be composed to build any design, directly in
            your markup.
        </p>
    </div> 
    <div className='basis-1/2 flex items-center justify-center'>
      Image
    </div>
    </section>
    </Container>
  

    {/*List to sort brand based on speciality */}
    <div className='flex flex-wrap	 gap-12 p-2 my-12'>
    {
      ['All',
      "Special",
      "Health care",
      "Artisans","Sweets",
      "Pickles",
      "Other",
      "Processed"]
      .map((item,index)=> <p className='px-6 py-3 bg-slate-200 delay-75 ease-in-out transition-all duration-150 rounded-sm hover:bg-orange-500' key={index}><span>{item}</span></p>)
    }
    </div>

    {/* Brands  components*/}
    <Container>
       <div className='flex gap-4'>
       <BrandItem/>
        <BrandItem/>
        <BrandItem/>
       </div>
    </Container>
    </>)
}

export default BrandPage