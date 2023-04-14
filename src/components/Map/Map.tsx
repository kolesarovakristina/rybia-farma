import React, { FC } from 'react';

import classes from './Map.module.scss';

const Map: FC = () => (
  <div className={classes.wrapper}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.5540675483367!2d20.54005829839477!3d48.67577051010794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473faf096a62921d%3A0x55de97c60089edf9!2zUHJlZGFqIMW-aXbDvWNoIHLDvWI!5e0!3m2!1sen!2sus!4v1670761491258!5m2!1sen!2sus"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer"
      title="company-location"
      className={classes.map}
      sandbox="allow-scripts allow-same-origin"
    />
  </div>
);

export default Map;
