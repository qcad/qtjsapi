
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
    // Function: openMode
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::openMode
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: setTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::setTextModeEnabled
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
                QSslSocket* w = getWrapped();
                
                w->setTextModeEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextModeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: isTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::isTextModeEnabled
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: isOpen
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::isOpen
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: isReadable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::isReadable
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: isWritable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::isWritable
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: readChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::readChannelCount
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: writeChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::writeChannelCount
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: currentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::currentReadChannel
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: setCurrentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::setCurrentReadChannel
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
                QSslSocket* w = getWrapped();
                
                w->setCurrentReadChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: currentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::currentWriteChannel
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: setCurrentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::setCurrentWriteChannel
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
                QSslSocket* w = getWrapped();
                
                w->setCurrentWriteChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentWriteChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: open
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::open
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
                QSslSocket* w = getWrapped();
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
            
    // Class: QSslSocket
    // Function: pos
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::pos
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: size
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::size
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: seek
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::seek
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
                QSslSocket* w = getWrapped();
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
            
    // Class: QSslSocket
    // Function: reset
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::reset
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
            
    // Class: QSslSocket
    // Function: readAll
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::readAll
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
            
    // Class: QSslSocket
    // Function: startTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::startTransaction
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
                
                w->startTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: commitTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::commitTransaction
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
                
                w->commitTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commitTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: rollbackTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::rollbackTransaction
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
                
                w->rollbackTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rollbackTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: isTransactionStarted
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::isTransactionStarted
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: write
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::write
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
                QSslSocket* w = getWrapped();
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
                QSslSocket* w = getWrapped();
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
                QSslSocket* w = getWrapped();
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
            
    // Class: QSslSocket
    // Function: skip
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::skip
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
                QSslSocket* w = getWrapped();
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
            
    // Class: QSslSocket
    // Function: ungetChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::ungetChar
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
                QSslSocket* w = getWrapped();
                
                w->ungetChar(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ungetChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: putChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::putChar
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
                QSslSocket* w = getWrapped();
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
            
    // Class: QSslSocket
    // Function: errorString
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::errorString
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: readyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::readyReadEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readyRead(
                  
                );
              }
            
    // Class: QSslSocket
    // Function: channelReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::channelReadyReadEmitter(
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
            
    // Class: QSslSocket
    // Function: bytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::bytesWrittenEmitter(
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
            
    // Class: QSslSocket
    // Function: channelBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::channelBytesWrittenEmitter(
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
            
    // Class: QSslSocket
    // Function: aboutToClose
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::aboutToCloseEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit aboutToClose(
                  
                );
              }
            
    // Class: QSslSocket
    // Function: readChannelFinished
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::readChannelFinishedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readChannelFinished(
                  
                );
              }
            
    // Class: QSslSocket
    // Function: bind
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::bind
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
                QSslSocket* w = getWrapped();
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
                QSslSocket* w = getWrapped();
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
                QSslSocket* w = getWrapped();
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
                QSslSocket* w = getWrapped();
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
            
    // Class: QSslSocket
    // Function: isValid
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::isValid
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: localPort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::localPort
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: localAddress
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::localAddress
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: peerPort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::peerPort
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: peerAddress
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::peerAddress
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: peerName
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::peerName
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: readBufferSize
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::readBufferSize
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: abort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::abort
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
                
                w->abort(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for abort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: socketType
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::socketType
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: state
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::state
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: error
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::error
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: isSequential
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::isSequential
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: flush
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::flush
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
            
    // Class: QSslSocket
    // Function: setProxy
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::setProxy
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
                QSslSocket* w = getWrapped();
                
                w->setProxy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: proxy
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::proxy
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: protocolTag
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::protocolTag
              (
                
              ) 
              
                const
              
              {
                
      {
    

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
            
    // Class: QSslSocket
    // Function: setProtocolTag
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslSocket_Wrapper::setProtocolTag
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
                QSslSocket* w = getWrapped();
                
                w->setProtocolTag(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProtocolTag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslSocket
    // Function: hostFound
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::hostFoundEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit hostFound(
                  
                );
              }
            
    // Class: QSslSocket
    // Function: connected
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::connectedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit connected(
                  
                );
              }
            
    // Class: QSslSocket
    // Function: disconnected
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::disconnectedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit disconnected(
                  
                );
              }
            
    // Class: QSslSocket
    // Function: stateChanged
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::stateChangedEmitter(
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
            
    // Class: QSslSocket
    // Function: errorOccurred
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSslSocket_Wrapper::errorOccurredEmitter(
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
  
