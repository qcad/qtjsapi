
  // Auto generated
  
  // include header:
  //#include "qtcpsocketwrapper.h"
  //#include "header_cpp.h"
  
    #include "qtcpsocket_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QTcpSocket*> QTcpSocket_Wrapper::basecasters_QTcpSocket;
    
    // static functions implementation in singleton wrapper:
    
    void QTcpSocket_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTcpSocket_Wrapper>("org.qcad", 1, 0, "QTcpSocket_Wrapper");
        qmlRegisterInterface<QTcpSocket_Wrapper>("QTcpSocket_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QTcpSocket* t = new RJSType_QTcpSocket();
          global.setProperty("RJSType_QTcpSocket", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QTcpSocket::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTcpSocket_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTcpSocket_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTcpSocket_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTcpSocket_BaseJs", mob);
      
      QString fileName = ":generator/js/QTcpSocket.js";
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
    QTcpSocket_Wrapper::QTcpSocket_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTcpSocket_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTcpSocket_Wrapper::QTcpSocket_Wrapper(RJSApi& h, QTcpSocket* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTcpSocket_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTcpSocket_Wrapper"));
              //setObjectName("QTcpSocket_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTcpSocket_Wrapper::~QTcpSocket_Wrapper() {
            //RDebug::decCounter(QString("QTcpSocket_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTcpSocket_Wrapper"));

            //qDebug() << "QTcpSocket_Wrapper::~QTcpSocket_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QTcpSocket";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTcpSocket_Wrapper::initConnections() {

          //setObjectName("QTcpSocket_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is not a QObject:
              // wrapper is managed by script engine:
              //QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
            

          if (hasWrapped()) {
            
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(hostFound()), 
    this, 
    SLOT(hostFoundEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(connected()), 
    this, 
    SLOT(connectedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(disconnected()), 
    this, 
    SLOT(disconnectedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(stateChanged(QAbstractSocket::SocketState)), 
    this, 
    SLOT(stateChangedEmitter(QAbstractSocket::SocketState))
  );

  connect(
    getWrapped(), 
    SIGNAL(errorOccurred(QAbstractSocket::SocketError)), 
    this, 
    SLOT(errorOccurredEmitter(QAbstractSocket::SocketError))
  );

  connect(
    getWrapped(), 
    SIGNAL(readyRead()), 
    this, 
    SLOT(readyReadEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(channelReadyRead(int)), 
    this, 
    SLOT(channelReadyReadEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(bytesWritten(qint64)), 
    this, 
    SLOT(bytesWrittenEmitter(qint64))
  );

  connect(
    getWrapped(), 
    SIGNAL(channelBytesWritten(int, qint64)), 
    this, 
    SLOT(channelBytesWrittenEmitter(int, qint64))
  );

  connect(
    getWrapped(), 
    SIGNAL(aboutToClose()), 
    this, 
    SLOT(aboutToCloseEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(readChannelFinished()), 
    this, 
    SLOT(readChannelFinishedEmitter())
  );

          }
        }
      

  // constructors:
  
    // Class: QTcpSocket
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QTcpSocket_Wrapper::QTcpSocket_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTcpSocket_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTcpSocket_Wrapper"));
                
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

        
              wrapped = new QTcpSocket(
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
                  

                  qWarning() << "no matching constructor variant found for QTcpSocket";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTcpSocket
    // Function: resume
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::resume
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
                QTcpSocket* w = getWrapped();
                
                w->resume(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resume";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: bind
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::bind
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
        RJSHelper::is_QHostAddress(handler, a1
  )

   && RJSHelper::is_quint16(handler, a2
    , true
  
  )

   && RJSHelper::is_QAbstractSocket_BindMode(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: address (QHostAddress)
  
QHostAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress(handler, a1);
        
  // convert js parameter to cpp: port (quint16)
  
quint16 a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_quint16(handler, a2);
          }
        
  // convert js parameter to cpp: mode (QAbstractSocket::BindMode)
  
QAbstractSocket::BindMode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QAbstractSocket::DefaultForPlatform;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QAbstractSocket_BindMode(handler, a3);
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->bind(
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

      // check parameter types:
      if (
        RJSHelper::is_QHostAddress_SpecialAddress(handler, a1
  )

   && RJSHelper::is_quint16(handler, a2
    , true
  
  )

   && RJSHelper::is_QAbstractSocket_BindMode(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: addr (QHostAddress::SpecialAddress)
  
QHostAddress::SpecialAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress_SpecialAddress(handler, a1);
        
  // convert js parameter to cpp: port (quint16)
  
quint16 a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_quint16(handler, a2);
          }
        
  // convert js parameter to cpp: mode (QAbstractSocket::BindMode)
  
QAbstractSocket::BindMode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QAbstractSocket::DefaultForPlatform;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QAbstractSocket_BindMode(handler, a3);
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->bind(
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

      // check parameter types:
      if (
        RJSHelper::is_quint16(handler, a1
    , true
  
  )

   && RJSHelper::is_QAbstractSocket_BindMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: port (quint16)
  
quint16 a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_quint16(handler, a1);
          }
        
  // convert js parameter to cpp: mode (QAbstractSocket::BindMode)
  
QAbstractSocket::BindMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QAbstractSocket::DefaultForPlatform;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QAbstractSocket_BindMode(handler, a2);
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->bind(
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
        RJSHelper::is_quint16(handler, a1
    , true
  
  )

   && RJSHelper::is_QAbstractSocket_BindMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: port (quint16)
  
quint16 a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_quint16(handler, a1);
          }
        
  // convert js parameter to cpp: mode (QAbstractSocket::BindMode)
  
QAbstractSocket::BindMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QAbstractSocket::DefaultForPlatform;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QAbstractSocket_BindMode(handler, a2);
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->bind(
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

                  qWarning() << "no matching function variant found for bind";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: connectToHost
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::connectToHost
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

   && RJSHelper::is_quint16(handler, a2
  )

   && RJSHelper::is_QIODeviceBase_OpenMode(handler, a3
    , true
  
  )

   && RJSHelper::is_QAbstractSocket_NetworkLayerProtocol(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hostName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: port (quint16)
  
quint16 a2_cpp;

      a2_cpp = RJSHelper::js2cpp_quint16(handler, a2);
        
  // convert js parameter to cpp: mode (QIODeviceBase::OpenMode)
  
QIODeviceBase::OpenMode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIODeviceBase::ReadWrite;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIODeviceBase_OpenMode(handler, a3);
          }
        
  // convert js parameter to cpp: protocol (QAbstractSocket::NetworkLayerProtocol)
  
QAbstractSocket::NetworkLayerProtocol a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QAbstractSocket::AnyIPProtocol;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QAbstractSocket_NetworkLayerProtocol(handler, a4);
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
                QTcpSocket* w = getWrapped();
                
                w->connectToHost(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QHostAddress(handler, a1
  )

   && RJSHelper::is_quint16(handler, a2
  )

   && RJSHelper::is_QIODeviceBase_OpenMode(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: address (QHostAddress)
  
QHostAddress a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHostAddress(handler, a1);
        
  // convert js parameter to cpp: port (quint16)
  
quint16 a2_cpp;

      a2_cpp = RJSHelper::js2cpp_quint16(handler, a2);
        
  // convert js parameter to cpp: mode (QIODeviceBase::OpenMode)
  
QIODeviceBase::OpenMode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIODeviceBase::ReadWrite;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIODeviceBase_OpenMode(handler, a3);
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
                QTcpSocket* w = getWrapped();
                
                w->connectToHost(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for connectToHost";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: disconnectFromHost
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::disconnectFromHost
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
                QTcpSocket* w = getWrapped();
                
                w->disconnectFromHost(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for disconnectFromHost";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: isValid
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::isValid
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: localPort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::localPort
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                quint16 res = 
                    
                w->localPort(
                  
                );
              
            // return type: quint16

            return RJSHelper::cpp2js_quint16(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for localPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: localAddress
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::localAddress
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QHostAddress res = 
                    
                w->localAddress(
                  
                );
              
            // return type: QHostAddress

            return RJSHelper::cpp2js_QHostAddress(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for localAddress";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: peerPort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::peerPort
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                quint16 res = 
                    
                w->peerPort(
                  
                );
              
            // return type: quint16

            return RJSHelper::cpp2js_quint16(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: peerAddress
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::peerAddress
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QHostAddress res = 
                    
                w->peerAddress(
                  
                );
              
            // return type: QHostAddress

            return RJSHelper::cpp2js_QHostAddress(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerAddress";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: peerName
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::peerName
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QString res = 
                    
                w->peerName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: readBufferSize
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::readBufferSize
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->readBufferSize(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: setReadBufferSize
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::setReadBufferSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                
                w->setReadBufferSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setReadBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: abort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::abort
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
                QTcpSocket* w = getWrapped();
                
                w->abort(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for abort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: setSocketOption
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::setSocketOption
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractSocket_SocketOption(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: option (QAbstractSocket::SocketOption)
  
QAbstractSocket::SocketOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractSocket_SocketOption(handler, a1);
        
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
                QTcpSocket* w = getWrapped();
                
                w->setSocketOption(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSocketOption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: socketOption
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::socketOption
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractSocket_SocketOption(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: option (QAbstractSocket::SocketOption)
  
QAbstractSocket::SocketOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractSocket_SocketOption(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QVariant res = 
                    
                w->socketOption(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for socketOption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: socketType
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::socketType
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QAbstractSocket::SocketType res = 
                    
                w->socketType(
                  
                );
              
            // return type: QAbstractSocket::SocketType

            return RJSHelper::cpp2js_QAbstractSocket_SocketType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for socketType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: state
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::state
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QAbstractSocket::SocketState res = 
                    
                w->state(
                  
                );
              
            // return type: QAbstractSocket::SocketState

            return RJSHelper::cpp2js_QAbstractSocket_SocketState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for state";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: error
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::error
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QAbstractSocket::SocketError res = 
                    
                w->error(
                  
                );
              
            // return type: QAbstractSocket::SocketError

            return RJSHelper::cpp2js_QAbstractSocket_SocketError(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: flush
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::flush
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->flush(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: waitForConnected
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::waitForConnected
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
    
  // convert js parameter to cpp: msecs (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 30000;
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->waitForConnected(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForConnected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: waitForDisconnected
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::waitForDisconnected
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
    
  // convert js parameter to cpp: msecs (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 30000;
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->waitForDisconnected(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForDisconnected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: setProxy
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::setProxy
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
                QTcpSocket* w = getWrapped();
                
                w->setProxy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: proxy
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::proxy
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
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
            
    // Class: QTcpSocket
    // Function: protocolTag
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::protocolTag
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QString res = 
                    
                w->protocolTag(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for protocolTag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: setProtocolTag
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::setProtocolTag
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
    
  // convert js parameter to cpp: tag (QString)
  
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
                QTcpSocket* w = getWrapped();
                
                w->setProtocolTag(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProtocolTag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: hostFound
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::hostFoundEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit hostFound(
                  
                );
              }
            
    // Class: QTcpSocket
    // Function: connected
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::connectedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit connected(
                  
                );
              }
            
    // Class: QTcpSocket
    // Function: disconnected
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::disconnectedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit disconnected(
                  
                );
              }
            
    // Class: QTcpSocket
    // Function: stateChanged
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::stateChangedEmitter(
                QAbstractSocket::SocketState a1
              ) {
                // convert cpp parameters to js:
                
  // parameter:  (QAbstractSocket::SocketState)
  


  QJSValue a1_js = RJSHelper::cpp2js_QAbstractSocket_SocketState(
    handler, 
    a1
  );


                emit stateChanged(
                  a1_js
                );
              }
            
    // Class: QTcpSocket
    // Function: errorOccurred
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::errorOccurredEmitter(
                QAbstractSocket::SocketError a1
              ) {
                // convert cpp parameters to js:
                
  // parameter:  (QAbstractSocket::SocketError)
  


  QJSValue a1_js = RJSHelper::cpp2js_QAbstractSocket_SocketError(
    handler, 
    a1
  );


                emit errorOccurred(
                  a1_js
                );
              }
            
    // Class: QTcpSocket
    // Function: openMode
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::openMode
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                QIODeviceBase::OpenMode res = 
                    
                w->openMode(
                  
                );
              
            // return type: QIODeviceBase::OpenMode

            return RJSHelper::cpp2js_QIODeviceBase_OpenMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for openMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: setTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::setTextModeEnabled
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
    
  // convert js parameter to cpp: enabled (bool)
  
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
                QTcpSocket* w = getWrapped();
                
                w->setTextModeEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextModeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: isTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::isTextModeEnabled
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->isTextModeEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTextModeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: isOpen
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::isOpen
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->isOpen(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isOpen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: isReadable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::isReadable
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->isReadable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isReadable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: isWritable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::isWritable
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->isWritable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWritable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: isSequential
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::isSequential
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->isSequential(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSequential";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: readChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::readChannelCount
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                int res = 
                    
                w->readChannelCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readChannelCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: writeChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::writeChannelCount
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                int res = 
                    
                w->writeChannelCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for writeChannelCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: currentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::currentReadChannel
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                int res = 
                    
                w->currentReadChannel(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: setCurrentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::setCurrentReadChannel
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
    
  // convert js parameter to cpp: channel (int)
  
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
                QTcpSocket* w = getWrapped();
                
                w->setCurrentReadChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: currentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::currentWriteChannel
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                int res = 
                    
                w->currentWriteChannel(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentWriteChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: setCurrentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::setCurrentWriteChannel
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
    
  // convert js parameter to cpp: channel (int)
  
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
                QTcpSocket* w = getWrapped();
                
                w->setCurrentWriteChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentWriteChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: open
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::open
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QIODeviceBase_OpenMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QIODeviceBase::OpenMode)
  
QIODeviceBase::OpenMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODeviceBase_OpenMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->open(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for open";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: close
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::close
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
                QTcpSocket* w = getWrapped();
                
                w->close(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for close";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: pos
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::pos
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->pos(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: size
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::size
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->size(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: seek
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::seek
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->seek(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for seek";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: atEnd
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::atEnd
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->atEnd(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: reset
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::reset
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->reset(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: bytesAvailable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::bytesAvailable
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->bytesAvailable(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bytesAvailable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: bytesToWrite
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::bytesToWrite
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->bytesToWrite(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bytesToWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: readAll
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::readAll
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
                QTcpSocket* w = getWrapped();
                QByteArray res = 
                    
                w->readAll(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: canReadLine
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::canReadLine
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->canReadLine(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canReadLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: startTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::startTransaction
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
                QTcpSocket* w = getWrapped();
                
                w->startTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: commitTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::commitTransaction
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
                QTcpSocket* w = getWrapped();
                
                w->commitTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commitTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: rollbackTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::rollbackTransaction
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
                QTcpSocket* w = getWrapped();
                
                w->rollbackTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rollbackTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: isTransactionStarted
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::isTransactionStarted
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->isTransactionStarted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTransactionStarted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: write
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::write
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_qint64(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: len (qint64)
  
qint64 a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qint64(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
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
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QByteArray)
  
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
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for write";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: skip
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::skip
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: maxSize (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                qint64 res = 
                    
                w->skip(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for skip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: waitForReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::waitForReadyRead
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
    
  // convert js parameter to cpp: msecs (int)
  
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->waitForReadyRead(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForReadyRead";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: waitForBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::waitForBytesWritten
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
    
  // convert js parameter to cpp: msecs (int)
  
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
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->waitForBytesWritten(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForBytesWritten";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: ungetChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::ungetChar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = RJSHelper::js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                
                w->ungetChar(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ungetChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: putChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::putChar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = RJSHelper::js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
                bool res = 
                    
                w->putChar(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for putChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTcpSocket
    // Function: errorString
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTcpSocket_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTcpSocket* w = getWrapped();
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
            
    // Class: QTcpSocket
    // Function: readyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::readyReadEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readyRead(
                  
                );
              }
            
    // Class: QTcpSocket
    // Function: channelReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::channelReadyReadEmitter(
                int channel
              ) {
                // convert cpp parameters to js:
                
  // parameter: channel (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    channel
  );


                emit channelReadyRead(
                  a1_js
                );
              }
            
    // Class: QTcpSocket
    // Function: bytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::bytesWrittenEmitter(
                qint64 bytes
              ) {
                // convert cpp parameters to js:
                
  // parameter: bytes (qint64)
  


  QJSValue a1_js = RJSHelper::cpp2js_qint64(
    handler, 
    bytes
  );


                emit bytesWritten(
                  a1_js
                );
              }
            
    // Class: QTcpSocket
    // Function: channelBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::channelBytesWrittenEmitter(
                int channel, qint64 bytes
              ) {
                // convert cpp parameters to js:
                
  // parameter: channel (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    channel
  );

  // parameter: bytes (qint64)
  


  QJSValue a2_js = RJSHelper::cpp2js_qint64(
    handler, 
    bytes
  );


                emit channelBytesWritten(
                  a1_js, a2_js
                );
              }
            
    // Class: QTcpSocket
    // Function: aboutToClose
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::aboutToCloseEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit aboutToClose(
                  
                );
              }
            
    // Class: QTcpSocket
    // Function: readChannelFinished
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QTcpSocket_Wrapper::readChannelFinishedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readChannelFinished(
                  
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qtcpsocket_wrapper.cpp"
  
