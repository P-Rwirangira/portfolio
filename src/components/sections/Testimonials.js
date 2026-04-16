import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className='testimonials-container flex-column-mobile'>
        {/* TESTIMONIAL ITEM STARTS */}
        <div className='quote-container animated-layer fade-in-right-animation fadeInUp wow'>
          <div>
            <p>
              <span className='quote'>
                "I worked with John, he was very helpful and fast to respond to
                my inquiry to help with frontend development issues and all
                related technical problems."
              </span>
              <span className='person'>JC Mugisha</span>
              <span className='job'>Bizcotap - Backend Dev</span>
            </p>
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className='quote-container animated-layer fade-in-right-animation fadeInUp wow'>
          <div>
            <p>
              <span className='quote'>
                "Working with John transformed our digital presence. He created
                solutions that improved efficiency and ensured our platform
                remained polished, professional, and aligned with our brand."
              </span>
              <span className='person'>Maggie Baingana</span>
              <span className='job'>Managing Partner - Shield Associates</span>
            </p>
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className='quote-container animated-layer fade-in-right-animation fadeInUp wow'>
          <div>
            <p>
              <span className='quote'>
                "John built a platform that streamlined how we operate. His
                skill, professionalism, and ongoing support have been invaluable
                in keeping our systems reliable and effective."
              </span>
              <span className='person'>Pacifique Ndishimye</span>
              <span className='job'>CEO - Stansile</span>
            </p>
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className='quote-container animated-layer fade-in-right-animation fadeInUp wow'>
          <div>
            <p>
              <span className='quote'>
                "John understood our vision from the start and delivered a
                website that reflects our values perfectly. His creativity,
                reliability, and technical expertise set him apart."
              </span>
              <span className='person'>Hendrik Oviir</span>
              <span className='job'>CEO - Eliit Mehed</span>
            </p>
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <Image
        alt=''
        className='z-1 hide-mobile opposite-separator'
        src='/assets/separator-opposite.png'
        width='100'
        height='100'
      />
    </section>
  );
};
export default Testimonials;
