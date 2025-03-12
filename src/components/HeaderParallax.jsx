import React from 'react';


// import conference from '../assets/images/conference-wide.jpg';


function HeaderParallax({ imageUrl, title, subtitle  }) {
    // const imageUrl = {conference};//"/images/your-image.jpg";
    // const title = "Bringing Your Dreams To Reality Using Modern Technology";
    // const  subtitle = "Ready to begin your journey with us?";

  return (
    <div
      className="relative h-[300px] overflow-hidden" // Adjust height as needed
      style={{
        backgroundImage: `url(${imageUrl})`, // Corrected line//`url(${imageUrl})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 flex flex-col justify-center items-center p-4">
        {/* <h2 className="text-3xl font-bold mb-2 z-1000">{title}</h2>
        <p className="text-lg z-1000">{subtitle}</p> */}
      </div>

      <div className="absolute inset-0  flex flex-col justify-center items-center text-gray-200 text-center p-4">
        <h2 className="text-3xl font-bold mb-2 z-[90]">{title}</h2>
        <p className="text-lg z-1000">{subtitle}</p>
        {/* <div 
              // onClick={() => { handleSubscribeToNewsletter() }}
              style={{ borderWidth: '0px', backgroundColor: '#CBD67A', color: '#424218', width: '200px' }}
              className='mt-4 text-center  rounded-sm px-4 py-2  text-sm cursor-pointer'>
              Send Message
            </div> */}
      </div>
    </div>
  );
}

export default HeaderParallax;