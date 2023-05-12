const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@assets': 'src/assets',
        '@partials': 'src/partials',
        '@sass': 'src/sass',
        '@api': 'src/api'
    })(config)

    return config
}
