
  // Auto generated
  
  // include header:
  //#include "qfileinfowrapper.h"
  //#include "header_cpp.h"
  
    #include "qfileinfo_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QFileInfo_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QFileInfo_Wrapper>("org.qcad", 1, 0, "QFileInfo_Wrapper");
        qmlRegisterInterface<QFileInfo_Wrapper>("QFileInfo_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QFileInfo_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QFileInfo_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QFileInfo_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QFileInfo_BaseJs", mob);
      
      QString fileName = ":generated/js/QFileInfo.js";
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
    QFileInfo_Wrapper::QFileInfo_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QFileInfo_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QFileInfo_Wrapper::QFileInfo_Wrapper(RJSApi& h, QFileInfo* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QFileInfo_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QFileInfo_Wrapper"));
              //setObjectName("QFileInfo_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QFileInfo_Wrapper::~QFileInfo_Wrapper() {
            //RDebug::decCounter(QString("QFileInfo_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QFileInfo_Wrapper"));

            //qDebug() << "QFileInfo_Wrapper::~QFileInfo_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QFileInfo";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QFileInfo_Wrapper::initConnections() {

          //setObjectName("QFileInfo_Wrapper");

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
  
    // Class: QFileInfo
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QFileInfo_Wrapper::QFileInfo_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QFileInfo_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QFileInfo_Wrapper"));
                
      // check parameter types:
      if (
        is_QDir(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dir (QDir)
  
QDir a1_cpp;

      a1_cpp = js2cpp_QDir(handler, a1);
        
  // convert js parameter to cpp: file (QString)
  
QString a2_cpp;

      a2_cpp = js2cpp_QString(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFileInfo(
                a1_cpp
    , a2_cpp
    
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
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: file (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFileInfo(
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
        is_QFile_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: file (QFile)
  

          // non copyable:
          QFile*
         a1_cpp;

      a1_cpp = js2cpp_QFile_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFileInfo(
                *a1_cpp
    
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

        
            wrapped = new QFileInfo(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QFileInfo";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QFileInfo
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFileInfo(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QFileInfo)
  
QFileInfo a1_cpp;

      a1_cpp = js2cpp_QFileInfo(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileInfo* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: setFile
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::setFile
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QDir(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dir (QDir)
  
QDir a1_cpp;

      a1_cpp = js2cpp_QDir(handler, a1);
        
  // convert js parameter to cpp: file (QString)
  
QString a2_cpp;

      a2_cpp = js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileInfo* w = getWrapped();
                
                w->setFile(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: file (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileInfo* w = getWrapped();
                
                w->setFile(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QFile_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: file (QFile)
  

          // non copyable:
          QFile*
         a1_cpp;

      a1_cpp = js2cpp_QFile_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileInfo* w = getWrapped();
                
                w->setFile(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: exists
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::exists
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: file (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->exists(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->exists(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exists";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: refresh
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::refresh
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
                QFileInfo* w = getWrapped();
                
                w->refresh(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for refresh";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: filePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::filePath
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->filePath(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for filePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: absoluteFilePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::absoluteFilePath
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->absoluteFilePath(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for absoluteFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: canonicalFilePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::canonicalFilePath
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->canonicalFilePath(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canonicalFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::fileName
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->fileName(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: baseName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::baseName
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->baseName(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for baseName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: completeBaseName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::completeBaseName
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->completeBaseName(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for completeBaseName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: suffix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::suffix
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->suffix(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for suffix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: bundleName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::bundleName
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->bundleName(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bundleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: completeSuffix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::completeSuffix
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->completeSuffix(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for completeSuffix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: path
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::path
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->path(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for path";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: absolutePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::absolutePath
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->absolutePath(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for absolutePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: canonicalPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::canonicalPath
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->canonicalPath(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canonicalPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: dir
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::dir
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
                QFileInfo* w = getWrapped();
                QDir res = 
                    
                w->dir(
                  
                );
              
            // return type: QDir

            return cpp2js_QDir(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dir";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: absoluteDir
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::absoluteDir
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
                QFileInfo* w = getWrapped();
                QDir res = 
                    
                w->absoluteDir(
                  
                );
              
            // return type: QDir

            return cpp2js_QDir(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for absoluteDir";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isReadable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isReadable
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isReadable(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isReadable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isWritable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isWritable
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isWritable(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWritable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isExecutable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isExecutable
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isExecutable(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isExecutable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isHidden
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isHidden
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isHidden(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isHidden";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isNativePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isNativePath
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isNativePath(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNativePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isRelative
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isRelative
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isRelative(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRelative";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isAbsolute
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isAbsolute
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isAbsolute(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAbsolute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: makeAbsolute
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::makeAbsolute
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->makeAbsolute(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for makeAbsolute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isFile
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isFile
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isFile(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isDir
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isDir
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isDir(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDir";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isSymLink
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isSymLink
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isSymLink(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSymLink";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isSymbolicLink
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isSymbolicLink
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isSymbolicLink(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSymbolicLink";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isShortcut
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isShortcut
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isShortcut(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isShortcut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isJunction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isJunction
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isJunction(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isJunction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isRoot
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isRoot
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isRoot(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRoot";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: isBundle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::isBundle
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->isBundle(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBundle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: symLinkTarget
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::symLinkTarget
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->symLinkTarget(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for symLinkTarget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: owner
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::owner
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->owner(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for owner";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: ownerId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::ownerId
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
                QFileInfo* w = getWrapped();
                uint res = 
                    
                w->ownerId(
                  
                );
              
            // return type: uint

            return cpp2js_uint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ownerId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: group
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::group
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
                QFileInfo* w = getWrapped();
                QString res = 
                    
                w->group(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for group";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: groupId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::groupId
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
                QFileInfo* w = getWrapped();
                uint res = 
                    
                w->groupId(
                  
                );
              
            // return type: uint

            return cpp2js_uint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for groupId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: permission
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::permission
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QFile_Permissions(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: permissions (QFile::Permissions)
  
QFile::Permissions a1_cpp;

      a1_cpp = js2cpp_QFile_Permissions(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->permission(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for permission";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: permissions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::permissions
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
                QFileInfo* w = getWrapped();
                QFile::Permissions res = 
                    
                w->permissions(
                  
                );
              
            // return type: QFile::Permissions

            return cpp2js_QFile_Permissions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for permissions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::size
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
                QFileInfo* w = getWrapped();
                qint64 res = 
                    
                w->size(
                  
                );
              
            // return type: qint64

            return cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: birthTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::birthTime
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
                QFileInfo* w = getWrapped();
                QDateTime res = 
                    
                w->birthTime(
                  
                );
              
            // return type: QDateTime

            return cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for birthTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: metadataChangeTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::metadataChangeTime
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
                QFileInfo* w = getWrapped();
                QDateTime res = 
                    
                w->metadataChangeTime(
                  
                );
              
            // return type: QDateTime

            return cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for metadataChangeTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: lastModified
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::lastModified
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
                QFileInfo* w = getWrapped();
                QDateTime res = 
                    
                w->lastModified(
                  
                );
              
            // return type: QDateTime

            return cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lastModified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: lastRead
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::lastRead
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
                QFileInfo* w = getWrapped();
                QDateTime res = 
                    
                w->lastRead(
                  
                );
              
            // return type: QDateTime

            return cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lastRead";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: fileTime
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::fileTime
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QFile_FileTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: time (QFile::FileTime)
  
QFile::FileTime a1_cpp;

      a1_cpp = js2cpp_QFile_FileTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileInfo* w = getWrapped();
                QDateTime res = 
                    
                w->fileTime(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fileTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: caching
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::caching
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
                QFileInfo* w = getWrapped();
                bool res = 
                    
                w->caching(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for caching";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileInfo
    // Function: setCaching
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileInfo_Wrapper::setCaching
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: on (bool)
  
bool a1_cpp;

      a1_cpp = js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileInfo* w = getWrapped();
                
                w->setCaching(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCaching";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  