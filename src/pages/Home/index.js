import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Lottie from 'react-lottie';
// import carAnimated from '../../resources/animations/carAnimated.json';
import BlueCar from '../../assets/img/car.png';
import OrangeCar from '../../assets/img/orangeCar.png';
import yellowCar from '../../assets/img/yellowCar.png';
import greenCar from '../../assets/img/greenCar.png';
import { GameContext } from '../../services/GameContext';

import { Container } from './styles';

export default function Home() {
  const {
    playerCar,
    setPlayerCar,
    playerName,
    setPlayerName,
    setStartGame,
    setTurbo,
  } = useContext(GameContext);
  const CARS = [
    {
      img: BlueCar,
      id: 1,
    },
    {
      img: yellowCar,
      id: 2,
    },
    {
      img: greenCar,
      id: 3,
    },
    {
      img: OrangeCar,
      id: 4,
    },
  ];
  // const [selectedCar, setSelectedCar] = useState(1);
  useEffect(() => {
    return () => {
      setStartGame(false);
      setTurbo(false);
    };
  });

  return (
    <>
      <Container>
        <p className="title">Upcar</p>
        <div className="sectionSelectCar">
          {CARS.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setPlayerCar(item.id);
              }}
            >
              <img
                className={
                  item.id !== playerCar ? 'carImage' : 'carImage activeCar'
                }
                src={item.img}
                alt="Car"
              />
            </div>
          ))}
        </div>
        <input
          className="inputCard"
          type="text"
          maxLength={14}
          placeholder="Nome"
          onChange={(e) => setPlayerName(e.target.value)}
          value={playerName}
        />
        <Link to="/game" style={{ textDecoration: 'none' }}>
          <div className="play">Jogar</div>
        </Link>
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
