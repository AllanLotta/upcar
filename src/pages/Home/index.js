import React from 'react';
import Lottie from 'react-lottie';
import carAnimated from '../../resources/animations/carAnimated.json';
import BlueCar from '../../assets/img/car.png';
import OrangeCar from '../../assets/img/orangeCar.png';
import yellowCar from '../../assets/img/yellowCar.png';
import greenCar from '../../assets/img/greenCar.png';

import { Container } from './styles';

export default function home() {
  return (
    <>
      <Container>
        <p className="title">Upcar</p>
        <div className="sectionSelectCar">
          <img className="carImage" src={BlueCar} alt="blue car" />
          <img className="carImage" src={yellowCar} alt="yellow car" />
          <img className="carImage" src={greenCar} alt="green car" />
          <img className="carImage" src={OrangeCar} alt="orange car" />
        </div>
        <input
          className="inputCard"
          type="text"
          placeholder="Nome"
          onChange={(e) => e.target.event}
        />

        <div className="play">Jogar</div>
        {/* <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: carAnimated,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width="50%"
          height="20%"
        /> */}
      </Container>
    </>
  );
}
