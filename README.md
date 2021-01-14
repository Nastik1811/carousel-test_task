# React Carousel Component
This repo contains my implementation of Carousel Component.
Check out [Carousel Demo](http://nastik1811.github.io/carousel-test_task) to see it in action.

Main features:
- Works for mobile and desktop devices
- Works for any HTML content
- Support auto play (you can set an interval manualy)
- Support swipes  
- Support infinite slide show
- Supports scrolling to a selected slide
- Allow to show / hide indicators and arrows


Usage example
```html
    <Carousel inteereval={2200} autoplay controls indicators>
        <div className="item">
            <h1>Hello world!</h1>
        </div>
        <div className="item">
            <h1>Item 2</h1>
        </div>
        <div className="item">
            <h1>Item 3</h1>
        </div>
        <div className="item">
            <img src={img1} className="img-item"/>
        </div>
    </Carousel> 
```
