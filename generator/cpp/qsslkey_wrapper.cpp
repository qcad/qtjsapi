
  // Auto generated
  
  // include header:
  //#include "qsslkeywrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslkey_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslKey*> QSslKey_Wrapper::basecasters_QSslKey;
    
    // static functions implementation in singleton wrapper:
    
    void QSslKey_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslKey_Wrapper>("org.qcad", 1, 0, "QSslKey_Wrapper");
        qmlRegisterInterface<QSslKey_Wrapper>("QSslKey_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslKey* t = new RJSType_QSslKey();
          global.setProperty("RJSType_QSslKey", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslKey::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslKey_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslKey_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslKey_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslKey_BaseJs", mob);
      
      QString fileName = ":generator/js/QSslKey.js";
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
    QSslKey_Wrapper::QSslKey_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslKey_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslKey_Wrapper::QSslKey_Wrapper(RJSApi& h, QSslKey* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslKey_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslKey_Wrapper"));
              //setObjectName("QSslKey_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslKey_Wrapper::~QSslKey_Wrapper() {
            //RDebug::decCounter(QString("QSslKey_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslKey_Wrapper"));

            //qDebug() << "QSslKey_Wrapper::~QSslKey_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslKey";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslKey_Wrapper::initConnections() {

          //setObjectName("QSslKey_Wrapper");

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
  
    // Class: QSslKey
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1
QSslKey_Wrapper::QSslKey_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QSslKey_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslKey_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

   && RJSHelper::is_QSsl_KeyAlgorithm(handler, a2
  )

   && RJSHelper::is_QSsl_EncodingFormat(handler, a3
    , true
  
  )

   && RJSHelper::is_QSsl_KeyType(handler, a4
    , true
  
  )

   && RJSHelper::is_QByteArray(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: encoded (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: algorithm (QSsl::KeyAlgorithm)
  
QSsl::KeyAlgorithm a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSsl_KeyAlgorithm(handler, a2);
        
  // convert js parameter to cpp: format (QSsl::EncodingFormat)
  
QSsl::EncodingFormat a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QSsl::Pem;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QSsl_EncodingFormat(handler, a3);
          }
        
  // convert js parameter to cpp: type (QSsl::KeyType)
  
QSsl::KeyType a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QSsl::PrivateKey;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QSsl_KeyType(handler, a4);
          }
        
  // convert js parameter to cpp: passPhrase (QByteArray)
  
QByteArray a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = QByteArray();
          }
          else {
            a5_cpp = RJSHelper::js2cpp_QByteArray(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslKey(
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
        RJSHelper::is_QIODevice_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QSsl_KeyAlgorithm(handler, a2
  )

   && RJSHelper::is_QSsl_EncodingFormat(handler, a3
    , true
  
  )

   && RJSHelper::is_QSsl_KeyType(handler, a4
    , true
  
  )

   && RJSHelper::is_QByteArray(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODevice_ptr(handler, a1);
        
  // convert js parameter to cpp: algorithm (QSsl::KeyAlgorithm)
  
QSsl::KeyAlgorithm a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSsl_KeyAlgorithm(handler, a2);
        
  // convert js parameter to cpp: format (QSsl::EncodingFormat)
  
QSsl::EncodingFormat a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QSsl::Pem;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QSsl_EncodingFormat(handler, a3);
          }
        
  // convert js parameter to cpp: type (QSsl::KeyType)
  
QSsl::KeyType a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QSsl::PrivateKey;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QSsl_KeyType(handler, a4);
          }
        
  // convert js parameter to cpp: passPhrase (QByteArray)
  
QByteArray a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = QByteArray();
          }
          else {
            a5_cpp = RJSHelper::js2cpp_QByteArray(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslKey(
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
        RJSHelper::is_QSslKey(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslKey)
  
QSslKey a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslKey(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslKey(
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
        RJSHelper::is_QSslKey(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslKey)
  
QSslKey a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslKey(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslKey(
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

        
              wrapped = new QSslKey(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QSslKey";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSslKey
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::operator_assign
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
    
  // convert js parameter to cpp: other (QSslKey)
  
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
                QSslKey* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QSslKey* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QSslKey&

            return RJSHelper::cpp2js_QSslKey(
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
            
    // Class: QSslKey
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::swap
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
    
  // convert js parameter to cpp: other (QSslKey)
  
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
                QSslKey* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKey
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::isNull
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslKey* w = getWrapped();
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
            
    // Class: QSslKey
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::clear
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
                QSslKey* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKey
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::length
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslKey* w = getWrapped();
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
            
    // Class: QSslKey
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::type
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslKey* w = getWrapped();
                QSsl::KeyType res = 
                    
                w->type(
                  
                );
              
            // return type: QSsl::KeyType

            return RJSHelper::cpp2js_QSsl_KeyType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKey
    // Function: algorithm
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::algorithm
              (
                
              ) 
              
                const
              
              {
                
      {
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslKey* w = getWrapped();
                QSsl::KeyAlgorithm res = 
                    
                w->algorithm(
                  
                );
              
            // return type: QSsl::KeyAlgorithm

            return RJSHelper::cpp2js_QSsl_KeyAlgorithm(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for algorithm";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKey
    // Function: toPem
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::toPem
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: passPhrase (QByteArray)
  
QByteArray a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QByteArray();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
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
                QSslKey* w = getWrapped();
                QByteArray res = 
                    
                w->toPem(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toPem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKey
    // Function: toDer
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::toDer
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: passPhrase (QByteArray)
  
QByteArray a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QByteArray();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
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
                QSslKey* w = getWrapped();
                QByteArray res = 
                    
                w->toDer(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toDer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKey
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::equals
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                QSslKey* w = getWrapped();
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
            
    // Class: QSslKey
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslKey_Wrapper::operator_not_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
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
                QSslKey* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslkey_wrapper.cpp"
  
