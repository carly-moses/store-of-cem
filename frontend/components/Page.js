import PropTypes from 'prop-types';
import Header from '../components/Header';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --purple: #550a8a;
    --black: #393939;
    --grey: #3A3A3A;
    --lightGrey: #e1e1e1;
    --offwhite: #ededed;
    --maxWidth: 1000px;
    --boxShadow: 0 12px 24px rgba(0, 0, 0, 0.9);
    box-sizing: border-box;
  }

*, *:before, *:after {
  box-sizing: inherit;
}

  body {
    font-family: 'radnika_next', --apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', san-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: none;
  }

  button: {
    font-family: 'radnika_next', --apple-system,BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', san-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`

export default function Page({children}) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles> {children} </InnerStyles>
    </>
  )
}

Page.propTypes = {
  children: PropTypes.any
};