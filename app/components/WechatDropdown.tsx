import React from "react";
import Image from "next/image";
const WechatDropdown = () => {
  return (
    <div className="fixed top-10 left-1/2 w-60 h-60 transform -translate-x-1/2 bg-white border rounded-lg shadow-lg">
      <div className="flex justify-center items-center h-full relative">
        <Image
          src="/images/qr-code.png"
          alt="WeChat QR Code"
          className="w-56 h-56 absolute left-1/2 transform -translate-x-1/2"
          width={560}
          height={560}  
          priority={true}
        />
      </div>
    </div>
  );
};

export default WechatDropdown;
