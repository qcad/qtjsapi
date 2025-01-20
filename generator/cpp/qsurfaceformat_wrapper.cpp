
  // Auto generated
  
  // include header:
  //#include "qsurfaceformatwrapper.h"
  //#include "header_cpp.h"
  
    #include "qsurfaceformat_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSurfaceFormat*> QSurfaceFormat_Wrapper::basecasters_QSurfaceFormat;
    
    // static functions implementation in singleton wrapper:
    
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QSurfaceFormat
    // Function: setDefaultFormat
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_WrapperSingleton::setDefaultFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSurfaceFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QSurfaceFormat)
  
QSurfaceFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QSurfaceFormat::setDefaultFormat(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDefaultFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: defaultFormat
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_WrapperSingleton::defaultFormat
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QSurfaceFormat res = 
                
                // call static member function:
                QSurfaceFormat::defaultFormat(
              
            );
          
            // return type: QSurfaceFormat

            return RJSHelper::cpp2js_QSurfaceFormat(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif

    void QSurfaceFormat_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSurfaceFormat_Wrapper>("org.qcad", 1, 0, "QSurfaceFormat_Wrapper");
        qmlRegisterInterface<QSurfaceFormat_Wrapper>("QSurfaceFormat_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSurfaceFormat* t = new RJSType_QSurfaceFormat();
          global.setProperty("RJSType_QSurfaceFormat", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSurfaceFormat::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSurfaceFormat_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSurfaceFormat_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSurfaceFormat_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSurfaceFormat_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QSurfaceFormat_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QSurfaceFormat_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QSurfaceFormat_WrapperSingleton * s = new QSurfaceFormat_WrapperSingleton(handler);
        engine->globalObject().setProperty("QSurfaceFormat_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QSurfaceFormat.js";
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
    QSurfaceFormat_Wrapper::QSurfaceFormat_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSurfaceFormat_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSurfaceFormat_Wrapper::QSurfaceFormat_Wrapper(RJSApi& h, QSurfaceFormat* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSurfaceFormat_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSurfaceFormat_Wrapper"));
              //setObjectName("QSurfaceFormat_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSurfaceFormat_Wrapper::~QSurfaceFormat_Wrapper() {
            //RDebug::decCounter(QString("QSurfaceFormat_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSurfaceFormat_Wrapper"));

            //qDebug() << "QSurfaceFormat_Wrapper::~QSurfaceFormat_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSurfaceFormat";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSurfaceFormat_Wrapper::initConnections() {

          //setObjectName("QSurfaceFormat_Wrapper");

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
  
#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QSurfaceFormat
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QSurfaceFormat_Wrapper::QSurfaceFormat_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSurfaceFormat_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSurfaceFormat_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QSurfaceFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QSurfaceFormat)
  
QSurfaceFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSurfaceFormat(
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
        RJSHelper::is_QSurfaceFormat_FormatOptions(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QSurfaceFormat::FormatOptions)
  
QSurfaceFormat::FormatOptions a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat_FormatOptions(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSurfaceFormat(
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

        
              wrapped = new QSurfaceFormat(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QSurfaceFormat";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QSurfaceFormat
    // Function: setDepthBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setDepthBufferSize
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
    
  // convert js parameter to cpp: size (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setDepthBufferSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDepthBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: depthBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::depthBufferSize
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->depthBufferSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for depthBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setStencilBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setStencilBufferSize
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
    
  // convert js parameter to cpp: size (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setStencilBufferSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStencilBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: stencilBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::stencilBufferSize
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->stencilBufferSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stencilBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setRedBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setRedBufferSize
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
    
  // convert js parameter to cpp: size (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setRedBufferSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRedBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: redBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::redBufferSize
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->redBufferSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for redBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setGreenBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setGreenBufferSize
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
    
  // convert js parameter to cpp: size (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setGreenBufferSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGreenBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: greenBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::greenBufferSize
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->greenBufferSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for greenBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setBlueBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setBlueBufferSize
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
    
  // convert js parameter to cpp: size (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setBlueBufferSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlueBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: blueBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::blueBufferSize
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->blueBufferSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blueBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setAlphaBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setAlphaBufferSize
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
    
  // convert js parameter to cpp: size (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setAlphaBufferSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlphaBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: alphaBufferSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::alphaBufferSize
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->alphaBufferSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alphaBufferSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setSamples
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setSamples
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
    
  // convert js parameter to cpp: numSamples (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setSamples(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSamples";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: samples
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::samples
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->samples(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for samples";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setSwapBehavior
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setSwapBehavior
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSurfaceFormat_SwapBehavior(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: behavior (QSurfaceFormat::SwapBehavior)
  
QSurfaceFormat::SwapBehavior a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat_SwapBehavior(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSurfaceFormat* w = getWrapped();
                
                w->setSwapBehavior(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSwapBehavior";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: swapBehavior
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::swapBehavior
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
                QSurfaceFormat* w = getWrapped();
                QSurfaceFormat::SwapBehavior res = 
                    
                w->swapBehavior(
                  
                );
              
            // return type: QSurfaceFormat::SwapBehavior

            return RJSHelper::cpp2js_QSurfaceFormat_SwapBehavior(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for swapBehavior";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: hasAlpha
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::hasAlpha
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
                QSurfaceFormat* w = getWrapped();
                bool res = 
                    
                w->hasAlpha(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasAlpha";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setProfile
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setProfile
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSurfaceFormat_OpenGLContextProfile(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: profile (QSurfaceFormat::OpenGLContextProfile)
  
QSurfaceFormat::OpenGLContextProfile a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat_OpenGLContextProfile(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSurfaceFormat* w = getWrapped();
                
                w->setProfile(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProfile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: profile
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::profile
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
                QSurfaceFormat* w = getWrapped();
                QSurfaceFormat::OpenGLContextProfile res = 
                    
                w->profile(
                  
                );
              
            // return type: QSurfaceFormat::OpenGLContextProfile

            return RJSHelper::cpp2js_QSurfaceFormat_OpenGLContextProfile(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for profile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setRenderableType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setRenderableType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSurfaceFormat_RenderableType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QSurfaceFormat::RenderableType)
  
QSurfaceFormat::RenderableType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat_RenderableType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSurfaceFormat* w = getWrapped();
                
                w->setRenderableType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRenderableType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: renderableType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::renderableType
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
                QSurfaceFormat* w = getWrapped();
                QSurfaceFormat::RenderableType res = 
                    
                w->renderableType(
                  
                );
              
            // return type: QSurfaceFormat::RenderableType

            return RJSHelper::cpp2js_QSurfaceFormat_RenderableType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for renderableType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setMajorVersion
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setMajorVersion
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
    
  // convert js parameter to cpp: majorVersion (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setMajorVersion(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMajorVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: majorVersion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::majorVersion
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->majorVersion(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for majorVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setMinorVersion
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setMinorVersion
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
    
  // convert js parameter to cpp: minorVersion (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setMinorVersion(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinorVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: minorVersion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::minorVersion
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->minorVersion(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minorVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setVersion
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setVersion
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: major (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: minor (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSurfaceFormat* w = getWrapped();
                
                w->setVersion(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVersion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: stereo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::stereo
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
                QSurfaceFormat* w = getWrapped();
                bool res = 
                    
                w->stereo(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stereo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setStereo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setStereo
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSurfaceFormat* w = getWrapped();
                
                w->setStereo(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStereo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setOptions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setOptions
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSurfaceFormat_FormatOptions(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: options (QSurfaceFormat::FormatOptions)
  
QSurfaceFormat::FormatOptions a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat_FormatOptions(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSurfaceFormat* w = getWrapped();
                
                w->setOptions(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setOption
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setOption
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSurfaceFormat_FormatOption(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: option (QSurfaceFormat::FormatOption)
  
QSurfaceFormat::FormatOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat_FormatOption(handler, a1);
        
  // convert js parameter to cpp: on (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = true;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_bool(handler, a2);
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
                QSurfaceFormat* w = getWrapped();
                
                w->setOption(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: testOption
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::testOption
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSurfaceFormat_FormatOption(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: option (QSurfaceFormat::FormatOption)
  
QSurfaceFormat::FormatOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSurfaceFormat_FormatOption(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSurfaceFormat* w = getWrapped();
                bool res = 
                    
                w->testOption(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for testOption";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: options
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::options
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
                QSurfaceFormat* w = getWrapped();
                QSurfaceFormat::FormatOptions res = 
                    
                w->options(
                  
                );
              
            // return type: QSurfaceFormat::FormatOptions

            return RJSHelper::cpp2js_QSurfaceFormat_FormatOptions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for options";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: swapInterval
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::swapInterval
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
                QSurfaceFormat* w = getWrapped();
                int res = 
                    
                w->swapInterval(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for swapInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSurfaceFormat
    // Function: setSwapInterval
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSurfaceFormat_Wrapper::setSwapInterval
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
    
  // convert js parameter to cpp: interval (int)
  
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
                QSurfaceFormat* w = getWrapped();
                
                w->setSwapInterval(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSwapInterval";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#ifndef QT_NO_DEBUG_STREAM

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qsurfaceformat_wrapper.cpp"
  
