import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import { Microcharts, MicrochartsBars, MicrochartsLine, MicrochartsCurve,  MicrochartsNormalBand, MicrochartsReferenceLine, MicrochartsSpots } from '../src'

function boxMullerRandom() {
  let phase = false
  let x1
  let x2
  let w
  let z

  return ((): number => {
    if (phase = !phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0
        x2 = 2.0 * Math.random() - 1.0
        w = x1 * x1 + x2 * x2
      } while (w >= 1.0)

      w = Math.sqrt((-2.0 * Math.log(w)) / w)
      return x1 * w
    }
    return x2 * w
  })()
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom)
}

const sampleData = randomData(30)
const sampleData100 = randomData(100)

const Header = () => (
  <Microcharts data={sampleData} width={300} height={50}>
    <MicrochartsLine style={{ stroke: "white", fill: "none" }} />
    <MicrochartsReferenceLine style={{ stroke: 'white', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
  </Microcharts>
)

// const Simple = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine />
//   </Microcharts>

// const SimpleCurve = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsCurve />
//   </Microcharts>

// const Customizable1 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine color="#1c8cdc" />
//   </Microcharts>

// const Customizable2 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine color="#fa7e17" />
//   </Microcharts>

// const Customizable3 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine color="#ea485c" />
//   </Microcharts>

// const Customizable4 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine color="#56b45d" />
//   </Microcharts>

// const Customizable5 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine color="#8e44af" />
//   </Microcharts>

// const Customizable6 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine color="#253e56" />
//   </Microcharts>

// const Bounds1 = () =>
//   <Microcharts data={sampleData} max={0.5}>
//     <MicrochartsLine />
//   </Microcharts>

// const Spots1 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine style={{ fill: "none" }} />
//     <MicrochartsSpots />
//   </Microcharts>

// const Spots2 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine color="#56b45d" />
//     <MicrochartsSpots style={{ fill: "#56b45d" }} />
//   </Microcharts>

// const Spots3 = () =>
//   <Microcharts data={sampleData} margin={6}>
//     <MicrochartsLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
//     <MicrochartsSpots size={4} style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
//   </Microcharts>

// const Bars1 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsBars style={{ fill: "#41c3f9" }} />
//   </Microcharts>

// const Bars2 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
//     <MicrochartsLine style={{ stroke: "#41c3f9", fill: "none" }} />
//   </Microcharts>

// const Dynamic = () => {1 extends Component {

//   constructor(props) {
//     super(props)
//     this.state = { data: [] }
//     setInterval(() =>
//       this.setState({
//         data: this.state.data.concat([boxMullerRandom()])
//       }), 100)
//   }

//   render() {
//     return (
//       <Microcharts data={this.state.data} limit={20}>
//         <MicrochartsLine color="#1c8cdc" />
//         <MicrochartsSpots />
//       </Microcharts>
//     )
//   }
// }

// const Dynamic = () => {2 extends Component {

//   constructor(props) {
//     super(props)
//     this.state = { data: [] }
//     setInterval(() =>
//       this.setState({
//         data: this.state.data.concat([boxMullerRandom()])
//       }), 100)
//   }

//   render() {
//     return (
//       <Microcharts data={this.state.data} limit={20}>
//         <MicrochartsBars style={{ fill: "#41c3f9", fillOpacity: ".25" }} />
//         <MicrochartsLine style={{ stroke: "#41c3f9", fill: "none" }} />
//       </Microcharts>
//     )
//   }
// }


// const Dynamic3 = () => {

//   constructor(props) {
//     super(props)
//     this.state = { data: [] }
//     setInterval(() =>
//       this.setState({
//         data: this.state.data.concat([boxMullerRandom()])
//       }), 100)
//   }

//   render() {
//     return (
//       <Microcharts data={this.state.data} limit={20}>
//         <MicrochartsLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }} />
//       </Microcharts>
//     )
//   }
// }


// const Dynamic = () => {4 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { data: [] }
//     setInterval(() =>
//       this.setState({
//         data: this.state.data.concat([boxMullerRandom()])
//       }), 100)
//   }

//   render() {
//     return (
//       <Microcharts data={this.state.data} limit={10} >
//         <MicrochartsBars color="#0a83d8" />
//       </Microcharts>
//     )
//   }
// }

// const ReferenceLine1 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine />
//     <MicrochartsReferenceLine type="max" />
//   </Microcharts>

// const ReferenceLine2 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine />
//     <MicrochartsReferenceLine type="min" />
//   </Microcharts>

// const ReferenceLine3 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine />
//     <MicrochartsReferenceLine type="mean" />
//   </Microcharts>

// const ReferenceLine4 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine />
//     <MicrochartsReferenceLine type="avg" />
//   </Microcharts>

// const ReferenceLine5 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine />
//     <MicrochartsReferenceLine type="median" />
//   </Microcharts>

// const ReferenceLine6 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsBars style={{ fill: 'slategray', fillOpacity: ".5" }} />
//     <MicrochartsReferenceLine />
//   </Microcharts>

// const NormalBand1 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine style={{ fill: "none" }} />
//     <MicrochartsNormalBand />
//   </Microcharts>

// const NormalBand2 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine style={{ fill: "none" }}/>
//     <MicrochartsNormalBand />
//     <MicrochartsReferenceLine type="mean" />
//   </Microcharts>

// const RealWorld1 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
//   </Microcharts>

// const RealWorld2 = () =>
//   <Microcharts data={sampleData100} svgWidth={200}>
//     <MicrochartsLine style={{ stroke: "#2991c8", fill: "none"}} />
//     <MicrochartsSpots />
//     <MicrochartsNormalBand style={{ fill: "#2991c8", fillOpacity: .1 }} />
//   </Microcharts>

// const RealWorld3 = () =>
//   <Microcharts data={sampleData100}>
//     <MicrochartsLine style={{ stroke: "black", fill: "none" }} />
//     <MicrochartsSpots style={{ fill: "orange" }} />
//   </Microcharts>

// const RealWorld4 = () =>
//   <Microcharts data={sampleData}>
//     <MicrochartsBars style={{ stroke: "white", strokeWidth: "1", fill: "#40c0f5" }} />
//   </Microcharts>

// const RealWorld5 = () =>
//   <Microcharts data={sampleData} height={80}>
//     <MicrochartsLine style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "none" }} />
//   </Microcharts>

// const RealWorld6 = () =>
//   <Microcharts data={sampleData} height={80}>
//     <MicrochartsLine style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none" }} />
//   </Microcharts>

// const RealWorld7 = () =>
//   <Microcharts data={sampleData} height={40}>
//     <MicrochartsLine style={{ stroke: "#559500", fill: "#8fc638", fillOpacity: "1" }} />
//   </Microcharts>

// const RealWorld8 = () =>
//   <Microcharts data={sampleData} style={{background: "#272727"}} margin={10} height={40}>
//     <MicrochartsLine style={{ stroke: "none", fill: "#d2673a", fillOpacity: ".5" }} />
//   </Microcharts>

// const RealWorld9 = () =>
//   <Microcharts data={sampleData} style={{background: "#00bdcc"}} margin={10} height={40}>
//     <MicrochartsLine style={{ stroke: "white", fill: "none" }} />
//     <MicrochartsReferenceLine style={{ stroke: 'white', strokeOpacity: .75, strokeDasharray: '2, 2' }} />
//   </Microcharts>

// const demos = {
//   'headerMicrocharts': Header,
//   'simple': Simple,
//   'simpleCurve': SimpleCurve,
//   'customizable1': Customizable1,
//   'customizable2': Customizable2,
//   'customizable3': Customizable3,
//   'customizable4': Customizable4,
//   'customizable5': Customizable5,
//   'customizable6': Customizable6,
//   'spots1': Spots1,
//   'spots2': Spots2,
//   'spots3': Spots3,
//   'bounds1': Bounds1,
//   'bars1': Bars1,
//   'bars2': Bars2,
//   'dynamic1': Dynamic1,
//   'dynamic2': Dynamic2,
//   'dynamic3': Dynamic3,
//   'dynamic4': Dynamic4,
//   'referenceline1': ReferenceLine1,
//   'referenceline2': ReferenceLine2,
//   'referenceline3': ReferenceLine3,
//   'referenceline4': ReferenceLine4,
//   'referenceline5': ReferenceLine5,
//   'referenceline6': ReferenceLine6,
//   'normalband1': NormalBand1,
//   'normalband2': NormalBand2,
//   'realworld1': RealWorld1,
//   'realworld2': RealWorld2,
//   'realworld3': RealWorld3,
//   'realworld4': RealWorld4,
//   'realworld5': RealWorld5,
//   'realworld6': RealWorld6,
//   'realworld7': RealWorld7,
//   'realworld8': RealWorld8,
//   'realworld9': RealWorld9
// }

// for (let d in demos) {
//   ReactDOM.render(React.createElement(demos[d]), document.getElementById(d))
// }
