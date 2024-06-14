import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiPython } from "react-icons/di";

import { SiCsharp } from "react-icons/si";
import { SiMysql } from "react-icons/si";









const Techno = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPython className="text-7xl bg-python-gradient"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCsharp className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl "/>
            </div>
      </div>
    </div>
  )
}

export default Techno
