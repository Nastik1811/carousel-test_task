import styled from 'styled-components'

export const Slide = styled.li`
  //display: ${props => props.active ? "grid" : "none"};
  position: absolute;
  top: 0;
  left:${props => `${props.order * 100}%`};
  width: 100%;
  bottom:0;

`

export const Container = styled.section`
    display:flex;
    flex-direction: column;
    position:relative;
    gap: 16px;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 600px;
`

export const SlideArea = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    margin: auto;
    background-color: lavender;
    width: 100%;
    height: 100%;
`

export const Track = styled.ul.attrs(props=> (
    {style: {transform: `translate3d(${-100 * props.activeIndex}%, 0, 0) translate3d(${props.offset}px, 0, 0)`}}))`
    list-style: none;
    height: 100%;
    transition: ${props => props.withTransition ? "transform ease .5s" : "none"};
`

export const Control = styled.button`
    display: grid;
    position: absolute;
    top: 50%;
    left: ${props => props.name === "backward" ? "12px" : "unset"};
    right: ${props => props.name === "forward" ? "12px" : "unset"};
    opacity: 0;
    z-index:100;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    place-items: center;
    background-color: transparent;
    border: 3px solid #fff;
    transform: ${props => props.name === "forward" ? "rotate(45deg)" : "rotate(-135deg)"};
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

export const Arrow = styled.div`
    border-color: inherit;
    border-style: solid;
    border-width: 3px 3px 0 0;
    width: 40%;
    height: 40%;
`

export const Indicator = styled.li`
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
export const Nav = styled.ul`
    display:flex;
    grid-row: 2;
    grid-column: 2;
    margin: auto;
    gap: 30px;
    list-style: none;
`