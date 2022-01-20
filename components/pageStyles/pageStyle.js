import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background: #000;
    color: #fff;
    z-index: -1;
`;

export const InnerContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const H2 = styled.h2`
    position: absolute;
    top: 10vh;
    color: #fff;
    text-transform: capitalize;
    font-size: clamp(1.2rem, 4vw, 2rem);
    letter-spacing: clamp(.1rem, 2vw, .3rem);
    z-index: 3;
`;

export const H1 = styled.h1`
    color: white;
    text-transform: uppercase;
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 400;
    letter-spacing: clamp(.1rem, 2vw, .7rem);
    background: rgba(0,0,0,.5);
    padding: 0 2rem;
    border-radius: .4rem;
    cursor: pointer;
    z-index: 3;
`;

export const Img = styled.img`
display: none;
    object-fit: cover;
`;