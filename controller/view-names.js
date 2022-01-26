const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display list
exports.profile_list = (req, res) => {
    Profile.find({}, {'name':1,_id:0})
    
    .then((Profile) => {
        namesPopulated =[]; 
        for (let i = 0; i < Profile.length; i++) {
            let Pro = Profile[i].name;
        if(Pro !== null){
            namesPopulated.push(Pro)
        } else {
            let ind = namesPopulated.indexOf(Pro);
            namesPopulated.splice(ind, 1);
        }
    }
        
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

})};
// Display homepage with enlarged profile
exports.profile_enlarged = (req, res) => {
    let nameId = req.params.name;
    
    Profile.find({name: nameId})
    
    .then((Profile) => {
        
        
      let name = nameId; 
       let birthday = Profile[0].birthday;
      let bio = Profile[0].bio;
      res.render('view-specific', {
        name: name,
        birthday: birthday,
        bio: bio
      })
    })
    console.log(res.body);
};

