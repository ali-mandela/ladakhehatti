
const Footer = () => {
  return (
    <footer className='px-3 md:px-8 lg:px-12 py-12 mt-12 bg-[#FF5733] text-white'> 
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-start mb-8">
          {/* Store Name and Tagline */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Ladakh-e-Hatti</h2>
            <p className="mt-2">Bringing Ladakh's treasures to your doorstep</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-300">Products</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white pt-4">
          <p className='text-center'>&copy; 2024 Ladakh-e-Hatti. All rights reserved.</p> 
        </div>
      </div>
    </footer>
  )
}

export default Footer