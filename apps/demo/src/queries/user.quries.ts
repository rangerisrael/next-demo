import { QueryKeys } from './keys/query-keys';

export const portfolioQuery = () => ({
  queryKey: [QueryKeys.PORTFOLIO],
  queryFn: () => httpTest(),
});

export const httpTest = async () => {
  const res = await fetch(
    'https://guarded-fjord-80039.herokuapp.com/api/subscriber/list'
  );
  const httpServer = await res.json();

  if (!httpServer) {
    return {
      notFound: true,
    };
  }

  return httpServer;
};
