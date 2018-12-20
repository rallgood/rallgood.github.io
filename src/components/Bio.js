import React from 'react'

import Me from '../images/Rob.jpg'
import './Bio.css'

class Bio extends React.Component {
  render() {
    return (
            <div className="row margin-top-2 margin-bottom-2">
                <div className="col bio-image-col">
                    <img src={Me} alt={`Rob Allgood`} className="responsive-image" />
                </div>
                <div className="col bio-content-col">
                    <h5 className="margin-top-0">About</h5>
					<p>Hi, I'm Rob, and I am a freelance graphic designer and web designer in Nashville, TN. I love my family, gardening and eating all the best food Nashville has to offer. I also love being creative and helping people fulfill their design needs. So email me at <em>design@roballgood.com</em> and let's talk about how we can work together.</p>
				</div>
            </div>
    )
  }
}

export default Bio
