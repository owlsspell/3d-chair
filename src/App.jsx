import { Canvas } from "react-three-fiber";
import './App.css'

import ChairMesh from "./components/Chair/ChairMesh";
import { Suspense, useState } from "react";
import Colors from "./components/Colors";
import Menu from "./components/Menu";
import useContextMenu from "./hooks/useContextMenu";
import { CirclePicker } from "react-color";
import ModelParts from "./components/ModelParts";
import { ColorContext, defaultColors } from "./context/colorContext";

function App() {
  // const [clicked, setClicked] = useState(false)
  // const [positionMenu, setPositionMenu] = useState({ x: 0, y: 0 })
  // const { clicked, setClicked, points, setPoints } = useContextMenu();
  // const onContextMenu = (e) => {
  //   e.preventDefault()
  //   console.log('right click', e.pageX, e.pageY);
  //   setClicked(true);
  //   setPoints({ x: e.pageX, y: e.pageY })
  // }
  const [colorParts, setColorParts] = useState(defaultColors);
  const [active, toggleActive] = useState('arm')

  console.log('colorParts', colorParts);
  const updateColorParts = (color) => setColorParts({ ...colorParts, [active]: color })
  return (
    <ColorContext.Provider value={{ colorParts, updateColorParts, active, toggleActive }}>
      <div className="screen relative">
        {/* {clicked && <Menu points={points} />} */}
        <Canvas camera={{ position: [1.5, 1.5, 1.5] }} shadows >
          <Suspense fallback={null}>
            <ChairMesh />
          </Suspense >
        </Canvas>
        {/* <CirclePicker
        circleSpacing={10}
        width={230}
      // color={color}
      // onSwatchHover={handleChange} 
      /> */}
        <ModelParts />
        <Colors />
      </div >
    </ColorContext.Provider>
  )
}

export default App
