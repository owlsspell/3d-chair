import { useContext, useState } from "react"
import { ColorContext } from "../context/colorContext";

export default function ModelParts() {
    // const [active, toggleActive] = useState('arm')
    const parts = ['arm', 'apron', 'seat', 'legs', 'pillow']
    const { active, toggleActive } = useContext(ColorContext);
    console.log('active', active);
    return (
        <div className="absolute w-24 bottom-2 left-4 mr-1 bg-white p-4 rounded">
            {parts.map(item => <>
                <div className={`cursor-pointer ${active === item ? "text-blue-500 font-bold" : ""}`} onClick={() => toggleActive(item)}>
                    {item}
                </div >
            </>)}
        </div>
    )
}
