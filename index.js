function saturdayFun(dog = "roller-skate"){

    return (`This Saturday, I want to ${dog}!`);
}
const mondayWork = function(cat = "go to the office"){
    return (`This Monday, I will ${cat}.`);
}

function wrapAdjective(flair = "*"){
    return function innerFunction(bird = "special"){
        return `You are ${flair}${bird}${flair}!`
    }

}
