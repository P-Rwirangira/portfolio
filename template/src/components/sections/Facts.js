const Facts = () => {
  return (
    <section className='facts'>
      <div className='flex-column-mobile'>
        {/* SINGE FACT ITEM STARTS */}
        <div
          className='animated-layer fade-in-right-animation fadeInLeft wow'
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>8</h3>
              <p>
                overall years of<span>experience</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className='animated-layer fade-in-right-animation fadeInRight wow'
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>14</h3>
              <p>
                completed<span>projects</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className='animated-layer fade-in-right-animation fadeInLeft wow'
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>15</h3>
              <p>
                Happy<span>customers</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
        {/* SINGE FACT ITEM STARTS */}
        <div
          className='animated-layer fade-in-right-animation fadeInLeft wow'
          data-wow-offset={200}
        >
          <div>
            <div>
              <h3>17</h3>
              <p>
                learned<span>frameworks</span>
              </p>
            </div>
          </div>
        </div>
        {/* SINGE FACT ITEM ENDS */}
      </div>
      <img
        alt=''
        className='z-1 hide-mobile opposite-separator'
        src='assets/separator-opposite.png'
      />
    </section>
  );
};
export default Facts;
