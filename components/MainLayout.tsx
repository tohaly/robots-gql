import Head from 'next/head';
import { Footer, Header } from './';
import { PropsWithChildren } from 'react';
import classes from '../styles/Page.module.css';

interface IMainLayoutProps extends PropsWithChildren<any> {
  title: string;
}

export const MainLayout = ({ children, title }: IMainLayoutProps) => {
  return (
    <>
      <Head>
        <title>Trade easy | {title}</title>
        <meta name="description" content="Trading robots here" />
      </Head>
      <div className={classes.page}>
        <Header />
        <main className={classes.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
