import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ContactDetailsWrapper } from './ContactDetails.styles';

export const contactData = {
  anna: {
    name: 'Anna Żarczyńska',
    email: 'anna@msnieruchomosci.pl',
    phone: '504848558',
  },
  patrycja: {
    name: 'Patrycja Biernaczyk',
    email: 'patrycja@msnieruchomosci.pl',
    phone: '609243737',
  },
};

export const ContactDetails = ({ contact = 'anna' }) => {
  const data = useStaticQuery(graphql`
      query {
          anna: file(relativePath: {regex: "/zespol\/1_ania.jpg/"}) {
              publicURL
          },
          patrycja: file(relativePath: {regex: "/zespol\/5_patrycja.jpg/"}) {
              publicURL
          },
      }`);

  return (
    <ContactDetailsWrapper>
      <img src={data[contact].publicURL} alt="" />
      <div>
        <p>Kontakt:</p>
        <p>{contactData[contact].name}</p>
        <p>{contactData[contact].email}</p>
        <p>{contactData[contact].phone}</p>
      </div>
    </ContactDetailsWrapper>
  );
};

ContactDetails.propTyopes = {
  contact: PropTypes.oneOf(['anna', 'patrycja']).isRequired,
};
