import Image from "next/image";
import abLogo from "../../public/abLogo.png";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
    return (
        <header>
            {/* Top nav */}
            <div className="flex items-center bg-black p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                    src={abLogo}
                    width={100}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                    />
                </div>
                
                {/* Search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4" />

                </div>
            </div>

            {/* Bottom nav */}
            <div>

            </div>

        </header>
    )
}

export default Header
