import { FC } from 'react';

import { Button } from 'antd';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';

import { useModal } from 'hooks/useModal';

import Map from 'components/Map';
import Card from 'components/Card';
import BaseLayout from 'components/Layouts/BaseLayout';

import classes from './ContactUs.module.scss';

const email = 'rybiafarmasro@gmail.com';

const contactUsContent = [
  {
    id: 1,
    icon: <BsFillTelephoneFill size={20} />,
    title: 'Telefón',
    description: <>&#40;&#43;421&#41; 917 479 522</>,
  },
  {
    id: 2,
    icon: <MdAlternateEmail size={20} />,
    title: 'Email',
    description: <a href={`mailto: ${email}`}>{email}</a>,
  },
  {
    id: 3,
    icon: <FaAddressCard size={20} />,
    title: 'Adresa',
    description: (
      <>
        <div>Hrnčiarska 1907/34</div>
        <div>048 01 Rožňava</div>
      </>
    ),
  },
];

const ContactUs: FC = () => {
  const [Modal, showModal] = useModal();

  return (
    <BaseLayout>
      <div className={classes.wrapper}>
        <Button size="middle" type="primary" onClick={() => showModal()}>
          Napíšte nám
        </Button>
      </div>
      <div className={classes.card}>
        {contactUsContent.map(({ id, icon, title, description }) => (
          <Card key={id} icon={icon} title={title} description={description} />
        ))}
      </div>
      <Map />
      <Modal />
    </BaseLayout>
  );
};

export default ContactUs;
