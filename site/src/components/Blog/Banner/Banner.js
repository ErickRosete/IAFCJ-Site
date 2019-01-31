import React from 'react'
import "./Banner.css"

const Banner = (props) => {
    return (
        <div className="blog__banner">
            <img src={props.img} className="blog__banner-img" alt="blog-banner"></img>
            <h1 className="blog__banner-phrase">{props.phrase}</h1>
            <p className="blog__banner-author">{props.author}</p>
            <div className="blog__banner-cover" />
        </div>
    )
}

export default Banner
