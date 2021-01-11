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
    display:flex;
    flex-direction: column;
    position:relative;
    gap: 16px;
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
    transition: ${props => props.isSwiping ? "all .1s linear" : "all .8s linear"};
`

const Control = styled.button`
    display: grid;
    position: absolute;
    top: 50%;
    left: ${props => props.direction === "left" ? "12px" : "unset"};
    right: ${props => props.direction === "right" ? "12px" : "unset"};
    opacity: 0;
    z-index:100;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    place-items: center;
    background-color: transparent;
    border: 3px solid #fff;
    transform: ${props => props.direction === "right" ? "rotate(45deg)" : "rotate(-135deg)"};
    transition: opacity .3s ease-in;
    &:focus{
        outline: none;
    }
    ${Container}:hover &{
        opacity: 0.5;

        &:hover{
            opacity: 0.7;
        }
        &:focus{
            opacity: 1;
        }
    }

   
`

const Arrow = styled.div`
    border-color: inherit;
    border-style: solid;
    border-width: 3px 3px 0 0;
    width: 40%;
    height: 40%;
`

const Indicator = styled.li`
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #333;
    opacity: ${props => props.active ? "1" : ".5"};
    &:hover{
        opacity: .7;
    }
    transition: opacity .1s ease-in;
`
const Nav = styled.ul`
    display:flex;
    grid-row: 2;
    grid-column: 2;
    margin: auto;
    gap: 30px;
    list-style: none;
`


const settings = {
    infinite: true,
    slidesOnScreen: 1,
    timeout: 10000,
    includeIndicators: true,
    includeNavArrows: true,
    autoplay: false,
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
            <Control onClick={handleBackward} direction='left'><Arrow /></Control>
            <SlideArea>
                <Track  
                    onPointerDown={handleDown} 
                    onPointerMove={handleMove} 
                    onPointerUp={handleUp}
                    onPointerCancel={handleUp}
                    activeIndex={activeIndex} 
                    isSwiping={isSwiping}
                    style={{transform: `translate3d(${-100 * activeIndex}%, 0, 0) translate3d(${offset}px, 0, 0)`}}
                    >
                    {React.Children.map(children, (slide, index) => <Slide active={activeIndex === index} key={index} order={index}>{slide}</Slide>)}
                </Track>
            </SlideArea>
            <Control onClick={handleForward}  direction='right'><Arrow/></Control>
            <Nav>
                {children.map((slide, index) => <Indicator active={activeIndex === index} key={index} onClick={() => setActiveIndex(index)}/>)}
            </Nav>
        </Container>
    )
}

export default Carousel