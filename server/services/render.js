exports.homeRoutes = (req,res) =>{
    res.render('index');
}

exports.addRecord = (req, res) => {
  res.render('add_record');
};

exports.updateRecord = (req, res) => {
  res.render('update_record');
};