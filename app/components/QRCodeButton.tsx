"use client";
import { AiFillWechat } from "react-icons/ai";
import WechatDropdown from "./WechatDropdown";
import { useEffect, useState } from "react";
const QRCodeButton = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const listener = (e: any) => {
      console.log(e.target);
      if (!(e.target as Element).closest(".wechat-dropdown")) {
        setShow(false);
      }
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  });
  return (
    <div
      className="text-white/90 hover:text-white"
      onClick={() => setShow(!show)}
    >
      <AiFillWechat />
      {show && <WechatDropdown />}
    </div>
  );
};

export default QRCodeButton;
