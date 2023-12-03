import { NextUI } from '@/providers/NextUiProvider';
import '@/styles/globals.css';
import "../pollyfills"
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUI>
      <Component {...pageProps} />
    </NextUI>
  )
}
