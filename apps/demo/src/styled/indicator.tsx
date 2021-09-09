import styled from 'styled-components';

const IndicatorStyle = styled.main`
  //indicator

  .navigator {
    top: 35%;

    bottom: 50%;
    left: 0;
    position: fixed;

    .navigator-item {
      width: 100%;

      display: flex;
      flex-direction: column;
      margin: 0 0.5em 0.5em;

      .navigator-content {
        display: flex;
        flex-direction: row;

        #checkOneItem,
        #checkSecondItem,
        #checkThirdItem,
        #checkFourthItem,
        #checkFifthItem {
          display: none;
        }
        .text-link {
          visibility: hidden;
        }

        .text-link {
          width: 100px;
          font-size: 1.2em;
          margin-left: 0.4em;
          color: rgba(0, 0, 0, 0.4);
          font-weight: 500;
        }

        #checkOneItem:hover + .text-link,
        #checkSecondItem:hover + .text-link,
        #checkThirdItem:hover + .text-link,
        #checkFourthItem:hover + .text-link,
        #checkFifthItem:hover + .text-link {
          visibility: visible;
        }

        .checkedOne {
          .navigator-link {
            &:hover {
              background: rgba(0, 0, 0, 0.4);
            }

            width: 20px;
            height: 20px;
            text-decoration: none;

            border-radius: 50%;
            text-decoration: none !important;

            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.5em;
            padding: 5px 0;
          }
        }
      }
    }
  }
`;

export default IndicatorStyle;
