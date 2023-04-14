import { FC } from 'react';

import Calendar from 'components/Calendar';
import BaseLayout from 'components/Layouts/BaseLayout';

import classes from './OpeningHours.module.scss';

const OpeningHours: FC = () => (
  <BaseLayout>
    <div className={classes.title}>Otváracie hodiny</div>
    <Calendar />
  </BaseLayout>
);

export default OpeningHours;
