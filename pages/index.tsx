import { MainLayout } from '../components';
import classes from '../styles/Home.module.css';

export default function Home() {
  return (
    <MainLayout title="Home page">
      <h1 className={classes.title}>Welcome!</h1>
    </MainLayout>
  );
}
