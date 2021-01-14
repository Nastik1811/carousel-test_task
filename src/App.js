import React from 'react'
import Carousel from './Carousel'
import img1 from './assets/images/img-1.jpg'
import img2 from './assets/images/img-2.jpg'
import img3 from './assets/images/img-3.jpg'
import img4 from './assets/images/img-4.jpg'
import img5 from './assets/images/img-5.jpg'
import img6 from './assets/images/img-6.jpg'

const App = () => {
    return(
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">Carousel Demo</h1>
            </header>
            <section className="section section-full">
                <Carousel inteereval={2200} autoplay controls indicators>
                    <div className="item">
                        <img src={img1} className="img-item"/>
                    </div>
                    <div className="item">
                        <img src={img2} className="img-item"/>
                    </div>
                    <div className="item">
                        <img src={img3} className="img-item"/>
                    </div>
                    <div className="item">
                        <img src={img4} className="img-item"/>
                    </div>
                    <div className="item">
                        <img src={img5} className="img-item"/>
                    </div>
                    <div className="item">
                        <img src={img6} className="img-item"/>
                    </div>
                </Carousel>
            </section>
        </div>
    )
}


export default App