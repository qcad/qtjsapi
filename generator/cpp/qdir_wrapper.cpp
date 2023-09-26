
  // Auto generated
  
  // include header:
  //#include "qdirwrapper.h"
  //#include "header_cpp.h"
  
    #include "qdir_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QDir*> QDir_Wrapper::basecasters_QDir;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QDir
    // Function: setSearchPaths
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::setSearchPaths
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

   && RJSHelper::is_QStringList(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: prefix (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: searchPaths (QStringList)
  
QStringList a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QStringList(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QDir::setSearchPaths(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSearchPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: addSearchPath
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::addSearchPath
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
    
  // convert js parameter to cpp: prefix (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: path (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QDir::addSearchPath(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addSearchPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: searchPaths
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::searchPaths
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
    
  // convert js parameter to cpp: prefix (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QDir::searchPaths(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for searchPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: toNativeSeparators
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::toNativeSeparators
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
    
  // convert js parameter to cpp: pathName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QDir::toNativeSeparators(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toNativeSeparators";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: fromNativeSeparators
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::fromNativeSeparators
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
    
  // convert js parameter to cpp: pathName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QDir::fromNativeSeparators(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromNativeSeparators";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: nameFiltersFromString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::nameFiltersFromString
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
    
  // convert js parameter to cpp: nameFilter (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QDir::nameFiltersFromString(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nameFiltersFromString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: isRelativePath
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::isRelativePath
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
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QDir::isRelativePath(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRelativePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: isAbsolutePath
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::isAbsolutePath
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
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QDir::isAbsolutePath(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAbsolutePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: drives
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::drives
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QFileInfoList res = 
                
                // call static member function:
                QDir::drives(
              
            );
          
            // return type: QFileInfoList

            return RJSHelper::cpp2js_QFileInfoList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for drives";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: listSeparator
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::listSeparator
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QChar res = 
                
                // call static member function:
                QDir::listSeparator(
              
            );
          
            // return type: QChar

            return RJSHelper::cpp2js_QChar(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for listSeparator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: separator
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::separator
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QChar res = 
                
                // call static member function:
                QDir::separator(
              
            );
          
            // return type: QChar

            return RJSHelper::cpp2js_QChar(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for separator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: setCurrent
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::setCurrent
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
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QDir::setCurrent(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setCurrent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: current
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::current
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QDir res = 
                
                // call static member function:
                QDir::current(
              
            );
          
            // return type: QDir

            return RJSHelper::cpp2js_QDir(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for current";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: currentPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::currentPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QDir::currentPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: home
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::home
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QDir res = 
                
                // call static member function:
                QDir::home(
              
            );
          
            // return type: QDir

            return RJSHelper::cpp2js_QDir(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for home";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: homePath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::homePath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QDir::homePath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for homePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: root
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::root
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QDir res = 
                
                // call static member function:
                QDir::root(
              
            );
          
            // return type: QDir

            return RJSHelper::cpp2js_QDir(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for root";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: rootPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::rootPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QDir::rootPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rootPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: temp
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::temp
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QDir res = 
                
                // call static member function:
                QDir::temp(
              
            );
          
            // return type: QDir

            return RJSHelper::cpp2js_QDir(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for temp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: tempPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::tempPath
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QDir::tempPath(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tempPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(regularexpression)

    // Class: QDir
    // Function: match
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::match
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filters (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: fileName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QDir::match(
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

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filter (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: fileName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QDir::match(
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

                  qWarning() << "no matching function variant found for match";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QDir
    // Function: cleanPath
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_WrapperSingleton::cleanPath
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
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QDir::cleanPath(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cleanPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QDir_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QDir_Wrapper>("org.qcad", 1, 0, "QDir_Wrapper");
        qmlRegisterInterface<QDir_Wrapper>("QDir_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QDir* t = new RJSType_QDir();
          global.setProperty("RJSType_QDir", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QDir::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QDir_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QDir_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QDir_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QDir_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QDir_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QDir_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QDir_WrapperSingleton * s = new QDir_WrapperSingleton(handler);
        engine->globalObject().setProperty("QDir_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QDir.js";
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
    QDir_Wrapper::QDir_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QDir_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QDir_Wrapper::QDir_Wrapper(RJSApi& h, QDir* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QDir_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QDir_Wrapper"));
              //setObjectName("QDir_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QDir_Wrapper::~QDir_Wrapper() {
            //RDebug::decCounter(QString("QDir_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QDir_Wrapper"));

            //qDebug() << "QDir_Wrapper::~QDir_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QDir";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QDir_Wrapper::initConnections() {

          //setObjectName("QDir_Wrapper");

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
  
    // Class: QDir
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QDir_Wrapper::QDir_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QDir_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QDir_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QDir_SortFlags(handler, a3
    , true
  
  )

   && RJSHelper::is_QDir_Filters(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilter (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: sort (QDir::SortFlags)
  
QDir::SortFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QDir::SortFlags(QDir::Name|QDir::IgnoreCase);
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QDir_SortFlags(handler, a3);
          }
        
  // convert js parameter to cpp: filter (QDir::Filters)
  
QDir::Filters a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QDir::AllEntries;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QDir(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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
        RJSHelper::is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QString();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QDir(
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
   && a2.isUndefined()
   && a3.isUndefined()
   && a4.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QDir";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_CONFIG(regularexpression)

#endif


    // non-static functions:
    
    // Class: QDir
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDir(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QDir)
  
QDir a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDir(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDir* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: setPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::setPath
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
    
  // convert js parameter to cpp: path (QString)
  
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
                QDir* w = getWrapped();
                
                w->setPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: path
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::path
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
                QDir* w = getWrapped();
                QString res = 
                    
                w->path(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for path";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: absolutePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::absolutePath
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
                QDir* w = getWrapped();
                QString res = 
                    
                w->absolutePath(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for absolutePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: canonicalPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::canonicalPath
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
                QDir* w = getWrapped();
                QString res = 
                    
                w->canonicalPath(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canonicalPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: dirName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::dirName
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
                QDir* w = getWrapped();
                QString res = 
                    
                w->dirName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dirName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: filePath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::filePath
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
                QDir* w = getWrapped();
                QString res = 
                    
                w->filePath(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for filePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: absoluteFilePath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::absoluteFilePath
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
                QDir* w = getWrapped();
                QString res = 
                    
                w->absoluteFilePath(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for absoluteFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: relativeFilePath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::relativeFilePath
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
                QDir* w = getWrapped();
                QString res = 
                    
                w->relativeFilePath(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for relativeFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: cd
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::cd
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
    
  // convert js parameter to cpp: dirName (QString)
  
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->cd(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: cdUp
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::cdUp
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->cdUp(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cdUp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: nameFilters
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::nameFilters
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
                QDir* w = getWrapped();
                QStringList res = 
                    
                w->nameFilters(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nameFilters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: setNameFilters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::setNameFilters
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
    
  // convert js parameter to cpp: nameFilters (QStringList)
  
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
                QDir* w = getWrapped();
                
                w->setNameFilters(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNameFilters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: filter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::filter
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
                QDir* w = getWrapped();
                QDir::Filters res = 
                    
                w->filter(
                  
                );
              
            // return type: QDir::Filters

            return RJSHelper::cpp2js_QDir_Filters(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for filter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: setFilter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::setFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDir_Filters(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filter (QDir::Filters)
  
QDir::Filters a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDir* w = getWrapped();
                
                w->setFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: sorting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::sorting
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
                QDir* w = getWrapped();
                QDir::SortFlags res = 
                    
                w->sorting(
                  
                );
              
            // return type: QDir::SortFlags

            return RJSHelper::cpp2js_QDir_SortFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sorting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: setSorting
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::setSorting
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDir_SortFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sort (QDir::SortFlags)
  
QDir::SortFlags a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDir_SortFlags(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QDir* w = getWrapped();
                
                w->setSorting(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSorting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: count
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::count
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
                QDir* w = getWrapped();
                uint res = 
                    
                w->count(
                  
                );
              
            // return type: uint

            return RJSHelper::cpp2js_uint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for count";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::isEmpty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDir_Filters(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filters (QDir::Filters)
  
QDir::Filters a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QDir::Filters(QDir::AllEntries|QDir::NoDotAndDotDot);
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a1);
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  a1_cpp
    
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
            
    // Class: QDir
    // Function: entryList
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::entryList
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QDir_Filters(handler, a2
    , true
  
  )

   && RJSHelper::is_QDir_SortFlags(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: nameFilters (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: filters (QDir::Filters)
  
QDir::Filters a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QDir::NoFilter;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a2);
          }
        
  // convert js parameter to cpp: sort (QDir::SortFlags)
  
QDir::SortFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QDir::NoSort;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QDir_SortFlags(handler, a3);
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
                QDir* w = getWrapped();
                QStringList res = 
                    
                w->entryList(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QDir_Filters(handler, a1
    , true
  
  )

   && RJSHelper::is_QDir_SortFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filters (QDir::Filters)
  
QDir::Filters a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QDir::NoFilter;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a1);
          }
        
  // convert js parameter to cpp: sort (QDir::SortFlags)
  
QDir::SortFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QDir::NoSort;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QDir_SortFlags(handler, a2);
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
                QDir* w = getWrapped();
                QStringList res = 
                    
                w->entryList(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for entryList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: entryInfoList
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::entryInfoList
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_QDir_Filters(handler, a2
    , true
  
  )

   && RJSHelper::is_QDir_SortFlags(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: nameFilters (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: filters (QDir::Filters)
  
QDir::Filters a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QDir::NoFilter;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a2);
          }
        
  // convert js parameter to cpp: sort (QDir::SortFlags)
  
QDir::SortFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QDir::NoSort;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QDir_SortFlags(handler, a3);
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
                QDir* w = getWrapped();
                QFileInfoList res = 
                    
                w->entryInfoList(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QFileInfoList

            return RJSHelper::cpp2js_QFileInfoList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QDir_Filters(handler, a1
    , true
  
  )

   && RJSHelper::is_QDir_SortFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filters (QDir::Filters)
  
QDir::Filters a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QDir::NoFilter;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a1);
          }
        
  // convert js parameter to cpp: sort (QDir::SortFlags)
  
QDir::SortFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QDir::NoSort;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QDir_SortFlags(handler, a2);
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
                QDir* w = getWrapped();
                QFileInfoList res = 
                    
                w->entryInfoList(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QFileInfoList

            return RJSHelper::cpp2js_QFileInfoList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for entryInfoList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: mkdir
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::mkdir
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
    
  // convert js parameter to cpp: dirName (QString)
  
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->mkdir(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mkdir";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: rmdir
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::rmdir
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
    
  // convert js parameter to cpp: dirName (QString)
  
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->rmdir(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rmdir";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: mkpath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::mkpath
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
    
  // convert js parameter to cpp: dirPath (QString)
  
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->mkpath(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mkpath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: rmpath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::rmpath
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
    
  // convert js parameter to cpp: dirPath (QString)
  
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->rmpath(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rmpath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: removeRecursively
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::removeRecursively
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->removeRecursively(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for removeRecursively";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: isReadable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::isReadable
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
                QDir* w = getWrapped();
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
            
    // Class: QDir
    // Function: exists
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::exists
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->exists(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->exists(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exists";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: isRoot
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::isRoot
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->isRoot(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRoot";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: isRelative
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::isRelative
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->isRelative(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRelative";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: isAbsolute
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::isAbsolute
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->isAbsolute(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAbsolute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: makeAbsolute
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::makeAbsolute
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->makeAbsolute(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for makeAbsolute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: remove
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::remove
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->remove(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for remove";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDir
    // Function: rename
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::rename
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
    
  // convert js parameter to cpp: oldName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: newName (QString)
  
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
                QDir* w = getWrapped();
                bool res = 
                    
                w->rename(
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

                  qWarning() << "no matching function variant found for rename";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(regularexpression)

#endif

    // Class: QDir
    // Function: refresh
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDir_Wrapper::refresh
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
                QDir* w = getWrapped();
                
                w->refresh(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for refresh";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  