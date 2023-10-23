QtJSAPI
=======

QJSEngine bindings for the Qt API

This project was developed as part of the QCAD application and
replaces the Qt Script based <a href="https://github.com/qt-labs/qtscriptgenerator">qtscriptgenerator</a> 
for Qt 5 which was made obsolete when the Qt Script module was declared deprecated.

License
-------
MIT License (see LICENSE.txt)

Usage
-----
```
QJSEngine* engine = new QJSEngine();
RJSApi* rjsapi = new RJSApi(engine);
engine-&gt;evaluate("print('Hello World')");
```

Build
-----
```
CMAKE_PREFIX_PATH=/path/to/Qt/6.5.2/macos cmake -G Ninja .
ninja
```
