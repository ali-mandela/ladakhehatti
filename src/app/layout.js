import {Inter} from 'next/font/google';

import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Importing the font and configuring it
const zillaS = Inter({subsets: ['cyrillic'], display: 'swap'});

export const metadata = {
    title: "Ladakh e hatti",
    description: "designed and developed by rdev.ladakh app"
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`bg-zinc-50 ${zillaS.className}`}>
                <Navbar/>
                <main className='  min-h-[calc(100vh-160px)]'>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}
