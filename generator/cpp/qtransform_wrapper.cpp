
  // Auto generated
  
  // include header:
  //#include "qtransformwrapper.h"
  //#include "header_cpp.h"
  
    #include "qtransform_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QTransform
    // Function: squareToQuad
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_WrapperSingleton::squareToQuad
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

   && RJSHelper::is_QTransform(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: square (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        
  // convert js parameter to cpp: result (QTransform)
  
QTransform a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTransform(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QTransform::squareToQuad(
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

                  qWarning() << "no matching function variant found for squareToQuad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: quadToSquare
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_WrapperSingleton::quadToSquare
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

   && RJSHelper::is_QTransform(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: quad (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        
  // convert js parameter to cpp: result (QTransform)
  
QTransform a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QTransform(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QTransform::quadToSquare(
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

                  qWarning() << "no matching function variant found for quadToSquare";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: quadToQuad
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QTransform_WrapperSingleton::quadToQuad
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
        RJSHelper::is_QPolygonF(handler, a1
  )

   && RJSHelper::is_QPolygonF(handler, a2
  )

   && RJSHelper::is_QTransform(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: one (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        
  // convert js parameter to cpp: two (QPolygonF)
  
QPolygonF a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPolygonF(handler, a2);
        
  // convert js parameter to cpp: result (QTransform)
  
QTransform a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QTransform(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QTransform::quadToQuad(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for quadToQuad";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: fromTranslate
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_WrapperSingleton::fromTranslate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: dy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QTransform res = 
                
                // call static member function:
                QTransform::fromTranslate(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromTranslate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: fromScale
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_WrapperSingleton::fromScale
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: dy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QTransform res = 
                
                // call static member function:
                QTransform::fromScale(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QTransform_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTransform_Wrapper>("org.qcad", 1, 0, "QTransform_Wrapper");
        qmlRegisterInterface<QTransform_Wrapper>("QTransform_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTransform_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTransform_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTransform_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTransform_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QTransform_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QTransform_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QTransform_WrapperSingleton * s = new QTransform_WrapperSingleton(handler);
        engine->globalObject().setProperty("QTransform_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QTransform.js";
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
    QTransform_Wrapper::QTransform_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTransform_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTransform_Wrapper::QTransform_Wrapper(RJSApi& h, QTransform* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTransform_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTransform_Wrapper"));
              //setObjectName("QTransform_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTransform_Wrapper::~QTransform_Wrapper() {
            //RDebug::decCounter(QString("QTransform_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTransform_Wrapper"));

            //qDebug() << "QTransform_Wrapper::~QTransform_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QTransform";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTransform_Wrapper::initConnections() {

          //setObjectName("QTransform_Wrapper");

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
  
    // Class: QTransform
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1
QTransform_Wrapper::QTransform_Wrapper
                
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
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8, 
  const QJSValue& 
  a9
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QTransform_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTransform_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

   && RJSHelper::is_qreal(handler, a5
  )

   && RJSHelper::is_qreal(handler, a6
  )

   && RJSHelper::is_qreal(handler, a7
  )

   && RJSHelper::is_qreal(handler, a8
  )

   && RJSHelper::is_qreal(handler, a9
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h11 (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: h12 (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: h13 (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: h21 (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        
  // convert js parameter to cpp: h22 (qreal)
  
qreal a5_cpp;

      a5_cpp = RJSHelper::js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: h23 (qreal)
  
qreal a6_cpp;

      a6_cpp = RJSHelper::js2cpp_qreal(handler, a6);
        
  // convert js parameter to cpp: h31 (qreal)
  
qreal a7_cpp;

      a7_cpp = RJSHelper::js2cpp_qreal(handler, a7);
        
  // convert js parameter to cpp: h32 (qreal)
  
qreal a8_cpp;

      a8_cpp = RJSHelper::js2cpp_qreal(handler, a8);
        
  // convert js parameter to cpp: h33 (qreal)
  
qreal a9_cpp;

      a9_cpp = RJSHelper::js2cpp_qreal(handler, a9);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTransform(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    , a9_cpp
    
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

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

   && RJSHelper::is_qreal(handler, a5
  )

   && RJSHelper::is_qreal(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h11 (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: h12 (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: h21 (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: h22 (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        
  // convert js parameter to cpp: dx (qreal)
  
qreal a5_cpp;

      a5_cpp = RJSHelper::js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: dy (qreal)
  
qreal a6_cpp;

      a6_cpp = RJSHelper::js2cpp_qreal(handler, a6);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTransform(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
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
        RJSHelper::is_QTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTransform(
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
        RJSHelper::is_QTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QTransform(
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

        
            wrapped = new QTransform(
                
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
   && a6.isUndefined()
   && a7.isUndefined()
   && a8.isUndefined()
   && a9.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QTransform";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTransform
    // Function: isAffine
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::isAffine
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
                QTransform* w = getWrapped();
                bool res = 
                    
                w->isAffine(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAffine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: isIdentity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::isIdentity
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
                QTransform* w = getWrapped();
                bool res = 
                    
                w->isIdentity(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isIdentity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: isInvertible
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::isInvertible
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
                QTransform* w = getWrapped();
                bool res = 
                    
                w->isInvertible(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isInvertible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: isScaling
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::isScaling
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
                QTransform* w = getWrapped();
                bool res = 
                    
                w->isScaling(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isScaling";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: isRotating
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::isRotating
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
                QTransform* w = getWrapped();
                bool res = 
                    
                w->isRotating(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRotating";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: isTranslating
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::isTranslating
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
                QTransform* w = getWrapped();
                bool res = 
                    
                w->isTranslating(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTranslating";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::type
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
                QTransform* w = getWrapped();
                QTransform::TransformationType res = 
                    
                w->type(
                  
                );
              
            // return type: QTransform::TransformationType

            return RJSHelper::cpp2js_QTransform_TransformationType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: determinant
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::determinant
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->determinant(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for determinant";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m11
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m11
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m11(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m11";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m12
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m12
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m12(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m12";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m13
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m13
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m13(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m13";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m21
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m21
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m21(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m21";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m22
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m22
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m22(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m22";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m23
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m23
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m23(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m23";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m31
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m31
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m31(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m31";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m32
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m32
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m32(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m32";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: m33
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::m33
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->m33(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for m33";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: dx
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::dx
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->dx(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dx";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: dy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::dy
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
                QTransform* w = getWrapped();
                qreal res = 
                    
                w->dy(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: setMatrix
    // Source: 
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::setMatrix
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8, 
  const QJSValue& 
  a9
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

   && RJSHelper::is_qreal(handler, a5
  )

   && RJSHelper::is_qreal(handler, a6
  )

   && RJSHelper::is_qreal(handler, a7
  )

   && RJSHelper::is_qreal(handler, a8
  )

   && RJSHelper::is_qreal(handler, a9
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m11 (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: m12 (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: m13 (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: m21 (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        
  // convert js parameter to cpp: m22 (qreal)
  
qreal a5_cpp;

      a5_cpp = RJSHelper::js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: m23 (qreal)
  
qreal a6_cpp;

      a6_cpp = RJSHelper::js2cpp_qreal(handler, a6);
        
  // convert js parameter to cpp: m31 (qreal)
  
qreal a7_cpp;

      a7_cpp = RJSHelper::js2cpp_qreal(handler, a7);
        
  // convert js parameter to cpp: m32 (qreal)
  
qreal a8_cpp;

      a8_cpp = RJSHelper::js2cpp_qreal(handler, a8);
        
  // convert js parameter to cpp: m33 (qreal)
  
qreal a9_cpp;

      a9_cpp = RJSHelper::js2cpp_qreal(handler, a9);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                
                w->setMatrix(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    , a9_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMatrix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: inverted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::inverted
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
                QTransform* w = getWrapped();
                QTransform res = 
                    
                w->inverted(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for inverted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: adjoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::adjoint
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
                QTransform* w = getWrapped();
                QTransform res = 
                    
                w->adjoint(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for adjoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: transposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::transposed
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
                QTransform* w = getWrapped();
                QTransform res = 
                    
                w->transposed(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transposed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::translate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: dy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTransform* res =
                    &
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::scale
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: sy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTransform* res =
                    &
                w->scale(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: shear
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::shear
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sh (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: sv (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTransform* res =
                    &
                w->shear(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for shear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::rotate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_Qt_Axis(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: axis (Qt::Axis)
  
Qt::Axis a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ZAxis;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_Axis(handler, a2);
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
                QTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTransform* res =
                    &
                w->rotate(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rotate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: rotateRadians
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::rotateRadians
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_Qt_Axis(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: axis (Qt::Axis)
  
Qt::Axis a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ZAxis;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_Axis(handler, a2);
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
                QTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTransform* res =
                    &
                w->rotateRadians(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rotateRadians";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::reset
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
                QTransform* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: map
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::map
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QPoint res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QPointF res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (QLine)
  
QLine a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QLine res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QLine

            return RJSHelper::cpp2js_QLine(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QLineF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: l (QLineF)
  
QLineF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLineF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QLineF res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QLineF

            return RJSHelper::cpp2js_QLineF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QPolygonF res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPolygonF

            return RJSHelper::cpp2js_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QPolygon)
  
QPolygon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygon(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QPolygon res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QRegion res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QPainterPath res = 
                    
                w->map(
                  a1_cpp
    
                );
              
            // return type: QPainterPath

            return RJSHelper::cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for map";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: mapToPolygon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::mapToPolygon
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QPolygon res = 
                    
                w->mapToPolygon(
                  a1_cpp
    
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapToPolygon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: mapRect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::mapRect
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QRect res = 
                    
                w->mapRect(
                  a1_cpp
    
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                QRectF res = 
                    
                w->mapRect(
                  a1_cpp
    
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTransform
    // Function: operator_multiply_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTransform_Wrapper::operator_multiply_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTransform* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTransform* res =
                    &
                w->operator*=(
                  a1_cpp
    
                );
              
            // return type: QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_multiply_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  