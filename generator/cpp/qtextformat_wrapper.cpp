
  // Auto generated
  
  // include header:
  //#include "qtextformatwrapper.h"
  //#include "header_cpp.h"
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextLength_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextLength_Wrapper>("org.qcad", 1, 0, "QTextLength_Wrapper");
        qmlRegisterInterface<QTextLength_Wrapper>("QTextLength_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextLength_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextLength_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextLength_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextLength_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextLength.js";
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
    QTextLength_Wrapper::QTextLength_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextLength_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextLength_Wrapper::QTextLength_Wrapper(RJSApi& h, QTextLength* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextLength_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextLength_Wrapper"));
              //setObjectName("QTextLength_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextLength_Wrapper::~QTextLength_Wrapper() {
            //RDebug::decCounter(QString("QTextLength_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextLength_Wrapper"));

            //qDebug() << "QTextLength_Wrapper::~QTextLength_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextLength";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextLength_Wrapper::initConnections() {

          //setObjectName("QTextLength_Wrapper");

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
  
    // Class: QTextLength
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QTextLength_Wrapper::QTextLength_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QTextLength_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextLength_Wrapper"));
                
      // check parameter types:
      if (
        is_QTextLength_Type(handler, a1
  )

   && is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QTextLength::Type)
  
QTextLength::Type a1_cpp;

      a1_cpp = js2cpp_QTextLength_Type(handler, a1);
        
  // convert js parameter to cpp: value (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextLength(
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

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextLength(
                
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
                  

                  qWarning() << "no matching constructor variant found for QTextLength";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextLength
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextLength_Wrapper::type
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
                QTextLength* w = getWrapped();
                QTextLength::Type res = 
                    
                w->type(
                  
                );
              
            // return type: QTextLength::Type

            return cpp2js_QTextLength_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextLength
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextLength_Wrapper::value
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: maximumLength (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextLength* w = getWrapped();
                qreal res = 
                    
                w->value(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for value";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextLength
    // Function: rawValue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextLength_Wrapper::rawValue
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
                QTextLength* w = getWrapped();
                qreal res = 
                    
                w->rawValue(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rawValue";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextFormat_Wrapper>("org.qcad", 1, 0, "QTextFormat_Wrapper");
        qmlRegisterInterface<QTextFormat_Wrapper>("QTextFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextFormat_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextFormat.js";
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
    QTextFormat_Wrapper::QTextFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextFormat_Wrapper::QTextFormat_Wrapper(RJSApi& h, QTextFormat* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextFormat_Wrapper"));
              //setObjectName("QTextFormat_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextFormat_Wrapper::~QTextFormat_Wrapper() {
            //RDebug::decCounter(QString("QTextFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextFormat_Wrapper"));

            //qDebug() << "QTextFormat_Wrapper::~QTextFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextFormat";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextFormat_Wrapper::initConnections() {

          //setObjectName("QTextFormat_Wrapper");

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
  
    // Class: QTextFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QTextFormat_Wrapper::QTextFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextFormat_Wrapper"));
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextFormat(
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
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rhs (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextFormat(
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

        
            wrapped = new QTextFormat(
                
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
                  

                  qWarning() << "no matching constructor variant found for QTextFormat";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextFormat
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFormat* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: merge
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::merge
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFormat* w = getWrapped();
                
                w->merge(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for merge";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isValid
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isEmpty
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::type
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
                QTextFormat* w = getWrapped();
                int res = 
                    
                w->type(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: objectIndex
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::objectIndex
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
                QTextFormat* w = getWrapped();
                int res = 
                    
                w->objectIndex(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: setObjectIndex
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::setObjectIndex
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
    
  // convert js parameter to cpp: object (int)
  
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
                QTextFormat* w = getWrapped();
                
                w->setObjectIndex(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: property
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: setProperty
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QTextLength(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: lengths (QList<QTextLength>)
  
QList<QTextLength> a2_cpp;

      a2_cpp = js2cpp_QList_QTextLength(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: clearProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::clearProperty
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
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                
                w->clearProperty(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: hasProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::hasProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->hasProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: boolProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::boolProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->boolProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boolProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: intProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::intProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                int res = 
                    
                w->intProperty(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: doubleProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::doubleProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                qreal res = 
                    
                w->doubleProperty(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: stringProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::stringProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                QString res = 
                    
                w->stringProperty(
                  a1_cpp
    
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stringProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: colorProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::colorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                QColor res = 
                    
                w->colorProperty(
                  a1_cpp
    
                );
              
            // return type: QColor

            return cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: penProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::penProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                QPen res = 
                    
                w->penProperty(
                  a1_cpp
    
                );
              
            // return type: QPen

            return cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for penProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: brushProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::brushProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                QBrush res = 
                    
                w->brushProperty(
                  a1_cpp
    
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brushProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: lengthProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::lengthProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                QTextLength res = 
                    
                w->lengthProperty(
                  a1_cpp
    
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: lengthVectorProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::lengthVectorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFormat* w = getWrapped();
                QList<QTextLength> res = 
                    
                w->lengthVectorProperty(
                  a1_cpp
    
                );
              
            // return type: QList<QTextLength>

            return cpp2js_QList_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthVectorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: propertyCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::propertyCount
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
                QTextFormat* w = getWrapped();
                int res = 
                    
                w->propertyCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for propertyCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: setObjectType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::setObjectType
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
    
  // convert js parameter to cpp: type (int)
  
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
                QTextFormat* w = getWrapped();
                
                w->setObjectType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: objectType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::objectType
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
                QTextFormat* w = getWrapped();
                int res = 
                    
                w->objectType(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isCharFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isCharFormat
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isCharFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isBlockFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isBlockFormat
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isBlockFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isListFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isListFormat
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isListFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isFrameFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isFrameFormat
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isFrameFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isImageFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isImageFormat
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isImageFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isTableFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isTableFormat
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isTableFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: isTableCellFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::isTableCellFormat
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
                QTextFormat* w = getWrapped();
                bool res = 
                    
                w->isTableCellFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: toBlockFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::toBlockFormat
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
                QTextFormat* w = getWrapped();
                QTextBlockFormat res = 
                    
                w->toBlockFormat(
                  
                );
              
            // return type: QTextBlockFormat

            return cpp2js_QTextBlockFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: toCharFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::toCharFormat
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
                QTextFormat* w = getWrapped();
                QTextCharFormat res = 
                    
                w->toCharFormat(
                  
                );
              
            // return type: QTextCharFormat

            return cpp2js_QTextCharFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: toListFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::toListFormat
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
                QTextFormat* w = getWrapped();
                QTextListFormat res = 
                    
                w->toListFormat(
                  
                );
              
            // return type: QTextListFormat

            return cpp2js_QTextListFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: toTableFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::toTableFormat
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
                QTextFormat* w = getWrapped();
                QTextTableFormat res = 
                    
                w->toTableFormat(
                  
                );
              
            // return type: QTextTableFormat

            return cpp2js_QTextTableFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: toFrameFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::toFrameFormat
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
                QTextFormat* w = getWrapped();
                QTextFrameFormat res = 
                    
                w->toFrameFormat(
                  
                );
              
            // return type: QTextFrameFormat

            return cpp2js_QTextFrameFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: toImageFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::toImageFormat
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
                QTextFormat* w = getWrapped();
                QTextImageFormat res = 
                    
                w->toImageFormat(
                  
                );
              
            // return type: QTextImageFormat

            return cpp2js_QTextImageFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: toTableCellFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::toTableCellFormat
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
                QTextFormat* w = getWrapped();
                QTextTableCellFormat res = 
                    
                w->toTableCellFormat(
                  
                );
              
            // return type: QTextTableCellFormat

            return cpp2js_QTextTableCellFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: setLayoutDirection
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::setLayoutDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_LayoutDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: direction (Qt::LayoutDirection)
  
Qt::LayoutDirection a1_cpp;

      a1_cpp = js2cpp_Qt_LayoutDirection(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFormat* w = getWrapped();
                
                w->setLayoutDirection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: layoutDirection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::layoutDirection
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
                QTextFormat* w = getWrapped();
                Qt::LayoutDirection res = 
                    
                w->layoutDirection(
                  
                );
              
            // return type: Qt::LayoutDirection

            return cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: setBackground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::setBackground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFormat* w = getWrapped();
                
                w->setBackground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: background
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::background
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
                QTextFormat* w = getWrapped();
                QBrush res = 
                    
                w->background(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for background";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: clearBackground
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::clearBackground
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
                QTextFormat* w = getWrapped();
                
                w->clearBackground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: setForeground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::setForeground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFormat* w = getWrapped();
                
                w->setForeground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: foreground
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::foreground
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
                QTextFormat* w = getWrapped();
                QBrush res = 
                    
                w->foreground(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for foreground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFormat
    // Function: clearForeground
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFormat_Wrapper::clearForeground
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
                QTextFormat* w = getWrapped();
                
                w->clearForeground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextCharFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextCharFormat_Wrapper>("org.qcad", 1, 0, "QTextCharFormat_Wrapper");
        qmlRegisterInterface<QTextCharFormat_Wrapper>("QTextCharFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextCharFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextCharFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextCharFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextCharFormat_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextCharFormat.js";
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
    QTextCharFormat_Wrapper::QTextCharFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextCharFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextCharFormat_Wrapper::QTextCharFormat_Wrapper(RJSApi& h, QTextCharFormat* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextCharFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextCharFormat_Wrapper"));
              //setObjectName("QTextCharFormat_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextCharFormat_Wrapper::~QTextCharFormat_Wrapper() {
            //RDebug::decCounter(QString("QTextCharFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextCharFormat_Wrapper"));

            //qDebug() << "QTextCharFormat_Wrapper::~QTextCharFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextCharFormat";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextCharFormat_Wrapper::initConnections() {

          //setObjectName("QTextCharFormat_Wrapper");

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
  
    // Class: QTextCharFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QTextCharFormat_Wrapper::QTextCharFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextCharFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextCharFormat_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextCharFormat(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QTextCharFormat";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextCharFormat
    // Function: swap
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: merge
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::merge
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->merge(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for merge";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isEmpty
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isEmpty
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: type
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::type
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->type(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: objectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::objectIndex
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->objectIndex(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setObjectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setObjectIndex
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
    
  // convert js parameter to cpp: object (int)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setObjectIndex(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: property
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QTextLength(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: lengths (QList<QTextLength>)
  
QList<QTextLength> a2_cpp;

      a2_cpp = js2cpp_QList_QTextLength(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: clearProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::clearProperty
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
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->clearProperty(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: hasProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::hasProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->hasProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: boolProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::boolProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->boolProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boolProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: intProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::intProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->intProperty(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: doubleProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::doubleProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                qreal res = 
                    
                w->doubleProperty(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: stringProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::stringProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                QString res = 
                    
                w->stringProperty(
                  a1_cpp
    
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stringProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: colorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::colorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                QColor res = 
                    
                w->colorProperty(
                  a1_cpp
    
                );
              
            // return type: QColor

            return cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: penProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::penProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                QPen res = 
                    
                w->penProperty(
                  a1_cpp
    
                );
              
            // return type: QPen

            return cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for penProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: brushProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::brushProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                QBrush res = 
                    
                w->brushProperty(
                  a1_cpp
    
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brushProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: lengthProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::lengthProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                QTextLength res = 
                    
                w->lengthProperty(
                  a1_cpp
    
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: lengthVectorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::lengthVectorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextCharFormat* w = getWrapped();
                QList<QTextLength> res = 
                    
                w->lengthVectorProperty(
                  a1_cpp
    
                );
              
            // return type: QList<QTextLength>

            return cpp2js_QList_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthVectorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: propertyCount
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::propertyCount
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->propertyCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for propertyCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setObjectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setObjectType
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
    
  // convert js parameter to cpp: type (int)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setObjectType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: objectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::objectType
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->objectType(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isCharFormat
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isCharFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isBlockFormat
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isBlockFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isListFormat
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isListFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isFrameFormat
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isFrameFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isImageFormat
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isImageFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isTableFormat
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isTableFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isTableCellFormat
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isTableCellFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: toBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::toBlockFormat
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
                QTextCharFormat* w = getWrapped();
                QTextBlockFormat res = 
                    
                w->toBlockFormat(
                  
                );
              
            // return type: QTextBlockFormat

            return cpp2js_QTextBlockFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: toCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::toCharFormat
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
                QTextCharFormat* w = getWrapped();
                QTextCharFormat res = 
                    
                w->toCharFormat(
                  
                );
              
            // return type: QTextCharFormat

            return cpp2js_QTextCharFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: toListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::toListFormat
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
                QTextCharFormat* w = getWrapped();
                QTextListFormat res = 
                    
                w->toListFormat(
                  
                );
              
            // return type: QTextListFormat

            return cpp2js_QTextListFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: toTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::toTableFormat
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
                QTextCharFormat* w = getWrapped();
                QTextTableFormat res = 
                    
                w->toTableFormat(
                  
                );
              
            // return type: QTextTableFormat

            return cpp2js_QTextTableFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: toFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::toFrameFormat
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
                QTextCharFormat* w = getWrapped();
                QTextFrameFormat res = 
                    
                w->toFrameFormat(
                  
                );
              
            // return type: QTextFrameFormat

            return cpp2js_QTextFrameFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: toImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::toImageFormat
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
                QTextCharFormat* w = getWrapped();
                QTextImageFormat res = 
                    
                w->toImageFormat(
                  
                );
              
            // return type: QTextImageFormat

            return cpp2js_QTextImageFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: toTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::toTableCellFormat
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
                QTextCharFormat* w = getWrapped();
                QTextTableCellFormat res = 
                    
                w->toTableCellFormat(
                  
                );
              
            // return type: QTextTableCellFormat

            return cpp2js_QTextTableCellFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setLayoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setLayoutDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_LayoutDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: direction (Qt::LayoutDirection)
  
Qt::LayoutDirection a1_cpp;

      a1_cpp = js2cpp_Qt_LayoutDirection(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setLayoutDirection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: layoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::layoutDirection
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
                QTextCharFormat* w = getWrapped();
                Qt::LayoutDirection res = 
                    
                w->layoutDirection(
                  
                );
              
            // return type: Qt::LayoutDirection

            return cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setBackground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setBackground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: background
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::background
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
                QTextCharFormat* w = getWrapped();
                QBrush res = 
                    
                w->background(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for background";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: clearBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::clearBackground
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
                QTextCharFormat* w = getWrapped();
                
                w->clearBackground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setForeground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setForeground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: foreground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::foreground
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
                QTextCharFormat* w = getWrapped();
                QBrush res = 
                    
                w->foreground(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for foreground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: clearForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::clearForeground
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
                QTextCharFormat* w = getWrapped();
                
                w->clearForeground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isValid
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFont
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFont
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont(handler, a1
  )

   && is_QTextCharFormat_FontPropertiesInheritanceBehavior(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = js2cpp_QFont(handler, a1);
        
  // convert js parameter to cpp: behavior (QTextCharFormat::FontPropertiesInheritanceBehavior)
  
QTextCharFormat::FontPropertiesInheritanceBehavior a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QTextCharFormat::FontPropertiesAll;
          }
          else {
            a2_cpp = js2cpp_QTextCharFormat_FontPropertiesInheritanceBehavior(handler, a2);
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
                QTextCharFormat* w = getWrapped();
                
                w->setFont(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: font
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::font
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
                QTextCharFormat* w = getWrapped();
                QFont res = 
                    
                w->font(
                  
                );
              
            // return type: QFont

            return cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontFamilies
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontFamilies
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: families (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setFontFamilies(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontFamilies";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontFamilies
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontFamilies
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
                QTextCharFormat* w = getWrapped();
                QVariant res = 
                    
                w->fontFamilies(
                  
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontFamilies";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontStyleName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontStyleName
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
    
  // convert js parameter to cpp: styleName (QString)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontStyleName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontStyleName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontStyleName
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
                QTextCharFormat* w = getWrapped();
                QVariant res = 
                    
                w->fontStyleName(
                  
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontPointSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontPointSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setFontPointSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontPointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontPointSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontPointSize
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
                QTextCharFormat* w = getWrapped();
                qreal res = 
                    
                w->fontPointSize(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontPointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontWeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontWeight
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
    
  // convert js parameter to cpp: weight (int)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontWeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontWeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontWeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontWeight
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->fontWeight(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontWeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontItalic
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontItalic
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
    
  // convert js parameter to cpp: italic (bool)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontItalic(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontItalic
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontItalic
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->fontItalic(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontCapitalization
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontCapitalization
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_Capitalization(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: capitalization (QFont::Capitalization)
  
QFont::Capitalization a1_cpp;

      a1_cpp = js2cpp_QFont_Capitalization(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setFontCapitalization(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontCapitalization";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontCapitalization
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontCapitalization
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
                QTextCharFormat* w = getWrapped();
                QFont::Capitalization res = 
                    
                w->fontCapitalization(
                  
                );
              
            // return type: QFont::Capitalization

            return cpp2js_QFont_Capitalization(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontCapitalization";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontLetterSpacingType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontLetterSpacingType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_SpacingType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: letterSpacingType (QFont::SpacingType)
  
QFont::SpacingType a1_cpp;

      a1_cpp = js2cpp_QFont_SpacingType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setFontLetterSpacingType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontLetterSpacingType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontLetterSpacingType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontLetterSpacingType
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
                QTextCharFormat* w = getWrapped();
                QFont::SpacingType res = 
                    
                w->fontLetterSpacingType(
                  
                );
              
            // return type: QFont::SpacingType

            return cpp2js_QFont_SpacingType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontLetterSpacingType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontLetterSpacing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontLetterSpacing
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spacing (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setFontLetterSpacing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontLetterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontLetterSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontLetterSpacing
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
                QTextCharFormat* w = getWrapped();
                qreal res = 
                    
                w->fontLetterSpacing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontLetterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontWordSpacing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontWordSpacing
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spacing (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setFontWordSpacing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontWordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontWordSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontWordSpacing
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
                QTextCharFormat* w = getWrapped();
                qreal res = 
                    
                w->fontWordSpacing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontWordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontUnderline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontUnderline
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
    
  // convert js parameter to cpp: underline (bool)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontUnderline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontUnderline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontUnderline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontUnderline
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->fontUnderline(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontUnderline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontOverline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontOverline
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
    
  // convert js parameter to cpp: overline (bool)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontOverline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontOverline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontOverline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontOverline
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->fontOverline(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontOverline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontStrikeOut
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontStrikeOut
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
    
  // convert js parameter to cpp: strikeOut (bool)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontStrikeOut(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStrikeOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontStrikeOut
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontStrikeOut
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->fontStrikeOut(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStrikeOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setUnderlineColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setUnderlineColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (QColor)
  
QColor a1_cpp;

      a1_cpp = js2cpp_QColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setUnderlineColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnderlineColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: underlineColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::underlineColor
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
                QTextCharFormat* w = getWrapped();
                QColor res = 
                    
                w->underlineColor(
                  
                );
              
            // return type: QColor

            return cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underlineColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontFixedPitch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontFixedPitch
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
    
  // convert js parameter to cpp: fixedPitch (bool)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontFixedPitch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontFixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontFixedPitch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontFixedPitch
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->fontFixedPitch(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontFixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontStretch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontStretch
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
    
  // convert js parameter to cpp: factor (int)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontStretch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontStretch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontStretch
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->fontStretch(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontStyleHint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontStyleHint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_StyleHint(handler, a1
  )

   && is_QFont_StyleStrategy(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (QFont::StyleHint)
  
QFont::StyleHint a1_cpp;

      a1_cpp = js2cpp_QFont_StyleHint(handler, a1);
        
  // convert js parameter to cpp: strategy (QFont::StyleStrategy)
  
QFont::StyleStrategy a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QFont::PreferDefault;
          }
          else {
            a2_cpp = js2cpp_QFont_StyleStrategy(handler, a2);
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontStyleHint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontStyleStrategy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontStyleStrategy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_StyleStrategy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: strategy (QFont::StyleStrategy)
  
QFont::StyleStrategy a1_cpp;

      a1_cpp = js2cpp_QFont_StyleStrategy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setFontStyleStrategy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleStrategy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontStyleHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontStyleHint
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
                QTextCharFormat* w = getWrapped();
                QFont::StyleHint res = 
                    
                w->fontStyleHint(
                  
                );
              
            // return type: QFont::StyleHint

            return cpp2js_QFont_StyleHint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontStyleStrategy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontStyleStrategy
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
                QTextCharFormat* w = getWrapped();
                QFont::StyleStrategy res = 
                    
                w->fontStyleStrategy(
                  
                );
              
            // return type: QFont::StyleStrategy

            return cpp2js_QFont_StyleStrategy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleStrategy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontHintingPreference
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontHintingPreference
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_HintingPreference(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hintingPreference (QFont::HintingPreference)
  
QFont::HintingPreference a1_cpp;

      a1_cpp = js2cpp_QFont_HintingPreference(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setFontHintingPreference(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontHintingPreference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontHintingPreference
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontHintingPreference
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
                QTextCharFormat* w = getWrapped();
                QFont::HintingPreference res = 
                    
                w->fontHintingPreference(
                  
                );
              
            // return type: QFont::HintingPreference

            return cpp2js_QFont_HintingPreference(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontHintingPreference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setFontKerning
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setFontKerning
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
    
  // convert js parameter to cpp: enable (bool)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setFontKerning(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontKerning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: fontKerning
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::fontKerning
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->fontKerning(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontKerning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setUnderlineStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setUnderlineStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextCharFormat_UnderlineStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextCharFormat::UnderlineStyle)
  
QTextCharFormat::UnderlineStyle a1_cpp;

      a1_cpp = js2cpp_QTextCharFormat_UnderlineStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setUnderlineStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnderlineStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: underlineStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::underlineStyle
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
                QTextCharFormat* w = getWrapped();
                QTextCharFormat::UnderlineStyle res = 
                    
                w->underlineStyle(
                  
                );
              
            // return type: QTextCharFormat::UnderlineStyle

            return cpp2js_QTextCharFormat_UnderlineStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underlineStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setVerticalAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setVerticalAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextCharFormat_VerticalAlignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alignment (QTextCharFormat::VerticalAlignment)
  
QTextCharFormat::VerticalAlignment a1_cpp;

      a1_cpp = js2cpp_QTextCharFormat_VerticalAlignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setVerticalAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: verticalAlignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::verticalAlignment
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
                QTextCharFormat* w = getWrapped();
                QTextCharFormat::VerticalAlignment res = 
                    
                w->verticalAlignment(
                  
                );
              
            // return type: QTextCharFormat::VerticalAlignment

            return cpp2js_QTextCharFormat_VerticalAlignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setTextOutline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setTextOutline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPen(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pen (QPen)
  
QPen a1_cpp;

      a1_cpp = js2cpp_QPen(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setTextOutline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextOutline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: textOutline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::textOutline
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
                QTextCharFormat* w = getWrapped();
                QPen res = 
                    
                w->textOutline(
                  
                );
              
            // return type: QPen

            return cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textOutline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setToolTip
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setToolTip
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
    
  // convert js parameter to cpp: tip (QString)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setToolTip(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setToolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: toolTip
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::toolTip
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
                QTextCharFormat* w = getWrapped();
                QString res = 
                    
                w->toolTip(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setSuperScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setSuperScriptBaseline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setSuperScriptBaseline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSuperScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: superScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::superScriptBaseline
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
                QTextCharFormat* w = getWrapped();
                qreal res = 
                    
                w->superScriptBaseline(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for superScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setSubScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setSubScriptBaseline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setSubScriptBaseline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSubScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: subScriptBaseline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::subScriptBaseline
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
                QTextCharFormat* w = getWrapped();
                qreal res = 
                    
                w->subScriptBaseline(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setBaselineOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setBaselineOffset
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setBaselineOffset(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBaselineOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: baselineOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::baselineOffset
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
                QTextCharFormat* w = getWrapped();
                qreal res = 
                    
                w->baselineOffset(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for baselineOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setAnchor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setAnchor
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
    
  // convert js parameter to cpp: anchor (bool)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setAnchor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: isAnchor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::isAnchor
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
                QTextCharFormat* w = getWrapped();
                bool res = 
                    
                w->isAnchor(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAnchor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setAnchorHref
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setAnchorHref
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
    
  // convert js parameter to cpp: value (QString)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setAnchorHref(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchorHref";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: anchorHref
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::anchorHref
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
                QTextCharFormat* w = getWrapped();
                QString res = 
                    
                w->anchorHref(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for anchorHref";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setAnchorNames
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setAnchorNames
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: names (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextCharFormat* w = getWrapped();
                
                w->setAnchorNames(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchorNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: anchorNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::anchorNames
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
                QTextCharFormat* w = getWrapped();
                QStringList res = 
                    
                w->anchorNames(
                  
                );
              
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for anchorNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setTableCellRowSpan
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setTableCellRowSpan
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
    
  // convert js parameter to cpp: tableCellRowSpan (int)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setTableCellRowSpan(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTableCellRowSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: tableCellRowSpan
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::tableCellRowSpan
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->tableCellRowSpan(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tableCellRowSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: setTableCellColumnSpan
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::setTableCellColumnSpan
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
    
  // convert js parameter to cpp: tableCellColumnSpan (int)
  
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
                QTextCharFormat* w = getWrapped();
                
                w->setTableCellColumnSpan(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTableCellColumnSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextCharFormat
    // Function: tableCellColumnSpan
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextCharFormat_Wrapper::tableCellColumnSpan
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
                QTextCharFormat* w = getWrapped();
                int res = 
                    
                w->tableCellColumnSpan(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tableCellColumnSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextBlockFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextBlockFormat_Wrapper>("org.qcad", 1, 0, "QTextBlockFormat_Wrapper");
        qmlRegisterInterface<QTextBlockFormat_Wrapper>("QTextBlockFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextBlockFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextBlockFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextBlockFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextBlockFormat_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextBlockFormat.js";
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
    QTextBlockFormat_Wrapper::QTextBlockFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextBlockFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextBlockFormat_Wrapper::QTextBlockFormat_Wrapper(RJSApi& h, QTextBlockFormat* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextBlockFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextBlockFormat_Wrapper"));
              //setObjectName("QTextBlockFormat_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextBlockFormat_Wrapper::~QTextBlockFormat_Wrapper() {
            //RDebug::decCounter(QString("QTextBlockFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextBlockFormat_Wrapper"));

            //qDebug() << "QTextBlockFormat_Wrapper::~QTextBlockFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextBlockFormat";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextBlockFormat_Wrapper::initConnections() {

          //setObjectName("QTextBlockFormat_Wrapper");

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
  
    // Class: QTextBlockFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QTextBlockFormat_Wrapper::QTextBlockFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextBlockFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextBlockFormat_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextBlockFormat(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QTextBlockFormat";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextBlockFormat
    // Function: swap
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: merge
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::merge
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->merge(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for merge";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isEmpty
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isEmpty
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: type
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::type
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
                QTextBlockFormat* w = getWrapped();
                int res = 
                    
                w->type(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: objectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::objectIndex
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
                QTextBlockFormat* w = getWrapped();
                int res = 
                    
                w->objectIndex(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setObjectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setObjectIndex
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
    
  // convert js parameter to cpp: object (int)
  
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
                QTextBlockFormat* w = getWrapped();
                
                w->setObjectIndex(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: property
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QTextLength(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: lengths (QList<QTextLength>)
  
QList<QTextLength> a2_cpp;

      a2_cpp = js2cpp_QList_QTextLength(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: clearProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::clearProperty
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
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                
                w->clearProperty(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: hasProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::hasProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->hasProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: boolProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::boolProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->boolProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boolProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: intProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::intProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                int res = 
                    
                w->intProperty(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: doubleProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::doubleProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                qreal res = 
                    
                w->doubleProperty(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: stringProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::stringProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                QString res = 
                    
                w->stringProperty(
                  a1_cpp
    
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stringProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: colorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::colorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                QColor res = 
                    
                w->colorProperty(
                  a1_cpp
    
                );
              
            // return type: QColor

            return cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: penProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::penProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                QPen res = 
                    
                w->penProperty(
                  a1_cpp
    
                );
              
            // return type: QPen

            return cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for penProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: brushProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::brushProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                QBrush res = 
                    
                w->brushProperty(
                  a1_cpp
    
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brushProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: lengthProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::lengthProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                QTextLength res = 
                    
                w->lengthProperty(
                  a1_cpp
    
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: lengthVectorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::lengthVectorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextBlockFormat* w = getWrapped();
                QList<QTextLength> res = 
                    
                w->lengthVectorProperty(
                  a1_cpp
    
                );
              
            // return type: QList<QTextLength>

            return cpp2js_QList_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthVectorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: propertyCount
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::propertyCount
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
                QTextBlockFormat* w = getWrapped();
                int res = 
                    
                w->propertyCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for propertyCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setObjectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setObjectType
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
    
  // convert js parameter to cpp: type (int)
  
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
                QTextBlockFormat* w = getWrapped();
                
                w->setObjectType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: objectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::objectType
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
                QTextBlockFormat* w = getWrapped();
                int res = 
                    
                w->objectType(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isCharFormat
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isCharFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isBlockFormat
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isBlockFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isListFormat
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isListFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isFrameFormat
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isFrameFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isImageFormat
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isImageFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isTableFormat
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isTableFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isTableCellFormat
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isTableCellFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: toBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::toBlockFormat
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
                QTextBlockFormat* w = getWrapped();
                QTextBlockFormat res = 
                    
                w->toBlockFormat(
                  
                );
              
            // return type: QTextBlockFormat

            return cpp2js_QTextBlockFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: toCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::toCharFormat
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
                QTextBlockFormat* w = getWrapped();
                QTextCharFormat res = 
                    
                w->toCharFormat(
                  
                );
              
            // return type: QTextCharFormat

            return cpp2js_QTextCharFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: toListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::toListFormat
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
                QTextBlockFormat* w = getWrapped();
                QTextListFormat res = 
                    
                w->toListFormat(
                  
                );
              
            // return type: QTextListFormat

            return cpp2js_QTextListFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: toTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::toTableFormat
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
                QTextBlockFormat* w = getWrapped();
                QTextTableFormat res = 
                    
                w->toTableFormat(
                  
                );
              
            // return type: QTextTableFormat

            return cpp2js_QTextTableFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: toFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::toFrameFormat
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
                QTextBlockFormat* w = getWrapped();
                QTextFrameFormat res = 
                    
                w->toFrameFormat(
                  
                );
              
            // return type: QTextFrameFormat

            return cpp2js_QTextFrameFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: toImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::toImageFormat
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
                QTextBlockFormat* w = getWrapped();
                QTextImageFormat res = 
                    
                w->toImageFormat(
                  
                );
              
            // return type: QTextImageFormat

            return cpp2js_QTextImageFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: toTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::toTableCellFormat
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
                QTextBlockFormat* w = getWrapped();
                QTextTableCellFormat res = 
                    
                w->toTableCellFormat(
                  
                );
              
            // return type: QTextTableCellFormat

            return cpp2js_QTextTableCellFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setLayoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setLayoutDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_LayoutDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: direction (Qt::LayoutDirection)
  
Qt::LayoutDirection a1_cpp;

      a1_cpp = js2cpp_Qt_LayoutDirection(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setLayoutDirection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: layoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::layoutDirection
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
                QTextBlockFormat* w = getWrapped();
                Qt::LayoutDirection res = 
                    
                w->layoutDirection(
                  
                );
              
            // return type: Qt::LayoutDirection

            return cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setBackground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setBackground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: background
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::background
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
                QTextBlockFormat* w = getWrapped();
                QBrush res = 
                    
                w->background(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for background";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: clearBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::clearBackground
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
                QTextBlockFormat* w = getWrapped();
                
                w->clearBackground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setForeground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setForeground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: foreground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::foreground
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
                QTextBlockFormat* w = getWrapped();
                QBrush res = 
                    
                w->foreground(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for foreground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: clearForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::clearForeground
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
                QTextBlockFormat* w = getWrapped();
                
                w->clearForeground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::isValid
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_Alignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alignment (Qt::Alignment)
  
Qt::Alignment a1_cpp;

      a1_cpp = js2cpp_Qt_Alignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: alignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::alignment
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
                QTextBlockFormat* w = getWrapped();
                Qt::Alignment res = 
                    
                w->alignment(
                  
                );
              
            // return type: Qt::Alignment

            return cpp2js_Qt_Alignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setTopMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setTopMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setTopMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: topMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::topMargin
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
                QTextBlockFormat* w = getWrapped();
                qreal res = 
                    
                w->topMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setBottomMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setBottomMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setBottomMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: bottomMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::bottomMargin
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
                QTextBlockFormat* w = getWrapped();
                qreal res = 
                    
                w->bottomMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setLeftMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setLeftMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setLeftMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: leftMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::leftMargin
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
                QTextBlockFormat* w = getWrapped();
                qreal res = 
                    
                w->leftMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setRightMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setRightMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setRightMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: rightMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::rightMargin
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
                QTextBlockFormat* w = getWrapped();
                qreal res = 
                    
                w->rightMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setTextIndent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setTextIndent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aindent (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setTextIndent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextIndent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: textIndent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::textIndent
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
                QTextBlockFormat* w = getWrapped();
                qreal res = 
                    
                w->textIndent(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textIndent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setIndent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setIndent
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
    
  // convert js parameter to cpp: indent (int)
  
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
                QTextBlockFormat* w = getWrapped();
                
                w->setIndent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIndent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: indent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::indent
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
                QTextBlockFormat* w = getWrapped();
                int res = 
                    
                w->indent(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for indent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setHeadingLevel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setHeadingLevel
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
    
  // convert js parameter to cpp: alevel (int)
  
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
                QTextBlockFormat* w = getWrapped();
                
                w->setHeadingLevel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeadingLevel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: headingLevel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::headingLevel
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
                QTextBlockFormat* w = getWrapped();
                int res = 
                    
                w->headingLevel(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for headingLevel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setLineHeight
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setLineHeight
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: height (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: heightType (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setLineHeight(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLineHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: lineHeight
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::lineHeight
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
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scriptLineHeight (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: scaling (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                qreal res = 
                    
                w->lineHeight(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
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
                QTextBlockFormat* w = getWrapped();
                qreal res = 
                    
                w->lineHeight(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: lineHeightType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::lineHeightType
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
                QTextBlockFormat* w = getWrapped();
                int res = 
                    
                w->lineHeightType(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineHeightType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setNonBreakableLines
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setNonBreakableLines
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
    
  // convert js parameter to cpp: b (bool)
  
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
                QTextBlockFormat* w = getWrapped();
                
                w->setNonBreakableLines(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNonBreakableLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: nonBreakableLines
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::nonBreakableLines
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
                QTextBlockFormat* w = getWrapped();
                bool res = 
                    
                w->nonBreakableLines(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nonBreakableLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: setPageBreakPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::setPageBreakPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat_PageBreakFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (QTextFormat::PageBreakFlags)
  
QTextFormat::PageBreakFlags a1_cpp;

      a1_cpp = js2cpp_QTextFormat_PageBreakFlags(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextBlockFormat* w = getWrapped();
                
                w->setPageBreakPolicy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPageBreakPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextBlockFormat
    // Function: pageBreakPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextBlockFormat_Wrapper::pageBreakPolicy
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
                QTextBlockFormat* w = getWrapped();
                QTextFormat::PageBreakFlags res = 
                    
                w->pageBreakPolicy(
                  
                );
              
            // return type: QTextFormat::PageBreakFlags

            return cpp2js_QTextFormat_PageBreakFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pageBreakPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextListFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextListFormat_Wrapper>("org.qcad", 1, 0, "QTextListFormat_Wrapper");
        qmlRegisterInterface<QTextListFormat_Wrapper>("QTextListFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextListFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextListFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextListFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextListFormat_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextListFormat.js";
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
    QTextListFormat_Wrapper::QTextListFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextListFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextListFormat_Wrapper::QTextListFormat_Wrapper(RJSApi& h, QTextListFormat* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextListFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextListFormat_Wrapper"));
              //setObjectName("QTextListFormat_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextListFormat_Wrapper::~QTextListFormat_Wrapper() {
            //RDebug::decCounter(QString("QTextListFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextListFormat_Wrapper"));

            //qDebug() << "QTextListFormat_Wrapper::~QTextListFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextListFormat";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextListFormat_Wrapper::initConnections() {

          //setObjectName("QTextListFormat_Wrapper");

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
  
    // Class: QTextListFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QTextListFormat_Wrapper::QTextListFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextListFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextListFormat_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextListFormat(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QTextListFormat";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextListFormat
    // Function: swap
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextListFormat* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: merge
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::merge
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextListFormat* w = getWrapped();
                
                w->merge(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for merge";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isEmpty
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isEmpty
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: type
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::type
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
                QTextListFormat* w = getWrapped();
                int res = 
                    
                w->type(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: objectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::objectIndex
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
                QTextListFormat* w = getWrapped();
                int res = 
                    
                w->objectIndex(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setObjectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setObjectIndex
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
    
  // convert js parameter to cpp: object (int)
  
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
                QTextListFormat* w = getWrapped();
                
                w->setObjectIndex(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: property
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextListFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QTextLength(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: lengths (QList<QTextLength>)
  
QList<QTextLength> a2_cpp;

      a2_cpp = js2cpp_QList_QTextLength(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextListFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: clearProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::clearProperty
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
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                
                w->clearProperty(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: hasProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::hasProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->hasProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: boolProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::boolProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->boolProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boolProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: intProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::intProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                int res = 
                    
                w->intProperty(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: doubleProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::doubleProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                qreal res = 
                    
                w->doubleProperty(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: stringProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::stringProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                QString res = 
                    
                w->stringProperty(
                  a1_cpp
    
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stringProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: colorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::colorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                QColor res = 
                    
                w->colorProperty(
                  a1_cpp
    
                );
              
            // return type: QColor

            return cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: penProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::penProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                QPen res = 
                    
                w->penProperty(
                  a1_cpp
    
                );
              
            // return type: QPen

            return cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for penProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: brushProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::brushProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                QBrush res = 
                    
                w->brushProperty(
                  a1_cpp
    
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brushProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: lengthProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::lengthProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                QTextLength res = 
                    
                w->lengthProperty(
                  a1_cpp
    
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: lengthVectorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::lengthVectorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextListFormat* w = getWrapped();
                QList<QTextLength> res = 
                    
                w->lengthVectorProperty(
                  a1_cpp
    
                );
              
            // return type: QList<QTextLength>

            return cpp2js_QList_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthVectorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: propertyCount
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::propertyCount
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
                QTextListFormat* w = getWrapped();
                int res = 
                    
                w->propertyCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for propertyCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setObjectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setObjectType
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
    
  // convert js parameter to cpp: type (int)
  
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
                QTextListFormat* w = getWrapped();
                
                w->setObjectType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: objectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::objectType
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
                QTextListFormat* w = getWrapped();
                int res = 
                    
                w->objectType(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isCharFormat
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isCharFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isBlockFormat
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isBlockFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isListFormat
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isListFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isFrameFormat
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isFrameFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isImageFormat
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isImageFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isTableFormat
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isTableFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isTableCellFormat
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isTableCellFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: toBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::toBlockFormat
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
                QTextListFormat* w = getWrapped();
                QTextBlockFormat res = 
                    
                w->toBlockFormat(
                  
                );
              
            // return type: QTextBlockFormat

            return cpp2js_QTextBlockFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: toCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::toCharFormat
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
                QTextListFormat* w = getWrapped();
                QTextCharFormat res = 
                    
                w->toCharFormat(
                  
                );
              
            // return type: QTextCharFormat

            return cpp2js_QTextCharFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: toListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::toListFormat
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
                QTextListFormat* w = getWrapped();
                QTextListFormat res = 
                    
                w->toListFormat(
                  
                );
              
            // return type: QTextListFormat

            return cpp2js_QTextListFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: toTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::toTableFormat
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
                QTextListFormat* w = getWrapped();
                QTextTableFormat res = 
                    
                w->toTableFormat(
                  
                );
              
            // return type: QTextTableFormat

            return cpp2js_QTextTableFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: toFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::toFrameFormat
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
                QTextListFormat* w = getWrapped();
                QTextFrameFormat res = 
                    
                w->toFrameFormat(
                  
                );
              
            // return type: QTextFrameFormat

            return cpp2js_QTextFrameFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: toImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::toImageFormat
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
                QTextListFormat* w = getWrapped();
                QTextImageFormat res = 
                    
                w->toImageFormat(
                  
                );
              
            // return type: QTextImageFormat

            return cpp2js_QTextImageFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: toTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::toTableCellFormat
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
                QTextListFormat* w = getWrapped();
                QTextTableCellFormat res = 
                    
                w->toTableCellFormat(
                  
                );
              
            // return type: QTextTableCellFormat

            return cpp2js_QTextTableCellFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setLayoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setLayoutDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_LayoutDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: direction (Qt::LayoutDirection)
  
Qt::LayoutDirection a1_cpp;

      a1_cpp = js2cpp_Qt_LayoutDirection(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextListFormat* w = getWrapped();
                
                w->setLayoutDirection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: layoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::layoutDirection
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
                QTextListFormat* w = getWrapped();
                Qt::LayoutDirection res = 
                    
                w->layoutDirection(
                  
                );
              
            // return type: Qt::LayoutDirection

            return cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setBackground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextListFormat* w = getWrapped();
                
                w->setBackground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: background
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::background
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
                QTextListFormat* w = getWrapped();
                QBrush res = 
                    
                w->background(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for background";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: clearBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::clearBackground
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
                QTextListFormat* w = getWrapped();
                
                w->clearBackground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setForeground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextListFormat* w = getWrapped();
                
                w->setForeground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: foreground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::foreground
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
                QTextListFormat* w = getWrapped();
                QBrush res = 
                    
                w->foreground(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for foreground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: clearForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::clearForeground
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
                QTextListFormat* w = getWrapped();
                
                w->clearForeground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::isValid
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
                QTextListFormat* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextListFormat_Style(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextListFormat::Style)
  
QTextListFormat::Style a1_cpp;

      a1_cpp = js2cpp_QTextListFormat_Style(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextListFormat* w = getWrapped();
                
                w->setStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: style
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::style
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
                QTextListFormat* w = getWrapped();
                QTextListFormat::Style res = 
                    
                w->style(
                  
                );
              
            // return type: QTextListFormat::Style

            return cpp2js_QTextListFormat_Style(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for style";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setIndent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setIndent
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
    
  // convert js parameter to cpp: indent (int)
  
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
                QTextListFormat* w = getWrapped();
                
                w->setIndent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIndent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: indent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::indent
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
                QTextListFormat* w = getWrapped();
                int res = 
                    
                w->indent(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for indent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setNumberPrefix
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setNumberPrefix
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
    
  // convert js parameter to cpp: numberPrefix (QString)
  
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
                QTextListFormat* w = getWrapped();
                
                w->setNumberPrefix(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNumberPrefix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: numberPrefix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::numberPrefix
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
                QTextListFormat* w = getWrapped();
                QString res = 
                    
                w->numberPrefix(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for numberPrefix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: setNumberSuffix
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::setNumberSuffix
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
    
  // convert js parameter to cpp: numberSuffix (QString)
  
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
                QTextListFormat* w = getWrapped();
                
                w->setNumberSuffix(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNumberSuffix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextListFormat
    // Function: numberSuffix
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextListFormat_Wrapper::numberSuffix
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
                QTextListFormat* w = getWrapped();
                QString res = 
                    
                w->numberSuffix(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for numberSuffix";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextImageFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextImageFormat_Wrapper>("org.qcad", 1, 0, "QTextImageFormat_Wrapper");
        qmlRegisterInterface<QTextImageFormat_Wrapper>("QTextImageFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextImageFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextImageFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextImageFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextImageFormat_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextImageFormat.js";
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
    QTextImageFormat_Wrapper::QTextImageFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextImageFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextImageFormat_Wrapper::QTextImageFormat_Wrapper(RJSApi& h, QTextImageFormat* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextImageFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextImageFormat_Wrapper"));
              //setObjectName("QTextImageFormat_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextImageFormat_Wrapper::~QTextImageFormat_Wrapper() {
            //RDebug::decCounter(QString("QTextImageFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextImageFormat_Wrapper"));

            //qDebug() << "QTextImageFormat_Wrapper::~QTextImageFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextImageFormat";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextImageFormat_Wrapper::initConnections() {

          //setObjectName("QTextImageFormat_Wrapper");

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
  
    // Class: QTextImageFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QTextImageFormat_Wrapper::QTextImageFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextImageFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextImageFormat_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextImageFormat(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QTextImageFormat";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextImageFormat
    // Function: setFont
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFont
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont(handler, a1
  )

   && is_QTextCharFormat_FontPropertiesInheritanceBehavior(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = js2cpp_QFont(handler, a1);
        
  // convert js parameter to cpp: behavior (QTextCharFormat::FontPropertiesInheritanceBehavior)
  
QTextCharFormat::FontPropertiesInheritanceBehavior a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QTextCharFormat::FontPropertiesAll;
          }
          else {
            a2_cpp = js2cpp_QTextCharFormat_FontPropertiesInheritanceBehavior(handler, a2);
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
                QTextImageFormat* w = getWrapped();
                
                w->setFont(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: font
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::font
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
                QTextImageFormat* w = getWrapped();
                QFont res = 
                    
                w->font(
                  
                );
              
            // return type: QFont

            return cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontFamilies
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontFamilies
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: families (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setFontFamilies(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontFamilies";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontFamilies
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontFamilies
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
                QTextImageFormat* w = getWrapped();
                QVariant res = 
                    
                w->fontFamilies(
                  
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontFamilies";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontStyleName
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontStyleName
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
    
  // convert js parameter to cpp: styleName (QString)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontStyleName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontStyleName
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontStyleName
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
                QTextImageFormat* w = getWrapped();
                QVariant res = 
                    
                w->fontStyleName(
                  
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontPointSize
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontPointSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setFontPointSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontPointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontPointSize
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontPointSize
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
                QTextImageFormat* w = getWrapped();
                qreal res = 
                    
                w->fontPointSize(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontPointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontWeight
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontWeight
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
    
  // convert js parameter to cpp: weight (int)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontWeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontWeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontWeight
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontWeight
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
                QTextImageFormat* w = getWrapped();
                int res = 
                    
                w->fontWeight(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontWeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontItalic
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontItalic
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
    
  // convert js parameter to cpp: italic (bool)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontItalic(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontItalic
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontItalic
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
                QTextImageFormat* w = getWrapped();
                bool res = 
                    
                w->fontItalic(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontCapitalization
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontCapitalization
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_Capitalization(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: capitalization (QFont::Capitalization)
  
QFont::Capitalization a1_cpp;

      a1_cpp = js2cpp_QFont_Capitalization(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setFontCapitalization(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontCapitalization";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontCapitalization
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontCapitalization
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
                QTextImageFormat* w = getWrapped();
                QFont::Capitalization res = 
                    
                w->fontCapitalization(
                  
                );
              
            // return type: QFont::Capitalization

            return cpp2js_QFont_Capitalization(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontCapitalization";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontLetterSpacingType
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontLetterSpacingType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_SpacingType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: letterSpacingType (QFont::SpacingType)
  
QFont::SpacingType a1_cpp;

      a1_cpp = js2cpp_QFont_SpacingType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setFontLetterSpacingType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontLetterSpacingType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontLetterSpacingType
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontLetterSpacingType
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
                QTextImageFormat* w = getWrapped();
                QFont::SpacingType res = 
                    
                w->fontLetterSpacingType(
                  
                );
              
            // return type: QFont::SpacingType

            return cpp2js_QFont_SpacingType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontLetterSpacingType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontLetterSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontLetterSpacing
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spacing (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setFontLetterSpacing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontLetterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontLetterSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontLetterSpacing
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
                QTextImageFormat* w = getWrapped();
                qreal res = 
                    
                w->fontLetterSpacing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontLetterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontWordSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontWordSpacing
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spacing (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setFontWordSpacing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontWordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontWordSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontWordSpacing
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
                QTextImageFormat* w = getWrapped();
                qreal res = 
                    
                w->fontWordSpacing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontWordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontUnderline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontUnderline
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
    
  // convert js parameter to cpp: underline (bool)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontUnderline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontUnderline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontUnderline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontUnderline
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
                QTextImageFormat* w = getWrapped();
                bool res = 
                    
                w->fontUnderline(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontUnderline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontOverline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontOverline
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
    
  // convert js parameter to cpp: overline (bool)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontOverline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontOverline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontOverline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontOverline
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
                QTextImageFormat* w = getWrapped();
                bool res = 
                    
                w->fontOverline(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontOverline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontStrikeOut
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontStrikeOut
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
    
  // convert js parameter to cpp: strikeOut (bool)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontStrikeOut(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStrikeOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontStrikeOut
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontStrikeOut
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
                QTextImageFormat* w = getWrapped();
                bool res = 
                    
                w->fontStrikeOut(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStrikeOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setUnderlineColor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setUnderlineColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (QColor)
  
QColor a1_cpp;

      a1_cpp = js2cpp_QColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setUnderlineColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnderlineColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: underlineColor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::underlineColor
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
                QTextImageFormat* w = getWrapped();
                QColor res = 
                    
                w->underlineColor(
                  
                );
              
            // return type: QColor

            return cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underlineColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontFixedPitch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontFixedPitch
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
    
  // convert js parameter to cpp: fixedPitch (bool)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontFixedPitch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontFixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontFixedPitch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontFixedPitch
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
                QTextImageFormat* w = getWrapped();
                bool res = 
                    
                w->fontFixedPitch(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontFixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontStretch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontStretch
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
    
  // convert js parameter to cpp: factor (int)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontStretch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontStretch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontStretch
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
                QTextImageFormat* w = getWrapped();
                int res = 
                    
                w->fontStretch(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontStyleHint
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontStyleHint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_StyleHint(handler, a1
  )

   && is_QFont_StyleStrategy(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (QFont::StyleHint)
  
QFont::StyleHint a1_cpp;

      a1_cpp = js2cpp_QFont_StyleHint(handler, a1);
        
  // convert js parameter to cpp: strategy (QFont::StyleStrategy)
  
QFont::StyleStrategy a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QFont::PreferDefault;
          }
          else {
            a2_cpp = js2cpp_QFont_StyleStrategy(handler, a2);
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontStyleHint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontStyleStrategy
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontStyleStrategy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_StyleStrategy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: strategy (QFont::StyleStrategy)
  
QFont::StyleStrategy a1_cpp;

      a1_cpp = js2cpp_QFont_StyleStrategy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setFontStyleStrategy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleStrategy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontStyleHint
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontStyleHint
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
                QTextImageFormat* w = getWrapped();
                QFont::StyleHint res = 
                    
                w->fontStyleHint(
                  
                );
              
            // return type: QFont::StyleHint

            return cpp2js_QFont_StyleHint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontStyleStrategy
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontStyleStrategy
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
                QTextImageFormat* w = getWrapped();
                QFont::StyleStrategy res = 
                    
                w->fontStyleStrategy(
                  
                );
              
            // return type: QFont::StyleStrategy

            return cpp2js_QFont_StyleStrategy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleStrategy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontHintingPreference
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontHintingPreference
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_HintingPreference(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hintingPreference (QFont::HintingPreference)
  
QFont::HintingPreference a1_cpp;

      a1_cpp = js2cpp_QFont_HintingPreference(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setFontHintingPreference(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontHintingPreference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontHintingPreference
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontHintingPreference
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
                QTextImageFormat* w = getWrapped();
                QFont::HintingPreference res = 
                    
                w->fontHintingPreference(
                  
                );
              
            // return type: QFont::HintingPreference

            return cpp2js_QFont_HintingPreference(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontHintingPreference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setFontKerning
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setFontKerning
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
    
  // convert js parameter to cpp: enable (bool)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setFontKerning(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontKerning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: fontKerning
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::fontKerning
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
                QTextImageFormat* w = getWrapped();
                bool res = 
                    
                w->fontKerning(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontKerning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setUnderlineStyle
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setUnderlineStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextCharFormat_UnderlineStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextCharFormat::UnderlineStyle)
  
QTextCharFormat::UnderlineStyle a1_cpp;

      a1_cpp = js2cpp_QTextCharFormat_UnderlineStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setUnderlineStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnderlineStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: underlineStyle
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::underlineStyle
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
                QTextImageFormat* w = getWrapped();
                QTextCharFormat::UnderlineStyle res = 
                    
                w->underlineStyle(
                  
                );
              
            // return type: QTextCharFormat::UnderlineStyle

            return cpp2js_QTextCharFormat_UnderlineStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underlineStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setVerticalAlignment
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setVerticalAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextCharFormat_VerticalAlignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alignment (QTextCharFormat::VerticalAlignment)
  
QTextCharFormat::VerticalAlignment a1_cpp;

      a1_cpp = js2cpp_QTextCharFormat_VerticalAlignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setVerticalAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: verticalAlignment
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::verticalAlignment
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
                QTextImageFormat* w = getWrapped();
                QTextCharFormat::VerticalAlignment res = 
                    
                w->verticalAlignment(
                  
                );
              
            // return type: QTextCharFormat::VerticalAlignment

            return cpp2js_QTextCharFormat_VerticalAlignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setTextOutline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setTextOutline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPen(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pen (QPen)
  
QPen a1_cpp;

      a1_cpp = js2cpp_QPen(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setTextOutline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextOutline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: textOutline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::textOutline
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
                QTextImageFormat* w = getWrapped();
                QPen res = 
                    
                w->textOutline(
                  
                );
              
            // return type: QPen

            return cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textOutline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setToolTip
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setToolTip
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
    
  // convert js parameter to cpp: tip (QString)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setToolTip(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setToolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: toolTip
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::toolTip
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
                QTextImageFormat* w = getWrapped();
                QString res = 
                    
                w->toolTip(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setSuperScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setSuperScriptBaseline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setSuperScriptBaseline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSuperScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: superScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::superScriptBaseline
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
                QTextImageFormat* w = getWrapped();
                qreal res = 
                    
                w->superScriptBaseline(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for superScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setSubScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setSubScriptBaseline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setSubScriptBaseline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSubScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: subScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::subScriptBaseline
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
                QTextImageFormat* w = getWrapped();
                qreal res = 
                    
                w->subScriptBaseline(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setBaselineOffset
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setBaselineOffset
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setBaselineOffset(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBaselineOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: baselineOffset
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::baselineOffset
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
                QTextImageFormat* w = getWrapped();
                qreal res = 
                    
                w->baselineOffset(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for baselineOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setAnchor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setAnchor
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
    
  // convert js parameter to cpp: anchor (bool)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setAnchor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: isAnchor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::isAnchor
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
                QTextImageFormat* w = getWrapped();
                bool res = 
                    
                w->isAnchor(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAnchor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setAnchorHref
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setAnchorHref
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
    
  // convert js parameter to cpp: value (QString)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setAnchorHref(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchorHref";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: anchorHref
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::anchorHref
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
                QTextImageFormat* w = getWrapped();
                QString res = 
                    
                w->anchorHref(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for anchorHref";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setAnchorNames
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setAnchorNames
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: names (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setAnchorNames(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchorNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: anchorNames
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::anchorNames
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
                QTextImageFormat* w = getWrapped();
                QStringList res = 
                    
                w->anchorNames(
                  
                );
              
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for anchorNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setTableCellRowSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setTableCellRowSpan
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
    
  // convert js parameter to cpp: tableCellRowSpan (int)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setTableCellRowSpan(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTableCellRowSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: tableCellRowSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::tableCellRowSpan
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
                QTextImageFormat* w = getWrapped();
                int res = 
                    
                w->tableCellRowSpan(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tableCellRowSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setTableCellColumnSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setTableCellColumnSpan
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
    
  // convert js parameter to cpp: tableCellColumnSpan (int)
  
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
                QTextImageFormat* w = getWrapped();
                
                w->setTableCellColumnSpan(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTableCellColumnSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: tableCellColumnSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::tableCellColumnSpan
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
                QTextImageFormat* w = getWrapped();
                int res = 
                    
                w->tableCellColumnSpan(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tableCellColumnSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::isValid
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
                QTextImageFormat* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setName
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
                QTextImageFormat* w = getWrapped();
                
                w->setName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::name
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
                QTextImageFormat* w = getWrapped();
                QString res = 
                    
                w->name(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::width
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
                QTextImageFormat* w = getWrapped();
                qreal res = 
                    
                w->width(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setHeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: height (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextImageFormat* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::height
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
                QTextImageFormat* w = getWrapped();
                qreal res = 
                    
                w->height(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: setQuality
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::setQuality
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: quality (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 100;
          }
          else {
            a1_cpp = js2cpp_int(handler, a1);
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
                QTextImageFormat* w = getWrapped();
                
                w->setQuality(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuality";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextImageFormat
    // Function: quality
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextImageFormat_Wrapper::quality
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
                QTextImageFormat* w = getWrapped();
                int res = 
                    
                w->quality(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for quality";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextFrameFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextFrameFormat_Wrapper>("org.qcad", 1, 0, "QTextFrameFormat_Wrapper");
        qmlRegisterInterface<QTextFrameFormat_Wrapper>("QTextFrameFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextFrameFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextFrameFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextFrameFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextFrameFormat_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextFrameFormat.js";
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
    QTextFrameFormat_Wrapper::QTextFrameFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextFrameFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextFrameFormat_Wrapper::QTextFrameFormat_Wrapper(RJSApi& h, QTextFrameFormat* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextFrameFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextFrameFormat_Wrapper"));
              //setObjectName("QTextFrameFormat_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextFrameFormat_Wrapper::~QTextFrameFormat_Wrapper() {
            //RDebug::decCounter(QString("QTextFrameFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextFrameFormat_Wrapper"));

            //qDebug() << "QTextFrameFormat_Wrapper::~QTextFrameFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextFrameFormat";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextFrameFormat_Wrapper::initConnections() {

          //setObjectName("QTextFrameFormat_Wrapper");

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
  
    // Class: QTextFrameFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QTextFrameFormat_Wrapper::QTextFrameFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextFrameFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextFrameFormat_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextFrameFormat(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QTextFrameFormat";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextFrameFormat
    // Function: swap
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: merge
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::merge
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTextFormat)
  
QTextFormat a1_cpp;

      a1_cpp = js2cpp_QTextFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->merge(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for merge";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isEmpty
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isEmpty
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: type
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::type
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
                QTextFrameFormat* w = getWrapped();
                int res = 
                    
                w->type(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: objectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::objectIndex
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
                QTextFrameFormat* w = getWrapped();
                int res = 
                    
                w->objectIndex(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setObjectIndex
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setObjectIndex
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
    
  // convert js parameter to cpp: object (int)
  
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
                QTextFrameFormat* w = getWrapped();
                
                w->setObjectIndex(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: property
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_QList_QTextLength(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: lengths (QList<QTextLength>)
  
QList<QTextLength> a2_cpp;

      a2_cpp = js2cpp_QList_QTextLength(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: clearProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::clearProperty
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
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                
                w->clearProperty(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: hasProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::hasProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->hasProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: boolProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::boolProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->boolProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boolProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: intProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::intProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                int res = 
                    
                w->intProperty(
                  a1_cpp
    
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: doubleProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::doubleProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                qreal res = 
                    
                w->doubleProperty(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for doubleProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: stringProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::stringProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                QString res = 
                    
                w->stringProperty(
                  a1_cpp
    
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stringProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: colorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::colorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                QColor res = 
                    
                w->colorProperty(
                  a1_cpp
    
                );
              
            // return type: QColor

            return cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: penProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::penProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                QPen res = 
                    
                w->penProperty(
                  a1_cpp
    
                );
              
            // return type: QPen

            return cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for penProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: brushProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::brushProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                QBrush res = 
                    
                w->brushProperty(
                  a1_cpp
    
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brushProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: lengthProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::lengthProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                QTextLength res = 
                    
                w->lengthProperty(
                  a1_cpp
    
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: lengthVectorProperty
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::lengthVectorProperty
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: propertyId (int)
  
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
                QTextFrameFormat* w = getWrapped();
                QList<QTextLength> res = 
                    
                w->lengthVectorProperty(
                  a1_cpp
    
                );
              
            // return type: QList<QTextLength>

            return cpp2js_QList_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lengthVectorProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: propertyCount
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::propertyCount
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
                QTextFrameFormat* w = getWrapped();
                int res = 
                    
                w->propertyCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for propertyCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setObjectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setObjectType
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
    
  // convert js parameter to cpp: type (int)
  
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
                QTextFrameFormat* w = getWrapped();
                
                w->setObjectType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: objectType
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::objectType
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
                QTextFrameFormat* w = getWrapped();
                int res = 
                    
                w->objectType(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isCharFormat
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isCharFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isBlockFormat
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isBlockFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isListFormat
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isListFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isFrameFormat
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isFrameFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isImageFormat
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isImageFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isTableFormat
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isTableFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isTableCellFormat
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isTableCellFormat(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: toBlockFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::toBlockFormat
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
                QTextFrameFormat* w = getWrapped();
                QTextBlockFormat res = 
                    
                w->toBlockFormat(
                  
                );
              
            // return type: QTextBlockFormat

            return cpp2js_QTextBlockFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toBlockFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: toCharFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::toCharFormat
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
                QTextFrameFormat* w = getWrapped();
                QTextCharFormat res = 
                    
                w->toCharFormat(
                  
                );
              
            // return type: QTextCharFormat

            return cpp2js_QTextCharFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCharFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: toListFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::toListFormat
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
                QTextFrameFormat* w = getWrapped();
                QTextListFormat res = 
                    
                w->toListFormat(
                  
                );
              
            // return type: QTextListFormat

            return cpp2js_QTextListFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toListFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: toTableFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::toTableFormat
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
                QTextFrameFormat* w = getWrapped();
                QTextTableFormat res = 
                    
                w->toTableFormat(
                  
                );
              
            // return type: QTextTableFormat

            return cpp2js_QTextTableFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: toFrameFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::toFrameFormat
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
                QTextFrameFormat* w = getWrapped();
                QTextFrameFormat res = 
                    
                w->toFrameFormat(
                  
                );
              
            // return type: QTextFrameFormat

            return cpp2js_QTextFrameFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFrameFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: toImageFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::toImageFormat
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
                QTextFrameFormat* w = getWrapped();
                QTextImageFormat res = 
                    
                w->toImageFormat(
                  
                );
              
            // return type: QTextImageFormat

            return cpp2js_QTextImageFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: toTableCellFormat
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::toTableCellFormat
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
                QTextFrameFormat* w = getWrapped();
                QTextTableCellFormat res = 
                    
                w->toTableCellFormat(
                  
                );
              
            // return type: QTextTableCellFormat

            return cpp2js_QTextTableCellFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toTableCellFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setLayoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setLayoutDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_LayoutDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: direction (Qt::LayoutDirection)
  
Qt::LayoutDirection a1_cpp;

      a1_cpp = js2cpp_Qt_LayoutDirection(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setLayoutDirection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: layoutDirection
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::layoutDirection
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
                QTextFrameFormat* w = getWrapped();
                Qt::LayoutDirection res = 
                    
                w->layoutDirection(
                  
                );
              
            // return type: Qt::LayoutDirection

            return cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setBackground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setBackground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: background
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::background
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
                QTextFrameFormat* w = getWrapped();
                QBrush res = 
                    
                w->background(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for background";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: clearBackground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::clearBackground
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
                QTextFrameFormat* w = getWrapped();
                
                w->clearBackground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setForeground
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setForeground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: foreground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::foreground
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
                QTextFrameFormat* w = getWrapped();
                QBrush res = 
                    
                w->foreground(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for foreground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: clearForeground
    // Source: QTextFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::clearForeground
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
                QTextFrameFormat* w = getWrapped();
                
                w->clearForeground(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearForeground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::isValid
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
                QTextFrameFormat* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setPosition
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_Position(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (QTextFrameFormat::Position)
  
QTextFrameFormat::Position a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_Position(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::position
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
                QTextFrameFormat* w = getWrapped();
                QTextFrameFormat::Position res = 
                    
                w->position(
                  
                );
              
            // return type: QTextFrameFormat::Position

            return cpp2js_QTextFrameFormat_Position(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for position";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setBorder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: border (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setBorder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: border
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::border
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
                QTextFrameFormat* w = getWrapped();
                qreal res = 
                    
                w->border(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for border";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setBorderBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setBorderBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: borderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::borderBrush
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
                QTextFrameFormat* w = getWrapped();
                QBrush res = 
                    
                w->borderBrush(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for borderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setBorderStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_BorderStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextFrameFormat::BorderStyle)
  
QTextFrameFormat::BorderStyle a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_BorderStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setBorderStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: borderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::borderStyle
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
                QTextFrameFormat* w = getWrapped();
                QTextFrameFormat::BorderStyle res = 
                    
                w->borderStyle(
                  
                );
              
            // return type: QTextFrameFormat::BorderStyle

            return cpp2js_QTextFrameFormat_BorderStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for borderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: margin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::margin
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
                QTextFrameFormat* w = getWrapped();
                qreal res = 
                    
                w->margin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for margin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setTopMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setTopMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setTopMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: topMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::topMargin
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
                QTextFrameFormat* w = getWrapped();
                qreal res = 
                    
                w->topMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setBottomMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setBottomMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setBottomMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: bottomMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::bottomMargin
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
                QTextFrameFormat* w = getWrapped();
                qreal res = 
                    
                w->bottomMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setLeftMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setLeftMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setLeftMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: leftMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::leftMargin
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
                QTextFrameFormat* w = getWrapped();
                qreal res = 
                    
                w->leftMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setRightMargin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setRightMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setRightMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: rightMargin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::rightMargin
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
                QTextFrameFormat* w = getWrapped();
                qreal res = 
                    
                w->rightMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setPadding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: padding (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setPadding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: padding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::padding
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
                QTextFrameFormat* w = getWrapped();
                qreal res = 
                    
                w->padding(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for padding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QTextLength(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: length (QTextLength)
  
QTextLength a1_cpp;

      a1_cpp = js2cpp_QTextLength(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::width
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
                QTextFrameFormat* w = getWrapped();
                QTextLength res = 
                    
                w->width(
                  
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setHeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: height (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QTextLength(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: height (QTextLength)
  
QTextLength a1_cpp;

      a1_cpp = js2cpp_QTextLength(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::height
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
                QTextFrameFormat* w = getWrapped();
                QTextLength res = 
                    
                w->height(
                  
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: setPageBreakPolicy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::setPageBreakPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat_PageBreakFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (QTextFormat::PageBreakFlags)
  
QTextFormat::PageBreakFlags a1_cpp;

      a1_cpp = js2cpp_QTextFormat_PageBreakFlags(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextFrameFormat* w = getWrapped();
                
                w->setPageBreakPolicy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPageBreakPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextFrameFormat
    // Function: pageBreakPolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextFrameFormat_Wrapper::pageBreakPolicy
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
                QTextFrameFormat* w = getWrapped();
                QTextFormat::PageBreakFlags res = 
                    
                w->pageBreakPolicy(
                  
                );
              
            // return type: QTextFormat::PageBreakFlags

            return cpp2js_QTextFormat_PageBreakFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pageBreakPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextTableFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextTableFormat_Wrapper>("org.qcad", 1, 0, "QTextTableFormat_Wrapper");
        qmlRegisterInterface<QTextTableFormat_Wrapper>("QTextTableFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextTableFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextTableFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextTableFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextTableFormat_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextTableFormat.js";
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
    QTextTableFormat_Wrapper::QTextTableFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextTableFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextTableFormat_Wrapper::QTextTableFormat_Wrapper(RJSApi& h, QTextTableFormat* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextTableFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextTableFormat_Wrapper"));
              //setObjectName("QTextTableFormat_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextTableFormat_Wrapper::~QTextTableFormat_Wrapper() {
            //RDebug::decCounter(QString("QTextTableFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextTableFormat_Wrapper"));

            //qDebug() << "QTextTableFormat_Wrapper::~QTextTableFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextTableFormat";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextTableFormat_Wrapper::initConnections() {

          //setObjectName("QTextTableFormat_Wrapper");

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
  
    // Class: QTextTableFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QTextTableFormat_Wrapper::QTextTableFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextTableFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextTableFormat_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextTableFormat(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QTextTableFormat";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextTableFormat
    // Function: setPosition
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setPosition
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_Position(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (QTextFrameFormat::Position)
  
QTextFrameFormat::Position a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_Position(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: position
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::position
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
                QTextTableFormat* w = getWrapped();
                QTextFrameFormat::Position res = 
                    
                w->position(
                  
                );
              
            // return type: QTextFrameFormat::Position

            return cpp2js_QTextFrameFormat_Position(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for position";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setBorder
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setBorder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: border (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setBorder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: border
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::border
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->border(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for border";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setBorderBrush
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setBorderBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setBorderBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: borderBrush
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::borderBrush
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
                QTextTableFormat* w = getWrapped();
                QBrush res = 
                    
                w->borderBrush(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for borderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setBorderStyle
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setBorderStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_BorderStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextFrameFormat::BorderStyle)
  
QTextFrameFormat::BorderStyle a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_BorderStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setBorderStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: borderStyle
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::borderStyle
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
                QTextTableFormat* w = getWrapped();
                QTextFrameFormat::BorderStyle res = 
                    
                w->borderStyle(
                  
                );
              
            // return type: QTextFrameFormat::BorderStyle

            return cpp2js_QTextFrameFormat_BorderStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for borderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: margin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::margin
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->margin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for margin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setTopMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setTopMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setTopMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: topMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::topMargin
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->topMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setBottomMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setBottomMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setBottomMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: bottomMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::bottomMargin
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->bottomMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setLeftMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setLeftMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setLeftMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: leftMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::leftMargin
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->leftMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setRightMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setRightMargin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margin (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setRightMargin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: rightMargin
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::rightMargin
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->rightMargin(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightMargin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setPadding
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setPadding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: padding (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setPadding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: padding
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::padding
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->padding(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for padding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setWidth
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QTextLength(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: length (QTextLength)
  
QTextLength a1_cpp;

      a1_cpp = js2cpp_QTextLength(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: width
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::width
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
                QTextTableFormat* w = getWrapped();
                QTextLength res = 
                    
                w->width(
                  
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setHeight
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setHeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: height (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QTextLength(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: height (QTextLength)
  
QTextLength a1_cpp;

      a1_cpp = js2cpp_QTextLength(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: height
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::height
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
                QTextTableFormat* w = getWrapped();
                QTextLength res = 
                    
                w->height(
                  
                );
              
            // return type: QTextLength

            return cpp2js_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setPageBreakPolicy
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setPageBreakPolicy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFormat_PageBreakFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (QTextFormat::PageBreakFlags)
  
QTextFormat::PageBreakFlags a1_cpp;

      a1_cpp = js2cpp_QTextFormat_PageBreakFlags(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setPageBreakPolicy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPageBreakPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: pageBreakPolicy
    // Source: QTextFrameFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::pageBreakPolicy
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
                QTextTableFormat* w = getWrapped();
                QTextFormat::PageBreakFlags res = 
                    
                w->pageBreakPolicy(
                  
                );
              
            // return type: QTextFormat::PageBreakFlags

            return cpp2js_QTextFormat_PageBreakFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pageBreakPolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::isValid
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
                QTextTableFormat* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: columns
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::columns
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
                QTextTableFormat* w = getWrapped();
                int res = 
                    
                w->columns(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setColumns
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setColumns
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
    
  // convert js parameter to cpp: columns (int)
  
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
                QTextTableFormat* w = getWrapped();
                
                w->setColumns(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setColumnWidthConstraints
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setColumnWidthConstraints
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QList_QTextLength(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: constraints (QList<QTextLength>)
  
QList<QTextLength> a1_cpp;

      a1_cpp = js2cpp_QList_QTextLength(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setColumnWidthConstraints(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColumnWidthConstraints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: columnWidthConstraints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::columnWidthConstraints
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
                QTextTableFormat* w = getWrapped();
                QList<QTextLength> res = 
                    
                w->columnWidthConstraints(
                  
                );
              
            // return type: QList<QTextLength>

            return cpp2js_QList_QTextLength(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columnWidthConstraints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: clearColumnWidthConstraints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::clearColumnWidthConstraints
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
                QTextTableFormat* w = getWrapped();
                
                w->clearColumnWidthConstraints(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearColumnWidthConstraints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: cellSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::cellSpacing
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->cellSpacing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cellSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setCellSpacing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setCellSpacing
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spacing (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setCellSpacing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCellSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: cellPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::cellPadding
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
                QTextTableFormat* w = getWrapped();
                qreal res = 
                    
                w->cellPadding(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cellPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setCellPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setCellPadding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: padding (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setCellPadding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCellPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_Alignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alignment (Qt::Alignment)
  
Qt::Alignment a1_cpp;

      a1_cpp = js2cpp_Qt_Alignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableFormat* w = getWrapped();
                
                w->setAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: alignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::alignment
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
                QTextTableFormat* w = getWrapped();
                Qt::Alignment res = 
                    
                w->alignment(
                  
                );
              
            // return type: Qt::Alignment

            return cpp2js_Qt_Alignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setHeaderRowCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setHeaderRowCount
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
    
  // convert js parameter to cpp: count (int)
  
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
                QTextTableFormat* w = getWrapped();
                
                w->setHeaderRowCount(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeaderRowCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: headerRowCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::headerRowCount
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
                QTextTableFormat* w = getWrapped();
                int res = 
                    
                w->headerRowCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for headerRowCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: setBorderCollapse
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::setBorderCollapse
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
    
  // convert js parameter to cpp: borderCollapse (bool)
  
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
                QTextTableFormat* w = getWrapped();
                
                w->setBorderCollapse(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorderCollapse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableFormat
    // Function: borderCollapse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableFormat_Wrapper::borderCollapse
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
                QTextTableFormat* w = getWrapped();
                bool res = 
                    
                w->borderCollapse(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for borderCollapse";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qtextformat_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QTextTableCellFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextTableCellFormat_Wrapper>("org.qcad", 1, 0, "QTextTableCellFormat_Wrapper");
        qmlRegisterInterface<QTextTableCellFormat_Wrapper>("QTextTableCellFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextTableCellFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextTableCellFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextTableCellFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextTableCellFormat_BaseJs", mob);
      
      QString fileName = ":generated/js/QTextTableCellFormat.js";
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
    QTextTableCellFormat_Wrapper::QTextTableCellFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextTableCellFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextTableCellFormat_Wrapper::QTextTableCellFormat_Wrapper(RJSApi& h, QTextTableCellFormat* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextTableCellFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextTableCellFormat_Wrapper"));
              //setObjectName("QTextTableCellFormat_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextTableCellFormat_Wrapper::~QTextTableCellFormat_Wrapper() {
            //RDebug::decCounter(QString("QTextTableCellFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextTableCellFormat_Wrapper"));

            //qDebug() << "QTextTableCellFormat_Wrapper::~QTextTableCellFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTextTableCellFormat";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextTableCellFormat_Wrapper::initConnections() {

          //setObjectName("QTextTableCellFormat_Wrapper");

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
  
    // Class: QTextTableCellFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QTextTableCellFormat_Wrapper::QTextTableCellFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTextTableCellFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextTableCellFormat_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTextTableCellFormat(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QTextTableCellFormat";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextTableCellFormat
    // Function: setFont
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFont
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont(handler, a1
  )

   && is_QTextCharFormat_FontPropertiesInheritanceBehavior(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = js2cpp_QFont(handler, a1);
        
  // convert js parameter to cpp: behavior (QTextCharFormat::FontPropertiesInheritanceBehavior)
  
QTextCharFormat::FontPropertiesInheritanceBehavior a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QTextCharFormat::FontPropertiesAll;
          }
          else {
            a2_cpp = js2cpp_QTextCharFormat_FontPropertiesInheritanceBehavior(handler, a2);
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFont(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: font
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::font
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
                QTextTableCellFormat* w = getWrapped();
                QFont res = 
                    
                w->font(
                  
                );
              
            // return type: QFont

            return cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontFamilies
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontFamilies
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: families (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontFamilies(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontFamilies";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontFamilies
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontFamilies
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
                QTextTableCellFormat* w = getWrapped();
                QVariant res = 
                    
                w->fontFamilies(
                  
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontFamilies";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontStyleName
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontStyleName
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
    
  // convert js parameter to cpp: styleName (QString)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontStyleName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontStyleName
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontStyleName
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
                QTextTableCellFormat* w = getWrapped();
                QVariant res = 
                    
                w->fontStyleName(
                  
                );
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontPointSize
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontPointSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontPointSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontPointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontPointSize
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontPointSize
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->fontPointSize(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontPointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontWeight
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontWeight
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
    
  // convert js parameter to cpp: weight (int)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontWeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontWeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontWeight
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontWeight
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
                QTextTableCellFormat* w = getWrapped();
                int res = 
                    
                w->fontWeight(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontWeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontItalic
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontItalic
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
    
  // convert js parameter to cpp: italic (bool)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontItalic(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontItalic
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontItalic
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
                QTextTableCellFormat* w = getWrapped();
                bool res = 
                    
                w->fontItalic(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontCapitalization
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontCapitalization
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_Capitalization(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: capitalization (QFont::Capitalization)
  
QFont::Capitalization a1_cpp;

      a1_cpp = js2cpp_QFont_Capitalization(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontCapitalization(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontCapitalization";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontCapitalization
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontCapitalization
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
                QTextTableCellFormat* w = getWrapped();
                QFont::Capitalization res = 
                    
                w->fontCapitalization(
                  
                );
              
            // return type: QFont::Capitalization

            return cpp2js_QFont_Capitalization(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontCapitalization";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontLetterSpacingType
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontLetterSpacingType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_SpacingType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: letterSpacingType (QFont::SpacingType)
  
QFont::SpacingType a1_cpp;

      a1_cpp = js2cpp_QFont_SpacingType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontLetterSpacingType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontLetterSpacingType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontLetterSpacingType
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontLetterSpacingType
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
                QTextTableCellFormat* w = getWrapped();
                QFont::SpacingType res = 
                    
                w->fontLetterSpacingType(
                  
                );
              
            // return type: QFont::SpacingType

            return cpp2js_QFont_SpacingType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontLetterSpacingType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontLetterSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontLetterSpacing
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spacing (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontLetterSpacing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontLetterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontLetterSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontLetterSpacing
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->fontLetterSpacing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontLetterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontWordSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontWordSpacing
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spacing (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontWordSpacing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontWordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontWordSpacing
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontWordSpacing
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->fontWordSpacing(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontWordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontUnderline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontUnderline
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
    
  // convert js parameter to cpp: underline (bool)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontUnderline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontUnderline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontUnderline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontUnderline
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
                QTextTableCellFormat* w = getWrapped();
                bool res = 
                    
                w->fontUnderline(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontUnderline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontOverline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontOverline
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
    
  // convert js parameter to cpp: overline (bool)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontOverline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontOverline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontOverline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontOverline
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
                QTextTableCellFormat* w = getWrapped();
                bool res = 
                    
                w->fontOverline(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontOverline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontStrikeOut
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontStrikeOut
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
    
  // convert js parameter to cpp: strikeOut (bool)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontStrikeOut(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStrikeOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontStrikeOut
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontStrikeOut
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
                QTextTableCellFormat* w = getWrapped();
                bool res = 
                    
                w->fontStrikeOut(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStrikeOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setUnderlineColor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setUnderlineColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (QColor)
  
QColor a1_cpp;

      a1_cpp = js2cpp_QColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setUnderlineColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnderlineColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: underlineColor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::underlineColor
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
                QTextTableCellFormat* w = getWrapped();
                QColor res = 
                    
                w->underlineColor(
                  
                );
              
            // return type: QColor

            return cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underlineColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontFixedPitch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontFixedPitch
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
    
  // convert js parameter to cpp: fixedPitch (bool)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontFixedPitch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontFixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontFixedPitch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontFixedPitch
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
                QTextTableCellFormat* w = getWrapped();
                bool res = 
                    
                w->fontFixedPitch(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontFixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontStretch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontStretch
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
    
  // convert js parameter to cpp: factor (int)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontStretch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontStretch
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontStretch
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
                QTextTableCellFormat* w = getWrapped();
                int res = 
                    
                w->fontStretch(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontStyleHint
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontStyleHint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_StyleHint(handler, a1
  )

   && is_QFont_StyleStrategy(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (QFont::StyleHint)
  
QFont::StyleHint a1_cpp;

      a1_cpp = js2cpp_QFont_StyleHint(handler, a1);
        
  // convert js parameter to cpp: strategy (QFont::StyleStrategy)
  
QFont::StyleStrategy a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QFont::PreferDefault;
          }
          else {
            a2_cpp = js2cpp_QFont_StyleStrategy(handler, a2);
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontStyleHint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontStyleStrategy
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontStyleStrategy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_StyleStrategy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: strategy (QFont::StyleStrategy)
  
QFont::StyleStrategy a1_cpp;

      a1_cpp = js2cpp_QFont_StyleStrategy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontStyleStrategy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontStyleStrategy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontStyleHint
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontStyleHint
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
                QTextTableCellFormat* w = getWrapped();
                QFont::StyleHint res = 
                    
                w->fontStyleHint(
                  
                );
              
            // return type: QFont::StyleHint

            return cpp2js_QFont_StyleHint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontStyleStrategy
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontStyleStrategy
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
                QTextTableCellFormat* w = getWrapped();
                QFont::StyleStrategy res = 
                    
                w->fontStyleStrategy(
                  
                );
              
            // return type: QFont::StyleStrategy

            return cpp2js_QFont_StyleStrategy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontStyleStrategy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontHintingPreference
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontHintingPreference
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QFont_HintingPreference(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hintingPreference (QFont::HintingPreference)
  
QFont::HintingPreference a1_cpp;

      a1_cpp = js2cpp_QFont_HintingPreference(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontHintingPreference(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontHintingPreference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontHintingPreference
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontHintingPreference
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
                QTextTableCellFormat* w = getWrapped();
                QFont::HintingPreference res = 
                    
                w->fontHintingPreference(
                  
                );
              
            // return type: QFont::HintingPreference

            return cpp2js_QFont_HintingPreference(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontHintingPreference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setFontKerning
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setFontKerning
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
    
  // convert js parameter to cpp: enable (bool)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setFontKerning(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFontKerning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: fontKerning
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::fontKerning
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
                QTextTableCellFormat* w = getWrapped();
                bool res = 
                    
                w->fontKerning(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontKerning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setUnderlineStyle
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setUnderlineStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextCharFormat_UnderlineStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextCharFormat::UnderlineStyle)
  
QTextCharFormat::UnderlineStyle a1_cpp;

      a1_cpp = js2cpp_QTextCharFormat_UnderlineStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setUnderlineStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnderlineStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: underlineStyle
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::underlineStyle
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
                QTextTableCellFormat* w = getWrapped();
                QTextCharFormat::UnderlineStyle res = 
                    
                w->underlineStyle(
                  
                );
              
            // return type: QTextCharFormat::UnderlineStyle

            return cpp2js_QTextCharFormat_UnderlineStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underlineStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setVerticalAlignment
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setVerticalAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextCharFormat_VerticalAlignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alignment (QTextCharFormat::VerticalAlignment)
  
QTextCharFormat::VerticalAlignment a1_cpp;

      a1_cpp = js2cpp_QTextCharFormat_VerticalAlignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setVerticalAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVerticalAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: verticalAlignment
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::verticalAlignment
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
                QTextTableCellFormat* w = getWrapped();
                QTextCharFormat::VerticalAlignment res = 
                    
                w->verticalAlignment(
                  
                );
              
            // return type: QTextCharFormat::VerticalAlignment

            return cpp2js_QTextCharFormat_VerticalAlignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verticalAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setTextOutline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setTextOutline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPen(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pen (QPen)
  
QPen a1_cpp;

      a1_cpp = js2cpp_QPen(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setTextOutline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextOutline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: textOutline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::textOutline
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
                QTextTableCellFormat* w = getWrapped();
                QPen res = 
                    
                w->textOutline(
                  
                );
              
            // return type: QPen

            return cpp2js_QPen(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textOutline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setToolTip
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setToolTip
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
    
  // convert js parameter to cpp: tip (QString)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setToolTip(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setToolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: toolTip
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::toolTip
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
                QTextTableCellFormat* w = getWrapped();
                QString res = 
                    
                w->toolTip(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toolTip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setSuperScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setSuperScriptBaseline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setSuperScriptBaseline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSuperScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: superScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::superScriptBaseline
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->superScriptBaseline(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for superScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setSubScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setSubScriptBaseline
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setSubScriptBaseline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSubScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: subScriptBaseline
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::subScriptBaseline
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->subScriptBaseline(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subScriptBaseline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setBaselineOffset
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setBaselineOffset
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: baseline (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setBaselineOffset(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBaselineOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: baselineOffset
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::baselineOffset
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->baselineOffset(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for baselineOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setAnchor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setAnchor
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
    
  // convert js parameter to cpp: anchor (bool)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setAnchor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: isAnchor
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::isAnchor
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
                QTextTableCellFormat* w = getWrapped();
                bool res = 
                    
                w->isAnchor(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAnchor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setAnchorHref
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setAnchorHref
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
    
  // convert js parameter to cpp: value (QString)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setAnchorHref(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchorHref";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: anchorHref
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::anchorHref
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
                QTextTableCellFormat* w = getWrapped();
                QString res = 
                    
                w->anchorHref(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for anchorHref";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setAnchorNames
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setAnchorNames
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: names (QStringList)
  
QStringList a1_cpp;

      a1_cpp = js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setAnchorNames(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAnchorNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: anchorNames
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::anchorNames
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
                QTextTableCellFormat* w = getWrapped();
                QStringList res = 
                    
                w->anchorNames(
                  
                );
              
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for anchorNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setTableCellRowSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setTableCellRowSpan
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
    
  // convert js parameter to cpp: tableCellRowSpan (int)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setTableCellRowSpan(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTableCellRowSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: tableCellRowSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::tableCellRowSpan
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
                QTextTableCellFormat* w = getWrapped();
                int res = 
                    
                w->tableCellRowSpan(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tableCellRowSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setTableCellColumnSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setTableCellColumnSpan
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
    
  // convert js parameter to cpp: tableCellColumnSpan (int)
  
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
                QTextTableCellFormat* w = getWrapped();
                
                w->setTableCellColumnSpan(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTableCellColumnSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: tableCellColumnSpan
    // Source: QTextCharFormat
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::tableCellColumnSpan
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
                QTextTableCellFormat* w = getWrapped();
                int res = 
                    
                w->tableCellColumnSpan(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tableCellColumnSpan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::isValid
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
                QTextTableCellFormat* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setTopPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setTopPadding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: padding (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setTopPadding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: topPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::topPadding
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->topPadding(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setBottomPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setBottomPadding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: padding (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setBottomPadding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: bottomPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::bottomPadding
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->bottomPadding(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setLeftPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setLeftPadding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: padding (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setLeftPadding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: leftPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::leftPadding
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->leftPadding(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setRightPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setRightPadding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: padding (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setRightPadding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: rightPadding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::rightPadding
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->rightPadding(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setPadding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setPadding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: padding (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setPadding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPadding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setTopBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setTopBorder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setTopBorder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: topBorder
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::topBorder
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->topBorder(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setBottomBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setBottomBorder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setBottomBorder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: bottomBorder
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::bottomBorder
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->bottomBorder(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setLeftBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setLeftBorder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setLeftBorder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: leftBorder
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::leftBorder
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->leftBorder(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setRightBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setRightBorder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setRightBorder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: rightBorder
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::rightBorder
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
                QTextTableCellFormat* w = getWrapped();
                qreal res = 
                    
                w->rightBorder(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setBorder
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setBorder
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setBorder(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorder";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setTopBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setTopBorderStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_BorderStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextFrameFormat::BorderStyle)
  
QTextFrameFormat::BorderStyle a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_BorderStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setTopBorderStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: topBorderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::topBorderStyle
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
                QTextTableCellFormat* w = getWrapped();
                QTextFrameFormat::BorderStyle res = 
                    
                w->topBorderStyle(
                  
                );
              
            // return type: QTextFrameFormat::BorderStyle

            return cpp2js_QTextFrameFormat_BorderStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setBottomBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setBottomBorderStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_BorderStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextFrameFormat::BorderStyle)
  
QTextFrameFormat::BorderStyle a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_BorderStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setBottomBorderStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: bottomBorderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::bottomBorderStyle
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
                QTextTableCellFormat* w = getWrapped();
                QTextFrameFormat::BorderStyle res = 
                    
                w->bottomBorderStyle(
                  
                );
              
            // return type: QTextFrameFormat::BorderStyle

            return cpp2js_QTextFrameFormat_BorderStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setLeftBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setLeftBorderStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_BorderStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextFrameFormat::BorderStyle)
  
QTextFrameFormat::BorderStyle a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_BorderStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setLeftBorderStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: leftBorderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::leftBorderStyle
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
                QTextTableCellFormat* w = getWrapped();
                QTextFrameFormat::BorderStyle res = 
                    
                w->leftBorderStyle(
                  
                );
              
            // return type: QTextFrameFormat::BorderStyle

            return cpp2js_QTextFrameFormat_BorderStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setRightBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setRightBorderStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_BorderStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextFrameFormat::BorderStyle)
  
QTextFrameFormat::BorderStyle a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_BorderStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setRightBorderStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: rightBorderStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::rightBorderStyle
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
                QTextTableCellFormat* w = getWrapped();
                QTextFrameFormat::BorderStyle res = 
                    
                w->rightBorderStyle(
                  
                );
              
            // return type: QTextFrameFormat::BorderStyle

            return cpp2js_QTextFrameFormat_BorderStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setBorderStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setBorderStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QTextFrameFormat_BorderStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QTextFrameFormat::BorderStyle)
  
QTextFrameFormat::BorderStyle a1_cpp;

      a1_cpp = js2cpp_QTextFrameFormat_BorderStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setBorderStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorderStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setTopBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setTopBorderBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setTopBorderBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: topBorderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::topBorderBrush
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
                QTextTableCellFormat* w = getWrapped();
                QBrush res = 
                    
                w->topBorderBrush(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setBottomBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setBottomBorderBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setBottomBorderBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: bottomBorderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::bottomBorderBrush
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
                QTextTableCellFormat* w = getWrapped();
                QBrush res = 
                    
                w->bottomBorderBrush(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setLeftBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setLeftBorderBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setLeftBorderBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeftBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: leftBorderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::leftBorderBrush
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
                QTextTableCellFormat* w = getWrapped();
                QBrush res = 
                    
                w->leftBorderBrush(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setRightBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setRightBorderBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setRightBorderBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRightBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: rightBorderBrush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::rightBorderBrush
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
                QTextTableCellFormat* w = getWrapped();
                QBrush res = 
                    
                w->rightBorderBrush(
                  
                );
              
            // return type: QBrush

            return cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextTableCellFormat
    // Function: setBorderBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextTableCellFormat_Wrapper::setBorderBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextTableCellFormat* w = getWrapped();
                
                w->setBorderBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBorderBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  