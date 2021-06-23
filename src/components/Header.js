import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-3 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={120}
            height={40}
            objectFit="contained"
            className="cursor-pointer"
          />
          <div className="flex items-center">
            <input type="text" />
          </div>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
