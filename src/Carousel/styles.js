import styled from 'styled-components'

export const Slide = styled.li`
`

export const Container = styled.div`
    display: grid;
    position: relative;
    row-gap: 12px;
    grid-auto-flow: row;
    place-items: center;
    touch-action: none;
`

export const SlideArea = styled.div`
    display: block;
    overflow: hidden;
    position: relative;
    margin: auto;
    width: 100%;
    touch-action: none;
`

export const Track = styled.ul.attrs(props=> (
    {
        style: {
            transform: `translateX(${-100 * (1 + props.activeIndex)}%) translateX(${props.offset}px)`,
            transition: `${props.withTransition ? "transform ease-in .5s" : "none"}`
            }
    }))`
    list-style: none;
    display: grid;
    grid-auto-columns: 100%;
    grid-template-rows: min-content;
    grid-auto-flow: column;
    touch-action: manipulation;
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
    background-color: rgba(0,0,0,0.05);
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
    border-color:  #fff;
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
    display:grid;
    grid-auto-flow:column;
    grid-auto-columns: 30px;
    align-items:center;
    margin: auto;
    list-style: none;
`