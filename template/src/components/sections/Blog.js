import { blogs } from '@/src/constants';
import Link from 'next/link';

const Blog = () => {
  return (
    <section className='blog main-section flex-column-mobile' id='blog'>
      {/* TITLE */}
      <div className='custom-title'>
        <h3>
          <span>
            <span className='animated-layer fade-in-left-animation fadeInUp wow'>
              Latest Posts
            </span>
          </span>
        </h3>
      </div>

      {/* LATEST POSTS */}
      <div className='latestposts flex-column-mobile'>
        {blogs.map(post => (
          <div
            key={post.id}
            className='animated-layer fade-in-right-animation fadeInUp wow'
          >
            <Link href={post.link} target='_blank'>
              <span className='img-holder'>
                <img src={post.image} alt={post.alt} />
              </span>
              <div className='content'>
                <span className='category'>{post.category}</span>
                <span className='title'>{post.title}</span>
                <p>{post.summary}</p>
                <div className='meta d-flex align-items-center'>
                  <div className='d-flex align-items-center'>
                    <i className='fa-regular fa-calendar' />
                    <span>{post.date}</span>
                  </div>
                  <div className='d-flex align-items-center'>
                    <i className='fa-regular fa-user' />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
