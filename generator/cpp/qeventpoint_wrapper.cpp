
  // Auto generated
  
  // include header:
  //#include "qeventpointwrapper.h"
  //#include "header_cpp.h"
  
    #include "qeventpoint_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QEventPoint*> QEventPoint_Wrapper::basecasters_QEventPoint;
    
    // static functions implementation in singleton wrapper:
    
    void QEventPoint_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QEventPoint_Wrapper>("org.qcad", 1, 0, "QEventPoint_Wrapper");
        qmlRegisterInterface<QEventPoint_Wrapper>("QEventPoint_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QEventPoint* t = new RJSType_QEventPoint();
          global.setProperty("RJSType_QEventPoint", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QEventPoint::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QEventPoint_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QEventPoint_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QEventPoint_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QEventPoint_BaseJs", mob);
      
      QString fileName = ":generator/js/QEventPoint.js";
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
    QEventPoint_Wrapper::QEventPoint_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QEventPoint_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QEventPoint_Wrapper::QEventPoint_Wrapper(RJSApi& h, QEventPoint* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QEventPoint_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QEventPoint_Wrapper"));
              //setObjectName("QEventPoint_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QEventPoint_Wrapper::~QEventPoint_Wrapper() {
            //RDebug::decCounter(QString("QEventPoint_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QEventPoint_Wrapper"));

            //qDebug() << "QEventPoint_Wrapper::~QEventPoint_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QEventPoint";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QEventPoint_Wrapper::initConnections() {

          //setObjectName("QEventPoint_Wrapper");

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
  
    // Class: QEventPoint
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QEventPoint_Wrapper::QEventPoint_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QEventPoint_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QEventPoint_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QEventPoint_State(handler, a2
  )

   && RJSHelper::is_QPointF(handler, a3
  )

   && RJSHelper::is_QPointF(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pointId (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: state (QEventPoint::State)
  
QEventPoint::State a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QEventPoint_State(handler, a2);
        
  // convert js parameter to cpp: scenePosition (QPointF)
  
QPointF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QPointF(handler, a3);
        
  // convert js parameter to cpp: globalPosition (QPointF)
  
QPointF a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QPointF(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QEventPoint(
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
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: id (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = -1;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QEventPoint(
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
        RJSHelper::is_QEventPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEventPoint)
  
QEventPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventPoint(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QEventPoint(
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
        RJSHelper::is_QEventPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEventPoint)
  
QEventPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventPoint(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QEventPoint(
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
   && a3.isUndefined()
   && a4.isUndefined()
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QEventPoint";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QEventPoint
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QEventPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QEventPoint)
  
QEventPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QEventPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QEventPoint* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::position
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->position(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for position";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: pressPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::pressPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->pressPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pressPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: grabPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::grabPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->grabPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for grabPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: lastPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::lastPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->lastPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lastPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: scenePosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::scenePosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->scenePosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scenePosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: scenePressPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::scenePressPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->scenePressPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scenePressPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: sceneGrabPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::sceneGrabPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->sceneGrabPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sceneGrabPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: sceneLastPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::sceneLastPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->sceneLastPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sceneLastPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: globalPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::globalPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->globalPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for globalPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: globalPressPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::globalPressPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->globalPressPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for globalPressPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: globalGrabPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::globalGrabPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->globalGrabPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for globalGrabPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: globalLastPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::globalLastPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->globalLastPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for globalLastPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: normalizedPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::normalizedPosition
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
                QEventPoint* w = getWrapped();
                QPointF res = 
                    
                w->normalizedPosition(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for normalizedPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: state
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::state
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
                QEventPoint* w = getWrapped();
                QEventPoint::State res = 
                    
                w->state(
                  
                );
              
            // return type: QEventPoint::State

            return RJSHelper::cpp2js_QEventPoint_State(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for state";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: id
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::id
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
                QEventPoint* w = getWrapped();
                int res = 
                    
                w->id(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for id";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: timestamp
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::timestamp
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
                QEventPoint* w = getWrapped();
                ulong res = 
                    
                w->timestamp(
                  
                );
              
            // return type: ulong

            return RJSHelper::cpp2js_ulong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for timestamp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: lastTimestamp
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::lastTimestamp
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
                QEventPoint* w = getWrapped();
                ulong res = 
                    
                w->lastTimestamp(
                  
                );
              
            // return type: ulong

            return RJSHelper::cpp2js_ulong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lastTimestamp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: pressTimestamp
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::pressTimestamp
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
                QEventPoint* w = getWrapped();
                ulong res = 
                    
                w->pressTimestamp(
                  
                );
              
            // return type: ulong

            return RJSHelper::cpp2js_ulong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pressTimestamp";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: timeHeld
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::timeHeld
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
                QEventPoint* w = getWrapped();
                qreal res = 
                    
                w->timeHeld(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for timeHeld";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: pressure
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::pressure
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
                QEventPoint* w = getWrapped();
                qreal res = 
                    
                w->pressure(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pressure";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: rotation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::rotation
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
                QEventPoint* w = getWrapped();
                qreal res = 
                    
                w->rotation(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rotation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: ellipseDiameters
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::ellipseDiameters
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
                QEventPoint* w = getWrapped();
                QSizeF res = 
                    
                w->ellipseDiameters(
                  
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for ellipseDiameters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: isAccepted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::isAccepted
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
                QEventPoint* w = getWrapped();
                bool res = 
                    
                w->isAccepted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QEventPoint
    // Function: setAccepted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QEventPoint_Wrapper::setAccepted
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: accepted (bool)
  
bool a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = true;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_bool(handler, a1);
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
                QEventPoint* w = getWrapped();
                
                w->setAccepted(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAccepted";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qeventpoint_wrapper.cpp"
  
