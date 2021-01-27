
import React, { Component } from "react";




class Container extends Component {

  render() {
    return (

		<div className = "container-fluid">
			<div className="hero-content-holder z-index-10 ">
				<h1 className="site-headline mb-3">{this.props.title}</h1>
				{this.props.content}

			</div>
		</div>
	
	

				);
  }
}

export default Container;