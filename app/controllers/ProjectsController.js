exports.index = (req, res) => {
    res.render('projects/index', {
        title: 'Projects'
    });
}

exports.store = (req, res) => {
    res.render('projects');
}