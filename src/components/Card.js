import React from "react";

export default function Card() {
    return(
        <main className="main">
            <img src="https://source.unsplash.com/WLxQvbMyfas" alt="" width=""></img>
                <div className="main--top">
                    <h5>Japan</h5>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606237,138.7098538,14z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634" target="_blank" rel="noreferrer"
                    >View on Google Maps</a>
                </div>
                <div className="main--bottom">
                    <h1>Mount Fuji</h1>
                    <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
                    <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    <div className="border"></div>
                </div>
        </main>
    )
}