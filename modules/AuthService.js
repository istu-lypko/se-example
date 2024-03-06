class AuthService {
    constructor() {
        console.log('AuthService created');
        this.users = {};
    }

    auth(params) {
        return !!this.users[params.username];
    }

    register(params) {
        if (this.auth(params)) {
            return false;
        }

        this.users[params.username] = params.username;
        return true;
    }
}

module.exports = new AuthService();