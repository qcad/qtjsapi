
  // Auto generated
  
  // include header:
  //#include "qqmlenginewrapper.h"
  //#include "header_cpp.h"
  
    #include "qqmlengine_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QQmlEngine*> QQmlEngine_Wrapper::basecasters_QQmlEngine;
    
    // static functions implementation in singleton wrapper:
    
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_CONFIG(library)

#if QT_DEPRECATED_SINCE(6,4)

#endif

#endif

    void QQmlEngine_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QQmlEngine_Wrapper>("org.qcad", 1, 0, "QQmlEngine_Wrapper");
        qmlRegisterInterface<QQmlEngine_Wrapper>("QQmlEngine_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QQmlEngine* t = new RJSType_QQmlEngine();
          global.setProperty("RJSType_QQmlEngine", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QQmlEngine::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QQmlEngine_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QQmlEngine_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QQmlEngine_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QQmlEngine_BaseJs", mob);
      
      QString fileName = ":generator/js/QQmlEngine.js";
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
    QQmlEngine_Wrapper::QQmlEngine_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QQmlEngine_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QQmlEngine_Wrapper::QQmlEngine_Wrapper(RJSApi& h, QQmlEngine* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QQmlEngine_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QQmlEngine_Wrapper"));
              //setObjectName("QQmlEngine_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QQmlEngine_Wrapper::~QQmlEngine_Wrapper() {
            //RDebug::decCounter(QString("QQmlEngine_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QQmlEngine_Wrapper"));

            //qDebug() << "QQmlEngine_Wrapper::~QQmlEngine_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QQmlEngine";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QQmlEngine_Wrapper::initConnections() {

          //setObjectName("QQmlEngine_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(uiLanguageChanged()), 
    this, 
    SLOT(uiLanguageChangedEmitter())
  );

          }
        }
      

  // constructors:
  
    // Class: QQmlEngine
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QQmlEngine_Wrapper::QQmlEngine_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QQmlEngine_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QQmlEngine_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QObject)
  

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

        
            wrapped = new QQmlEngine(
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
                  

                  qWarning() << "no matching constructor variant found for QQmlEngine";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_CONFIG(library)

#if QT_DEPRECATED_SINCE(6,4)

#endif

#endif


    // non-static functions:
    
    // Class: QQmlEngine
    // Function: collectGarbage
    // Source: QJSEngine
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::collectGarbage
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
                QQmlEngine* w = getWrapped();
                
                w->collectGarbage(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for collectGarbage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: uiLanguage
    // Source: QJSEngine
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::uiLanguage
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
                QQmlEngine* w = getWrapped();
                QString res = 
                    
                w->uiLanguage(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for uiLanguage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: setUiLanguage
    // Source: QJSEngine
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::setUiLanguage
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
    
  // convert js parameter to cpp: language (QString)
  
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
                QQmlEngine* w = getWrapped();
                
                w->setUiLanguage(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUiLanguage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: uiLanguageChanged
    // Source: QJSEngine
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQmlEngine_Wrapper::uiLanguageChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit uiLanguageChanged(
                  
                );
              }
            
    // Class: QQmlEngine
    // Function: clearComponentCache
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::clearComponentCache
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
                QQmlEngine* w = getWrapped();
                
                w->clearComponentCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearComponentCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: trimComponentCache
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::trimComponentCache
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
                QQmlEngine* w = getWrapped();
                
                w->trimComponentCache(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for trimComponentCache";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: clearSingletons
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::clearSingletons
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
                QQmlEngine* w = getWrapped();
                
                w->clearSingletons(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearSingletons";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: importPathList
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::importPathList
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
                QQmlEngine* w = getWrapped();
                QStringList res = 
                    
                w->importPathList(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for importPathList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: setImportPathList
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::setImportPathList
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
    
  // convert js parameter to cpp: paths (QStringList)
  
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
                QQmlEngine* w = getWrapped();
                
                w->setImportPathList(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setImportPathList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: addImportPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::addImportPath
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
                QQmlEngine* w = getWrapped();
                
                w->addImportPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addImportPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: pluginPathList
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::pluginPathList
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
                QQmlEngine* w = getWrapped();
                QStringList res = 
                    
                w->pluginPathList(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pluginPathList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: setPluginPathList
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::setPluginPathList
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
    
  // convert js parameter to cpp: paths (QStringList)
  
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
                QQmlEngine* w = getWrapped();
                
                w->setPluginPathList(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPluginPathList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: addPluginPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::addPluginPath
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
                QQmlEngine* w = getWrapped();
                
                w->addPluginPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPluginPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,0)

    // Class: QQmlEngine
    // Function: addNamedBundle
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::addNamedBundle
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
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp:  (QString)
  
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
                QQmlEngine* w = getWrapped();
                bool res = 
                    
                w->addNamedBundle(
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

                  qWarning() << "no matching function variant found for addNamedBundle";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

#if QT_CONFIG(library)

#if QT_DEPRECATED_SINCE(6,4)

#endif

#endif

    // Class: QQmlEngine
    // Function: baseUrl
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::baseUrl
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
                QQmlEngine* w = getWrapped();
                QUrl res = 
                    
                w->baseUrl(
                  
                );
              
            // return type: QUrl

            return RJSHelper::cpp2js_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for baseUrl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: setBaseUrl
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::setBaseUrl
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQmlEngine* w = getWrapped();
                
                w->setBaseUrl(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBaseUrl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: outputWarningsToStandardError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::outputWarningsToStandardError
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
                QQmlEngine* w = getWrapped();
                bool res = 
                    
                w->outputWarningsToStandardError(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for outputWarningsToStandardError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: setOutputWarningsToStandardError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::setOutputWarningsToStandardError
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QQmlEngine* w = getWrapped();
                
                w->setOutputWarningsToStandardError(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOutputWarningsToStandardError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQmlEngine
    // Function: retranslate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQmlEngine_Wrapper::retranslate
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
                QQmlEngine* w = getWrapped();
                
                w->retranslate(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for retranslate";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
