const modules = {
    index:(req,res) => {
        res.render('index');
    },

    search:(req,res) => {
        res.render('search');
    },

    playlist:(req,res) => {
        res.render('playlist');
    },

    favorites:(req,res) => {
        res.render('favorites');
    },

    profile:(req,res) => {
        res.render('profile');
    },

    settings:(req,res) => {
        res.render('settings');
    }

}

module.exports = modules;