const User = require('./modules/User');

const main = () => {
    const user = new User();

    user.signup({ username: 'JohnDoe' });
    user.signin({ username: 'JohnDoe' });
    user.buySubscription({ duration: 1 });
    user.buySubscription({ duration: 6 });
    user.buySubscription({ duration: 2 });
    user.getSubscriptions();
}

main();
