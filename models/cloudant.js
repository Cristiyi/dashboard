var Cloudant = require('cloudant');
var cloudant = Cloudant({ account: process.env.DB_USER, password: process.env.DB_PASS });

cloudant.db.list(function(err, allDbs) {
    if (err) {
        console.log('Failed to initialize Cloudant: ' + err.message);
    } else {
        console.log('Success to initialize Cloudant.');
    };
});

cloudant.DBName = 'wordpress_management_prd';
cloudant.useProd = function() {
    if (cloudant.DBName != 'wordpress_management_prd') {
        cloudant.DBName = 'wordpress_management_prd';
        console.log('DBName:', cloudant.DBName);
    }
}

cloudant.useDev = function() {
    if (cloudant.DBName != 'wordpress_management_pre') {
        cloudant.DBName = 'wordpress_management_pre';
        console.log('DBName:', cloudant.DBName);
    }
}

cloudant.DBNamePrdJob = 'wordpress_management_prd';
cloudant.DBNamePreJob = 'wordpress_management_pre';

module.exports = cloudant;
