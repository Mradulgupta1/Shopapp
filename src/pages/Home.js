											// ॥ श्री गणेशाय नमः ॥ 

import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";



function Home(){

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData(){
        setLoading(true);
        try{
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
            // console.log("This is data")
            // console.log(data)
            // console.log("This is post")
            // console.log(posts) 
        }
        catch(error){
            console.log("Error Found");
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    },[])

    return(
        <div>
            {
                loading ? <Spinner/> :
                posts.length > 0 ? 
                (
                    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 min-h-[80vh]">
                        {
                            posts.map((post) => (
                                <Product key={post.id} post={post}/>
                            ))
                        }
                    </div>
                ) : 
                (
                    <div>No Posts Found</div>
                )
            }
        </div>
    )
}



export default Home;