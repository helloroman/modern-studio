const path = require('path');
const slugify = require('slugify');

exports.onPostBuild = ({ reporter }) => {
  reporter.info('Your Gatsby site has been built!');
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const ofertaTemplate = path.resolve('src/templates/OfertaTemplate.jsx');
  const result = await graphql(`
    query {
      allContentfulOferta {
        nodes {
          id
          adres
        }
      }
    }
  `);
  result.data.allContentfulOferta.nodes.forEach((node) => {
    const slug = `/oferty/${slugify(node.adres.toLowerCase())}`;
    createPage({
      path: slug,
      component: ofertaTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
