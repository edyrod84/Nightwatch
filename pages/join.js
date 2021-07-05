var joinCommands = {
    fillOutForm: function(name, email, linkedIn, comment){
        return this.waitForElementVisible('@header')
            .setValue('@inputName', name)
            .setValue('@inputEmail', email)
            .setValue('@inputLinkedin', linkedIn)
            .setValue('@textareaComments', comment)
            .click('@sendBtn')
            .waitForElementVisible('@joinSuccess')
    }
}

module.exports = {
    commands:[joinCommands],
    elements: {
        header: {
            selector: '.msg_join_us h3',
        },
        inputName: {
            selector:'input[type="name"]',
        },
        inputEmail: {
            selector:'input[type="email"]',
        },
        inputLinkedin: {
            selector:'input[type="link"]',
        },
        textareaComments: {
            selector:'textarea[name="comments"]',
        },
        sendBtn: {
            selector: '.send-form-action',
        },
        joinSuccess: {
            selector: '.join-us-success .big_text'
        },
        inTouch: {
            selector: '.join-us-success .small_text'
        },
        okBtn: {
            selector: '.join-us-success .close-modal-success'
        }
    }
}