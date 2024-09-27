import { Lists } from "@/components/UI/dashboard/sidebar/Lists";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="min-w-[16.4375rem]">
      {/* logo box  */}
      <div className="flex justify-center mx-auto ">
        <div>
          <Image
            className="mt-[1.875rem]"
            src={"/assets/logo.png"}
            width={100}
            height={47}
            alt="Logo"
          />
        </div>
      </div>
      {/* lists  */}
      <Lists />
    </div>
  );
};

export default Sidebar;
