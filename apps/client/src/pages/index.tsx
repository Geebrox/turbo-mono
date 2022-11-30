import type { NextPage } from 'next';
import { ROUTES } from 'shared';
import { FilledButton } from 'ui/Button';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <pre>{ROUTES.TODOS}</pre>
      <FilledButton />
    </div>
  );
};

export default Home;
