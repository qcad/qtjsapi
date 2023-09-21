
  // Auto generated
  
  // include header:
  //#include "qpainterpathwrapper.h"
  //#include "header_cpp.h"
  
    #include "qpainterpath_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QPainterPath_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPainterPath_Wrapper>("org.qcad", 1, 0, "QPainterPath_Wrapper");
        qmlRegisterInterface<QPainterPath_Wrapper>("QPainterPath_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPainterPath_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPainterPath_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPainterPath_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPainterPath_BaseJs", mob);
      
      QString fileName = ":generated/js/QPainterPath.js";
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
    QPainterPath_Wrapper::QPainterPath_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPainterPath_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPainterPath_Wrapper::QPainterPath_Wrapper(RJSApi& h, QPainterPath* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPainterPath_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPainterPath_Wrapper"));
              //setObjectName("QPainterPath_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPainterPath_Wrapper::~QPainterPath_Wrapper() {
            //RDebug::decCounter(QString("QPainterPath_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPainterPath_Wrapper"));

            //qDebug() << "QPainterPath_Wrapper::~QPainterPath_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPainterPath";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPainterPath_Wrapper::initConnections() {

          //setObjectName("QPainterPath_Wrapper");

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
  
    // Class: QPainterPath
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QPainterPath_Wrapper::QPainterPath_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPainterPath_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPainterPath_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPainterPath(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QPainterPath";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPainterPath
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::clear
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
                QPainterPath* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: reserve
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::reserve
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
    
  // convert js parameter to cpp: size (int)
  
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
                QPainterPath* w = getWrapped();
                
                w->reserve(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reserve";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: capacity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::capacity
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
                QPainterPath* w = getWrapped();
                int res = 
                    
                w->capacity(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capacity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: closeSubpath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::closeSubpath
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
                QPainterPath* w = getWrapped();
                
                w->closeSubpath(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for closeSubpath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: moveTo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::moveTo
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
                QPainterPath* w = getWrapped();
                
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
                QPainterPath* w = getWrapped();
                
                w->moveTo(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for moveTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: lineTo
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::lineTo
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
                QPainterPath* w = getWrapped();
                
                w->lineTo(
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
                QPainterPath* w = getWrapped();
                
                w->lineTo(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for lineTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: arcMoveTo
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::arcMoveTo
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
  a5
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

   && is_qreal(handler, a5
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
        
  // convert js parameter to cpp: angle (qreal)
  
qreal a5_cpp;

      a5_cpp = js2cpp_qreal(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->arcMoveTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

   && is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: angle (qreal)
  
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
                QPainterPath* w = getWrapped();
                
                w->arcMoveTo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for arcMoveTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: arcTo
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::arcTo
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
  a6
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

   && is_qreal(handler, a5
  )

   && is_qreal(handler, a6
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
        
  // convert js parameter to cpp: startAngle (qreal)
  
qreal a5_cpp;

      a5_cpp = js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: arcLength (qreal)
  
qreal a6_cpp;

      a6_cpp = js2cpp_qreal(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->arcTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: startAngle (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: arcLength (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->arcTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for arcTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: cubicTo
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::cubicTo
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
  a6
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

   && is_qreal(handler, a5
  )

   && is_qreal(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ctrlPt1x (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: ctrlPt1y (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: ctrlPt2x (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: ctrlPt2y (qreal)
  
qreal a4_cpp;

      a4_cpp = js2cpp_qreal(handler, a4);
        
  // convert js parameter to cpp: endPtx (qreal)
  
qreal a5_cpp;

      a5_cpp = js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: endPty (qreal)
  
qreal a6_cpp;

      a6_cpp = js2cpp_qreal(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->cubicTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

   && is_QPointF(handler, a2
  )

   && is_QPointF(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ctrlPt1 (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: ctrlPt2 (QPointF)
  
QPointF a2_cpp;

      a2_cpp = js2cpp_QPointF(handler, a2);
        
  // convert js parameter to cpp: endPt (QPointF)
  
QPointF a3_cpp;

      a3_cpp = js2cpp_QPointF(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->cubicTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for cubicTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: quadTo
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::quadTo
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
    
  // convert js parameter to cpp: ctrlPtx (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: ctrlPty (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: endPtx (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: endPty (qreal)
  
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
                QPainterPath* w = getWrapped();
                
                w->quadTo(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

   && is_QPointF(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ctrlPt (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: endPt (QPointF)
  
QPointF a2_cpp;

      a2_cpp = js2cpp_QPointF(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->quadTo(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for quadTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: currentPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::currentPosition
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
                QPainterPath* w = getWrapped();
                QPointF res = 
                    
                w->currentPosition(
                  
                );
              
            // return type: QPointF

            return cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: addRect
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::addRect
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
                QPainterPath* w = getWrapped();
                
                w->addRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
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
                QPainterPath* w = getWrapped();
                
                w->addRect(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: addEllipse
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::addEllipse
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
                QPainterPath* w = getWrapped();
                
                w->addEllipse(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: rx (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: ry (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->addEllipse(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
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
                QPainterPath* w = getWrapped();
                
                w->addEllipse(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addEllipse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: addPolygon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::addPolygon
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPolygonF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: polygon (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = js2cpp_QPolygonF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->addPolygon(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPolygon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: addText
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::addText
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

   && is_QFont(handler, a3
  )

   && is_QString(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: f (QFont)
  
QFont a3_cpp;

      a3_cpp = js2cpp_QFont(handler, a3);
        
  // convert js parameter to cpp: text (QString)
  
QString a4_cpp;

      a4_cpp = js2cpp_QString(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->addText(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

   && is_QFont(handler, a2
  )

   && is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QPointF)
  
QPointF a1_cpp;

      a1_cpp = js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: f (QFont)
  
QFont a2_cpp;

      a2_cpp = js2cpp_QFont(handler, a2);
        
  // convert js parameter to cpp: text (QString)
  
QString a3_cpp;

      a3_cpp = js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->addText(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: addPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::addPath
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->addPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: addRegion
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::addRegion
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: region (QRegion)
  
QRegion a1_cpp;

      a1_cpp = js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->addRegion(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addRegion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: addRoundedRect
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::addRoundedRect
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
  a7
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

   && is_qreal(handler, a5
  )

   && is_qreal(handler, a6
  )

   && is_Qt_SizeMode(handler, a7
    , true
  
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
        
  // convert js parameter to cpp: xRadius (qreal)
  
qreal a5_cpp;

      a5_cpp = js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: yRadius (qreal)
  
qreal a6_cpp;

      a6_cpp = js2cpp_qreal(handler, a6);
        
  // convert js parameter to cpp: mode (Qt::SizeMode)
  
Qt::SizeMode a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = Qt::AbsoluteSize;
          }
          else {
            a7_cpp = js2cpp_Qt_SizeMode(handler, a7);
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
                QPainterPath* w = getWrapped();
                
                w->addRoundedRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QRectF(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

   && is_Qt_SizeMode(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: xRadius (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: yRadius (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: mode (Qt::SizeMode)
  
Qt::SizeMode a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::AbsoluteSize;
          }
          else {
            a4_cpp = js2cpp_Qt_SizeMode(handler, a4);
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
                QPainterPath* w = getWrapped();
                
                w->addRoundedRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addRoundedRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: connectPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::connectPath
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->connectPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for connectPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::contains
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pt (QPointF)
  
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
                QPainterPath* w = getWrapped();
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
        is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
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
                QPainterPath* w = getWrapped();
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
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
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
            
    // Class: QPainterPath
    // Function: intersects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::intersects
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
    
  // convert js parameter to cpp: rect (QRectF)
  
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
                QPainterPath* w = getWrapped();
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

      // check parameter types:
      if (
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
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
            
    // Class: QPainterPath
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::translate
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
                QPainterPath* w = getWrapped();
                
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
    
  // convert js parameter to cpp: offset (QPointF)
  
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
                QPainterPath* w = getWrapped();
                
                w->translate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::translated
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
                QPainterPath* w = getWrapped();
                QPainterPath res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QPainterPath

            return cpp2js_QPainterPath(
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
    
  // convert js parameter to cpp: offset (QPointF)
  
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
                QPainterPath* w = getWrapped();
                QPainterPath res = 
                    
                w->translated(
                  a1_cpp
    
                );
              
            // return type: QPainterPath

            return cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::boundingRect
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
                QPainterPath* w = getWrapped();
                QRectF res = 
                    
                w->boundingRect(
                  
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: controlPointRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::controlPointRect
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
                QPainterPath* w = getWrapped();
                QRectF res = 
                    
                w->controlPointRect(
                  
                );
              
            // return type: QRectF

            return cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for controlPointRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: fillRule
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::fillRule
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
                QPainterPath* w = getWrapped();
                Qt::FillRule res = 
                    
                w->fillRule(
                  
                );
              
            // return type: Qt::FillRule

            return cpp2js_Qt_FillRule(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fillRule";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: setFillRule
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::setFillRule
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_FillRule(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fillRule (Qt::FillRule)
  
Qt::FillRule a1_cpp;

      a1_cpp = js2cpp_Qt_FillRule(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->setFillRule(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFillRule";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::isEmpty
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
                QPainterPath* w = getWrapped();
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
            
    // Class: QPainterPath
    // Function: toReversed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::toReversed
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
                QPainterPath* w = getWrapped();
                QPainterPath res = 
                    
                w->toReversed(
                  
                );
              
            // return type: QPainterPath

            return cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toReversed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: toSubpathPolygons
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::toSubpathPolygons
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QTransform(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: matrix (QTransform)
  
QTransform a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QTransform();
          }
          else {
            a1_cpp = js2cpp_QTransform(handler, a1);
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
                QPainterPath* w = getWrapped();
                QList<QPolygonF> res = 
                    
                w->toSubpathPolygons(
                  a1_cpp
    
                );
              
            // return type: QList<QPolygonF>

            return cpp2js_QList_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toSubpathPolygons";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: toFillPolygons
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::toFillPolygons
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QTransform(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: matrix (QTransform)
  
QTransform a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QTransform();
          }
          else {
            a1_cpp = js2cpp_QTransform(handler, a1);
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
                QPainterPath* w = getWrapped();
                QList<QPolygonF> res = 
                    
                w->toFillPolygons(
                  a1_cpp
    
                );
              
            // return type: QList<QPolygonF>

            return cpp2js_QList_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFillPolygons";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: toFillPolygon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::toFillPolygon
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QTransform(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: matrix (QTransform)
  
QTransform a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QTransform();
          }
          else {
            a1_cpp = js2cpp_QTransform(handler, a1);
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
                QPainterPath* w = getWrapped();
                QPolygonF res = 
                    
                w->toFillPolygon(
                  a1_cpp
    
                );
              
            // return type: QPolygonF

            return cpp2js_QPolygonF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFillPolygon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: elementCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::elementCount
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
                QPainterPath* w = getWrapped();
                int res = 
                    
                w->elementCount(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for elementCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: setElementPositionAt
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::setElementPositionAt
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
        is_int(handler, a1
  )

   && is_qreal(handler, a2
  )

   && is_qreal(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: x (qreal)
  
qreal a2_cpp;

      a2_cpp = js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: y (qreal)
  
qreal a3_cpp;

      a3_cpp = js2cpp_qreal(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                
                w->setElementPositionAt(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setElementPositionAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::length
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
                QPainterPath* w = getWrapped();
                qreal res = 
                    
                w->length(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for length";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: percentAtLength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::percentAtLength
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (qreal)
  
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
                QPainterPath* w = getWrapped();
                qreal res = 
                    
                w->percentAtLength(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for percentAtLength";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: pointAtPercent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::pointAtPercent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (qreal)
  
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
                QPainterPath* w = getWrapped();
                QPointF res = 
                    
                w->pointAtPercent(
                  a1_cpp
    
                );
              
            // return type: QPointF

            return cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pointAtPercent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: angleAtPercent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::angleAtPercent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (qreal)
  
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
                QPainterPath* w = getWrapped();
                qreal res = 
                    
                w->angleAtPercent(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for angleAtPercent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: slopeAtPercent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::slopeAtPercent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: t (qreal)
  
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
                QPainterPath* w = getWrapped();
                qreal res = 
                    
                w->slopeAtPercent(
                  a1_cpp
    
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for slopeAtPercent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: united
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::united
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                QPainterPath res = 
                    
                w->united(
                  a1_cpp
    
                );
              
            // return type: QPainterPath

            return cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for united";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: intersected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::intersected
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                QPainterPath res = 
                    
                w->intersected(
                  a1_cpp
    
                );
              
            // return type: QPainterPath

            return cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: subtracted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::subtracted
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPath* w = getWrapped();
                QPainterPath res = 
                    
                w->subtracted(
                  a1_cpp
    
                );
              
            // return type: QPainterPath

            return cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subtracted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPath
    // Function: simplified
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPath_Wrapper::simplified
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
                QPainterPath* w = getWrapped();
                QPainterPath res = 
                    
                w->simplified(
                  
                );
              
            // return type: QPainterPath

            return cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for simplified";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qpainterpath_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QPainterPathStroker_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPainterPathStroker_Wrapper>("org.qcad", 1, 0, "QPainterPathStroker_Wrapper");
        qmlRegisterInterface<QPainterPathStroker_Wrapper>("QPainterPathStroker_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPainterPathStroker_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPainterPathStroker_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPainterPathStroker_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPainterPathStroker_BaseJs", mob);
      
      QString fileName = ":generated/js/QPainterPathStroker.js";
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
    QPainterPathStroker_Wrapper::QPainterPathStroker_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPainterPathStroker_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPainterPathStroker_Wrapper::QPainterPathStroker_Wrapper(RJSApi& h, QPainterPathStroker* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPainterPathStroker_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPainterPathStroker_Wrapper"));
              //setObjectName("QPainterPathStroker_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPainterPathStroker_Wrapper::~QPainterPathStroker_Wrapper() {
            //RDebug::decCounter(QString("QPainterPathStroker_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPainterPathStroker_Wrapper"));

            //qDebug() << "QPainterPathStroker_Wrapper::~QPainterPathStroker_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPainterPathStroker";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPainterPathStroker_Wrapper::initConnections() {

          //setObjectName("QPainterPathStroker_Wrapper");

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
  
    // Class: QPainterPathStroker
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QPainterPathStroker_Wrapper::QPainterPathStroker_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPainterPathStroker_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPainterPathStroker_Wrapper"));
                
      // check parameter types:
      if (
        is_QPen(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pen (QPen)
  
QPen a1_cpp;

      a1_cpp = js2cpp_QPen(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPainterPathStroker(
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

        
            wrapped = new QPainterPathStroker(
                
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
                  

                  qWarning() << "no matching constructor variant found for QPainterPathStroker";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPainterPathStroker
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::setWidth
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
    
  // convert js parameter to cpp: width (qreal)
  
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
                QPainterPathStroker* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::width
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
                QPainterPathStroker* w = getWrapped();
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
            
    // Class: QPainterPathStroker
    // Function: setCapStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::setCapStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_PenCapStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (Qt::PenCapStyle)
  
Qt::PenCapStyle a1_cpp;

      a1_cpp = js2cpp_Qt_PenCapStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPathStroker* w = getWrapped();
                
                w->setCapStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCapStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: capStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::capStyle
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
                QPainterPathStroker* w = getWrapped();
                Qt::PenCapStyle res = 
                    
                w->capStyle(
                  
                );
              
            // return type: Qt::PenCapStyle

            return cpp2js_Qt_PenCapStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: setJoinStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::setJoinStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_PenJoinStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (Qt::PenJoinStyle)
  
Qt::PenJoinStyle a1_cpp;

      a1_cpp = js2cpp_Qt_PenJoinStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPathStroker* w = getWrapped();
                
                w->setJoinStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setJoinStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: joinStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::joinStyle
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
                QPainterPathStroker* w = getWrapped();
                Qt::PenJoinStyle res = 
                    
                w->joinStyle(
                  
                );
              
            // return type: Qt::PenJoinStyle

            return cpp2js_Qt_PenJoinStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for joinStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: setMiterLimit
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::setMiterLimit
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
    
  // convert js parameter to cpp: length (qreal)
  
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
                QPainterPathStroker* w = getWrapped();
                
                w->setMiterLimit(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMiterLimit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: miterLimit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::miterLimit
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
                QPainterPathStroker* w = getWrapped();
                qreal res = 
                    
                w->miterLimit(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for miterLimit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: setCurveThreshold
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::setCurveThreshold
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
    
  // convert js parameter to cpp: threshold (qreal)
  
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
                QPainterPathStroker* w = getWrapped();
                
                w->setCurveThreshold(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurveThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: curveThreshold
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::curveThreshold
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
                QPainterPathStroker* w = getWrapped();
                qreal res = 
                    
                w->curveThreshold(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for curveThreshold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: setDashPattern
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::setDashPattern
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_Qt_PenStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::PenStyle)
  
Qt::PenStyle a1_cpp;

      a1_cpp = js2cpp_Qt_PenStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPathStroker* w = getWrapped();
                
                w->setDashPattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QList_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dashPattern (QList<qreal>)
  
QList<qreal> a1_cpp;

      a1_cpp = js2cpp_QList_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPathStroker* w = getWrapped();
                
                w->setDashPattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDashPattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: dashPattern
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::dashPattern
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
                QPainterPathStroker* w = getWrapped();
                QList<qreal> res = 
                    
                w->dashPattern(
                  
                );
              
            // return type: QList<qreal>

            return cpp2js_QList_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dashPattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: setDashOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::setDashOffset
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
    
  // convert js parameter to cpp: offset (qreal)
  
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
                QPainterPathStroker* w = getWrapped();
                
                w->setDashOffset(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDashOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: dashOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::dashOffset
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
                QPainterPathStroker* w = getWrapped();
                qreal res = 
                    
                w->dashOffset(
                  
                );
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dashOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainterPathStroker
    // Function: createStroke
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainterPathStroker_Wrapper::createStroke
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = js2cpp_QPainterPath(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainterPathStroker* w = getWrapped();
                QPainterPath res = 
                    
                w->createStroke(
                  a1_cpp
    
                );
              
            // return type: QPainterPath

            return cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createStroke";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  