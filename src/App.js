import React, { Component } from 'react';

const slides = [
  {
    url:'/img/Janna.png',
    title:'Ma premiere image'
  },
  {
    url:'/img/Akali.png',
    title:'Ma deuxieme image'
  },
  {
    url:'/img/Jinx.png',
    title:'Ma troisieme image'
  },
  {
    url:'/img/Kata.png',
    title:'Ma quatrieme image'
  },{
    url:'/img/Mf.png',
    title:'Ma premiere image'
  },
  {
    url:'/img/Ahri.png',
    title:'Ma deuxieme image'
  },{
    url:'/img/Janna.png',
    title:'Ma premiere image'
  },
  {
    url:'/img/Akali.png',
    title:'Ma deuxieme image'
  },
  {
    url:'/img/Jinx.png',
    title:'Ma troisieme image'
  },
  {
    url:'/img/Kata.png',
    title:'Ma quatrieme image'
  },{
    url:'/img/Mf.png',
    title:'Ma premiere image'
  },
  {
    url:'/img/Ahri.png',
    title:'Ma deuxieme image'
  },{
    url:'/img/Janna.png',
    title:'Ma premiere image'
  },
  {
    url:'/img/Akali.png',
    title:'Ma deuxieme image'
  },
  {
    url:'/img/Jinx.png',
    title:'Ma troisieme image'
  },
  {
    url:'/img/Kata.png',
    title:'Ma quatrieme image'
  },{
    url:'/img/Mf.png',
    title:'Ma premiere image'
  },
  {
    url:'/img/Ahri.png',
    title:'Ma deuxieme image'
  },{
    url:'/img/Janna.png',
    title:'Ma premiere image'
  },
  {
    url:'/img/Akali.png',
    title:'Ma deuxieme image'
  },
  {
    url:'/img/Jinx.png',
    title:'Ma troisieme image'
  },
  {
    url:'/img/Kata.png',
    title:'Ma quatrieme image'
  },{
    url:'/img/Mf.png',
    title:'Ma premiere image'
  },
  {
    url:'/img/Ahri.png',
    title:'Ma deuxieme image'
  }

]

class App extends Component {

  state = {
    position: 0 //position de l'image
  }

  nextSlide = () => {
    if (this.state.position >= 6) {
      this.setState({position:0})
    }
    else {
      this.setState({position: ++this.state.position})
    }
  }

  prevSlide = () => {
  if (this.state.position <=0) {
    this.setState({position:6})
  }
  else {
    this.setState({position: --this.state.position})
    }
  }

  render() {

    let newMargin = this.state.position * Math.floor(Math.random() * 4)* -300; //position x largeur image
    let newMargin2 = this.state.position * Math.floor(Math.random() * 5)* -300; //position x largeur image
    let newMargin3 = this.state.position * Math.floor(Math.random() * 3)* -300; //position x largeur image
    return (


      <div className="allCont">

      <div className="App">
        <div className="container">
          <ul style={{marginLeft:newMargin}}>
            {slides.map(content =>
             <li>
              <img src={content.url}/>
            </li>
            )}
          </ul>
        </div>

        <div className="container">
          <ul style={{marginLeft:newMargin2}}>
            {slides.map(content =>
             <li>
              <img src={content.url}/>
            </li>
            )}
          </ul>
        </div>

        <div className="container">
          <ul style={{marginLeft:newMargin3}}>
            {slides.map(content =>
             <li>
              <img src={content.url}/>
            </li>
            )}
          </ul>
        </div>


          <div className="cont">
            <div className="cModal" id="modal1">
              <div className="Tab">
              </div>
            </div>

            <div className="cModal" id="modal1">
              <a href="#modal1" className="navi" ><i className="fa fa-bars" aria-hidden="true"></i></a>

              <a className="cross" href="#modal1">push</a>
              <div className="Tab2">
              </div>
            </div>
          </div>



          {/* double fonction pour eviter que la premiere ne se lance auto */}
      </div>
      <button onClick={()=>this.nextSlide()}> → </button>

  </div>
    );
  }
}

export default App;
