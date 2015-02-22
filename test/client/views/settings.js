// Load modules
var Backbone = require('backbone');
var SettingsView = require('../../../source/js/views/settings');


// Declare internals

var internals = {};


describe('SettingsView', function () {

    describe('when the client id changes', function () {

        it.skip('updates the jquery snippet', function () {
            var settingsModel = new Backbone.Model();
            var view = new SettingsView({ settingsModel: settingsModel });

            // clientID is undefined, not sure it doesn't want to grab the input text box
            var $clientId = view.$el.find('input[name=client-id]');
            // view.$('input[name=client-id]').val('foo123');
            // view.$('input[name=client-id]').keyup();

            $clientId.val('foo123');
            $clientId.keyup();
            // debugger;
            // expect($clientID.val()).to.equal('foo123');
            // expect(view.$('input[name=client-id]').val()).to.equal('foo123');
            expect(view.$('.jquery-snippet').text()).to.contain('var clientId = \'foo123\';');
        });

    });

    describe('when submit is clicked', function () {

        it.skip('sets the client id on the model', function () {
            var settingsModel = new Backbone.Model();
            var view = new SettingsView({ settingsModel: settingsModel });
            view.$('.client').val('foo123');
            view.$el.find('.submit').click();

            expect(view.clientId).to.equal('foo123');
        });

        context('with a changed client id', function () {

            it('sets the client id as the channel on the model');

        });

        it('hides itself');

    });

    describe('when cancel is clicked', function () {

        it('resets the views client id back to original client id');

        it('hides itself');

        it('re-renders itself to reset it\'s display for the next time it\'s shown');

    });

    describe('when the original settings model is changed', function () {

        it('changes the view\'s model');

    });

    describe('#show', function () {

        it('shows the view');

    });

    describe('#hide', function () {

        it('hides the view');

    });

});
