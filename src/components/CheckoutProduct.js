import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map(() => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <h3>₹{Math.floor(price) * 100}</h3>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              alt=""
              className="w-12"
              loading="lazy"
              alt=""
            />
            <p className="text-xs text-gray-50">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <button onClick={removeItemFromBasket} className="button h-9 mt-10">
        Remove from Cart
      </button>
    </div>
  );
}

export default CheckoutProduct;
