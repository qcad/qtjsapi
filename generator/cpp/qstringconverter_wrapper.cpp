
  // Auto generated
  
  // include header:
  //#include "qstringconverterwrapper.h"
  //#include "header_cpp.h"
  
    #include "qstringconverter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStringConverter*> QStringConverter_Wrapper::basecasters_QStringConverter;
    
    // static functions implementation in singleton wrapper:
    
#ifdef Q_QDOC

#endif

    // Class: QStringConverter
    // Function: nameForEncoding
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStringConverter_WrapperSingleton::nameForEncoding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringConverter_Encoding(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QStringConverter::Encoding)
  
QStringConverter::Encoding a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringConverter_Encoding(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            const char* res = 
                
                // call static member function:
                QStringConverter::nameForEncoding(
              a1_cpp
    
            );
          
            // return type: const char*

            return RJSHelper::cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_char:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nameForEncoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QStringConverter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStringConverter_Wrapper>("org.qcad", 1, 0, "QStringConverter_Wrapper");
        qmlRegisterInterface<QStringConverter_Wrapper>("QStringConverter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStringConverter* t = new RJSType_QStringConverter();
          global.setProperty("RJSType_QStringConverter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStringConverter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStringConverter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStringConverter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStringConverter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStringConverter_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QStringConverter_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QStringConverter_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QStringConverter_WrapperSingleton * s = new QStringConverter_WrapperSingleton(handler);
        engine->globalObject().setProperty("QStringConverter_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QStringConverter.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    QStringConverter_Wrapper::QStringConverter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStringConverter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStringConverter_Wrapper::QStringConverter_Wrapper(RJSApi& h, QStringConverter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStringConverter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStringConverter_Wrapper"));
              //setObjectName("QStringConverter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStringConverter_Wrapper::~QStringConverter_Wrapper() {
            //RDebug::decCounter(QString("QStringConverter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStringConverter_Wrapper"));

            //qDebug() << "QStringConverter_Wrapper::~QStringConverter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QStringConverter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStringConverter_Wrapper::initConnections() {

          //setObjectName("QStringConverter_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
#ifdef Q_QDOC

#endif


    // non-static functions:
    
#ifdef Q_QDOC

#endif

    // Class: QStringConverter
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringConverter_Wrapper::isValid
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringConverter* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringConverter
    // Function: resetState
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringConverter_Wrapper::resetState
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringConverter* w = getWrapped();
                
                w->resetState(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringConverter
    // Function: hasError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringConverter_Wrapper::hasError
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringConverter* w = getWrapped();
                bool res = 
                    
                w->hasError(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringConverter
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringConverter_Wrapper::name
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringConverter* w = getWrapped();
                const char* res = 
                    
                w->name(
                  
                );
              
            // return type: const char*

            return RJSHelper::cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_char:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstringconverter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStringEncoder*> QStringEncoder_Wrapper::basecasters_QStringEncoder;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QStringEncoder
    // Function: nameForEncoding
    // Source: QStringConverter
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStringEncoder_WrapperSingleton::nameForEncoding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringConverter_Encoding(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QStringConverter::Encoding)
  
QStringConverter::Encoding a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringConverter_Encoding(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            const char* res = 
                
                // call static member function:
                QStringConverter::nameForEncoding(
              a1_cpp
    
            );
          
            // return type: const char*

            return RJSHelper::cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_char:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nameForEncoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QStringEncoder_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStringEncoder_Wrapper>("org.qcad", 1, 0, "QStringEncoder_Wrapper");
        qmlRegisterInterface<QStringEncoder_Wrapper>("QStringEncoder_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStringEncoder* t = new RJSType_QStringEncoder();
          global.setProperty("RJSType_QStringEncoder", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStringEncoder::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStringEncoder_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStringEncoder_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStringEncoder_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStringEncoder_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QStringEncoder_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QStringEncoder_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QStringEncoder_WrapperSingleton * s = new QStringEncoder_WrapperSingleton(handler);
        engine->globalObject().setProperty("QStringEncoder_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QStringEncoder.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    QStringEncoder_Wrapper::QStringEncoder_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStringEncoder_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStringEncoder_Wrapper::QStringEncoder_Wrapper(RJSApi& h, QStringEncoder* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStringEncoder_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStringEncoder_Wrapper"));
              //setObjectName("QStringEncoder_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStringEncoder_Wrapper::~QStringEncoder_Wrapper() {
            //RDebug::decCounter(QString("QStringEncoder_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStringEncoder_Wrapper"));

            //qDebug() << "QStringEncoder_Wrapper::~QStringEncoder_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStringEncoder";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStringEncoder_Wrapper::initConnections() {

          //setObjectName("QStringEncoder_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
    // Class: QStringEncoder
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStringEncoder_Wrapper::QStringEncoder_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStringEncoder_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStringEncoder_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStringConverter_Encoding(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: encoding (QStringConverter::Encoding)
  
QStringConverter::Encoding a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringConverter_Encoding(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStringEncoder(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStringEncoder(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStringEncoder(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QStringEncoder";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStringEncoder
    // Function: isValid
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringEncoder_Wrapper::isValid
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringEncoder* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringEncoder
    // Function: resetState
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringEncoder_Wrapper::resetState
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringEncoder* w = getWrapped();
                
                w->resetState(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringEncoder
    // Function: hasError
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringEncoder_Wrapper::hasError
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringEncoder* w = getWrapped();
                bool res = 
                    
                w->hasError(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringEncoder
    // Function: name
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringEncoder_Wrapper::name
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringEncoder* w = getWrapped();
                const char* res = 
                    
                w->name(
                  
                );
              
            // return type: const char*

            return RJSHelper::cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_char:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringEncoder
    // Function: encode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStringEncoder_Wrapper::encode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: in (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringEncoder* w = getWrapped();
                QByteArray res = 
                    
                w->encode(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for encode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringEncoder
    // Function: requiredSpace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStringEncoder_Wrapper::requiredSpace
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: inputLength (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringEncoder* w = getWrapped();
                qsizetype res = 
                    
                w->requiredSpace(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for requiredSpace";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstringconverter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStringDecoder*> QStringDecoder_Wrapper::basecasters_QStringDecoder;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QStringDecoder
    // Function: nameForEncoding
    // Source: QStringConverter
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStringDecoder_WrapperSingleton::nameForEncoding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringConverter_Encoding(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QStringConverter::Encoding)
  
QStringConverter::Encoding a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringConverter_Encoding(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            const char* res = 
                
                // call static member function:
                QStringConverter::nameForEncoding(
              a1_cpp
    
            );
          
            // return type: const char*

            return RJSHelper::cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_char:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nameForEncoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QStringDecoder_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStringDecoder_Wrapper>("org.qcad", 1, 0, "QStringDecoder_Wrapper");
        qmlRegisterInterface<QStringDecoder_Wrapper>("QStringDecoder_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStringDecoder* t = new RJSType_QStringDecoder();
          global.setProperty("RJSType_QStringDecoder", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStringDecoder::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStringDecoder_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStringDecoder_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStringDecoder_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStringDecoder_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QStringDecoder_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QStringDecoder_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QStringDecoder_WrapperSingleton * s = new QStringDecoder_WrapperSingleton(handler);
        engine->globalObject().setProperty("QStringDecoder_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QStringDecoder.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      qDebug() << "Evaluating file: " << fileName;
      QJSValue result = engine->evaluate(contents, fileName);
      if (result.isError()) {
          qWarning()
              << "Uncaught exception at line"
              << result.property("lineNumber").toInt()
              << ":" << result.toString();
      }
    }
  
    /*
    // special constructor used as prototype:
    QStringDecoder_Wrapper::QStringDecoder_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStringDecoder_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStringDecoder_Wrapper::QStringDecoder_Wrapper(RJSApi& h, QStringDecoder* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStringDecoder_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStringDecoder_Wrapper"));
              //setObjectName("QStringDecoder_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStringDecoder_Wrapper::~QStringDecoder_Wrapper() {
            //RDebug::decCounter(QString("QStringDecoder_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStringDecoder_Wrapper"));

            //qDebug() << "QStringDecoder_Wrapper::~QStringDecoder_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStringDecoder";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStringDecoder_Wrapper::initConnections() {

          //setObjectName("QStringDecoder_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
          }
        }
      

  // constructors:
  
    // Class: QStringDecoder
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStringDecoder_Wrapper::QStringDecoder_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStringDecoder_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStringDecoder_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStringConverter_Encoding(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: encoding (QStringConverter::Encoding)
  
QStringConverter::Encoding a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringConverter_Encoding(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStringDecoder(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStringDecoder(
                a1_cpp
    
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QStringDecoder(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }

                    // no constructor without arguments defined
                    // allow constructor for prototype objects without args:
                    if (
                      a1.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QStringDecoder";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStringDecoder
    // Function: isValid
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringDecoder_Wrapper::isValid
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringDecoder* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringDecoder
    // Function: resetState
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringDecoder_Wrapper::resetState
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringDecoder* w = getWrapped();
                
                w->resetState(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringDecoder
    // Function: hasError
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringDecoder_Wrapper::hasError
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringDecoder* w = getWrapped();
                bool res = 
                    
                w->hasError(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringDecoder
    // Function: name
    // Source: QStringConverter
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QStringDecoder_Wrapper::name
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringDecoder* w = getWrapped();
                const char* res = 
                    
                w->name(
                  
                );
              
            // return type: const char*

            return RJSHelper::cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_char:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringDecoder
    // Function: decode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStringDecoder_Wrapper::decode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ba (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringDecoder* w = getWrapped();
                QString res = 
                    
                w->decode(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for decode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStringDecoder
    // Function: requiredSpace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStringDecoder_Wrapper::requiredSpace
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: inputLength (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStringDecoder* w = getWrapped();
                qsizetype res = 
                    
                w->requiredSpace(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for requiredSpace";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qstringconverter_wrapper.cpp"
  
