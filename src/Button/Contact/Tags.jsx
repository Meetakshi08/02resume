import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faPhone, faEnvelope, faPaperPlane, faLink } from "@fortawesome/free-solid-svg-icons";

function Tags() {
  return (
    <div className='pt-6 flex gap-52 justify-center'>
      
      {/* Phone Icon */}
      <div className='h-28 w-28 rounded-lg bg-gray-500 flex flex-col items-center justify-center p-2'>
        <FontAwesomeIcon icon={faPhone} size="2x" color="black" />
        <p className="text-white mt-2 text-sm">Call Us</p>
        <p className="text-white mt-2 text-sm">+9192752865</p>

      </div>

      {/* Email Icon */}
      <div className='h-28 w-28 rounded-lg bg-gray-500 flex flex-col items-center justify-center p-2'>
        <FontAwesomeIcon icon={faEnvelope} size='2x' color="black" />
        <p className="text-white mt-2 text-sm">Email</p>
        <p className="text-white mt-2 text-sm">nexa@gmail</p>

      </div>

      {/* Message Icon */}
      <div className='h-28 w-28 rounded-lg bg-gray-500 flex flex-col items-center justify-center p-2'>
        <FontAwesomeIcon icon={faPaperPlane} size='2x' color="black" />
        <p className="text-white mt-2 text-sm">Message</p>
      </div>

      {/* Website Link Icon */}
      <div className='h-28 w-28 rounded-lg bg-gray-500 flex flex-col items-center justify-center p-2'>
        <FontAwesomeIcon icon={faLink} size='2x' color="black" />
        <p className="text-white mt-2 text-sm">Website</p>
        <p className="text-white mt-2 text-sm">www.nexa.in</p>

      </div>

    </div>
  );
}

export default Tags;
