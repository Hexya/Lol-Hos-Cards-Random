import React, { Component } from 'react';

const slides = [
  {
    url:'/img/1.jpg',
    title:'Ma premiere image'
  },
  {
    url:'/img/2.jpg',
    title:'Ma deuxieme image'
  },
  {
    url:'/img/3.jpg',
    title:'Ma troisieme image'
  },
  {
    url:'/img/4.jpg',
    title:'Ma quatrieme image'
  }
]

class App extends Component {

  state = {
    position: 0 //position de l'image
  }

  nextSlide = () => {
    if (this.state.position >= 3) {
      this.setState({position:0})
    }
    else {
      this.setState({position: ++this.state.position})
    }
  }

  prevSlide = () => {
  if (this.state.position <=0) {
    this.setState({position:3})
  }
  else {
    this.setState({position: --this.state.position})
    }
  }

  render() {

    let newMargin = this.state.position * -400 //position x largeur image
    let newTitle = this.state.position + 1
    return (
      <div className="App">
        <h1>React Carousel</h1>
        <button onClick={()=>this.prevSlide()}> ← </button>

        <div className="container">
          <h2>Photo = {newTitle}</h2>
          <ul style={{marginLeft:newMargin}}>
            {slides.map(content =>
             <li>
              <img src={content.url}/>
               <p>{content.title}</p>
            </li>
            )}
          </ul>

        </div>

          <button onClick={()=>this.nextSlide()}> → </button>
          {/* double fonction pour eviter que la premiere ne se lance auto */}
      </div>
    );
  }
}

export default App;
