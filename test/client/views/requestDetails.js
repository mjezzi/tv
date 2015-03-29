// Load modules

var Backbone = require('backbone');
var Request = require('../../../source/js/models/request');
var sinon = require('sinon');

var RequestDetailsView = require('../../../source/js/views/requestDetails');


// Declare internals

var internals = {};


describe('RequestDetailsView', function () {

    beforeEach( function () {

        this.model = new Request();
        this.view = new RequestDetailsView({ model: this.model });
    });

    describe('when the model changes', function () {

        it('re-renders', function () {

            var viewRenderSpy = sinon.spy(this.view, 'render');

            this.model.set('foo', 1);

            expect(viewRenderSpy).to.have.been.called;
        });

    });

    describe('#render', function () {

        context('with a request that has an error', function () {

            it('displays that the request has an error', function () {

                var hasErrorStub = sinon.stub(this.model, 'hasError');

                hasErrorStub.returns(true);

                this.view.render();

                expect(this.view.$el).to.have.class('error');
            });

        });

        context('with a request that has a warning', function () {

            it('displays that the request has a warning', function () {

                var hasWarningStub = sinon.stub(this.model, 'hasWarning');

                hasWarningStub.returns(true);

                this.view.render();

                expect(this.view.$el).to.have.class('warning');
            });

        });

    });

});
