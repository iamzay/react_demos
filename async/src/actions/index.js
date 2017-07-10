const SELECT_REDDIT='SELECT_REDDIT';
const FETCH_REQUEST='FETCH_REQUEST';
const RECEIVE_POSTS='RECEIVE_POSTS';

const selectReddit=reddit=>({
    reddit,
    type:SELECT_REDDIT
});

const fetchRequst=reddit=>({
    reddit,
    type:FETCH_REQUEST
});

const receivePosts=(reddit,json)=>({
    type:RECEIVE_POSTS,
    reddit,
    posts:json.data.children.map(child => child.data)
});

const getPosts=reddit=>(dispatch,getState)=>{
    dispatch(fetchRequst(reddit));
    fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(res=>res.json())
        .then(json=>dispatch(receivePosts(reddit,json)));
};

export {SELECT_REDDIT,FETCH_REQUEST,RECEIVE_POSTS};
export {selectReddit,getPosts};