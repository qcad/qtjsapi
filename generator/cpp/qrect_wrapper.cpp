
  // Auto generated
  
  // include header:
  //#include "qrectwrapper.h"
  //#include "header_cpp.h"
  
    #include "qrect_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QRect_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QRect_Wrapper>("org.qcad", 1, 0, "QRect_Wrapper");
        qmlRegisterInterface<QRect_Wrapper>("QRect_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QRect_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QRect_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QRect_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QRect_BaseJs", mob);
      
      QString fileName = ":generated/js/QRect.js";
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
    QRect_Wrapper::QRect_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QRect_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QRect_Wrapper::QRect_Wrapper(RJSApi& h, QRect* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QRect_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QRect_Wrapper"));
              //setObjectName("QRect_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QRect_Wrapper::~QRect_Wrapper() {
            //RDebug::decCounter(QString("QRect_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QRect_Wrapper"));

            //qDebug() << "QRect_Wrapper::~QRect_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QRect";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QRect_Wrapper::initConnections() {

          //setObjectName("QRect_Wrapper");

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
  
    // Class: QRect
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QRect_Wrapper::QRect_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QRect_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QRect_Wrapper"));
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: left (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: top (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: width (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: height (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRect(
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aleft (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: atop (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: awidth (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: aheight (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRect(
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
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aleft (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: atop (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: awidth (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: aheight (qreal)
  
qreal a4_cpp;

      a4_cpp = js2cpp_qreal(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRect(
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
        is_QPoint(handler, a1
  )

   && is_QPoint(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topleft (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: bottomright (QPoint)
  
QPoint a2_cpp;

      a2_cpp = js2cpp_QPoint(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRect(
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
        is_QPoint(handler, a1
  )

   && is_QSize(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topleft (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: size (QSize)
  
QSize a2_cpp;

      a2_cpp = js2cpp_QSize(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRect(
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

        
            wrapped = new QRect(
                
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
                  

                  qWarning() << "no matching constructor variant found for QRect";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QRect
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::isNull
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
                QRect* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::isEmpty
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
                QRect* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::isValid
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
                QRect* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: left
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::left
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
                QRect* w = getWrapped();
                int res = 
                    
                w->left(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for left";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: top
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::top
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
                QRect* w = getWrapped();
                int res = 
                    
                w->top(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for top";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: right
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::right
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
                QRect* w = getWrapped();
                int res = 
                    
                w->right(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for right";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: bottom
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::bottom
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
                QRect* w = getWrapped();
                int res = 
                    
                w->bottom(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: normalized
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::normalized
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
                QRect* w = getWrapped();
                QRect res = 
                    
                w->normalized(
                  
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for normalized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: x
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::x
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
                QRect* w = getWrapped();
                int res = 
                    
                w->x(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for x";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: y
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::y
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
                QRect* w = getWrapped();
                int res = 
                    
                w->y(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for y";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setTop
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setTop
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setTop(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTop";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setBottom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setBottom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setBottom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setX
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setX
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setX(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setY
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setY
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: y (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setY(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setTopLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setTopLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setTopLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setBottomRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setBottomRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setBottomRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setTopRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setTopRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setTopRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setBottomLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setBottomLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setBottomLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: topLeft
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::topLeft
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
                QRect* w = getWrapped();
                QPoint res = 
                    
                w->topLeft(
                  
                );
              
            // return type: QPoint

            return cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: bottomRight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::bottomRight
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
                QRect* w = getWrapped();
                QPoint res = 
                    
                w->bottomRight(
                  
                );
              
            // return type: QPoint

            return cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: topRight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::topRight
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
                QRect* w = getWrapped();
                QPoint res = 
                    
                w->topRight(
                  
                );
              
            // return type: QPoint

            return cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: bottomLeft
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::bottomLeft
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
                QRect* w = getWrapped();
                QPoint res = 
                    
                w->bottomLeft(
                  
                );
              
            // return type: QPoint

            return cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::center
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
                QRect* w = getWrapped();
                QPoint res = 
                    
                w->center(
                  
                );
              
            // return type: QPoint

            return cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for center";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveTop
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveTop
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveTop(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTop";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveBottom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveBottom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveBottom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveBottom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveTopLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveTopLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveTopLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTopLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveBottomRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveBottomRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveBottomRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveBottomRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveTopRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveTopRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveTopRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTopRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveBottomLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveBottomLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveBottomLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveBottomLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveCenter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveCenter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::translate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->translate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::translated
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                QRect res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                QRect res = 
                    
                w->translated(
                  a1_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: transposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::transposed
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
                QRect* w = getWrapped();
                QRect res = 
                    
                w->transposed(
                  
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transposed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: moveTo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::moveTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: t (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveTo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->moveTo(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setRect
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setRect
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setCoords
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setCoords
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y1 (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: x2 (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: y2 (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setCoords(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCoords";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: adjust
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::adjust
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y1 (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: x2 (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: y2 (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->adjust(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for adjust";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: adjusted
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::adjusted
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y1 (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: x2 (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: y2 (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                QRect res = 
                    
                w->adjusted(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for adjusted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::size
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
                QRect* w = getWrapped();
                QSize res = 
                    
                w->size(
                  
                );
              
            // return type: QSize

            return cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::width
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
                QRect* w = getWrapped();
                int res = 
                    
                w->width(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::height
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
                QRect* w = getWrapped();
                int res = 
                    
                w->height(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setHeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: setSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::setSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QSize)
  
QSize a1_cpp;

      a1_cpp = js2cpp_QSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                
                w->setSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::contains
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
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_bool(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: proper (bool)
  
bool a3_cpp;

      a3_cpp = js2cpp_bool(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QRect(handler, a1
  )

   && is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: proper (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = js2cpp_bool(handler, a2);
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
                QRect* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

   && is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: proper (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
          }
          else {
            a2_cpp = js2cpp_bool(handler, a2);
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
                QRect* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contains";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: united
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::united
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QRect)
  
QRect a1_cpp;

      a1_cpp = js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                QRect res = 
                    
                w->united(
                  a1_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for united";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: intersected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::intersected
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QRect)
  
QRect a1_cpp;

      a1_cpp = js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                QRect res = 
                    
                w->intersected(
                  a1_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: intersects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::intersects
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                bool res = 
                    
                w->intersects(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: marginsAdded
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::marginsAdded
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QMargins(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margins (QMargins)
  
QMargins a1_cpp;

      a1_cpp = js2cpp_QMargins(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                QRect res = 
                    
                w->marginsAdded(
                  a1_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for marginsAdded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRect
    // Function: marginsRemoved
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRect_Wrapper::marginsRemoved
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QMargins(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margins (QMargins)
  
QMargins a1_cpp;

      a1_cpp = js2cpp_QMargins(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRect* w = getWrapped();
                QRect res = 
                    
                w->marginsRemoved(
                  a1_cpp
    
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for marginsRemoved";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qrect_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QRectF_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QRectF_Wrapper>("org.qcad", 1, 0, "QRectF_Wrapper");
        qmlRegisterInterface<QRectF_Wrapper>("QRectF_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QRectF_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QRectF_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QRectF_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QRectF_BaseJs", mob);
      
      QString fileName = ":generated/js/QRectF.js";
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
    QRectF_Wrapper::QRectF_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QRectF_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QRectF_Wrapper::QRectF_Wrapper(RJSApi& h, QRectF* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QRectF_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QRectF_Wrapper"));
              //setObjectName("QRectF_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QRectF_Wrapper::~QRectF_Wrapper() {
            //RDebug::decCounter(QString("QRectF_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QRectF_Wrapper"));

            //qDebug() << "QRectF_Wrapper::~QRectF_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QRectF";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QRectF_Wrapper::initConnections() {

          //setObjectName("QRectF_Wrapper");

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
  
    // Class: QRectF
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QRectF_Wrapper::QRectF_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QRectF_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QRectF_Wrapper"));
                
      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
  )

   && is_int(handler, a3
  )

   && is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aleft (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: atop (int)
  
int a2_cpp;

      a2_cpp = js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: awidth (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: aheight (int)
  
int a4_cpp;

      a4_cpp = js2cpp_int(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRectF(
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
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: left (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: top (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: width (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: height (qreal)
  
qreal a4_cpp;

      a4_cpp = js2cpp_qreal(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRectF(
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
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aleft (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: atop (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: awidth (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: aheight (qreal)
  
qreal a4_cpp;

      a4_cpp = js2cpp_qreal(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRectF(
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
        is_QPointF(handler, a1
  )

   && is_QSizeF(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topleft (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: size (QSizeF)
  
QSizeF a2_cpp;

      a2_cpp = js2cpp_QSizeF(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRectF(
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
        is_QPointF(handler, a1
  )

   && is_QPointF(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: topleft (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: bottomRight (QPointF)
  
QPointF a2_cpp;

      a2_cpp = js2cpp_QPointF(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRectF(
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
        is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRect)
  
QRect a1_cpp;

      a1_cpp = js2cpp_QRect(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRectF(
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

        
            wrapped = new QRectF(
                
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
                  

                  qWarning() << "no matching constructor variant found for QRectF";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QRectF
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::isNull
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
                QRectF* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::isEmpty
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
                QRectF* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::isValid
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
                QRectF* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: normalized
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::normalized
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
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->normalized(
                  
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for normalized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: left
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::left
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
                QRectF* w = getWrapped();
                qreal res = 
                    
                w->left(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for left";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: top
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::top
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
                QRectF* w = getWrapped();
                qreal res = 
                    
                w->top(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for top";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: right
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::right
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
                QRectF* w = getWrapped();
                qreal res = 
                    
                w->right(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for right";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: bottom
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::bottom
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
                QRectF* w = getWrapped();
                qreal res = 
                    
                w->bottom(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: x
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::x
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
                QRectF* w = getWrapped();
                qreal res = 
                    
                w->x(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for x";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: y
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::y
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
                QRectF* w = getWrapped();
                qreal res = 
                    
                w->y(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for y";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setTop
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setTop
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setTop(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTop";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setBottom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setBottom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setBottom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setX
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setX
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setX(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setY
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setY
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setY(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: topLeft
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::topLeft
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
                QRectF* w = getWrapped();
                QPointF res = 
                    
                w->topLeft(
                  
                );
              
            // return type: QPointF

            return cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: bottomRight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::bottomRight
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
                QRectF* w = getWrapped();
                QPointF res = 
                    
                w->bottomRight(
                  
                );
              
            // return type: QPointF

            return cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: topRight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::topRight
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
                QRectF* w = getWrapped();
                QPointF res = 
                    
                w->topRight(
                  
                );
              
            // return type: QPointF

            return cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for topRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: bottomLeft
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::bottomLeft
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
                QRectF* w = getWrapped();
                QPointF res = 
                    
                w->bottomLeft(
                  
                );
              
            // return type: QPointF

            return cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bottomLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::center
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
                QRectF* w = getWrapped();
                QPointF res = 
                    
                w->center(
                  
                );
              
            // return type: QPointF

            return cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for center";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setTopLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setTopLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setTopLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setBottomRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setBottomRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setBottomRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setTopRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setTopRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setTopRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTopRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setBottomLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setBottomLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setBottomLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBottomLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveTop
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveTop
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveTop(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTop";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveBottom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveBottom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveBottom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveBottom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveTopLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveTopLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveTopLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTopLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveBottomRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveBottomRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveBottomRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveBottomRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveTopRight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveTopRight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveTopRight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTopRight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveBottomLeft
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveBottomLeft
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveBottomLeft(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveBottomLeft";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveCenter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveCenter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::translate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: dy (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->translate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::translated
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
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: dy (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->translated(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: transposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::transposed
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
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->transposed(
                  
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transposed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: moveTo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::moveTo
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveTo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->moveTo(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setRect
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setRect
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: w (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: h (qreal)
  
qreal a4_cpp;

      a4_cpp = js2cpp_qreal(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setCoords
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setCoords
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y1 (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: x2 (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: y2 (qreal)
  
qreal a4_cpp;

      a4_cpp = js2cpp_qreal(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setCoords(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCoords";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: adjust
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::adjust
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y1 (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: x2 (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: y2 (qreal)
  
qreal a4_cpp;

      a4_cpp = js2cpp_qreal(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->adjust(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for adjust";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: adjusted
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::adjusted
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y1 (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: x2 (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: y2 (qreal)
  
qreal a4_cpp;

      a4_cpp = js2cpp_qreal(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->adjusted(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for adjusted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::size
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
                QRectF* w = getWrapped();
                QSizeF res = 
                    
                w->size(
                  
                );
              
            // return type: QSizeF

            return cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::width
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
                QRectF* w = getWrapped();
                qreal res = 
                    
                w->width(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::height
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
                QRectF* w = getWrapped();
                qreal res = 
                    
                w->height(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for height";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setHeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: setSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::setSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QSizeF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QSizeF)
  
QSizeF a1_cpp;

      a1_cpp = js2cpp_QSizeF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                
                w->setSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::contains
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
        is_qreal(handler, a1
  )

   && is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRectF)
  
QRectF a1_cpp;

      a1_cpp = js2cpp_QRectF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contains";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: united
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::united
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QRectF)
  
QRectF a1_cpp;

      a1_cpp = js2cpp_QRectF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->united(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for united";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: intersected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::intersected
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QRectF)
  
QRectF a1_cpp;

      a1_cpp = js2cpp_QRectF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->intersected(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: intersects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::intersects
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRectF)
  
QRectF a1_cpp;

      a1_cpp = js2cpp_QRectF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                bool res = 
                    
                w->intersects(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: marginsAdded
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::marginsAdded
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QMarginsF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margins (QMarginsF)
  
QMarginsF a1_cpp;

      a1_cpp = js2cpp_QMarginsF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->marginsAdded(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for marginsAdded";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: marginsRemoved
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::marginsRemoved
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QMarginsF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margins (QMarginsF)
  
QMarginsF a1_cpp;

      a1_cpp = js2cpp_QMarginsF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRectF* w = getWrapped();
                QRectF res = 
                    
                w->marginsRemoved(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for marginsRemoved";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: toRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::toRect
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
                QRectF* w = getWrapped();
                QRect res = 
                    
                w->toRect(
                  
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRectF
    // Function: toAlignedRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRectF_Wrapper::toAlignedRect
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
                QRectF* w = getWrapped();
                QRect res = 
                    
                w->toAlignedRect(
                  
                );
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toAlignedRect";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  