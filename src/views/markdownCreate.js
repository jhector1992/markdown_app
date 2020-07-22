import React, { Component } from 'react';
import axios from 'axios';
import URL from '../utils/url'
import Spinner from '../components/spinner';

class MarkdownCreate extends Component {
  state = {
    username: '',
    birthdate: ''
  }


  handleChange = event => {
    console.log('onchange')
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    const data = {
      title: this.state.title,
      author: this.state.author,
      code: this.state.code
    };

    /*
      title:  String,
      author: String,
      type: {
        id:     Number,
        name:   String
      },
      code: {
        html:   String,
        markdown: String
      },
      created: { type: Date, default: Date.now },
      hidden: Boolean
    })
    */


    axios.post(URL.api + URL.markdown, data)
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <h1>Crear nuevo markdown</h1>


        <form id="form" onSubmit={this.handleSubmit} type="post">
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="title">Título</label>
              <input type="text" className="form-control" placeholder="Título" id="title" onChange={this.handleChange} />
            </div>
            <div class="col-md-6 mb-3">
              <label for="author">Autor</label>
              <input type="text" className="form-control" placeholder="Autor" id="author" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div class="col">
              <label for="code">Markdown</label>
              <textarea type="text" class="form-control" placeholder="Markdown" id="code" onChange={this.handleChange} />
            </div>
          </div>
          <br />
          <button className="btn btn-primary">Guardar</button>
        </form>

        <Spinner />
      </div>
    );
  }
}

export default MarkdownCreate;