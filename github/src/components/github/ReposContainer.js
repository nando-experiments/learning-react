import React, { Component } from 'react'
import { fetchRepos } from '../../service/repos-api'
import ReposList from './ReposList'

class ReposContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      repos: [],
      username: 'nandomoreirame'
    }

    this.fetchReposbyUser = this.fetchReposbyUser.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  // quando for montado esse método será chamado
  componentDidMount () {
    this.fetchReposbyUser()
  }

  //
  fetchReposbyUser () {
    fetchRepos(this.state.username)
      .then(res => this.setState({ repos: res.data }))
  }

  //
  changeHandler (e) {
    this.setState({ username: e.target.value })
  }

  //
  submitHandler (e) {
    e.preventDefault()
    this.fetchReposbyUser()
  }

  // método para renderizar o componente
  render () {
    return (
      <div>
        <h1>Repos Container</h1>
        <form action="#" onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} type="text" placeholder="username"/>
        </form>
        <ReposList repos={this.state.repos}></ReposList>
      </div>
    )
  }
}

export default ReposContainer
