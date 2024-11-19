import React from 'react'
import './Hero.style.css';
import { SearchCar } from '../SearchCar/SearchCar';
import { Header } from '../Header/Header';
import { useSelector } from 'react-redux'

export const Hero = () => {
    const theme = useSelector((state) => state.theme.value)
    console.log(theme)
    return (
        <>
            <Header />
            <section id="hero" class="hero">
                <div class="hero__container">
                    <div class="hero__txt">
                        <h2 style={{ color: theme }}>get your desired car in resonable price</h2>
                        <p style={{ color: theme }}>
                            Welcom to HAUI-Car.
                        </p>
                        {/* <button style={{ background: theme }} class="hero__btn" onclick="window.location.href='#'">Contact us</button> */}
                    </div>
                </div>
                <SearchCar />
            </section>
        </>
    )
}
