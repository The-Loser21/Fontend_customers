import React from 'react'
import './Services.style.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import SvgIcon from '@mui/material/SvgIcon';

export const Services = () => {

  const services = [{ title: "largest dealership", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: DirectionsCarIcon }, { title: "unlimited repair warrenty", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: LocalShippingIcon }, { title: "insurence support", pretitle: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia. ", image: LocalCarWashIcon }]

  const Service = ({ service }) => {
    return (
      <div class="single-service-item">
        <div class="single-service-icon">
          <SvgIcon component={service.image} />
        </div>
        <h2><a href="#">{service.title}</a></h2>
        <p>
          {service.pretitle}
        </p>
      </div>
    )

  }
  return (
    <section id="service" class="service">
      <div class="service__container">
        <div class="service__title">
          <h2>Những chiếc xe giá tốt, bạn có thể quan tâm!!!</h2>
        </div>
        <div class="service__content">
          {services.map((service) => (
            <Service service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
