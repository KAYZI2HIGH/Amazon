const NavBar = () => {
  return (
    <nav className="w-screen flex justify-between items-center py-[15px] px-7 bg-slate-900 sm:space-x-20">
      <div className="border border-transparent p-2 hover:border-white">
        <img
          src="images\amazon-logo-white.png"
          alt="Logo"
          className="w-24"
        />
      </div>
      <div className="flex items-center justify-center space-x-5 sm:flex-1">
        <div className="flex flex-1 rounded-md overflow-hidden">
          <input
            type="text"
            name="text"
            id=""
            className="h-10 w-full flex px-5 focus:outline-none text-lg font-semibold"
            placeholder="Search"
          />
          <button className="h-10 p-2 hidden sm:flex bg-yellow-500 min-w-16 items-center justify-center ">
            <img
              src="images\icons\search-icon.png"
              className="h-full"
            />
          </button>
        </div>
        <div className="px-4 border  border-transparent hover:border-white hidden sm:inline-block">
          <h3 className="font-semibold text-white">Returns</h3>
          <h1 className="font-semibold text-white">& orders</h1>
        </div>
        <div className="relative border border-transparent hover:border-white px-2 py-1">
          <img
            src="images\icons\cart-icon.png"
            alt=""
            className="w-14"
          />
          <h1 className="absolute top-0 left-1/2 text-amber-600 font-bold text-lg">
            3
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
