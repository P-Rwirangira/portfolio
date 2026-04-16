const Copyright = () => {
  return (
    <section className='copyright'>
      <img
        alt=''
        className='z-1 hide-mobile'
        src='assets/separator-copyright.png'
      />
      <div>
        <span>All rights reserved © {new Date().getFullYear()} </span>
        <span>Patrick Rwirangira</span>
        <ul>
          <li>
            <a href='https://github.com/p-rwirangira' target='_blank'>
              <i className='fa-brands fa-github' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/p-rwirangira-Rwirangira-816549111/'
              target='_blank'
            >
              <i className='fa-brands fa-linkedin' />
            </a>
          </li>
          <li>
            <a href='https://x.com/Rwirangira' target='_blank'>
              <i className='fa-brands fa-twitter' />
            </a>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
