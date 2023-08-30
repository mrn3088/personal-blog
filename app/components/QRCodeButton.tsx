"use client";
import { AiFillWechat } from "react-icons/ai";
import WechatDropdown from "./WechatDropdown";
import { useState } from "react";
const QRCodeButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="text-white/90 hover:text-white"
      onClick={() => setShow(!show)}
    >
      <AiFillWechat  />
      {show && <WechatDropdown />}
    </div>
  );
};

export default QRCodeButton;
