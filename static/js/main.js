var githubNotification      = document.getElementById('github-notification');
var emailNotification       = document.getElementById('email-notification');
var twitterNotification     = document.getElementById('twitter-notification');
var mobileNotification       = document.getElementById('mobile-notification');

function showInfo(type) {
    if (type === 'github')
        githubNotification.style.visibility     = 'initial';
    else if (type == 'email')
        emailNotification.style.visibility      = 'initial';
    else if (type == 'twitter')
        twitterNotification.style.visibility    = 'initial';
    else if (type == 'mobile')
        mobileNotification.style.visibility     = 'initial';
}

function hideInfo() {
    githubNotification.style.visibility     = 'hidden';
    emailNotification.style.visibility      = 'hidden';
    twitterNotification.style.visibility    = 'hidden';
    mobileNotification.style.visibility     = 'hidden';
}
