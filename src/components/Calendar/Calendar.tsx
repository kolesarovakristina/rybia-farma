import { FC } from 'react';
import { Badge, BadgeProps, Calendar as AntdCalendar } from 'antd';
import locale from 'antd/locale/sk_SK';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import 'dayjs/locale/sk';

import type { Dayjs } from 'dayjs';

import CalendarHeader from './CalendarHeader';

enum EClosedDays {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Sunday = 'sunday',
}

dayjs.extend(isToday);
dayjs.extend(dayOfYear);

const Calendar: FC = () => {
  const setDisableDate = (previousDate: Dayjs) => {
    const currentDate = dayjs();

    if (
      dayjs(currentDate).isAfter(dayjs(previousDate)) &&
      !previousDate.isToday()
    ) {
      return true;
    }

    return false;
  };

  const getListData = (date: Dayjs) => {
    const currentDate = dayjs();
    const month = date.month();
    const day = date.dayOfYear();
    const closedDay = date.format('dddd');

    // open till 23/12/xxxx
    if (month === 11 && day <= 357) {
      return [{ type: 'success', content: '8:00-16:00' }];
    }

    if (dayjs(currentDate).isAfter(dayjs(date)) && !date.isToday()) {
      return [];
    }

    if (Object.keys(EClosedDays).some(day => day === closedDay)) {
      return [{ type: 'error', content: '' }];
    }

    return [{ type: 'success', content: '8:00-16:00' }];
  };

  const dateCellRender = (date: Dayjs) => {
    const listData = getListData(date);

    return (
      <>
        {listData?.map((item, index) => (
          <Badge
            key={index}
            status={item?.type as BadgeProps['status']}
            text={item?.content}
          />
        ))}
      </>
    );
  };

  return (
    <AntdCalendar
      disabledDate={previousDate => setDisableDate(previousDate)}
      locale={locale.DatePicker}
      dateCellRender={dateCellRender}
      headerRender={({ value }) => <CalendarHeader value={value} />}
    />
  );
};

export default Calendar;
