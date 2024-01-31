// import { usersAPI } from "../api/api";
// export const FOLLOW = 'FOLLOW';
// export const UNFOLLOW = 'UNFOLLOW';
// export const ADD_USERS = 'ADD-USERS';
// export const DELETE = 'DELETE';
// export const USERS_PAGES_CURRENT = 'USERS-PAGES-CURRENT';
// export const USERS_TOTAL_COUNT = 'USERS-TOTAL-COUNT';
// export const TOGGLE_IS_FETCHING = 'UPDATE-IS-FETCHING';
// export const TOGGLE_IS_CHECK_FOLLOWING = 'TOGGLE_IS_CHECK_FOLLOWING';
// export let initialState = {
//     users: [],
//     pageSize: 10,
//     totalUsersCount: 0,
//     currentPage: 1,
//     isFetching: false,
//     checkFollowing: []
// }
// export const usersReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_USERS:
//             return { ...state, users: action.users };
//         case FOLLOW:
//             return {
//                 ...state,
//                 users: state.users.map(u => {
//                     if (u.id === action.userId) {
//                         return { ...u, followed: true };
//                     } else {
//                         return u;
//                     }
//                 })
//             };
//         case UNFOLLOW:
//             return {
//                 ...state,
//                 users: state.users.map(u => {
//                     if (u.id === action.userId) {
//                         return { ...u, followed: false };
//                     } else {
//                         return u;
//                     }
//                 })
//             };
//         case DELETE:
//             let deleteCurrentUser = action.userId;
//             let findUser = state.users.find(u => u.id === deleteCurrentUser);
//             console.log(findUser);
//             return {
//                 ...state,
//                 users: state.users.filter(newUsers => newUsers !== findUser)
//             };
//         case USERS_PAGES_CURRENT:
//             return {
//                 ...state,
//                 currentPage: action.usersPage
//             };
//         case USERS_TOTAL_COUNT:
//             return {
//                 ...state,
//                 totalUsersCount: action.totalCount
//             };
//         case TOGGLE_IS_FETCHING:
//             return {
//                 ...state,
//                 isFetching: action.isFetching
//             };
//         case TOGGLE_IS_CHECK_FOLLOWING:
//             return {
//                 ...state,
//                 checkFollowing: action.isFetchingFollowing
//                     ? [...state.checkFollowing, action.id]
//                     : [state.checkFollowing.filter(id => id !== action.id)]
//             };
//         default: return state;
//     }
// };

// // actions creator ->

// export const usersTotalCount = (totalCount) => ({ type: USERS_TOTAL_COUNT, totalCount })
// export const usersPageCurrent = (usersPage) => ({ type: USERS_PAGES_CURRENT, usersPage })
// export const deleteUser = (userId) => ({ type: DELETE, userId })
// export const followAC = (userId) => ({ type: FOLLOW, userId });
// export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
// export const addUsers = (users) => ({ type: ADD_USERS, users });
// export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
// export const toggleFollowing = (isFetchingFollowing, id) => ({ type: TOGGLE_IS_CHECK_FOLLOWING, isFetchingFollowing, id });

// // thunks creator ->

// export const getUsersThunkCreate = (currentPage, pageSize) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowing(true))
//         let data = await usersAPI.getUsers(currentPage, pageSize)
//             let resultArrayUsers = data.items;
//             dispatch(setIsFetching(false))
//             dispatch(addUsers(resultArrayUsers))
//             dispatch(usersTotalCount(data.totalCount / 100))
//         }
//     }
// export const onClickPageThunkCreate = (p, pageSize) => {
//     return async (dispatch) => {
//         dispatch(usersPageCurrent(p))
//         let data = await usersAPI.getUsers(p, pageSize)
//             let resultArrayUsers = data.items;
//             dispatch(setIsFetching(false))
//             dispatch(addUsers(resultArrayUsers))
//         }
//     }

// export const followThunk = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowing(true, userId))
//         let data = await usersAPI.postFollower(userId)
//             if (data.resultCode === 0) {
//                 dispatch(followAC(userId))
//             }
//             dispatch(toggleFollowing(false, userId))
//         }
//     }

// export const unFollowThunk = (userId) => {
//     return async (dispatch) => {
//         dispatch(toggleFollowing(true, userId))
//         let data = await usersAPI.deleteFollower(userId)
//             if (data.resultCode === 0) {
//                 dispatch(unfollowAC(userId))
//             }
//             dispatch(toggleFollowing(false, userId))
//         }
//     }

// export default usersReducer;

