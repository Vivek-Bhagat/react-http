import React, { Component } from "react";
import axios from 'axios'



class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
    .then(response => {
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
  };
  render() {
    //* destructure themm and assign the value attributes

    const { userId, title, body } = this.state;
    return (
      <div>
        <h1>Forms</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              placeholder="User Id"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              placeholder="Message"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
