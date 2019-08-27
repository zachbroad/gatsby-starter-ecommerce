import React from 'react'
import {Link} from 'gatsby'

function PropertyListingCard({property}) {
  const viewURL = `properties/${property.node.frontmatter.slug}/`
  const applyURL = `properties/${property.node.frontmatter.slug}/#apply`

  const title = property.node.frontmatter.title
  const address = property.node.frontmatter.address
  const sqft = property.node.frontmatter.area
  const thumbnail =
    property.node.frontmatter.thumbnail.childImageSharp.fluid.src

  const buttons = (
    <div className="inline-flex w-full">
      <Link
        to={viewURL}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
      >
        View
      </Link>
      <Link
        to={applyURL}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
      >
        Apply
      </Link>
    </div>
  )

  const propertyInfo = (
    <div className="content">
      <p>
        <Link className="text-lg font-bold" to={viewURL}>
          {title}
        </Link>
      </p>
      <Link to={viewURL}>{address}</Link>
      <Link to={viewURL}>{sqft} sq/ft</Link>
    </div>
  )

  const propertyThumbnail = (
    <Link
      className="image"
      to={`properties/${property.node.frontmatter.slug}/`}
    >
      <img className={'w-full'} src={thumbnail} alt="" />
    </Link>
  )
  return (
    <div className="rounded overflow-hidden shadow-lg m-3">
      <div className="ui fluid card">
        {propertyThumbnail}

        {propertyInfo}

        {buttons}
      </div>
    </div>
  )
}

export default PropertyListingCard
