QtJSAPI
=======

QJSEngine bindings for the Qt API

QtJSAPI is a part of the QCAD application.
QtJSAPI replaces the Qt Script based [qtscriptgenerator](https://github.com/qt-labs/qtscriptgenerator)
for Qt 5 which was made obsolete when the Qt Script module was declared deprecated.
QtJSAPI has been tested with Qt 6.5.

License
-------
MIT License.
See [LICENSE.txt](https://github.com/qcad/qtjsapi/blob/main/LICENSE.txt).

Build
-----
```
CMAKE_PREFIX_PATH=/path/to/Qt/6.5.2/macos cmake -G Ninja .
ninja
```

Usage
-----
```
QJSEngine* engine = new QJSEngine();
RJSApi* rjsapi = new RJSApi(engine);
engine->evaluate("print('Hello World')");
```

Examples
--------
The library comes with a console application that evaluates a script passed to it on the command line.
You can run the examples as follows:
```
./out/qtjsapiconsole console/examples/HelloWorld/HelloWorld.js
```
