import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState({})

    React.useEffect(()=>{fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(value=>setAllMemes(value.data.memes))},[]);

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevalue => { return { ...prevalue, [name]: value } })
    }

    
    function getMemeImage() {console.log(allMemes)
        const arr = allMemes;
        const random = Math.floor(Math.random() * arr.length);
        const url = arr[random].url;
        
        setMeme(prememe => ({
            ...prememe,
            randomImage: url
        }));
    }



    return (<main>
        <div className="form">
            <input
                type="text"
                placeholder="Top text"
                name="topText"
                value={meme.topText}
                onChange={handleChange} />

            <input
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange} />

            <button className="form--button"
                onClick={getMemeImage}>Generate image</button>

        </div>
        <div className="meme">
            <img src={meme.randomImage} alt="" className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>

    </main>)
}










