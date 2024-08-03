import React from "react";

const InformatiiAsociatii = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 text-black font-bold shadow-md cursor-pointer xl:p-4 group transition-all delay-100 grid grid-cols-2 xl:grid xl:grid-rows-2 xl:grid-cols-3 gap-3">
      <div className="flex flex-col p-4 lg:flex-row justify-center items-start xl:items-center shadow-md rounded-md gap-4 h-full w-full col-span-2 lg:col-span-3 bg-indigo-100">
        <i class="bx bxs-info-circle text-3xl lg:text-5xl"></i>
        <div className="">
          <h1 className="poppins text-xl xl:text-2xl group-hover:opacity-100">
            Informatii
          </h1>

          <p className="roboto text-base xl:text-lg opacity-50">
            Informatii despre asociatie
          </p>
        </div>
      </div>
      <div className="bg-primary p-8 rounded-md flex items-center shadow-md justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Editare informatii
      </div>
      <div className="bg-primary p-8 rounded-md flex items-center shadow-md justify-start xl:justify-center hover:scale-95 transition-transform delay-100">
        Preturi & Coeficienti
      </div>
      <div className="bg-primary p-8 col-span-2 lg:col-span-1 rounded-md flex items-center shadow-md justify-center xl:justify-center hover:scale-95 transition-transform delay-100">
        Cheltuieli administrative
      </div>
    </div>
  );
};

export default InformatiiAsociatii;
