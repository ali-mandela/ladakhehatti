import Container from '@/components/Layout'
import Image from 'next/image';
import src1 from '../../../assests/st.jpg'
 

const page = () => {
  return (
<>
<Image src={src1}
                    width={0}
                    height={0}
                    sizes="100%"
                    className='object-cover'
                    style={{
                    width: '100%',
                    height: '200px'
                }}
                    alt='' />
  <Container>
    SROEY
  </Container>
</>

  )
}

export default page