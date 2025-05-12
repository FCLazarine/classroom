import "./global.css"
import {useEffect, useState} from "react"
import { Button } from "./components/button";
import styles from "./app.module.css";


export function App() {

  // let count = 0;

  const [count, setCount] = useState(0);
  //const { show } = useMessage({name: "Lucas", age: 20});


  function handleAdd(){

    setCount((prevState) => prevState + 1)

//count = count + 1;

    setCount((prevState) => prevState + 1)
    
    }

  function handleRemove(){

    //count = count - 1;

    if(count > 0){
    
    setCount((prevState) => prevState - 1)

    }
  }

  useEffect(() => {
    if(count > 0){
      console.log("Maior que zero")
    }
  }, [count])

    
  

  return (
  <div className = {styles.container}>
    
    <Button name = "Adicionar" onClick = {handleAdd} />
    <span>{count}</span>
    <Button name = "Remover" onClick = {handleRemove} />
  </div>
  )
}







function setCount(arg0: number) {
  throw new Error("Function not implemented.");
}
// Removed unnecessary function definition for setCount

