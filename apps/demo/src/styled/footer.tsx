import styled from 'styled-components';

const FooterStyle = styled.section`
  .footer {
    padding: 0.5rem 0 0.5rem 0;

    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  .social-link {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .social-list {
      width: 50px;
      height: 40px;
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

    .social-item1 {
      background: url('/social-link.svg') 0 0;
    }
    .social-item2 {
      background: url('/social-link.svg') -60px 0;
    }
    .social-item3 {
      width: 50px;
      background: url('/social-link.svg') -115px 0;
    }
    .social-item4 {
      width: 50px;
      background: url('/social-link.svg') -170px 0;
    }
  }
`;

export default FooterStyle;
