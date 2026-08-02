
  // Auto generated
  
  // include header:
  //#include "qsslpresharedkeyauthenticatorwrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslpresharedkeyauthenticator_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslPreSharedKeyAuthenticator*> QSslPreSharedKeyAuthenticator_Wrapper::basecasters_QSslPreSharedKeyAuthenticator;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QSslPreSharedKeyAuthenticator
    // Function: equals
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_WrapperSingleton::equals
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslPreSharedKeyAuthenticator(handler, a1
  )

   && RJSHelper::is_QSslPreSharedKeyAuthenticator(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lhs (QSslPreSharedKeyAuthenticator)
  
QSslPreSharedKeyAuthenticator a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslPreSharedKeyAuthenticator(handler, a1);
        
  // convert js parameter to cpp: rhs (QSslPreSharedKeyAuthenticator)
  
QSslPreSharedKeyAuthenticator a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSslPreSharedKeyAuthenticator(handler, a2);
        

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
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: operator_not_assign
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_WrapperSingleton::operator_not_assign
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslPreSharedKeyAuthenticator(handler, a1
  )

   && RJSHelper::is_QSslPreSharedKeyAuthenticator(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lhs (QSslPreSharedKeyAuthenticator)
  
QSslPreSharedKeyAuthenticator a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslPreSharedKeyAuthenticator(handler, a1);
        
  // convert js parameter to cpp: rhs (QSslPreSharedKeyAuthenticator)
  
QSslPreSharedKeyAuthenticator a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QSslPreSharedKeyAuthenticator(handler, a2);
        

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
            
    void QSslPreSharedKeyAuthenticator_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslPreSharedKeyAuthenticator_Wrapper>("org.qcad", 1, 0, "QSslPreSharedKeyAuthenticator_Wrapper");
        qmlRegisterInterface<QSslPreSharedKeyAuthenticator_Wrapper>("QSslPreSharedKeyAuthenticator_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslPreSharedKeyAuthenticator* t = new RJSType_QSslPreSharedKeyAuthenticator();
          global.setProperty("RJSType_QSslPreSharedKeyAuthenticator", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslPreSharedKeyAuthenticator::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslPreSharedKeyAuthenticator_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslPreSharedKeyAuthenticator_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslPreSharedKeyAuthenticator_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslPreSharedKeyAuthenticator_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QSslPreSharedKeyAuthenticator_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QSslPreSharedKeyAuthenticator_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QSslPreSharedKeyAuthenticator_WrapperSingleton * s = new QSslPreSharedKeyAuthenticator_WrapperSingleton(handler);
        engine->globalObject().setProperty("QSslPreSharedKeyAuthenticator_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QSslPreSharedKeyAuthenticator.js";
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
    QSslPreSharedKeyAuthenticator_Wrapper::QSslPreSharedKeyAuthenticator_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslPreSharedKeyAuthenticator_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslPreSharedKeyAuthenticator_Wrapper::QSslPreSharedKeyAuthenticator_Wrapper(RJSApi& h, QSslPreSharedKeyAuthenticator* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslPreSharedKeyAuthenticator_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslPreSharedKeyAuthenticator_Wrapper"));
              //setObjectName("QSslPreSharedKeyAuthenticator_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslPreSharedKeyAuthenticator_Wrapper::~QSslPreSharedKeyAuthenticator_Wrapper() {
            //RDebug::decCounter(QString("QSslPreSharedKeyAuthenticator_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslPreSharedKeyAuthenticator_Wrapper"));

            //qDebug() << "QSslPreSharedKeyAuthenticator_Wrapper::~QSslPreSharedKeyAuthenticator_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslPreSharedKeyAuthenticator";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslPreSharedKeyAuthenticator_Wrapper::initConnections() {

          //setObjectName("QSslPreSharedKeyAuthenticator_Wrapper");

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
  
    // Class: QSslPreSharedKeyAuthenticator
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QSslPreSharedKeyAuthenticator_Wrapper::QSslPreSharedKeyAuthenticator_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSslPreSharedKeyAuthenticator_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslPreSharedKeyAuthenticator_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QSslPreSharedKeyAuthenticator(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: authenticator (QSslPreSharedKeyAuthenticator)
  
QSslPreSharedKeyAuthenticator a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslPreSharedKeyAuthenticator(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslPreSharedKeyAuthenticator(
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

        
              wrapped = new QSslPreSharedKeyAuthenticator(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QSslPreSharedKeyAuthenticator";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSslPreSharedKeyAuthenticator
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslPreSharedKeyAuthenticator(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslPreSharedKeyAuthenticator)
  
QSslPreSharedKeyAuthenticator a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslPreSharedKeyAuthenticator(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QSslPreSharedKeyAuthenticator* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QSslPreSharedKeyAuthenticator&

            return RJSHelper::cpp2js_QSslPreSharedKeyAuthenticator(
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
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslPreSharedKeyAuthenticator(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslPreSharedKeyAuthenticator)
  
QSslPreSharedKeyAuthenticator a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslPreSharedKeyAuthenticator(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: identityHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::identityHint
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
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                QByteArray res = 
                    
                w->identityHint(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for identityHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: setIdentity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::setIdentity
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
    
  // convert js parameter to cpp: identity (QByteArray)
  
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
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                
                w->setIdentity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIdentity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: identity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::identity
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
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                QByteArray res = 
                    
                w->identity(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for identity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: maximumIdentityLength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::maximumIdentityLength
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
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                int res = 
                    
                w->maximumIdentityLength(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumIdentityLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: setPreSharedKey
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::setPreSharedKey
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
    
  // convert js parameter to cpp: preSharedKey (QByteArray)
  
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
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                
                w->setPreSharedKey(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPreSharedKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: preSharedKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::preSharedKey
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
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                QByteArray res = 
                    
                w->preSharedKey(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for preSharedKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: maximumPreSharedKeyLength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslPreSharedKeyAuthenticator_Wrapper::maximumPreSharedKeyLength
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
                QSslPreSharedKeyAuthenticator* w = getWrapped();
                int res = 
                    
                w->maximumPreSharedKeyLength(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumPreSharedKeyLength";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslpresharedkeyauthenticator_wrapper.cpp"
  
