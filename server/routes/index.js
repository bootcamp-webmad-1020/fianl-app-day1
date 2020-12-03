module.exports = app => {

    // Base URLS
    app.use('/api/coasters', require('./coaster.routes.js'))
}