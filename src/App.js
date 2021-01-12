import React from 'react'
import Carousel from './Carousel'
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'
import img5 from './assets/images/img5.jpg'

const App = () => {
    return(
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">Carousel Demo</h1>
            </header>
            <section className="section section-full">
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
                    <div className="item">
                        <img src={img4} className="img-item"/>
                    </div>
                    <div className="item">
                        <img src={img5} className="img-item"/>
                    </div>
                </Carousel>
            </section>
            <section className="section example2">
                <Carousel>
                    <div className="item">
                        <div className="block"></div>
                    </div>
                    <div className="item">
                        <div className="block"></div>
                    </div>
                    <div className="item">
                        <div className="block"></div>
                    </div>
                </Carousel>
            </section>
            
        </div>
    )
}


export default App