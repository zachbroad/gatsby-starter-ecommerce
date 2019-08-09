/* eslint-disable */
import React from 'react'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'
import Image from 'gatsby-image'

class PropertyListingTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allMarkdownRemark')
    const data = productInfo.edges[0].node
    const frontmatter = data.frontmatter
    const {slug, title, address, area} = frontmatter
    // const image = get(data, 'mainImageHref')
    // const sizes = get(data, 'mainImage.childImageSharp.sizes')
    const thumbnail = data.frontmatter.thumbnail.childImageSharp.fluid

    // if (!sizes) return null
    console.dir(thumbnail)

    return (
      <Layout location={this.props.location}>
        <SEO title={slug} />

        <h1>{title}</h1>
        <h4>{address}</h4>
        <p>{area} sq/ft</p>
        <br />
        <img src={thumbnail.src} alt="" />
        <div dangerouslySetInnerHTML={{__html: data.html}}></div>
      </Layout>
    )
  }
}

export default PropertyListingTemplate

export const pageQuery = graphql`
  query ProductsQuery($id: String!) {
    allMarkdownRemark(filter: {id: {eq: $id}}) {
      edges {
        node {
          frontmatter {
            slug
            title
            address
            area
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
          id
          html
        }
      }
    }
  }
`
