import styled from 'styled-components'
import deathstar from '../img/death-star-silhouette.png'

export default styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  &::after {
    content: '';
    background: url(${deathstar}) no-repeat;
    background-size: contain;
    position: absolute;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`
