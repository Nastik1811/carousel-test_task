import React from 'react'
import Carousel from './Carousel'
import img1 from './assets/images/IMG_9723.jpg'
import img2 from './assets/images/IMG_9822.jpg'
import img3 from './assets/images/IMG_9928.jpg'
import img4 from './assets/images/IMG_9964.jpg'

const App = () => {
    return(
        <div className="app-container">
            <Carousel>
                <div className="item">
                    <img src={img1} className="img-item"/>
                </div>
                <div className="item">
                    <img src={img2} className="img-item"/>
                </div>
                <div className="item">
                    <img src={img3} className="img-item"/>
                </div>
            </Carousel>
        </div>
    )
}


export default App