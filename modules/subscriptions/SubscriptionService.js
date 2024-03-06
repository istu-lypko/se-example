const Subscription = require('./Subscription');

class SubscriptionService {
    constructor() {
        console.log('SubscriptionService created');
        this.subscriptions = [];
    }

    subscribe(userId, duration) {
        this.subscriptions.push(new Subscription(userId, duration));
    }

    getSubscriptionsByUser(userId) {
        return this.subscriptions.filter(subscription => subscription.userId === userId);
    }
}

module.exports = new SubscriptionService();