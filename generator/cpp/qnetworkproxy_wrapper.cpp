
  // Auto generated
  
  // include header:
  //#include "qnetworkproxywrapper.h"
  //#include "header_cpp.h"
  
    #include "qnetworkproxy_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QNetworkProxyQuery*> QNetworkProxyQuery_Wrapper::basecasters_QNetworkProxyQuery;
    
    // static functions implementation in singleton wrapper:
    
    void QNetworkProxyQuery_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QNetworkProxyQuery_Wrapper>("org.qcad", 1, 0, "QNetworkProxyQuery_Wrapper");
        qmlRegisterInterface<QNetworkProxyQuery_Wrapper>("QNetworkProxyQuery_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QNetworkProxyQuery* t = new RJSType_QNetworkProxyQuery();
          global.setProperty("RJSType_QNetworkProxyQuery", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QNetworkProxyQuery::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QNetworkProxyQuery_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QNetworkProxyQuery_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QNetworkProxyQuery_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QNetworkProxyQuery_BaseJs", mob);
      
      QString fileName = ":generator/js/QNetworkProxyQuery.js";
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
    QNetworkProxyQuery_Wrapper::QNetworkProxyQuery_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QNetworkProxyQuery_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QNetworkProxyQuery_Wrapper::QNetworkProxyQuery_Wrapper(RJSApi& h, QNetworkProxyQuery* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QNetworkProxyQuery_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QNetworkProxyQuery_Wrapper"));
              //setObjectName("QNetworkProxyQuery_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QNetworkProxyQuery_Wrapper::~QNetworkProxyQuery_Wrapper() {
            //RDebug::decCounter(QString("QNetworkProxyQuery_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QNetworkProxyQuery_Wrapper"));

            //qDebug() << "QNetworkProxyQuery_Wrapper::~QNetworkProxyQuery_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QNetworkProxyQuery";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QNetworkProxyQuery_Wrapper::initConnections() {

          //setObjectName("QNetworkProxyQuery_Wrapper");

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
  
    // Class: QNetworkProxyQuery
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QNetworkProxyQuery_Wrapper::QNetworkProxyQuery_Wrapper
                
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
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QNetworkProxyQuery_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QNetworkProxyQuery_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
    , true
  
  )

   && RJSHelper::is_QNetworkProxyQuery_QueryType(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hostname (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: port (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: protocolTag (QString)
  
QString a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QString();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
          }
        
  // convert js parameter to cpp: queryType (QNetworkProxyQuery::QueryType)
  
QNetworkProxyQuery::QueryType a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QNetworkProxyQuery::TcpSocket;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QNetworkProxyQuery_QueryType(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QNetworkProxyQuery(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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
        RJSHelper::is_quint16(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_QNetworkProxyQuery_QueryType(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bindPort (quint16)
  
quint16 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_quint16(handler, a1);
        
  // convert js parameter to cpp: protocolTag (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: queryType (QNetworkProxyQuery::QueryType)
  
QNetworkProxyQuery::QueryType a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QNetworkProxyQuery::TcpServer;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QNetworkProxyQuery_QueryType(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QNetworkProxyQuery(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
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
        RJSHelper::is_QUrl(handler, a1
  )

   && RJSHelper::is_QNetworkProxyQuery_QueryType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: requestUrl (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        
  // convert js parameter to cpp: queryType (QNetworkProxyQuery::QueryType)
  
QNetworkProxyQuery::QueryType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QNetworkProxyQuery::UrlRequest;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QNetworkProxyQuery_QueryType(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QNetworkProxyQuery(
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

      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QNetworkProxyQuery)
  
QNetworkProxyQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QNetworkProxyQuery(
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

        
              wrapped = new QNetworkProxyQuery(
                  
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
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QNetworkProxyQuery";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QNetworkProxyQuery
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QNetworkProxyQuery)
  
QNetworkProxyQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QNetworkProxyQuery* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QNetworkProxyQuery&

            return RJSHelper::cpp2js_QNetworkProxyQuery(
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
            
    // Class: QNetworkProxyQuery
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QNetworkProxyQuery)
  
QNetworkProxyQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::equals
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QNetworkProxyQuery)
  
QNetworkProxyQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
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
            
    // Class: QNetworkProxyQuery
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::operator_not_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QNetworkProxyQuery)
  
QNetworkProxyQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
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
            
    // Class: QNetworkProxyQuery
    // Function: queryType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::queryType
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                QNetworkProxyQuery::QueryType res = 
                    
                w->queryType(
                  
                );
              
            // return type: QNetworkProxyQuery::QueryType

            return RJSHelper::cpp2js_QNetworkProxyQuery_QueryType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: setQueryType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::setQueryType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery_QueryType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QNetworkProxyQuery::QueryType)
  
QNetworkProxyQuery::QueryType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery_QueryType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                
                w->setQueryType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQueryType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: peerPort
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::peerPort
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                int res = 
                    
                w->peerPort(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: setPeerPort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::setPeerPort
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
    
  // convert js parameter to cpp: port (int)
  
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
                QNetworkProxyQuery* w = getWrapped();
                
                w->setPeerPort(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPeerPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: peerHostName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::peerHostName
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                QString res = 
                    
                w->peerHostName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for peerHostName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: setPeerHostName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::setPeerHostName
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
    
  // convert js parameter to cpp: hostname (QString)
  
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
                QNetworkProxyQuery* w = getWrapped();
                
                w->setPeerHostName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPeerHostName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: localPort
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::localPort
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                int res = 
                    
                w->localPort(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for localPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: setLocalPort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::setLocalPort
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
    
  // convert js parameter to cpp: port (int)
  
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
                QNetworkProxyQuery* w = getWrapped();
                
                w->setLocalPort(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLocalPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: protocolTag
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::protocolTag
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
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
            
    // Class: QNetworkProxyQuery
    // Function: setProtocolTag
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::setProtocolTag
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
    
  // convert js parameter to cpp: protocolTag (QString)
  
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
                QNetworkProxyQuery* w = getWrapped();
                
                w->setProtocolTag(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProtocolTag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: url
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::url
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                QUrl res = 
                    
                w->url(
                  
                );
              
            // return type: QUrl

            return RJSHelper::cpp2js_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for url";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyQuery
    // Function: setUrl
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyQuery_Wrapper::setUrl
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: url (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxyQuery* w = getWrapped();
                
                w->setUrl(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUrl";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qnetworkproxy_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QNetworkProxy*> QNetworkProxy_Wrapper::basecasters_QNetworkProxy;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QNetworkProxy
    // Function: setApplicationProxy
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_WrapperSingleton::setApplicationProxy
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
    
  // convert js parameter to cpp: proxy (QNetworkProxy)
  
QNetworkProxy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxy(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QNetworkProxy::setApplicationProxy(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: applicationProxy
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_WrapperSingleton::applicationProxy
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QNetworkProxy res = 
                
                // call static member function:
                QNetworkProxy::applicationProxy(
              
            );
          
            // return type: QNetworkProxy

            return RJSHelper::cpp2js_QNetworkProxy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for applicationProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QNetworkProxy_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QNetworkProxy_Wrapper>("org.qcad", 1, 0, "QNetworkProxy_Wrapper");
        qmlRegisterInterface<QNetworkProxy_Wrapper>("QNetworkProxy_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QNetworkProxy* t = new RJSType_QNetworkProxy();
          global.setProperty("RJSType_QNetworkProxy", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QNetworkProxy::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QNetworkProxy_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QNetworkProxy_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QNetworkProxy_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QNetworkProxy_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QNetworkProxy_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QNetworkProxy_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QNetworkProxy_WrapperSingleton * s = new QNetworkProxy_WrapperSingleton(handler);
        engine->globalObject().setProperty("QNetworkProxy_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QNetworkProxy.js";
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
    QNetworkProxy_Wrapper::QNetworkProxy_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QNetworkProxy_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QNetworkProxy_Wrapper::QNetworkProxy_Wrapper(RJSApi& h, QNetworkProxy* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QNetworkProxy_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QNetworkProxy_Wrapper"));
              //setObjectName("QNetworkProxy_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QNetworkProxy_Wrapper::~QNetworkProxy_Wrapper() {
            //RDebug::decCounter(QString("QNetworkProxy_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QNetworkProxy_Wrapper"));

            //qDebug() << "QNetworkProxy_Wrapper::~QNetworkProxy_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QNetworkProxy";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QNetworkProxy_Wrapper::initConnections() {

          //setObjectName("QNetworkProxy_Wrapper");

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
  
    // Class: QNetworkProxy
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1
QNetworkProxy_Wrapper::QNetworkProxy_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QNetworkProxy_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QNetworkProxy_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxy_ProxyType(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

   && RJSHelper::is_quint16(handler, a3
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
    
  // convert js parameter to cpp: type (QNetworkProxy::ProxyType)
  
QNetworkProxy::ProxyType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxy_ProxyType(handler, a1);
        
  // convert js parameter to cpp: hostName (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        
  // convert js parameter to cpp: port (quint16)
  
quint16 a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = 0;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_quint16(handler, a3);
          }
        
  // convert js parameter to cpp: user (QString)
  
QString a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QString();
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QString(handler, a4);
          }
        
  // convert js parameter to cpp: password (QString)
  
QString a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = QString();
          }
          else {
            a5_cpp = RJSHelper::js2cpp_QString(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QNetworkProxy(
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
        RJSHelper::is_QNetworkProxy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QNetworkProxy)
  
QNetworkProxy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxy(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QNetworkProxy(
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

        
              wrapped = new QNetworkProxy(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QNetworkProxy";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QNetworkProxy
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::operator_assign
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
    
  // convert js parameter to cpp: other (QNetworkProxy)
  
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
                QNetworkProxy* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QNetworkProxy* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QNetworkProxy&

            return RJSHelper::cpp2js_QNetworkProxy(
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
            
    // Class: QNetworkProxy
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::swap
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
    
  // convert js parameter to cpp: other (QNetworkProxy)
  
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
                QNetworkProxy* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::equals
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QNetworkProxy)
  
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
                QNetworkProxy* w = getWrapped();
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
            
    // Class: QNetworkProxy
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::operator_not_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QNetworkProxy)
  
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
                QNetworkProxy* w = getWrapped();
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
            
    // Class: QNetworkProxy
    // Function: setType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::setType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxy_ProxyType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QNetworkProxy::ProxyType)
  
QNetworkProxy::ProxyType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxy_ProxyType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                
                w->setType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::type
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                QNetworkProxy::ProxyType res = 
                    
                w->type(
                  
                );
              
            // return type: QNetworkProxy::ProxyType

            return RJSHelper::cpp2js_QNetworkProxy_ProxyType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: setCapabilities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::setCapabilities
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxy_Capabilities(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: capab (QNetworkProxy::Capabilities)
  
QNetworkProxy::Capabilities a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxy_Capabilities(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                
                w->setCapabilities(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCapabilities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: capabilities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::capabilities
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                QNetworkProxy::Capabilities res = 
                    
                w->capabilities(
                  
                );
              
            // return type: QNetworkProxy::Capabilities

            return RJSHelper::cpp2js_QNetworkProxy_Capabilities(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capabilities";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: isCachingProxy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::isCachingProxy
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                bool res = 
                    
                w->isCachingProxy(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCachingProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: isTransparentProxy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::isTransparentProxy
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                bool res = 
                    
                w->isTransparentProxy(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTransparentProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: setUser
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::setUser
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
    
  // convert js parameter to cpp: userName (QString)
  
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
                QNetworkProxy* w = getWrapped();
                
                w->setUser(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUser";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: user
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::user
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                QString res = 
                    
                w->user(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for user";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: setPassword
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::setPassword
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
    
  // convert js parameter to cpp: password (QString)
  
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
                QNetworkProxy* w = getWrapped();
                
                w->setPassword(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPassword";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: password
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::password
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                QString res = 
                    
                w->password(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for password";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: setHostName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::setHostName
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
    
  // convert js parameter to cpp: hostName (QString)
  
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
                QNetworkProxy* w = getWrapped();
                
                w->setHostName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHostName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: hostName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::hostName
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                QString res = 
                    
                w->hostName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hostName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: setPort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::setPort
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_quint16(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: port (quint16)
  
quint16 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_quint16(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                
                w->setPort(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: port
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::port
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                quint16 res = 
                    
                w->port(
                  
                );
              
            // return type: quint16

            return RJSHelper::cpp2js_quint16(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for port";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: hasRawHeader
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::hasRawHeader
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: headerName (QByteArray)
  
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
                QNetworkProxy* w = getWrapped();
                bool res = 
                    
                w->hasRawHeader(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasRawHeader";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: rawHeaderList
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::rawHeaderList
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->rawHeaderList(
                  
                );
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rawHeaderList";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: rawHeader
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::rawHeader
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: headerName (QByteArray)
  
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
                QNetworkProxy* w = getWrapped();
                QByteArray res = 
                    
                w->rawHeader(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rawHeader";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxy
    // Function: setRawHeader
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxy_Wrapper::setRawHeader
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

   && RJSHelper::is_QByteArray(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: headerName (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: value (QByteArray)
  
QByteArray a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QByteArray(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QNetworkProxy* w = getWrapped();
                
                w->setRawHeader(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRawHeader";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qnetworkproxy_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QNetworkProxyFactory*> QNetworkProxyFactory_Wrapper::basecasters_QNetworkProxyFactory;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QNetworkProxyFactory
    // Function: usesSystemConfiguration
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyFactory_WrapperSingleton::usesSystemConfiguration
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QNetworkProxyFactory::usesSystemConfiguration(
              
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for usesSystemConfiguration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyFactory
    // Function: setUseSystemConfiguration
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyFactory_WrapperSingleton::setUseSystemConfiguration
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QNetworkProxyFactory::setUseSystemConfiguration(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUseSystemConfiguration";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyFactory
    // Function: setApplicationProxyFactory
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyFactory_WrapperSingleton::setApplicationProxyFactory
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyFactory_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: factory (QNetworkProxyFactory)
  

          // pointer:
          QNetworkProxyFactory*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxyFactory_ptr(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QNetworkProxyFactory::setApplicationProxyFactory(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setApplicationProxyFactory";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyFactory
    // Function: proxyForQuery
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyFactory_WrapperSingleton::proxyForQuery
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: query (QNetworkProxyQuery)
  
QNetworkProxyQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QNetworkProxy> res = 
                
                // call static member function:
                QNetworkProxyFactory::proxyForQuery(
              a1_cpp
    
            );
          
            // return type: QList<QNetworkProxy>

            return RJSHelper::cpp2js_QList_QNetworkProxy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for proxyForQuery";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QNetworkProxyFactory
    // Function: systemProxyForQuery
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyFactory_WrapperSingleton::systemProxyForQuery
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: query (QNetworkProxyQuery)
  
QNetworkProxyQuery a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QNetworkProxyQuery();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery(handler, a1);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QNetworkProxy> res = 
                
                // call static member function:
                QNetworkProxyFactory::systemProxyForQuery(
              a1_cpp
    
            );
          
            // return type: QList<QNetworkProxy>

            return RJSHelper::cpp2js_QList_QNetworkProxy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for systemProxyForQuery";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QNetworkProxyFactory_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QNetworkProxyFactory_Wrapper>("org.qcad", 1, 0, "QNetworkProxyFactory_Wrapper");
        qmlRegisterInterface<QNetworkProxyFactory_Wrapper>("QNetworkProxyFactory_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QNetworkProxyFactory* t = new RJSType_QNetworkProxyFactory();
          global.setProperty("RJSType_QNetworkProxyFactory", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QNetworkProxyFactory::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QNetworkProxyFactory_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QNetworkProxyFactory_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QNetworkProxyFactory_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QNetworkProxyFactory_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QNetworkProxyFactory_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QNetworkProxyFactory_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QNetworkProxyFactory_WrapperSingleton * s = new QNetworkProxyFactory_WrapperSingleton(handler);
        engine->globalObject().setProperty("QNetworkProxyFactory_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QNetworkProxyFactory.js";
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
    QNetworkProxyFactory_Wrapper::QNetworkProxyFactory_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QNetworkProxyFactory_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QNetworkProxyFactory_Wrapper::QNetworkProxyFactory_Wrapper(RJSApi& h, QNetworkProxyFactory* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QNetworkProxyFactory_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QNetworkProxyFactory_Wrapper"));
              //setObjectName("QNetworkProxyFactory_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QNetworkProxyFactory_Wrapper::~QNetworkProxyFactory_Wrapper() {
            //RDebug::decCounter(QString("QNetworkProxyFactory_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QNetworkProxyFactory_Wrapper"));

            //qDebug() << "QNetworkProxyFactory_Wrapper::~QNetworkProxyFactory_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QNetworkProxyFactory";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QNetworkProxyFactory_Wrapper::initConnections() {

          //setObjectName("QNetworkProxyFactory_Wrapper");

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
    
    // Class: QNetworkProxyFactory
    // Function: queryProxy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QNetworkProxyFactory_Wrapper::queryProxy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QNetworkProxyQuery(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: query (QNetworkProxyQuery)
  
QNetworkProxyQuery a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QNetworkProxyQuery();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QNetworkProxyQuery(handler, a1);
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
                QNetworkProxyFactory* w = getWrapped();
                QList<QNetworkProxy> res = 
                    
                w->queryProxy(
                  a1_cpp
    
                );
              
            // return type: QList<QNetworkProxy>

            return RJSHelper::cpp2js_QList_QNetworkProxy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryProxy";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qnetworkproxy_wrapper.cpp"
  
