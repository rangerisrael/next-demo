import styled from 'styled-components';

const HeaderStyle = styled.main`
  .header {
    width: 100%;
    height: 2.5em;
    font-size: 16px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #38a2c0;

    .logo-banner {
      position: fixed;
      left: 0;
    }

    .wrapper {
      width: auto;
      height: auto;
      margin: 0 auto;
    }

    .topnav {
      display: none;
    }
    .close {
      display: none;
    }

    .logo-banner-mobile {
      display: none;
    }

    .top-nav {
      width: 100%;

      position: relative;
      right: 0;
      display: flex;
      align-items: flex-end;

      nav {
        padding-left: 1em;
        display: flex;
        flex-direction: row;
        position: absolute;

        right: 0;
        z-index: 1;

        li {
          position: relative;
          padding: 0.5em 1em 0;
          color: inherit;
          list-style: none;
          margin: 0 0.08em;

          a {
            &:before {
              border: 0.1em solid rgba(0, 0, 0, 0.4);
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: -1;
              border-left: 2.5px inset rgb(235, 240, 252, 0.4);
              border-bottom: none;

              background: #67b6ce;
              box-shadow: 0 0.13em #ebf0fc inset;

              transform: skewX(-38deg);
            }

            text-decoration: none;
            padding: 10px;

            color: #ebf0fc;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

export default HeaderStyle;
