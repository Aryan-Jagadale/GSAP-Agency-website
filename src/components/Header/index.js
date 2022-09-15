// This is Header component /Navigation Component
import { gsap ,Power3} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
`;


const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;


const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;

  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.3s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;

const HamburgerBtn = styled.button`
  
display: none;
@media only Screen and (max-width: 48em) {
  display: inline-block;
}
position: relative;
background-color: transparent;
width: 2rem;
height: 2px;
margin-top: 0rem;
transition: all 0.3s;
cursor: pointer;
&::before,
&::after {
  content: "";
  background-color: var(--white);
  width: 2rem;
  height: 2px;
  display: inline-block;
  position: absolute;
  left: 0;
  cursor: pointer;
  transition: all 0.3s;
}
&::before {
  top: -0.5rem;
  transform: rotate(0);
}
&::after {
  top: 0.5rem;
  transform: rotate(0);
}

`;

const Header = () => {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    const element = ref.current;
    gsap.to(element,{
      position:"fixed",
      top:"1rem",
      left: "3rem",
      right:"3rem",
      padding:"1.5rem 2rem",
      borderRadius:"50px",
      border:"3px solid var(--white)",
      duration:1,
      ease:Power3.easeOut,
      scrollTrigger:{
        trigger:element,
        start:"bottom+=300 top",
        end:"+=250",
        scrub:true,

        markers:false
      }
    })

  },[])


  return (
    <>
      <Headers ref={ref}>
        <Logo>
          <img src={logo} alt="CodeBucks" />
          <h3>CodeBucks</h3>
        </Logo>
        <Nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">
            <Button>Contact Us</Button>
          </a>
        </Nav>

      </Headers>


    </>
  );
};

export default Header;
