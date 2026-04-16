import { homeContent } from '@/src/constants';

const Home = () => {
  return (
    <section className='home image' id='home'>
      <div>
        <div className='position-relative'>
          <h1>
            <span>
              <span className='animated-layer'>
                {homeContent.greeting}
                <span>.</span>
              </span>
            </span>
            <span className='position-relative'>
              <span className='animated-layer'>{homeContent.intro}</span>
              <span className='intro animated-layer'>
                {homeContent.description}
              </span>
            </span>
            <span>
              <span className='animated-layer'>{homeContent.name}</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className='animated-layer animated-btn cta' id='cta'>
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};

export default Home;
