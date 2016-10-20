'use strict'

import React from 'react'

class UserRepos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reposCount: 0
    }
  }

  componentWillReceiveProps(props) {
    this.setState({reposCount: props.repos.length})
  }

  render() {
    var repos = this.props.repos.map((repo, key) => {
      return (
        <div key={key} className="list-group-item">
          <h3>{repo.name}
            <span className="badge">{repo.stargazers_count} STARS</span>
          </h3>
          <p>{repo.description}</p>
          <div className="btn-group" data-toggle="buttons">
            <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
            <a href={repo.html_url + '/issues'} className="btn btn-outline-primary" role="button">Issues ({repo.open_issues}) </a>
          </div>
        </div>
      )
    })

    return (
      <div>
        <h2>{this.state.reposCount} repositories</h2>
        {repos}
      </div>
    )
  }
}

export default UserRepos