import React from "react"
import './HeroSlider.scss'
import balzac from '../../Assets/Balzac-Image.jpg'
import hanska from '../../Assets/hanska-mini.webp'
import { Link } from "react-router-dom"



export const HeroSlider=()=>{
  
  return(
    <>
 <div id="parallax-container">
      <div className="parallax-one">
        <img className="photoBalzac" src={balzac} alt=""/>
        <img className="photoHanska" src={hanska} alt=""/>
    
    </div>   
 
  

    <div className="block">
      <p><span className="first-character sc">B</span>eaucoup d’événements, de personnes, relient l’Ukraine à la France (et la France à l’Ukraine) et l’amour de Balzac et de Madame Hanska en est un et l’un des plus méconnus.Notre association a été créée dans le but de perpétuer, célébrer et rendre hommage à la mémoire des amours d'Honoré de Balzac et de la Comtesse Ewelyna Hanska.Depuis notre création en 2012, nous avons déjà réalisé quelques projets, notamment la création d’un musée du souvenir à Berditchev dans le Centre Commercial «&nbsp;Galerie Balzac&nbsp;», situé juste en face de l’église ou se sont mariés Honoré de Balzac et Madame Hanska. Nous avons également apporté notre aide à la première traduction en langue ukrainienne d’une des œuvres de Balzac «&nbsp;Scènes de la vie parisienne&nbsp;» . </p>
      <p className="line-break margin-top-10"></p>
      <p className="margin-top-10">Et de nombreux projets se profilent, des expositions, d’autres traductions des œuvres de Balzac en langue ukrainienne, etc.Mais notre projet le plus important est à terme de pouvoir rénover le Château de Verhivnya qui par manque de moyens, comme malheureusement beaucoup d’endroits historiques en Ukraine, se dégrade régulièrement, et ce serait une énorme perte car un véritable petit musée y a été créé, rattaché au Musée de Jytomyr, qui enferme de vrai merveilles lié à Balzac, à la Comtesse Hanska, et à leur amour.Sur ce site, vous pourrez trouver l’histoire des voyages de Balzac pour rejoindre son aimée &nbsp;, &nbsp;si notre cause vous intéresse vous pourrez également faire une &nbsp;.&nbsp;N’hésitez pas à nous contacter, nous sommes à votre disposition.</p>
    </div>
  
  

    <div className="parallax-two">
      <h2>Projets Culturels</h2>
    </div>
  
  
   
    <div className="block">
     <p><span className="first-character ny">L</span>e 24 février 2022, la Russie a déclaré la guerre à l’Ukraine. Cette invasion a jeté sur les routes plus de 10 millions de personnes (en majorité des femmes, des enfants et des personnes âgées). Plus de sept millions de personnes ont été déplacées et sont actuellement en Ukraine complétement déracinées. Certaines personnes issues de villes détruites à plus de 90 % (Kharkiv, Marioupol, Tchernihiv, Borodianka, Severodonetsk…) s’installent dans des zones où elles pensent être en sécurité comme l’Ouest et le Sud-Ouest du pays. </p>
      <p className="line-break margin-top-10"></p>
      <p className="margin-top-10">C’est pourquoi, l’Association franco-ukrainienne « Balzac-Hanska », representé par son président Jean ROCHE et ses nombreux partenaires, se sont engagés à apporter de l’aide aux populations déplacées vers les zones dans lesquelles nous sommes présents. 
</p>
    </div>

  
 
    <div className="parallax-three">
      <Link to="/humanitary">
        <h2>Projets Humanitaires</h2>
        </Link>
      
    </div>
  
  
  
    <div className="block">
      <p><span className="first-character atw">N</span>ous ne sommes pas seuls dans cette mission . Avec nos partenaires, volontaires basés en France et volontaires ukrainiens basés à Berdytchiv nous mettont tout en oeuvre afin de faciliter le peuple ukrainien à traverser cette periode dramatique. 

</p>
      <p className="line-break margin-top-10"></p>
      <p className="margin-top-10">Nos partenaires:<br/>SETEC INGENIERIE, ASSOCIATION BALZAC HANSKA, ENSEMBLE UKRAINE, LIONS CLUB KIEV Ecology, LES FEMMES UKRAINIENNES EN FRANCE, PHARMACIENS SANS FRONTIERES, BETEN Ingéniérie, BALZAC INVESTISSEMENT, NEO-TERRA, MAIRIE DE NEUF, LIONS CLUB INTERNATIONAL PARIS SEYSSEL, MAIRIE DE BERDYTCHIV, URA (UKRAINIAN REFUGEES ASSISTANCE), RIVAGE DE FRANCE , AVENIR UKRAINE , ROTARY 60 .</p>
    </div>
 
    
  </div>
      </>
  )
}