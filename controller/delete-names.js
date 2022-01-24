const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display delete form on GET.
exports.profile_delete_get = (req, res) => {
    namesPopulated = [
        'Ronald Barnett',
        'Clear Carter',
        'Chimene Barnett',
        'Ginger Barnett',
        'Torry Robinson',
        'Keylis Bridgeforth',
        'Cleo Carter',
        'Beauty Barnett'
    ]
     res.render('delete-names', {
         name1:namesPopulated[0],
         name2:namesPopulated[1],
         name3:namesPopulated[2],
         name4:namesPopulated[3],
         name5:namesPopulated[4],
         name6:namesPopulated[5],
         name7:namesPopulated[6],
         name8:namesPopulated[7],
     })
     
};

// Handle delete on POST.
exports.profile_delete_post = (req, res) => {
    let nameId = req.params;
    console.log(nameId);

   db.collection('Profiles').deleteOne({name: nameId})
   .then( (result) => {
       res.render('home');
   })
    
};

// Display pop up 
exports.profile_delete_popup = (req, res) => {
    res.render('delete-pop-up');
};

