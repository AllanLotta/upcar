import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 500px;
  z-index: 999;

  .header {
    position: absolute;
    width: 600px;
    height: 100px;
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
      font-weight: bold;
      text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
        1px 1px 1px rgba(0, 0, 0, 0.5), 5px 4px 2px rgba(99, 81, 56, 0.82);
    }
  }
  .timer {
    position: absolute;
    margin-top: 250px;
    margin-left: 200px;
  }
  .leftSection {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 30px 10px;
    margin-top: 100px;
    height: 300px;
    width: 200px;
    .item {
      font-size: 20px;
      color: #ca6500;
      margin-bottom: 20px;
      font-weight: bold;
      text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
        1px 1px 1px rgba(0, 0, 0, 0.5), 5px 4px 2px rgba(99, 81, 56, 0.82);
    }
  }
  .rightSection {
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 30px 10px;
    margin-top: 100px;
    margin-left: 400px;
    height: 300px;
    width: 200px;
    text-align: center;
    .item {
      font-size: 20px;
      color: #ca6500;
      font-weight: bold;
      margin-bottom: 20px;
      text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
        1px 1px 1px rgba(0, 0, 0, 0.5), 5px 4px 2px rgba(99, 81, 56, 0.82);
    }
  }
`;
