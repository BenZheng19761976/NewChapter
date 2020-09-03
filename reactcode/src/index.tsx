import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import './index.css';
import logo7 from './assets/img/logo7.png';
import closeicon from './assets/img/closeicon.png';

const App = () => {
  const [state, setState] = useState({
    isPaneOpenLeft01: false,
    currentLeftSlideDiv: 'leftSlideDiv01',
    currentLeftSlideTitle: 'Gold Digger',
  });
 
  return (
    <div className="block_container">
  
      <SlidingPane
        closeIcon={<div>{state.currentLeftSlideTitle}</div>}
        isOpen={state.isPaneOpenLeft01}
        title=""
        from="left"
        width="400px"
        onRequestClose={ () =>  {  setState(  { isPaneOpenLeft01: false , currentLeftSlideDiv: state.currentLeftSlideDiv, currentLeftSlideTitle: state.currentLeftSlideTitle }  )   }
        }
      >
 
          <div id={state.currentLeftSlideDiv} onClick={() => setState({ isPaneOpenLeft01: false,  currentLeftSlideDiv: state.currentLeftSlideDiv, currentLeftSlideTitle: state.currentLeftSlideTitle })}>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">{state.currentLeftSlideTitle}</span>
            </div>
          </div>


      </SlidingPane>

  
          <div id="div01" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv01', currentLeftSlideTitle: 'Gold Digger' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span id="sevenTitle01" className="tabTitle">Gold Digger</span>
            </div>
          </div>

          <div id="div02" onClick={() =>   {   setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv02', currentLeftSlideTitle: 'Liar' })   } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">Liar</span>
            </div>
          </div>
 
          <div id="div03" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv03', currentLeftSlideTitle: 'Little Women: LA' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">Little Women: LA</span>
            </div>
          </div>

          <div id="div04" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv04', currentLeftSlideTitle: 'My Kitchen Rules' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">My Kitchen Rules</span>
            </div>
          </div>

          <div id="div05" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv05', currentLeftSlideTitle: 'Pooch Perfect' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">Pooch Perfect</span>
            </div>
          </div>

          <div id="div06" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv06', currentLeftSlideTitle: 'Revolution' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">Revolution</span>
            </div>
          </div>

          <div id="div07" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv07', currentLeftSlideTitle: 'Smallville' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">Smallville</span>
            </div>
          </div>

          <div id="div08" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv08', currentLeftSlideTitle: 'The Good Doctor' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">The Good Doctor</span>
            </div>
          </div>

          <div id="div09" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv09', currentLeftSlideTitle: 'The Resident' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">The Resident</span>
            </div>
          </div>

          <div id="div10" onClick={() =>  {  setState({ isPaneOpenLeft01: true,  currentLeftSlideDiv: 'leftSlideDiv10', currentLeftSlideTitle: 'Transformed' })  } }>
            <div className="divBottom">
                <span className="tabIcon"><img  src = {logo7} alt="Seven Logo"/> </span>
                <span className="tabTitle">Transformed</span>
            </div>
          </div>


    </div>
  );
};
 


render(<App />, document.getElementById("root"));
 
// export const Counter = ({ counter }) => (
//   <div>
//     <p>{counter}</p>
//   </div>
// );
 