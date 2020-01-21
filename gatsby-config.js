module.exports = {
  siteMetadata: {
    title: `Hwang HyeonJun's blog`,
    siteUrl: `https://perpling.com`,
    description: `안녕하세요. %TOPICS% 입니다.`,
    topics: [
      `황현준`,
      `Hyeonjun`,
      `황가`,
      `hwang`,
      `렛츠기릿`
    ],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'about',
        path: '/page'
      },
    ],
    footerMenu: [
      {
        name: 'RSS',
        path: 'RSS.xml'
      },
      {
        name: 'Sitemap',
        path: 'sitemap.xml'
      }
    ],
    search: true,
    author: {
      name: `황현준`,
      description: `I'm <strong>nehalem</strong>, a Gatsby theme by 
        <a href="https://nehalist.io" rel="noopener" target="_blank">Hwang HyeonJun</a>. If you like what you see feel free to give a 
        <a href="https://github.com/nehalist/gatsby-theme-nehalem" rel="noopener" target="_blank">star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/nehalist`,
        linkedin: `https://www.linkedin.com/in/kevin-hirczy-7a9377106/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/nehalist`,
        twitch: ``
      }
    }
  },
  plugins: [

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-ND5X5L5",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" }
      }
    },

    `gatsby-plugin-advanced-sitemap`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112409357-1",
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `themeAssets`,
        path: `${__dirname}/content/assets/images`
      }
    },
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        contentPath: `content`,
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#3a7bd5`,
          theme_color: `#3a7bd5`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/temp_favicon.png`
        },
        loadDefaultPages: true,
        postsPerPage: 5
      }
    }
  ]
};
