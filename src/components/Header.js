import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="h-10 w-5"></div>
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={120}
            height={40}
            objectFit="contained"
            className="cursor-pointer"
          />
        </div>
        <div className="h-10 w-5"></div>
        <div className="hidden sm:flex items-center h-10 bg-yellow-400 hover:bg-yellow-500 rounded-md cursor-pointer flex-grow">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md"
            type="text"
          />
          <SearchIcon className="h-12  p-4 " />
        </div>
        <div className="h-10 w-5"></div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6">
          <div className=" link">
            <p>Hello Yash</p>
            <p className="font-extrabold">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold">& Orders</p>
          </div>
          <div className=" link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <div className="flex mt-2">
              <div className="w-1.5"></div>
              <p className=" hidden md:inline font-extrabold">Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex item-center bg-amazon_blue-light text-white p-2.5 text-sm pl-4">
        <MenuIcon className="h-6 mr-1 " />
        <p className="mr-3 link">All </p>
        <p className="mr-3 link">Prime Video </p>
        <p className="mr-3 link">Amazon Business </p>
        <p className="mr-3 link">Today's Details </p>
        <p className="mr-3 link">Electronics </p>
        <p className="mr-3 link">Food & Grocery </p>
        <p className="mr-3 link">Prime </p>
        <p className="mr-3 link">Buy Again </p>
        <p className="mr-3 link">Shopper Toolkit </p>
        <p className="mr-3 link">Health & Personal Care </p>
      </div>
    </header>
  );
}

export default Header;
