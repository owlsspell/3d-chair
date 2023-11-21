import { useContext, useState } from "react";
import { CirclePicker, SwatchesPicker, TwitterPicker } from "react-color";
import { ColorContext } from "../context/colorContext";

export default function ColorDropdown() {

    // const [color, setColor] = useState("")
    const { active, colorParts, updateColorParts } = useContext(ColorContext);

    // console.log('color', color);
    const handleChange = (color) => {
        // console.log(color); setColor(color.hex);
        updateColorParts(color.hex)
    }
    return (
        <div className="absolute bottom-2 right-4">
            {/* <TwitterPicker /> */}
            {/* <CirclePicker
                circleSpacing={10}
                width={230}
            // color={color}
            // onSwatchHover={handleChange} 
            /> */}
            <SwatchesPicker
                // height={'100%'}
                color={colorParts[active] ?? ""}
                onChangeComplete={handleChange}
            />
        </div>
    )
}
