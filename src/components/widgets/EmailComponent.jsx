import EmailIcon from '@mui/icons-material/Email';

const EmailComponent = () => {
    const handleEmailClick = () => {
      window.location.href = "mailto:info@efgold.net";
    };
  
    return (
      <div className='flex mr-8 cursor-pointer text-theme' onClick={handleEmailClick}>
        <div className='mr-2'>
          <EmailIcon style={{ width: '18px', height: '20px' }} />
        </div>
        <div className='flex flex-col' style={{ color: '#eeeeee' }}>
          <div>info@efgold.net</div>
        </div>
      </div>
    );
  };
  
  export default EmailComponent;
  