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
                <Carousel interval={3000} autoplay controls indicators>
                    <div className="item item-1">
                        <div className="html-content">
                            <h1>Hello world!</h1>
                            <p>
                                This is my Carousel Component =)
                            </p>
                        </div>
                    </div>
                    <div className="item item-2">
                        <div className="html-content">
                            <h1>It supports auto play</h1>
                            <p>
                                Hover over the carousel to pause animation
                            </p>
                            <span className="note">
                                Note: animation is disabled on mobile devices
                            </span>
                        </div>
                    </div>
                    <div className="item item-4">
                        <div className="html-content">
                            <h1>It supports diffrent ways to navigate such as:</h1>
                            <ul>
                                <li>
                                    Navigation Arrows
                                </li>
                                <li>
                                    Navigation Indicators
                                </li>
                                <li>
                                    Swipes
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item item-1">
                        <div className="html-content">
                            <h1>Works for any HTML content</h1>
                            <p>Including images</p>
                        </div>
                    </div>
                    <div className="item item-3">
                        <img src={img1} className="img-item"/>
                    </div>
                    <div className="item item-4">
                        <video class="video-item" loop autoPlay muted>
                            <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="item item-5">
                        <div className="html-content">
                            <h1>And supprot infinite slide show =)</h1>
                            <p>
                                Go to the next slide!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </section>
        </div>
    )
}


export default App