import GitHub from "github-api"

let credentials;
try {
  credentials = require('./credentials.json')
} catch (ignore) {}
const gh = new GitHub(credentials)

export const getRepos = (user) => new Promise((resolve, reject) => {
  gh.getUser(user).listRepos()
    .then(({ data }) => resolve(data))
    .then(reject)
})

export const getIssues = (user, repoName) => new Promise((resolve, reject) => {
  gh.getIssues(user, repoName).listIssues({ state: "all" })
    .then(({ data }) => resolve(data))
    .catch(reject)
})

export const getAvgIssueClosingTime = (issues) => new Promise((resolve) => {
  const openIssues = issues.filter(({ state }) => state === 'closed')

  resolve(Math.round(openIssues
    .map(({ created_at, closed_at }) => new Date(closed_at).getTime() - new Date(created_at).getTime())
    .reduce((acc, time) => acc + time, 0) / openIssues.length)
  )
})

export const getIssuesStatusRatioOverTime = (issues, startDate, endDate, granularity = 1) => new Promise((resolve, reject) => {
  const startTime = startDate.getTime()
  const endTime = endDate.getTime()
  if (granularity < 1) {
    granularity = 1
  }
  const timeIncrement = granularity * 1000 * 60 * 60
  const out = []
  let currentTime = startTime;
  while (currentTime < endTime) {
    currentTime += timeIncrement
    const totalIssues = []
    const openIssues = []
    const l = issues.length;
    for (let i = 0; i < l; i++) {
      issue = issues[i];
      if (issueExistsAtTime(issue, currentTime)){
        totalIssues.push(issue)
      }
      if (isIssueOpenAtTime(issue, currentTime)){
        openIssues.push(issue)
      }
    }
    out.push({
      time: currentTime,
      openIssues,
      totalIssues
    })
  }
  resolve(out)
})

const issueExistsAtTime = ({ created_at }, curTime) => new Date(created_at).getTime() < curTime

const isIssueOpenAtTime = ({ created_at, closed_at }, curTime) => {
  const creationTime = new Date(created_at).getTime()
  if (creationTime > curTime) return false;
  if (!closed_at) return true;
  const closureTime = new Date(closed_at).getTime()
  if (closureTime > curTime) return true;
  return false
}
