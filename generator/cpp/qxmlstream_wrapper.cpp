
  // Auto generated
  
  // include header:
  //#include "qxmlstreamwrapper.h"
  //#include "header_cpp.h"
  
    #include "qxmlstream_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlStreamAttribute_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlStreamAttribute_Wrapper>("org.qcad", 1, 0, "QXmlStreamAttribute_Wrapper");
        qmlRegisterInterface<QXmlStreamAttribute_Wrapper>("QXmlStreamAttribute_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlStreamAttribute_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlStreamAttribute_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlStreamAttribute_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlStreamAttribute_BaseJs", mob);
      
      QString fileName = ":generated/js/QXmlStreamAttribute.js";
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
    QXmlStreamAttribute_Wrapper::QXmlStreamAttribute_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlStreamAttribute_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlStreamAttribute_Wrapper::QXmlStreamAttribute_Wrapper(RJSApi& h, QXmlStreamAttribute* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlStreamAttribute_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlStreamAttribute_Wrapper"));
              //setObjectName("QXmlStreamAttribute_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlStreamAttribute_Wrapper::~QXmlStreamAttribute_Wrapper() {
            //RDebug::decCounter(QString("QXmlStreamAttribute_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlStreamAttribute_Wrapper"));

            //qDebug() << "QXmlStreamAttribute_Wrapper::~QXmlStreamAttribute_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlStreamAttribute";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlStreamAttribute_Wrapper::initConnections() {

          //setObjectName("QXmlStreamAttribute_Wrapper");

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
  

    // non-static functions:
    
    // Class: QXmlStreamAttribute
    // Function: isDefault
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamAttribute_Wrapper::isDefault
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
                QXmlStreamAttribute* w = getWrapped();
                bool res = 
                    
                w->isDefault(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDefault";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamAttribute
    // Function: operator_equal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamAttribute_Wrapper::operator_equal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QXmlStreamAttribute_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QXmlStreamAttribute)
  

          // non copyable:
          QXmlStreamAttribute*
         a1_cpp;

      a1_cpp = js2cpp_QXmlStreamAttribute_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamAttribute* w = getWrapped();
                bool res = 
                    
                w->operator==(
                  *a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_equal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamAttribute
    // Function: operator_unequal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamAttribute_Wrapper::operator_unequal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QXmlStreamAttribute_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QXmlStreamAttribute)
  

          // non copyable:
          QXmlStreamAttribute*
         a1_cpp;

      a1_cpp = js2cpp_QXmlStreamAttribute_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamAttribute* w = getWrapped();
                bool res = 
                    
                w->operator!=(
                  *a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_unequal";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxmlstream_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlStreamAttributes_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlStreamAttributes_Wrapper>("org.qcad", 1, 0, "QXmlStreamAttributes_Wrapper");
        qmlRegisterInterface<QXmlStreamAttributes_Wrapper>("QXmlStreamAttributes_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlStreamAttributes_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlStreamAttributes_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlStreamAttributes_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlStreamAttributes_BaseJs", mob);
      
      QString fileName = ":generated/js/QXmlStreamAttributes.js";
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
    QXmlStreamAttributes_Wrapper::QXmlStreamAttributes_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlStreamAttributes_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlStreamAttributes_Wrapper::QXmlStreamAttributes_Wrapper(RJSApi& h, QXmlStreamAttributes* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlStreamAttributes_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlStreamAttributes_Wrapper"));
              //setObjectName("QXmlStreamAttributes_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlStreamAttributes_Wrapper::~QXmlStreamAttributes_Wrapper() {
            //RDebug::decCounter(QString("QXmlStreamAttributes_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlStreamAttributes_Wrapper"));

            //qDebug() << "QXmlStreamAttributes_Wrapper::~QXmlStreamAttributes_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QXmlStreamAttributes";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlStreamAttributes_Wrapper::initConnections() {

          //setObjectName("QXmlStreamAttributes_Wrapper");

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
  
    // Class: QXmlStreamAttributes
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QXmlStreamAttributes_Wrapper::QXmlStreamAttributes_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QXmlStreamAttributes_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QXmlStreamAttributes_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlStreamAttributes(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QXmlStreamAttributes";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QXmlStreamAttributes
    // Function: append
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamAttributes_Wrapper::append
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
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

   && is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceUri (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: name (QString)
  
QString a2_cpp;

      a2_cpp = js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: value (QString)
  
QString a3_cpp;

      a3_cpp = js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamAttributes* w = getWrapped();
                
                w->append(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: qualifiedName (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (QString)
  
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
                QXmlStreamAttributes* w = getWrapped();
                
                w->append(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for append";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamAttributes
    // Function: hasAttribute
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamAttributes_Wrapper::hasAttribute
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
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceUri (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: name (QString)
  
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
                QXmlStreamAttributes* w = getWrapped();
                bool res = 
                    
                w->hasAttribute(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: qualifiedName (QString)
  
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
                QXmlStreamAttributes* w = getWrapped();
                bool res = 
                    
                w->hasAttribute(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxmlstream_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlStreamReader_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlStreamReader_Wrapper>("org.qcad", 1, 0, "QXmlStreamReader_Wrapper");
        qmlRegisterInterface<QXmlStreamReader_Wrapper>("QXmlStreamReader_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlStreamReader_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlStreamReader_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlStreamReader_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlStreamReader_BaseJs", mob);
      
      QString fileName = ":generated/js/QXmlStreamReader.js";
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
    QXmlStreamReader_Wrapper::QXmlStreamReader_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlStreamReader_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlStreamReader_Wrapper::QXmlStreamReader_Wrapper(RJSApi& h, QXmlStreamReader* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlStreamReader_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlStreamReader_Wrapper"));
              //setObjectName("QXmlStreamReader_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlStreamReader_Wrapper::~QXmlStreamReader_Wrapper() {
            //RDebug::decCounter(QString("QXmlStreamReader_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlStreamReader_Wrapper"));

            //qDebug() << "QXmlStreamReader_Wrapper::~QXmlStreamReader_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlStreamReader";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlStreamReader_Wrapper::initConnections() {

          //setObjectName("QXmlStreamReader_Wrapper");

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
  
    // Class: QXmlStreamReader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QXmlStreamReader_Wrapper::QXmlStreamReader_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QXmlStreamReader_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QXmlStreamReader_Wrapper"));
                
      // check parameter types:
      if (
        is_QIODevice_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = js2cpp_QIODevice_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlStreamReader(
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
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlStreamReader(
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
        is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlStreamReader(
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

        
            wrapped = new QXmlStreamReader(
                
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
                  

                  qWarning() << "no matching constructor variant found for QXmlStreamReader";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QXmlStreamReader
    // Function: setDevice
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::setDevice
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QIODevice_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = js2cpp_QIODevice_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamReader* w = getWrapped();
                
                w->setDevice(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDevice";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::device
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
                QXmlStreamReader* w = getWrapped();
                QIODevice* res = 
                    
                w->device(
                  
                );
              
            // return type: QIODevice*

            return cpp2js_QIODevice(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for device";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: addData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::addData
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
    
  // convert js parameter to cpp: data (QString)
  
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
                QXmlStreamReader* w = getWrapped();
                
                w->addData(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
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
                QXmlStreamReader* w = getWrapped();
                
                w->addData(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::clear
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
                QXmlStreamReader* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: atEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::atEnd
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->atEnd(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: readNext
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::readNext
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
                QXmlStreamReader* w = getWrapped();
                QXmlStreamReader::TokenType res = 
                    
                w->readNext(
                  
                );
              
            // return type: QXmlStreamReader::TokenType

            return cpp2js_QXmlStreamReader_TokenType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readNext";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: readNextStartElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::readNextStartElement
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->readNextStartElement(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readNextStartElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: skipCurrentElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::skipCurrentElement
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
                QXmlStreamReader* w = getWrapped();
                
                w->skipCurrentElement(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for skipCurrentElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: tokenType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::tokenType
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
                QXmlStreamReader* w = getWrapped();
                QXmlStreamReader::TokenType res = 
                    
                w->tokenType(
                  
                );
              
            // return type: QXmlStreamReader::TokenType

            return cpp2js_QXmlStreamReader_TokenType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tokenType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: tokenString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::tokenString
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
                QXmlStreamReader* w = getWrapped();
                QString res = 
                    
                w->tokenString(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tokenString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: setNamespaceProcessing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::setNamespaceProcessing
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QXmlStreamReader* w = getWrapped();
                
                w->setNamespaceProcessing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNamespaceProcessing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: namespaceProcessing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::namespaceProcessing
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->namespaceProcessing(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for namespaceProcessing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isStartDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isStartDocument
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isStartDocument(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isStartDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isEndDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isEndDocument
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isEndDocument(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEndDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isStartElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isStartElement
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isStartElement(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isStartElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isEndElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isEndElement
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isEndElement(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEndElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isCharacters
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isCharacters
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isCharacters(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCharacters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isWhitespace
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isWhitespace
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isWhitespace(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWhitespace";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isCDATA
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isCDATA(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCDATA";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isComment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isComment
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isComment(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isComment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isDTD
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isDTD
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isDTD(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDTD";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isEntityReference
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isEntityReference
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isEntityReference(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEntityReference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isProcessingInstruction
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isProcessingInstruction
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isProcessingInstruction(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isProcessingInstruction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: isStandaloneDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::isStandaloneDocument
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->isStandaloneDocument(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isStandaloneDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: lineNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::lineNumber
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
                QXmlStreamReader* w = getWrapped();
                qint64 res = 
                    
                w->lineNumber(
                  
                );
              
            // return type: qint64

            return cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: columnNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::columnNumber
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
                QXmlStreamReader* w = getWrapped();
                qint64 res = 
                    
                w->columnNumber(
                  
                );
              
            // return type: qint64

            return cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columnNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: characterOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::characterOffset
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
                QXmlStreamReader* w = getWrapped();
                qint64 res = 
                    
                w->characterOffset(
                  
                );
              
            // return type: qint64

            return cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for characterOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: attributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::attributes
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
                QXmlStreamReader* w = getWrapped();
                QXmlStreamAttributes res = 
                    
                w->attributes(
                  
                );
              
            // return type: QXmlStreamAttributes

            return cpp2js_QXmlStreamAttributes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for attributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: readElementText
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::readElementText
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QXmlStreamReader_ReadElementTextBehaviour(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: behaviour (QXmlStreamReader::ReadElementTextBehaviour)
  
QXmlStreamReader::ReadElementTextBehaviour a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QXmlStreamReader::ErrorOnUnexpectedElement;
          }
          else {
            a1_cpp = js2cpp_QXmlStreamReader_ReadElementTextBehaviour(handler, a1);
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
                QXmlStreamReader* w = getWrapped();
                QString res = 
                    
                w->readElementText(
                  a1_cpp
    
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readElementText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::text
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
                QXmlStreamReader* w = getWrapped();
                QStringView res = 
                    
                w->text(
                  
                );
              
            // return type: QStringView

            return cpp2js_QStringView(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for text";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: entityExpansionLimit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::entityExpansionLimit
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
                QXmlStreamReader* w = getWrapped();
                int res = 
                    
                w->entityExpansionLimit(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for entityExpansionLimit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: setEntityExpansionLimit
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::setEntityExpansionLimit
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: limit (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamReader* w = getWrapped();
                
                w->setEntityExpansionLimit(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntityExpansionLimit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: raiseError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::raiseError
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: message (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QString();
          }
          else {
            a1_cpp = js2cpp_QString(handler, a1);
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
                QXmlStreamReader* w = getWrapped();
                
                w->raiseError(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for raiseError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::errorString
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
                QXmlStreamReader* w = getWrapped();
                QString res = 
                    
                w->errorString(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for errorString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::error
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
                QXmlStreamReader* w = getWrapped();
                QXmlStreamReader::Error res = 
                    
                w->error(
                  
                );
              
            // return type: QXmlStreamReader::Error

            return cpp2js_QXmlStreamReader_Error(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamReader
    // Function: hasError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamReader_Wrapper::hasError
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
                QXmlStreamReader* w = getWrapped();
                bool res = 
                    
                w->hasError(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasError";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxmlstream_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#ifndef QT_NO_XMLSTREAMREADER

#endif

    void QXmlStreamWriter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlStreamWriter_Wrapper>("org.qcad", 1, 0, "QXmlStreamWriter_Wrapper");
        qmlRegisterInterface<QXmlStreamWriter_Wrapper>("QXmlStreamWriter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlStreamWriter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlStreamWriter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlStreamWriter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlStreamWriter_BaseJs", mob);
      
      QString fileName = ":generated/js/QXmlStreamWriter.js";
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
    QXmlStreamWriter_Wrapper::QXmlStreamWriter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlStreamWriter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlStreamWriter_Wrapper::QXmlStreamWriter_Wrapper(RJSApi& h, QXmlStreamWriter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlStreamWriter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlStreamWriter_Wrapper"));
              //setObjectName("QXmlStreamWriter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlStreamWriter_Wrapper::~QXmlStreamWriter_Wrapper() {
            //RDebug::decCounter(QString("QXmlStreamWriter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlStreamWriter_Wrapper"));

            //qDebug() << "QXmlStreamWriter_Wrapper::~QXmlStreamWriter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlStreamWriter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlStreamWriter_Wrapper::initConnections() {

          //setObjectName("QXmlStreamWriter_Wrapper");

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
  
    // Class: QXmlStreamWriter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QXmlStreamWriter_Wrapper::QXmlStreamWriter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QXmlStreamWriter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QXmlStreamWriter_Wrapper"));
                
      // check parameter types:
      if (
        is_QIODevice_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = js2cpp_QIODevice_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlStreamWriter(
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

        
            wrapped = new QXmlStreamWriter(
                
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
                  

                  qWarning() << "no matching constructor variant found for QXmlStreamWriter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_XMLSTREAMREADER

#endif


    // non-static functions:
    
    // Class: QXmlStreamWriter
    // Function: setDevice
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::setDevice
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QIODevice_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = js2cpp_QIODevice_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamWriter* w = getWrapped();
                
                w->setDevice(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDevice";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::device
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
                QXmlStreamWriter* w = getWrapped();
                QIODevice* res = 
                    
                w->device(
                  
                );
              
            // return type: QIODevice*

            return cpp2js_QIODevice(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for device";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: setAutoFormatting
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::setAutoFormatting
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->setAutoFormatting(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoFormatting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: autoFormatting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::autoFormatting
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
                QXmlStreamWriter* w = getWrapped();
                bool res = 
                    
                w->autoFormatting(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoFormatting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: setAutoFormattingIndent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::setAutoFormattingIndent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spacesOrTabs (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamWriter* w = getWrapped();
                
                w->setAutoFormattingIndent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoFormattingIndent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: autoFormattingIndent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::autoFormattingIndent
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
                QXmlStreamWriter* w = getWrapped();
                int res = 
                    
                w->autoFormattingIndent(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoFormattingIndent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeAttribute
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeAttribute
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
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

   && is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceUri (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: name (QString)
  
QString a2_cpp;

      a2_cpp = js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: value (QString)
  
QString a3_cpp;

      a3_cpp = js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamWriter* w = getWrapped();
                
                w->writeAttribute(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: qualifiedName (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeAttribute(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QXmlStreamAttribute_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: attribute (QXmlStreamAttribute)
  

          // non copyable:
          QXmlStreamAttribute*
         a1_cpp;

      a1_cpp = js2cpp_QXmlStreamAttribute_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamWriter* w = getWrapped();
                
                w->writeAttribute(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeAttribute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeAttributes
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeAttributes
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QXmlStreamAttributes(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: attributes (QXmlStreamAttributes)
  
QXmlStreamAttributes a1_cpp;

      a1_cpp = js2cpp_QXmlStreamAttributes(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamWriter* w = getWrapped();
                
                w->writeAttributes(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeCDATA
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeCDATA
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
    
  // convert js parameter to cpp: text (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeCDATA(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeCDATA";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeCharacters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeCharacters
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
    
  // convert js parameter to cpp: text (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeCharacters(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeCharacters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeComment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeComment
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
    
  // convert js parameter to cpp: text (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeComment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeComment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeDTD
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeDTD
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
    
  // convert js parameter to cpp: dtd (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeDTD(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeDTD";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeEmptyElement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeEmptyElement
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceUri (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: name (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeEmptyElement(
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
    
  // convert js parameter to cpp: qualifiedName (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeEmptyElement(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeEmptyElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeTextElement
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeTextElement
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
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

   && is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceUri (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: name (QString)
  
QString a2_cpp;

      a2_cpp = js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: text (QString)
  
QString a3_cpp;

      a3_cpp = js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamWriter* w = getWrapped();
                
                w->writeTextElement(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: qualifiedName (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: text (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeTextElement(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeTextElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeEndDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeEndDocument
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeEndDocument(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeEndDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeEndElement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeEndElement
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeEndElement(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeEndElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeEntityReference
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeEntityReference
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
    
  // convert js parameter to cpp: name (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeEntityReference(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeEntityReference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeNamespace
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeNamespace
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceUri (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: prefix (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = js2cpp_QString(handler, a2);
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeNamespace(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeNamespace";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeDefaultNamespace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeDefaultNamespace
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
    
  // convert js parameter to cpp: namespaceUri (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeDefaultNamespace(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeDefaultNamespace";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeProcessingInstruction
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeProcessingInstruction
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: target (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: data (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = js2cpp_QString(handler, a2);
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeProcessingInstruction(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeProcessingInstruction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeStartDocument
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeStartDocument
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: version (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: standalone (bool)
  
bool a2_cpp;

      a2_cpp = js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamWriter* w = getWrapped();
                
                w->writeStartDocument(
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
    
  // convert js parameter to cpp: version (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeStartDocument(
                  a1_cpp
    
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeStartDocument(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeStartDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlStreamWriter
    // Function: writeStartElement
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeStartElement
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

   && is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceUri (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: name (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeStartElement(
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
    
  // convert js parameter to cpp: qualifiedName (QString)
  
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
                QXmlStreamWriter* w = getWrapped();
                
                w->writeStartElement(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeStartElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_XMLSTREAMREADER

    // Class: QXmlStreamWriter
    // Function: writeCurrentToken
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::writeCurrentToken
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QXmlStreamReader_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: reader (QXmlStreamReader)
  

          // non copyable:
          QXmlStreamReader*
         a1_cpp;

      a1_cpp = js2cpp_QXmlStreamReader_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlStreamWriter* w = getWrapped();
                
                w->writeCurrentToken(
                  *a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for writeCurrentToken";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QXmlStreamWriter
    // Function: hasError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlStreamWriter_Wrapper::hasError
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
                QXmlStreamWriter* w = getWrapped();
                bool res = 
                    
                w->hasError(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasError";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  