const Navbar = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">iTask</span>
            </div>
            <div className="flex space-x-5">
              <a
                href="#"
                className="text-gray-300 space-x-5 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Your tasks
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
