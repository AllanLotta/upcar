import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid blue;
  z-index: 999;

  .header {
    position: absolute;
    width: 600px;
    height: 100px;
    border: 3px solid yellow;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;

    .goBack {
      padding: 5px 15px 5px 15px;
      border-radius: 30px;
      background-color: #ca6500;
      color: #fafafa;
    }

    .playerName {
      font-size: 20px;
      color: #ca6500;
      text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
        1px 1px 1px rgba(0, 0, 0, 0.5), 5px 4px 2px rgba(99, 81, 56, 0.82);
    }
  }
  .timer {
    margin-top: 200px;
  }
`;
