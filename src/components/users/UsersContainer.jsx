import { followAC, unfollowAC, addUsers, deleteUser, 
         usersPageCurrent, usersTotalCount, setIsFetching, 
         toggleFollowing, getUsersThunkCreate, 
         onClickPageThunkCreate,unFollowThunk,followThunk} from "../../redux/users-reducer.ts";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Users from './Users';
import Preloader from "../common/Preloader";
import { AuthNavigate } from '../../hoc/AuthNavigate';



const UsersContainer = () => {
    const checkLog = useSelector(state => state.auth.isAuth);
    useEffect( ()=>{
        if(checkLog){
         dispatch( getUsersThunkCreate(currentPage,pageSize))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const store = useSelector(state => state.usersCom);
    const pageSize = useSelector(state => state.usersCom.pageSize);
    const totalUsersCount = useSelector(state => state.usersCom.totalUsersCount);
    const currentPage = useSelector(state => state.usersCom.currentPage);
    const isFetching = useSelector(state => state.usersCom.isFetching);
    const checkFollowing = useSelector(state => state.usersCom.checkFollowing)
    const dispatch = useDispatch();
    let onClickPage = (p) => {
        dispatchOnClickPageThunk(p,pageSize)
    } 
    const dispatchOnClickPageThunk = (p, pageSize) => {
        dispatch(onClickPageThunkCreate(p, pageSize))
    }
    const dispatchUsersThunk = (currentPage, pageSize) => {
        dispatch(getUsersThunkCreate(currentPage, pageSize))
    }
    const dispatchFollowThunk = (id) => {
        dispatch(followThunk(id))
    }
    const dispatchUnFollowThunk = (id) => {
        dispatch(unFollowThunk(id))
    }
    const dispathFollow = (userId) => {
        dispatch(followAC(userId))
    }
    const dispathUnfollow = (userId) => {
        dispatch(unfollowAC(userId))
    }
    const dispathSetUsers = (users) => {
        dispatch(addUsers(users))
    }
    const dispathDelete = (userId) => {
        dispatch(deleteUser(userId))
    }
    const dispathUsersPage = (usersPage) => {
        dispatch(usersPageCurrent(usersPage))
    }
    const dispathTotalCount = (totalCount) => {
        dispatch(usersTotalCount(totalCount))
    }
    const dispatchIsFetching = (isFetching) => {
        dispatch(setIsFetching(isFetching))
    }
    const dispatchToggleFollowing = (isFetching, id) => {
        dispatch(toggleFollowing(isFetching, id))
    }
    let AuthNavigateComponent = AuthNavigate(Users)
    return  <> 
                 {isFetching ? <Preloader /> : <AuthNavigateComponent
                 totalUsersCount={totalUsersCount}
                 pageSize={pageSize}
                 isFetching={isFetching}
                 toggleIsFetching={dispatchIsFetching}
                 currentPageUsers={dispathUsersPage}
                 setUsers={dispathSetUsers}
                 store={store}
                 addFollow={dispathFollow}
                 addUnfollow={dispathUnfollow}
                 currentDelete={dispathDelete}
                 setTotalCount={dispathTotalCount}
                 onClickPage={onClickPage}
                 currentPage={currentPage}
                 checkFollowing={checkFollowing}
                 disToggleFollowing={dispatchToggleFollowing}
                 followThunk={dispatchFollowThunk}
                 unFollowThunk={dispatchUnFollowThunk}
                 getUsersThunkCreate={dispatchUsersThunk}
                 onClickPageThunk={dispatchOnClickPageThunk}

             />}
    </>
}
    

export default UsersContainer;
