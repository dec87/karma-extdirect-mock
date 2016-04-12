var path = require('path');

var createPattern = function (pattern) {
    return {pattern: pattern, included: true, served: true, watched: false};
};

var initExtDirectMock = function (files) {
    var sinonPath = path.dirname(require.resolve('sinon')) + '/../pkg';
    var extdirectmockPath = path.dirname(require.resolve('extdirect-mock'));

    files.unshift(createPattern(path.join(__dirname, '/lib/boot.js')));
    files.unshift(createPattern(sinonPath + '/sinon.js'));
    files.unshift(createPattern(extdirectmockPath + '/extdirectmock.js'));
}

initExtDirectMock.$inject = ['config.files'];

module.exports = {
    'framework:extdirectmock': ['factory', initExtDirectMock]
}
