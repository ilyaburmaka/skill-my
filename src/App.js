import React from "react";
import "./App.css";
import styled from "styled-components";
const Wrapper = styled.div``;
const HeaderMenu = styled.div`
  width: 100%;
  max-width: 980px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledBurger = styled.button`
  position: absolute;
  top: 40px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MobileHeader = styled.header`
  height: 400px;
  width: 100%;
  position: relative;
  background-color: black;
  background-image: url(header.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 769px) {
    display: none;
  }
  @media (max-width: 425px) {
    height: 280px;
    background-position: center;
  }
`;

const Header = styled.header`
  height: 545px;
  width: 100%;
  position: relative;
  background-color: black;
  background-image: url(header.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Label = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 16.96px;
  line-height: 22.18px;
  color: white;
  @media (max-width: 768px) {
    color: black;
  }
`;
const Logo = styled.img`
  @media (max-width: 768px) {
    height: 110px;
  }
`;

const Image = styled.div`
  height: 450px;
  width: 100%;
  max-width: 450px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: blue;
  background-position: center center;
  background-image: url(${({ image }) => image});
  @media (max-width: 1440px) {
    height: 350px;
    max-width: 350px;
    margin-bottom: 30px;
  }
  @media (max-width: 1024px) {
    height: 250px;
    max-width: 250px;

    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    height: 400px;
    max-width: 600px;

    margin-bottom: 30px;
  }
  @media (max-width: 568px) {
    height: 300px;
  }
  @media (max-width: 379px) {
    height: 261px;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 69px;

  @media (max-width: 768px) {
    margin-top: 69px;
  }
`;

const MainText = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 120px;
  line-height: 98.56px;
  position: absolute;
  top: 223.5px;
  color: white;
  @media (max-width: 1024px) {
    top: 185px;
    font-size: 70px;
  }
  @media (max-width: 768px) {
    top: 155px;
    font-size: 50px;
  }
  @media (max-width: 568px) {
    top: 130px;
    font-size: 30px;
  }
  @media (max-width: 379px) {
    top: 120px;
    font-size: 25px;
  }
`;

const InnerWrapper = styled.div`
  padding: 96px 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding: 76px 110px;
  }
  @media (max-width: 768px) {
    padding: 60px;
  }
  @media (max-width: 425px) {
    padding: 29px;
  }
`;
const MobileWrapper = styled.div`
  width: 100%;
`;
const MainTextIn = styled.div`
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 800;
  font-size: 48px;
  letter-spacing: -1.5px;
  line-height: 98.56px;
  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

const AdditionalText = styled.div`
  text-align: center;
  letter-spacing: -1.5px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 98.56px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const AdditionalTextMob = styled.div`
  text-align: center;
  letter-spacing: -1.5px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  z-index: 999999;
  flex-direction: column;
  justify-content: center;
  background: white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 5px 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <Label>HOME</Label>
      </a>
      <a href="/" tabIndex={tabIndex}>
        <Label>ABOUT</Label>
      </a>
      <a href="/" tabIndex={tabIndex}>
        <Label>SERVICE</Label>
      </a>{" "}
      <a href="/" tabIndex={tabIndex}>
        <Label>CONTACT</Label>
      </a>
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

const App = () => {
  const [open, setOpen] = React.useState(false);
  const menuId = "main-menu";
  React.useEffect(() => {
    if (!!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <Wrapper>
      <Header>
        <HeaderMenu>
          <Label>HOME</Label>
          <Label>ABOUT</Label>
          <Logo src={"./logo.svg"} />
          <Label>SERVICE</Label>
          <Label>CONTACT</Label>
        </HeaderMenu>
        <MainText>I am Open Sans 120px</MainText>
      </Header>
      <MobileHeader>
        <MobileWrapper>
          <Logo src={"./logo.svg"} />
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </MobileWrapper>
        <MainText>I am Open Sans 120px</MainText>
      </MobileHeader>
      <InnerWrapper>
        <MainTextIn>I am open sans extra bold 48px</MainTextIn>
        <AdditionalText>
          Please follow all directions, make fonts the same size, respect
          margins and spacing.
        </AdditionalText>
        <AdditionalTextMob>I am open sans extra bold 48px</AdditionalTextMob>
        <ImageWrapper>
          <Image image={"1.jpg"} />
          <Image image={"2.jpg"} />
          <Image image={"3.jpg"} />
        </ImageWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default App;
