import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss"

export const Logo=()=>{
    return(
        <>
        <Link to="/" className="link"><div className="logo-balzac">
        	<div className="h1">balzac</div>
        		<div className="separator">
  						<div className="line"></div>
  							<div className="h3">hanska</div>
   						<div className="line"></div>
						</div>
						<div className="h4">Association Franco Ukrainienne</div>
        </div>
				</Link>
        </>
    )
}