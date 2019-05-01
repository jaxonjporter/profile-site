import React, {useState, } from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

const TestBox = () => {
  const [hover, setHover] = useState(false)

  return (
    <StyledSquare
    pose={hover ? 'hovered' : 'idle'}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
  />
  )

}

const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});

const StyledSquare = styled(Square)`
  width: 100px;
  height: 100px;
  background: red;
`;

export default TestBox