import React from 'react';
import './Home.scss'

const Home = () => {

    return(
        <div className='container'>
            <div className='containerWelcome'>
                <h3>SANDRA NAVALON</h3>
                <h6>front-end developer</h6>
            </div>
            <div className='containerMenu'>
                <div className='containerMenu__firstBox'>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                    <span>Portfolio</span>
                </div>
                <div className='containerMenu__secondBox'>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                    <span>About</span>
                </div>
                <div className='containerMenu__thirdBox'>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                    <span>Contact</span>
                </div>
            </div>
        </div>
    )
}

export default Home;