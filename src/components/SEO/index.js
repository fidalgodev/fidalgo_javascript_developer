import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import SchemaOrg from './schema-org';

import config from '../../../config/website';
import defaultMetaImage from '../../../static/images/logo.jpeg';

const SEO = ({
  siteMetadata: seo,
  postData = { childMarkdownRemark: {} },
  metaImage,
  frontmatter: postMeta = postData.childMarkdownRemark.frontmatter || {},
  title = postMeta.title || config.siteTitle,
  description = postMeta.plainTextDescription ||
    postMeta.description ||
    seo.description,
  image = metaImage?.startsWith('http:') || metaImage?.startsWith('https:')
    ? metaImage
    : `${seo.canonicalUrl}${metaImage || defaultMetaImage}`,
  url = postMeta.slug
    ? `${seo.canonicalUrl}${postMeta.slug}`
    : seo.canonicalUrl,
}) => {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <html lang="en" amp />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg url={url} title={title} defaultTitle={seo.title} />
    </>
  );
};

const SEOWithQuery = (props) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          author {
            name
          }
          organization {
            name
            url
            logo
          }
          social {
            twitter
          }
        }
      }
    }
  `);
  return <SEO siteMetadata={siteMetadata} {...props} />;
};

export default SEOWithQuery;
