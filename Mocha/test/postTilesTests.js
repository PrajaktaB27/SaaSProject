var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
const exp = require('constants');
chai.use(chaiHttp);

describe('Test Estates by Type', function () {
	//	this.timeout(15000);

	let hostURL = "https://metadetector.azurewebsites.net";
	let path = "/app/tiles";
	var requestResult;
	var response;

	before(function (done) {
		chai.request(hostURL)
			.get(path)
            .set('api-key', 123)
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				done();
			});
			this.timeout(10000);
	});

	it('Should return New Items Added message', function () {
        expect(response).to.have.status(200);
        expect(response.text).to.be.equal('New items added');
        expect(response.body).to.be.a('Object');
        expect(response).to.have.headers;
    });

});