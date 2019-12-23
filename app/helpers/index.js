const config = require('../../config/app');
const routes = require('../routes/routes');



module.exports = {
    route: (controller, method) => {
        with(routes) {
            return eval(`${controller}.${method}`);
        }
    },
    lang: (string) => {
        const appLang = config.get('language');
        if (appLang == 'en') return string;
        const strings = require(`../lang/${appLang}.json`);
        return (strings[string]) || string;
    }

}