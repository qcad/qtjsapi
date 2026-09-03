
  // Auto generated
  
  // include header:
  //#include "qjsondocumentwrapper.h"
  //#include "header_cpp.h"
  
    #include "qjsondocument_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QJsonDocument*> QJsonDocument_Wrapper::basecasters_QJsonDocument;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QJsonDocument
    // Function: fromVariant
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QJsonDocument_WrapperSingleton::fromVariant
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QVariant(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: variant (QVariant)
  
QVariant a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QVariant(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QJsonDocument res = 
                
                // call static member function:
                QJsonDocument::fromVariant(
              a1_cpp
    
            );
          
            // return type: QJsonDocument

            return RJSHelper::cpp2js_QJsonDocument(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromVariant";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QJsonDocument
    // Function: fromJson
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QJsonDocument_WrapperSingleton::fromJson
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
    
  // convert js parameter to cpp: json (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QJsonDocument res = 
                
                // call static member function:
                QJsonDocument::fromJson(
              a1_cpp
    
            );
          
            // return type: QJsonDocument

            return RJSHelper::cpp2js_QJsonDocument(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromJson";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QJsonDocument_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QJsonDocument_Wrapper>("org.qcad", 1, 0, "QJsonDocument_Wrapper");
        qmlRegisterInterface<QJsonDocument_Wrapper>("QJsonDocument_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QJsonDocument* t = new RJSType_QJsonDocument();
          global.setProperty("RJSType_QJsonDocument", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QJsonDocument::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QJsonDocument_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QJsonDocument_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QJsonDocument_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QJsonDocument_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QJsonDocument_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QJsonDocument_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QJsonDocument_WrapperSingleton * s = new QJsonDocument_WrapperSingleton(handler);
        engine->globalObject().setProperty("QJsonDocument_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QJsonDocument.js";
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
    QJsonDocument_Wrapper::QJsonDocument_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QJsonDocument_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QJsonDocument_Wrapper::QJsonDocument_Wrapper(RJSApi& h, QJsonDocument* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QJsonDocument_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QJsonDocument_Wrapper"));
              //setObjectName("QJsonDocument_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QJsonDocument_Wrapper::~QJsonDocument_Wrapper() {
            //RDebug::decCounter(QString("QJsonDocument_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QJsonDocument_Wrapper"));

            //qDebug() << "QJsonDocument_Wrapper::~QJsonDocument_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QJsonDocument";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QJsonDocument_Wrapper::initConnections() {

          //setObjectName("QJsonDocument_Wrapper");

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
  
    // Class: QJsonDocument
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QJsonDocument_Wrapper::QJsonDocument_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QJsonDocument_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QJsonDocument_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QJsonDocument(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QJsonDocument)
  
QJsonDocument a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QJsonDocument(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QJsonDocument(
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

        
              wrapped = new QJsonDocument(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QJsonDocument";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QJsonDocument
    // Function: toVariant
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QJsonDocument_Wrapper::toVariant
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
                QJsonDocument* w = getWrapped();
                QVariant res = 
                    
                w->toVariant(
                  
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toVariant";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QJsonDocument
    // Function: toJson
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QJsonDocument_Wrapper::toJson
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QJsonDocument_JsonFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QJsonDocument::JsonFormat)
  
QJsonDocument::JsonFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QJsonDocument_JsonFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QJsonDocument* w = getWrapped();
                QByteArray res = 
                    
                w->toJson(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

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
                QJsonDocument* w = getWrapped();
                QByteArray res = 
                    
                w->toJson(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toJson";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QJsonDocument
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QJsonDocument_Wrapper::isEmpty
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
                QJsonDocument* w = getWrapped();
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
            
    // Class: QJsonDocument
    // Function: isArray
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QJsonDocument_Wrapper::isArray
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
                QJsonDocument* w = getWrapped();
                bool res = 
                    
                w->isArray(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isArray";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QJsonDocument
    // Function: isObject
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QJsonDocument_Wrapper::isObject
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
                QJsonDocument* w = getWrapped();
                bool res = 
                    
                w->isObject(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QJsonDocument
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QJsonDocument_Wrapper::isNull
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
                QJsonDocument* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qjsondocument_wrapper.cpp"
  
