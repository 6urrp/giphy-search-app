import "./SingleGif.css"

const SingleGif = props => {
    return (
        <div className="single-gif-container">
            <img src={props.gif.images.downsized.url} />
        </div>
    )
}

export default SingleGif;