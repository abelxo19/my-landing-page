import Logo from "@/assets/logo.png"
import Image from "next/image"
import {Menu} from "lucide-react"
import Log from "@/assets/img/log.png"
import { MonitorCog } from 'lucide-react';
const header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
        <div className="container">
            <div className="flex items-center justify-between ">
            <Image 
             src={Log}
             alt="no_logo"
             className="w-24 h-20"
            />
            <Menu className="h-5 w-5 md:hidden "/>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#" className="hover:text-black">Home</a>
              <a href="#" className="hover:text-black">About</a>
              <a href="#" className="hover:text-black">Contact</a>
              <button className="px-4 py-2 bg-black text-white items-center font-medium justify-center tracking-tight  rounded-lg">Get started</button>
          </nav>
          </div>
        </div>
    </header>
  )
}

export default header
