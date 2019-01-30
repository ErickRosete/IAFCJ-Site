import React from 'react'
import "./Banner.css"

const Banner = (props) => {
    return (
        <div className="banner">
            <img src={props.img} className="banner__img" alt="banner"></img>
            {props.subtitle && <React.Fragment>
                <h2 className="banner__centered banner__subtitle">{props.subtitle}</h2>
                <h1 className="banner__bottom banner__title">{props.title}</h1>
            </React.Fragment>}
            {!props.subtitle && <h1 className="banner__centered banner__title">{props.title}</h1>}

            <div className="banner__cover" />
        </div>
    )
}

export default Banner
