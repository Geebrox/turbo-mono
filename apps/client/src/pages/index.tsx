import type { NextPage } from 'next';
import { ROUTES } from 'shared';
import { Button } from 'ui';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <pre>{ROUTES.TODOS}</pre>
      <Button />
    </div>
  );
};

export default Home;
