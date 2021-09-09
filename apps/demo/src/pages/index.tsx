import React, { useEffect, useState, memo } from 'react';
import Header from '../component/layout/header';
import Main from '../component/layout/main-content';
import Footer from '../component/layout/footer';
import Chart from '../component/chart/chart';
import Navigator from '../component/navigator';
import SpinnerStyle from '../styled/spinner';
import HeaderStyle from '../styled/header';
import MainStyle from '../styled/main';
import ChartStyle from '../styled/chart';
import ScrollStyle from '../styled/scroll';
import IndicatorStyle from '../styled/indicator';
import FooterStyle from '../styled/footer';
import ScreenBreakPoints from '../styled/breakpoints';

const Index = memo(function Index() {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(true);
    }, 1000);
    return () => {
      clearTimeout();
    };
  }, [spinner]);

  return (
    <div className="wrapper">
      {!spinner ? (
        <div
          style={{
            color: '#38A2C0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#E6F1F8',
            fontWeight: 600,
            fontSize: '2em',
          }}
        >
          <SpinnerStyle>
            <div className="spinner">
              <div className="spinner-circle"></div>
            </div>
            <div className="spinner-text">
              <h1 className="loading-text">Loading</h1>
            </div>
          </SpinnerStyle>
        </div>
      ) : (
        <ScreenBreakPoints>
          {/* <div className="ie-errors" style={{ display: 'none' }}>
              Browser is not supported use Microsoft Edge instead
            </div> */}
          <HeaderStyle>
            <Header />
          </HeaderStyle>
          <MainStyle>
            <>
              <Main />
              <ChartStyle>
                <Chart />
              </ChartStyle>
            </>
          </MainStyle>

          <IndicatorStyle>
            <Navigator />
          </IndicatorStyle>
          <FooterStyle>
            <ScrollStyle>
              <Footer />
            </ScrollStyle>
          </FooterStyle>
        </ScreenBreakPoints>
      )}
    </div>
  );
});

export default Index;
