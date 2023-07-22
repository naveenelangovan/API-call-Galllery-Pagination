import { startTransition, useEffect, useState } from "react";

function Main() {

    const [pics, setPics] = useState([]);
    const [limit, setLimit] = useState(8);
    const [start, setStart] = useState(0);

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_start='+start+'&_limit='+limit)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setPics(json)
        })
    },[start][limit])

    // let loadPics = () => {
    //     console.log("picload");
    //     setStart(start+0);
    //     setLimit(limit+8);
    // }


    // let loadPics2 = () => {
    //     setStart(start+8);
    //     setLimit(limit);
    // }

    let loadPics = () => {
        console.log("picload");
        setStart(0);
        setLimit(8);
    }

    let loadPics2 = () => {
        setStart(8);
        setLimit(limit);
    }

    let loadPics3 = () => {
        setStart(16);
        setLimit(limit);
    }

    let loadPics4 = () => {
        setStart(24);
        setLimit(limit);
    }

    let loadPics5 = () => {
        setStart(32);
        setLimit(limit);
    }

    let loadPics6 = () => {
        setStart(start + 8);
        setLimit(limit);
    }



   
    return (
        <>
        <h2 className="head">Gallery</h2>
        {pics.length === 0 ? (<p>No Photos  Available</p>) : null}

        <section className="img-container">
            {pics.length > 0 && pics.map ((picObj) => {
                return (
                    <>
                         <section key={picObj.id}>
                            <h4 className="content"> {picObj.id} - {picObj.title} </h4>
                            <img src={picObj.thumbnailUrl} title={picObj.title} alt={picObj.title} />
                         </section>
                    </>
                )
            })}
        </section>

        <section className="bt-flex">
            <button className="btn" onClick={loadPics}>1</button>
            <button className="btn" onClick={loadPics2}>2</button>
            <button className="btn" onClick={loadPics3}>3</button>
            <button className="btn" onClick={loadPics4}>4</button>
            <button className="btn" onClick={loadPics5}>5</button>
            <button className="btn" onClick={loadPics6}>Load More</button>
        </section>
        <br></br><br></br>
        </>
    )
}

export default Main