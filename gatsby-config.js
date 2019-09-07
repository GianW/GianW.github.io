module.exports = {
    siteMetadata: {
        title: `gianw.github.io`,
        author: `Gian Winckler`,
        description: `Gian Winckler personal page.`,
        siteUrl: `https://gianw.github.io/`,
        avatar: `https://avatars3.githubusercontent.com/u/6453845?s=460&v=4`,
        social: {
            twitter: `gianwinckler`,
        },
        menuLinks:[
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Brain',
                link: '/brain'
            },
            {
                name: 'Tags',
                link: '/tags'
            },
            {
                name: 'About',
                link: '/about'
            },

        ],
        ukFlag: `public/icons/ukFlag.png`,
        brFlag: `public/icons/brFlag.png`
    },
    plugins: [
        // `gatsby-plugin-feed`,
        `gatsby-plugin-react-helmet`,
         {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/brain`,
                name: `brain`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/content/assets`,
              name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                      maxWidth: 590,
                    },
                },
                {
                    resolve: `gatsby-remark-responsive-iframe`,
                    options: {
                        wrapperStyle: `margin-bottom: 1.0725rem`,
                    },
                },
                `gatsby-remark-copy-linked-files`,
                `gatsby-remark-smartypants`,
                `gatsby-remark-prismjs`
                ]
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: `UA-60722716-1`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gians Winckler`,
                short_name: `GianW`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#000`,
                display: `minimal-ui`,
                icon: `public/icons/icon.png`,
            }
        },
        `gatsby-plugin-offline`,
    ]
}
