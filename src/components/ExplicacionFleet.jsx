

import React, { Component } from "react";
import plantilla from "../plantillas/plantilla_fleet.csv"

class ExplicacionFleet extends Component {
  render() {
    return (
<div className="site-tagline mb-4">
		Descarga la <a href={plantilla}>plantilla</a>, completela con los datos de tus vehiculos y sube el fichero.
</div>			

				);
  }
}

export default ExplicacionFleet;