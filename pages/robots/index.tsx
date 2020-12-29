import { ErrorPage, Loader, MainLayout, Robot } from '../../components';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { IRobot } from '../../interfaces/Robot';
import classNames from 'classnames/bind';
import classes from '../../styles/Robots.module.css';

let cx = classNames.bind(classes);

type DataType = {
  robots: IRobot[];
};

const GET_ROBOTS = gql`
  query Robots($limit: Int!, $offset: Int) {
    robots(limit: $limit, offset: $offset) {
      id
      code
    }
  }
`;

const Robots = () => {
  const [isAllRobots, setIsAllRobots] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const { data, loading, error, fetchMore } = useQuery<DataType>(GET_ROBOTS, {
    variables: { limit: 10 },
  });

  const loadMoreRobots = () => {
    setLoad(true);
    return fetchMore({
      variables: { offset: data.robots.length },
    })
      .then(res => {
        if (res.data.robots.length < 10) {
          setIsAllRobots(true);
        }
        return res;
      })
      .finally(() => {
        setLoad(false);
      });
  };

  if (loading) {
    return <Loader />;
  }

  if (error || !data) {
    return <ErrorPage />;
  }

  return (
    <MainLayout title="Robots">
      <div className={classes.container}>
        <h2 className={classes.title}>Robots list</h2>
        <ul className={classes.list}>
          {data.robots.map(({ code, id }) => (
            <Robot key={id} id={id} code={code} />
          ))}
        </ul>
        <button
          className={cx('button', { buttonLoading: isLoad })}
          onClick={loadMoreRobots}
          disabled={isAllRobots || isLoad}>
          get more
        </button>
      </div>
    </MainLayout>
  );
};

export default Robots;
