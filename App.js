import "./styles.css";
import React, { useState } from "react";
export default function App() {
  let [data, setData] = useState();
  let [property, setProperty] = useState("");
  const MFODATA = [
    {
      id: 1,
      mfoName: "MFO NAme",
      property: [
        { name: "property1" },
        { name: "property2" },
        { name: "property3" }
      ]
    },
    {
      id: 2,
      mfoName: "MFO NAme2",
      property: [
        { name: "property1" },
        { name: "property2" },
        { name: "property3" }
      ]
    },
    {
      id: 3,
      mfoName: "MFO NAme3",
      property: [
        { name: "property1" },
        { name: "property2" },
        { name: "property3" }
      ]
    },
    {
      id: 4,
      mfoName: "MFO NAme4",
      property: [
        { name: "property1" },
        { name: "property2" },
        { name: "property3" }
      ]
    }
  ];
  // function for showing MFONAME

  const handleClick = (id) => {
    setData(id);
    setProperty("");
  };
  // function for showing property value

  const handleBtn = (item, id) => {
    setProperty(item);
    setData(id);
  };
  return (
    <div>
      {MFODATA.map((item) => {
        return (
          <div key={item.id}>
            <h5>{item.id === data ? `${item.mfoName} ${property} ` : " "}</h5>
            <h1
              onClick={() => {
                handleClick(item.id);
              }}
              className={item.id === data ? "customCss" : ""}
            >
              {item.mfoName}
            </h1>
            {item.property.map((i) => {
              return (
                <div>
                  <h6 onClick={() => handleBtn(i.name, item.id)}>{i.name}</h6>
                </div>
              );
            })}
            <hr />
          </div>
        );
      })}
    </div>
  );
}

