import React, {useContext, Component} from 'react'
import {Link} from 'gatsby'

class Header extends Component {
  state = {
    active: true,
  }

  render() {
    const {location} = this.props

    const hiddenOrNot = this.state.active ? 'hidden' : ''

    return (
      <nav className="flex items-center justify-between flex-wrap bg-indigo-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Bellahway Apartments
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => this.setState({active: !this.state.active})}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${hiddenOrNot}`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
