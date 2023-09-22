
  // Auto generated
  
  // include header:
  //#include "qeasingcurvewrapper.h"
  //#include "header_cpp.h"
  
    #include "qeasingcurve_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#ifndef QT_NO_DEBUG_STREAM

#endif

#ifndef QT_NO_DATASTREAM

#endif

    void QEasingCurve_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QEasingCurve_Wrapper>("org.qcad", 1, 0, "QEasingCurve_Wrapper");
        qmlRegisterInterface<QEasingCurve_Wrapper>("QEasingCurve_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QEasingCurve* t = new RJSType_QEasingCurve();
          global.setProperty("RJSType_QEasingCurve", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QEasingCurve::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QEasingCurve_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QEasingCurve_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QEasingCurve_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QEasingCurve_BaseJs", mob);
      
      QString fileName = ":generator/js/QEasingCurve.js";
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
    QEasingCurve_Wrapper::QEasingCurve_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QEasingCurve_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QEasingCurve_Wrapper::QEasingCurve_Wrapper(RJSApi& h, QEasingCurve* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QEasingCurve_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QEasingCurve_Wrapper"));
              //setObjectName("QEasingCurve_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QEasingCurve_Wrapper::~QEasingCurve_Wrapper() {
            //RDebug::decCounter(QString("QEasingCurve_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QEasingCurve_Wrapper"));

            //qDebug() << "QEasingCurve_Wrapper::~QEasingCurve_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QEasingCurve";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QEasingCurve_Wrapper::initConnections() {

          //setObjectName("QEasingCurve_Wrapper");

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
  
    // Class: QEasingCurve
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QEasingCurve_Wrapper::QEasingCurve_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QEasingCurve_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QEasingCurve_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QEasingCurve_Type(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QEasingCurve::Type)
  
QEasingCurve::Type a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QEasingCurve::Linear;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QEasingCurve_Type(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QEasingCurve(
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
        RJSHelper::is_QEasingCurve(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEasingCurve)
  
QEasingCurve a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEasingCurve(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QEasingCurve(
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
        RJSHelper::is_QEasingCurve(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEasingCurve)
  
QEasingCurve a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEasingCurve(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QEasingCurve(
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QEasingCurve";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif

#ifndef QT_NO_DATASTREAM

#endif


    // non-static functions:
    
    // Class: QEasingCurve
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEasingCurve(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEasingCurve)
  
QEasingCurve a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEasingCurve(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEasingCurve* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QEasingCurve* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QEasingCurve&

            return RJSHelper::cpp2js_QEasingCurve(
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
            
    // Class: QEasingCurve
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEasingCurve(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEasingCurve)
  
QEasingCurve a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEasingCurve(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEasingCurve* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::equals
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEasingCurve(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEasingCurve)
  
QEasingCurve a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEasingCurve(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEasingCurve* w = getWrapped();
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
            
    // Class: QEasingCurve
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::operator_not_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEasingCurve(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEasingCurve)
  
QEasingCurve a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEasingCurve(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEasingCurve* w = getWrapped();
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
            
    // Class: QEasingCurve
    // Function: amplitude
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::amplitude
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
                QEasingCurve* w = getWrapped();
                qreal res = 
                    
                w->amplitude(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for amplitude";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: setAmplitude
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::setAmplitude
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
    
  // convert js parameter to cpp: amplitude (qreal)
  
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
                QEasingCurve* w = getWrapped();
                
                w->setAmplitude(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAmplitude";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: period
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::period
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
                QEasingCurve* w = getWrapped();
                qreal res = 
                    
                w->period(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for period";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: setPeriod
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::setPeriod
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
    
  // convert js parameter to cpp: period (qreal)
  
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
                QEasingCurve* w = getWrapped();
                
                w->setPeriod(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPeriod";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: overshoot
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::overshoot
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
                QEasingCurve* w = getWrapped();
                qreal res = 
                    
                w->overshoot(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for overshoot";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: setOvershoot
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::setOvershoot
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
    
  // convert js parameter to cpp: overshoot (qreal)
  
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
                QEasingCurve* w = getWrapped();
                
                w->setOvershoot(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOvershoot";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: addCubicBezierSegment
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::addCubicBezierSegment
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QPointF(handler, a2
  )

   && RJSHelper::is_QPointF(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c1 (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: c2 (QPointF)
  
QPointF a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPointF(handler, a2);
        
  // convert js parameter to cpp: endPoint (QPointF)
  
QPointF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QPointF(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEasingCurve* w = getWrapped();
                
                w->addCubicBezierSegment(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addCubicBezierSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: addTCBSegment
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::addTCBSegment
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: nextPoint (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: t (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: c (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: b (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEasingCurve* w = getWrapped();
                
                w->addTCBSegment(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addTCBSegment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: toCubicSpline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::toCubicSpline
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
                QEasingCurve* w = getWrapped();
                QList<QPointF> res = 
                    
                w->toCubicSpline(
                  
                );
              
            // return type: QList<QPointF>

            return RJSHelper::cpp2js_QList_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCubicSpline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::type
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
                QEasingCurve* w = getWrapped();
                QEasingCurve::Type res = 
                    
                w->type(
                  
                );
              
            // return type: QEasingCurve::Type

            return RJSHelper::cpp2js_QEasingCurve_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: setType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::setType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEasingCurve_Type(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QEasingCurve::Type)
  
QEasingCurve::Type a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEasingCurve_Type(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEasingCurve* w = getWrapped();
                
                w->setType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEasingCurve
    // Function: valueForProgress
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEasingCurve_Wrapper::valueForProgress
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: progress (qreal)
  
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
                QEasingCurve* w = getWrapped();
                qreal res = 
                    
                w->valueForProgress(
                  a1_cpp
    
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for valueForProgress";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif

#ifndef QT_NO_DATASTREAM

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  