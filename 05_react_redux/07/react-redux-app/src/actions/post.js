import axios from "axios";

export const fetchPosts = () => async function fetchPostsThunk(dispatch, getState) {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response);
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
    }
