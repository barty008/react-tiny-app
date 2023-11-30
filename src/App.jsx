import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

import pic1 from "./imgs/pic-1.jpg"
import pic2 from "./imgs/pic-2.jpg"
import pic3 from "./imgs/pic-3.jpg"
import pic4 from "./imgs/pic-4.jpg"
//
const pictures = [pic1, pic2, pic3, pic4]
//
function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log(currentIndex)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  }
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    )
  }
  return (
    <div className="container">
      <button onClick={handlePrev}>Previous </button>
      <img src={pictures[currentIndex]} alt="" />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default App
