import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/self.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Prajjwal Gupta</span>
              </p>
              <h2 className="about__heading">A deep learning researcher</h2>
              <div className="about__info">
                <PText>
                  I am from Surat, India. Ever since I was introduced to
                  programming by QBasic in 8th grade, I have been fascinated by
                  the field. It was towards the start of my 12th grade that I
                  decided topursue my career in Computer Science.
                  <br /> <br />
                  Through VinnovateIT, the innovation lab of IT School at my
                  university, I gained exposure to various fields. I've engaged
                  in developing projects, conducting events and mentoring
                  juniors as a part of this lab.
                  <br />
                  <br />
                  My recent focus has been in research in deep learning. I have
                  carried out research on topics like Swarm Intelligence
                  algorithms, Federated Learning Systems and Intrusion Detection
                  Systems. My vision is to make the cyber security industry meet
                  it's demand by leveraging the power of Artificial Intelligence
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Essar International School, Surat']}
              />
              <AboutInfoItem
                title="College"
                items={['Vellore Institute of Technology, Vellore']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <AboutInfoItem
                title="Languages"
                items={['C/C++', 'Python', 'Java', 'JavaScipt', 'SQL', 'HTML']}
              />
              <AboutInfoItem
                title="Data Science"
                items={['Tensorflow', 'Scikit-learn', 'Pandas']}
              />
              <AboutInfoItem
                title="Blockchain"
                items={['Solidity', 'Ethereum']}
              />
              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'React']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP']}
              />
              <AboutInfoItem
                title="Video"
                items={['Premiere Pro', 'After Effects']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021: 09-Now"
                items={['Research Intern at SAI Lab, NIT Kurukshetra']}
              />
              <AboutInfoItem
                title="2021: 09-Now"
                items={['Technical Lead at Offset Global Technologies']}
              />
              <AboutInfoItem
                title="Freelance"
                items={['National India Refinery website']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Organizations</h1>

              <AboutInfoItem
                title="07/2020-Now"
                items={['VinnovateIT | Innovations Lead']}
              />
              <AboutInfoItem
                title="01/2021-Now"
                items={['Beatboxing Club VIT | Media Head']}
              />
              <AboutInfoItem
                title="11/2019-Now"
                items={['VIT Music Club | Member']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
