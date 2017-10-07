import GitHub from "github-api";
import Repository from "github-api"
const gh = new GitHub();

export const getRepos = (user) => new Promise((resolve, reject) => {
  gh.getUser(user).listRepos()
    .then(({ data }) => resolve(data))
    .then(reject)
});

export const getOpenIssues = (repoName) => new Promise((resolve, reject) => {
  const repo = new Repository(repoName);
  repo.listIssues()
    .then(resolve)
    .catch(reject)
});

export const test = () => new Promise((resolve, reject) => {
  console.log(test)
  resolve('test')
});
