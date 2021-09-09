import React from 'react';

import styled from 'styled-components';

// const sizes = {
//   xs: '320px',
//   small: '640px',
//   tablet: '768px',
//   desktop: '980px',
//   lgDesktop: '1200px',
// };

// const device = {
//   xs: `(max-width:${sizes.xs})`,
//   small: `(max-width:${sizes.small})`,
//   ipad: `(max-width:${sizes.tablet})`,
//   tablet: `(min-width:${sizes.tablet})`,
//   desktop: `(min-width:${sizes.desktop})`,
//   lgDesktop: `(min-width:${sizes.lgDesktop})`,
// };

const maxSizes = {
  mobile: '653px',
  tablet: '984px',
};

const minSizes = {
  mobile: '0px',
  tablet: '654px',
  desktop: '769px',
};

const maxWidth = {
  mobile: `(max-width:${maxSizes.mobile})`,
  tablet: `(max-width:${maxSizes.tablet})`,
};

const minWidth = {
  mobile: `(min-width:${minSizes.mobile})`,
  tablet: `(min-width:${minSizes.tablet})`,
  desktop: `(min-width:${minSizes.desktop})`,
};
//adaptive layout
const ScreenBreakPoints = styled.div`
  @media screen and ${minWidth.mobile} and ${maxWidth.mobile} {
    .header {
      .logo {
        position: fixed;
        z-index: 999;
        left: 0;
      }

      .topnav {
        display: block;
      }
      .close {
        display: block;
      }

      .logo-banner-mobile {
        display: block;
      }

      .top-nav {
        position: relative;

        nav {
          display: block;
        }
      }

      .navigation,
      #checkbox {
        display: none;
      }

      #topnav,
      #checkbox {
        position: absolute;
        right: 0;
      }

      #checkbox:checked ~ .navigation {
        top: 0;
        left: 0;
        z-index: 999;
        transition: all 0.3s ease;
      }

      .navigation {
        display: inline;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -999;
        top: 100%;
        background: rgba(0, 0, 0, 0.95);
        transition: all 0.3s ease;
      }

      .responsive {
        width: 70%;
        margin: 0 auto;

        position: absolute;
        left: 0;
        top: 30%;

        padding-bottom: 2rem;
        .navigation-items {
          &:hover {
            background: rgba(0, 0, 0, 0.4);
          }
          a {
            &:hover {
              background: rgba(0, 0, 0, 0.4);
            }
          }

          margin-top: 2rem;
          padding: 1rem 0.5rem;
          text-align: center;
        }
      }
    }

    //indicator
    .navigator {
      display: none;
    }

    //chart
    .bar {
      width: 95% !important;
      margin: 1.5rem auto;
    }

    //maii-content

    .top-main{
        max-width: 100%;
    }
    .skills {
      position: relative;
      z-index: -999;
      width: 100%;
      margin: 2rem auto;

      .bottom-main {
        display: flex;
        justify-content: center;

        .pro-skills {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .profile {
          width: 100%;
          transform: scale(1.3);
          background-position: contain;
        }
      }
    }

    .top-main {
      width: 100%;

      margin: 0 auto;

      .wrapper {
        width: 100%;
        padding-bottom: 2rem;

        .sub-text {
          width:auto;
          height: 12vh;

          .text{
            h1{
              font-size:1rem;
            }
          }

        }

      }
    }

    //chart
    .bar {
      width: 95% !important;
    }

    //footer
    .footer {
      padding: 0.5rem 0 0.5rem 0;

      h1 {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 1rem;
      }

        h4{
          font-size:0.8rem;
        }

      .social-link {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .social-list {
      width: 50px;
      height: 30px;
      margin: 1%;
      padding: 1% !important;
      background-size: cover !important;
      background-repeat: no-repeat !important;
      cursor: pointer;
      order: 0;
      transition: all 1s;
      position: relative;
      &:hover {
        background-color: #e6f1f8 !important;
        border-radius: 50% !important;
        position: relative;
        top: -5px;
        transition: all 0.5s;
      }
    }

    }

    .social-item1 {
      background: url('/social-link.svg') 10px 0;
    }
    .social-item2 {
      background: url('/social-link.svg') -36px 0;
    }
    .social-item3 {
      width: 50px;
      background: url('/social-link.svg') -80px 0;
    }
    .social-item4 {
      width: 50px;
      background: url('/social-link.svg') -125px 0;
    }
  }

  @media screen and ${minWidth.tablet} and ${maxWidth.tablet} {

    wrapper {
      width: 100%;



    }






    .skills {
      width: 100%;
      margin: 0 auto;
      .bottom-main{

        display: flex;
        justify-content: center;


      }
      .pro-skills ,{
        width: 80%;
        display: flex;
        justify-content: center;
      }
    }



    //chart
    .bar {
      width: 80% !important;
      margin: 1.5rem auto;
    }
  }
`;

export default ScreenBreakPoints;
