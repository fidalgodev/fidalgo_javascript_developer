const getAge = require('../src/utils').getAge;

module.exports = {
  siteTitle: 'Fidalgo - Software Developer', // Navigation and Site Title
  siteTitleAlt: 'Fidalgo - Software Developer', // Alternative Site title for SEO
  siteTitleShort: 'fidalgo.dev', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'https://fidalgo.dev', // Domain of your site. No trailing slash!
  lang: 'en',
  pathPrefix: '/',
  siteLogo: 'images/logo.jpg',
  siteDescription: `Meet Fidalgo, a ${getAge()}-year-old self-taught Software Developer from Leicester, currently working at Prolific as a Software Engineer.`,
  minibio:
    'I love learning and growing. I believe in pushing myself and never settling. I&apos;m hardworking, curious, and always eager to learn more!',
  author: 'Fidalgo',
  organization: 'Fidalgo',

  // Manifest and Progress color
  themeColor: '#1A1A1A',
  backgroundColor: '#FDFDFD',

  // Social component
  instagram: 'https://www.instagram.com/fidalgo.dev',
  twitter: 'https://twitter.com/fidalgodev',
  twitterHandle: '@fidalgodev',
  github: 'https://github.com/fidalgodev/',
  linkedin: 'https://www.linkedin.com/in/fidalgodev/',
  youtube: 'https://youtube.com/c/fidalgodev',
  email: 'hello@fidalgo.dev',
};
