import "./SingleGif.css"

const SingleGif = props => {
    return (
        <div className="single-gif-container">
            <img src={props.gif.images.downsized.url} alt="Gif" />
        </div>
    )
}

export default SingleGif;