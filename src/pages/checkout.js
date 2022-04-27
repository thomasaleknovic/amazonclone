
import Header from "../components/Header";
import Image from "next/image";
import { useSelector  } from "react-redux";
import {selectItems, selectTotal} from "../slices/basketSlice"
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";


 export default function checkout () {

    const items = useSelector(selectItems);
    const total = useSelector(selectTotal)
    const { data: session } = useSession();
 

    return (
        <div className="bg-gray-100 h-screen ">
            <Header /> 

            <main className="lg:flex max-w-screen-2xl mx-auto justify-around">

                <div className="m-5 flex-grow shadow-sm">
                    <div>
                        <Image src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                        />
                    </div>
                    <div className="bg-white flex flex-col space-y-10 rounded-md p-5">
                        <div>
                            <h1 className="text-3xl border-b pb-4 ">
                                {items.length === 0 ? "Your Amazon basket is empty" : "Shopping basket"}
                            </h1>
                        </div>
                        <div>
                            {items.map((item, i) =>(
                                <CheckoutProduct 
                                key={i}
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col p-10 bg-white h-screen mr-5">
                    {items.length > 0 && (
                        <div>
                            <p className="text-sm whitespace-nowrap">Subtotal ({items.length} items): {" "}
                            <span className="font-bold">
                                <Currency quantity={total} currency="USD" />
                            </span>
                            </p>
                            <button className={`button mt-3 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed hover:from-gray-300 hover:to-gray-500 hover:border-gray-200"}`}>
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
 }