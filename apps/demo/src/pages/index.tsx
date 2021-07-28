import styled from 'styled-components';
import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { portfolioQuery } from '../queries/user.quries';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const { data: list, isLoading } = useQuery(portfolioQuery());

  return (
    <StyledPage>
      <div>
        <table>
          <br />
          <tr>
            <th>#</th>
            <th>FullName</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </tr>
          {list.map((data, i) => (
            <>
              <br />
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </StyledPage>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(portfolioQuery());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Index;
