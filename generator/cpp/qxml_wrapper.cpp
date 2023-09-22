
  // Auto generated
  
  // include header:
  //#include "qxmlwrapper.h"
  //#include "header_cpp.h"
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlAttributes_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlAttributes_Wrapper>("org.qcad", 1, 0, "QXmlAttributes_Wrapper");
        qmlRegisterInterface<QXmlAttributes_Wrapper>("QXmlAttributes_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlAttributes_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlAttributes_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlAttributes_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlAttributes_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlAttributes.js";
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
    QXmlAttributes_Wrapper::QXmlAttributes_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlAttributes_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlAttributes_Wrapper::QXmlAttributes_Wrapper(RJSApi& h, QXmlAttributes* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlAttributes_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlAttributes_Wrapper"));
              //setObjectName("QXmlAttributes_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlAttributes_Wrapper::~QXmlAttributes_Wrapper() {
            //RDebug::decCounter(QString("QXmlAttributes_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlAttributes_Wrapper"));

            //qDebug() << "QXmlAttributes_Wrapper::~QXmlAttributes_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QXmlAttributes";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlAttributes_Wrapper::initConnections() {

          //setObjectName("QXmlAttributes_Wrapper");

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
  
    // Class: QXmlAttributes
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QXmlAttributes_Wrapper::QXmlAttributes_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QXmlAttributes_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QXmlAttributes_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlAttributes(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QXmlAttributes)
  
QXmlAttributes a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlAttributes(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlAttributes(
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
        RJSHelper::is_QXmlAttributes(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QXmlAttributes)
  
QXmlAttributes a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlAttributes(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlAttributes(
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

        
            wrapped = new QXmlAttributes(
                
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
                  

                  qWarning() << "no matching constructor variant found for QXmlAttributes";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QXmlAttributes
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlAttributes(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QXmlAttributes)
  
QXmlAttributes a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlAttributes(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlAttributes* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: index
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::index
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
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: uri (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: localPart (QString)
  
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
                QXmlAttributes* w = getWrapped();
                int res = 
                    
                w->index(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: qName (QString)
  
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
                QXmlAttributes* w = getWrapped();
                int res = 
                    
                w->index(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for index";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::length
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlAttributes* w = getWrapped();
                int res = 
                    
                w->length(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for length";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: count
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::count
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlAttributes* w = getWrapped();
                int res = 
                    
                w->count(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for count";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: localName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::localName
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
    
  // convert js parameter to cpp: index (int)
  
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
                QXmlAttributes* w = getWrapped();
                QString res = 
                    
                w->localName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for localName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: qName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::qName
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
    
  // convert js parameter to cpp: index (int)
  
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
                QXmlAttributes* w = getWrapped();
                QString res = 
                    
                w->qName(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for qName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: uri
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::uri
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
    
  // convert js parameter to cpp: index (int)
  
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
                QXmlAttributes* w = getWrapped();
                QString res = 
                    
                w->uri(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for uri";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::type
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
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: uri (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: localName (QString)
  
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
                QXmlAttributes* w = getWrapped();
                QString res = 
                    
                w->type(
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

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
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
                QXmlAttributes* w = getWrapped();
                QString res = 
                    
                w->type(
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
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: qName (QString)
  
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
                QXmlAttributes* w = getWrapped();
                QString res = 
                    
                w->type(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::value
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
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: uri (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: localName (QString)
  
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
                QXmlAttributes* w = getWrapped();
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

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
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
                QXmlAttributes* w = getWrapped();
                QString res = 
                    
                w->value(
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
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: qName (QString)
  
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
                QXmlAttributes* w = getWrapped();
                QString res = 
                    
                w->value(
                  a1_cpp
    
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
            
    // Class: QXmlAttributes
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::clear
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
                QXmlAttributes* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlAttributes
    // Function: append
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QXmlAttributes_Wrapper::append
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QString(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: qName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: uri (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: localPart (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: value (QString)
  
QString a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlAttributes* w = getWrapped();
                
                w->append(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for append";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlInputSource_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlInputSource_Wrapper>("org.qcad", 1, 0, "QXmlInputSource_Wrapper");
        qmlRegisterInterface<QXmlInputSource_Wrapper>("QXmlInputSource_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlInputSource_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlInputSource_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlInputSource_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlInputSource_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlInputSource.js";
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
    QXmlInputSource_Wrapper::QXmlInputSource_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlInputSource_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlInputSource_Wrapper::QXmlInputSource_Wrapper(RJSApi& h, QXmlInputSource* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlInputSource_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlInputSource_Wrapper"));
              //setObjectName("QXmlInputSource_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlInputSource_Wrapper::~QXmlInputSource_Wrapper() {
            //RDebug::decCounter(QString("QXmlInputSource_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlInputSource_Wrapper"));

            //qDebug() << "QXmlInputSource_Wrapper::~QXmlInputSource_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlInputSource";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlInputSource_Wrapper::initConnections() {

          //setObjectName("QXmlInputSource_Wrapper");

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
  
    // Class: QXmlInputSource
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QXmlInputSource_Wrapper::QXmlInputSource_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QXmlInputSource_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QXmlInputSource_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QIODevice_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dev (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODevice_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlInputSource(
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

        
            wrapped = new QXmlInputSource(
                
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
                  

                  qWarning() << "no matching constructor variant found for QXmlInputSource";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QXmlInputSource
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlInputSource_Wrapper::setData
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
    
  // convert js parameter to cpp: dat (QString)
  
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
                QXmlInputSource* w = getWrapped();
                
                w->setData(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dat (QByteArray)
  
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
                QXmlInputSource* w = getWrapped();
                
                w->setData(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlInputSource
    // Function: fetchData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlInputSource_Wrapper::fetchData
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
                QXmlInputSource* w = getWrapped();
                
                w->fetchData(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for fetchData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlInputSource
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlInputSource_Wrapper::data
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlInputSource* w = getWrapped();
                QString res = 
                    
                w->data(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for data";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlInputSource
    // Function: next
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlInputSource_Wrapper::next
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
                QXmlInputSource* w = getWrapped();
                QChar res = 
                    
                w->next(
                  
                );
              
            // return type: QChar

            return RJSHelper::cpp2js_QChar(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for next";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlInputSource
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlInputSource_Wrapper::reset
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
                QXmlInputSource* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlParseException_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlParseException_Wrapper>("org.qcad", 1, 0, "QXmlParseException_Wrapper");
        qmlRegisterInterface<QXmlParseException_Wrapper>("QXmlParseException_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlParseException_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlParseException_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlParseException_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlParseException_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlParseException.js";
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
    QXmlParseException_Wrapper::QXmlParseException_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlParseException_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlParseException_Wrapper::QXmlParseException_Wrapper(RJSApi& h, QXmlParseException* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlParseException_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlParseException_Wrapper"));
              //setObjectName("QXmlParseException_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlParseException_Wrapper::~QXmlParseException_Wrapper() {
            //RDebug::decCounter(QString("QXmlParseException_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlParseException_Wrapper"));

            //qDebug() << "QXmlParseException_Wrapper::~QXmlParseException_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlParseException";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlParseException_Wrapper::initConnections() {

          //setObjectName("QXmlParseException_Wrapper");

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
  
    // Class: QXmlParseException
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1
QXmlParseException_Wrapper::QXmlParseException_Wrapper
                
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
  a4, 
  const QJSValue& 
  a5
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QXmlParseException_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QXmlParseException_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

   && RJSHelper::is_QString(handler, a4
    , true
  
  )

   && RJSHelper::is_QString(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QString();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        
  // convert js parameter to cpp: c (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        
  // convert js parameter to cpp: l (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        
  // convert js parameter to cpp: p (QString)
  
QString a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QString();
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
          }
        
  // convert js parameter to cpp: s (QString)
  
QString a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = QString();
          }
          else {
            a5_cpp = RJSHelper::js2cpp_QString(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlParseException(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
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
        RJSHelper::is_QXmlParseException_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QXmlParseException)
  

          // non copyable:
          QXmlParseException*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlParseException_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlParseException(
                *a1_cpp
    
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
   && a5.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QXmlParseException";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QXmlParseException
    // Function: columnNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlParseException_Wrapper::columnNumber
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlParseException* w = getWrapped();
                int res = 
                    
                w->columnNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columnNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlParseException
    // Function: lineNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlParseException_Wrapper::lineNumber
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlParseException* w = getWrapped();
                int res = 
                    
                w->lineNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlParseException
    // Function: publicId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlParseException_Wrapper::publicId
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlParseException* w = getWrapped();
                QString res = 
                    
                w->publicId(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for publicId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlParseException
    // Function: systemId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlParseException_Wrapper::systemId
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlParseException* w = getWrapped();
                QString res = 
                    
                w->systemId(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for systemId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlParseException
    // Function: message
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlParseException_Wrapper::message
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlParseException* w = getWrapped();
                QString res = 
                    
                w->message(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for message";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlReader_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlReader_Wrapper>("org.qcad", 1, 0, "QXmlReader_Wrapper");
        qmlRegisterInterface<QXmlReader_Wrapper>("QXmlReader_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlReader_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlReader_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlReader_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlReader_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlReader.js";
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
    QXmlReader_Wrapper::QXmlReader_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlReader_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlReader_Wrapper::QXmlReader_Wrapper(RJSApi& h, QXmlReader* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlReader_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlReader_Wrapper"));
              //setObjectName("QXmlReader_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlReader_Wrapper::~QXmlReader_Wrapper() {
            //RDebug::decCounter(QString("QXmlReader_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlReader_Wrapper"));

            //qDebug() << "QXmlReader_Wrapper::~QXmlReader_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QXmlReader";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlReader_Wrapper::initConnections() {

          //setObjectName("QXmlReader_Wrapper");

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
    
    // Class: QXmlReader
    // Function: feature
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::feature
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
                QXmlReader* w = getWrapped();
                bool res = 
                    
                w->feature(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for feature";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: setFeature
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::setFeature
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

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                
                w->setFeature(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFeature";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: hasFeature
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::hasFeature
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
                QXmlReader* w = getWrapped();
                bool res = 
                    
                w->hasFeature(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasFeature";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: hasProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::hasProperty
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
                QXmlReader* w = getWrapped();
                bool res = 
                    
                w->hasProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: setEntityResolver
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::setEntityResolver
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlEntityResolver_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlEntityResolver)
  

          // pointer:
          QXmlEntityResolver*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlEntityResolver_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                
                w->setEntityResolver(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntityResolver";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: entityResolver
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::entityResolver
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                QXmlEntityResolver* res = 
                    
                w->entityResolver(
                  
                );
              
            // return type: QXmlEntityResolver*

            return RJSHelper::cpp2js_QXmlEntityResolver(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for entityResolver";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: setDTDHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::setDTDHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlDTDHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlDTDHandler)
  

          // pointer:
          QXmlDTDHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlDTDHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                
                w->setDTDHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDTDHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: DTDHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::DTDHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                QXmlDTDHandler* res = 
                    
                w->DTDHandler(
                  
                );
              
            // return type: QXmlDTDHandler*

            return RJSHelper::cpp2js_QXmlDTDHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for DTDHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: setContentHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::setContentHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlContentHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlContentHandler)
  

          // pointer:
          QXmlContentHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlContentHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                
                w->setContentHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setContentHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: contentHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::contentHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                QXmlContentHandler* res = 
                    
                w->contentHandler(
                  
                );
              
            // return type: QXmlContentHandler*

            return RJSHelper::cpp2js_QXmlContentHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contentHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: setErrorHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::setErrorHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlErrorHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlErrorHandler)
  

          // pointer:
          QXmlErrorHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlErrorHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                
                w->setErrorHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setErrorHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: errorHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::errorHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                QXmlErrorHandler* res = 
                    
                w->errorHandler(
                  
                );
              
            // return type: QXmlErrorHandler*

            return RJSHelper::cpp2js_QXmlErrorHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for errorHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: setLexicalHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::setLexicalHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlLexicalHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlLexicalHandler)
  

          // pointer:
          QXmlLexicalHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlLexicalHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                
                w->setLexicalHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLexicalHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: lexicalHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::lexicalHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                QXmlLexicalHandler* res = 
                    
                w->lexicalHandler(
                  
                );
              
            // return type: QXmlLexicalHandler*

            return RJSHelper::cpp2js_QXmlLexicalHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lexicalHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: setDeclHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::setDeclHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlDeclHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlDeclHandler)
  

          // pointer:
          QXmlDeclHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlDeclHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                
                w->setDeclHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDeclHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: declHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::declHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                QXmlDeclHandler* res = 
                    
                w->declHandler(
                  
                );
              
            // return type: QXmlDeclHandler*

            return RJSHelper::cpp2js_QXmlDeclHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for declHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlReader
    // Function: parse
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlReader_Wrapper::parse
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlInputSource_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: input (QXmlInputSource)
  

          // non copyable:
          QXmlInputSource*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlInputSource_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                bool res = 
                    
                w->parse(
                  *a1_cpp
    
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
        RJSHelper::is_QXmlInputSource_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: input (QXmlInputSource)
  

          // pointer:
          QXmlInputSource*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlInputSource_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlReader* w = getWrapped();
                bool res = 
                    
                w->parse(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parse";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlSimpleReader_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlSimpleReader_Wrapper>("org.qcad", 1, 0, "QXmlSimpleReader_Wrapper");
        qmlRegisterInterface<QXmlSimpleReader_Wrapper>("QXmlSimpleReader_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlSimpleReader_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlSimpleReader_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlSimpleReader_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlSimpleReader_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlSimpleReader.js";
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
    QXmlSimpleReader_Wrapper::QXmlSimpleReader_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlSimpleReader_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlSimpleReader_Wrapper::QXmlSimpleReader_Wrapper(RJSApi& h, QXmlSimpleReader* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlSimpleReader_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlSimpleReader_Wrapper"));
              //setObjectName("QXmlSimpleReader_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlSimpleReader_Wrapper::~QXmlSimpleReader_Wrapper() {
            //RDebug::decCounter(QString("QXmlSimpleReader_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlSimpleReader_Wrapper"));

            //qDebug() << "QXmlSimpleReader_Wrapper::~QXmlSimpleReader_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QXmlSimpleReader";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlSimpleReader_Wrapper::initConnections() {

          //setObjectName("QXmlSimpleReader_Wrapper");

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
  
    // Class: QXmlSimpleReader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QXmlSimpleReader_Wrapper::QXmlSimpleReader_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QXmlSimpleReader_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QXmlSimpleReader_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlSimpleReader(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QXmlSimpleReader";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QXmlSimpleReader
    // Function: feature
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::feature
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
                QXmlSimpleReader* w = getWrapped();
                bool res = 
                    
                w->feature(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for feature";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: setFeature
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::setFeature
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

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: value (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                
                w->setFeature(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFeature";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: hasFeature
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::hasFeature
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
                QXmlSimpleReader* w = getWrapped();
                bool res = 
                    
                w->hasFeature(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasFeature";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: hasProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::hasProperty
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
                QXmlSimpleReader* w = getWrapped();
                bool res = 
                    
                w->hasProperty(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: setEntityResolver
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::setEntityResolver
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlEntityResolver_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlEntityResolver)
  

          // pointer:
          QXmlEntityResolver*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlEntityResolver_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                
                w->setEntityResolver(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEntityResolver";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: entityResolver
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::entityResolver
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                QXmlEntityResolver* res = 
                    
                w->entityResolver(
                  
                );
              
            // return type: QXmlEntityResolver*

            return RJSHelper::cpp2js_QXmlEntityResolver(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for entityResolver";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: setDTDHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::setDTDHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlDTDHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlDTDHandler)
  

          // pointer:
          QXmlDTDHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlDTDHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                
                w->setDTDHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDTDHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: DTDHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::DTDHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                QXmlDTDHandler* res = 
                    
                w->DTDHandler(
                  
                );
              
            // return type: QXmlDTDHandler*

            return RJSHelper::cpp2js_QXmlDTDHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for DTDHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: setContentHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::setContentHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlContentHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlContentHandler)
  

          // pointer:
          QXmlContentHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlContentHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                
                w->setContentHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setContentHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: contentHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::contentHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                QXmlContentHandler* res = 
                    
                w->contentHandler(
                  
                );
              
            // return type: QXmlContentHandler*

            return RJSHelper::cpp2js_QXmlContentHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contentHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: setErrorHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::setErrorHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlErrorHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlErrorHandler)
  

          // pointer:
          QXmlErrorHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlErrorHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                
                w->setErrorHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setErrorHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: errorHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::errorHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                QXmlErrorHandler* res = 
                    
                w->errorHandler(
                  
                );
              
            // return type: QXmlErrorHandler*

            return RJSHelper::cpp2js_QXmlErrorHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for errorHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: setLexicalHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::setLexicalHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlLexicalHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlLexicalHandler)
  

          // pointer:
          QXmlLexicalHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlLexicalHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                
                w->setLexicalHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLexicalHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: lexicalHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::lexicalHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                QXmlLexicalHandler* res = 
                    
                w->lexicalHandler(
                  
                );
              
            // return type: QXmlLexicalHandler*

            return RJSHelper::cpp2js_QXmlLexicalHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lexicalHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: setDeclHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::setDeclHandler
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlDeclHandler_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: handler (QXmlDeclHandler)
  

          // pointer:
          QXmlDeclHandler*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlDeclHandler_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                
                w->setDeclHandler(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDeclHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: declHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::declHandler
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                QXmlDeclHandler* res = 
                    
                w->declHandler(
                  
                );
              
            // return type: QXmlDeclHandler*

            return RJSHelper::cpp2js_QXmlDeclHandler(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for declHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: parse
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::parse
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlInputSource_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: input (QXmlInputSource)
  

          // pointer:
          QXmlInputSource*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlInputSource_ptr(handler, a1);
        
  // convert js parameter to cpp: incremental (bool)
  
bool a2_cpp;

      a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                bool res = 
                    
                w->parse(
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
        RJSHelper::is_QXmlInputSource_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: input (QXmlInputSource)
  

          // non copyable:
          QXmlInputSource*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlInputSource_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                bool res = 
                    
                w->parse(
                  *a1_cpp
    
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
        RJSHelper::is_QXmlInputSource_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: input (QXmlInputSource)
  

          // pointer:
          QXmlInputSource*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlInputSource_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlSimpleReader* w = getWrapped();
                bool res = 
                    
                w->parse(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlSimpleReader
    // Function: parseContinue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlSimpleReader_Wrapper::parseContinue
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
                QXmlSimpleReader* w = getWrapped();
                bool res = 
                    
                w->parseContinue(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parseContinue";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlLocator_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlLocator_Wrapper>("org.qcad", 1, 0, "QXmlLocator_Wrapper");
        qmlRegisterInterface<QXmlLocator_Wrapper>("QXmlLocator_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlLocator_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlLocator_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlLocator_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlLocator_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlLocator.js";
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
    QXmlLocator_Wrapper::QXmlLocator_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlLocator_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlLocator_Wrapper::QXmlLocator_Wrapper(RJSApi& h, QXmlLocator* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlLocator_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlLocator_Wrapper"));
              //setObjectName("QXmlLocator_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlLocator_Wrapper::~QXmlLocator_Wrapper() {
            //RDebug::decCounter(QString("QXmlLocator_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlLocator_Wrapper"));

            //qDebug() << "QXmlLocator_Wrapper::~QXmlLocator_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QXmlLocator";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlLocator_Wrapper::initConnections() {

          //setObjectName("QXmlLocator_Wrapper");

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
    
    // Class: QXmlLocator
    // Function: columnNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlLocator_Wrapper::columnNumber
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlLocator* w = getWrapped();
                int res = 
                    
                w->columnNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columnNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlLocator
    // Function: lineNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlLocator_Wrapper::lineNumber
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlLocator* w = getWrapped();
                int res = 
                    
                w->lineNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lineNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlContentHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlContentHandler_Wrapper>("org.qcad", 1, 0, "QXmlContentHandler_Wrapper");
        qmlRegisterInterface<QXmlContentHandler_Wrapper>("QXmlContentHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlContentHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlContentHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlContentHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlContentHandler_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlContentHandler.js";
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
    QXmlContentHandler_Wrapper::QXmlContentHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlContentHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlContentHandler_Wrapper::QXmlContentHandler_Wrapper(RJSApi& h, QXmlContentHandler* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlContentHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlContentHandler_Wrapper"));
              //setObjectName("QXmlContentHandler_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlContentHandler_Wrapper::~QXmlContentHandler_Wrapper() {
            //RDebug::decCounter(QString("QXmlContentHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlContentHandler_Wrapper"));

            //qDebug() << "QXmlContentHandler_Wrapper::~QXmlContentHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlContentHandler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlContentHandler_Wrapper::initConnections() {

          //setObjectName("QXmlContentHandler_Wrapper");

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
    
    // Class: QXmlContentHandler
    // Function: setDocumentLocator
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::setDocumentLocator
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlLocator_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locator (QXmlLocator)
  

          // pointer:
          QXmlLocator*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlLocator_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlContentHandler* w = getWrapped();
                
                w->setDocumentLocator(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocumentLocator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: startDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::startDocument
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
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->startDocument(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: endDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::endDocument
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
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->endDocument(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: startPrefixMapping
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::startPrefixMapping
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
        
  // convert js parameter to cpp: uri (QString)
  
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
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->startPrefixMapping(
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

                  qWarning() << "no matching function variant found for startPrefixMapping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: endPrefixMapping
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::endPrefixMapping
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->endPrefixMapping(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endPrefixMapping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: startElement
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::startElement
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QXmlAttributes(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceURI (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: localName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: qName (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: atts (QXmlAttributes)
  
QXmlAttributes a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QXmlAttributes(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->startElement(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: endElement
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::endElement
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceURI (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: localName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: qName (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->endElement(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: characters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::characters
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
    
  // convert js parameter to cpp: ch (QString)
  
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
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->characters(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for characters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: ignorableWhitespace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::ignorableWhitespace
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
    
  // convert js parameter to cpp: ch (QString)
  
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
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->ignorableWhitespace(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ignorableWhitespace";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: processingInstruction
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::processingInstruction
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
    
  // convert js parameter to cpp: target (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: data (QString)
  
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
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->processingInstruction(
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

                  qWarning() << "no matching function variant found for processingInstruction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: skippedEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::skippedEntity
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
                QXmlContentHandler* w = getWrapped();
                bool res = 
                    
                w->skippedEntity(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for skippedEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlContentHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlContentHandler_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlContentHandler* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlErrorHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlErrorHandler_Wrapper>("org.qcad", 1, 0, "QXmlErrorHandler_Wrapper");
        qmlRegisterInterface<QXmlErrorHandler_Wrapper>("QXmlErrorHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlErrorHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlErrorHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlErrorHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlErrorHandler_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlErrorHandler.js";
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
    QXmlErrorHandler_Wrapper::QXmlErrorHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlErrorHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlErrorHandler_Wrapper::QXmlErrorHandler_Wrapper(RJSApi& h, QXmlErrorHandler* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlErrorHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlErrorHandler_Wrapper"));
              //setObjectName("QXmlErrorHandler_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlErrorHandler_Wrapper::~QXmlErrorHandler_Wrapper() {
            //RDebug::decCounter(QString("QXmlErrorHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlErrorHandler_Wrapper"));

            //qDebug() << "QXmlErrorHandler_Wrapper::~QXmlErrorHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlErrorHandler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlErrorHandler_Wrapper::initConnections() {

          //setObjectName("QXmlErrorHandler_Wrapper");

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
    
    // Class: QXmlErrorHandler
    // Function: warning
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlErrorHandler_Wrapper::warning
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlParseException_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exception (QXmlParseException)
  

          // non copyable:
          QXmlParseException*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlParseException_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlErrorHandler* w = getWrapped();
                bool res = 
                    
                w->warning(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for warning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlErrorHandler
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlErrorHandler_Wrapper::error
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlParseException_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exception (QXmlParseException)
  

          // non copyable:
          QXmlParseException*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlParseException_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlErrorHandler* w = getWrapped();
                bool res = 
                    
                w->error(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlErrorHandler
    // Function: fatalError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlErrorHandler_Wrapper::fatalError
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlParseException_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exception (QXmlParseException)
  

          // non copyable:
          QXmlParseException*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlParseException_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlErrorHandler* w = getWrapped();
                bool res = 
                    
                w->fatalError(
                  *a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fatalError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlErrorHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlErrorHandler_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlErrorHandler* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlDTDHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlDTDHandler_Wrapper>("org.qcad", 1, 0, "QXmlDTDHandler_Wrapper");
        qmlRegisterInterface<QXmlDTDHandler_Wrapper>("QXmlDTDHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlDTDHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlDTDHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlDTDHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlDTDHandler_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlDTDHandler.js";
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
    QXmlDTDHandler_Wrapper::QXmlDTDHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlDTDHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlDTDHandler_Wrapper::QXmlDTDHandler_Wrapper(RJSApi& h, QXmlDTDHandler* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlDTDHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlDTDHandler_Wrapper"));
              //setObjectName("QXmlDTDHandler_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlDTDHandler_Wrapper::~QXmlDTDHandler_Wrapper() {
            //RDebug::decCounter(QString("QXmlDTDHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlDTDHandler_Wrapper"));

            //qDebug() << "QXmlDTDHandler_Wrapper::~QXmlDTDHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlDTDHandler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlDTDHandler_Wrapper::initConnections() {

          //setObjectName("QXmlDTDHandler_Wrapper");

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
    
    // Class: QXmlDTDHandler
    // Function: notationDecl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlDTDHandler_Wrapper::notationDecl
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: publicId (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: systemId (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDTDHandler* w = getWrapped();
                bool res = 
                    
                w->notationDecl(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for notationDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDTDHandler
    // Function: unparsedEntityDecl
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QXmlDTDHandler_Wrapper::unparsedEntityDecl
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QString(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: publicId (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: systemId (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: notationName (QString)
  
QString a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDTDHandler* w = getWrapped();
                bool res = 
                    
                w->unparsedEntityDecl(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for unparsedEntityDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDTDHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlDTDHandler_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDTDHandler* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlEntityResolver_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlEntityResolver_Wrapper>("org.qcad", 1, 0, "QXmlEntityResolver_Wrapper");
        qmlRegisterInterface<QXmlEntityResolver_Wrapper>("QXmlEntityResolver_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlEntityResolver_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlEntityResolver_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlEntityResolver_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlEntityResolver_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlEntityResolver.js";
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
    QXmlEntityResolver_Wrapper::QXmlEntityResolver_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlEntityResolver_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlEntityResolver_Wrapper::QXmlEntityResolver_Wrapper(RJSApi& h, QXmlEntityResolver* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlEntityResolver_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlEntityResolver_Wrapper"));
              //setObjectName("QXmlEntityResolver_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlEntityResolver_Wrapper::~QXmlEntityResolver_Wrapper() {
            //RDebug::decCounter(QString("QXmlEntityResolver_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlEntityResolver_Wrapper"));

            //qDebug() << "QXmlEntityResolver_Wrapper::~QXmlEntityResolver_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlEntityResolver";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlEntityResolver_Wrapper::initConnections() {

          //setObjectName("QXmlEntityResolver_Wrapper");

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
    
    // Class: QXmlEntityResolver
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlEntityResolver_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlEntityResolver* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlLexicalHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlLexicalHandler_Wrapper>("org.qcad", 1, 0, "QXmlLexicalHandler_Wrapper");
        qmlRegisterInterface<QXmlLexicalHandler_Wrapper>("QXmlLexicalHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlLexicalHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlLexicalHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlLexicalHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlLexicalHandler_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlLexicalHandler.js";
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
    QXmlLexicalHandler_Wrapper::QXmlLexicalHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlLexicalHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlLexicalHandler_Wrapper::QXmlLexicalHandler_Wrapper(RJSApi& h, QXmlLexicalHandler* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlLexicalHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlLexicalHandler_Wrapper"));
              //setObjectName("QXmlLexicalHandler_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlLexicalHandler_Wrapper::~QXmlLexicalHandler_Wrapper() {
            //RDebug::decCounter(QString("QXmlLexicalHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlLexicalHandler_Wrapper"));

            //qDebug() << "QXmlLexicalHandler_Wrapper::~QXmlLexicalHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlLexicalHandler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlLexicalHandler_Wrapper::initConnections() {

          //setObjectName("QXmlLexicalHandler_Wrapper");

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
    
    // Class: QXmlLexicalHandler
    // Function: startDTD
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlLexicalHandler_Wrapper::startDTD
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: publicId (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: systemId (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlLexicalHandler* w = getWrapped();
                bool res = 
                    
                w->startDTD(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDTD";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlLexicalHandler
    // Function: endDTD
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlLexicalHandler_Wrapper::endDTD
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
                QXmlLexicalHandler* w = getWrapped();
                bool res = 
                    
                w->endDTD(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endDTD";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlLexicalHandler
    // Function: startEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlLexicalHandler_Wrapper::startEntity
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
                QXmlLexicalHandler* w = getWrapped();
                bool res = 
                    
                w->startEntity(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlLexicalHandler
    // Function: endEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlLexicalHandler_Wrapper::endEntity
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
                QXmlLexicalHandler* w = getWrapped();
                bool res = 
                    
                w->endEntity(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlLexicalHandler
    // Function: startCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlLexicalHandler_Wrapper::startCDATA
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
                QXmlLexicalHandler* w = getWrapped();
                bool res = 
                    
                w->startCDATA(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startCDATA";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlLexicalHandler
    // Function: endCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlLexicalHandler_Wrapper::endCDATA
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
                QXmlLexicalHandler* w = getWrapped();
                bool res = 
                    
                w->endCDATA(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endCDATA";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlLexicalHandler
    // Function: comment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlLexicalHandler_Wrapper::comment
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
    
  // convert js parameter to cpp: ch (QString)
  
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
                QXmlLexicalHandler* w = getWrapped();
                bool res = 
                    
                w->comment(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for comment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlLexicalHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlLexicalHandler_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlLexicalHandler* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlDeclHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlDeclHandler_Wrapper>("org.qcad", 1, 0, "QXmlDeclHandler_Wrapper");
        qmlRegisterInterface<QXmlDeclHandler_Wrapper>("QXmlDeclHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlDeclHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlDeclHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlDeclHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlDeclHandler_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlDeclHandler.js";
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
    QXmlDeclHandler_Wrapper::QXmlDeclHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlDeclHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlDeclHandler_Wrapper::QXmlDeclHandler_Wrapper(RJSApi& h, QXmlDeclHandler* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlDeclHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlDeclHandler_Wrapper"));
              //setObjectName("QXmlDeclHandler_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlDeclHandler_Wrapper::~QXmlDeclHandler_Wrapper() {
            //RDebug::decCounter(QString("QXmlDeclHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlDeclHandler_Wrapper"));

            //qDebug() << "QXmlDeclHandler_Wrapper::~QXmlDeclHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QXmlDeclHandler";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlDeclHandler_Wrapper::initConnections() {

          //setObjectName("QXmlDeclHandler_Wrapper");

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
    
    // Class: QXmlDeclHandler
    // Function: attributeDecl
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QXmlDeclHandler_Wrapper::attributeDecl
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QString(handler, a4
  )

   && RJSHelper::is_QString(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: eName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: aName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: type (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: valueDefault (QString)
  
QString a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
        
  // convert js parameter to cpp: value (QString)
  
QString a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QString(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDeclHandler* w = getWrapped();
                bool res = 
                    
                w->attributeDecl(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for attributeDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDeclHandler
    // Function: internalEntityDecl
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlDeclHandler_Wrapper::internalEntityDecl
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
                QXmlDeclHandler* w = getWrapped();
                bool res = 
                    
                w->internalEntityDecl(
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

                  qWarning() << "no matching function variant found for internalEntityDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDeclHandler
    // Function: externalEntityDecl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlDeclHandler_Wrapper::externalEntityDecl
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: publicId (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: systemId (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDeclHandler* w = getWrapped();
                bool res = 
                    
                w->externalEntityDecl(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for externalEntityDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDeclHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlDeclHandler_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDeclHandler* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qxml_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QXmlDefaultHandler_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QXmlDefaultHandler_Wrapper>("org.qcad", 1, 0, "QXmlDefaultHandler_Wrapper");
        qmlRegisterInterface<QXmlDefaultHandler_Wrapper>("QXmlDefaultHandler_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QXmlDefaultHandler_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QXmlDefaultHandler_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QXmlDefaultHandler_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QXmlDefaultHandler_BaseJs", mob);
      
      QString fileName = ":generator/js/QXmlDefaultHandler.js";
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
    QXmlDefaultHandler_Wrapper::QXmlDefaultHandler_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QXmlDefaultHandler_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QXmlDefaultHandler_Wrapper::QXmlDefaultHandler_Wrapper(RJSApi& h, QXmlDefaultHandler* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QXmlDefaultHandler_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QXmlDefaultHandler_Wrapper"));
              //setObjectName("QXmlDefaultHandler_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QXmlDefaultHandler_Wrapper::~QXmlDefaultHandler_Wrapper() {
            //RDebug::decCounter(QString("QXmlDefaultHandler_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QXmlDefaultHandler_Wrapper"));

            //qDebug() << "QXmlDefaultHandler_Wrapper::~QXmlDefaultHandler_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QXmlDefaultHandler";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QXmlDefaultHandler_Wrapper::initConnections() {

          //setObjectName("QXmlDefaultHandler_Wrapper");

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
  
    // Class: QXmlDefaultHandler
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QXmlDefaultHandler_Wrapper::QXmlDefaultHandler_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QXmlDefaultHandler_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QXmlDefaultHandler_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QXmlDefaultHandler_Base(
              handler
              
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((QXmlDefaultHandler_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((QXmlDefaultHandler_Base*)wrapped)->self = handler.getSelf();
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QXmlDefaultHandler";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QXmlDefaultHandler
    // Function: warning
    // Source: QXmlErrorHandler
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper::warning
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlParseException_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exception (QXmlParseException)
  

          // non copyable:
          QXmlParseException*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlParseException_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDefaultHandler* w = getWrapped();
                bool res = 
                    
                w->warning(
                  *a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for warning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: error
    // Source: QXmlErrorHandler
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper::error
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlParseException_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exception (QXmlParseException)
  

          // non copyable:
          QXmlParseException*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlParseException_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDefaultHandler* w = getWrapped();
                bool res = 
                    
                w->error(
                  *a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: fatalError
    // Source: QXmlErrorHandler
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper::fatalError
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlParseException_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: exception (QXmlParseException)
  

          // non copyable:
          QXmlParseException*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlParseException_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QXmlDefaultHandler* w = getWrapped();
                bool res = 
                    
                w->fatalError(
                  *a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fatalError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: setDocumentLocator
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setDocumentLocatorSuper
                    
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QXmlLocator_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locator (QXmlLocator)
  

          // pointer:
          QXmlLocator*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QXmlLocator_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::setDocumentLocator: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      
                      wb->setDocumentLocatorSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      
                      wb->setDocumentLocator(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDocumentLocator";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: startDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startDocumentSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::startDocument: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->startDocumentSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->startDocument(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: endDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endDocumentSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::endDocument: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->endDocumentSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->endDocument(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endDocument";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: startPrefixMapping
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startPrefixMappingSuper
                    
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
        
  // convert js parameter to cpp: uri (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::startPrefixMapping: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->startPrefixMappingSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->startPrefixMapping(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startPrefixMapping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: endPrefixMapping
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endPrefixMappingSuper
                    
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::endPrefixMapping: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->endPrefixMappingSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->endPrefixMapping(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endPrefixMapping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: startElement
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startElementSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QXmlAttributes(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceURI (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: localName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: qName (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: atts (QXmlAttributes)
  
QXmlAttributes a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QXmlAttributes(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::startElement: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->startElementSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->startElement(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: endElement
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endElementSuper
                    
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: namespaceURI (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: localName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: qName (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::endElement: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->endElementSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->endElement(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endElement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: characters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      charactersSuper
                    
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
    
  // convert js parameter to cpp: ch (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::characters: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->charactersSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->characters(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for characters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: ignorableWhitespace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      ignorableWhitespaceSuper
                    
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
    
  // convert js parameter to cpp: ch (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::ignorableWhitespace: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->ignorableWhitespaceSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->ignorableWhitespace(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ignorableWhitespace";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: processingInstruction
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      processingInstructionSuper
                    
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
    
  // convert js parameter to cpp: target (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: data (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::processingInstruction: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->processingInstructionSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->processingInstruction(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for processingInstruction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: skippedEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      skippedEntitySuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::skippedEntity: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->skippedEntitySup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->skippedEntity(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for skippedEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: notationDecl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      notationDeclSuper
                    
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: publicId (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: systemId (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::notationDecl: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->notationDeclSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->notationDecl(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for notationDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: unparsedEntityDecl
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      unparsedEntityDeclSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QString(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: publicId (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: systemId (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: notationName (QString)
  
QString a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::unparsedEntityDecl: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->unparsedEntityDeclSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->unparsedEntityDecl(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for unparsedEntityDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: startDTD
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startDTDSuper
                    
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: publicId (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: systemId (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::startDTD: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->startDTDSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->startDTD(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startDTD";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: endDTD
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endDTDSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::endDTD: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->endDTDSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->endDTD(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endDTD";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: startEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startEntitySuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::startEntity: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->startEntitySup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->startEntity(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: endEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endEntitySuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::endEntity: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->endEntitySup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->endEntity(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endEntity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: startCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startCDATASuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::startCDATA: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->startCDATASup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->startCDATA(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startCDATA";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: endCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endCDATASuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::endCDATA: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->endCDATASup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->endCDATA(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endCDATA";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: comment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      commentSuper
                    
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
    
  // convert js parameter to cpp: ch (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::comment: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->commentSup(
                        a1_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->comment(
                        a1_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for comment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: attributeDecl
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      attributeDeclSuper
                    
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

   && RJSHelper::is_QString(handler, a4
  )

   && RJSHelper::is_QString(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: eName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: aName (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: type (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        
  // convert js parameter to cpp: valueDefault (QString)
  
QString a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
        
  // convert js parameter to cpp: value (QString)
  
QString a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QString(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::attributeDecl: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->attributeDeclSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->attributeDecl(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for attributeDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: internalEntityDecl
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      internalEntityDeclSuper
                    
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::internalEntityDecl: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->internalEntityDeclSup(
                        a1_cpp
    , a2_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->internalEntityDecl(
                        a1_cpp
    , a2_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for internalEntityDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: externalEntityDecl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      externalEntityDeclSuper
                    
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

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: publicId (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: systemId (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::externalEntityDecl: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                bool res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->externalEntityDeclSup(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->externalEntityDecl(
                        a1_cpp
    , a2_cpp
    , a3_cpp
    
                      );
                    }
                  
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for externalEntityDecl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QXmlDefaultHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QXmlDefaultHandler_Wrapper:: 
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      errorStringSuper
                    
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of QXmlDefaultHandler_Base class as 
                // function has postfix inheritable class, overridable function):
                QXmlDefaultHandler_Base* wb = getWrappedBase();
                if (wb==nullptr) {
                  qWarning() << "QXmlDefaultHandler::errorString: using base but wrapper is not of type of base class";
                  handler.trace();
                  return QJSValue();
                }

                QString res;
                    
                    // this is the wrapper that created the object
                    // call the base class implementation as this function was 
                    // called from the JS implementation of the same function to call
                    // the base class implementation
                    if (wrappedCreated) {
                      res =
                      wb->errorStringSup(
                        
                      );
                    }

                    // this is a wrapper that was created for an existing object
                    // call the JS implementation as this function was 
                    // called from another JS function
                    else {
                      res =
                      wb->errorString(
                        
                      );
                    }
                  
                //setRecFlag(false);
              
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  