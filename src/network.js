import GitHub from "github-api";
const gh = new GitHub();

export const getRepos = (user) => new Promise((resolve, reject) => {
  gh.getUser(user).listRepos()
    .then(({ data }) => resolve(data.map(({ name }) => name )))
    .then(reject)
});

export const test = () => new Promise((resolve, reject) => {
  console.log(test)
  resolve('test')
});
