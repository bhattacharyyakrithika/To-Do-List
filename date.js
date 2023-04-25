exports.getDate = function () {

    const dayAndMsg = {};
    const today = new Date();
    const curHr = today.getHours()
    const salutationMsg = "";

    if (curHr < 12) {
        salutationMsg = 'Bonjour 😃';
    } else if (curHr < 18) {
        salutationMsg = 'Bon après-midi 🍲';
    } else {
        salutationMsg = 'Bonne soirée 😌';
    }

    const options = {
        day: "numeric",
        weekday: "long",
        month: "long",
    }
    
    const day = today.toLocaleDateString("en-US", options);
    dayAndMsg = {
        "nameOfTheday": day,
        "message": salutationMsg
    }

    return(dayAndMsg);

};