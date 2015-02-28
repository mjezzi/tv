// Load modules
var Backbone = require('backbone');
var sinon = require('sinon');
var SettingsView = require('../../../source/js/views/settings');


// Declare internals

var internals = {};


describe('SettingsView', function () {

    beforeEach( function () {

        this.fakeModel = new Backbone.Model({ clientId: 'bar123', channel: 'bar123' });
        this.view = new SettingsView({ settingsModel: this.fakeModel });
        this.view.render();
    });

    describe('when the client id changes', function () {

        it('updates the jquery snippet', function () {

            this.view.$el.find('.client').val('foo123').keyup();

            expect(this.view.$('.jquery-snippet').text()).to.contain('var clientId = \'foo123\';');
        });

    });

    describe('when submit is clicked', function () {

        describe('after the client id was changed', function () {

            beforeEach(function () {

                this.view.$el.find('.client').val('foo123').keyup();

                this.view.$('.submit').click();
            });

            it('sets the client id on the model', function () {

                expect(this.view.settingsModel.get('clientId')).to.equal('foo123');
            });

            it('sets the client id as the channel on the model', function (){
                expect(this.view.settingsModel.get('channel')).to.equal('foo123');
            });
        });


        it('hides itself', function(){

            this.view.$el.find('.submit').click();

            var viewHideSpy = sinon.spy(this.view, 'hide');

            this.view.$el.find('.client').val('foo123').keyup();

            this.view.$el.find('.submit').click();

            expect(viewHideSpy).to.have.been.called;
        });

    });

    describe('when cancel is clicked', function () {

        it('resets the views client id back to original client id', function () {

            this.view.$el.find('.client').val('foo123').keyup();

            this.view.$el.find('.cancel').click();

            expect(this.view.model.get('clientId')).to.equal('bar123');
        });

        it('hides itself', function () {

            var viewHideSpy = sinon.spy(this.view, 'hide');

            this.view.$el.find('.cancel').click();

            expect(viewHideSpy).to.have.been.called;
        });

        it('re-renders itself to reset it\'s display for the next time it\'s shown', function () {

            var viewRenderSpy = sinon.spy(this.view, 'render');

            this.view.$el.find('.cancel').click();

            expect(viewRenderSpy).to.have.been.called;
        });

    });

    describe('when the original settings model is changed', function () {

        it('changes the view\'s model', function () {

            this.view.settingsModel.set('clientId', '1');

            this.view.settingsModel.set('channel', 'changedChannel');

            expect(this.view.model.get('clientId')).to.equal('1');

            expect(this.view.model.get('channel')).to.equal('changedChannel');
        });

    });

    describe('#show', function () {

        it('shows the view', function () {

            this.view.show();

            expect(this.view.$('.modal')).to.have.css('display', 'block');
        });

    });

    describe('#hide', function () {

        it('hides the view', function () {

            this.view.show();
            this.view.hide();

            expect(this.view.$('.modal')).to.have.css('display', 'none');
        });

    });

});
