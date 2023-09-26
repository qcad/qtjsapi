
  // Auto generated
  
  // include header:
  //#include "qlocalewrapper.h"
  //#include "header_cpp.h"
  
    #include "qlocale_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QLocale*> QLocale_Wrapper::basecasters_QLocale;
    
    // static functions implementation in singleton wrapper:
    
#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_CONFIG(datestring)

#endif

    // Class: QLocale
    // Function: languageToCode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::languageToCode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Language(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: language (QLocale::Language)
  
QLocale::Language a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Language(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QLocale::languageToCode(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for languageToCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: territoryToCode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::territoryToCode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Territory(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: territory (QLocale::Territory)
  
QLocale::Territory a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Territory(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QLocale::territoryToCode(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for territoryToCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: countryToCode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::countryToCode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Country(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: country (QLocale::Country)
  
QLocale::Country a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Country(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QLocale::countryToCode(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for countryToCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QLocale
    // Function: scriptToCode
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::scriptToCode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Script(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: script (QLocale::Script)
  
QLocale::Script a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Script(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QLocale::scriptToCode(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scriptToCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: languageToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::languageToString
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Language(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: language (QLocale::Language)
  
QLocale::Language a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Language(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QLocale::languageToString(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for languageToString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: territoryToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::territoryToString
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Territory(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: territory (QLocale::Territory)
  
QLocale::Territory a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Territory(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QLocale::territoryToString(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for territoryToString";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: countryToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::countryToString
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Country(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: country (QLocale::Country)
  
QLocale::Country a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Country(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QLocale::countryToString(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for countryToString";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QLocale
    // Function: scriptToString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::scriptToString
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Script(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: script (QLocale::Script)
  
QLocale::Script a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Script(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QLocale::scriptToString(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scriptToString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: setDefault
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::setDefault
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locale (QLocale)
  
QLocale a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QLocale::setDefault(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefault";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: c
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::c
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QLocale res = 
                
                // call static member function:
                QLocale::c(
              
            );
          
            // return type: QLocale

            return RJSHelper::cpp2js_QLocale(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for c";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: system
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::system
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QLocale res = 
                
                // call static member function:
                QLocale::system(
              
            );
          
            // return type: QLocale

            return RJSHelper::cpp2js_QLocale(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for system";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: matchingLocales
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::matchingLocales
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
        RJSHelper::is_QLocale_Language(handler, a1
  )

   && RJSHelper::is_QLocale_Script(handler, a2
  )

   && RJSHelper::is_QLocale_Territory(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: language (QLocale::Language)
  
QLocale::Language a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Language(handler, a1);
        
  // convert js parameter to cpp: script (QLocale::Script)
  
QLocale::Script a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QLocale_Script(handler, a2);
        
  // convert js parameter to cpp: territory (QLocale::Territory)
  
QLocale::Territory a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QLocale_Territory(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QLocale> res = 
                
                // call static member function:
                QLocale::matchingLocales(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QList<QLocale>

            return RJSHelper::cpp2js_QList_QLocale(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for matchingLocales";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: countriesForLanguage
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_WrapperSingleton::countriesForLanguage
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_Language(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lang (QLocale::Language)
  
QLocale::Language a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_Language(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QLocale::Country> res = 
                
                // call static member function:
                QLocale::countriesForLanguage(
              a1_cpp
    
            );
          
            // return type: QList<QLocale::Country>

            return RJSHelper::cpp2js_QList_QLocale_Country(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for countriesForLanguage";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    void QLocale_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QLocale_Wrapper>("org.qcad", 1, 0, "QLocale_Wrapper");
        qmlRegisterInterface<QLocale_Wrapper>("QLocale_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QLocale* t = new RJSType_QLocale();
          global.setProperty("RJSType_QLocale", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QLocale::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QLocale_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QLocale_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QLocale_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QLocale_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QLocale_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QLocale_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QLocale_WrapperSingleton * s = new QLocale_WrapperSingleton(handler);
        engine->globalObject().setProperty("QLocale_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QLocale.js";
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
    QLocale_Wrapper::QLocale_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QLocale_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QLocale_Wrapper::QLocale_Wrapper(RJSApi& h, QLocale* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QLocale_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QLocale_Wrapper"));
              //setObjectName("QLocale_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QLocale_Wrapper::~QLocale_Wrapper() {
            //RDebug::decCounter(QString("QLocale_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QLocale_Wrapper"));

            //qDebug() << "QLocale_Wrapper::~QLocale_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QLocale";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QLocale_Wrapper::initConnections() {

          //setObjectName("QLocale_Wrapper");

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
  
    // Class: QLocale
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QLocale_Wrapper::QLocale_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QLocale_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QLocale_Wrapper"));
                
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
    
        // construct wrapper:

        
            wrapped = new QLocale(
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

        
            wrapped = new QLocale(
                
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
                  

                  qWarning() << "no matching constructor variant found for QLocale";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_CONFIG(datestring)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif


    // non-static functions:
    
    // Class: QLocale
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QLocale)
  
QLocale a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: language
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::language
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
                QLocale* w = getWrapped();
                QLocale::Language res = 
                    
                w->language(
                  
                );
              
            // return type: QLocale::Language

            return RJSHelper::cpp2js_QLocale_Language(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for language";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: script
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::script
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
                QLocale* w = getWrapped();
                QLocale::Script res = 
                    
                w->script(
                  
                );
              
            // return type: QLocale::Script

            return RJSHelper::cpp2js_QLocale_Script(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for script";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: territory
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::territory
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
                QLocale* w = getWrapped();
                QLocale::Territory res = 
                    
                w->territory(
                  
                );
              
            // return type: QLocale::Territory

            return RJSHelper::cpp2js_QLocale_Territory(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for territory";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: country
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::country
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
                QLocale* w = getWrapped();
                QLocale::Country res = 
                    
                w->country(
                  
                );
              
            // return type: QLocale::Country

            return RJSHelper::cpp2js_QLocale_Country(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for country";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QLocale
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::name
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->name(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: bcp47Name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::bcp47Name
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->bcp47Name(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bcp47Name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: nativeLanguageName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::nativeLanguageName
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->nativeLanguageName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nativeLanguageName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: nativeTerritoryName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::nativeTerritoryName
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->nativeTerritoryName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nativeTerritoryName";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,6)

    // Class: QLocale
    // Function: nativeCountryName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::nativeCountryName
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->nativeCountryName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nativeCountryName";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

#if QT_STRINGVIEW_LEVEL<2

    // Class: QLocale
    // Function: toShort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toShort
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                short res = 
                    
                w->toShort(
                  a1_cpp
    
                );
              
            // return type: short

            return RJSHelper::cpp2js_short(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toShort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toUShort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toUShort
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                ushort res = 
                    
                w->toUShort(
                  a1_cpp
    
                );
              
            // return type: ushort

            return RJSHelper::cpp2js_ushort(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toUShort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toInt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toInt
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                int res = 
                    
                w->toInt(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toInt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toUInt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toUInt
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                uint res = 
                    
                w->toUInt(
                  a1_cpp
    
                );
              
            // return type: uint

            return RJSHelper::cpp2js_uint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toUInt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toLong
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toLong
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                long res = 
                    
                w->toLong(
                  a1_cpp
    
                );
              
            // return type: long

            return RJSHelper::cpp2js_long(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toLong";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toULong
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toULong
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                ulong res = 
                    
                w->toULong(
                  a1_cpp
    
                );
              
            // return type: ulong

            return RJSHelper::cpp2js_ulong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toULong";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toLongLong
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toLongLong
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                qlonglong res = 
                    
                w->toLongLong(
                  a1_cpp
    
                );
              
            // return type: qlonglong

            return RJSHelper::cpp2js_qlonglong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toLongLong";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toULongLong
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toULongLong
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                qulonglong res = 
                    
                w->toULongLong(
                  a1_cpp
    
                );
              
            // return type: qulonglong

            return RJSHelper::cpp2js_qulonglong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toULongLong";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toFloat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toFloat
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                float res = 
                    
                w->toFloat(
                  a1_cpp
    
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFloat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toDouble
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toDouble
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QLocale* w = getWrapped();
                double res = 
                    
                w->toDouble(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toDouble";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QLocale
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toString
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_char(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: format (char)
  
char a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 'g';
          }
          else {
            a2_cpp = RJSHelper::js2cpp_char(handler, a2);
          }
        
  // convert js parameter to cpp: precision (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 6;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_char(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: format (char)
  
char a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 'g';
          }
          else {
            a2_cpp = RJSHelper::js2cpp_char(handler, a2);
          }
        
  // convert js parameter to cpp: precision (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 6;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_QDate(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
  )

   && RJSHelper::is_QCalendar(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: date (QDate)
  
QDate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDate(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
        
  // convert js parameter to cpp: cal (QCalendar)
  
QCalendar a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QCalendar(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
  )

   && RJSHelper::is_QCalendar(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dateTime (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
        
  // convert js parameter to cpp: cal (QCalendar)
  
QCalendar a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QCalendar(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_QDate(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: date (QDate)
  
QDate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDate(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_QTime(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: time (QTime)
  
QTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTime(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dateTime (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_QDate(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: date (QDate)
  
QDate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDate(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_QTime(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: time (QTime)
  
QTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTime(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dateTime (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
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

      // check parameter types:
      if (
        RJSHelper::is_qlonglong(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qlonglong)
  
qlonglong a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qlonglong(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_qulonglong(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qulonglong)
  
qulonglong a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qulonglong(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_long(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (long)
  
long a1_cpp;

      a1_cpp = RJSHelper::js2cpp_long(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_ulong(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (ulong)
  
ulong a1_cpp;

      a1_cpp = RJSHelper::js2cpp_ulong(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_short(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (short)
  
short a1_cpp;

      a1_cpp = RJSHelper::js2cpp_short(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_ushort(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (ushort)
  
ushort a1_cpp;

      a1_cpp = RJSHelper::js2cpp_ushort(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (int)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_uint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (uint)
  
uint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_uint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toString";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

#endif

    // Class: QLocale
    // Function: dateFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::dateFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_FormatType(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QLocale::LongFormat;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a1);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->dateFormat(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dateFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: timeFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::timeFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_FormatType(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QLocale::LongFormat;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a1);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->timeFormat(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for timeFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: dateTimeFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::dateTimeFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_FormatType(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QLocale::LongFormat;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a1);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->dateTimeFormat(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dateTimeFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(datestring)

    // Class: QLocale
    // Function: toDate
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toDate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
  )

   && RJSHelper::is_QCalendar(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
        
  // convert js parameter to cpp: cal (QCalendar)
  
QCalendar a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QCalendar(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QDate res = 
                    
                w->toDate(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QCalendar(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: cal (QCalendar)
  
QCalendar a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QCalendar(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QDate res = 
                    
                w->toDate(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp:  (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QDate res = 
                    
                w->toDate(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
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
                QLocale* w = getWrapped();
                QDate res = 
                    
                w->toDate(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QDate

            return RJSHelper::cpp2js_QDate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toDate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toTime
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toTime
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

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp:  (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QTime res = 
                    
                w->toTime(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
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
                QLocale* w = getWrapped();
                QTime res = 
                    
                w->toTime(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QTime

            return RJSHelper::cpp2js_QTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toDateTime
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toDateTime
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
  )

   && RJSHelper::is_QCalendar(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
        
  // convert js parameter to cpp: cal (QCalendar)
  
QCalendar a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QCalendar(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QDateTime res = 
                    
                w->toDateTime(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QCalendar(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: cal (QCalendar)
  
QCalendar a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QCalendar(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                QDateTime res = 
                    
                w->toDateTime(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QDateTime res = 
                    
                w->toDateTime(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: string (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QString)
  
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
                QLocale* w = getWrapped();
                QDateTime res = 
                    
                w->toDateTime(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toDateTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QLocale
    // Function: decimalPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::decimalPoint
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->decimalPoint(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for decimalPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: groupSeparator
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::groupSeparator
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->groupSeparator(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for groupSeparator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: percent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::percent
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->percent(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for percent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: zeroDigit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::zeroDigit
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->zeroDigit(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for zeroDigit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: negativeSign
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::negativeSign
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->negativeSign(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for negativeSign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: positiveSign
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::positiveSign
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->positiveSign(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for positiveSign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: exponential
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::exponential
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->exponential(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exponential";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: monthName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::monthName
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->monthName(
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

                  qWarning() << "no matching function variant found for monthName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: standaloneMonthName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::standaloneMonthName
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->standaloneMonthName(
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

                  qWarning() << "no matching function variant found for standaloneMonthName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: dayName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::dayName
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->dayName(
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

                  qWarning() << "no matching function variant found for dayName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: standaloneDayName
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::standaloneDayName
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QLocale_FormatType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: format (QLocale::FormatType)
  
QLocale::FormatType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::LongFormat;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_FormatType(handler, a2);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->standaloneDayName(
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

                  qWarning() << "no matching function variant found for standaloneDayName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: firstDayOfWeek
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::firstDayOfWeek
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
                QLocale* w = getWrapped();
                Qt::DayOfWeek res = 
                    
                w->firstDayOfWeek(
                  
                );
              
            // return type: Qt::DayOfWeek

            return RJSHelper::cpp2js_Qt_DayOfWeek(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for firstDayOfWeek";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: weekdays
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::weekdays
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
                QLocale* w = getWrapped();
                QList<Qt::DayOfWeek> res = 
                    
                w->weekdays(
                  
                );
              
            // return type: QList<Qt::DayOfWeek>

            return RJSHelper::cpp2js_QList_Qt_DayOfWeek(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for weekdays";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: amText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::amText
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->amText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for amText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: pmText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::pmText
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->pmText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pmText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: measurementSystem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::measurementSystem
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
                QLocale* w = getWrapped();
                QLocale::MeasurementSystem res = 
                    
                w->measurementSystem(
                  
                );
              
            // return type: QLocale::MeasurementSystem

            return RJSHelper::cpp2js_QLocale_MeasurementSystem(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for measurementSystem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: collation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::collation
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
                QLocale* w = getWrapped();
                QLocale res = 
                    
                w->collation(
                  
                );
              
            // return type: QLocale

            return RJSHelper::cpp2js_QLocale(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for collation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: textDirection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::textDirection
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
                QLocale* w = getWrapped();
                Qt::LayoutDirection res = 
                    
                w->textDirection(
                  
                );
              
            // return type: Qt::LayoutDirection

            return RJSHelper::cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toUpper
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toUpper
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
    
  // convert js parameter to cpp: str (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toUpper(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toUpper";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toLower
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toLower
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
    
  // convert js parameter to cpp: str (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toLower(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toLower";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: currencySymbol
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::currencySymbol
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_CurrencySymbolFormat(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QLocale::CurrencySymbolFormat)
  
QLocale::CurrencySymbolFormat a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QLocale::CurrencySymbol;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QLocale_CurrencySymbolFormat(handler, a1);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->currencySymbol(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currencySymbol";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: toCurrencyString
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::toCurrencyString
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: symbol (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: precision (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toCurrencyString(
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

      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: symbol (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: precision (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toCurrencyString(
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

      // check parameter types:
      if (
        RJSHelper::is_qlonglong(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (qlonglong)
  
qlonglong a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qlonglong(handler, a1);
        
  // convert js parameter to cpp: symbol (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toCurrencyString(
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

      // check parameter types:
      if (
        RJSHelper::is_qulonglong(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (qulonglong)
  
qulonglong a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qulonglong(handler, a1);
        
  // convert js parameter to cpp: symbol (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toCurrencyString(
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

      // check parameter types:
      if (
        RJSHelper::is_short(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (short)
  
short a1_cpp;

      a1_cpp = RJSHelper::js2cpp_short(handler, a1);
        
  // convert js parameter to cpp: symbol (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toCurrencyString(
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

      // check parameter types:
      if (
        RJSHelper::is_ushort(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (ushort)
  
ushort a1_cpp;

      a1_cpp = RJSHelper::js2cpp_ushort(handler, a1);
        
  // convert js parameter to cpp: symbol (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toCurrencyString(
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

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: symbol (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toCurrencyString(
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

      // check parameter types:
      if (
        RJSHelper::is_uint(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (uint)
  
uint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_uint(handler, a1);
        
  // convert js parameter to cpp: symbol (QString)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->toCurrencyString(
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

                  qWarning() << "no matching function variant found for toCurrencyString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: formattedDataSize
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::formattedDataSize
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

   && RJSHelper::is_QLocale_DataSizeFormats(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bytes (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        
  // convert js parameter to cpp: precision (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 2;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        
  // convert js parameter to cpp: format (QLocale::DataSizeFormats)
  
QLocale::DataSizeFormats a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QLocale::DataSizeIecFormat;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QLocale_DataSizeFormats(handler, a3);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->formattedDataSize(
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

                  qWarning() << "no matching function variant found for formattedDataSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: uiLanguages
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::uiLanguages
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
                QLocale* w = getWrapped();
                QStringList res = 
                    
                w->uiLanguages(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for uiLanguages";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

#if QT_DEPRECATED_SINCE(6,6)

#endif

    // Class: QLocale
    // Function: setNumberOptions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::setNumberOptions
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale_NumberOptions(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QLocale::NumberOptions)
  
QLocale::NumberOptions a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale_NumberOptions(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLocale* w = getWrapped();
                
                w->setNumberOptions(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNumberOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: numberOptions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::numberOptions
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
                QLocale* w = getWrapped();
                QLocale::NumberOptions res = 
                    
                w->numberOptions(
                  
                );
              
            // return type: QLocale::NumberOptions

            return RJSHelper::cpp2js_QLocale_NumberOptions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for numberOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: quoteString
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::quoteString
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

   && RJSHelper::is_QLocale_QuotationStyle(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: str (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: style (QLocale::QuotationStyle)
  
QLocale::QuotationStyle a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QLocale::StandardQuotation;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QLocale_QuotationStyle(handler, a2);
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->quoteString(
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

                  qWarning() << "no matching function variant found for quoteString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLocale
    // Function: createSeparatedList
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLocale_Wrapper::createSeparatedList
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: strl (QStringList)
  
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
                QLocale* w = getWrapped();
                QString res = 
                    
                w->createSeparatedList(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createSeparatedList";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  