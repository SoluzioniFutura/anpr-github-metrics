import GitHub from "github-api";
const gh = new GitHub();

const user = "expressjs";
export const getRepos = () => new Promise((resolve, reject) => {
  gh.listRepos(user)
    .then(resolve)
    .then(reject)
});



export const test = () => new Promise((resolve, reject) => {
  console.log(test);
  resolve('test')
});
