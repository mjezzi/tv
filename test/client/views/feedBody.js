// Load modules

var Backbone = require('backbone');
var sinon = require('sinon');

var FeedBodyView = require('../../../source/js/views/feedBody');
var RequestView = require('../../../source/js/views/request');


// Declare internals

var internals = {};


describe('FeedBodyView', function () {

    var fakeModel, view;

    beforeEach(function() {

        fakeCollection = new Backbone.Collection();
        view = new FeedBodyView({ collection: fakeCollection });
        view.render();
    });

    describe('when a request is added to the collection', function () {

        it('adds a request to the feed body', function() {

            var request = new RequestView();

            view._addRequest(request);

            expect(view._requestViews.length).to.eq(1);
        });

    });

    describe('#render', function () {

        it('clears the body', function() {

            var clearSpy = sinon.spy(view, 'clear');

            view.render();

            expect(clearSpy).to.have.been.called;
        });

    });

    describe('#clear', function () {

        it('clears out the feed body\'s markup');

        it('removes the request views');

    });

    describe('#hasFavoritedRequests', function () {

        context('with a least one request that\'s favorited', function () {

            it('returns true');

        });

        context('without any requests favorited', function () {

            it('returns false');

        });

    });

    describe('#hasExpandedRequests', function () {

        context('with a least one request that\'s expanded', function () {

            it('returns true');

        });

        context('without any requests expanded', function () {

            it('returns false');

        });

    });

    describe('#collapseAll', function () {

        it('puts each request into a collapsed state');

    });

    context('with favorites currently not filtered', function () {

        describe('#toggleFavorites', function () {

            it('hides all non-favorited requests');

        });

    });

    context('with favorites currently filtered', function () {

        describe('#toggleFavorites', function () {

            it('shows all non-favorited requests');

        });

    });

    describe('#filterRequests', function () {

        context('with a present search criteria query string', function () {

            it('it hides any requests that don\'t match the search criteria filter');

        });

        context('with an empty search criteria query string', function () {

            it('it shows any requests that were hidden by the previous search criteria filter');

        });

    });

    describe('when a request is collapsed/expanded', function () {

        it('triggers requestExpandToggle');

    });

    describe('when a request is favorited/unfavorited', function () {

        it('triggers requestFavoriteToggle');

    });

    describe('when a request status changes', function () {

        context('with a search criteria filter set to display that status', function () {

            it('the request is shown');

        });

        context('with a search criteria filter set to hide that status', function () {

            it('the request is hidden');

        });

    });

    context('with the browser window scrolled all the way to the bottom', function () {

        describe('when a new request is added to the feed\'s body', function () {

            it('scrolls the screen back to the bottom');

        });

    });

});
