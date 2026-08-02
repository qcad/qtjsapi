
  // Auto generated
  
  // include header:
  //#include "qsslcertificatewrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslcertificate_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslCertificate*> QSslCertificate_Wrapper::basecasters_QSslCertificate;
    
    // static functions implementation in singleton wrapper:
    
#ifndef QT_NO_SSL

#endif

    // Class: QSslCertificate
    // Function: fromPath
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_WrapperSingleton::fromPath
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
    
            // static member function:
            // call base class static function:
            QList<QSslCertificate> res = 
                
                // call static member function:
                QSslCertificate::fromPath(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<QSslCertificate>

            return RJSHelper::cpp2js_QList_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: fromDevice
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_WrapperSingleton::fromDevice
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
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
            QList<QSslCertificate> res = 
                
                // call static member function:
                QSslCertificate::fromDevice(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<QSslCertificate>

            return RJSHelper::cpp2js_QList_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromDevice";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: fromData
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_WrapperSingleton::fromData
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
    
  // convert js parameter to cpp: data (QByteArray)
  
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
            QList<QSslCertificate> res = 
                
                // call static member function:
                QSslCertificate::fromData(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<QSslCertificate>

            return RJSHelper::cpp2js_QList_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: fromFile
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_WrapperSingleton::fromFile
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
    
  // convert js parameter to cpp: filePath (QString)
  
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
    
            // static member function:
            // call base class static function:
            QList<QSslCertificate> res = 
                
                // call static member function:
                QSslCertificate::fromFile(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<QSslCertificate>

            return RJSHelper::cpp2js_QList_QSslCertificate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_SSL

    // Class: QSslCertificate
    // Function: verify
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_WrapperSingleton::verify
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QSslCertificate(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: certificateChain (QList<QSslCertificate>)
  
QList<QSslCertificate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QSslCertificate(handler, a1);
        
  // convert js parameter to cpp: hostName (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QSslError> res = 
                
                // call static member function:
                QSslCertificate::verify(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QList<QSslError>

            return RJSHelper::cpp2js_QList_QSslError(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for verify";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    void QSslCertificate_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslCertificate_Wrapper>("org.qcad", 1, 0, "QSslCertificate_Wrapper");
        qmlRegisterInterface<QSslCertificate_Wrapper>("QSslCertificate_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslCertificate* t = new RJSType_QSslCertificate();
          global.setProperty("RJSType_QSslCertificate", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslCertificate::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslCertificate_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslCertificate_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslCertificate_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslCertificate_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QSslCertificate_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QSslCertificate_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QSslCertificate_WrapperSingleton * s = new QSslCertificate_WrapperSingleton(handler);
        engine->globalObject().setProperty("QSslCertificate_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QSslCertificate.js";
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
    QSslCertificate_Wrapper::QSslCertificate_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslCertificate_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslCertificate_Wrapper::QSslCertificate_Wrapper(RJSApi& h, QSslCertificate* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslCertificate_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslCertificate_Wrapper"));
              //setObjectName("QSslCertificate_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslCertificate_Wrapper::~QSslCertificate_Wrapper() {
            //RDebug::decCounter(QString("QSslCertificate_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslCertificate_Wrapper"));

            //qDebug() << "QSslCertificate_Wrapper::~QSslCertificate_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslCertificate";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslCertificate_Wrapper::initConnections() {

          //setObjectName("QSslCertificate_Wrapper");

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
  
    // Class: QSslCertificate
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QSslCertificate_Wrapper::QSslCertificate_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSslCertificate_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslCertificate_Wrapper"));
                
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
    
        // construct wrapper:

        
              wrapped = new QSslCertificate(
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
        RJSHelper::is_QByteArray(handler, a1
    , true
  
  )

   && RJSHelper::is_QSsl_EncodingFormat(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QByteArray)
  
QByteArray a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QByteArray();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
          }
        
  // convert js parameter to cpp: format (QSsl::EncodingFormat)
  
QSsl::EncodingFormat a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QSsl::Pem;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QSsl_EncodingFormat(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslCertificate(
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
        RJSHelper::is_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslCertificate)
  
QSslCertificate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificate(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslCertificate(
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
        RJSHelper::is_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslCertificate)
  
QSslCertificate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificate(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslCertificate(
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
   && a2.isUndefined()
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QSslCertificate";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_SSL

#endif

#ifndef QT_NO_SSL

#endif


    // non-static functions:
    
    // Class: QSslCertificate
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::operator_assign
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
    
  // convert js parameter to cpp: other (QSslCertificate)
  
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
                QSslCertificate* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QSslCertificate* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QSslCertificate&

            return RJSHelper::cpp2js_QSslCertificate(
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
            
    // Class: QSslCertificate
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::swap
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
    
  // convert js parameter to cpp: other (QSslCertificate)
  
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
                QSslCertificate* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::equals
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslCertificate)
  
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
                QSslCertificate* w = getWrapped();
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
            
    // Class: QSslCertificate
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::operator_not_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslCertificate)
  
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
                QSslCertificate* w = getWrapped();
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
            
    // Class: QSslCertificate
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::isNull
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
                QSslCertificate* w = getWrapped();
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
            
    // Class: QSslCertificate
    // Function: isBlacklisted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::isBlacklisted
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
                QSslCertificate* w = getWrapped();
                bool res = 
                    
                w->isBlacklisted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBlacklisted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: isSelfSigned
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::isSelfSigned
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
                QSslCertificate* w = getWrapped();
                bool res = 
                    
                w->isSelfSigned(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSelfSigned";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::clear
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
                QSslCertificate* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: version
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::version
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
                QSslCertificate* w = getWrapped();
                QByteArray res = 
                    
                w->version(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for version";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: serialNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::serialNumber
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
                QSslCertificate* w = getWrapped();
                QByteArray res = 
                    
                w->serialNumber(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for serialNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: digest
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::digest
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCryptographicHash_Algorithm(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: algorithm (QCryptographicHash::Algorithm)
  
QCryptographicHash::Algorithm a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QCryptographicHash::Md5;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QCryptographicHash_Algorithm(handler, a1);
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
                QSslCertificate* w = getWrapped();
                QByteArray res = 
                    
                w->digest(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for digest";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: issuerInfo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::issuerInfo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificate_SubjectInfo(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: info (QSslCertificate::SubjectInfo)
  
QSslCertificate::SubjectInfo a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificate_SubjectInfo(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslCertificate* w = getWrapped();
                QStringList res = 
                    
                w->issuerInfo(
                  a1_cpp
    
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
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
    
  // convert js parameter to cpp: attribute (QByteArray)
  
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
                QSslCertificate* w = getWrapped();
                QStringList res = 
                    
                w->issuerInfo(
                  a1_cpp
    
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for issuerInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: subjectInfo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::subjectInfo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslCertificate_SubjectInfo(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: info (QSslCertificate::SubjectInfo)
  
QSslCertificate::SubjectInfo a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslCertificate_SubjectInfo(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslCertificate* w = getWrapped();
                QStringList res = 
                    
                w->subjectInfo(
                  a1_cpp
    
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
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
    
  // convert js parameter to cpp: attribute (QByteArray)
  
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
                QSslCertificate* w = getWrapped();
                QStringList res = 
                    
                w->subjectInfo(
                  a1_cpp
    
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: issuerDisplayName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::issuerDisplayName
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
                QSslCertificate* w = getWrapped();
                QString res = 
                    
                w->issuerDisplayName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for issuerDisplayName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: subjectDisplayName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::subjectDisplayName
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
                QSslCertificate* w = getWrapped();
                QString res = 
                    
                w->subjectDisplayName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subjectDisplayName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: subjectInfoAttributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::subjectInfoAttributes
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
                QSslCertificate* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->subjectInfoAttributes(
                  
                );
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subjectInfoAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: issuerInfoAttributes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::issuerInfoAttributes
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
                QSslCertificate* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->issuerInfoAttributes(
                  
                );
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for issuerInfoAttributes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: effectiveDate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::effectiveDate
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
                QSslCertificate* w = getWrapped();
                QDateTime res = 
                    
                w->effectiveDate(
                  
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for effectiveDate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: expiryDate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::expiryDate
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
                QSslCertificate* w = getWrapped();
                QDateTime res = 
                    
                w->expiryDate(
                  
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for expiryDate";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_SSL

    // Class: QSslCertificate
    // Function: publicKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::publicKey
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
                QSslCertificate* w = getWrapped();
                QSslKey res = 
                    
                w->publicKey(
                  
                );
              
            // return type: QSslKey

            return RJSHelper::cpp2js_QSslKey(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for publicKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QSslCertificate
    // Function: extensions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::extensions
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
                QSslCertificate* w = getWrapped();
                QList<QSslCertificateExtension> res = 
                    
                w->extensions(
                  
                );
              
            // return type: QList<QSslCertificateExtension>

            return RJSHelper::cpp2js_QList_QSslCertificateExtension(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for extensions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslCertificate
    // Function: toPem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::toPem
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
                QSslCertificate* w = getWrapped();
                QByteArray res = 
                    
                w->toPem(
                  
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
            
    // Class: QSslCertificate
    // Function: toDer
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::toDer
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
                QSslCertificate* w = getWrapped();
                QByteArray res = 
                    
                w->toDer(
                  
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
            
    // Class: QSslCertificate
    // Function: toText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslCertificate_Wrapper::toText
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
                QSslCertificate* w = getWrapped();
                QString res = 
                    
                w->toText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toText";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_SSL

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslcertificate_wrapper.cpp"
  
