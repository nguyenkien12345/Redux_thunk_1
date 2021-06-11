import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { loadPosts } from './actions/index'

function App(){

    const data = useSelector((state) => state.posts.data);
    const loading = useSelector((state) => state.posts.loading);
    
    console.log(data,loading);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadPosts());
    },[])

    return (
        <>
        {
          loading ? 
          <h1>LOADING</h1> :
          (data && data.length > 0) ? 
          <div>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
          </div> :
          <div>Data is empty</div>
      }
        </>
    )
}

export default App;