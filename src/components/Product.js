import react, {useState} from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket  } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product ({id, title, price, description, category, image}) {


    const dispatch = useDispatch();
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    const [hasPrime] = useState(Math.random() < 0.5)

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

    return(
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="mb-1 my-3">{title}</h4>

            <div className="flex">
                {Array(rating)
                .fill()
                .map((_,i) => (

                    <StarIcon className="h-4 text-yellow-500" />
                ))}
            </div>
            
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="USD" />
            </div>
            
            {hasPrime &&
            <div className="flex flex-row items-center space-x-2 -mt-5">
                <img className="w-12" src="https://links.papareact.com/fdw"></img>
                <p className="text-xs text-gray-500">FREE ship</p>
            </div>}

            <button onClick={addItensToBasket} className="mt-auto button">Add to basket</button>
             
        </div> 
    )
}