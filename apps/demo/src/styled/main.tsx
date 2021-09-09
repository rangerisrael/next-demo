import styled from 'styled-components';

const MainStyle = styled.main`
  .top-main {
    max-width: auto;
    width: 100%;

    height: auto;
    padding: 2rem 0;
    .wrapper {
      width: 100%;
      padding-bottom: 0.5rem;

      .banner {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 0 auto;

        .description {
          justify-content: center;

          .profile {
            width: auto;
            border-radius: 50%;
          }
        }

        .sub-text {
          width: auto;
          height: auto;
          display: flex;
          justify-content: center;
          margin-top: 1em;
          background: rgba(0, 0, 0, 0.1);

          .text {
            width: auto;
            height: auto;
            font-size: 1.5rem;
            padding: 1rem;
          }
        }
      }
    }
  }

  .skills {
    color: #000000;
    width: 80%;

    margin: 3em auto;

    .bottom-main,
    .projects {
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid #71c7ec;
      box-shadow: 0.1em 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2) inset;

      background: rgba(247, 254, 254, 0.2);
    }

    h2 {
      width: 100%;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 1.2em solid #015174;
    }

    .typography {
      font-size: 2em;
      font-weight: 500;
      color: #ebf0fc;

      text-align: center;
    }

    .projects {
      width: auto;
    }

    .bottom-main {
      width: 100%;
    }
    .pro-skills {
      display: flex;
      justify-content: center;
    }
  }
  #cursor {
    border-left: 0.1em solid #fdfefe;
    animation: blink 0.7s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export default MainStyle;
