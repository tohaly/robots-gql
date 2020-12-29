import { MainLayout } from '../components';
import classes from '../styles/Home.module.css';

export default function About() {
  return (
    <MainLayout title="About page">
      <h1 className={classes.title}>Welcome to about</h1>
    </MainLayout>
  );
}
