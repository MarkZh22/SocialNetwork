import profilePersonReducer,{addMyProfileData} from "../profile-person-reducer";
let state = {
    name: null,
    adress: null,
    id: null,
}
test('added data in state', () => {
    let data = {login:'mark',email:'street 41s', id:1}
    let action = addMyProfileData({...data});
    let newState = profilePersonReducer(state,action);
    expect(newState.name).toBe('mark');
});