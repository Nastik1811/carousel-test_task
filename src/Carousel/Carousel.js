import React, { useEffect, useRef, useState } from 'react'
import { Container, Slide, SlideArea, Track, Nav, Indicator, Control, Arrow } from './styles'

const settings = {
    infinite: true,
    slidesOnScreen: 1,
    timeout: 10000,
    includeIndicators: true,
    includeNavArrows: true,
    autoplay: false,
}

const Carousel = ({children, ...settings}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [offset, setOffset] = useState(0)
    const [isSwiping, setIsSwiping] = useState(false)
    const [touchX, setTouchX] = useState(null)
    const [edgeRiched, seetEdgeRiched] = useState(false)
    const [transitionActive, setTrasitionActive] = useState(false)

    const handleNavigation = (index) => {
        if(!transitionActive) {
            setTrasitionActive(true)
            setActiveIndex(index)
        }
    }

    const handleDown = (e) => {
        e.preventDefault()
        setIsSwiping(true)
        setTouchX(e.pageX)
    }

    const handleMove = (e) => {
        if(!isSwiping){return;}
        setOffset(e.pageX-touchX);
    }

    const handleUp = () => {
        setIsSwiping(false)
        //200??
        if(offset < -200){
            handleNavigation(i => i + 1)
        }else if(offset > 200){
            handleNavigation(i => i - 1)
        }
        setOffset(0)
    }
   
    const checkIndex = (e) => {
        setTrasitionActive(false)
        console.log(e)
        if(activeIndex === children.length){
            setActiveIndex(0)
        }else if(activeIndex === -1){
            setActiveIndex(children.length - 1)
        }
    }

    return(
        <Container>
            <Control onClick={() => handleNavigation(i => i - 1)} name='backward'><Arrow /></Control>
            <SlideArea>
                <Track  
                    onPointerDown={handleDown} 
                    onPointerMove={handleMove} 
                    onPointerUp={handleUp}
                    onPointerCancel={handleUp}
                    activeIndex={activeIndex} 
                    withTransition={!isSwiping}
                    onTransitionEnd={checkIndex}
                    offset={offset}
                    >
                        <Slide order={-1}>{children[React.Children.count(children) - 1]}</Slide>
                        {
                        React.Children.map(children, (slide, index) => 
                            <Slide 
                                active={activeIndex === index} 
                                key={index} 
                                order={index}>{slide}
                            </Slide>)
                        }
                        <Slide order={React.Children.count(children)}>{children[0]}</Slide>
                </Track>
            </SlideArea>
            <Control onClick={() => handleNavigation(i => i + 1)} name='forward'><Arrow/></Control>
            <Nav>
                {children.map((slide, index) => <Indicator active={activeIndex === index} key={index} onClick={() => handleNavigation(index)}/>)}
            </Nav>
        </Container>
    )
}

export default Carousel