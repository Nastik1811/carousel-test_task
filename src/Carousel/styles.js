import styled from 'styled-components'

export const Slide = styled.li`
  position: absolute;
  top: 0;
  left:${props => `${props.order * 100}%`};
  width: 100%;
  bottom:0;
`

export const Container = styled.div.attrs(props => ({style: {height: props.height ? `${props.height}px` : '600px'}}))`
    display:flex;
    flex-direction: column;
    position:relative;
    gap: 12px;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const SlideArea = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
`

export const Track = styled.ul.attrs(props=> (
    {
        style: {
            transform: `translateX(${-100 * props.activeIndex}%) translateX(${props.offset}px)`,
            transition: `${props.withTransition ? "transform ease-out .8s" : "none"}`
            }
    }))`
    list-style: none;
    height: 100%;
`

export const Control = styled.button`
    display: grid;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: ${props => props.direction === "backward" ? "0" : "unset"};
    right: ${props => props.direction === "forward" ? "0" : "unset"};
    opacity: 0;
    z-index:100;
    width: 10%;
    height: 100%;
    place-items: center;
    background-color: transparent;
    border: none;
    transform: ${props => props.direction === "backward" ? "rotate(180deg)" : "unset"};
    transition: opacity .1s ease-in;
    &:focus{
        outline: none;
    }
    ${Container}:hover &{
        opacity: 0.5;

        &:hover{
            opacity: 0.8;
        }
        &:focus{
            opacity: 1;
        }
    }
`

export const Arrow = styled.div`
    border-color:  #000;
    border-style: solid;
    border-width: 3px 3px 0 0;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
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