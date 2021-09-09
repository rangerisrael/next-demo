import styled from 'styled-components';

const SpinnerStyle = styled.main`
  .spinner-text {
    position: absolute;

    width: 150px;
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loading-text {
      color: rgba(0, 0, 0, 0.6);
      position: relative;
      font-size: 0.75em;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
    }
  }
  .spinner {
    position: relative;
    width: 150px;
    height: 150px;
    border-top: 2px solid transparent;
    border-left: 2px solid #015174;
    border-right: 2px solid #38a2c0;
    border-bottom: 2px solid transparent;
    border-radius: 50%;
    animation: spin 3s infinite;

    &:before,
    &:after {
      content: '';
      width: 120px;
      height: 120px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }

    &:before {
      border-bottom: 2px solid transparent;
      border-right: 2px solid #38a2c0;
      border-top: 2px solid transparent;
      border-left: 2px solid #015174;
    }

    &:after {
      border-bottom: 2px solid #015174;
      border-right: 2px solid transparent;
      border-top: 2px solid #38a2c0;
      border-left: 2px solid transparent;
      width: 100px;
      height: 100px;
    }

    @-webkit-keyframes spin {
      from {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
      }
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
        -ms-transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
      }
    }
  }

  .spinner-circle {
    width: 75px;
    height: 75px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-bottom: 2px solid #015174;
    border-right: 2px solid transparent;
    border-top: 2px solid #38a2c0;
    border-left: 2px solid transparent;
    border-radius: 50%;

    &:before,
    &:after {
      content: '';

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }

    &:before {
      width: 90px;
      height: 90px;
      border-bottom: 2px solid transparent;
      border-right: 2px solid #38a2c0;
      border-top: 2px solid transparent;
      border-left: 2px solid #015174;
    }

    &:after {
      width: 50px;
      height: 50px;
      border-bottom: 2px solid #38a2c0;
      border-right: 2px solid #38a2c0;
      border-top: 2px solid #015174;
      border-left: 2px solid #015174;
    }
  }
`;

export default SpinnerStyle;
