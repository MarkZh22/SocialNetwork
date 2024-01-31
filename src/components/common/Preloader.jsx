import preloader from  '../../assects/images/preloader.svg';
import styled from 'styled-components';
const Preloader = (props) => {
 return <CenterPreloader> <img src={preloader} alt=""/> </CenterPreloader>
}
const CenterPreloader = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-top:10px;
`;
export default Preloader;