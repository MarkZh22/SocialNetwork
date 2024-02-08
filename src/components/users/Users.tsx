import styled from "styled-components";
//@ts-ignore
import userAvatar from '../../assects/images/user.png';
import { NavLink } from "react-router-dom";
import { UsersType, initialStateType } from "../../redux/users-reducer";
import React from "react";
type PropsType = {
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean)=>void
    currentPageUsers: (usersPage: number) => void
    setUsers: (users: Array<UsersType | null>) => void
    store: initialStateType
    addFollow:  (userId: number) => void
    addUnfollow: (userId: number) => void
    currentDelete:  (userId: number) => void
    setTotalCount:  (totalCount: number) => void
    onClickPage: (p: number | null) => void
    currentPage: number | null
    checkFollowing: any[]
    disToggleFollowing:(isFetching: boolean, id: number) => void
    followThunk: (id: number) => void
    unFollowThunk:  (id: number) => void
    getUsersThunkCreate: (currentPage: number | null, pageSize: number | null) => void
    onClickPageThunk:  (p: number | null, pageSize: number | null) => void
}
let Users: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div >
        {props.store.users.map(u  =>
        <Wrapper key={u.id}>
            <UserInfo  >
                <div><Span>Name:</Span> {u.name }</div>
                <div><Span>Id:</Span> {u.id}</div>
                <Follower><Span>Followed:</Span> {u.followed ? <ImgIcon src="https://pngicon.ru/file/uploads/zelenaja-galochka.png"></ImgIcon> : <ImgIcon src="https://img.freepik.com/premium-vector/brush-painted-sign-no-hand-drawn-style-illustration-with-a-grunge-effect-sign-no_546559-113.jpg"></ImgIcon>}</Follower>
                <div>
                    {u.followed
                        ? <Button disabled={props.checkFollowing.some(id=>id === u.id)} onClick={() => { 
                            props.unFollowThunk(u.id)
                            // props.addUnfollow(u.id) 
                        }}>Unfollow</Button>
                        : <Button  disabled={props.checkFollowing.some(id=>id === u.id)} onClick={() => { 
                            props.followThunk(u.id)
                         }}>follow</Button>}
                </div>
                <WrapperBtnRow>
                    <Button onClick={ () => { props.currentDelete(u.id) }}>delete</Button>
                </WrapperBtnRow>
            </UserInfo>
            <NavLink to={`/profile/${u.id}`}><Img src={u.photos.large||userAvatar}></Img></NavLink>
        </Wrapper>
        )
        
        }

    <DivPage>{pages.map((p) => {
        if (props.currentPage === p) {
            return <SpanBold >{p}</SpanBold>
        } else {
            return <SpanCursor onClick={() => { props.onClickPage(p) }}>{p}</SpanCursor>
        }
    })}
    </DivPage>
</div>
}
        
    
export default Users;
const Wrapper = styled.div`
    border:1px solid black;
    padding:10px;
    margin-bottom:5px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Img = styled.img`
    max-width:80px;
    max-heigth:80px;
    object-fit:cover;
`;
const ImgIcon = styled.img`
    max-width:15px;
    max-heigth:15px;
    object-fit:cover;
`;
const Follower = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;
const UserInfo = styled.div`
    display:flex;
    flex-direction: column;
    gap:10px;
`;
const Span = styled.span`
    color:#ff3c00;
    font-weight:900;
`;
const Button = styled.button`
    padding:5px 10px;
    border:1px solid black;
    border-radius:5px;
    font-size:10px;
    color:black;
    width: 100px;
    cursor:pointer;
    text-transform:uppercase;

`;
const WrapperBtnRow = styled.div`
    display:flex;
    flex-direction: row;
    gap:10px;
`;
const SpanBold = styled.span`
    font-weight: 900;
    font-size: 16px;
    cursor:pointer;
    padding:2px;
`;
const SpanCursor = styled.span`
    padding:2px;
    cursor:pointer;
`;
const DivPage = styled.div`
    display:flex;
    flex-direction:row;
    gap:5px;
    align-items: center;
`;