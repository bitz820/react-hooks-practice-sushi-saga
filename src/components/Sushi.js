import React, {useState} from "react";

function Sushi({data, handleSushiPlate}) {
  const {name, img_url, price, id} = data
  const [isFull, setisFull] = useState(true)

  const eatSushi = () => {
    setisFull(!isFull)
    handleSushiPlate(price, id)

  }

  const disappearPlate = isFull ? (
    <img
      src={img_url}
      alt={name}
      width="100%"
    />
  ) : null

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {disappearPlate}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
