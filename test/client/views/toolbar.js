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

        it('triggers "showSettings"', function() {

            view.$el.find('.settings').click();

            expect(triggerSpy).to.have.been.calledWith('showSettings');
        });

    });

    describe('when clear is clicked', function () {

        it('triggers "clearFeed"', function() {

            view.$el.find('.clear').click();

            expect(triggerSpy).to.have.been.calledWith('clearFeed');
        });

    });

    describe('when pause is clicked', function () {

        var $pause, $resume;

        beforeEach(function() {

            $pause = view.$el.find('.pause');
            $resume = view.$el.find('.resume');

            $pause.click();
        });

        it('hides the "pause" button', function() {

            expect($pause).to.have.class('hidden');
        });

        it('displays the "resume" button', function() {

            expect($resume).to.not.have.class('hidden');
        });

        it('it triggers "pause"', function() {

            expect(triggerSpy).to.have.been.calledWith('pause');
        });

    });

    describe('when resume is clicked', function () {

        var $pause, $resume;

        beforeEach(function() {

            $pause = view.$el.find('.pause');
            $resume = view.$el.find('.resume');

            $pause.click();

            triggerSpy.reset();

            $resume.click();
        });

        it('hides the "resume" button', function() {

            expect($resume).to.have.class('hidden');
        });

        it('displays the "pause" button', function() {

            expect($pause).to.not.have.class('hidden');
        });

        it('it triggers "resume"', function() {

            expect(triggerSpy).to.have.been.calledWith('resume');
        });

    });

});
