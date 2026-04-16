import { aboutData } from '@/src/constants';

const About = () => {
  const { personalInfo, skills, experience } = aboutData;

  // Helper function to render skills in pairs
  const renderSkillsPairs = () => {
    const pairs = [];
    for (let i = 0; i < skills.length; i += 2) {
      pairs.push(
        <div key={i}>
          <div className='animated-layer fade-in-down-animation fadeInLeft wow'>
            <span>
              <i className={skills[i].icon} />
            </span>
            <h4>{skills[i].name}</h4>
          </div>
          {skills[i + 1] && (
            <div className='animated-layer fade-in-up-animation fadeInRight wow'>
              <span>
                <i className={skills[i + 1].icon} />
              </span>
              <h4>{skills[i + 1].name}</h4>
            </div>
          )}
        </div>
      );
    }
    return pairs;
  };

  return (
    <section className='about main-section flex-column-mobile' id='about'>
      {/* INFO HOLDER STARTS */}
      <div className='info flex-column-mobile'>
        {/* IMAGE STARTS */}
        <div
          className='img-container animated-layer image-animation my-photo-container fadeInUp wow'
          data-wow-offset={200}
          id='my-photo'
        >
          <div>
            <div>
              <img className='my-photo' src={personalInfo.image} alt='' />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}

        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                {personalInfo.name.first}
              </span>
            </span>
            <span>
              <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                {personalInfo.name.last}
              </span>
            </span>
          </h2>
          <div className='infos'>
            <ul>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Nationality :</span>
                    <span>{personalInfo.nationality}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Open to Work :</span>
                    <span>{personalInfo.openToWork}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Languages :</span>
                    <span>{personalInfo.languages}</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Phone :</span>
                    <span>{personalInfo.phone}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>Email :</span>
                    <span>{personalInfo.email}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className='animated-layer fade-in-up-animation fadeInUp wow'>
                    <span>github and linkedin:</span>
                    <a
                      href={personalInfo.social.github.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {personalInfo.social.github.username}
                    </a>{' '}
                    and{' '}
                    <a
                      href={personalInfo.social.linkedin.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {personalInfo.social.linkedin.username}
                    </a>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}

      {/* SKILLS STARTS */}
      <div className='skills flex-column-mobile'>
        <div className='custom-title'>
          <h3>
            <span>
              <span className='animated-layer fade-in-left-animation fadeInUp wow'>
                My Skills
              </span>
            </span>
          </h3>
        </div>
        <div className='skills-content'>{renderSkillsPairs()}</div>
      </div>
      {/* SKILLS ENDS */}

      {/* RESUME STARTS */}
      <div className='resume flex-column-mobile'>
        <div className='custom-title fadeInUp wow'>
          <h3>
            <span>
              <span className='animated-layer fade-in-left-animation'>
                Experiences
              </span>
            </span>
          </h3>
        </div>

        {/* TIMELINE STARTS */}
        <div className='timeline'>
          <ol className='animated-layer fade-in-animation'>
            {experience.map((item, index) => (
              <li key={index}>
                <div
                  className={`animated-layer ${
                    index % 2 === 0
                      ? 'fade-in-down-animation'
                      : 'fade-in-up-animation'
                  } fadeInUp wow`}
                >
                  <div className={item.type}>
                    <h4>{item.title}</h4>
                    <p>
                      <i className='fa-regular fa-clock' />
                      <span>{item.period}</span>
                    </p>
                    <p>
                      <i className='fa-regular fa-building' />
                      <span>{item.company}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}

      <img
        alt=''
        className='separator hide-mobile'
        src='assets/separator.png'
      />
    </section>
  );
};

export default About;
