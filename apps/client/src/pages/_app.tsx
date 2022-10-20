import type { AppProps } from 'next/app';
import '../assets/tailwind.css';
import 'ui/styles.css';

const NextApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default NextApp;
