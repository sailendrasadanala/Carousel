import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
function App() {
  return (
    <Carousel>
                
                <div className='container'>
                    <img src="assets/1.jpeg" className='image' />
                    <p className="legend" style={{width:'40%',marginLeft:'-20%'}}>Wonder 1</p>
                </div>
                <div className='container'>
                    <img src="assets/2.jpeg" />
                    <p className="legend" style={{width:'40%',marginLeft:'-20%'}}>Wonder 2</p>
                </div>
                <div className='container'>
                    <img src="assets/3.jpeg" />
                    <p className="legend" style={{width:'40%',marginLeft:'-20%'}}>Wonder 3</p>
                </div>
                <div className='container'>
                    <img src="assets/4.jpeg" />
                    <p className="legend" style={{width:'40%',marginLeft:'-20%'}}>Wonder 4</p>
                </div>
                <div className='container'>
                    <img src="assets/5.jpg" />
                    <p className="legend" style={{width:'40%',marginLeft:'-20%'}}>Wonder 5</p>
                </div>
                <div className='container'>
                    <img src="assets/6.jpeg" />
                    <p className="legend" style={{width:'40%',marginLeft:'-20%'}}>Wonder 6</p>
                </div>
                <div className='container'>
                    <img src="assets/7.jpg" />
                    <p className="legend" style={{width:'40%',marginLeft:'-20%'}}>Wonder 7</p>
                </div>
            </Carousel>
            

  );
}

export default App;
