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

const Carousel = ({children}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [offset, setOffset] = useState(0)
    const [isSwiping, setIsSwiping] = useState(false)
    const [touchX, setTouchX] = useState(null)
    const [transitionActive, setTrasitionActive] = useState(false)
    const areaRef = useRef()

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
        const k = (offset / areaRef.current.offsetWidth)
        if(k < - 0.15){
            handleNavigation(i => i + 1)
        }else if(k > 0.15){
            handleNavigation(i => i - 1)
        }else if(offset !== 0){
            setTrasitionActive(true)
        }
        setOffset(0)
    }
   
    const handleTransitionEnd = (e) => {
        setTrasitionActive(false)
        if(activeIndex === children.length){
            setActiveIndex(0)
        }else if(activeIndex === -1){
            setActiveIndex(children.length - 1)
        }
    }
    return(
        <Container>
            <Control direction="backward" onClick={() => handleNavigation(i => i - 1)} >
                <Arrow/>
            </Control>
            <SlideArea ref={areaRef}>
                <Track  
                    onPointerDown={handleDown} 
                    onPointerMove={handleMove} 
                    onPointerUp={handleUp}
                    onPointerCancel={handleUp}
                    onPointerLeave={handleUp}
                    activeIndex={activeIndex} 
                    offset={offset}
                    withTransition={transitionActive}
                    onTransitionEnd={handleTransitionEnd}
                    >
                        <Slide order={-1} aria-hidden={true}>{children[React.Children.count(children) - 1]}</Slide>
                        {
                            React.Children.map(children, (slide, index) => 
                            <Slide 
                                key={index} 
                                order={index}
                                aria-hidden={activeIndex !== index}
                                >{slide}
                            </Slide>)
                        }
                        <Slide order={React.Children.count(children)} aria-hidden={true}>{children[0]}</Slide>
                </Track>
            </SlideArea>
            <Control direction="forward" onClick={() => handleNavigation(i => i + 1)}>
                <Arrow/>
            </Control>
            <Nav>
                {children.map((slide, index) => <Indicator active={activeIndex === index} key={index} onClick={() => handleNavigation(index)}/>)}
            </Nav>
        </Container>
    )
}

export default Carousel