 function accomplishment (streak,user, points) {
    if (streak >= 5 && streak <10) {
        if (streak == 5) {
            user.addPoints(4);
        }
        return {text: "you're on fire" ,image:"/img/fire.gif",badge:"/img/empty.png",audio:""};
    }
    if (streak >= 10 && streak < 15) {
        if (streak == 10) {
            user.addPoints(6);
        }
        return { text: "you're killing it",image:"/img/fire.gif" ,badge:"/img/killit.gif",audio:""};
    }
    if (streak >= 15 && streak < 20) {
        if (streak == 15) {
            user.addPoints(2);
        }
        return { text: "who's your daddy",image:"/img/empty.png" ,badge:"/img/daddy.jpg",audio:""};
    }
    if (streak >= 25 && streak < 30) {
        return { text: "Laika boss",image:"/img/empty.png" ,badge:"/img/laikaBoss.jpg",audio:""};
    }
    if (streak == 50 && user.status == "Success") {
        user.addPoints(2);
        return { text: "Terminator",image:"/img/empty.png" ,badge:"/img/empty.png", audio:"terminator"};
    }
    if (60 > streak >50 && user.status == "Success"){
        return { text: "Terminator",image:"/img/empty.png" ,badge:"/img/empty.png",audio:""};
    }
    if (streak >= 60 && user.status == "Success") {
        return { text: "Ultimate PS'er",image:"/img/empty.png" ,badge:"/img/ps.png",audio:""};        
    }
    if (streak >= 50 && user.status == "Failed") {
        return { text: "lost your streak",image:"/img/LOSER(1).gif" ,badge:"/img/loser.gif",audio:""};
    } 
    if (points < 0) {
        return { text: "You're cold",image:"/img/snow.gif" ,badge:"",audio:""};
    }
    if (streak < 50 && user.status == "failed") {
        return { text:"",image:"/img/empty.png",badge:"/img/empty.png",audio:""}
    }else {
        return { text:"",image:"/img/empty.png",badge:"/img/empty.png",audio:""}
    }
};

module.exports = accomplishment;