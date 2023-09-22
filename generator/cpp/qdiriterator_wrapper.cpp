
  // Auto generated
  
  // include header:
  //#include "qdiriteratorwrapper.h"
  //#include "header_cpp.h"
  
    #include "qdiriterator_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QDirIterator_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QDirIterator_Wrapper>("org.qcad", 1, 0, "QDirIterator_Wrapper");
        qmlRegisterInterface<QDirIterator_Wrapper>("QDirIterator_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QDirIterator* t = new RJSType_QDirIterator();
          global.setProperty("RJSType_QDirIterator", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QDirIterator::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QDirIterator_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QDirIterator_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QDirIterator_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QDirIterator_BaseJs", mob);
      
      QString fileName = ":generator/js/QDirIterator.js";
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
    QDirIterator_Wrapper::QDirIterator_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QDirIterator_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QDirIterator_Wrapper::QDirIterator_Wrapper(RJSApi& h, QDirIterator* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QDirIterator_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QDirIterator_Wrapper"));
              //setObjectName("QDirIterator_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QDirIterator_Wrapper::~QDirIterator_Wrapper() {
            //RDebug::decCounter(QString("QDirIterator_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QDirIterator_Wrapper"));

            //qDebug() << "QDirIterator_Wrapper::~QDirIterator_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QDirIterator";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QDirIterator_Wrapper::initConnections() {

          //setObjectName("QDirIterator_Wrapper");

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
  
    // Class: QDirIterator
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QDirIterator_Wrapper::QDirIterator_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QDirIterator_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QDirIterator_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QStringList(handler, a2
  )

   && RJSHelper::is_QDir_Filters(handler, a3
    , true
  
  )

   && RJSHelper::is_QDirIterator_IteratorFlags(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: nameFilters (QStringList)
  
QStringList a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QStringList(handler, a2);
        
  // convert js parameter to cpp: filters (QDir::Filters)
  
QDir::Filters a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QDir::NoFilter;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a3);
          }
        
  // convert js parameter to cpp: flags (QDirIterator::IteratorFlags)
  
QDirIterator::IteratorFlags a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QDirIterator::NoIteratorFlags;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QDirIterator_IteratorFlags(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QDirIterator(
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
  )

   && RJSHelper::is_QDir_Filters(handler, a2
  )

   && RJSHelper::is_QDirIterator_IteratorFlags(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: filter (QDir::Filters)
  
QDir::Filters a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QDir_Filters(handler, a2);
        
  // convert js parameter to cpp: flags (QDirIterator::IteratorFlags)
  
QDirIterator::IteratorFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QDirIterator::NoIteratorFlags;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QDirIterator_IteratorFlags(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QDirIterator(
                a1_cpp
    , a2_cpp
    , a3_cpp
    
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
        RJSHelper::is_QDir(handler, a1
  )

   && RJSHelper::is_QDirIterator_IteratorFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dir (QDir)
  
QDir a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDir(handler, a1);
        
  // convert js parameter to cpp: flags (QDirIterator::IteratorFlags)
  
QDirIterator::IteratorFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QDirIterator::NoIteratorFlags;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QDirIterator_IteratorFlags(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QDirIterator(
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
                  

                  qWarning() << "no matching constructor variant found for QDirIterator";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QDirIterator
    // Function: next
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDirIterator_Wrapper::next
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
                QDirIterator* w = getWrapped();
                QString res = 
                    
                w->next(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for next";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDirIterator
    // Function: nextFileInfo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDirIterator_Wrapper::nextFileInfo
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
                QDirIterator* w = getWrapped();
                QFileInfo res = 
                    
                w->nextFileInfo(
                  
                );
              
            // return type: QFileInfo

            return RJSHelper::cpp2js_QFileInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nextFileInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDirIterator
    // Function: hasNext
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDirIterator_Wrapper::hasNext
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
                QDirIterator* w = getWrapped();
                bool res = 
                    
                w->hasNext(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasNext";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDirIterator
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDirIterator_Wrapper::fileName
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
                QDirIterator* w = getWrapped();
                QString res = 
                    
                w->fileName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDirIterator
    // Function: filePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDirIterator_Wrapper::filePath
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
                QDirIterator* w = getWrapped();
                QString res = 
                    
                w->filePath(
                  
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
            
    // Class: QDirIterator
    // Function: fileInfo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDirIterator_Wrapper::fileInfo
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
                QDirIterator* w = getWrapped();
                QFileInfo res = 
                    
                w->fileInfo(
                  
                );
              
            // return type: QFileInfo

            return RJSHelper::cpp2js_QFileInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fileInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDirIterator
    // Function: path
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QDirIterator_Wrapper::path
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
                QDirIterator* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  