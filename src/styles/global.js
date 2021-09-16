import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --background: #FDFDFD;
  --navbackground: #FFFFFF;
  --heading: #1A1A1A;
  --subheading: #1A1A1ACC;
  --text: #1A1A1A99;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  outline-offset: 4px;
  box-sizing: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  line-height: 1.15;

  @media ${({ theme }) => theme.breakpoints.s} {
    font-size: 55%;
  }
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
  position: relative;
  overflow: visible;
  background-color: var(--background);
}

a {
  text-decoration: none;
  color: var(--text);
  transition: ${({ theme }) => theme.transition.ease};
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

form,
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  &:focus {
    outline: 2px solid var(--heading);
    outline-offset: 4px;
  }
}

a:hover,
a:active {
  color: var(--heading);
  text-decoration: underline;
}

p {
  color: var(--text);
  line-height: 2.5;
  font-size: 1.6rem;
  letter-spacing: 1.5px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
figure,
blockquote,
dl,
dd {
  margin: 0;
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

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
  }
}
`;
