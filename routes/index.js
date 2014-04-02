exports.index = function(req, res){
    //res.render('index', { title: 'Express' });
    res.render('mathtesttable');
};

exports.mathdrill = function(req, res){
  res.render('mathdrill', { title: 'Express' });
};

exports.createtest = function(req, res){
  res.render('createtest', { title: 'Express' });
};
