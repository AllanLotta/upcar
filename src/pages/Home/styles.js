import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #0c1943;

  .title {
    font-size: 50px;
    color: #fafafa;
    text-shadow: #474747 3px 5px 2px, 6px 2px 6px rgba(206, 89, 55, 0);
  }

  .sectionSelectCar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    .carImage {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: #3c3c3c;
      padding: 5px;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      cursor: pointer;
    }
    .activeCar {
      border: 2px solid #8bc34a;
    }
  }

  .inputCard {
    width: 300px;
    padding: 10px;
    background-color: #fafafa;
    border: none;
    border-radius: 30px;
    font-size: 30px;
    text-align: center;
  }

  .play {
    width: 200px;
    padding: 10px;
    color: #fafafa;
    background-color: #deb124;
    border-radius: 30px;
    font-size: 30px;
    text-align: center;
    cursor: pointer;
  }
`;
