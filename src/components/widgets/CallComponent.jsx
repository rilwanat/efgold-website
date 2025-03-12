import CallIcon from '@mui/icons-material/Call';

const CallComponent = () => {
    const handleCallClick = () => {
      window.location.href = "tel:+2348091113333";
    };
  
    return (
      <div className='flex mr-8 cursor-pointer text-theme' onClick={handleCallClick}>
        <div className='mr-2'>
          <CallIcon style={{ width: '18px', height: '20px' }} />
        </div>
        <div className='flex flex-col' style={{ color: '#eeeeee' }}>
          <div className="whitespace-nowrap">+234 809 111 3333</div>
        </div>
      </div>
    );
  };
  
  export default CallComponent;
  