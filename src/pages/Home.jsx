import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import Swap from '../images/swap_image.svg'
import {BsArrowRightSquareFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Nav />
      <Image>
      <img src={Swap} alt="swap_image"
      height={500}
      width={500}
      />
      </Image>
      <Eclipse></Eclipse>
      <Wrapper>
        Welcome to the wrapping portal!
     </Wrapper>
    
      <Paragraph>Wrap and unwrap your AVN between the Polygon Network and Avian Network.</Paragraph>
      
      <button class="btn">WRAP/ UNWRAP <BsArrowRightSquareFill /></button>
     <button class="btn1">BUY AVIAN</button>
<Eclipse2></Eclipse2>
    </div>
  )
}
const Wrapper = styled.div`
font-family: konnectMedium;
font-weight: medium;
font-size: 98px;
color: #2B737F;
text-align: left;
  `;
const Paragraph = styled.p`
  font-family: konnectLight;
  font-size: 38px;
  font-weight: light;
  text-align: left;
  justify-content: center;
  color: #2B737F;
  line-height: 48px;
  `;
const Image = styled.div`
float: right;
`;

const Eclipse = styled.div`
position: absolute;
width: auto;
min-width: 800px;
height: auto;
min-height: 650px;
left: 58px;
top: 80px;
border-radius: 50%;
background: rgba(52, 226, 213, 0.8);

opacity: 0.45;
filter: blur(158.5px);
`;
const Eclipse2 = styled.div`
position: absolute;
width: 300px;
height: 300px;
left: 1150.13px;
top: 450.54px;

border-radius: 300px 0 0 0;;
background: rgba(52, 226, 213, 0.6);

opacity: 0.45;
filter: blur(158.5px);

`;