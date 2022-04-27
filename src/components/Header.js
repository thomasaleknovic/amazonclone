import react from "react";
import Image from "next/image"
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router"
import { useSelector  } from "react-redux";
import {selectItems} from "../slices/basketSlice"
 
export default function Header () {

    const { data: session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);


    return (

        <header>
        
            <div className="flex bg-amazon_blue p-1  flex-grow py-2  items-center" >

                {/* Brand Logo */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                    onClick={() => router.push('/')}
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"/>
                </div>

                {/* Search Bar */}
                <div className="hidden sm:flex bg-[#febd69] rounded-md items-center flex-grow h-10">
                    <input type="text" className="rounded-l-md p-2 h-full w-6 flex-grow flex-shrink"/>
                    <SearchIcon className="h-10 p-2 text-black rounded-r-md hover:bg-[#f3a847] cursor-pointer"/>
                </div>

                <div onClick={!session ? signIn : signOut} className="text-white flex flex-col ml-4 link p-2">
                    <p className="text-[11px] mb-[-4px]">
                        {session ? `Hello ${session.user.name}` : "Sing In"
                        }
                    </p>
                    <p className="text-[15px]font-bold">Account & Lists</p>
                </div>

                <div className="text-white flex flex-col ml-2 mr-2 link p-2">
                    <p className="text-[11px] mb-[-4px]">Returns</p>
                    <p className="text-[15px] font-bold">& Orders</p>
                </div>

                <div onClick={() => router.push('/checkout')} className="text-white relative flex link p-2">
                    <span className="absolute text-xs top-2 right-1 md:left-8 h-4 w-4 bg-yellow-300 text-center rounded-full text-black font-bold">
                        {items.length}
                        </span>
                    <ShoppingCartIcon className="h-10"/>
                    <p className="hidden md:inline font-bold md:text-sm mt-5 mr-4 ">Basket</p>
                </div>
            </div>

            <div className="bg-[#232f3e] text-white flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center">
                        <MenuIcon className="h-6 ml-3"/>
                        <a className="p-2 text-sm ml-0 pl-0 font-medium" href="#">All</a>
                    </div>
                    <a className="p-2 ml-1 text-sm font-medium" href="#">Prime Video</a>
                    <a className="p-2 ml-1 text-sm font-medium" href="#">Amazon Business</a>
                    <a className="p-2 ml-1 text-sm font-medium" href="#">Today's Deals</a>
                    <a className="p-2 ml-1 text-sm font-medium hidden lg:inline-flex" href="#">Food & Grocery</a>
                    <a className="p-2 ml-1 text-sm font-medium hidden lg:inline-flex" href="#">Prime</a>
                    <a className="p-2 ml-1 text-sm font-medium hidden lg:inline-flex" href="#">Buy Again</a>
                    <a className="p-2 ml-1 text-sm font-medium hidden lg:inline-flex" href="#">Electronics</a>
                </div>

            </div>

        </header>

    )

}