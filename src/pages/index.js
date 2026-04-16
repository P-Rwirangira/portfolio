import Head from 'next/head';
import Header from '../components/Header';
import ScrollBar from '../components/ScrollBar';
import About from '../components/sections/About';
import Blog from '../components/sections/Blog';
import Clients from '../components/sections/Clients';
import Contact from '../components/sections/Contact';
import Copyright from '../components/sections/Copyright';
import Facts from '../components/sections/Facts';
import Home from '../components/sections/Home';
import MyWork from '../components/sections/MyWork';
import Testimonials from '../components/sections/Testimonials';
import Separator from '../components/Separator';
import { jqueryFuntion } from '@/utilits';
import { Fragment, useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>
          Patrick Rwirangira - Senior Full-Stack Developer | React, Node.js, Python
        </title>
        <meta
          name='description'
          content='Senior Full-Stack Developer wtih 3+ years experience in React.js, Next.js, Node.js, Python, FastAPI, and AWS. Based in Kigali, Rwanda. Mentored 100+ developers, built applications for 10,000+ users.'
        />
        <meta
          name='keywords'
          content='Patrick Rwirangira, Senior Full-Stack Developer, React.js, Next.js, Node.js, Python, FastAPI, JavaScript, TypeScript, AWS, GCP, Software Engineer, Kigali Rwanda, Technical Mentor, Andela, WelTel, Springboard'
        />
        <meta name='author' content='Patrick Rwirangira' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Patrick Rwirangira - Senior Full-Stack Developer | React, Node.js, Python'
        />
        <meta
          property='og:description'
          content='Senior Full-Stack Developer wtih 3+ years experience building scalable applications across healthcare, fintech, and enterprise sectors. Advanced in React, Node.js, Python, and cloud technologies.'
        />
        <meta property='og:url' content='https://rwpatrick.netlify.app/' />
        <meta property='og:site_name' content='Patrick Rwirangira Portfolio' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Patrick Rwirangira - Senior Full-Stack Developer'
        />
        <meta
          name='twitter:description'
          content='8+ years building scalable web applications with React, Node.js, Python. Technical mentor and team lead.'
        />

        {/* Additional SEO */}
        <meta name='geo.region' content='RW-01' />
        <meta name='geo.placename' content='Kigali, Rwanda' />
        <link rel='canonical' href='https://rwpatrick.netlify.app/' />

        {/* Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Patrick Rwirangira',
              'jobTitle': 'Senior Full-Stack Developer',
              'description':
                'Senior Full-Stack Developer wtih 3+ years of experience in JavaScript, Python, and cloud technologies',
              'url': 'https://rwpatrick.netlify.app/',
              'email': 'rwpatrick001@gmail.com',
              'telephone': '+250783992155',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Kigali',
                'addressCountry': 'Rwanda',
              },
              'sameAs': [
                'https://github.com/p-rwirangira',
                'https://www.linkedin.com/in/p-rwirangira-Rwirangira-816549111/',
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
            {/* <Clients /> */}
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
