import Image from "next/image";
import abLogo from "../../public/abLogo.png";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header>
            {/* Top nav */}
            <div className="flex items-center bg-black p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/')}
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
                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>
                            {session ? `Hello,  ${session.user.name}` : "Sign In"}
                        </p> 
                        <p className="font-extrabold md:text-sm">Accounts & Lists</p>
                    </div>

                    <div className="link">
                        <p>Reviews</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div
                        onClick={() => router.push('/checkout')}
                        className="relative link flex items-center"
                    >
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>

            </div>

            {/* Bottom nav */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-gray-600 text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Today's Special</p>
                <p className="link">Our Story</p>
                <p className="link hidden lg:inline-flex">Contact Us</p>
                <p className="link hidden lg:inline-flex">FAQ</p>
            </div>

        </header>
    )
}

export default Header
