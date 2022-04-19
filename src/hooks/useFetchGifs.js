import { useEffect, useState } from "react";
import getGit  from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
      data: [],
      loading: true 
    });

    useEffect(()=>{

        getGit(category).then(imgs=>{//customhook
            setTimeout(() => {
                setState({
                    data:imgs,
                    loading:false
                })
            }, 3000);
        })

    },[category])
    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4,5],
    //         loading: false
    //     })
    // }, 3000);
    return state;//{data,loading}
};

export default useFetchGifs;
