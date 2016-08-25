describe("usernameAvailable", function () {
    beforeEach(module('UsernameModule'));

    it('should query the backend when the username is checked',
        inject(function (usernameAvailable, $rootScope, $httpBackend) {
            //the httpBackend service allows you to mock out the API HTTP requests
            $httpBackend.expect('GET', '/api/username-available/johnny').respond(200);
            var status = false;
            usernameAvailable("johnny").then(function () {
                status = true;
            });
            $rootScope.$digest();
            $httpBackend.flush();
            expect(status).toBe(true);
            $httpBackend.verifyNoOutstandingRequest();
        }));
});
