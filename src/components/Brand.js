import Image from "next/image"
import src2 from '../assests/bbg.jpg'

export const BrandItem = ({item}) => {
    return (
        <div className="basis-2/6">
            <div className="  ">
                <Image
                    src={src2}
                    width={0}
                    height={0}
                    sizes="100%"
                    className='aspect-square object-cover'
                    style={{
                    width: '100%',
                    height: '220px'
                }}
                    alt="Picture of the camel"/></div>
        </div>
    )
}
