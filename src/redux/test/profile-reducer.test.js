import profileReducer, { addNewPostActionCreator,updateNewPostTextTitle,updateNewPostTextBody,deletePostActionCreator } from "../profile-reducer";
let state = {
    post: ['1'],
    inputPost: {
        inputTitle: '',
        inputBody: '',
    }
}
test('new post should be added', () => {
    let action = addNewPostActionCreator('ADD-NEW-POST');
    let newState = profileReducer(state,action);
    expect(newState.post.length).toBe(2);
});
test('Check as added message in inputTitle', () => {
    let action = updateNewPostTextTitle('got and added title');
    let newState = profileReducer(state,action);
    expect(newState.inputPost.inputTitle).toBe('got and added title');
});
test('Check as added message in inputBody', () => {
    let action = updateNewPostTextBody('got body');
    let newState = profileReducer(state,action);
    expect(newState.inputPost.inputBody).toBe('got body');
});
test('Check that deleted a post in post', () => {
    let action = deletePostActionCreator(123);
    let newState = profileReducer(state,action);
    expect(newState.post.length).toBe(1);

});
  

