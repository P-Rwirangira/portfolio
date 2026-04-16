import { projectsData } from '@/src/constants';
import { mySlider } from '@/src/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';

const Portfolio = () => {
  return (
    <section className='portfolio main-section flex-column-mobile' id='my-work'>
      {/* TITLE STARTS */}
      <div className='custom-title'>
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className='animated-layer fade-in-left-animation fadeInUp wow'>
              My Work
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...mySlider.portfolio}
        className='swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow'
        data-wow-offset={200}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index} className='single-item swiper-slide'>
            {/* ITEM MAIN CONTENT STARTS */}
            <div className='main-content'>
              {project.type === 'image' ? (
                <img
                  className='img-fluid'
                  src={project.src}
                  alt={project.alt}
                />
              ) : project.type === 'video' ? (
                <div className='videocontainer'>
                  <iframe
                    className='youtube-video'
                    src={project.src}
                    allowFullScreen
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    width='100%'
                    height='400px'
                    title={project.videoTitle}
                  />
                </div>
              ) : (
                <Swiper
                  {...mySlider.portfolioItems}
                  className='swiper swiper-portfolio-item'
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex} className='swiper-slide'>
                      <img src={image} title='img' />
                    </SwiperSlide>
                  ))}
                  <div className='swiper-pagination' />
                </Swiper>
              )}
            </div>
            {/* ITEM MAIN CONTENT ENDS */}
            {/* ITEM DETAILS STARTS */}
            <div className='details'>
              <h4>{project.title}</h4>
              <div>
                <ul>
                  <li>
                    <span>
                      <i className='fa-regular fa-file-lines' /> Project :
                    </span>
                    <span>{project.project}</span>
                  </li>
                  <li>
                    <span>
                      <i className='fa-regular fa-user' /> Client :
                    </span>
                    <span>{project.client}</span>
                  </li>
                  {project.duration && (
                    <li>
                      <span>
                        <i className='fa-regular fa-hourglass' /> Duration :
                      </span>
                      <span>{project.duration}</span>
                    </li>
                  )}
                  {project.frameworks && (
                    <li>
                      <span>
                        <i className='fa-solid fa-code-branch' /> Frameworks :
                      </span>
                      <span>{project.frameworks}</span>
                    </li>
                  )}
                </ul>
              </div>
              <a href={project.link} target='_blank' className='custom-btn'>
                <span>
                  preview{' '}
                  <i className='fa-solid fa-arrow-up-right-from-square' />
                </span>
              </a>
            </div>
            {/* ITEM DETAILS ENDS */}
          </SwiperSlide>
        ))}

        <div className='nav-item next-item animated-btn'>
          <span />
        </div>
        <div className='nav-item prev-item animated-btn'>
          <span />
        </div>
      </Swiper>
      <img
        alt=''
        className='separator hide-mobile'
        src='assets/separator.png'
      />
    </section>
  );
};
export default Portfolio;
