import React, { Component } from 'react';
import Table from '../components/table';
import axios from 'axios';
import URL from '../utils/url'
import { Link } from 'react-router-dom'
import { Plus } from '../components/icons'

class MarkdownList extends Component {
  // default State object
  state = {
    markdownsList: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get( URL.api + URL.markdown )
      .then(result => this.setState({
        markdownsList: result.data.map(i => {
                  return {
                    id: i['_id'],
                    title: i.title,
                    author: i.author,
                    created: i.created
                  };
                }),
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
          <header>
            <h1>Markdowns
              <Link className="btn btn-outline-primary float-right" to="/markdown/create">
                Añadir nuevo <Plus />
              </Link>
            </h1>
            <p>
            </p>
          </header>
          <section>
            <Table items={ this.state.markdownsList }/>
          </section>
        </div>
    );
  }
}


export default MarkdownList;