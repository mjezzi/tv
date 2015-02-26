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
        this.view.$el.find('.client').val('foo123').keyup();
    });

    describe('when the client id changes', function () {

        it('updates the jquery snippet', function () {

            expect(this.view.$('.jquery-snippet').text()).to.contain('var clientId = \'foo123\';');
        });

    });

    describe('when submit is clicked', function () {

        beforeEach( function () {

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

        it('resets the views client id back to original client id', function () {

            this.view.$el.find('.client').val('foo123').keyup();

            this.view.$el.find('.cancel').click();

            expect(this.view.model.get('clientId')).to.equal('baz123');
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
        // beforeEach(function () {
        //     this.click = function () {
        //         this.view.$('.settings').click();
        //     }.bind(this);
        // });

        // afterEach(function () {
        //     delete this.view;
        //     delete this.click;
        // });

        it.skip('shows the view', function () {
            // need to stub out .modal('show')
            // grab .modal from view
            // sinon.stub('.modal', 'modal');
            // withArgs('show')
            // expect(this.view.$('.modal')).to.be.visible;
            // expect(this.view.$('.modal')).to.have.css('display', 'block');
            // expect($modal).css('display').to.equal('none');
            // expect(this.view.$el).css('display').to.equal('none');
            // $modal = this.view.$el.find('.modal');
            spyModal = sinon.spy(this.view, 'modal');
            spyMock = sinon.mock(spyModal);



            this.click();
            spyMock.expects('modal').withArgs('show');
            // expect($modal).css('display').to.equal('block');

            // expect(this.view.serverLogsView.$el.css('display')).to.equal('block');
        });

    });

    describe('#hide', function () {

        it.skip('hides the view', function () {

           this.view.hide();

            // expect(this.view.$('.modal')).to.not.be.visible;
            expect(this.view.$('.modal')).to.have.css('display', 'none');
        });

    });

});
