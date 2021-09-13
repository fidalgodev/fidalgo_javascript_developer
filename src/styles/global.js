import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  outline: none;
  box-sizing: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  }

html {
  font-size: 62.5%;
  box-sizing: border-box;
  line-height: 1.15;
    }

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-size: 1.6rem;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  --navbarbckg: ${({ theme }) => theme.colors.white};
  --text: ${({ theme }) => theme.colors.black};
  --navbartext: ${({ theme }) => theme.colors.blackOpacity80};
}

form,
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

a {
  text-decoration: none;
  color: var(--text);
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;
