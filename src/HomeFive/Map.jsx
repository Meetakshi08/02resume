

import React from 'react';
import Form from './Form';

function Map() {
  return (
    <div className="w-full h-[800px] bg-gray-600 flex flex-col md:flex-row justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7914134278317!2d75.754813548553!3d26.878367416690818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db54e8970edad%3A0xe0665da3602f29d6!2sInterior%20Designer%20in%20Jaipur%20%7C%20Renew%20Space!5e0!3m2!1sen!2sin!4v1741500412605!5m2!1sen!2sin"
        className="w-full md:w-3/5 h-[400px] md:h-[800px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
      <Form />
    </div>
  );
}

export default Map;
