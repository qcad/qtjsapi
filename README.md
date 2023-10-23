QtJSAPI
=======

QJSEngine bindings for the Qt API

This project was developed as part of the QCAD application and
replaces the Qt Script based [qtscriptgenerator](https://github.com/qt-labs/qtscriptgenerator)
for Qt 5 which was made obsolete when the Qt Script module was declared deprecated.

License
-------
MIT License. See [LICENSE.txt](https://github.com/qcad/qtjsapi/blob/main/LICENSE.txt).

Usage
-----
```
QJSEngine* engine = new QJSEngine();
RJSApi* rjsapi = new RJSApi(engine);
engine->evaluate("print('Hello World')");
```

Build
-----
```
CMAKE_PREFIX_PATH=/path/to/Qt/6.5.2/macos cmake -G Ninja .
ninja
```
