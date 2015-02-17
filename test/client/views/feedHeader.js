// Load modules

var Backbone = require('backbone');
var sinon = require('sinon');

var FeedHeaderView = require('../../../source/js/views/feedHeader');


// Declare internals

var internals = {};


describe('FeedHeaderView', function () {

    var fakeModel, triggerSpy, view;

    beforeEach(function() {

        fakeModel = new Backbone.Model();
        view = new FeedHeaderView({ model: fakeModel });
        view.render();
        triggerSpy = sinon.spy(view, 'trigger');
    });

    describe('when the collapse all action is clicked', function () {

        it('all expanded requests get collapsed', function() {

            view.$el.find('.expander').click();

            expect(triggerSpy).to.have.been.calledWith('collapseAll');
        });

    });

    context('with the favorites filter turned off', function () {

        describe('when the favorites filter action is clicked', function () {

            var $favorite;

            beforeEach(function() {

                $favorite = view.$el.find('.favorite');
                view.enableFavoritesFilter();
                $favorite.click();

            });

            it('displays the favorites filter as turned on', function() {

                expect($favorite).to.have.class('active');
            });

            it('triggers "toggleFavorites" with the toggle set to true', function() {

                expect(triggerSpy).to.have.been.calledWith('toggleFavorites', true);
            });

        });

    });

    context('with the favorites filter turned on', function () {

        describe('when the favorites filter action is clicked', function () {

            var $favorite;

            beforeEach(function() {

                $favorite = view.$el.find('.favorite');
                view.enableFavoritesFilter();
                $favorite.click();

                triggerSpy.reset();
                $favorite.click();
            });

            it('displays the favorites filter as turned off', function() {

                expect($favorite).to.not.have.class('active');
            });

            it('triggers "toggleFavorites" with the toggle set to false', function() {

                expect(triggerSpy).to.have.been.calledWith('toggleFavorites', false);
            });

        });

    });

    describe('#clear', function () {

        it('disables the favorites filter action', function() {

            var disableFavoritesFilterSpy = sinon.spy(view, 'disableFavoritesFilter');

            view.clear();

            expect(disableFavoritesFilterSpy).to.have.been.called;
        });

        it('disables the collapse all action', function() {

            var disableCollapseAllSpy = sinon.spy(view, 'disableCollapseAll');

            view.clear();

            expect(disableCollapseAllSpy).to.have.been.called;
        });

    });

    describe('#enableCollapseAll', function () {

        it('enables the collapse all action', function() {

            var $expander = view.$el.find('.expander');

            view.enableCollapseAll();

            expect($expander).to.have.class('expanded');
        });

    });

    describe('#disableCollapseAll', function () {

        it('disables the collapse all action', function() {

            var $expander = view.$el.find('.expander');

            view.disableCollapseAll();

            expect($expander).to.not.have.class('expanded');
        });

    });

    describe('#enableFavoritesFilter', function () {

        it('enables the favorited filter action', function() {

            var $favorite = view.$el.find('.favorite');

            view.enableFavoritesFilter();

            expect($favorite).to.have.class('enabled');
        });

    });

    describe('#disableFavoritesFilter', function () {

        it('disables the favorited filter action', function() {

            var $favorite = view.$el.find('.favorite');

            view.disableFavoritesFilter();

            expect($favorite).to.not.have.class('enabled');
        });

    });

});
