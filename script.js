const userImage = document.querySelector(".user-image");
const userName = document.querySelector("[data-userName]");
const gitHubLink = document.querySelector(".user-email");
const joiningDate = document.querySelector(".joining-date");
const desc = document.querySelector(".desc");

const userRepos = document.querySelector("[userRepos]");
const repoScore = document.querySelector(".repo-score");
const userFollowers = document.querySelector("[userFollowers]");
const followersScore = document.querySelector(".followers-score");
const userFollowing = document.querySelector("[userFollowing]");
const followingScore = document.querySelector(".following-score");

const userLocation = document.querySelector("[userLocation]");
const portfolio = document.querySelector("[portfolio]");
const twitter = document.querySelector("[twitter]");
const company = document.querySelector("[company]");

const url = "https://api.github.com/users/";
initApi();

async function initApi() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("gitHub data: ", data);

        renderInfo(data);
    }
    catch(e) {
        console.log("error hai", e);
    }
}
