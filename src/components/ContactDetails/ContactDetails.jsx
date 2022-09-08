import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ContactDetailsWrapper } from './ContactDetails.styles';

const contactData = {
  anna: {
    name: 'Anna Żarczyńska',
    email: 'anna@msnieruchomosci.pl',
    phone: '324235234',
  },
  amanda: {
    name: 'Amanda Grabowska',
    email: 'amanda@msnieruchomosci.pl',
    phone: '546342423',
  },
  patrycja: {
    name: 'Patrycja Biernaczyk',
    email: 'patrycja@msnieruchomosci.pl',
    phone: '4256452532',
  },
  kamila: {
    name: 'Kamila Urbaniak',
    email: 'kamila@msnieruchomosci.pl',
    phone: '846786457',
  },
  marta: {
    name: 'Marta Kucharczyk',
    email: 'marta@msnieruchomosci.pl',
    phone: '124143223',
  },
};

export const ContactDetails = ({ contact = 'anna' }) => {
  const data = useStaticQuery(graphql`
      query {
          anna: file(relativePath: {regex: "/zespol\/1_ania.jpg/"}) {
              publicURL
          },
          amanda: file(relativePath: {regex: "/zespol\/2_amanda.jpg/"}) {
              publicURL
          },
          kamila: file(relativePath: {regex: "/zespol\/3_kamila.jpg/"}) {
              publicURL
          },
          marta: file(relativePath: {regex: "/zespol\/4_marta.jpg/"}) {
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
  contact: PropTypes.oneOf(['anna', 'amanda', 'kamila', 'patrycja', 'marta']).isRequired,
};
