import React from "react";

const Cheltuieli = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4  text-black font-bold  shadow-md cursor-pointer group transition-all delay-100 grid grid-cols-2 xl:grid  md:grid-cols-4 md:grid-rows-3 gap-3">
      <div className="hidden md:flex bg-primary p-8 rounded-md shadow-md items-center justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Apa
      </div>
      <div className="flex flex-color bg-indigo-100 justify-start xl:justify-center rounded-lg p-8 shadow-md items-center gap-2 w-full col-span-2 md:col-span-3 row-span-2 ">
        <i class="bx bx-dollar-circle text-5xl"></i>
        <div>
          <h1 className="poppins text-xl">Cheltuieli</h1>

          <p className="roboto text-lg opacity-50">Cheltuieli generale</p>
        </div>
      </div>
      <div className=" flex md:hidden md:flex bg-primary p-8 rounded-md shadow-md items-center justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Apa
      </div>
      <div className="bg-primary p-8 rounded-md shadow-md flex items-center justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Gaze
      </div>

      <div className="bg-primary p-8 rounded-md shadow-md flex items-center justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Energie
      </div>

      <div className="bg-primary p-8 rounded-md shadow-md flex items-center justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Alta factura
      </div>
      <div className="bg-primary p-8 rounded-md shadow-md flex items-center justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Service Lift
      </div>
      <div className="bg-primary p-8 rounded-md shadow-md flex items-center justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Alte cheltuieli
      </div>
    </div>
  );
};

export default Cheltuieli;
