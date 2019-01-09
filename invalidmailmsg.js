function InvalidNameMsg(textbox) {

    if (textbox.validity.patternMismatch) {
        textbox.setCustomValidity('Please enter your name');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}

function InvalidPostCodeMsg(textbox) {

    if (textbox.validity.patternMismatch) {
        textbox.setCustomValidity('Please enter your UK post code');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}

function InvalidPhoneMsg(textbox) {

    if (textbox.validity.patternMismatch) {
        textbox.setCustomValidity('Please enter an UK phone number starting with 0');
    }
    else {
        textbox.setCustomValidity('');
    }
    return true;
}
