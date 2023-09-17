import SideBar from '@/components/sidebar';
import { Inter } from 'next/font/google';
import Catalog from '@/components/catalog';
import { Provider } from 'react-redux';
import store from './../redux/store';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Provider store={store}>
      <main
        className={`flex min-h-screen flex-col items-center ${inter.className}`}
      >
        <SideBar />
        <Catalog />
      </main>
    </Provider>
  );
}
