import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoginThunk} from '../redux/auth-reducer.ts';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    grid-area: headerGrid;
`;
const Logo = styled.img`
    width: 100px;
    border-radius: 50%;
`;
const Text = styled.div`
    text-shadow: 0px 0px 15px black;
    font-style: italic;
    font-weight: 600;
`;

const Header = () => {
    
    const dispatch = useDispatch();
    let store = useSelector(state => state.auth.isAuth);
    let loginUser = useSelector(state => state.auth.login);
    useEffect(() => {
        dispatch(checkLoginThunk())
    })
    return (
        <HeaderContainer>
            <BlockLogo>
                <Logo src='https://w7.pngwing.com/pngs/339/299/png-transparent-earth-globe-earth-text-globe-logo.png'></Logo>
                <Text className="header__text">myLife</Text>
            </BlockLogo>

            <div>
                <BlockLogin>{store ? <ImgIcon src="https://pngicon.ru/file/uploads/zelenaja-galochka.png"></ImgIcon> : <ImgIcon src="https://img.freepik.com/premium-vector/brush-painted-sign-no-hand-drawn-style-illustration-with-a-grunge-effect-sign-no_546559-113.jpg"></ImgIcon>}
                    <NavLink to={'/login'}>{loginUser ? loginUser : 'not login'} </NavLink>
                </BlockLogin>
            </div>
        </HeaderContainer>
    )
}
export default Header;
const ImgIcon = styled.img`
    max-width:15px;
    max-heigth:15px;
    object-fit:cover;
`;
const BlockLogin = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;
const BlockLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;