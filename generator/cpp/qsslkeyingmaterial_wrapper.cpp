
  // Auto generated
  
  // include header:
  //#include "qsslkeyingmaterialwrapper.h"
  //#include "header_cpp.h"
  
    #include "qsslkeyingmaterial_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSslKeyingMaterial*> QSslKeyingMaterial_Wrapper::basecasters_QSslKeyingMaterial;
    
    // static functions implementation in singleton wrapper:
    
#ifndef QT_NO_DEBUG_STREAM

#endif

    void QSslKeyingMaterial_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSslKeyingMaterial_Wrapper>("org.qcad", 1, 0, "QSslKeyingMaterial_Wrapper");
        qmlRegisterInterface<QSslKeyingMaterial_Wrapper>("QSslKeyingMaterial_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSslKeyingMaterial* t = new RJSType_QSslKeyingMaterial();
          global.setProperty("RJSType_QSslKeyingMaterial", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSslKeyingMaterial::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSslKeyingMaterial_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSslKeyingMaterial_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSslKeyingMaterial_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSslKeyingMaterial_BaseJs", mob);
      
      QString fileName = ":generator/js/QSslKeyingMaterial.js";
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
    QSslKeyingMaterial_Wrapper::QSslKeyingMaterial_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSslKeyingMaterial_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSslKeyingMaterial_Wrapper::QSslKeyingMaterial_Wrapper(RJSApi& h, QSslKeyingMaterial* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSslKeyingMaterial_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSslKeyingMaterial_Wrapper"));
              //setObjectName("QSslKeyingMaterial_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSslKeyingMaterial_Wrapper::~QSslKeyingMaterial_Wrapper() {
            //RDebug::decCounter(QString("QSslKeyingMaterial_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSslKeyingMaterial_Wrapper"));

            //qDebug() << "QSslKeyingMaterial_Wrapper::~QSslKeyingMaterial_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSslKeyingMaterial";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSslKeyingMaterial_Wrapper::initConnections() {

          //setObjectName("QSslKeyingMaterial_Wrapper");

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
  
    // Class: QSslKeyingMaterial
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QSslKeyingMaterial_Wrapper::QSslKeyingMaterial_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSslKeyingMaterial_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSslKeyingMaterial_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

   && RJSHelper::is_qsizetype(handler, a2
  )

   && RJSHelper::is_QByteArray(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: label (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: size (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qsizetype(handler, a2);
        
  // convert js parameter to cpp: context (QByteArray)
  
QByteArray a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QByteArray(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslKeyingMaterial(
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
        RJSHelper::is_QByteArray(handler, a1
  )

   && RJSHelper::is_qsizetype(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: label (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: size (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qsizetype(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslKeyingMaterial(
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

      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSslKeyingMaterial(
                  
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
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QSslKeyingMaterial";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
    // Class: QSslKeyingMaterial
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKeyingMaterial_Wrapper::isValid
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
                QSslKeyingMaterial* w = getWrapped();
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
            
    // Class: QSslKeyingMaterial
    // Function: label
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKeyingMaterial_Wrapper::label
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
                QSslKeyingMaterial* w = getWrapped();
                QByteArray res = 
                    
                w->label(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for label";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKeyingMaterial
    // Function: context
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKeyingMaterial_Wrapper::context
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
                QSslKeyingMaterial* w = getWrapped();
                QByteArray res = 
                    
                w->context(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for context";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKeyingMaterial
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKeyingMaterial_Wrapper::value
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
                QSslKeyingMaterial* w = getWrapped();
                QByteArray res = 
                    
                w->value(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for value";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKeyingMaterial
    // Function: requestedSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSslKeyingMaterial_Wrapper::requestedSize
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
                QSslKeyingMaterial* w = getWrapped();
                qsizetype res = 
                    
                w->requestedSize(
                  
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for requestedSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSslKeyingMaterial
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSslKeyingMaterial_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSslKeyingMaterial(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSslKeyingMaterial)
  
QSslKeyingMaterial a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSslKeyingMaterial(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSslKeyingMaterial* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsslkeyingmaterial_wrapper.cpp"
  
