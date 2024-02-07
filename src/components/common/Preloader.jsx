import React from 'react';
import preloader from '../../assects/images/preloader.svg';
import styled from 'styled-components';


const Preloader = () => {
    return <CenterPreloader> <img src={preloader} alt="Preloader" /> </CenterPreloader>
}

const CenterPreloader = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-top:10px;
`;
export default Preloader;