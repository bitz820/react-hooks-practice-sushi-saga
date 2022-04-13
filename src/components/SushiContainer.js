import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, renderMoreSushi, handleSushiPlate}) {

  const renderSushi = sushi.map(piece => {
    // console.log(piece)
    return <Sushi 
    handleSushiPlate={handleSushiPlate} 
    key={piece.id} 
    data={piece}
    />
  })

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton renderMoreSushi={renderMoreSushi} />
    </div>
  );
}

export default SushiContainer;
