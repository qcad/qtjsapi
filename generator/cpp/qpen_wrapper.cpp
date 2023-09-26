
  // Auto generated
  
  // include header:
  //#include "qpenwrapper.h"
  //#include "header_cpp.h"
  
    #include "qpen_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QPen*> QPen_Wrapper::basecasters_QPen;
    
    // static functions implementation in singleton wrapper:
    
    void QPen_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPen_Wrapper>("org.qcad", 1, 0, "QPen_Wrapper");
        qmlRegisterInterface<QPen_Wrapper>("QPen_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QPen* t = new RJSType_QPen();
          global.setProperty("RJSType_QPen", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QPen::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPen_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPen_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPen_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPen_BaseJs", mob);
      
      QString fileName = ":generator/js/QPen.js";
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
    QPen_Wrapper::QPen_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPen_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPen_Wrapper::QPen_Wrapper(RJSApi& h, QPen* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPen_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPen_Wrapper"));
              //setObjectName("QPen_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPen_Wrapper::~QPen_Wrapper() {
            //RDebug::decCounter(QString("QPen_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPen_Wrapper"));

            //qDebug() << "QPen_Wrapper::~QPen_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPen";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPen_Wrapper::initConnections() {

          //setObjectName("QPen_Wrapper");

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
  
    // Class: QPen
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1
QPen_Wrapper::QPen_Wrapper
                
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
  a5
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPen_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPen_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QBrush(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_Qt_PenStyle(handler, a3
    , true
  
  )

   && RJSHelper::is_Qt_PenCapStyle(handler, a4
    , true
  
  )

   && RJSHelper::is_Qt_PenJoinStyle(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBrush(handler, a1);
        
  // convert js parameter to cpp: width (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: s (Qt::PenStyle)
  
Qt::PenStyle a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::SolidLine;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_PenStyle(handler, a3);
          }
        
  // convert js parameter to cpp: c (Qt::PenCapStyle)
  
Qt::PenCapStyle a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::SquareCap;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_Qt_PenCapStyle(handler, a4);
          }
        
  // convert js parameter to cpp: j (Qt::PenJoinStyle)
  
Qt::PenJoinStyle a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = Qt::BevelJoin;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_Qt_PenJoinStyle(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPen(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
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
        RJSHelper::is_Qt_PenStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::PenStyle)
  
Qt::PenStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_PenStyle(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPen(
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
        RJSHelper::is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPen(
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
        RJSHelper::is_QPen(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pen (QPen)
  
QPen a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPen(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPen(
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
        RJSHelper::is_QPen(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPen)
  
QPen a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPen(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPen(
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

        
            wrapped = new QPen(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QPen";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPen
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPen(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPen)
  
QPen a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPen(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPen* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: style
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::style
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
                QPen* w = getWrapped();
                Qt::PenStyle res = 
                    
                w->style(
                  
                );
              
            // return type: Qt::PenStyle

            return RJSHelper::cpp2js_Qt_PenStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for style";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_PenStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::PenStyle)
  
Qt::PenStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_PenStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPen* w = getWrapped();
                
                w->setStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: dashPattern
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::dashPattern
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
                QPen* w = getWrapped();
                QList<qreal> res = 
                    
                w->dashPattern(
                  
                );
              
            // return type: QList<qreal>

            return RJSHelper::cpp2js_QList_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dashPattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setDashPattern
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setDashPattern
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pattern (QList<qreal>)
  
QList<qreal> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPen* w = getWrapped();
                
                w->setDashPattern(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDashPattern";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: dashOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::dashOffset
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
                QPen* w = getWrapped();
                qreal res = 
                    
                w->dashOffset(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dashOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setDashOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setDashOffset
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
    
  // convert js parameter to cpp: doffset (qreal)
  
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
                QPen* w = getWrapped();
                
                w->setDashOffset(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDashOffset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: miterLimit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::miterLimit
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
                QPen* w = getWrapped();
                qreal res = 
                    
                w->miterLimit(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for miterLimit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setMiterLimit
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setMiterLimit
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
    
  // convert js parameter to cpp: limit (qreal)
  
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
                QPen* w = getWrapped();
                
                w->setMiterLimit(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMiterLimit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: widthF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::widthF
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
                QPen* w = getWrapped();
                qreal res = 
                    
                w->widthF(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for widthF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setWidthF
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setWidthF
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
    
  // convert js parameter to cpp: width (qreal)
  
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
                QPen* w = getWrapped();
                
                w->setWidthF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidthF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::width
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
                QPen* w = getWrapped();
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
            
    // Class: QPen
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setWidth
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
    
  // convert js parameter to cpp: width (int)
  
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
                QPen* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: color
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::color
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
                QPen* w = getWrapped();
                QColor res = 
                    
                w->color(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for color";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPen* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: brush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::brush
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
                QPen* w = getWrapped();
                QBrush res = 
                    
                w->brush(
                  
                );
              
            // return type: QBrush

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setBrush
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPen* w = getWrapped();
                
                w->setBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: isSolid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::isSolid
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
                QPen* w = getWrapped();
                bool res = 
                    
                w->isSolid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSolid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: capStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::capStyle
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
                QPen* w = getWrapped();
                Qt::PenCapStyle res = 
                    
                w->capStyle(
                  
                );
              
            // return type: Qt::PenCapStyle

            return RJSHelper::cpp2js_Qt_PenCapStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setCapStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setCapStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_PenCapStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pcs (Qt::PenCapStyle)
  
Qt::PenCapStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_PenCapStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPen* w = getWrapped();
                
                w->setCapStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCapStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: joinStyle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::joinStyle
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
                QPen* w = getWrapped();
                Qt::PenJoinStyle res = 
                    
                w->joinStyle(
                  
                );
              
            // return type: Qt::PenJoinStyle

            return RJSHelper::cpp2js_Qt_PenJoinStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for joinStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setJoinStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setJoinStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_PenJoinStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pcs (Qt::PenJoinStyle)
  
Qt::PenJoinStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_PenJoinStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPen* w = getWrapped();
                
                w->setJoinStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setJoinStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: isCosmetic
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::isCosmetic
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
                QPen* w = getWrapped();
                bool res = 
                    
                w->isCosmetic(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCosmetic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: setCosmetic
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::setCosmetic
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
    
  // convert js parameter to cpp: cosmetic (bool)
  
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
                QPen* w = getWrapped();
                
                w->setCosmetic(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCosmetic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPen
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPen_Wrapper::isDetached
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
                QPen* w = getWrapped();
                bool res = 
                    
                w->isDetached(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDetached";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  