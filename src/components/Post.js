import React, { Component } from 'react'
import axios from 'axios'
import Pokeball from '../pokeball.png'

export default class Post extends Component {

    state = {
        post:null
    }

    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })

        })
        
        
    }
    render() {

        const post = this.state.post ? (
            <div className="post">
              <img src={Pokeball} alt="A pokeball"></img>
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
          <div className="center"> Loading post...</div>

        )

        return (
            <div>
                <div className="container">
                    {post}
                </div>
            </div>
        )
    }
}

