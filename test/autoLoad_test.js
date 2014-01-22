"use strict";

module("autoLoad");

test("autoLoad witn empty value", function() {
    var input = $("#input1");
    input.maskMoney({
        autoLoad: true,
        prefix:"$"
    });
//    input.maskMoney("mask"); // No need since using autoLoad
    equal(input.val(), "$0.00", "Expecting $0.00 - This loads the mask automatically with an empty value");
});

test("autoLoad with a value", function() {
    var input = $("#input1");
    input.val(12.33);
    input.maskMoney({
        autoLoad: true,
        prefix:"$"
    });
//    input.maskMoney("mask"); // No need since using autoLoad
    equal(input.val(), "$12.33", "Expecting $12.33 - This loads the mask automatically with a set value");
});

test("autoLoad changing value", function() {
    var input = $("#input1").maskMoney({
        autoLoad: true,
        prefix:"$"
    });
    equal(input.val(), "$0.00", "Expecting $0.00 - Got: "+input.val()+" - This loads the mask automatically with an empty value");

    input.val(2.33);
//    input.maskMoney("mask"); // No need since using autoLoad
    equal(input.val(), "2.33", "Expecting $2.33 - Got: "+input.val()+" - maks isn't applied yet so it should not be masked");

    input.val(12.33);
    input.maskMoney("mask"); // Still have to mask on coded value changes
    equal(input.val(), "$12.33", "Expecting $12.33 - Got: "+input.val()+" - This loads the mask automatically with a set value");
});
