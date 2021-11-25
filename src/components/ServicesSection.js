import React from 'react';
import { MdSecurity } from 'react-icons/md';
import { FaEthereum } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Areas of impact " heading="Domains" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<FaEthereum />}
            title="blockchain"
            desc="Skilled in developing basic smart contracts on Ethereum blockchain."
          />
          <ServicesSectionItem
            icon={<SiTensorflow />}
            title="data science"
            desc="Demonstrated experience in building projects and carrying out research."
          />
          <ServicesSectionItem
            icon={<MdSecurity />}
            title="security"
            desc="Aiming to secure applications and networks using AI and blockchain."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
