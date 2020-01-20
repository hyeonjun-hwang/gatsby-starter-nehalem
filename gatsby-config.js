module.exports = {
  siteMetadata: {
    title: `Hwang HyeonJun's Portfolio`,
    siteUrl: `https://perpling.com`,
    description: `안녕하세요. %TOPICS% 입니다.`,
    topics: [
      `bloggers`,
      `geeks`,
      `nerds`,
      `people`,
      `everyone`
    ],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Example',
        path: '/page'
      },
    ],
    footerMenu: [
      {
        name: 'RSS',
        path: '/rss.xml'
      },
    ],
    search: true,
    author: {
      name: `nehalem`,
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
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/temp_favicon.png`
        },
        loadDefaultPages: true,
        postsPerPage: 5
      }
    }
  ]
};
