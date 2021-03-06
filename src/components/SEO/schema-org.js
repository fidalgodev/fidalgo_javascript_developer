import React from 'react';
import { Helmet } from 'react-helmet';

export default React.memo(({ defaultTitle, title, url }) => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ];

  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  );
});
