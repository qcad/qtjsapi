
  // Auto generated
  
  // include header:
  //#include "qhostaddresswrapper.h"
  //#include "header_cpp.h"
  
    #include "qhostaddress_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QHostAddress*> QHostAddress_Wrapper::basecasters_QHostAddress;
    
    // static functions implementation in singleton wrapper:
    
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

    void QHostAddress_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QHostAddress_Wrapper>("org.qcad", 1, 0, "QHostAddress_Wrapper");
        qmlRegisterInterface<QHostAddress_Wrapper>("QHostAddress_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QHostAddress* t = new RJSType_QHostAddress();
          global.setProperty("RJSType_QHostAddress", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QHostAddress::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QHostAddress_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QHostAddress_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QHostAddress_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QHostAddress_BaseJs", mob);
      
      QString fileName = ":generator/js/QHostAddress.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QHostAddress_Wrapper::QHostAddress_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QHostAddress_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QHostAddress_Wrapper::QHostAddress_Wrapper(RJSApi& h, QHostAddress* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QHostAddress_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QHostAddress_Wrapper"));
              //setObjectName("QHostAddress_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QHostAddress_Wrapper::~QHostAddress_Wrapper() {
            //RDebug::decCounter(QString("QHostAddress_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QHostAddress_Wrapper"));

            //qDebug() << "QHostAddress_Wrapper::~QHostAddress_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QHostAddress";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QHostAddress_Wrapper::initConnections() {

          //setObjectName("QHostAddress_Wrapper");

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
  
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

    // Class: QHostAddress
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QHostAddress_Wrapper::QHostAddress_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QHostAddress_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QHostAddress_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_quint32(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ip4Addr (quint32)
  
quint32 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_quint32(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QHostAddress(
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
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: address (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QHostAddress(
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
        RJSHelper::is_QHostAddress(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: copy (QHostAddress)
  
QHostAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QHostAddress(
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
        RJSHelper::is_QHostAddress(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QHostAddress)
  
QHostAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QHostAddress(
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
        RJSHelper::is_QHostAddress_SpecialAddress(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: address (QHostAddress::SpecialAddress)
  
QHostAddress::SpecialAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress_SpecialAddress(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QHostAddress(
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

        
              wrapped = new QHostAddress(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QHostAddress";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

    // Class: QHostAddress
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QHostAddress(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QHostAddress)
  
QHostAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: setAddress
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::setAddress
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_quint32(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ip4Addr (quint32)
  
quint32 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_quint32(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                
                w->setAddress(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: address (QString)
  
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
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->setAddress(
                  a1_cpp
    
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
        RJSHelper::is_QHostAddress_SpecialAddress(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: address (QHostAddress::SpecialAddress)
  
QHostAddress::SpecialAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress_SpecialAddress(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                
                w->setAddress(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAddress";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: protocol
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::protocol
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                QHostAddress::NetworkLayerProtocol res = 
                    
                w->protocol(
                  
                );
              
            // return type: QHostAddress::NetworkLayerProtocol

            return RJSHelper::cpp2js_QHostAddress_NetworkLayerProtocol(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for protocol";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: toIPv4Address
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::toIPv4Address
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                quint32 res = 
                    
                w->toIPv4Address(
                  
                );
              
            // return type: quint32

            return RJSHelper::cpp2js_quint32(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toIPv4Address";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::toString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
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
            
    // Class: QHostAddress
    // Function: scopeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::scopeId
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                QString res = 
                    
                w->scopeId(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scopeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: setScopeId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::setScopeId
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
    
  // convert js parameter to cpp: id (QString)
  
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
                QHostAddress* w = getWrapped();
                
                w->setScopeId(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScopeId";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isEqual
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isEqual
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
        RJSHelper::is_QHostAddress(handler, a1
  )

   && RJSHelper::is_QHostAddress_ConversionMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: address (QHostAddress)
  
QHostAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress(handler, a1);
        
  // convert js parameter to cpp: mode (QHostAddress::ConversionMode)
  
QHostAddress::ConversionMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QHostAddress::TolerantConversion;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QHostAddress_ConversionMode(handler, a2);
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
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isEqual(
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

                  qWarning() << "no matching function variant found for isEqual";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isNull
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::clear
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
                QHostAddress* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isInSubnet
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isInSubnet
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
        RJSHelper::is_QHostAddress(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: subnet (QHostAddress)
  
QHostAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress(handler, a1);
        
  // convert js parameter to cpp: netmask (int)
  
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
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isInSubnet(
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

                  qWarning() << "no matching function variant found for isInSubnet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isLoopback
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isLoopback
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isLoopback(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLoopback";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isGlobal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isGlobal
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isGlobal(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isGlobal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isLinkLocal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isLinkLocal
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isLinkLocal(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLinkLocal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isSiteLocal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isSiteLocal
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isSiteLocal(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSiteLocal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isUniqueLocalUnicast
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isUniqueLocalUnicast
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isUniqueLocalUnicast(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUniqueLocalUnicast";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isMulticast
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isMulticast
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isMulticast(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isMulticast";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isBroadcast
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isBroadcast
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isBroadcast(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBroadcast";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHostAddress
    // Function: isPrivateUse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHostAddress_Wrapper::isPrivateUse
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHostAddress* w = getWrapped();
                bool res = 
                    
                w->isPrivateUse(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPrivateUse";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qhostaddress_wrapper.cpp"
  
