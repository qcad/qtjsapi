
  // Auto generated
  
  // include header:
  //#include "qsslconfigurationwrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslconfiguration_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslConfiguration*> QSslConfiguration_Wrapper::basecasters_QSslConfiguration;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QSslConfiguration
    // Function: supportedCiphers
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_WrapperSingleton::supportedCiphers
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSslCipher> res = 
                
                // call static member function:
                QSslConfiguration::supportedCiphers(
              
            );
          
            // return type: QList<QSslCipher>

            return RJSHelper::cpp2js_QList_QSslCipher(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedCiphers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: systemCaCertificates
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_WrapperSingleton::systemCaCertificates
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSslCertificate> res = 
                
                // call static member function:
                QSslConfiguration::systemCaCertificates(
              
            );
          
            // return type: QList<QSslCertificate>

            return RJSHelper::cpp2js_QList_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for systemCaCertificates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: supportedEllipticCurves
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_WrapperSingleton::supportedEllipticCurves
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSslEllipticCurve> res = 
                
                // call static member function:
                QSslConfiguration::supportedEllipticCurves(
              
            );
          
            // return type: QList<QSslEllipticCurve>

            return RJSHelper::cpp2js_QList_QSslEllipticCurve(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedEllipticCurves";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: defaultConfiguration
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_WrapperSingleton::defaultConfiguration
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QSslConfiguration res = 
                
                // call static member function:
                QSslConfiguration::defaultConfiguration(
              
            );
          
            // return type: QSslConfiguration

            return RJSHelper::cpp2js_QSslConfiguration(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultConfiguration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setDefaultConfiguration
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_WrapperSingleton::setDefaultConfiguration
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslConfiguration(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: configuration (QSslConfiguration)
  
QSslConfiguration a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslConfiguration(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QSslConfiguration::setDefaultConfiguration(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefaultConfiguration";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(dtls)||defined(Q_QDOC)

    // Class: QSslConfiguration
    // Function: defaultDtlsConfiguration
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_WrapperSingleton::defaultDtlsConfiguration
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QSslConfiguration res = 
                
                // call static member function:
                QSslConfiguration::defaultDtlsConfiguration(
              
            );
          
            // return type: QSslConfiguration

            return RJSHelper::cpp2js_QSslConfiguration(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultDtlsConfiguration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setDefaultDtlsConfiguration
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_WrapperSingleton::setDefaultDtlsConfiguration
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslConfiguration(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: configuration (QSslConfiguration)
  
QSslConfiguration a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslConfiguration(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QSslConfiguration::setDefaultDtlsConfiguration(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefaultDtlsConfiguration";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    void QSslConfiguration_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslConfiguration_Wrapper>("org.qcad", 1, 0, "QSslConfiguration_Wrapper");
        qmlRegisterInterface<QSslConfiguration_Wrapper>("QSslConfiguration_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslConfiguration* t = new RJSType_QSslConfiguration();
          global.setProperty("RJSType_QSslConfiguration", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslConfiguration::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslConfiguration_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslConfiguration_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslConfiguration_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslConfiguration_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QSslConfiguration_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QSslConfiguration_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QSslConfiguration_WrapperSingleton * s = new QSslConfiguration_WrapperSingleton(handler);
        engine->globalObject().setProperty("QSslConfiguration_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QSslConfiguration.js";
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
    QSslConfiguration_Wrapper::QSslConfiguration_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslConfiguration_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslConfiguration_Wrapper::QSslConfiguration_Wrapper(RJSApi& h, QSslConfiguration* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslConfiguration_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslConfiguration_Wrapper"));
              //setObjectName("QSslConfiguration_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslConfiguration_Wrapper::~QSslConfiguration_Wrapper() {
            //RDebug::decCounter(QString("QSslConfiguration_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslConfiguration_Wrapper"));

            //qDebug() << "QSslConfiguration_Wrapper::~QSslConfiguration_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslConfiguration";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslConfiguration_Wrapper::initConnections() {

          //setObjectName("QSslConfiguration_Wrapper");

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
  
    // Class: QSslConfiguration
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QSslConfiguration_Wrapper::QSslConfiguration_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSslConfiguration_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslConfiguration_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QSslConfiguration(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslConfiguration)
  
QSslConfiguration a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslConfiguration(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslConfiguration(
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

        
              wrapped = new QSslConfiguration(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QSslConfiguration";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_CONFIG(dtls)||defined(Q_QDOC)

#endif


    // non-static functions:
    
    // Class: QSslConfiguration
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslConfiguration(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslConfiguration)
  
QSslConfiguration a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslConfiguration(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QSslConfiguration* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QSslConfiguration&

            return RJSHelper::cpp2js_QSslConfiguration(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslConfiguration(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslConfiguration)
  
QSslConfiguration a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslConfiguration(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::equals
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslConfiguration(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslConfiguration)
  
QSslConfiguration a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslConfiguration(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                bool res = 
                    
                w->operator==(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for equals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::operator_not_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslConfiguration(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslConfiguration)
  
QSslConfiguration a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslConfiguration(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                bool res = 
                    
                w->operator!=(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_not_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::isNull
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
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
            
    // Class: QSslConfiguration
    // Function: protocol
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::protocol
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSsl::SslProtocol res = 
                    
                w->protocol(
                  
                );
              
            // return type: QSsl::SslProtocol

            return RJSHelper::cpp2js_QSsl_SslProtocol(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for protocol";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setProtocol
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setProtocol
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSsl_SslProtocol(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: protocol (QSsl::SslProtocol)
  
QSsl::SslProtocol a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSsl_SslProtocol(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setProtocol(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProtocol";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: peerVerifyMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::peerVerifyMode
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSslSocket::PeerVerifyMode res = 
                    
                w->peerVerifyMode(
                  
                );
              
            // return type: QSslSocket::PeerVerifyMode

            return RJSHelper::cpp2js_QSslSocket_PeerVerifyMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerVerifyMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setPeerVerifyMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setPeerVerifyMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslSocket_PeerVerifyMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QSslSocket::PeerVerifyMode)
  
QSslSocket::PeerVerifyMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslSocket_PeerVerifyMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setPeerVerifyMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPeerVerifyMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: peerVerifyDepth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::peerVerifyDepth
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                int res = 
                    
                w->peerVerifyDepth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerVerifyDepth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setPeerVerifyDepth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setPeerVerifyDepth
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
    
  // convert js parameter to cpp: depth (int)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setPeerVerifyDepth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPeerVerifyDepth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: localCertificateChain
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::localCertificateChain
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QList<QSslCertificate> res = 
                    
                w->localCertificateChain(
                  
                );
              
            // return type: QList<QSslCertificate>

            return RJSHelper::cpp2js_QList_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for localCertificateChain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setLocalCertificateChain
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setLocalCertificateChain
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: localChain (QList<QSslCertificate>)
  
QList<QSslCertificate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QSslCertificate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setLocalCertificateChain(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLocalCertificateChain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: localCertificate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::localCertificate
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSslCertificate res = 
                    
                w->localCertificate(
                  
                );
              
            // return type: QSslCertificate

            return RJSHelper::cpp2js_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for localCertificate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setLocalCertificate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setLocalCertificate
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: certificate (QSslCertificate)
  
QSslCertificate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setLocalCertificate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLocalCertificate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: peerCertificate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::peerCertificate
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSslCertificate res = 
                    
                w->peerCertificate(
                  
                );
              
            // return type: QSslCertificate

            return RJSHelper::cpp2js_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerCertificate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: peerCertificateChain
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::peerCertificateChain
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QList<QSslCertificate> res = 
                    
                w->peerCertificateChain(
                  
                );
              
            // return type: QList<QSslCertificate>

            return RJSHelper::cpp2js_QList_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerCertificateChain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: sessionCipher
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::sessionCipher
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSslCipher res = 
                    
                w->sessionCipher(
                  
                );
              
            // return type: QSslCipher

            return RJSHelper::cpp2js_QSslCipher(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sessionCipher";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: sessionProtocol
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::sessionProtocol
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSsl::SslProtocol res = 
                    
                w->sessionProtocol(
                  
                );
              
            // return type: QSsl::SslProtocol

            return RJSHelper::cpp2js_QSsl_SslProtocol(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sessionProtocol";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: privateKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::privateKey
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSslKey res = 
                    
                w->privateKey(
                  
                );
              
            // return type: QSslKey

            return RJSHelper::cpp2js_QSslKey(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for privateKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setPrivateKey
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setPrivateKey
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslKey(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QSslKey)
  
QSslKey a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslKey(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setPrivateKey(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPrivateKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: ciphers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::ciphers
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QList<QSslCipher> res = 
                    
                w->ciphers(
                  
                );
              
            // return type: QList<QSslCipher>

            return RJSHelper::cpp2js_QList_QSslCipher(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ciphers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setCiphers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setCiphers
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QSslCipher(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ciphers (QList<QSslCipher>)
  
QList<QSslCipher> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QSslCipher(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setCiphers(
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
    
  // convert js parameter to cpp: ciphers (QString)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setCiphers(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCiphers";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: caCertificates
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::caCertificates
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QList<QSslCertificate> res = 
                    
                w->caCertificates(
                  
                );
              
            // return type: QList<QSslCertificate>

            return RJSHelper::cpp2js_QList_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for caCertificates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setCaCertificates
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setCaCertificates
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: certificates (QList<QSslCertificate>)
  
QList<QSslCertificate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QSslCertificate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setCaCertificates(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCaCertificates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: addCaCertificates
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::addCaCertificates
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

   && RJSHelper::is_QSsl_EncodingFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QSsl::EncodingFormat)
  
QSsl::EncodingFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QSsl::Pem;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QSsl_EncodingFormat(handler, a2);
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
                QSslConfiguration* w = getWrapped();
                bool res = 
                    
                w->addCaCertificates(
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
        RJSHelper::is_QList_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: certificates (QList<QSslCertificate>)
  
QList<QSslCertificate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QSslCertificate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->addCaCertificates(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addCaCertificates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: addCaCertificate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::addCaCertificate
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: certificate (QSslCertificate)
  
QSslCertificate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->addCaCertificate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addCaCertificate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setSslOption
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setSslOption
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSsl_SslOption(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: option (QSsl::SslOption)
  
QSsl::SslOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSsl_SslOption(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setSslOption(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSslOption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: testSslOption
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::testSslOption
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSsl_SslOption(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: option (QSsl::SslOption)
  
QSsl::SslOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSsl_SslOption(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                bool res = 
                    
                w->testSslOption(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for testSslOption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: sessionTicket
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::sessionTicket
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QByteArray res = 
                    
                w->sessionTicket(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sessionTicket";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setSessionTicket
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setSessionTicket
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sessionTicket (QByteArray)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setSessionTicket(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSessionTicket";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: sessionTicketLifeTimeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::sessionTicketLifeTimeHint
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                int res = 
                    
                w->sessionTicketLifeTimeHint(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sessionTicketLifeTimeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: ephemeralServerKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::ephemeralServerKey
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSslKey res = 
                    
                w->ephemeralServerKey(
                  
                );
              
            // return type: QSslKey

            return RJSHelper::cpp2js_QSslKey(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ephemeralServerKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: ellipticCurves
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::ellipticCurves
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QList<QSslEllipticCurve> res = 
                    
                w->ellipticCurves(
                  
                );
              
            // return type: QList<QSslEllipticCurve>

            return RJSHelper::cpp2js_QList_QSslEllipticCurve(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ellipticCurves";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setEllipticCurves
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setEllipticCurves
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QSslEllipticCurve(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: curves (QList<QSslEllipticCurve>)
  
QList<QSslEllipticCurve> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QSslEllipticCurve(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setEllipticCurves(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEllipticCurves";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: preSharedKeyIdentityHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::preSharedKeyIdentityHint
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QByteArray res = 
                    
                w->preSharedKeyIdentityHint(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for preSharedKeyIdentityHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setPreSharedKeyIdentityHint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setPreSharedKeyIdentityHint
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (QByteArray)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setPreSharedKeyIdentityHint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPreSharedKeyIdentityHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: diffieHellmanParameters
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::diffieHellmanParameters
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSslDiffieHellmanParameters res = 
                    
                w->diffieHellmanParameters(
                  
                );
              
            // return type: QSslDiffieHellmanParameters

            return RJSHelper::cpp2js_QSslDiffieHellmanParameters(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for diffieHellmanParameters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setDiffieHellmanParameters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setDiffieHellmanParameters
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslDiffieHellmanParameters(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dhparams (QSslDiffieHellmanParameters)
  
QSslDiffieHellmanParameters a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslDiffieHellmanParameters(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setDiffieHellmanParameters(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDiffieHellmanParameters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setBackendConfigurationOption
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setBackendConfigurationOption
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setBackendConfigurationOption(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackendConfigurationOption";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_CONFIG(dtls)||defined(Q_QDOC)

    // Class: QSslConfiguration
    // Function: dtlsCookieVerificationEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::dtlsCookieVerificationEnabled
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                bool res = 
                    
                w->dtlsCookieVerificationEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dtlsCookieVerificationEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setDtlsCookieVerificationEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setDtlsCookieVerificationEnabled
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
    
  // convert js parameter to cpp: enable (bool)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setDtlsCookieVerificationEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDtlsCookieVerificationEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QSslConfiguration
    // Function: handshakeMustInterruptOnError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::handshakeMustInterruptOnError
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                bool res = 
                    
                w->handshakeMustInterruptOnError(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for handshakeMustInterruptOnError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setHandshakeMustInterruptOnError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setHandshakeMustInterruptOnError
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
    
  // convert js parameter to cpp: interrupt (bool)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setHandshakeMustInterruptOnError(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHandshakeMustInterruptOnError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: missingCertificateIsFatal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::missingCertificateIsFatal
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                bool res = 
                    
                w->missingCertificateIsFatal(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for missingCertificateIsFatal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setMissingCertificateIsFatal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setMissingCertificateIsFatal
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
    
  // convert js parameter to cpp: cannotRecover (bool)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setMissingCertificateIsFatal(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMissingCertificateIsFatal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setOcspStaplingEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setOcspStaplingEnabled
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
    
  // convert js parameter to cpp: enable (bool)
  
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
                QSslConfiguration* w = getWrapped();
                
                w->setOcspStaplingEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOcspStaplingEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: ocspStaplingEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::ocspStaplingEnabled
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                bool res = 
                    
                w->ocspStaplingEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ocspStaplingEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: setAllowedNextProtocols
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::setAllowedNextProtocols
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: protocols (QList<QByteArray>)
  
QList<QByteArray> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                
                w->setAllowedNextProtocols(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllowedNextProtocols";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: allowedNextProtocols
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::allowedNextProtocols
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->allowedNextProtocols(
                  
                );
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for allowedNextProtocols";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: nextNegotiatedProtocol
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::nextNegotiatedProtocol
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QByteArray res = 
                    
                w->nextNegotiatedProtocol(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nextNegotiatedProtocol";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslConfiguration
    // Function: nextProtocolNegotiationStatus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslConfiguration_Wrapper::nextProtocolNegotiationStatus
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslConfiguration* w = getWrapped();
                QSslConfiguration::NextProtocolNegotiationStatus res = 
                    
                w->nextProtocolNegotiationStatus(
                  
                );
              
            // return type: QSslConfiguration::NextProtocolNegotiationStatus

            return RJSHelper::cpp2js_QSslConfiguration_NextProtocolNegotiationStatus(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nextProtocolNegotiationStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslconfiguration_wrapper.cpp"
  
