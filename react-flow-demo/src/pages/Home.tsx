import { useEffect, useState } from "react";
import NavBar from "./NavBar"
import TemplateTaskMenu from "./TemplateTaskMenu";
import "../App.css"
import { templateInitState } from "../store/slice/templateSlice";
function Home() {
  return (
    <div>
      <NavBar />
      <aside className="menu mt-4 ml-5 " style={{ width: "200px" }}>
        <TemplateTaskMenu templateDict={templateInitState}/>
      </aside>
    </div>
  ) 
}

export default Home