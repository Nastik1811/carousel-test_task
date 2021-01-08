import React, { useState } from 'react'
import styled from 'styled-components'

const Slide = styled.li`
  display: ${props => props.active ? "grid" : "none"};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
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
    margin: auto;
    background-color: lavender;
    width: 100%;
    height: 100%;
`

const Track = styled.ul`
    list-style: none;
    position: relative;
    height: 100%;
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


const Carousel = ({children, width}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [count, setCount] = useState(0)

    const handleForward = (e) => {
        activeIndex === children.length - 1 ?  setActiveIndex(0) : setActiveIndex(i => i + 1)
     }
    const handleBackward = (e) => {
        activeIndex ===  0 ?  setActiveIndex(children.length - 1) : setActiveIndex(i => i - 1)
     }

    return(
        <Container>
            <Control onClick={handleBackward}>~</Control>
            <SlideArea>
                <Track>
                    {children.map((slide, index) => <Slide draggable active={activeIndex === index} key={index}>{slide}</Slide>)}
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