import React from "react";
import {howManyParks} from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain"

function ColoradoStateParks() {


  return (
    
    <div>
      <h1>Colorado State Parks!</h1>
      howManyParks();
      <MesaVerde />
      {trees}
      wildlife();
    </div>
    
  
  )
}
export default ColoradoStateParks;