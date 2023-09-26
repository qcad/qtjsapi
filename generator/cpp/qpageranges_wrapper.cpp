
  // Auto generated
  
  // include header:
  //#include "qpagerangeswrapper.h"
  //#include "header_cpp.h"
  
    #include "qpageranges_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QPageRanges*> QPageRanges_Wrapper::basecasters_QPageRanges;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QPageRanges
    // Function: fromString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_WrapperSingleton::fromString
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
    
  // convert js parameter to cpp: ranges (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPageRanges res = 
                
                // call static member function:
                QPageRanges::fromString(
              a1_cpp
    
            );
          
            // return type: QPageRanges

            return RJSHelper::cpp2js_QPageRanges(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QPageRanges_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPageRanges_Wrapper>("org.qcad", 1, 0, "QPageRanges_Wrapper");
        qmlRegisterInterface<QPageRanges_Wrapper>("QPageRanges_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QPageRanges* t = new RJSType_QPageRanges();
          global.setProperty("RJSType_QPageRanges", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QPageRanges::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPageRanges_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPageRanges_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPageRanges_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPageRanges_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QPageRanges_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QPageRanges_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QPageRanges_WrapperSingleton * s = new QPageRanges_WrapperSingleton(handler);
        engine->globalObject().setProperty("QPageRanges_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QPageRanges.js";
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
    QPageRanges_Wrapper::QPageRanges_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPageRanges_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPageRanges_Wrapper::QPageRanges_Wrapper(RJSApi& h, QPageRanges* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPageRanges_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPageRanges_Wrapper"));
              //setObjectName("QPageRanges_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPageRanges_Wrapper::~QPageRanges_Wrapper() {
            //RDebug::decCounter(QString("QPageRanges_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPageRanges_Wrapper"));

            //qDebug() << "QPageRanges_Wrapper::~QPageRanges_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPageRanges";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPageRanges_Wrapper::initConnections() {

          //setObjectName("QPageRanges_Wrapper");

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
  
    // Class: QPageRanges
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QPageRanges_Wrapper::QPageRanges_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPageRanges_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPageRanges_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QPageRanges(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageRanges)
  
QPageRanges a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageRanges(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageRanges(
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
        RJSHelper::is_QPageRanges(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageRanges)
  
QPageRanges a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageRanges(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPageRanges(
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

        
            wrapped = new QPageRanges(
                
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
                  

                  qWarning() << "no matching constructor variant found for QPageRanges";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPageRanges
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageRanges(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPageRanges)
  
QPageRanges a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageRanges(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageRanges* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageRanges
    // Function: addPage
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::addPage
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
    
  // convert js parameter to cpp: pageNumber (int)
  
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
                QPageRanges* w = getWrapped();
                
                w->addPage(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageRanges
    // Function: addRange
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::addRange
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: from (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: to (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPageRanges* w = getWrapped();
                
                w->addRange(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addRange";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageRanges
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::clear
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
                QPageRanges* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageRanges
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::toString
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
                QPageRanges* w = getWrapped();
                QString res = 
                    
                w->toString(
                  
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
            
    // Class: QPageRanges
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::contains
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageNumber (int)
  
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
                QPageRanges* w = getWrapped();
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
            
    // Class: QPageRanges
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::isEmpty
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
                QPageRanges* w = getWrapped();
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
            
    // Class: QPageRanges
    // Function: firstPage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::firstPage
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
                QPageRanges* w = getWrapped();
                int res = 
                    
                w->firstPage(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for firstPage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageRanges
    // Function: lastPage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::lastPage
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
                QPageRanges* w = getWrapped();
                int res = 
                    
                w->lastPage(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lastPage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPageRanges
    // Function: detach
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPageRanges_Wrapper::detach
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
                QPageRanges* w = getWrapped();
                
                w->detach(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for detach";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  