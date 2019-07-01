module.exports = {
  siteMetadata: {
    title: `University Lutheran Chapel`,
    description: `LCMS campus ministry congregation at the University of Minnesota`,
    author: `ULCMN`,
    location: `Graebner Memorial Chapel, Concorida University St. Paul`,
    address: `1259 Carrol Ave, St. Paul, MN 55104`,
    time: `Sundays @ 10AM`,
    lutherHouseAddress: `316 10th Ave SE, Minneapolis, MN 55414`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-favicon`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Muli"]
        }
      }
    }
  ]
};
