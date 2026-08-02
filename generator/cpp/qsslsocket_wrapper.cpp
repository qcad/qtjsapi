
  // Auto generated
  
  // include header:
  //#include "qsslsocketwrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslsocket_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslSocket*> QSslSocket_Wrapper::basecasters_QSslSocket;
    
    // static functions implementation in singleton wrapper:
    
    void QSslSocket_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslSocket_Wrapper>("org.qcad", 1, 0, "QSslSocket_Wrapper");
        qmlRegisterInterface<QSslSocket_Wrapper>("QSslSocket_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslSocket* t = new RJSType_QSslSocket();
          global.setProperty("RJSType_QSslSocket", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslSocket::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslSocket_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslSocket_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslSocket_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslSocket_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QSslSocket_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QSslSocket_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QSslSocket_WrapperSingleton * s = new QSslSocket_WrapperSingleton(handler);
        engine->globalObject().setProperty("QSslSocket_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QSslSocket.js";
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
    QSslSocket_Wrapper::QSslSocket_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslSocket_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslSocket_Wrapper::QSslSocket_Wrapper(RJSApi& h, QSslSocket* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslSocket_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslSocket_Wrapper"));
              //setObjectName("QSslSocket_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslSocket_Wrapper::~QSslSocket_Wrapper() {
            //RDebug::decCounter(QString("QSslSocket_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslSocket_Wrapper"));

            //qDebug() << "QSslSocket_Wrapper::~QSslSocket_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslSocket";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslSocket_Wrapper::initConnections() {

          //setObjectName("QSslSocket_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(encrypted()), 
    this, 
    SLOT(encryptedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(peerVerifyError(const QSslError&)), 
    this, 
    SLOT(peerVerifyErrorEmitter(const QSslError&))
  );

  connect(
    getWrapped(), 
    SIGNAL(sslErrors(const QList<QSslError>&)), 
    this, 
    SLOT(sslErrorsEmitter(const QList<QSslError>&))
  );

  connect(
    getWrapped(), 
    SIGNAL(modeChanged(QSslSocket::SslMode)), 
    this, 
    SLOT(modeChangedEmitter(QSslSocket::SslMode))
  );

  connect(
    getWrapped(), 
    SIGNAL(encryptedBytesWritten(qint64)), 
    this, 
    SLOT(encryptedBytesWrittenEmitter(qint64))
  );

  connect(
    getWrapped(), 
    SIGNAL(preSharedKeyAuthenticationRequired(QSslPreSharedKeyAuthenticator*)), 
    this, 
    SLOT(preSharedKeyAuthenticationRequiredEmitter(QSslPreSharedKeyAuthenticator*))
  );

  connect(
    getWrapped(), 
    SIGNAL(newSessionTicketReceived()), 
    this, 
    SLOT(newSessionTicketReceivedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(handshakeInterruptedOnError(const QSslError&)), 
    this, 
    SLOT(handshakeInterruptedOnErrorEmitter(const QSslError&))
  );

          }
        }
      

  // constructors:
  

    // non-static functions:
    
    // Class: QSslSocket
    // Function: startClientEncryption
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::startClientEncryption
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
                QSslSocket* w = getWrapped();
                
                w->startClientEncryption(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startClientEncryption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: startServerEncryption
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::startServerEncryption
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
                QSslSocket* w = getWrapped();
                
                w->startServerEncryption(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startServerEncryption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: ignoreSslErrors
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::ignoreSslErrors
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
                QSslSocket* w = getWrapped();
                
                w->ignoreSslErrors(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ignoreSslErrors";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: encrypted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::encryptedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit encrypted(
                  
                );
              }
            
    // Class: QSslSocket
    // Function: peerVerifyError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::peerVerifyErrorEmitter(
                const QSslError& error
              ) {
                // convert cpp parameters to js:
                
  // parameter: error (QSslError)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslError(
    handler, 
    error
  );


                emit peerVerifyError(
                  a1_js
                );
              }
            
    // Class: QSslSocket
    // Function: sslErrors
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::sslErrorsEmitter(
                const QList<QSslError>& errors
              ) {
                // convert cpp parameters to js:
                
  // parameter: errors (QList<QSslError>)
  


  QJSValue a1_js = RJSHelper::cpp2js_QList_QSslError(
    handler, 
    errors
  );


                emit sslErrors(
                  a1_js
                );
              }
            
    // Class: QSslSocket
    // Function: modeChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::modeChangedEmitter(
                QSslSocket::SslMode newMode
              ) {
                // convert cpp parameters to js:
                
  // parameter: newMode (QSslSocket::SslMode)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslSocket_SslMode(
    handler, 
    newMode
  );


                emit modeChanged(
                  a1_js
                );
              }
            
    // Class: QSslSocket
    // Function: encryptedBytesWritten
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::encryptedBytesWrittenEmitter(
                qint64 totalBytes
              ) {
                // convert cpp parameters to js:
                
  // parameter: totalBytes (qint64)
  


  QJSValue a1_js = RJSHelper::cpp2js_qint64(
    handler, 
    totalBytes
  );


                emit encryptedBytesWritten(
                  a1_js
                );
              }
            
    // Class: QSslSocket
    // Function: preSharedKeyAuthenticationRequired
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::preSharedKeyAuthenticationRequiredEmitter(
                QSslPreSharedKeyAuthenticator* authenticator
              ) {
                // convert cpp parameters to js:
                
  // parameter: authenticator (QSslPreSharedKeyAuthenticator)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslPreSharedKeyAuthenticator(
    handler, 
    authenticator
  );


                emit preSharedKeyAuthenticationRequired(
                  a1_js
                );
              }
            
    // Class: QSslSocket
    // Function: newSessionTicketReceived
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::newSessionTicketReceivedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit newSessionTicketReceived(
                  
                );
              }
            
    // Class: QSslSocket
    // Function: handshakeInterruptedOnError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::handshakeInterruptedOnErrorEmitter(
                const QSslError& error
              ) {
                // convert cpp parameters to js:
                
  // parameter: error (QSslError)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslError(
    handler, 
    error
  );


                emit handshakeInterruptedOnError(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslsocket_wrapper.cpp"
  
