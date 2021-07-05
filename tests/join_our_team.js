const faker = require('faker');
const name = faker.name.firstName() + faker.name.lastName();
const email = 'test@decemberlabs.com';
const linkedIn = 'https://linkedin.com/in/testusername'
const comment = faker.lorem.sentences(3);

module.exports = {
    before: function(browser){
        browser.globals.waitForConditionTimeout = 7000;
    },
    "Go to December Labs and open Careers": function(browser){
        var home = browser.page.home()
        home
            .navigate()
            .waitForElementPresent('@menu')
            .click('@menu')
            .waitForElementPresent('@careers')
            .click('@careers');
    },
    "Validate Section is properly displayed ": function (browser){
        var careers = browser.page.careers()
        careers
            .assert.title("Careers - Be a Game Changer, Join Our Team | December Labs")
            .assert.containsText('@header','Careers');
    },
    "Select Apply now on QA Engineers": function(browser){
        var careers = browser.page.careers()
        careers
            .moveToElement('@qaSection',10,10)
            .click('@qaApplyBtn')
        },
    "Fill Form to join the team and Send": function(browser){
        var join = browser.page.join()
        join
            .assert.containsText('@header','Join Our Team')
            .fillOutForm(name, email, linkedIn, comment)
            .assert.containsText('@joinSuccess', 'Success! You did it!')
            .assert.containsText('@inTouch', `We'll get in touch`)
            .click('@okBtn')
    },
    after: function(browser){
        browser.end();
    }
};