import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Slide = styled.li`
  //display: ${props => props.active ? "grid" : "none"};
  position: absolute;
  top: 0;
  left:${props => `${props.order * 100}%`};
  width: 100%;
  bottom:0;

`

const Container = styled.section`
    display:grid;
    grid-template-columns: 40px 1fr 40px;
    grid-template-rows: 1fr auto;
    gap: 12px;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 600px;
`

const SlideArea = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    margin: auto;
    background-color: lavender;
    width: 100%;
    height: 100%;
`

const Track = styled.ul`
    list-style: none;
    height: 100%;
    transition: ${props => props.isSwiping ? "all .1s linear" : "all 1s linear"};
`

const Control = styled.button`
    border-radius: 50%;
    width: 40px;
    height: 40px;
`
const Indicator = styled.div`
    width:12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${props => props.active ? "black" : "transparent"};
`
const Nav = styled.div`
    display:flex;
    grid-row: 2;
    grid-column: 2;
    margin: auto;
    gap: 10px;
`

const settings = {
    infinite: true,
    slidesOnScreen: 1,
    timeout: 10000,

}

const Carousel = ({children, width}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [offset, setOffset] = useState(0)
    const [isSwiping, setIsSwiping] = useState(false)
    const [touchX, setTouchX] = useState(null)


    const handleForward = (e) => {
        activeIndex === children.length - 1 ?  setActiveIndex(0) : setActiveIndex(i => i + 1)
    }
    const handleBackward = (e) => {
        activeIndex ===  0 ?  setActiveIndex(children.length - 1) : setActiveIndex(i => i - 1)
    }


    const handleDown = (e) => {
        e.preventDefault();
        setIsSwiping(true)
        e.target.setPointerCapture(e.pointerId);
        setTouchX(e.pageX)
    }

    const handleMove = (e) => {
        if(!isSwiping){return;}
        setOffset(e.pageX-touchX);
    }

    const handleUp = () => {
        if(offset < -200){
            handleForward()
        }else if(offset > 200){
            handleBackward()
        }
        setIsSwiping(false)
        setOffset(0)
    }

    return(
        <Container>
            <Control onClick={handleBackward}>~</Control>
            <SlideArea>
                <Track  
                    onPointerDown={handleDown} 
                    onPointerMove={handleMove} 
                    onPointerUp={handleUp}
                    onPointerCancel={handleUp}
                    activeIndex={activeIndex} 
                    isSwiping={isSwiping}
                    style={{transform: `translateX(${-100 * activeIndex}%) translateX(${offset}px)`}}
                    >
                    {children.map((slide, index) => <Slide active={activeIndex === index} key={index} order={index}>{slide}</Slide>)}
                </Track>
            </SlideArea>
            <Control onClick={handleForward}>~</Control>
            <Nav>
                {children.map((slide, index) => <Indicator active={activeIndex === index} key={index}/>)}
            </Nav>
        </Container>
    )
}

export default Carousel