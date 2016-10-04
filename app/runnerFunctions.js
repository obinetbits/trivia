var runnerFunctions = {
    currentCategory: function(place){
        switch (place) {
            case 0:
            case 4:
            case 8:
                return 'Pop';
            case 1:
            case 5:
            case 9:
                return 'Science';
            case 2:
            case 6:
            case 10:
                return 'Sports';
            default:
                return 'Rock';
        }
    }
};

module.exports = runnerFunctions;