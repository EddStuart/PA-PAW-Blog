module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Planning analytics with workspace blog`,
    author: `Edward Stuart`,
    description: `A blog of tips, tricks, tutorials and examples for IBM Planning Analytics and IBM Planning analytics workspace`,
    siteURL: `www.ydag.co.uk`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/edd_stuart`,
      },
      {
        name: `github`,
        url: `https://github.com/eddstuart`,
      },
    ],
  },
}
