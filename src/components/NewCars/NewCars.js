import React from 'react'
import './NewCars.style.css';
import Carousel from 'react-material-ui-carousel'
import car1 from '../assets/ncm1.png';
import car2 from '../assets/ncm2.png';
import car3 from '../assets/ncm3.png';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

export const NewCars = () => {

  const newCars = [{ title: "largest dealership", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: car1 }, { title: "unlimited repair warrenty", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: car2 }, { title: "insurence support", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: car3 }]
  const theme = useSelector((state) => state.theme.value)

  const Cars = ({ car }) => {
    return (
      <div class="car">
        <div class="car__icon">
          <img src={car.image} />
        </div>
        <div className='car__text'>
          <h2><a href="#">{car.title}</a></h2>
          <p>
            {car.pretitle}
          </p>
          <Button className='car__btn' variant="contained">Nowy </Button>
        </div>

      </div>
    )

  }
  return (
    <section style={{ background: theme }} id="cars" class="cars">
      <div class="cars__container">
        <div class="cars__title">
          <h2>get your desired car in resonable price</h2>
        </div>
        <div class="cars__content">
          <Carousel>
            {newCars.map((car, index) => (
              <Cars key={index} car={car} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
