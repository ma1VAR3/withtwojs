import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 4rem;
  padding-bottom: 2rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Prajjwal Gupta</h1>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Navigate"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact"
            links={[
              {
                title: 'prajjwalgupta1465@gmail.com',
                path: 'mailto:prajjwalgupta1465@gmail.com',
              },
              {
                title:
                  'G3/26 AMNS Nand Niketan Township, Hazira, Surat, Gujarat, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Socials"
            links={[
              {
                title: 'GitHub',
                path: 'https://github.com/ma1VAR3',
              },
              {
                title: 'LinkedIn',
                path: 'https://twitter.com/withtwojs',
              },
              {
                title: 'Twitter',
                path: 'https://www.linkedin.com/in/prajjwal-gupta-9bb9381a5/',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}
