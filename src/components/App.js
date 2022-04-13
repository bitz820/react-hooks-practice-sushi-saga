import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [index, setIndex] = useState(0)
  const [wallet, setWallet] = useState(100)
  const [plate, setPlate] = useState([])

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushi(data))
  }, [])

  // console.log(sushi)

  const renderMoreSushi = () => {
    setIndex(index + 4)
  }

  const addPlate = (id) => {
    let singlePlate = sushi.filter(piece => piece.id === id)
    setPlate([...plate, singlePlate +1])
  }
  console.log(plate)

const handleSushiPlate = (price, id) => {
  const newWallet = (wallet - price)
  setWallet(newWallet)
  addPlate(id)
  // console.log(price, id, setIsFull, isFull)
}

// const eatenSushi = sushi.filter(piece => piece.id )

  return (
    <div className="app">
      <SushiContainer 
      sushi={sushi.slice(index, index+4)} 
      renderMoreSushi={renderMoreSushi} 
      handleSushiPlate={handleSushiPlate}
      />
      <Table 
      sushi={sushi} 
      handleSushiPlate={handleSushiPlate} 
      wallet={wallet}
      // singlePlate={singlePlate}
      />
    </div>
  );
}

export default App;
