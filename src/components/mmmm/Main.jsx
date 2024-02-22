
//#####################this  just for testing ########################

import { useState } from "react";
// import "./main.css";
const Main = () => {
  const [Class,setclass]=useState("all")
 

  const arr=[{type:['react', 'javascript'] , subtitle:'lore klsdmkgk.dkmv.kxfnv'},
  {type:['html'] , subtitle:'lore klsdmkgk.dkmv.kxfnv'},
  {type:['javascript'] , subtitle:'lore klsdmkgk.dkmv.kxfnv'}]
  const [NewARR,setNewARR]=useState(arr)
const funset=(type)=>{
  if (type === "all"){
    setNewARR(arr)
  }
  else{
    const a=arr.filter((i)=>{ const d=i.type.filter((z) => { return z === type
       })
     return d == type });
      setNewARR(a);
  }
  setclass(type)
}


  return (

    <main className="flex">
      <section className="flex  left-section">
      <button 
    onClick={() => funset("all")} 
    className={Class === "all" ? "active" : null }> 
    all projects
</button>
        <button onClick={() =>funset("html")} 
    className={Class === "html" ? "active" : null }> HTML & CSS </button>
        <button onClick={() => funset("javascript")} 
    className={Class === "javascript" ? "active" : null }> JavaScript </button>
        <button onClick={() => funset("react")} 
    className={Class === "react" ? "active" : null }> React & MUI </button>
        <button onClick={() => funset("node")} 
    className={Class === "node" ? "active" : null }> Node & Express </button>
      </section>

      <section  className=" flex right-section">
        {NewARR.map((item) => {
          return (
            <article  key={item} className="card">
              <img width={266} src="./1.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.type[0]} </h1>
                <p className="sub-title">
                 {item.subtitle}
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span 
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
