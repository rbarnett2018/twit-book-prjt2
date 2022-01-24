const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display list
exports.profile_list = (req, res) => {
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
     res.render('view-names', {
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
// Display homepage with enlarged profile
exports.profile_enlarged = (req, res) => {
    res.render('view-specific');
};

