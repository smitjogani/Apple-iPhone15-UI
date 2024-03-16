import { appleImg, bagImg, searchImg } from "../util/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} height={18} width={14} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          <div className="px-5 text-sm text-gray cursor-pointer hover:text-white transition-all">Store</div>
          <div className="px-5 text-sm text-gray cursor-pointer hover:text-white transition-all">Mac</div>
          <div className="px-5 text-sm text-gray cursor-pointer hover:text-white transition-all">iPhone</div>
          <div className="px-5 text-sm text-gray cursor-pointer hover:text-white transition-all">Support</div>
        </div>
        <div>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="cart" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
