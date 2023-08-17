const Header = () => {
  return (
    <header className="relative w-full h-[6rem] overflow-hidden text-center text-[1rem] text-white font-inter">
      <div className="absolute inset-0 w-full h-[6.06rem]">
        <img
          className="absolute inset-0 w-full h-[6rem] object-cover"
          alt=""
          src="/bg-2-1@2x.png"
        />
        <div className="absolute inset-0 bg-gray-200 backdrop-blur-[7.2px] opacity-50 border border-solid border-gray-100" />
      </div>
      <nav className="absolute top-4 right-4 space-x-4">
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
          Login
        </button>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
          Start now
        </button>
      </nav>
      <h1 className="absolute top-2 left-12 text-2xl font-extrabold font-poppins">
        FlexPass
      </h1>
      <nav className="absolute top-4 left-36 space-x-4">
        <button className="text-white hover:text-gray-300">My Tickets</button>
        <button className="text-white hover:text-gray-300">Wallet</button>
      </nav>
    </header>
  );
};

export default Header;
