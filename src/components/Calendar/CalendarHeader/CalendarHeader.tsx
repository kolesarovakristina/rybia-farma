import React, { FC } from 'react';
import { Badge } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/sk';

import type { Dayjs } from 'dayjs';

import classes from './CalendarHeader.module.scss';

type TCalendarHeaderProps = {
  readonly value: Dayjs;
};

enum EBadgeStatus {
  SUCCESS = 'success',
  ERROR = 'error',
}

const badgeContent = [
  {
    id: 1,
    status: EBadgeStatus.SUCCESS,
    text: <span>Sme otvorený &#128578;</span>,
  },
  {
    id: 2,
    status: EBadgeStatus.ERROR,
    text: <span>Máme zatvorené &#128564;</span>,
  },
];

const CalendarHeader: FC<TCalendarHeaderProps> = ({ value }) => {
  const year = value.year();
  const month = dayjs(value.endOf('M')).locale('sk').format('MMMM');

  return (
    <div className={classes.header}>
      <div className={classes.header__legend}>
        <span>
          <b>Legenda:</b>
        </span>
        {badgeContent.map(({ id, status, text }) => (
          <Badge key={id} status={status} text={text} />
        ))}
      </div>

      <div className={classes.header__date}>
        <span>
          <b>Rok: </b>
          {year}
        </span>
        &#124;
        <span className={classes.header__month}>
          <b>Mesiac:</b> {month}
        </span>
      </div>
    </div>
  );
};

export default CalendarHeader;
