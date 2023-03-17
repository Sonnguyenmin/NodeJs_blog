const newsRouter = require('./new.routes');
const siteRouter = require('./site.routes');


function route(app) {
    
    app.use('/news', newsRouter);
    
    app.use('/', siteRouter);

    app.use('/search', siteRouter);
    
}

module.exports = route;