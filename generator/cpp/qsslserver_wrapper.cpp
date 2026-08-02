
  // Auto generated
  
  // include header:
  //#include "qsslserverwrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslserver_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslServer*> QSslServer_Wrapper::basecasters_QSslServer;
    
    // static functions implementation in singleton wrapper:
    
    void QSslServer_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslServer_Wrapper>("org.qcad", 1, 0, "QSslServer_Wrapper");
        qmlRegisterInterface<QSslServer_Wrapper>("QSslServer_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslServer* t = new RJSType_QSslServer();
          global.setProperty("RJSType_QSslServer", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslServer::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslServer_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslServer_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslServer_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslServer_BaseJs", mob);
      
      QString fileName = ":generator/js/QSslServer.js";
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
    QSslServer_Wrapper::QSslServer_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslServer_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslServer_Wrapper::QSslServer_Wrapper(RJSApi& h, QSslServer* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslServer_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslServer_Wrapper"));
              //setObjectName("QSslServer_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslServer_Wrapper::~QSslServer_Wrapper() {
            //RDebug::decCounter(QString("QSslServer_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslServer_Wrapper"));

            //qDebug() << "QSslServer_Wrapper::~QSslServer_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslServer";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslServer_Wrapper::initConnections() {

          //setObjectName("QSslServer_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(sslErrors(QSslSocket*, const QList<QSslError>&)), 
    this, 
    SLOT(sslErrorsEmitter(QSslSocket*, const QList<QSslError>&))
  );

  connect(
    getWrapped(), 
    SIGNAL(peerVerifyError(QSslSocket*, const QSslError&)), 
    this, 
    SLOT(peerVerifyErrorEmitter(QSslSocket*, const QSslError&))
  );

  connect(
    getWrapped(), 
    SIGNAL(errorOccurred(QSslSocket*, QAbstractSocket::SocketError)), 
    this, 
    SLOT(errorOccurredEmitter(QSslSocket*, QAbstractSocket::SocketError))
  );

  connect(
    getWrapped(), 
    SIGNAL(preSharedKeyAuthenticationRequired(QSslSocket*, QSslPreSharedKeyAuthenticator*)), 
    this, 
    SLOT(preSharedKeyAuthenticationRequiredEmitter(QSslSocket*, QSslPreSharedKeyAuthenticator*))
  );

  connect(
    getWrapped(), 
    SIGNAL(handshakeInterruptedOnError(QSslSocket*, const QSslError&)), 
    this, 
    SLOT(handshakeInterruptedOnErrorEmitter(QSslSocket*, const QSslError&))
  );

  connect(
    getWrapped(), 
    SIGNAL(startedEncryptionHandshake(QSslSocket*)), 
    this, 
    SLOT(startedEncryptionHandshakeEmitter(QSslSocket*))
  );

          }
        }
      

  // constructors:
  
    // Class: QSslServer
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QSslServer_Wrapper::QSslServer_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSslServer_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslServer_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslServer(
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
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QSslServer";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSslServer
    // Function: listen
    // Source: QTcpServer
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::listen
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QHostAddress(handler, a1
    , true
  
  )

   && RJSHelper::is_quint16(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: address (QHostAddress)
  
QHostAddress a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QHostAddress::Any;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QHostAddress(handler, a1);
          }
        
  // convert js parameter to cpp: port (quint16)
  
quint16 a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_quint16(handler, a2);
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
                QSslServer* w = getWrapped();
                bool res = 
                    
                w->listen(
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

                  qWarning() << "no matching function variant found for listen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: close
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::close
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
                QSslServer* w = getWrapped();
                
                w->close(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for close";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: isListening
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::isListening
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                bool res = 
                    
                w->isListening(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isListening";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: setMaxPendingConnections
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::setMaxPendingConnections
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
    
  // convert js parameter to cpp: numConnections (int)
  
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
                QSslServer* w = getWrapped();
                
                w->setMaxPendingConnections(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaxPendingConnections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: maxPendingConnections
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::maxPendingConnections
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                int res = 
                    
                w->maxPendingConnections(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maxPendingConnections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: setListenBacklogSize
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::setListenBacklogSize
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
    
  // convert js parameter to cpp: size (int)
  
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
                QSslServer* w = getWrapped();
                
                w->setListenBacklogSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setListenBacklogSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: listenBacklogSize
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::listenBacklogSize
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                int res = 
                    
                w->listenBacklogSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for listenBacklogSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: serverPort
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::serverPort
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                quint16 res = 
                    
                w->serverPort(
                  
                );
              
            // return type: quint16

            return RJSHelper::cpp2js_quint16(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for serverPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: serverAddress
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::serverAddress
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                QHostAddress res = 
                    
                w->serverAddress(
                  
                );
              
            // return type: QHostAddress

            return RJSHelper::cpp2js_QHostAddress(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for serverAddress";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: waitForNewConnection
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::waitForNewConnection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: msec (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                QSslServer* w = getWrapped();
                bool res = 
                    
                w->waitForNewConnection(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForNewConnection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: hasPendingConnections
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::hasPendingConnections
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                bool res = 
                    
                w->hasPendingConnections(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasPendingConnections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: nextPendingConnection
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::nextPendingConnection
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
                QSslServer* w = getWrapped();
                QTcpSocket* res = 
                    
                w->nextPendingConnection(
                  
                );
              
            // return type: QTcpSocket*

            return RJSHelper::cpp2js_QTcpSocket(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nextPendingConnection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: serverError
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::serverError
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                QAbstractSocket::SocketError res = 
                    
                w->serverError(
                  
                );
              
            // return type: QAbstractSocket::SocketError

            return RJSHelper::cpp2js_QAbstractSocket_SocketError(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for serverError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: errorString
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
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
            
    // Class: QSslServer
    // Function: pauseAccepting
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::pauseAccepting
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
                QSslServer* w = getWrapped();
                
                w->pauseAccepting(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for pauseAccepting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: resumeAccepting
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::resumeAccepting
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
                QSslServer* w = getWrapped();
                
                w->resumeAccepting(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resumeAccepting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: setProxy
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::setProxy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: networkProxy (QNetworkProxy)
  
QNetworkProxy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                
                w->setProxy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: proxy
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::proxy
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                QNetworkProxy res = 
                    
                w->proxy(
                  
                );
              
            // return type: QNetworkProxy

            return RJSHelper::cpp2js_QNetworkProxy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for proxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: setSslConfiguration
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::setSslConfiguration
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
    
  // convert js parameter to cpp: sslConfiguration (QSslConfiguration)
  
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
                QSslServer* w = getWrapped();
                
                w->setSslConfiguration(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSslConfiguration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: sslConfiguration
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::sslConfiguration
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                QSslConfiguration res = 
                    
                w->sslConfiguration(
                  
                );
              
            // return type: QSslConfiguration

            return RJSHelper::cpp2js_QSslConfiguration(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sslConfiguration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: setHandshakeTimeout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::setHandshakeTimeout
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
    
  // convert js parameter to cpp: timeout (int)
  
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
                QSslServer* w = getWrapped();
                
                w->setHandshakeTimeout(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHandshakeTimeout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: handshakeTimeout
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslServer_Wrapper::handshakeTimeout
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslServer* w = getWrapped();
                int res = 
                    
                w->handshakeTimeout(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for handshakeTimeout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslServer
    // Function: sslErrors
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslServer_Wrapper::sslErrorsEmitter(
                QSslSocket* socket, const QList<QSslError>& errors
              ) {
                // convert cpp parameters to js:
                
  // parameter: socket (QSslSocket)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslSocket(
    handler, 
    socket
  );

  // parameter: errors (QList<QSslError>)
  


  QJSValue a2_js = RJSHelper::cpp2js_QList_QSslError(
    handler, 
    errors
  );


                emit sslErrors(
                  a1_js, a2_js
                );
              }
            
    // Class: QSslServer
    // Function: peerVerifyError
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslServer_Wrapper::peerVerifyErrorEmitter(
                QSslSocket* socket, const QSslError& error
              ) {
                // convert cpp parameters to js:
                
  // parameter: socket (QSslSocket)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslSocket(
    handler, 
    socket
  );

  // parameter: error (QSslError)
  


  QJSValue a2_js = RJSHelper::cpp2js_QSslError(
    handler, 
    error
  );


                emit peerVerifyError(
                  a1_js, a2_js
                );
              }
            
    // Class: QSslServer
    // Function: errorOccurred
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslServer_Wrapper::errorOccurredEmitter(
                QSslSocket* socket, QAbstractSocket::SocketError error
              ) {
                // convert cpp parameters to js:
                
  // parameter: socket (QSslSocket)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslSocket(
    handler, 
    socket
  );

  // parameter: error (QAbstractSocket::SocketError)
  


  QJSValue a2_js = RJSHelper::cpp2js_QAbstractSocket_SocketError(
    handler, 
    error
  );


                emit errorOccurred(
                  a1_js, a2_js
                );
              }
            
    // Class: QSslServer
    // Function: preSharedKeyAuthenticationRequired
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslServer_Wrapper::preSharedKeyAuthenticationRequiredEmitter(
                QSslSocket* socket, QSslPreSharedKeyAuthenticator* authenticator
              ) {
                // convert cpp parameters to js:
                
  // parameter: socket (QSslSocket)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslSocket(
    handler, 
    socket
  );

  // parameter: authenticator (QSslPreSharedKeyAuthenticator)
  


  QJSValue a2_js = RJSHelper::cpp2js_QSslPreSharedKeyAuthenticator(
    handler, 
    authenticator
  );


                emit preSharedKeyAuthenticationRequired(
                  a1_js, a2_js
                );
              }
            
    // Class: QSslServer
    // Function: handshakeInterruptedOnError
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslServer_Wrapper::handshakeInterruptedOnErrorEmitter(
                QSslSocket* socket, const QSslError& error
              ) {
                // convert cpp parameters to js:
                
  // parameter: socket (QSslSocket)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslSocket(
    handler, 
    socket
  );

  // parameter: error (QSslError)
  


  QJSValue a2_js = RJSHelper::cpp2js_QSslError(
    handler, 
    error
  );


                emit handshakeInterruptedOnError(
                  a1_js, a2_js
                );
              }
            
    // Class: QSslServer
    // Function: startedEncryptionHandshake
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslServer_Wrapper::startedEncryptionHandshakeEmitter(
                QSslSocket* socket
              ) {
                // convert cpp parameters to js:
                
  // parameter: socket (QSslSocket)
  


  QJSValue a1_js = RJSHelper::cpp2js_QSslSocket(
    handler, 
    socket
  );


                emit startedEncryptionHandshake(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslserver_wrapper.cpp"
  
