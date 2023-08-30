import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { RiBilibiliFill } from "react-icons/ri";
import DarkModeButton from "./DarkModeButton";
export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Michael Ma
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/ruinan-ma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/mrn3088"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://courses.davegray.codes/"
          >
            <AiFillWechat />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="mailto:r7ma3088@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://twitter.com/RuinanM59634"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://space.bilibili.com/63498271"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiBilibiliFill />
          </Link>
        </div>
        <DarkModeButton />
      </div>
    </nav>
  );
}
