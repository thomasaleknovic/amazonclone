
import react from "react"
import Image  from "next/dist/client/image"
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket  } from "../slices/basketSlice";
import { removeFromBasket } from "../slices/basketSlice";
 
export default function CheckoutProduct ({id, title, price, description, category, rating, hasPrime, image}) {

    const dispatch = useDispatch();

    const addItensToBasket = () => { 
        const product = {
           id,
           title,
           price,
           description,
           category,
           image,
           hasPrime
        }

        dispatch(addToBasket(product))
   };

   const removeItensToBasket = () => { 
    const product = {
       id,
       title,
       price,
       description,
       category,
       image,
       hasPrime
    }

    dispatch(removeFromBasket({id}))
};

    return (

        <div className="grid grid-cols-5 mb-10">
           
             <Image src={image} height={200} width={200} objectFit="contain" />
      
            <div className="col-span-3 mx-5">
                <h2 className="text-xl font-medium mb-1 my-3">{title}</h2>
                <div className="flex ">
                    {Array(rating).fill().map((_,i) => (
                        <StarIcon className="h-4 text-yellow-500" />
                        ))
                    }
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <div className="mb-5">
                    <Currency quantity={price} currency="USD" />
                </div>
                {hasPrime &&
                    <div className="flex flex-row items-center space-x-2 -mt-5">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw"></img>
                        <p className="text-xs text-gray-500">FREE ship</p>
                    </div>}            
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end ">
                    <button onClick={addItensToBasket} className="button mt-auto">Add to Basket</button>
                    <button onClick={removeItensToBasket} className="button mt-auto">Remove from Basket</button>
            </div>


        </div>
    )
}