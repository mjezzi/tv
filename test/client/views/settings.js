// Load modules
var Backbone = require('backbone');
var sinon = require('sinon');
var SettingsView = require('../../../source/js/views/settings');


// Declare internals

var internals = {};


describe('SettingsView', function () {

    beforeEach( function () {
        this.fakeModel = new Backbone.Model({ clientId: 'baz123', channel: 'baz123' });
        this.view = new SettingsView({ settingsModel: this.fakeModel });
        this.view.render();
    });

    describe('when the client id changes', function () {

        it('updates the jquery snippet', function () {

            this.view.$el.find('input:text[name=client-id]').val('foo123').keyup();

            expect(this.view.$('.jquery-snippet').text()).to.contain('var clientId = \'foo123\';');
        });

    });

    describe('when submit is clicked', function () {

        beforeEach( function () {
            this.view.$el.find('.client').val('foo123').keyup();
            this.view.$el.find('.submit').click();
        });

        it('sets the client id on the model', function () {

            expect(this.view.settingsModel.get('clientId')).to.equal('foo123');
        });

        context('with a changed client id', function () {

            it('sets the client id as the channel on the model', function (){

                expect(this.view.settingsModel.get('channel')).to.equal('foo123');
            });

        });

        it('hides itself', function(){

            var viewHideSpy = sinon.spy(this.view, 'hide');

            this.view.$el.find('.client').val('foo123').keyup();

            this.view.$el.find('.submit').click();

            expect(viewHideSpy).to.have.been.called;
        });

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
