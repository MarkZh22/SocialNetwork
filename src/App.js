import { lazy } from 'react';
import { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/NavLink';
import styled from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import Preloader from './components/common/Preloader';
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const LoginContainer = lazy(() => import('./components/Login/loginContainer'))
const MessageContainer = lazy(() => import('./components/Message/MessageContainer'))
const UsersContainer = lazy(() => import('./components/users/UsersContainer'))
const Home = lazy(() => import('./components/Home/Home'))

const AppGlobal = styled.div`
  padding: 20px;
  max-width: 1140px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 1fr 5fr;
  gap: 20px;
  grid-template-areas:
  'headerGrid headerGrid'
  'navGrid contentGrid';
`;
const StyleGridContent = styled.div`
  grid-area: contentGrid;
  padding:10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;
const App = () => {

  return (
    <AppGlobal>
      <Header />
      <Nav />
      <StyleGridContent>
        <Routes>
        <Route path='/' element={ <Navigate to={'/login'} /> } />
          <Route path='/home/*' element={
            <Suspense fallback={<Preloader />}>
              <Home />
            </Suspense>
          } />
          <Route path='/message/*' element={
            <Suspense fallback={<Preloader />}>
              <MessageContainer />
            </Suspense>
          } />
          <Route path='/profile/:userId?' element={
            <Suspense fallback={<Preloader />}>
              <ProfileContainer />
            </Suspense>
          } />
          <Route path='/users/*' element={
            <Suspense fallback={<Preloader />}>
              <UsersContainer />
            </Suspense>
          } />
          <Route path='/login/*' element={
            <Suspense fallback={<Preloader />}>
              <LoginContainer />
            </Suspense>
          } />
          {/* <Route path='*' element={<>404</>} /> */}
        </Routes>
      </StyleGridContent>
    </AppGlobal>
  );
}
export default App;
