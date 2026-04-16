import Head from 'next/head';
import Header from '@/src/components/Header';
import ScrollBar from '@/src/components/ScrollBar';
import About from '@/src/components/sections/About';
import Blog from '@/src/components/sections/Blog';
import Clients from '@/src/components/sections/Clients';
import Contact from '@/src/components/sections/Contact';
import Copyright from '@/src/components/sections/Copyright';
import Facts from '@/src/components/sections/Facts';
import Home from '@/src/components/sections/Home';
import MyWork from '@/src/components/sections/MyWork';
import Testimonials from '@/src/components/sections/Testimonials';
import Separator from '@/src/components/Separator';
import { jqueryFuntion } from '@/src/utilits';
import { Fragment, useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  });

  return (
    <Fragment>
      <Head>
        <title>
          John Niyontwali - Senior Full-Stack Developer | React, Node.js, Python
        </title>
        <meta
          name='description'
          content='Senior Full-Stack Developer with 8+ years experience in React.js, Next.js, Node.js, Python, FastAPI, and AWS. Based in Kigali, Rwanda. Mentored 100+ developers, built applications for 10,000+ users.'
        />
        <meta
          name='keywords'
          content='John Niyontwali, Senior Full-Stack Developer, React.js, Next.js, Node.js, Python, FastAPI, JavaScript, TypeScript, AWS, GCP, Software Engineer, Kigali Rwanda, Technical Mentor, Andela, WelTel, Springboard'
        />
        <meta name='author' content='John Niyontwali' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='John Niyontwali - Senior Full-Stack Developer | React, Node.js, Python'
        />
        <meta
          property='og:description'
          content='Senior Full-Stack Developer with 8+ years experience building scalable applications across healthcare, fintech, and enterprise sectors. Advanced in React, Node.js, Python, and cloud technologies.'
        />
        <meta property='og:url' content='https://nijohn.vercel.app/' />
        <meta property='og:site_name' content='John Niyontwali Portfolio' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='John Niyontwali - Senior Full-Stack Developer'
        />
        <meta
          name='twitter:description'
          content='8+ years building scalable web applications with React, Node.js, Python. Technical mentor and team lead.'
        />

        {/* Additional SEO */}
        <meta name='geo.region' content='RW-01' />
        <meta name='geo.placename' content='Kigali, Rwanda' />
        <link rel='canonical' href='https://nijohn.vercel.app/' />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'John Niyontwali',
              'jobTitle': 'Senior Full-Stack Developer',
              'description':
                'Senior Full-Stack Developer with 8+ years of experience in JavaScript, Python, and cloud technologies',
              'url': 'https://nijohn.vercel.app/',
              'email': 'nijohn0001@gmail.com',
              'telephone': '+250786266073',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Kigali',
                'addressCountry': 'Rwanda',
              },
              'sameAs': [
                'https://github.com/niyontwali',
                'https://www.linkedin.com/in/john-niyontwali-816549111/',
              ],
              'knowsAbout': [
                'React.js',
                'Next.js',
                'Node.js',
                'Python',
                'FastAPI',
                'JavaScript',
                'TypeScript',
                'AWS',
                'Google Cloud Platform',
                'MongoDB',
                'PostgreSQL',
                'Docker',
                'Kubernetes',
              ],
            }),
          }}
        />
      </Head>

      <div className='page-content'>
        <Header />
        <div id='wrapper'>
          <main className='flex-column-mobile'>
            <Home />
            <About />
            <Separator type={'down'} />
            <Facts />
            <Separator type={'up'} />
            <MyWork />
            <Separator type={'down'} />
            <Testimonials />
            <Separator type={'up'} />
            <Contact />
            <Separator type={'down'} />
            <Clients />
            <Separator type={'up'} />
            <Blog />
            <Separator type={'down'} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};

export default Index;
