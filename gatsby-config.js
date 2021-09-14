module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Fidalgo - Javascript Developer',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-65T42JB8BM',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Roboto', 'Roboto mono:700'],
        display: 'swap',
      },
    },
  ],
};
