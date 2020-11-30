import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'react-router-dom';

export const colorPrimary = '#fa5e03';

//App
export const AppContainer = styled.div`
  position: absolute;
  top: 0;
  background-size: contain;
  width: 100%;
  height: 100%;
  background-position: center bottom;
  z-index: 0;
`;

//Chart styled components
export const ChartContainer = styled.div`
  width: 100%;
  height: 70%;
  margin: 5rem 0;
`;
export const ChartDisplay = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;
`;
export const ChartNav = styled.div`
  margin: 25px;
`;

//Chart Navigation
export const Wrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction};
  margin: 0;
`;

export const LinkTo = ({ className, children, href }) => (
  <Link className={className} to={href}>
    {children}
  </Link>
);

export const StyledLink = styled(LinkTo)`
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 25px;
  border: 0;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  text-align: center;
  background: transparent;
  width: ${(props) => props.width};
  background: #fa5e03;
  text-decoration: none;
  cursor: pointer;
  outline: none;
`;

export const Button = styled.button`
  overflow: hidden;
  height: 48px;
  width: 150px;
  border: 0;
  padding: 0 10px;
  border-radius: 25px;
  color: white;
  background: ${colorPrimary};
  transition: background 0.25s;
  margin-top: 12%;
  cursor: pointer;
  outline: none;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
`;

export const spin = keyframes`
    100% {transform:rotate(360deg);}
`;
export const Spinner = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  margin: 200px auto;
  border-radius: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: ${rgba('black', 0.1)};
  border-top-color: white;
  animation: ${spin} 1s infinite linear;
`;

//DateAndCurrency
export const Container = styled.div`
  width: 100%;
  height: 95vh;
  background-image: url(https://proweztek.com/wp-content/uploads/2018/12/blue-tech-circuit-board-technology-animated-background-video-graphic-design-hd-1920x1080_ewva7rwie__F0000.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  clip-path: polygon(100% 0, 100% 90%, 70% 100%, 0 85%, 0 0);
  background-attachment: fixed;
`;
export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
`;
export const DatePickerStyle = styled.div`
  flex-wrap: wrap;
  padding: 10px;
  background-color: white;
  border-radius: 25px;
`;
export const Label = styled.label`
  color:white;
`;
export const DateLabel = styled(Label)`
  border-right: 1px solid;
  color:black
`;
export const DropDownStyle = styled.div`
  margin: 1rem;
  width: 8rem;
`;
export const DropDownContainer = styled.div`
  display: flex;
  /* background: blue; */
  align-items: center;
  justify-content: center;
  width: 80%;
  flex-direction: row;
  margin: 3rem;
`;
export const Exchange = styled.div`
  margin-top: 3%;
  cursor: pointer;
`;

export const HeaderFixed = styled.header`
  background: transparent;
  padding: 20px;
  height: 70px;
  color: #ffffff;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;
  width: 100%;

  & a {
    color: #ffffff;
    text-decoration: none;
    font: normal 28px Cookie, Arial, Helvetica, sans-serif;
  }
`;

export const FooterElem = styled.div`
  width: 100%;
  background-image: url(https://inboundjunction.com/wp-content/uploads/2018/03/footer-bg.png);
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
`;
