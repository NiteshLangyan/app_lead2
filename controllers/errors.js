exports.get404 = (req, res) => {
    res.render('404');
}

exports.get500 = (req, res) => {
    res.status(500).render('404');
}
