import GitHub from "github-api";
const gh = new GitHub();

export const getRepos = (user) => new Promise((resolve, reject) => {
  gh.getUser(user).listRepos()
    .then(({ data }) => resolve(data))
    .then(reject)
});

export const getOpenIssues = (user, repo) => new Promise((resolve, reject) => {
  gh.getIssues(user, repo).listIssues({ state: 'open' })
    .then(resolve)
    .catch(reject)
});

export const test = () => new Promise((resolve, reject) => {
  console.log(test)
  resolve('test')
});
