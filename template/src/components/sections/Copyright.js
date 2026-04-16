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
        <span>John Niyontwali</span>
        <ul>
          <li>
            <a href='https://github.com/niyontwali' target='_blank'>
              <i className='fa-brands fa-github' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/john-niyontwali-816549111/'
              target='_blank'
            >
              <i className='fa-brands fa-linkedin' />
            </a>
          </li>
          <li>
            <a href='https://x.com/JohnNiyontwali' target='_blank'>
              <i className='fa-brands fa-twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/@TechQuest-eAcademy'
              target='_blank'
            >
              <i className='fa-brands fa-youtube' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
