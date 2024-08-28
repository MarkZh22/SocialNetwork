import { followAC, unfollowAC, addUsers, deleteUser, 
         usersPageCurrent, usersTotalCount, setIsFetching, 
         toggleFollowing, getUsersThunkCreate, 
         onClickPageThunkCreate,unFollowThunk,followThunk} from "../../redux/users-reducer";
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Users from './Users';
import Preloader from "../common/Preloader";
import { AuthNavigate } from '../../hoc/AuthNavigate';
import type { AppGlobalType } from "../../redux/redux-store";
import type { UsersType } from "../../redux/users-reducer";


const UsersContainer = () => {
    const checkLog = useSelector((state: AppGlobalType) => state.auth.isAuth);
    useEffect( ()=>{
        if(checkLog){
         dispatch( getUsersThunkCreate(currentPage, pageSize))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const store = useSelector((state: AppGlobalType) => state.usersCom);
    const pageSize = useSelector((state: AppGlobalType) => state.usersCom.pageSize);
    const totalUsersCount = useSelector((state: AppGlobalType) => state.usersCom.totalUsersCount);
    const currentPage = useSelector((state: AppGlobalType) => state.usersCom.currentPage);
    const isFetching = useSelector((state: AppGlobalType) => state.usersCom.isFetching);
    const checkFollowing = useSelector((state: AppGlobalType) => state.usersCom.checkFollowing)
    const dispatch = useDispatch<any>();
    let onClickPage = (p: number) => {
        dispatchOnClickPageThunk(p,pageSize)
    } 
    const dispatchOnClickPageThunk = (p: number, pageSize: number) => {
        dispatch(onClickPageThunkCreate(p, pageSize))
    }
    const dispatchUsersThunk = (currentPage: number, pageSize: number) => {
        dispatch(getUsersThunkCreate(currentPage, pageSize))
    }
    const dispatchFollowThunk = (id: number) => {
        dispatch(followThunk(id))
    }
    const dispatchUnFollowThunk = (id: number) => {
        dispatch(unFollowThunk(id))
    }
    const dispathFollow = (userId: number) => {
        dispatch(followAC(userId))
    }
    const dispathUnfollow = (userId: number) => {
        dispatch(unfollowAC(userId))
    }
    const dispathSetUsers = (users: Array<UsersType | null>) => {
        dispatch(addUsers(users))
    }
    const dispathDelete = (userId: number) => {
        dispatch(deleteUser(userId))
    }
    const dispathUsersPage = (usersPage: number) => {
        dispatch(usersPageCurrent(usersPage))
    }
    const dispathTotalCount = (totalCount: number) => {
        dispatch(usersTotalCount(totalCount))
    }
    const dispatchIsFetching = (isFetching: boolean) => {
        dispatch(setIsFetching(isFetching))
    }
    const dispatchToggleFollowing = (isFetching: boolean, id: number) => {
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
