import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import './Bio.css'

export default function Bio() {
  return (
    <StaticQuery
      query={graphql`
        query headShotQuery {
          imageSharp {
              fluid(maxWidth: 800) {
                src
            }
          }
        }
      `}
      render={data => (
        <div className="row margin-top-2 margin-bottom-2">
            <div className="col bio-image-col">
                <img src="/Rob.jpg" alt={`Rob Allgood`} className="responsive-image" />
            </div>
            <div className="col bio-content-col">
                <h5 className="margin-top-0">About</h5>
    					  <p>Hi, I'm Rob, and I am a freelance web designer in Nashville, TN who likes to make time for reading, biking, baking and excluding the Oxford comma. I also love being creative and helping people fulfill their design needs. So email me at <b>dra3000@gmail.com</b> and let's talk about how we can work together.</p>
    				</div>
        </div>
      )}
    />
  )
}
