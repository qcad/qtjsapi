
  // Auto generated
  
  // include header:
  //#include "qurlquerywrapper.h"
  //#include "header_cpp.h"
  
    #include "qurlquery_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QUrlQuery_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QUrlQuery_Wrapper>("org.qcad", 1, 0, "QUrlQuery_Wrapper");
        qmlRegisterInterface<QUrlQuery_Wrapper>("QUrlQuery_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QUrlQuery_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QUrlQuery_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QUrlQuery_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QUrlQuery_BaseJs", mob);
      
      QString fileName = ":generated/js/QUrlQuery.js";
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
    QUrlQuery_Wrapper::QUrlQuery_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QUrlQuery_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QUrlQuery_Wrapper::QUrlQuery_Wrapper(RJSApi& h, QUrlQuery* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QUrlQuery_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QUrlQuery_Wrapper"));
              //setObjectName("QUrlQuery_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QUrlQuery_Wrapper::~QUrlQuery_Wrapper() {
            //RDebug::decCounter(QString("QUrlQuery_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QUrlQuery_Wrapper"));

            //qDebug() << "QUrlQuery_Wrapper::~QUrlQuery_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QUrlQuery";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QUrlQuery_Wrapper::initConnections() {

          //setObjectName("QUrlQuery_Wrapper");

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
  
    // Class: QUrlQuery
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QUrlQuery_Wrapper::QUrlQuery_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QUrlQuery_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QUrlQuery_Wrapper"));
                
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
    
        // construct wrapper:

        
            wrapped = new QUrlQuery(
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
    
  // convert js parameter to cpp: queryString (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QUrlQuery(
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
        RJSHelper::is_QUrlQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QUrlQuery)
  
QUrlQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrlQuery(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QUrlQuery(
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

        
            wrapped = new QUrlQuery(
                
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
                  

                  qWarning() << "no matching constructor variant found for QUrlQuery";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QUrlQuery
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrlQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QUrlQuery)
  
QUrlQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrlQuery(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QUrlQuery* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QUrlQuery&

            return RJSHelper::cpp2js_QUrlQuery(
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
            
    // Class: QUrlQuery
    // Function: operator_equal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::operator_equal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrlQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QUrlQuery)
  
QUrlQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrlQuery(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
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

                  qWarning() << "no matching function variant found for operator_equal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: operator_unequal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::operator_unequal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrlQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QUrlQuery)
  
QUrlQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrlQuery(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
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

                  qWarning() << "no matching function variant found for operator_unequal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrlQuery(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QUrlQuery)
  
QUrlQuery a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrlQuery(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::isEmpty
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::isDetached
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
                bool res = 
                    
                w->isDetached(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDetached";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::clear
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
                QUrlQuery* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: query
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::query
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: encoding (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::PrettyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrlQuery* w = getWrapped();
                QString res = 
                    
                w->query(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for query";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: setQuery
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::setQuery
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
    
  // convert js parameter to cpp: queryString (QString)
  
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
                QUrlQuery* w = getWrapped();
                
                w->setQuery(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuery";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::toString
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: encoding (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::PrettyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrlQuery* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
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
            
    // Class: QUrlQuery
    // Function: setQueryDelimiters
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::setQueryDelimiters
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QChar(handler, a1
  )

   && RJSHelper::is_QChar(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: valueDelimiter (QChar)
  
QChar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QChar(handler, a1);
        
  // convert js parameter to cpp: pairDelimiter (QChar)
  
QChar a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QChar(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
                
                w->setQueryDelimiters(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQueryDelimiters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: queryValueDelimiter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::queryValueDelimiter
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
                QChar res = 
                    
                w->queryValueDelimiter(
                  
                );
              
            // return type: QChar

            return RJSHelper::cpp2js_QChar(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryValueDelimiter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: queryPairDelimiter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::queryPairDelimiter
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
                QChar res = 
                    
                w->queryPairDelimiter(
                  
                );
              
            // return type: QChar

            return RJSHelper::cpp2js_QChar(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryPairDelimiter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: setQueryItems
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::setQueryItems
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QPair_QString_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: query (QList<QPair<QString,QString>>)
  
QList<QPair<QString,QString>> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QPair_QString_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUrlQuery* w = getWrapped();
                
                w->setQueryItems(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQueryItems";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: queryItems
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::queryItems
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: encoding (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QUrl::PrettyDecoded;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a1);
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
                QUrlQuery* w = getWrapped();
                QList<QPair<QString,QString>> res = 
                    
                w->queryItems(
                  a1_cpp
    
                );
              
            // return type: QList<QPair<QString,QString>>

            return RJSHelper::cpp2js_QList_QPair_QString_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for queryItems";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: hasQueryItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::hasQueryItem
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
    
  // convert js parameter to cpp: key (QString)
  
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
                QUrlQuery* w = getWrapped();
                bool res = 
                    
                w->hasQueryItem(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasQueryItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: addQueryItem
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::addQueryItem
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
    
  // convert js parameter to cpp: key (QString)
  
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
                QUrlQuery* w = getWrapped();
                
                w->addQueryItem(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addQueryItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: removeQueryItem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::removeQueryItem
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
    
  // convert js parameter to cpp: key (QString)
  
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
                QUrlQuery* w = getWrapped();
                
                w->removeQueryItem(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeQueryItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: queryItemValue
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::queryItemValue
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

   && RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: encoding (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::PrettyDecoded;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a2);
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
                QUrlQuery* w = getWrapped();
                QString res = 
                    
                w->queryItemValue(
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

                  qWarning() << "no matching function variant found for queryItemValue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: allQueryItemValues
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::allQueryItemValues
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

   && RJSHelper::is_QUrl_ComponentFormattingOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: encoding (QUrl::ComponentFormattingOptions)
  
QUrl::ComponentFormattingOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QUrl::PrettyDecoded;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QUrl_ComponentFormattingOptions(handler, a2);
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
                QUrlQuery* w = getWrapped();
                QStringList res = 
                    
                w->allQueryItemValues(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for allQueryItemValues";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUrlQuery
    // Function: removeAllQueryItems
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUrlQuery_Wrapper::removeAllQueryItems
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
    
  // convert js parameter to cpp: key (QString)
  
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
                QUrlQuery* w = getWrapped();
                
                w->removeAllQueryItems(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeAllQueryItems";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  