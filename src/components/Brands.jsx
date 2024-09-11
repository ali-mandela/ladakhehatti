import Image from 'next/image';
import Container from './Layout';
import catImage from '../assests/cat.png';

const Brands = () => {
    return (
        <Container bg={'bg-zinc-50'}>
            <div className='my-12 overflow-x-scroll  '>
                <h1 className='text-3xl font-semibold text-[#C70039]'>Top Locals from Ladakh</h1>
                <div className='flex w-full gap-4 my-8'>
                  <Brand/>
                  <Brand/>
                  <Brand/>
                  <Brand/>
                  <Brand/>
                  <Brand/>
                </div>
            </div>
        </Container>
    )
}

const Brand=()=>{ 
  return(
    <div className='hover:shadow-lg bg-zinc-200 rounded-sm shadow-inner w-5/12  md:w-2/12'>
      <Image src={catImage} alt='d' className='mix-blend-multiply aspect-square' width={200} height={90} />
      <p className='text-base md:text-lg px-1 font-light md:font-semibold my-1'>Vegetables</p>
    </div>
  )
}

export default Brands