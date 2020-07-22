import React, { Component } from 'react';
import axios from 'axios';
import URL from '../utils/url'
import ItemDetails from '../components/itemDetails';
import Spinner from '../components/spinner';
import { Trash } from '../components/icons'

class MarkdownDetails extends Component {
  // default State object
  state = {
    markdownsList: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    
    axios
      .get(`${ URL.api + URL.markdown }/${ this.props.match.params.id }`)
      .then(result => this.setState({
        markdownItem: {
          id: result.data['_id'],
          title: result.data.title,
          code: {
            html: result.data.code.html,
            markdown: result.data.code.markdown
          },
          author: result.data.author,
          created: result.data.created
        },
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  render() {
    return (
      <div>

        <section>
          {this.state.isLoading ?
            <Spinner />
            :
            <ItemDetails item={this.state.markdownItem} />
          }
        </section>
        
        <Spinner />
        <div id="hover">
          <Trash />
        </div>
        
      </div>
    );
  }
}

export default MarkdownDetails;