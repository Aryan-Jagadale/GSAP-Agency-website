// This is Services component
import { gsap ,Power3} from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  position: relative;

  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }

`;

const OBJ = styled.div`
  position: absolute;
  top: 80%;
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  /* z-index: 1; */
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const revealsRef = useRef([]);
  revealsRef.current = [];

  const addToRefs = (el) => {
    if (el && !revealsRef.current.includes(el)) {
      revealsRef.current.push(el);
    }
    console.log("Reveals ref",revealsRef.current);
  };

  useEffect(() => {
    const element = ref.current;
    const line = document.getElementById("line");
    const triangle = document.getElementById("triangle");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),
        start: "top top+=180",
        end: "bottom bottom",
        pin: element,
        pinReparent: true,
        markers: false,
      },
    });

    tl.fromTo(
      document.getElementById("line"),
      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: line,
          start: "top top+=200",
          markers: false,
          scrub: true,
          end: "bottom top+=220",
        },
      }
    );

    revealsRef.current.forEach(
      (el,index) => {
        tl.from(
          el.childNodes[0],
          {
            //changes to make here
            x:-300,
            opacity:0,
            duration:2,
            ease:Power3.easeOut,
            scrollTrigger:{
              trigger:el,
              id:`section-${index+1}`,
              start:"top center+=100",
              //markers:true,
              end:"bottom bottom-=200",
              scrub:true,
              snap:true,

            }
          }
        ).to(
          el.childNodes[1],
          {
            //changes to make here
            transform:"scale(0)",
            duration:2,
            ease:Power3.easeInOut,
            scrollTrigger:{
              trigger:el.childNodes[1],
              id:`section-${index+1}`,
              start:"top center",
              //markers:true,
              end:"bottom center",
              scrub:true,
              snap:true,

            }
          }
        ).from(
          el.childNodes[2],
          {
            //changes to make here
            y:400,
            duration:2,
            ease:Power3,
            scrollTrigger:{
              trigger:el,
              id:`section-${index+1}`,
              start:"top center+=100",
              markers:true,
              end:"bottom center-=200",
              scrub:true,
              snap:true,

            }
          }
        ).to(
          el,
          {
            //changes to make here
            opacity:0,
            ease:Power3,
            scrollTrigger:{
              trigger:el,
              id:`section-${index+1}`,
              start:"top top+=200",
              markers:true,
              end:"top top+=300",
              scrub:true,
              snap:true,

            }
          }
        )
      }
    )


  }, []);

  return (
    <>
      <ServiceSection id="services">
        <Background ref={ref}>
          <Title className="title">What We Do</Title>
          <Line id="line" />
          <Triangle id="triangle" />
        </Background>

        <Content ref={addToRefs}>
          <TextBlock
            topic="Design"
            title={<h1>We build award winning Designs</h1>}
            subText={
              <h5>
                We help clients to build great design to attract more customers
              </h5>
            }
          />
          <OBJ>
            <img src={Tube} alt="Tube Object" width="400" height="400" />
          </OBJ>
          <SvgBlock svg="Design.svg" />
        </Content>

        <Content ref={addToRefs}>
          <TextBlock
            topic="Develope"
            title={<h1>We Develope high quality Web & App</h1>}
            subText={
              <h5>
                We build appropriate solution to develope your website & app
                with best tools available
              </h5>
            }
          />
          <OBJ>
            <img src={Cone} alt="Tube Object" width="400" height="400" />
          </OBJ>
          <SvgBlock svg="Develope.svg" />
        </Content>

        <Content ref={addToRefs}>
          <TextBlock
            topic="Support"
            title={<h1>We provide support for your digital presence</h1>}
            subText={
              <h5>
                Once your system is online, we will stay on hand to help you use
                it and provide technical support and maintenance <br /> your
                business
              </h5>
            }
          />
          <OBJ>
            <img src={Capsule} alt="Tube Object" width="400" height="350" />
          </OBJ>
          <SvgBlock svg="Support.svg" />
        </Content>
      </ServiceSection>
    </>
  );
};

export default Services;
