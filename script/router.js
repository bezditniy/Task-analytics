
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
    if(document.querySelector(".nav-btn.target")) {
        document.querySelector(".nav-btn.target").classList.remove("target")
        event.target.classList.add("target")
    } else {
        event.target.classList.add("target")
    }
};

const routes = {
    404: "/pages/404.html",
    "/profile-page": "/pages/profile.html",
    "/stat-page": "/pages/statistics.html",
};



const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
	console.log(location)
    document.getElementById("main-page");

};


window.onpopstate = handleLocation;
window.route = route;

handleLocation();