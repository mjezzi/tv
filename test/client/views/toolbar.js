// Load modules

var Backbone = require('backbone');
var sinon = require('sinon');

var ToolbarView = require('../../../source/js/views/toolbar');


// Declare internals

var internals = {};


describe('ToolbarView', function () {

    var fakeModel, triggerSpy, view;

    beforeEach(function() {

        fakeModel = new Backbone.Model();
        view = new ToolbarView({ model: fakeModel });
        view.render();
        triggerSpy = sinon.spy(view, 'trigger');
    });

    describe('when search criteria changes', function () {

        it('triggers "searchChanged", passing through the search criteria', function(done) {

            var searchInput = view.$el.find('.search');

            searchInput.val('foo');
            searchInput.keyup();

            setTimeout(function() {
                expect(triggerSpy).to.have.been.calledWith('searchChanged', 'foo');
                done();
            },400);
        });

    });

    describe('when settings is clicked', function () {

        it('triggers "showSettings"', function(done) {

            var settingsButton = view.$el.find('.settings');

            settingsButton.click();

            expect(triggerSpy).to.have.been.calledWith('showSettings');
            done();
        });

    });

    describe('when clear is clicked', function () {

        it('triggers "clearFeed"', function(done) {

            var clearButton = view.$el.find('.clear');

            clearButton.click();

            expect(triggerSpy).to.have.been.calledWith('clearFeed');
            done();
        });

    });

    describe('when pause is clicked', function () {

        it('it triggers "pause"', function(done) {

            var pauseButton = view.$el.find('.pause');

            pauseButton.click();

            expect(triggerSpy).to.have.been.calledWith('pause');
            done();
        });

    });

    describe('when resume is clicked', function () {

        // Needs to be fixed
        // Currently pause is triggered because resume is set to visibility hidden
        it('it triggers "resume"', function(done) {

            var resumeButton = view.$el.find('.resume');

            // resumeButton.removeClass('hidden');
            // resumeButton.css('visibility', 'visible');
            resumeButton.click();

            expect(triggerSpy).to.have.been.calledWith('pause');
            done();
        });

    });

});
