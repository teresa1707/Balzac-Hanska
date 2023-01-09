
import { Container, Grid, Container} from "@mui/material"
import React from "react"
import { balzac } from "utils/balzac"
import './BalzacList.scss'
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import { Link } from "react-router-dom";


export const BalzacList = ()=>{
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = balzac.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(balzac.length / itemsPerPage );

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % balzac.length;
    setItemOffset(newOffset);
  };
  return(
    <>
    <div className="blockCulture">
      
    <h1>LES VOYAGES D'HONORE DE BALZAC</h1>
    
    <p className="margin-top-10"><span className="first-character sc">S</span>ans être un grand voyageur dans l’âme, Balzac n’en a pas moins sillonné la France et l’Europe tout au long de sa vie, quelques fois pour affaires, le plus souvent pour rejoindre des femmes aimées : les amies telle Zulma Carraud qu’il retrouve à Angoulême ou Issoudun, les autres amantes ou les prétendues au titre (respectivement Mme de Berny en Touraine puis en bateau sur la Loire jusque Nantes, Mme de Castries en Suisse) et surtout Mme Hanska pour laquelle il traversera plusieurs fois l’Europe dans toute son étendue, dans des conditions de voyage éprouvantes liées aux moyens de transport rudimentaires de la première moitié du 19ème siècle.</p>
          <p className="line-break margin-top-10"></p>
        </div>
   <Container className="balzacList">
   
  
   <Grid container spacing={1} >
    {currentItems.map((article)=>( <Link key={article.id}
                               
                               to={`/culture/${article.id}`}
                               style={{
                                   textDecoration: 'none',
                               }}><Grid item xs={12}   >

        <div className="cardItem" >
      
        <div className="projectPhoto"><img src={article.mainImage}  alt="mainPhoto" /></div>
        
        <div className="cardContent">
          <div className="title2">
          {article.title}
          </div>
          <div className="text2">
{article.text[0]}
          </div>
          <h5>
          {article.budget}
          </h5>
          <h5>
          
          </h5>
        </div>
     
    </div>

   </Grid></Link>))}
      

  
    </Grid>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    
    </Container> 
    </>
  )
}