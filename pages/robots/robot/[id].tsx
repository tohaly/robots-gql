import { useRouter } from 'next/router';
import { ErrorPage, Field, Loader, MainLayout } from '../../../components';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { IRobot } from '../../../interfaces/Robot';
import { ChangeEvent } from 'react';
import classes from '../../../styles/RobotPage.module.css';

const GET_ROBOT_BY_ID = gql`
  query Robot($id: uuid!) {
    robots_by_pk(id: $id) {
      id
      name
      robot_settings {
        robot_settings
      }
    }
  }
`;

const ROBOT_SETTINGS_FRAGMENT = gql`
  fragment robotName on robots {
    robot_settings {
      robot_settings
    }
  }
`;

interface IRobotByPk extends IRobot {
  robot_settings: {
    robot_settings: { [key: string]: string };
  };
}

type RobotsQueryType = {
  robots_by_pk: IRobotByPk;
};

const RobotPage = () => {
  const { query } = useRouter();
  const client = useApolloClient();
  const { data, loading, error } = useQuery<RobotsQueryType>(GET_ROBOT_BY_ID, {
    variables: { id: query.id },
  });
  const robotSettings = data?.robots_by_pk.robot_settings.robot_settings;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    const { robot_settings } = data.robots_by_pk.robot_settings;

    client.writeFragment({
      id: `robots:${query.id}`,
      fragment: ROBOT_SETTINGS_FRAGMENT,
      data: {
        robot_settings: {
          __typename: 'v_robot_settings',
          robot_settings: {
            ...robot_settings,
            [name]: value,
          },
        },
      },
    });
  };

  return (
    <MainLayout title="Robot page">
      <div className={classes.container}>
        <h1 className={classes.name}>
          Hello my name is {data.robots_by_pk.name}
        </h1>
        <p className={classes.myId}>My id: {data.robots_by_pk.id}</p>
        <h2 className={classes.settings}>Settings</h2>
        <form className={classes.form}>
          {Object.keys(robotSettings).map(key => (
            <Field
              onChange={onChange}
              key={key}
              value={robotSettings[key]}
              name={key}
            />
          ))}
        </form>
      </div>
    </MainLayout>
  );
};

export default RobotPage;
