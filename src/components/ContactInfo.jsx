import React from 'react';
import RunningAnimation from './RunningAnimation';

const ContactInfo = () => {
  return (
    <div className="container my-5">
      <div className="">
        <h2 className="text-uppercase fw-bold text-primary mb-4">Contact Us</h2>
        <p className="fs-5 text-dark mb-2">
          2, Sheikh Mujib Road<br />
          Actarujjaman Shoping Mall, Agrabad, Chattogram.
        </p>
        <p className="fs-5 text-dark mb-2">
          📞 +880***********
        </p>
        <p className="fs-5 text-dark">
          📧 info-foodie@foodie.com
        </p>
      </div>
      <RunningAnimation/>
    </div>
  );
};

export default ContactInfo;
