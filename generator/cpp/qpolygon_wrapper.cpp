
  // Auto generated
  
  // include header:
  //#include "qpolygonwrapper.h"
  //#include "header_cpp.h"
  
    #include "qpolygon_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QPolygon*> QPolygon_Wrapper::basecasters_QPolygon;
    
    // static functions implementation in singleton wrapper:
    
    void QPolygon_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPolygon_Wrapper>("org.qcad", 1, 0, "QPolygon_Wrapper");
        qmlRegisterInterface<QPolygon_Wrapper>("QPolygon_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QPolygon* t = new RJSType_QPolygon();
          global.setProperty("RJSType_QPolygon", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QPolygon::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPolygon_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPolygon_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPolygon_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPolygon_BaseJs", mob);
      
      QString fileName = ":generator/js/QPolygon.js";
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
    QPolygon_Wrapper::QPolygon_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPolygon_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPolygon_Wrapper::QPolygon_Wrapper(RJSApi& h, QPolygon* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPolygon_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPolygon_Wrapper"));
              //setObjectName("QPolygon_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPolygon_Wrapper::~QPolygon_Wrapper() {
            //RDebug::decCounter(QString("QPolygon_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPolygon_Wrapper"));

            //qDebug() << "QPolygon_Wrapper::~QPolygon_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPolygon";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPolygon_Wrapper::initConnections() {

          //setObjectName("QPolygon_Wrapper");

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
  
    // Class: QPolygon
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QPolygon_Wrapper::QPolygon_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPolygon_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPolygon_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QList<QPoint>)
  
QList<QPoint> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QPoint(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPolygon(
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
        RJSHelper::is_QList_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QList<QPoint>)
  
QList<QPoint> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QPoint(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPolygon(
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

        
            wrapped = new QPolygon(
                
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
                  

                  qWarning() << "no matching constructor variant found for QPolygon";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPolygon
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPolygon)
  
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
                QPolygon* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::translate
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
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
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
                QPolygon* w = getWrapped();
                
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (QPoint)
  
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
                QPolygon* w = getWrapped();
                
                w->translate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::translated
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
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
                QPolygon* w = getWrapped();
                QPolygon res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
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
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (QPoint)
  
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
                QPolygon* w = getWrapped();
                QPolygon res = 
                    
                w->translated(
                  a1_cpp
    
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::boundingRect
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
                QPolygon* w = getWrapped();
                QRect res = 
                    
                w->boundingRect(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: point
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::point
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (int)
  
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
                QPolygon* w = getWrapped();
                QPoint res = 
                    
                w->point(
                  a1_cpp
    
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for point";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: setPoint
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::setPoint
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

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: x (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: y (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPolygon* w = getWrapped();
                
                w->setPoint(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QPoint(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: p (QPoint)
  
QPoint a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPoint(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPolygon* w = getWrapped();
                
                w->setPoint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: containsPoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::containsPoint
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
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_Qt_FillRule(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pt (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: fillRule (Qt::FillRule)
  
Qt::FillRule a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_FillRule(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPolygon* w = getWrapped();
                bool res = 
                    
                w->containsPoint(
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

                  qWarning() << "no matching function variant found for containsPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: united
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::united
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPolygon)
  
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
                QPolygon* w = getWrapped();
                QPolygon res = 
                    
                w->united(
                  a1_cpp
    
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for united";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: intersected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::intersected
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPolygon)
  
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
                QPolygon* w = getWrapped();
                QPolygon res = 
                    
                w->intersected(
                  a1_cpp
    
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: subtracted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::subtracted
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPolygon)
  
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
                QPolygon* w = getWrapped();
                QPolygon res = 
                    
                w->subtracted(
                  a1_cpp
    
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subtracted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygon
    // Function: intersects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygon_Wrapper::intersects
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPolygon)
  
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
                QPolygon* w = getWrapped();
                bool res = 
                    
                w->intersects(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersects";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qpolygon_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QPolygonF*> QPolygonF_Wrapper::basecasters_QPolygonF;
    
    // static functions implementation in singleton wrapper:
    
    void QPolygonF_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPolygonF_Wrapper>("org.qcad", 1, 0, "QPolygonF_Wrapper");
        qmlRegisterInterface<QPolygonF_Wrapper>("QPolygonF_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QPolygonF* t = new RJSType_QPolygonF();
          global.setProperty("RJSType_QPolygonF", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QPolygonF::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPolygonF_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPolygonF_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPolygonF_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPolygonF_BaseJs", mob);
      
      QString fileName = ":generator/js/QPolygonF.js";
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
    QPolygonF_Wrapper::QPolygonF_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPolygonF_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPolygonF_Wrapper::QPolygonF_Wrapper(RJSApi& h, QPolygonF* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPolygonF_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPolygonF_Wrapper"));
              //setObjectName("QPolygonF_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPolygonF_Wrapper::~QPolygonF_Wrapper() {
            //RDebug::decCounter(QString("QPolygonF_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPolygonF_Wrapper"));

            //qDebug() << "QPolygonF_Wrapper::~QPolygonF_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPolygonF";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPolygonF_Wrapper::initConnections() {

          //setObjectName("QPolygonF_Wrapper");

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
  
    // Class: QPolygonF
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QPolygonF_Wrapper::QPolygonF_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPolygonF_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPolygonF_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QList<QPointF>)
  
QList<QPointF> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QPointF(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPolygonF(
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
        RJSHelper::is_QList_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QList<QPointF>)
  
QList<QPointF> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QPointF(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPolygonF(
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

        
            wrapped = new QPolygonF(
                
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
                  

                  qWarning() << "no matching constructor variant found for QPolygonF";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPolygonF
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPolygonF)
  
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
                QPolygonF* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::translate
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
                QPolygonF* w = getWrapped();
                
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (QPointF)
  
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
                QPolygonF* w = getWrapped();
                
                w->translate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::translated
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
                QPolygonF* w = getWrapped();
                QPolygonF res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
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
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: offset (QPointF)
  
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
                QPolygonF* w = getWrapped();
                QPolygonF res = 
                    
                w->translated(
                  a1_cpp
    
                );
              
            // return type: QPolygonF

            return RJSHelper::cpp2js_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: toPolygon
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::toPolygon
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
                QPolygonF* w = getWrapped();
                QPolygon res = 
                    
                w->toPolygon(
                  
                );
              
            // return type: QPolygon

            return RJSHelper::cpp2js_QPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toPolygon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: isClosed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::isClosed
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
                QPolygonF* w = getWrapped();
                bool res = 
                    
                w->isClosed(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isClosed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::boundingRect
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
                QPolygonF* w = getWrapped();
                QRectF res = 
                    
                w->boundingRect(
                  
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: containsPoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::containsPoint
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_Qt_FillRule(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pt (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: fillRule (Qt::FillRule)
  
Qt::FillRule a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_FillRule(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPolygonF* w = getWrapped();
                bool res = 
                    
                w->containsPoint(
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

                  qWarning() << "no matching function variant found for containsPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: united
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::united
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPolygonF)
  
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
                QPolygonF* w = getWrapped();
                QPolygonF res = 
                    
                w->united(
                  a1_cpp
    
                );
              
            // return type: QPolygonF

            return RJSHelper::cpp2js_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for united";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: intersected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::intersected
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPolygonF)
  
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
                QPolygonF* w = getWrapped();
                QPolygonF res = 
                    
                w->intersected(
                  a1_cpp
    
                );
              
            // return type: QPolygonF

            return RJSHelper::cpp2js_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: subtracted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::subtracted
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPolygonF)
  
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
                QPolygonF* w = getWrapped();
                QPolygonF res = 
                    
                w->subtracted(
                  a1_cpp
    
                );
              
            // return type: QPolygonF

            return RJSHelper::cpp2js_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subtracted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPolygonF
    // Function: intersects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPolygonF_Wrapper::intersects
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPolygonF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPolygonF)
  
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
                QPolygonF* w = getWrapped();
                bool res = 
                    
                w->intersects(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersects";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qpolygon_wrapper.cpp"
  
