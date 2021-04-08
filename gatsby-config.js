module.exports = {
  siteMetadata: {
    title: `Carlos The Unknown Cloud Guy`,
    siteUrl: 'https://pingcarlos.tech',
    description: `Blog Post about Linux, AWS, Python, and CI/CD`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "Portfolio",
            url: "/doc1"
          },
          {
            title: "About",
            url: "/doc2"
          }
        ]
      },
      footer: {
        copyright: "PingCarlos.tech",
        columns: [
          {
            heading: "Social Media",
            links: [
              {
                title: "Linked In",
                url: "https://www.linkedin.com/in/carlos-bautista/"
              },
              {
                title: "Github",
                url: "https://github.com/charlix216?tab=repositories"
              }
            ]
          },
          {
            heading: "Email",
            links: [
              {
                title: "Avaiable upon request",
                url: "#"
              }
            ]
          },
          {
            heading: "Github Projects",
            links: [
              {
                title: "Teams Python",
                url: "https://github.com/charlix216/PythonTeamsBot"
              },
              {
                title: "Python Monitoring",
                url: "https://github.com/charlix216/MonitorPythonScript"
              },
              {
                title: "Python Training",
                url: "charlix216/Python-Labs"
              }
            ]
          }
        ]
      }
    },
    templates: {
      home: {
        totalPosts: 6,
        template: "home"
      },
      pages: {
        path: "/content/pages/",
        template: "page"
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefix: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6
            }
          }
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6
        }
      }
    }
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: ``
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
};
