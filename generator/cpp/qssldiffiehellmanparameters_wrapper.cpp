
  // Auto generated
  
  // include header:
  //#include "qssldiffiehellmanparameterswrapper.h"
  //#include "header_cpp.h"
  
    #include "qssldiffiehellmanparameters_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslDiffieHellmanParameters*> QSslDiffieHellmanParameters_Wrapper::basecasters_QSslDiffieHellmanParameters;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QSslDiffieHellmanParameters
    // Function: defaultParameters
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_WrapperSingleton::defaultParameters
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QSslDiffieHellmanParameters res = 
                
                // call static member function:
                QSslDiffieHellmanParameters::defaultParameters(
              
            );
          
            // return type: QSslDiffieHellmanParameters

            return RJSHelper::cpp2js_QSslDiffieHellmanParameters(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultParameters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslDiffieHellmanParameters
    // Function: fromEncoded
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_WrapperSingleton::fromEncoded
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

   && RJSHelper::is_QSsl_EncodingFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: encoded (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: format (QSsl::EncodingFormat)
  
QSsl::EncodingFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QSsl::Pem;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QSsl_EncodingFormat(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSslDiffieHellmanParameters res = 
                
                // call static member function:
                QSslDiffieHellmanParameters::fromEncoded(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QSslDiffieHellmanParameters

            return RJSHelper::cpp2js_QSslDiffieHellmanParameters(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QIODevice_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QSsl_EncodingFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODevice_ptr(handler, a1);
        
  // convert js parameter to cpp: format (QSsl::EncodingFormat)
  
QSsl::EncodingFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QSsl::Pem;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QSsl_EncodingFormat(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QSslDiffieHellmanParameters res = 
                
                // call static member function:
                QSslDiffieHellmanParameters::fromEncoded(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QSslDiffieHellmanParameters

            return RJSHelper::cpp2js_QSslDiffieHellmanParameters(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromEncoded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslDiffieHellmanParameters
    // Function: equals
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_WrapperSingleton::equals
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslDiffieHellmanParameters(handler, a1
  )

   && RJSHelper::is_QSslDiffieHellmanParameters(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lhs (QSslDiffieHellmanParameters)
  
QSslDiffieHellmanParameters a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslDiffieHellmanParameters(handler, a1);
        
  // convert js parameter to cpp: rhs (QSslDiffieHellmanParameters)
  
QSslDiffieHellmanParameters a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSslDiffieHellmanParameters(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call non-member function:
              operator==(
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

                  qWarning() << "no matching function variant found for equals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslDiffieHellmanParameters
    // Function: operator_not_assign
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_WrapperSingleton::operator_not_assign
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslDiffieHellmanParameters(handler, a1
  )

   && RJSHelper::is_QSslDiffieHellmanParameters(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lhs (QSslDiffieHellmanParameters)
  
QSslDiffieHellmanParameters a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslDiffieHellmanParameters(handler, a1);
        
  // convert js parameter to cpp: rhs (QSslDiffieHellmanParameters)
  
QSslDiffieHellmanParameters a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSslDiffieHellmanParameters(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call non-member function:
              operator!=(
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

                  qWarning() << "no matching function variant found for operator_not_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif

    void QSslDiffieHellmanParameters_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslDiffieHellmanParameters_Wrapper>("org.qcad", 1, 0, "QSslDiffieHellmanParameters_Wrapper");
        qmlRegisterInterface<QSslDiffieHellmanParameters_Wrapper>("QSslDiffieHellmanParameters_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslDiffieHellmanParameters* t = new RJSType_QSslDiffieHellmanParameters();
          global.setProperty("RJSType_QSslDiffieHellmanParameters", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslDiffieHellmanParameters::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslDiffieHellmanParameters_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslDiffieHellmanParameters_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslDiffieHellmanParameters_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslDiffieHellmanParameters_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QSslDiffieHellmanParameters_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QSslDiffieHellmanParameters_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QSslDiffieHellmanParameters_WrapperSingleton * s = new QSslDiffieHellmanParameters_WrapperSingleton(handler);
        engine->globalObject().setProperty("QSslDiffieHellmanParameters_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QSslDiffieHellmanParameters.js";
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
    QSslDiffieHellmanParameters_Wrapper::QSslDiffieHellmanParameters_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslDiffieHellmanParameters_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslDiffieHellmanParameters_Wrapper::QSslDiffieHellmanParameters_Wrapper(RJSApi& h, QSslDiffieHellmanParameters* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslDiffieHellmanParameters_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslDiffieHellmanParameters_Wrapper"));
              //setObjectName("QSslDiffieHellmanParameters_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslDiffieHellmanParameters_Wrapper::~QSslDiffieHellmanParameters_Wrapper() {
            //RDebug::decCounter(QString("QSslDiffieHellmanParameters_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslDiffieHellmanParameters_Wrapper"));

            //qDebug() << "QSslDiffieHellmanParameters_Wrapper::~QSslDiffieHellmanParameters_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslDiffieHellmanParameters";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslDiffieHellmanParameters_Wrapper::initConnections() {

          //setObjectName("QSslDiffieHellmanParameters_Wrapper");

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
  
    // Class: QSslDiffieHellmanParameters
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QSslDiffieHellmanParameters_Wrapper::QSslDiffieHellmanParameters_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSslDiffieHellmanParameters_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslDiffieHellmanParameters_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QSslDiffieHellmanParameters(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslDiffieHellmanParameters)
  
QSslDiffieHellmanParameters a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslDiffieHellmanParameters(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslDiffieHellmanParameters(
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
        RJSHelper::is_QSslDiffieHellmanParameters(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslDiffieHellmanParameters)
  
QSslDiffieHellmanParameters a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslDiffieHellmanParameters(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslDiffieHellmanParameters(
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

        
              wrapped = new QSslDiffieHellmanParameters(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QSslDiffieHellmanParameters";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
    // Class: QSslDiffieHellmanParameters
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_Wrapper::operator_assign
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
    
  // convert js parameter to cpp: other (QSslDiffieHellmanParameters)
  
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
                QSslDiffieHellmanParameters* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QSslDiffieHellmanParameters* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QSslDiffieHellmanParameters&

            return RJSHelper::cpp2js_QSslDiffieHellmanParameters(
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
            
    // Class: QSslDiffieHellmanParameters
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_Wrapper::swap
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
    
  // convert js parameter to cpp: other (QSslDiffieHellmanParameters)
  
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
                QSslDiffieHellmanParameters* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslDiffieHellmanParameters
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_Wrapper::isEmpty
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
                QSslDiffieHellmanParameters* w = getWrapped();
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
            
    // Class: QSslDiffieHellmanParameters
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_Wrapper::isValid
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
                QSslDiffieHellmanParameters* w = getWrapped();
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
            
    // Class: QSslDiffieHellmanParameters
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_Wrapper::error
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
                QSslDiffieHellmanParameters* w = getWrapped();
                QSslDiffieHellmanParameters::Error res = 
                    
                w->error(
                  
                );
              
            // return type: QSslDiffieHellmanParameters::Error

            return RJSHelper::cpp2js_QSslDiffieHellmanParameters_Error(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslDiffieHellmanParameters
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslDiffieHellmanParameters_Wrapper::errorString
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
                QSslDiffieHellmanParameters* w = getWrapped();
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
            
#ifndef QT_NO_DEBUG_STREAM

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qssldiffiehellmanparameters_wrapper.cpp"
  
