# Sencha Ext.Direct mock for karma

#### Compatibility:
* Sencha Touch 2.3+
* ExtJs 4.2.x+

#### Installation
The easiest way is to keep `karma-extdirect-mock` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma-extdirect-mock": "~1.0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-extdirect-mock --save-dev
```

#### Configuration
```js
// karma.conf.js 
module.exports = function(config) {
    config.set({
        plugins: [
            'karma-extdirect-mock'
        ],
        frameworks: [
            'extdirectmock'
        ]
    });
};
```

#### Usage / Example code
```js
describe('Basic Assumptions: ', function() {
    it('Ext namespace should be available loaded', function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion().major).toEqual(6);
    });
    it('Ext.direct mock should be available', function() {
        expect(extdirectmock).toBeDefined();
    });
    it('Ext.direct mock test call remote method', function() {
        extdirectmock.init({
            responseData: {
                Math: {
                    sqrt: function(params) {
                        return Math.sqrt(params.text);
                    }
                }
            }
        });

        Mock.api.Math.sqrt({
            text: 4
        }, function(response) {
            expect(response).toBe(2);
        });
    });
});
```
