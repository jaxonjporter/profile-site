import React, {useState, } from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

const TestBox = () => {
  // const [hover, setHover] = useState(false)

  return (
    <StyledSquare
    // pose={hover ? 'hovered' : 'idle'}
    // onMouseEnter={() => setHover(true)}
    // onMouseLeave={() => setHover(false)}
  />
  )

}

const Square = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.5,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
});

const StyledSquare = styled(Square)`
  width: 100px;
  height: 100px;
  background: white;
`;

export default TestBox