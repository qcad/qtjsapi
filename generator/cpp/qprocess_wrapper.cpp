
  // Auto generated
  
  // include header:
  //#include "qprocesswrapper.h"
  //#include "header_cpp.h"
  
    #include "qprocess_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QProcessEnvironment*> QProcessEnvironment_Wrapper::basecasters_QProcessEnvironment;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QProcessEnvironment
    // Function: systemEnvironment
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_WrapperSingleton::systemEnvironment
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QProcessEnvironment res = 
                
                // call static member function:
                QProcessEnvironment::systemEnvironment(
              
            );
          
            // return type: QProcessEnvironment

            return RJSHelper::cpp2js_QProcessEnvironment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for systemEnvironment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QProcessEnvironment_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QProcessEnvironment_Wrapper>("org.qcad", 1, 0, "QProcessEnvironment_Wrapper");
        qmlRegisterInterface<QProcessEnvironment_Wrapper>("QProcessEnvironment_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QProcessEnvironment* t = new RJSType_QProcessEnvironment();
          global.setProperty("RJSType_QProcessEnvironment", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QProcessEnvironment::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QProcessEnvironment_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QProcessEnvironment_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QProcessEnvironment_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QProcessEnvironment_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QProcessEnvironment_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QProcessEnvironment_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QProcessEnvironment_WrapperSingleton * s = new QProcessEnvironment_WrapperSingleton(handler);
        engine->globalObject().setProperty("QProcessEnvironment_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QProcessEnvironment.js";
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
    QProcessEnvironment_Wrapper::QProcessEnvironment_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QProcessEnvironment_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QProcessEnvironment_Wrapper::QProcessEnvironment_Wrapper(RJSApi& h, QProcessEnvironment* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QProcessEnvironment_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QProcessEnvironment_Wrapper"));
              //setObjectName("QProcessEnvironment_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QProcessEnvironment_Wrapper::~QProcessEnvironment_Wrapper() {
            //RDebug::decCounter(QString("QProcessEnvironment_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QProcessEnvironment_Wrapper"));

            //qDebug() << "QProcessEnvironment_Wrapper::~QProcessEnvironment_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QProcessEnvironment";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QProcessEnvironment_Wrapper::initConnections() {

          //setObjectName("QProcessEnvironment_Wrapper");

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
  
    // Class: QProcessEnvironment
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QProcessEnvironment_Wrapper::QProcessEnvironment_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QProcessEnvironment_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QProcessEnvironment_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QProcessEnvironment_Initialization(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QProcessEnvironment::Initialization)
  
QProcessEnvironment::Initialization a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcessEnvironment_Initialization(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QProcessEnvironment(
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
        RJSHelper::is_QProcessEnvironment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QProcessEnvironment)
  
QProcessEnvironment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcessEnvironment(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QProcessEnvironment(
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

        
            wrapped = new QProcessEnvironment(
                
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
                  

                  qWarning() << "no matching constructor variant found for QProcessEnvironment";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QProcessEnvironment
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QProcessEnvironment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QProcessEnvironment)
  
QProcessEnvironment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcessEnvironment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcessEnvironment* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::isEmpty
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
                QProcessEnvironment* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: inheritsFromParent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::inheritsFromParent
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
                QProcessEnvironment* w = getWrapped();
                bool res = 
                    
                w->inheritsFromParent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inheritsFromParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::clear
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
                QProcessEnvironment* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::contains
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
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
                QProcessEnvironment* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contains";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: insert
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::insert
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcessEnvironment* w = getWrapped();
                
                w->insert(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QProcessEnvironment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: e (QProcessEnvironment)
  
QProcessEnvironment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcessEnvironment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcessEnvironment* w = getWrapped();
                
                w->insert(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: remove
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::remove
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
    
  // convert js parameter to cpp: name (QString)
  
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
                QProcessEnvironment* w = getWrapped();
                
                w->remove(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for remove";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::value
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: defaultValue (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcessEnvironment* w = getWrapped();
                QString res = 
                    
                w->value(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for value";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: toStringList
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::toStringList
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
                QProcessEnvironment* w = getWrapped();
                QStringList res = 
                    
                w->toStringList(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toStringList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcessEnvironment
    // Function: keys
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcessEnvironment_Wrapper::keys
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
                QProcessEnvironment* w = getWrapped();
                QStringList res = 
                    
                w->keys(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for keys";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qprocess_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QProcess*> QProcess_Wrapper::basecasters_QProcess;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QProcess
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QProcess_WrapperSingleton::tr
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceText (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp:  (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp:  (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QObject::tr(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tr";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_WIN)||defined(Q_CLANG_QDOC)

#endif

#if defined(Q_OS_UNIX)||defined(Q_CLANG_QDOC)

#endif

    // Class: QProcess
    // Function: systemEnvironment
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_WrapperSingleton::systemEnvironment
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QProcess::systemEnvironment(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for systemEnvironment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: nullDevice
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_WrapperSingleton::nullDevice
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QProcess::nullDevice(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nullDevice";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif

    void QProcess_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QProcess_Wrapper>("org.qcad", 1, 0, "QProcess_Wrapper");
        qmlRegisterInterface<QProcess_Wrapper>("QProcess_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QProcess* t = new RJSType_QProcess();
          global.setProperty("RJSType_QProcess", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QProcess::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QProcess_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QProcess_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QProcess_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QProcess_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QProcess_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QProcess_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QProcess_WrapperSingleton * s = new QProcess_WrapperSingleton(handler);
        engine->globalObject().setProperty("QProcess_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QProcess.js";
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
    QProcess_Wrapper::QProcess_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QProcess_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QProcess_Wrapper::QProcess_Wrapper(RJSApi& h, QProcess* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QProcess_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QProcess_Wrapper"));
              //setObjectName("QProcess_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QProcess_Wrapper::~QProcess_Wrapper() {
            //RDebug::decCounter(QString("QProcess_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QProcess_Wrapper"));

            //qDebug() << "QProcess_Wrapper::~QProcess_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QProcess";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QProcess_Wrapper::initConnections() {

          //setObjectName("QProcess_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(readyRead()), 
    this, 
    SLOT(readyReadEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(channelReadyRead(int)), 
    this, 
    SLOT(channelReadyReadEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(bytesWritten(qint64)), 
    this, 
    SLOT(bytesWrittenEmitter(qint64))
  );

  connect(
    getWrapped(), 
    SIGNAL(channelBytesWritten(int, qint64)), 
    this, 
    SLOT(channelBytesWrittenEmitter(int, qint64))
  );

  connect(
    getWrapped(), 
    SIGNAL(aboutToClose()), 
    this, 
    SLOT(aboutToCloseEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(readChannelFinished()), 
    this, 
    SLOT(readChannelFinishedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(finished(int, QProcess::ExitStatus)), 
    this, 
    SLOT(finishedEmitter(int, QProcess::ExitStatus))
  );

  connect(
    getWrapped(), 
    SIGNAL(errorOccurred(QProcess::ProcessError)), 
    this, 
    SLOT(errorOccurredEmitter(QProcess::ProcessError))
  );

  connect(
    getWrapped(), 
    SIGNAL(readyReadStandardOutput()), 
    this, 
    SLOT(readyReadStandardOutputEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(readyReadStandardError()), 
    this, 
    SLOT(readyReadStandardErrorEmitter())
  );

              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

  // constructors:
  
    // Class: QProcess
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QProcess_Wrapper::QProcess_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QProcess_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QProcess_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QProcess(
                a1_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for QProcess";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if defined(Q_OS_WIN)||defined(Q_CLANG_QDOC)

#endif

#if defined(Q_OS_UNIX)||defined(Q_CLANG_QDOC)

#endif

#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif


    // non-static functions:
    
    // Class: QProcess
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::objectName
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
                QProcess* w = getWrapped();
                QString res = 
                    
                w->objectName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setObjectName
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
    
  // convert js parameter to cpp: name (QString)
  
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
                QProcess* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::isWidgetType
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->isWidgetType(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWidgetType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::isWindowType
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->isWindowType(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindowType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::signalsBlocked
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->signalsBlocked(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for signalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::blockSignals
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: b (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->blockSignals(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockSignals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::findChild
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_FindChildOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aName (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QString();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        
  // convert js parameter to cpp: options (Qt::FindChildOptions)
  
Qt::FindChildOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FindChildrenRecursively;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_FindChildOptions(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                QObject* res = 
                    
                w->findChild<QObject*>(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::children
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
                QProcess* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QObjectList* res =
                    &
                w->children(
                  
                );
              
            // return type: const QObjectList&

            return RJSHelper::cpp2js_QObjectList(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for children";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setParent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::installEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filterObj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::removeEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: obj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::dumpObjectTree
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
                QProcess* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

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
                QProcess* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::dumpObjectInfo
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
                QProcess* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

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
                QProcess* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::dynamicPropertyNames
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
                QProcess* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->dynamicPropertyNames(
                  
                );
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dynamicPropertyNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::parent
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
                QProcess* w = getWrapped();
                QObject* res = 
                    
                w->parent(
                  
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::deleteLater
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
                QProcess* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: openMode
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::openMode
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
                QProcess* w = getWrapped();
                QIODeviceBase::OpenMode res = 
                    
                w->openMode(
                  
                );
              
            // return type: QIODeviceBase::OpenMode

            return RJSHelper::cpp2js_QIODeviceBase_OpenMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for openMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setTextModeEnabled
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setTextModeEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextModeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: isTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::isTextModeEnabled
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->isTextModeEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTextModeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: isOpen
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::isOpen
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->isOpen(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isOpen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: isReadable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::isReadable
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->isReadable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isReadable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: isWritable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::isWritable
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->isWritable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWritable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: readChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::readChannelCount
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
                QProcess* w = getWrapped();
                int res = 
                    
                w->readChannelCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readChannelCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: writeChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::writeChannelCount
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
                QProcess* w = getWrapped();
                int res = 
                    
                w->writeChannelCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for writeChannelCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: currentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::currentReadChannel
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
                QProcess* w = getWrapped();
                int res = 
                    
                w->currentReadChannel(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setCurrentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setCurrentReadChannel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: channel (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setCurrentReadChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: currentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::currentWriteChannel
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
                QProcess* w = getWrapped();
                int res = 
                    
                w->currentWriteChannel(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentWriteChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setCurrentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setCurrentWriteChannel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: channel (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setCurrentWriteChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentWriteChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: pos
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::pos
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
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->pos(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: size
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::size
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
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->size(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: seek
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::seek
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->seek(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for seek";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: atEnd
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::atEnd
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->atEnd(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: reset
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::reset
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->reset(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: bytesAvailable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::bytesAvailable
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
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->bytesAvailable(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bytesAvailable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: readAll
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::readAll
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
                QProcess* w = getWrapped();
                QByteArray res = 
                    
                w->readAll(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: canReadLine
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::canReadLine
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->canReadLine(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canReadLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: startTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::startTransaction
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
                QProcess* w = getWrapped();
                
                w->startTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: commitTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::commitTransaction
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
                QProcess* w = getWrapped();
                
                w->commitTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commitTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: rollbackTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::rollbackTransaction
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
                QProcess* w = getWrapped();
                
                w->rollbackTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rollbackTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: isTransactionStarted
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::isTransactionStarted
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->isTransactionStarted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTransactionStarted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: write
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::write
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_qint64(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: len (qint64)
  
qint64 a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qint64(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QByteArray)
  
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
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for write";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: skip
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::skip
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: maxSize (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->skip(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for skip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: ungetChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::ungetChar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = RJSHelper::js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->ungetChar(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ungetChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: putChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::putChar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = RJSHelper::js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->putChar(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for putChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: errorString
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::errorString
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
                QProcess* w = getWrapped();
                QString res = 
                    
                w->errorString(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for errorString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: readyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::readyReadEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readyRead(
                  
                );
              }
            
    // Class: QProcess
    // Function: channelReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::channelReadyReadEmitter(
                int channel
              ) {
                // convert cpp parameters to js:
                
  // parameter: channel (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    channel
  );


                emit channelReadyRead(
                  a1_js
                );
              }
            
    // Class: QProcess
    // Function: bytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::bytesWrittenEmitter(
                qint64 bytes
              ) {
                // convert cpp parameters to js:
                
  // parameter: bytes (qint64)
  


  QJSValue a1_js = RJSHelper::cpp2js_qint64(
    handler, 
    bytes
  );


                emit bytesWritten(
                  a1_js
                );
              }
            
    // Class: QProcess
    // Function: channelBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::channelBytesWrittenEmitter(
                int channel, qint64 bytes
              ) {
                // convert cpp parameters to js:
                
  // parameter: channel (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    channel
  );

  // parameter: bytes (qint64)
  


  QJSValue a2_js = RJSHelper::cpp2js_qint64(
    handler, 
    bytes
  );


                emit channelBytesWritten(
                  a1_js, a2_js
                );
              }
            
    // Class: QProcess
    // Function: aboutToClose
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::aboutToCloseEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit aboutToClose(
                  
                );
              }
            
    // Class: QProcess
    // Function: readChannelFinished
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::readChannelFinishedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readChannelFinished(
                  
                );
              }
            
    // Class: QProcess
    // Function: start
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::start
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QStringList(handler, a2
    , true
  
  )

   && RJSHelper::is_QFile_OpenMode(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: program (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: arguments (QStringList)
  
QStringList a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = {};
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QStringList(handler, a2);
          }
        
  // convert js parameter to cpp: mode (QFile::OpenMode)
  
QFile::OpenMode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIODeviceBase::ReadWrite;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QFile_OpenMode(handler, a3);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->start(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QFile_OpenMode(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QFile::OpenMode)
  
QFile::OpenMode a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QIODeviceBase::ReadWrite;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QFile_OpenMode(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->start(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for start";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: startCommand
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::startCommand
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QFile_OpenMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: command (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QFile::OpenMode)
  
QFile::OpenMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QIODeviceBase::ReadWrite;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QFile_OpenMode(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->startCommand(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startCommand";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: startDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::startDetached
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->startDetached(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDetached";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: open
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::open
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFile_OpenMode(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QFile::OpenMode)
  
QFile::OpenMode a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QIODeviceBase::ReadWrite;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QFile_OpenMode(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->open(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for open";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: program
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::program
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
                QProcess* w = getWrapped();
                QString res = 
                    
                w->program(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for program";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setProgram
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setProgram
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
    
  // convert js parameter to cpp: program (QString)
  
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
                QProcess* w = getWrapped();
                
                w->setProgram(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgram";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: arguments
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::arguments
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
                QProcess* w = getWrapped();
                QStringList res = 
                    
                w->arguments(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for arguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setArguments
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setArguments
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: arguments (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setArguments(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setArguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: processChannelMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::processChannelMode
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
                QProcess* w = getWrapped();
                QProcess::ProcessChannelMode res = 
                    
                w->processChannelMode(
                  
                );
              
            // return type: QProcess::ProcessChannelMode

            return RJSHelper::cpp2js_QProcess_ProcessChannelMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for processChannelMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setProcessChannelMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setProcessChannelMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QProcess_ProcessChannelMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QProcess::ProcessChannelMode)
  
QProcess::ProcessChannelMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcess_ProcessChannelMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setProcessChannelMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProcessChannelMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: inputChannelMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::inputChannelMode
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
                QProcess* w = getWrapped();
                QProcess::InputChannelMode res = 
                    
                w->inputChannelMode(
                  
                );
              
            // return type: QProcess::InputChannelMode

            return RJSHelper::cpp2js_QProcess_InputChannelMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inputChannelMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setInputChannelMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setInputChannelMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QProcess_InputChannelMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QProcess::InputChannelMode)
  
QProcess::InputChannelMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcess_InputChannelMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setInputChannelMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInputChannelMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: readChannel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::readChannel
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
                QProcess* w = getWrapped();
                QProcess::ProcessChannel res = 
                    
                w->readChannel(
                  
                );
              
            // return type: QProcess::ProcessChannel

            return RJSHelper::cpp2js_QProcess_ProcessChannel(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setReadChannel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setReadChannel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QProcess_ProcessChannel(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: channel (QProcess::ProcessChannel)
  
QProcess::ProcessChannel a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcess_ProcessChannel(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setReadChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: closeReadChannel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::closeReadChannel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QProcess_ProcessChannel(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: channel (QProcess::ProcessChannel)
  
QProcess::ProcessChannel a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcess_ProcessChannel(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->closeReadChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for closeReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: closeWriteChannel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::closeWriteChannel
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
                QProcess* w = getWrapped();
                
                w->closeWriteChannel(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for closeWriteChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setStandardInputFile
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setStandardInputFile
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
    
  // convert js parameter to cpp: fileName (QString)
  
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
                QProcess* w = getWrapped();
                
                w->setStandardInputFile(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStandardInputFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setStandardOutputFile
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setStandardOutputFile
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QFile_OpenMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QFile::OpenMode)
  
QFile::OpenMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QIODeviceBase::Truncate;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QFile_OpenMode(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setStandardOutputFile(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStandardOutputFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setStandardErrorFile
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setStandardErrorFile
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QFile_OpenMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: mode (QFile::OpenMode)
  
QFile::OpenMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QIODeviceBase::Truncate;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QFile_OpenMode(handler, a2);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setStandardErrorFile(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStandardErrorFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setStandardOutputProcess
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setStandardOutputProcess
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QProcess_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: destination (QProcess)
  

          // pointer:
          QProcess*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcess_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setStandardOutputProcess(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStandardOutputProcess";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_WIN)||defined(Q_CLANG_QDOC)

    // Class: QProcess
    // Function: nativeArguments
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::nativeArguments
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
                QProcess* w = getWrapped();
                QString res = 
                    
                w->nativeArguments(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nativeArguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setNativeArguments
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setNativeArguments
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
    
  // convert js parameter to cpp: arguments (QString)
  
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
                QProcess* w = getWrapped();
                
                w->setNativeArguments(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNativeArguments";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

#if defined(Q_OS_UNIX)||defined(Q_CLANG_QDOC)

#endif

    // Class: QProcess
    // Function: workingDirectory
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::workingDirectory
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
                QProcess* w = getWrapped();
                QString res = 
                    
                w->workingDirectory(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for workingDirectory";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setWorkingDirectory
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setWorkingDirectory
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
    
  // convert js parameter to cpp: dir (QString)
  
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
                QProcess* w = getWrapped();
                
                w->setWorkingDirectory(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWorkingDirectory";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setEnvironment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setEnvironment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: environment (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setEnvironment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEnvironment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: environment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::environment
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
                QProcess* w = getWrapped();
                QStringList res = 
                    
                w->environment(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for environment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: setProcessEnvironment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::setProcessEnvironment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QProcessEnvironment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: environment (QProcessEnvironment)
  
QProcessEnvironment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QProcessEnvironment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                
                w->setProcessEnvironment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProcessEnvironment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: processEnvironment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::processEnvironment
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
                QProcess* w = getWrapped();
                QProcessEnvironment res = 
                    
                w->processEnvironment(
                  
                );
              
            // return type: QProcessEnvironment

            return RJSHelper::cpp2js_QProcessEnvironment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for processEnvironment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::error
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
                QProcess* w = getWrapped();
                QProcess::ProcessError res = 
                    
                w->error(
                  
                );
              
            // return type: QProcess::ProcessError

            return RJSHelper::cpp2js_QProcess_ProcessError(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: state
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::state
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
                QProcess* w = getWrapped();
                QProcess::ProcessState res = 
                    
                w->state(
                  
                );
              
            // return type: QProcess::ProcessState

            return RJSHelper::cpp2js_QProcess_ProcessState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for state";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: processId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::processId
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
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->processId(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for processId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: waitForStarted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::waitForStarted
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 30000;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->waitForStarted(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForStarted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: waitForReadyRead
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::waitForReadyRead
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 30000;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->waitForReadyRead(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForReadyRead";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: waitForBytesWritten
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::waitForBytesWritten
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 30000;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->waitForBytesWritten(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForBytesWritten";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: waitForFinished
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::waitForFinished
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msecs (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 30000;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QProcess* w = getWrapped();
                bool res = 
                    
                w->waitForFinished(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForFinished";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: readAllStandardOutput
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::readAllStandardOutput
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
                QProcess* w = getWrapped();
                QString res = 
                    
                w->readAllStandardOutput(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readAllStandardOutput";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: readAllStandardError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::readAllStandardError
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
                QProcess* w = getWrapped();
                QString res = 
                    
                w->readAllStandardError(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readAllStandardError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: exitCode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::exitCode
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
                QProcess* w = getWrapped();
                int res = 
                    
                w->exitCode(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exitCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: exitStatus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::exitStatus
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
                QProcess* w = getWrapped();
                QProcess::ExitStatus res = 
                    
                w->exitStatus(
                  
                );
              
            // return type: QProcess::ExitStatus

            return RJSHelper::cpp2js_QProcess_ExitStatus(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exitStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: bytesToWrite
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::bytesToWrite
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
                QProcess* w = getWrapped();
                qint64 res = 
                    
                w->bytesToWrite(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bytesToWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: isSequential
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::isSequential
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
                QProcess* w = getWrapped();
                bool res = 
                    
                w->isSequential(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSequential";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: close
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::close
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
                QProcess* w = getWrapped();
                
                w->close(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for close";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: terminate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::terminate
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
                QProcess* w = getWrapped();
                
                w->terminate(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for terminate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: kill
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QProcess_Wrapper::kill
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
                QProcess* w = getWrapped();
                
                w->kill(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for kill";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QProcess
    // Function: finished
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::finishedEmitter(
                int exitCode, QProcess::ExitStatus exitStatus
              ) {
                // convert cpp parameters to js:
                
  // parameter: exitCode (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    exitCode
  );

  // parameter: exitStatus (QProcess::ExitStatus)
  


  QJSValue a2_js = RJSHelper::cpp2js_QProcess_ExitStatus(
    handler, 
    exitStatus
  );


                emit finished(
                  a1_js, a2_js
                );
              }
            
    // Class: QProcess
    // Function: errorOccurred
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::errorOccurredEmitter(
                QProcess::ProcessError error
              ) {
                // convert cpp parameters to js:
                
  // parameter: error (QProcess::ProcessError)
  


  QJSValue a1_js = RJSHelper::cpp2js_QProcess_ProcessError(
    handler, 
    error
  );


                emit errorOccurred(
                  a1_js
                );
              }
            
    // Class: QProcess
    // Function: readyReadStandardOutput
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::readyReadStandardOutputEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readyReadStandardOutput(
                  
                );
              }
            
    // Class: QProcess
    // Function: readyReadStandardError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QProcess_Wrapper::readyReadStandardErrorEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readyReadStandardError(
                  
                );
              }
            
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
