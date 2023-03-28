import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import * as style from "../style/_style.module.scss"
import Layout from "../components/layout"
import { LocalizedLink} from "gatsby-theme-i18n"



const Category = ({data}) => {
  
  const categoryData = data.mdx

  return (
    <Layout>
      <Seo title={categoryData.frontmatter.seo_title} description={categoryData.frontmatter.seo_description} />

      <div className={style.container}>
        <h1 className={style.title}>{categoryData.frontmatter.title}</h1>

        <article className={style.categoryDescription}>
          <MDXRenderer>{categoryData.body}</MDXRenderer>
        </article>

        <div className={style.storefront}>         
          {data.allMdx.nodes.map(node => {
            return (
              <div className={style.storefrontItem} key={node.id}>
                
                <div className={style.photoBackground}>
                  <div className={style.projectTitle}>{node.frontmatter.title}</div>
                  <LocalizedLink to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}>
                    <GatsbyImage 
                      className={style.categoryPhoto}
                      image={getImage(node.frontmatter.hero_image.image)}
                      alt={node.frontmatter.hero_image.alt}
                    />
                  </LocalizedLink>
                </div>
              </div>
            )
          })}       
        </div>
      </div>
    </Layout>
  )
}

export default Category

export const query = graphql`
query CategoryBySlug($slug: String, $locale: String) {
  mdx(frontmatter: {slug: {eq: $slug}}, fields: {locale: {eq: $locale}}) {
    frontmatter {
      title
      seo_title
      seo_description
      slug
      hero_image {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        alt
      }
    }
    body
  }
  allMdx(
    filter: {frontmatter: {category: {eq: $slug}}, fields: {locale: {eq: $locale}}}
  ) {
    nodes {
      frontmatter {
        title
        hero_image {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
        }
        slug
        category
      }
      id
    }
  }
}
`