/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};
exports.spectral = (req, res) => {
  res.render('spectral', {
    title: 'Star with MiPi!'
  });
};