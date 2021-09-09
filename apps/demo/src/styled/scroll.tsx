import styled from 'styled-components';

const ScrollStyle = styled.main`
  .footer {
    background: #015174;
    text-align: center;
  }


  //experimentation

  .scrollTop {
    position: fixed;
    right: 0%;
    top: 90%;
    bottom: 0;
    width: 50px;
    padding-bottom: 100px;

    align-items: center;
    height: 150px;
    justify-content: flex-end;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
  }

  .scrollTop:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export default ScrollStyle;
