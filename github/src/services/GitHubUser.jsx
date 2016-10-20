'use strict'

import axios from 'axios'

var GitHubUser = {
  getByUsername(username) {
    return axios.get(`https://api.github.com/users/${username}`)
  },

  getReposByUsername(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`)
  }
}

export default GitHubUser
