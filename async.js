let getUser = async (id, user) => {
  console.log("User is founded");

  const data = await getRepositories(user.gitHubUsername, 2);

  let brunch = await getBrunch(data.repos[data.level]);

  if (brunch == "master") {
    const commited = await postCommit("new Version");
    if (commited) console.log("The new version is commited");
    else console.log("The new version is not commited");
  }
};


function getRepositories(username, level) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("repos is ready");
      let repos = ["br1", "main", "master"];
      resolve({repos:repos, level:level});
    }, 2000);
  });
}
function getBrunch(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("repo[] is ready");
      resolve(repo);
    }, 2000);
  });
}
function postCommit(vers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("new Version");
      resolve(vers == "new Version");
    }, 2000);
  });
}


let user = {gitHubUsername : 'username'};

getUser(1,user);