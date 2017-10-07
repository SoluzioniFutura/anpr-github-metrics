import GitHub from "github-api"
const gh = new GitHub()

export const getRepos = (user) => new Promise((resolve, reject) => {
  gh.getUser(user).listRepos()
    .then(({ data }) => resolve(data))
    .then(reject)
})

export const getIssues = (user, repo) => new Promise((resolve, reject) => {
  gh.getIssues(user, repo).listIssues({ state: "all" })
    .then(({ data }) => resolve(data))
    .catch(reject)
})

export const getAvgIssueClosingTime = (issues) => new Promise((resolve) => {
  const openIssues = issues.filter(({ state }) => state === 'closed')

  resolve(openIssues
    .map(({ created_at, closed_at }) => new Date(closed_at).getTime() - new Date(created_at).getTime())
    .reduce((acc, time) => acc + time, 0) / openIssues.length
  )
})

export const test = () => new Promise((resolve, reject) => {
  console.log(test)
  resolve('test')
})
