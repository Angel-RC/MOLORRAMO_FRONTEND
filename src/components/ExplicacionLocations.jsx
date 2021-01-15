

import React, { Component } from "react";
import plantilla from "../plantillas/plantilla_destinos.csv"

class ExplicacionLocations extends Component {
  render() {
    return (
<div className="site-tagline mb-4">
		Descarga la <a href={plantilla}>plantilla</a>, completela con los datos de los destinos y sube el fichero.
</div>			

				);
  }
}

export default ExplicacionLocations;