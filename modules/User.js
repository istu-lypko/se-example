const authService = require('./AuthService');
const subscriptionService = require('./subscriptions/SubscriptionService');
const { randomUUID } = require('crypto');

class User {
    constructor() {
        // get rand uuid
        this.uuid = randomUUID();
    }
    signup(params) {
        const res = authService.register(params);
        console.log(res ? 'User registered' : 'User already exists');
    }

    signin(params) {
        const res = authService.auth(params);
        console.log(res ? 'User signed in' : 'User not found');
    }

    buySubscription(params) {
        subscriptionService.subscribe(this.uuid, params.duration);
        console.log(`User bought a subscription for ${params.duration} year(s)`);
    }

    getSubscriptions() {
        const subscriptions = subscriptionService.getSubscriptionsByUser(this.uuid);
        console.log(`User has ${subscriptions.length} subscription(s)`);
        console.log(subscriptions);
    }
}

module.exports = User;