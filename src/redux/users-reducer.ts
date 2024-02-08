import { ThunkAction } from "redux-thunk";
import { ResultCodesEnum, usersAPI } from "../api/api.ts";
import { photosType } from "./profile-person-reducer";
import type { AppGlobalType } from "./redux-store";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const ADD_USERS = 'ADD-USERS';
export const DELETE = 'DELETE';
export const USERS_PAGES_CURRENT = 'USERS-PAGES-CURRENT';
export const USERS_TOTAL_COUNT = 'USERS-TOTAL-COUNT';
export const TOGGLE_IS_FETCHING = 'UPDATE-IS-FETCHING';
export const TOGGLE_IS_CHECK_FOLLOWING = 'TOGGLE_IS_CHECK_FOLLOWING';

export type UsersType = {
    id: number | null,
    name: string | null,
    photos: photosType,
    status: string | null,
    followed: boolean
}
let initialState = {
    users: [] as Array<UsersType | any>,
    pageSize: 10 as number ,
    totalUsersCount: 0 as number | null,
    currentPage: 1 as number ,
    isFetching: false,
    checkFollowing: [] as Array<any>
}
export type initialStateType = typeof initialState
export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_USERS:
            return { ...state, users: action.users };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    } else {
                        return u;
                    }
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    } else {
                        return u;
                    }
                })
            };
        case DELETE:
            let deleteCurrentUser = action.userId;
            let findUser = state.users.find(u => u.id === deleteCurrentUser);
            console.log(findUser);
            return {
                ...state,
                users: state.users.filter(newUsers => newUsers !== findUser)
            };
        case USERS_PAGES_CURRENT:
            return {
                ...state,
                currentPage: action.usersPage
            };
        case USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_CHECK_FOLLOWING:
            return {
                ...state,
                checkFollowing: action.isFetchingFollowing ? [...state.checkFollowing, action.id] : [state.checkFollowing.filter((id: number | null) => id !== action.id)]
            };
        default: return state;
    }
};
type ActionsType = usersTotalCountType | usersPageCurrentType | deleteUserType | followACType | unfollowACType | addUsersType | setIsFetchingType | toggleFollowingType
type ThunkActionType = ThunkAction<Promise<void>, AppGlobalType, unknown, ActionsType>
// actions creator ->
type usersTotalCountType = {
    type: typeof USERS_TOTAL_COUNT,
    totalCount: number | null
}
export const usersTotalCount = (totalCount: number | null): usersTotalCountType => ({ type: USERS_TOTAL_COUNT, totalCount })
//----------------------

type usersPageCurrentType = {
    type: typeof USERS_PAGES_CURRENT,
    usersPage: number 
}
export const usersPageCurrent = (usersPage: number ): usersPageCurrentType => ({ type: USERS_PAGES_CURRENT, usersPage })
//----------------------
type deleteUserType = {
    type: typeof DELETE,
    userId: number | null
}
export const deleteUser = (userId: number | null): deleteUserType => ({ type: DELETE, userId })
//----------------------
type followACType = {
    type: typeof FOLLOW,
    userId: number | null
}
export const followAC = (userId: number | null): followACType => ({ type: FOLLOW, userId });
//----------------------
type unfollowACType = {
    type: typeof UNFOLLOW,
    userId: number | null
}
export const unfollowAC = (userId: number | null): unfollowACType => ({ type: UNFOLLOW, userId });
//----------------------
type addUsersType = {
    type: typeof ADD_USERS,
    users: Array<UsersType | null>
}
export const addUsers = (users: Array<UsersType | null>): addUsersType => ({ type: ADD_USERS, users });
//----------------------
type setIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): setIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching });
//----------------------
type toggleFollowingType = {
    type: typeof TOGGLE_IS_CHECK_FOLLOWING,
    isFetchingFollowing: boolean,
    id: number | null
}
export const toggleFollowing = (isFetchingFollowing: boolean, id: number | null): toggleFollowingType => ({ type: TOGGLE_IS_CHECK_FOLLOWING, isFetchingFollowing, id });
//----------------------


// thunks creator ->

export const getUsersThunkCreate = (currentPage: number, pageSize: number): ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleFollowing(true, null))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        let resultArrayUsers = data.items;
        dispatch(setIsFetching(false))
        dispatch(addUsers(resultArrayUsers))
        dispatch(usersTotalCount(data.totalCount / 100))
    }
}
export const onClickPageThunkCreate = (p: number, pageSize: number): ThunkActionType => {
    return async (dispatch) => {
        dispatch(usersPageCurrent(p))
        let data = await usersAPI.getUsers(p, pageSize)
        let resultArrayUsers = data.items;
        dispatch(setIsFetching(false))
        dispatch(addUsers(resultArrayUsers))
    }
}

export const followThunk = (userId: number): ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleFollowing(true, userId))
        let data = await usersAPI.postFollower(userId)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(followAC(userId))
        }
        dispatch(toggleFollowing(false, userId))
    }
}

export const unFollowThunk = (userId: number): ThunkActionType => {
    return async (dispatch) => {
        dispatch(toggleFollowing(true, userId))
        let data = await usersAPI.deleteFollower(userId)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(unfollowAC(userId))
        }
        dispatch(toggleFollowing(false, userId))
    }
}

export default usersReducer;

