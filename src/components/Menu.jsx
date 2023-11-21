import { useState } from 'react';
import { ChromePicker, CirclePicker, TwitterPicker } from 'react-color'

export default function Menu({ points }) {
    const [color, setColor] = useState("")
    console.log('color', color);
    const handleChange = (color) => { console.log(color); setColor(color.hex) }
    return (
        <div className='absolute z-50 bg-white p-2 rounded'
            style={{
                top: points.y,
                left: points.x,
                // zIndex: 100
            }}>
            <CirclePicker
                circleSpacing={10}
                width={230}
                color={color}
                onSwatchHover={handleChange} />
        </div >
    )
}
