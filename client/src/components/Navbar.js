import React from "react";
import '../styles/components/Navbar.css'
const Main = () => {

    // const onClickHandler = e => {
    //     const alert = document.getElementById("alert-navbar")
    //     alert.remove()
    // }


    return(
        <div>
            <div className='navbar'>
                <img src='https://i.imgur.com/E2lce3U.png' />
                <div className="links">
                    <a href="/" >Home</a>
                    <a href="https://n-leonnardo.github.io/leonnardo.io/" target="blank">About Leo</a>
                </div>
            </div>
            <div>
                {/* <div className="alert-navbar" id="alert-navbar" onClick={onClickHandler}>
                    <p>
                        This is a website that you can scan a barcode and add it to our database. Please, dont mess it up or you will be banned.
                    </p>

                    <p>
                        x
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Main