const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        {
          allContentfulPost{
            edges {
              node {
                title
                image {
                  file {
                    url
                  }
                }
                body {
                  childMarkdownRemark {
                    html
                    frontmatter {
                        tags
                        title
                    }
                  }
                }
                updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
                description {
                  description
                }
                slug
              }
            },
            totalCount
          },
          tags: allMarkdownRemark {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          },
          allContentfulAnimePost {
            edges {
              node {
                picture
                situation
                suggest
                updatedAt
                title
                home
                annict
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                feedback {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            },
            totalCount
          }
        }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const { edges } = result.data.allContentfulPost

    edges.forEach(edge => {
        console.log("ok")
        createPage({
            path: `/post/${edge.node.slug}/`,
            component: path.resolve("./src/templates/post.js"),
            context: { post: edge.node }
        })
    });
 
    const PerPage = 5
    const pageCount = Math.ceil(result.data.allContentfulPost.totalCount / PerPage)
    
    for (let i = 0; i < pageCount; i++) {
        console.log("Hum")
        createPage({
            path: `/list/${i + 1}`,
            component: path.resolve("./src/templates/list.js"),
            context: {
                current: i+1,
                limit: PerPage,
                skip: i * PerPage,
            },
        })
    }

    const tags = result.data.tags.group
    tags.forEach((tag) => {
        const tagCount = Math.ceil(tag.totalCount / PerPage)
        console.log("tag")
        for (let i = 0; i < tagCount; i++) {
            createPage({
                path: `/tags/${tag.fieldValue}/${i + 1}`,
                component: path.resolve("./src/templates/tags.js"),
                context: {
                  current:i+1,
                  tag: tag.fieldValue,
                  num: tag.totalCount,
                  limit: PerPage,
                  skip: i * PerPage,
                },
            })
        }
    })

    const AnimePerPage = 12
    const AnimePageCount = Math.ceil(result.data.allContentfulAnimePost.totalCount / PerPage)
    
    for (let i = 0; i < AnimePageCount; i++) {
        console.log("Anime")
        createPage({
            path: `/anime/${i + 1}`,
            component: path.resolve("./src/templates/anime-list.js"),
            context: {
                current: i+1,
                limit: AnimePerPage,
                skip: i * AnimePerPage,
            },
        })
    }
}