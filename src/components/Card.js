import React from "react";

export default function Card(props) {
    console.log(props)

    return(
        <section>
            <main className="main">
                <img className="main--img" src="https://source.unsplash.com/WLxQvbMyfas" alt="" width=""></img>
                    <div className="main--break">
                        <div className="main--top">
                            <h5>{props.title}</h5>
                            <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606237,138.7098538,14z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634" target="_blank" rel="noreferrer"
                            >View on Google Maps</a>
                        </div>
                        <div className="main--bottom">
                            <h1>{props.location}</h1>
                            <h5>{props.startDate} - {props.EndDate}</h5>
                            <p>{props.description}</p>
                        </div>
                    </div>
            </main>
         <div className="border"></div>
        </section>
    )
}