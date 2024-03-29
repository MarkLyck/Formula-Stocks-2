import React from 'react'
import Scroll from 'react-scroll'
import brochure from './business.pdf'
import brochureImage from './brochure-image.png'
import './brochure.css'

class Brochure extends React.Component {
  downloadBrochure() {
    window.open(brochure)
  }

  render() {
    const Element = Scroll.Element
    return (
      <section className="brochure section">
        <Element name="brochure"/>
        <div className="beside">
          <div className="left">
            <h1>Want more in-depth technical information?</h1>
            <button className="download-brochure" onClick={this.downloadBrochure}>
              <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
              See the brochure
            </button>
          </div>
          <div className="right">
            <img src={brochureImage} className="brochure-image" onClick={this.downloadBrochure} alt="brochure"/>
          </div>
        </div>
      </section>
    )
  }
}

export default Brochure
