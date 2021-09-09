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
          <thead>
            <th>#</th>
            <th>FullName</th>
            <th>Email</th>
            <th>PhoneNumber</th>
          </thead>
          {list.map((data, i) => (
            <tbody key={i}>
              <br />
              <tr>
                <td>{i + 1}</td>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
                <td>{data.phoneNumber}</td>
              </tr>
            </tbody>
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
