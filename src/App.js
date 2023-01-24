import { useState } from "react";
import "./App.css";
import FirstForm from "./componets/FirstForm/FirstForm";
import List from "./componets/List/List";

function App() {
  const [userInfo, setListAgeName]=useState([])
  const saveAgeName=(data)=>{
    const nameAgeData=[...userInfo];
    nameAgeData.push(data);
    setListAgeName(nameAgeData);
    console.log(userInfo);
  }
  userInfo.sort(function(a,b){
    return b.age-a.age;
  })

  return <div className="App">
    <FirstForm saveAgeNameHandler={saveAgeName}/>
    <List userInfo={userInfo}/>
  </div>;
}

export default App;
