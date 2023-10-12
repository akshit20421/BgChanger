
import { useState } from "react";
function App() {
  const [backgrounds,setBackgrounds] = useState("bg-black");
  const changeBg=(newBg)=>{
     setBackgrounds(newBg)
  }
  return (
   <>
    <div className={`background h-screen w-full flex  items-end justify-center transition-all duration-500 ${backgrounds}`}>
     <div className="colorBar flex h-11 w-4/5 bg-slate-100 mb-20 rounded-2xl justify-center">
       <div className="buttonColors flex justify-center items-center text-white">
        <button onClick={()=>changeBg('bg-red-600')} className="bg-red-600 p-1 w-24 m-2 rounded-2xl ">Red</button>
        <button onClick={()=>changeBg('bg-green-600')} className="bg-green-600 p-1 w-24 m-2 rounded-2xl">Green</button>
        <button onClick={()=>changeBg('bg-blue-600')} className="bg-blue-600 p-1 w-24 m-2 rounded-2xl">Blue</button>
        <button onClick={()=>changeBg('bg-lime-400')} className="bg-lime-400 p-1 w-24 m-2 rounded-2xl">Olive</button>
        <button onClick={()=>changeBg('bg-gray-600')} className="bg-gray-600 p-1 w-24 m-2 rounded-2xl">Gray</button>
        <button onClick={()=>changeBg('bg-yellow-600')} className="bg-yellow-600 p-1 w-24 m-2 rounded-2xl">Yellow</button>
        <button onClick={()=>changeBg('bg-pink-600')} className="bg-pink-600 p-1 w-24 m-2 rounded-2xl">Pink</button>
        <button onClick={()=>changeBg('bg-purple-600')} className="bg-purple-600 p-1 w-24 m-2 rounded-2xl">Purple</button>
        <button onClick={()=>changeBg('bg-teal-600')} className="bg-teal-600 p-1 w-24 m-2 rounded-2xl">Teal</button>
        <button onClick={()=>changeBg('bg-sky-600')} className="bg-sky-600 p-1 w-24 m-2 rounded-2xl">Sky</button>
        <button onClick={()=>changeBg('bg-black')} className="bg-black p-1 w-24 m-2 rounded-2xl">Black</button>
       </div></div>
    </div>
   </>
  )
}
export default App;