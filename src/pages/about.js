import React from 'react';

import Bio from '../components/Bio';
import Layout from "../components/layout";

class About extends React.Component {
    render() {
        return (
          <Layout>
            <div className="container">
                <Bio />
            </div>
          </Layout>
        )
    }
}

export default About
