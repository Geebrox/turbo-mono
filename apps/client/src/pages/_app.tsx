import type { AppProps } from 'next/app';
import '../assets/tailwind.css';

const NextApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default NextApp;
