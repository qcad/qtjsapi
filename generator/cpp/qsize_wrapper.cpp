
  // Auto generated
  
  // include header:
  //#include "qsizewrapper.h"
  //#include "header_cpp.h"
  
    #include "qsize_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSize*> QSize_Wrapper::basecasters_QSize;
    
    // static functions implementation in singleton wrapper:
    
    void QSize_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSize_Wrapper>("org.qcad", 1, 0, "QSize_Wrapper");
        qmlRegisterInterface<QSize_Wrapper>("QSize_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSize* t = new RJSType_QSize();
          global.setProperty("RJSType_QSize", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSize::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSize_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSize_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSize_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSize_BaseJs", mob);
      
      QString fileName = ":generator/js/QSize.js";
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
    QSize_Wrapper::QSize_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSize_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSize_Wrapper::QSize_Wrapper(RJSApi& h, QSize* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSize_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSize_Wrapper"));
              //setObjectName("QSize_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSize_Wrapper::~QSize_Wrapper() {
            //RDebug::decCounter(QString("QSize_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSize_Wrapper"));

            //qDebug() << "QSize_Wrapper::~QSize_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSize";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSize_Wrapper::initConnections() {

          //setObjectName("QSize_Wrapper");

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
  
    // Class: QSize
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QSize_Wrapper::QSize_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QSize_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSize_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSize(
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSize(
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
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: h (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSize(
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
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sz (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSize(
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

        
            wrapped = new QSize(
                
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

        
            wrapped = new QSize(
                
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

        
            wrapped = new QSize(
                
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
                  

                  qWarning() << "no matching constructor variant found for QSize";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSize
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::isNull
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
                QSize* w = getWrapped();
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
            
    // Class: QSize
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::isEmpty
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
                QSize* w = getWrapped();
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
            
    // Class: QSize
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::isValid
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
                QSize* w = getWrapped();
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
            
    // Class: QSize
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::width
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
                QSize* w = getWrapped();
                int res = 
                    
                w->width(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::height
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
                QSize* w = getWrapped();
                int res = 
                    
                w->height(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::setWidth
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
    
  // convert js parameter to cpp: w (int)
  
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
                QSize* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::setHeight
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
    
  // convert js parameter to cpp: h (int)
  
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
                QSize* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: transpose
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::transpose
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
                QSize* w = getWrapped();
                
                w->transpose(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for transpose";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: transposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::transposed
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
                QSize* w = getWrapped();
                QSize res = 
                    
                w->transposed(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transposed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::scale
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: mode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a3_cpp;

      a3_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSize* w = getWrapped();
                
                w->scale(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSize* w = getWrapped();
                
                w->scale(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: scaled
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::scaled
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: mode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a3_cpp;

      a3_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSize* w = getWrapped();
                QSize res = 
                    
                w->scaled(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSize* w = getWrapped();
                QSize res = 
                    
                w->scaled(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: expandedTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::expandedTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSize* w = getWrapped();
                QSize res = 
                    
                w->expandedTo(
                  a1_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for expandedTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: boundedTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::boundedTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSize* w = getWrapped();
                QSize res = 
                    
                w->boundedTo(
                  a1_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundedTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: grownBy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::grownBy
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMargins(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (QMargins)
  
QMargins a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMargins(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSize* w = getWrapped();
                QSize res = 
                    
                w->grownBy(
                  a1_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for grownBy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: shrunkBy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::shrunkBy
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMargins(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (QMargins)
  
QMargins a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMargins(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSize* w = getWrapped();
                QSize res = 
                    
                w->shrunkBy(
                  a1_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for shrunkBy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: rwidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::rwidth
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
                QSize* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      int* res =
                    &
                w->rwidth(
                  
                );
              
            // return type: int&

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rwidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSize
    // Function: rheight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSize_Wrapper::rheight
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
                QSize* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      int* res =
                    &
                w->rheight(
                  
                );
              
            // return type: int&

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rheight";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qsize_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSizeF*> QSizeF_Wrapper::basecasters_QSizeF;
    
    // static functions implementation in singleton wrapper:
    
    void QSizeF_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSizeF_Wrapper>("org.qcad", 1, 0, "QSizeF_Wrapper");
        qmlRegisterInterface<QSizeF_Wrapper>("QSizeF_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSizeF* t = new RJSType_QSizeF();
          global.setProperty("RJSType_QSizeF", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSizeF::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSizeF_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSizeF_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSizeF_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSizeF_BaseJs", mob);
      
      QString fileName = ":generator/js/QSizeF.js";
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
    QSizeF_Wrapper::QSizeF_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSizeF_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSizeF_Wrapper::QSizeF_Wrapper(RJSApi& h, QSizeF* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSizeF_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSizeF_Wrapper"));
              //setObjectName("QSizeF_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSizeF_Wrapper::~QSizeF_Wrapper() {
            //RDebug::decCounter(QString("QSizeF_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSizeF_Wrapper"));

            //qDebug() << "QSizeF_Wrapper::~QSizeF_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSizeF";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSizeF_Wrapper::initConnections() {

          //setObjectName("QSizeF_Wrapper");

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
  
    // Class: QSizeF
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QSizeF_Wrapper::QSizeF_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QSizeF_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSizeF_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSizeF(
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
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: h (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSizeF(
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
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: h (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSizeF(
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
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sz (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSizeF(
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
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sz (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSizeF(
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

        
            wrapped = new QSizeF(
                
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

        
            wrapped = new QSizeF(
                
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

        
            wrapped = new QSizeF(
                
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
                  

                  qWarning() << "no matching constructor variant found for QSizeF";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSizeF
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::isNull
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
                QSizeF* w = getWrapped();
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
            
    // Class: QSizeF
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::isEmpty
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
                QSizeF* w = getWrapped();
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
            
    // Class: QSizeF
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::isValid
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
                QSizeF* w = getWrapped();
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
            
    // Class: QSizeF
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::width
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
                QSizeF* w = getWrapped();
                qreal res = 
                    
                w->width(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::height
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
                QSizeF* w = getWrapped();
                qreal res = 
                    
                w->height(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::setWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::setHeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: transpose
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::transpose
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
                QSizeF* w = getWrapped();
                
                w->transpose(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for transpose";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: transposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::transposed
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
                QSizeF* w = getWrapped();
                QSizeF res = 
                    
                w->transposed(
                  
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transposed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::scale
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
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: h (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: mode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a3_cpp;

      a3_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                
                w->scale(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSizeF(handler, a1
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QSizeF)
  
QSizeF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizeF(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                
                w->scale(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: scaled
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::scaled
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: h (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: mode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a3_cpp;

      a3_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                QSizeF res = 
                    
                w->scaled(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QSizeF(handler, a1
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QSizeF)
  
QSizeF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizeF(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                QSizeF res = 
                    
                w->scaled(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: expandedTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::expandedTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSizeF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSizeF)
  
QSizeF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizeF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                QSizeF res = 
                    
                w->expandedTo(
                  a1_cpp
    
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for expandedTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: boundedTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::boundedTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSizeF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSizeF)
  
QSizeF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSizeF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                QSizeF res = 
                    
                w->boundedTo(
                  a1_cpp
    
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundedTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: grownBy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::grownBy
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMarginsF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (QMarginsF)
  
QMarginsF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMarginsF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                QSizeF res = 
                    
                w->grownBy(
                  a1_cpp
    
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for grownBy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: shrunkBy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::shrunkBy
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMarginsF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (QMarginsF)
  
QMarginsF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMarginsF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSizeF* w = getWrapped();
                QSizeF res = 
                    
                w->shrunkBy(
                  a1_cpp
    
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for shrunkBy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: rwidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::rwidth
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
                QSizeF* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      qreal* res =
                    &
                w->rwidth(
                  
                );
              
            // return type: qreal&

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rwidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: rheight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::rheight
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
                QSizeF* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      qreal* res =
                    &
                w->rheight(
                  
                );
              
            // return type: qreal&

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rheight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSizeF
    // Function: toSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSizeF_Wrapper::toSize
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
                QSizeF* w = getWrapped();
                QSize res = 
                    
                w->toSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toSize";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  