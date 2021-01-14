import React from 'react'
import Carousel from './Carousel'
import img1 from './assets/images/img-1.jpg'

const App = () => {
    return(
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">Carousel Demo</h1>
            </header>
            <section className="section">
                <Carousel inteereval={2200} autoplay controls indicators>
                    <div className="item">
                        <div className="html-content">
                            <h1>Hello world!</h1>
                            <p>
                                Let's me introduce my Carousel Component:)
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="html-content">
                            <h1>Works for any HTML content</h1>
                            <p>Including images</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={img1} className="img-item"/>
                    </div>
                    <div className="item">
                        <div className="html-content">
                            <h1>Hello world!</h1>
                            <p>
                                And support infinite loop. Go next!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </section>
        </div>
    )
}


export default App