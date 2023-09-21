
  // Auto generated
  
  // include header:
  //#include "qpainterwrapper.h"
  //#include "header_cpp.h"
  
    #include "qpainter_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#ifndef QT_NO_PICTURE

#endif

#if !defined(QT_NO_RAWFONT)

#endif

    void QPainter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPainter_Wrapper>("org.qcad", 1, 0, "QPainter_Wrapper");
        qmlRegisterInterface<QPainter_Wrapper>("QPainter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPainter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPainter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPainter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPainter_BaseJs", mob);
      
      QString fileName = ":generated/js/QPainter.js";
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
    QPainter_Wrapper::QPainter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPainter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPainter_Wrapper::QPainter_Wrapper(RJSApi& h, QPainter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPainter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPainter_Wrapper"));
              //setObjectName("QPainter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPainter_Wrapper::~QPainter_Wrapper() {
            //RDebug::decCounter(QString("QPainter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPainter_Wrapper"));

            //qDebug() << "QPainter_Wrapper::~QPainter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QPainter";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPainter_Wrapper::initConnections() {

          //setObjectName("QPainter_Wrapper");

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
  
    // Class: QPainter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QPainter_Wrapper::QPainter_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPainter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPainter_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPainter(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QPainter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_PICTURE

#endif

#if !defined(QT_NO_RAWFONT)

#endif


    // non-static functions:
    
    // Class: QPainter
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::device
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
                QPainter* w = getWrapped();
                QPaintDevice* res = 
                    
                w->device(
                  
                );
              
            // return type: QPaintDevice*

            return RJSHelper::cpp2js_QPaintDevice(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for device";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: begin
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::begin
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPaintDevice_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPaintDevice)
  

          // pointer:
          QPaintDevice*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPaintDevice_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                bool res = 
                    
                w->begin(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for begin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: end
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::end
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
                QPainter* w = getWrapped();
                bool res = 
                    
                w->end(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for end";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: isActive
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::isActive
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
                QPainter* w = getWrapped();
                bool res = 
                    
                w->isActive(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isActive";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setCompositionMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setCompositionMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_CompositionMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QPainter::CompositionMode)
  
QPainter::CompositionMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_CompositionMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->setCompositionMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCompositionMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: compositionMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::compositionMode
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
                QPainter* w = getWrapped();
                QPainter::CompositionMode res = 
                    
                w->compositionMode(
                  
                );
              
            // return type: QPainter::CompositionMode

            return RJSHelper::cpp2js_QPainter_CompositionMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for compositionMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: font
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::font
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
                QPainter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QFont* res =
                    &
                w->font(
                  
                );
              
            // return type: const QFont&

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for font";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setFont
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setFont
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->setFont(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFont";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: fontInfo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::fontInfo
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
                QPainter* w = getWrapped();
                QFontInfo res = 
                    
                w->fontInfo(
                  
                );
              
            // return type: QFontInfo

            return RJSHelper::cpp2js_QFontInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fontInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setPen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setPen
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
                QPainter* w = getWrapped();
                
                w->setPen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
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
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->setPen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_Qt_PenStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (Qt::PenStyle)
  
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
                QPainter* w = getWrapped();
                
                w->setPen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: pen
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::pen
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
                QPainter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QPen* res =
                    &
                w->pen(
                  
                );
              
            // return type: const QPen&

            return RJSHelper::cpp2js_QPen(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setBrush
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setBrush
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
                QPainter* w = getWrapped();
                
                w->setBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_Qt_BrushStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (Qt::BrushStyle)
  
Qt::BrushStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->setBrush(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: brush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::brush
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
                QPainter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->brush(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setBackgroundMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setBackgroundMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_BGMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (Qt::BGMode)
  
Qt::BGMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_BGMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->setBackgroundMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackgroundMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: backgroundMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::backgroundMode
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
                QPainter* w = getWrapped();
                Qt::BGMode res = 
                    
                w->backgroundMode(
                  
                );
              
            // return type: Qt::BGMode

            return RJSHelper::cpp2js_Qt_BGMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for backgroundMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: brushOrigin
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::brushOrigin
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
                QPainter* w = getWrapped();
                QPoint res = 
                    
                w->brushOrigin(
                  
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brushOrigin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setBrushOrigin
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setBrushOrigin
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
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
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
                QPainter* w = getWrapped();
                
                w->setBrushOrigin(
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
    
  // convert js parameter to cpp:  (QPoint)
  
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
                QPainter* w = getWrapped();
                
                w->setBrushOrigin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPointF)
  
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
                QPainter* w = getWrapped();
                
                w->setBrushOrigin(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrushOrigin";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setBackground
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setBackground
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
    
  // convert js parameter to cpp: bg (QBrush)
  
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
                QPainter* w = getWrapped();
                
                w->setBackground(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackground";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: background
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::background
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
                QPainter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->background(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for background";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: opacity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::opacity
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
                QPainter* w = getWrapped();
                qreal res = 
                    
                w->opacity(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for opacity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setOpacity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setOpacity
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
    
  // convert js parameter to cpp: opacity (qreal)
  
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
                QPainter* w = getWrapped();
                
                w->setOpacity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOpacity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: clipRegion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::clipRegion
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
                QPainter* w = getWrapped();
                QRegion res = 
                    
                w->clipRegion(
                  
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clipRegion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: clipPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::clipPath
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
                QPainter* w = getWrapped();
                QPainterPath res = 
                    
                w->clipPath(
                  
                );
              
            // return type: QPainterPath

            return RJSHelper::cpp2js_QPainterPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clipPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setClipRect
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setClipRect
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_Qt_ClipOperation(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: op (Qt::ClipOperation)
  
Qt::ClipOperation a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = Qt::ReplaceClip;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_Qt_ClipOperation(handler, a5);
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
                QPainter* w = getWrapped();
                
                w->setClipRect(
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
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_Qt_ClipOperation(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: op (Qt::ClipOperation)
  
Qt::ClipOperation a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ReplaceClip;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ClipOperation(handler, a2);
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
                QPainter* w = getWrapped();
                
                w->setClipRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_Qt_ClipOperation(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: op (Qt::ClipOperation)
  
Qt::ClipOperation a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ReplaceClip;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ClipOperation(handler, a2);
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
                QPainter* w = getWrapped();
                
                w->setClipRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClipRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setClipRegion
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setClipRegion
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

   && RJSHelper::is_Qt_ClipOperation(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        
  // convert js parameter to cpp: op (Qt::ClipOperation)
  
Qt::ClipOperation a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ReplaceClip;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ClipOperation(handler, a2);
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
                QPainter* w = getWrapped();
                
                w->setClipRegion(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClipRegion";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setClipPath
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setClipPath
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainterPath(handler, a1
  )

   && RJSHelper::is_Qt_ClipOperation(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainterPath(handler, a1);
        
  // convert js parameter to cpp: op (Qt::ClipOperation)
  
Qt::ClipOperation a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::ReplaceClip;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ClipOperation(handler, a2);
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
                QPainter* w = getWrapped();
                
                w->setClipPath(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClipPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setClipping
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setClipping
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
                QPainter* w = getWrapped();
                
                w->setClipping(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClipping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: hasClipping
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::hasClipping
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
                QPainter* w = getWrapped();
                bool res = 
                    
                w->hasClipping(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasClipping";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: clipBoundingRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::clipBoundingRect
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
                QPainter* w = getWrapped();
                QRectF res = 
                    
                w->clipBoundingRect(
                  
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clipBoundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: save
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::save
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
                QPainter* w = getWrapped();
                
                w->save(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for save";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: restore
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::restore
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
                QPainter* w = getWrapped();
                
                w->restore(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for restore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setTransform
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setTransform
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTransform(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: transform (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        
  // convert js parameter to cpp: combine (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
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
                QPainter* w = getWrapped();
                
                w->setTransform(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: transform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::transform
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
                QPainter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QTransform* res =
                    &
                w->transform(
                  
                );
              
            // return type: const QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: deviceTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::deviceTransform
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
                QPainter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QTransform* res =
                    &
                w->deviceTransform(
                  
                );
              
            // return type: const QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for deviceTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: resetTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::resetTransform
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
                QPainter* w = getWrapped();
                
                w->resetTransform(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setWorldTransform
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setWorldTransform
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTransform(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: matrix (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        
  // convert js parameter to cpp: combine (bool)
  
bool a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = false;
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
                QPainter* w = getWrapped();
                
                w->setWorldTransform(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWorldTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: worldTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::worldTransform
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
                QPainter* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QTransform* res =
                    &
                w->worldTransform(
                  
                );
              
            // return type: const QTransform&

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for worldTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: combinedTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::combinedTransform
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
                QPainter* w = getWrapped();
                QTransform res = 
                    
                w->combinedTransform(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for combinedTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setWorldMatrixEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setWorldMatrixEnabled
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
    
  // convert js parameter to cpp: enabled (bool)
  
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
                QPainter* w = getWrapped();
                
                w->setWorldMatrixEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWorldMatrixEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: worldMatrixEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::worldMatrixEnabled
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
                QPainter* w = getWrapped();
                bool res = 
                    
                w->worldMatrixEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for worldMatrixEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: scale
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::scale
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
                QPainter* w = getWrapped();
                
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
            
    // Class: QPainter
    // Function: shear
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::shear
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
                QPainter* w = getWrapped();
                
                w->shear(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for shear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: rotate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::rotate
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
    
  // convert js parameter to cpp: a (qreal)
  
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
                QPainter* w = getWrapped();
                
                w->rotate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rotate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::translate
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
                QPainter* w = getWrapped();
                
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
                QPainter* w = getWrapped();
                
                w->translate(
                  a1_cpp
    
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
                QPainter* w = getWrapped();
                
                w->translate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: window
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::window
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
                QPainter* w = getWrapped();
                QRect res = 
                    
                w->window(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for window";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setWindow
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setWindow
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->setWindow(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: window (QRect)
  
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
                QPainter* w = getWrapped();
                
                w->setWindow(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: viewport
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::viewport
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
                QPainter* w = getWrapped();
                QRect res = 
                    
                w->viewport(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for viewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setViewport
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setViewport
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->setViewport(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: viewport (QRect)
  
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
                QPainter* w = getWrapped();
                
                w->setViewport(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setViewport";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setViewTransformEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setViewTransformEnabled
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
                QPainter* w = getWrapped();
                
                w->setViewTransformEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setViewTransformEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: viewTransformEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::viewTransformEnabled
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
                QPainter* w = getWrapped();
                bool res = 
                    
                w->viewTransformEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for viewTransformEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: strokePath
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::strokePath
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainterPath(handler, a1
  )

   && RJSHelper::is_QPen(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainterPath(handler, a1);
        
  // convert js parameter to cpp: pen (QPen)
  
QPen a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPen(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->strokePath(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for strokePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: fillPath
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::fillPath
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainterPath(handler, a1
  )

   && RJSHelper::is_QBrush(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QPainterPath)
  
QPainterPath a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainterPath(handler, a1);
        
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QBrush(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillPath(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for fillPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawPath
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainterPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QPainterPath)
  
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
                QPainter* w = getWrapped();
                
                w->drawPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawPoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawPoint
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
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
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
                QPainter* w = getWrapped();
                
                w->drawPoint(
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
    
  // convert js parameter to cpp: pt (QPointF)
  
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
                QPainter* w = getWrapped();
                
                w->drawPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

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
                QPainter* w = getWrapped();
                
                w->drawPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawPoints
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawPoints
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
    
  // convert js parameter to cpp: points (QPolygonF)
  
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
                QPainter* w = getWrapped();
                
                w->drawPoints(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: points (QPolygon)
  
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
                QPainter* w = getWrapped();
                
                w->drawPoints(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawPoints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawLine
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawLine
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y1 (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: x2 (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: y2 (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawLine(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QPoint(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p1 (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: p2 (QPoint)
  
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
                QPainter* w = getWrapped();
                
                w->drawLine(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QPointF(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p1 (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: p2 (QPointF)
  
QPointF a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPointF(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawLine(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QLineF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line (QLineF)
  
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
                QPainter* w = getWrapped();
                
                w->drawLine(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: line (QLine)
  
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
                QPainter* w = getWrapped();
                
                w->drawLine(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawLines
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawLines
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QLineF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lines (QList<QLineF>)
  
QList<QLineF> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QLineF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawLines(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QList_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pointPairs (QList<QPointF>)
  
QList<QPointF> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawLines(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QList_QLine(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: lines (QList<QLine>)
  
QList<QLine> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QLine(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawLines(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QList_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pointPairs (QList<QPoint>)
  
QList<QPoint> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawLines(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawLines";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawRect
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawRect
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x1 (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y1 (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
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
                QPainter* w = getWrapped();
                
                w->drawRect(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRect)
  
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
                QPainter* w = getWrapped();
                
                w->drawRect(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawRects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawRects
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rectangles (QList<QRectF>)
  
QList<QRectF> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QRectF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawRects(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QList_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rectangles (QList<QRect>)
  
QList<QRect> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawRects(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawRects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawEllipse
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawEllipse
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawEllipse(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: rx (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: ry (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawEllipse(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: rx (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: ry (int)
  
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
                QPainter* w = getWrapped();
                
                w->drawEllipse(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRectF)
  
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
                QPainter* w = getWrapped();
                
                w->drawEllipse(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

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
                QPainter* w = getWrapped();
                
                w->drawEllipse(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawEllipse";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawPolyline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawPolyline
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
    
  // convert js parameter to cpp: polyline (QPolygonF)
  
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
                QPainter* w = getWrapped();
                
                w->drawPolyline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: polygon (QPolygon)
  
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
                QPainter* w = getWrapped();
                
                w->drawPolyline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawPolyline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawPolygon
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawPolygon
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

   && RJSHelper::is_Qt_FillRule(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: polygon (QPolygonF)
  
QPolygonF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygonF(handler, a1);
        
  // convert js parameter to cpp: fillRule (Qt::FillRule)
  
Qt::FillRule a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::OddEvenFill;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_FillRule(handler, a2);
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
                QPainter* w = getWrapped();
                
                w->drawPolygon(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

   && RJSHelper::is_Qt_FillRule(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: polygon (QPolygon)
  
QPolygon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygon(handler, a1);
        
  // convert js parameter to cpp: fillRule (Qt::FillRule)
  
Qt::FillRule a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::OddEvenFill;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_FillRule(handler, a2);
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
                QPainter* w = getWrapped();
                
                w->drawPolygon(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawPolygon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawConvexPolygon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawConvexPolygon
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
    
  // convert js parameter to cpp: polygon (QPolygonF)
  
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
                QPainter* w = getWrapped();
                
                w->drawConvexPolygon(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: polygon (QPolygon)
  
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
                QPainter* w = getWrapped();
                
                w->drawConvexPolygon(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawConvexPolygon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawArc
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawArc
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

   && RJSHelper::is_int(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: a (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: alen (int)
  
int a6_cpp;

      a6_cpp = RJSHelper::js2cpp_int(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawArc(
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
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: a (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: alen (int)
  
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
                QPainter* w = getWrapped();
                
                w->drawArc(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: a (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: alen (int)
  
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
                QPainter* w = getWrapped();
                
                w->drawArc(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawArc";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawPie
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawPie
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

   && RJSHelper::is_int(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: a (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: alen (int)
  
int a6_cpp;

      a6_cpp = RJSHelper::js2cpp_int(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPie(
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
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: a (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: alen (int)
  
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
                QPainter* w = getWrapped();
                
                w->drawPie(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: a (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: alen (int)
  
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
                QPainter* w = getWrapped();
                
                w->drawPie(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawPie";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawChord
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawChord
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

   && RJSHelper::is_int(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: a (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: alen (int)
  
int a6_cpp;

      a6_cpp = RJSHelper::js2cpp_int(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawChord(
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
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: a (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: alen (int)
  
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
                QPainter* w = getWrapped();
                
                w->drawChord(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: a (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: alen (int)
  
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
                QPainter* w = getWrapped();
                
                w->drawChord(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawChord";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawRoundedRect
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawRoundedRect
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_qreal(handler, a5
  )

   && RJSHelper::is_qreal(handler, a6
  )

   && RJSHelper::is_Qt_SizeMode(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: xRadius (qreal)
  
qreal a5_cpp;

      a5_cpp = RJSHelper::js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: yRadius (qreal)
  
qreal a6_cpp;

      a6_cpp = RJSHelper::js2cpp_qreal(handler, a6);
        
  // convert js parameter to cpp: mode (Qt::SizeMode)
  
Qt::SizeMode a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = Qt::AbsoluteSize;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_Qt_SizeMode(handler, a7);
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
                QPainter* w = getWrapped();
                
                w->drawRoundedRect(
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
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_Qt_SizeMode(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: xRadius (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: yRadius (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: mode (Qt::SizeMode)
  
Qt::SizeMode a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::AbsoluteSize;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_Qt_SizeMode(handler, a4);
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
                QPainter* w = getWrapped();
                
                w->drawRoundedRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_Qt_SizeMode(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: xRadius (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: yRadius (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: mode (Qt::SizeMode)
  
Qt::SizeMode a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::AbsoluteSize;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_Qt_SizeMode(handler, a4);
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
                QPainter* w = getWrapped();
                
                w->drawRoundedRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawRoundedRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawTiledPixmap
    // Source: 
    // Static: false
    // Parameters: 7
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawTiledPixmap
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_QPixmap(handler, a5
  )

   && RJSHelper::is_int(handler, a6
    , true
  
  )

   && RJSHelper::is_int(handler, a7
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp:  (QPixmap)
  
QPixmap a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QPixmap(handler, a5);
        
  // convert js parameter to cpp: sx (int)
  
int a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = 0;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_int(handler, a6);
          }
        
  // convert js parameter to cpp: sy (int)
  
int a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = 0;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_int(handler, a7);
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
                QPainter* w = getWrapped();
                
                w->drawTiledPixmap(
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
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

   && RJSHelper::is_QPointF(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        
  // convert js parameter to cpp: offset (QPointF)
  
QPointF a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QPointF();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QPointF(handler, a3);
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
                QPainter* w = getWrapped();
                
                w->drawTiledPixmap(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

   && RJSHelper::is_QPoint(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp:  (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        
  // convert js parameter to cpp:  (QPoint)
  
QPoint a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QPoint();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QPoint(handler, a3);
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
                QPainter* w = getWrapped();
                
                w->drawTiledPixmap(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawTiledPixmap";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_PICTURE

    // Class: QPainter
    // Function: drawPicture
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawPicture
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

   && RJSHelper::is_QPicture(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: picture (QPicture)
  
QPicture a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QPicture(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPicture(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QPicture(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: picture (QPicture)
  
QPicture a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPicture(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPicture(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QPicture(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: picture (QPicture)
  
QPicture a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPicture(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPicture(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawPicture";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QPainter
    // Function: drawPixmap
    // Source: 
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawPixmap
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_QPixmap(handler, a5
  )

   && RJSHelper::is_int(handler, a6
  )

   && RJSHelper::is_int(handler, a7
  )

   && RJSHelper::is_int(handler, a8
  )

   && RJSHelper::is_int(handler, a9
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QPixmap(handler, a5);
        
  // convert js parameter to cpp: sx (int)
  
int a6_cpp;

      a6_cpp = RJSHelper::js2cpp_int(handler, a6);
        
  // convert js parameter to cpp: sy (int)
  
int a7_cpp;

      a7_cpp = RJSHelper::js2cpp_int(handler, a7);
        
  // convert js parameter to cpp: sw (int)
  
int a8_cpp;

      a8_cpp = RJSHelper::js2cpp_int(handler, a8);
        
  // convert js parameter to cpp: sh (int)
  
int a9_cpp;

      a9_cpp = RJSHelper::js2cpp_int(handler, a9);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
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

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QPixmap(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

   && RJSHelper::is_int(handler, a6
  )

   && RJSHelper::is_int(handler, a7
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QPixmap(handler, a3);
        
  // convert js parameter to cpp: sx (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: sy (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: sw (int)
  
int a6_cpp;

      a6_cpp = RJSHelper::js2cpp_int(handler, a6);
        
  // convert js parameter to cpp: sh (int)
  
int a7_cpp;

      a7_cpp = RJSHelper::js2cpp_int(handler, a7);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_QPixmap(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QPixmap(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
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
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

   && RJSHelper::is_QRectF(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: targetRect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        
  // convert js parameter to cpp: sourceRect (QRectF)
  
QRectF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRectF(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

   && RJSHelper::is_QRect(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: targetRect (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        
  // convert js parameter to cpp: sourceRect (QRect)
  
QRect a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRect(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

   && RJSHelper::is_QRectF(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        
  // convert js parameter to cpp: sr (QRectF)
  
QRectF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRectF(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

   && RJSHelper::is_QRect(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        
  // convert js parameter to cpp: sr (QRect)
  
QRect a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRect(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
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

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QPixmap(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QPixmap(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: pm (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawPixmap(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawPixmap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: drawImage
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawImage
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
  a8
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QImage(handler, a3
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

   && RJSHelper::is_int(handler, a5
    , true
  
  )

   && RJSHelper::is_int(handler, a6
    , true
  
  )

   && RJSHelper::is_int(handler, a7
    , true
  
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a8
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QImage(handler, a3);
        
  // convert js parameter to cpp: sx (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        
  // convert js parameter to cpp: sy (int)
  
int a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 0;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_int(handler, a5);
          }
        
  // convert js parameter to cpp: sw (int)
  
int a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = -1;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_int(handler, a6);
          }
        
  // convert js parameter to cpp: sh (int)
  
int a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = -1;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_int(handler, a7);
          }
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a8_cpp;

      
          if (a8.isUndefined()) {
            a8_cpp = Qt::AutoColor;
          }
          else {
            a8_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a8);
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
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_QImage(handler, a2
  )

   && RJSHelper::is_QRectF(handler, a3
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: targetRect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QImage(handler, a2);
        
  // convert js parameter to cpp: sourceRect (QRectF)
  
QRectF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRectF(handler, a3);
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::AutoColor;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a4);
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
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_QImage(handler, a2
  )

   && RJSHelper::is_QRect(handler, a3
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: targetRect (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QImage(handler, a2);
        
  // convert js parameter to cpp: sourceRect (QRect)
  
QRect a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRect(handler, a3);
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::AutoColor;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a4);
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
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QImage(handler, a2
  )

   && RJSHelper::is_QRectF(handler, a3
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QImage(handler, a2);
        
  // convert js parameter to cpp: sr (QRectF)
  
QRectF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRectF(handler, a3);
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::AutoColor;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a4);
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
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QImage(handler, a2
  )

   && RJSHelper::is_QRect(handler, a3
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QImage(handler, a2);
        
  // convert js parameter to cpp: sr (QRect)
  
QRect a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QRect(handler, a3);
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::AutoColor;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a4);
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
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_QImage(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QImage(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_QImage(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QImage(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QImage(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QImage(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QImage(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: image (QImage)
  
QImage a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QImage(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawImage(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setLayoutDirection
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setLayoutDirection
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_LayoutDirection(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: direction (Qt::LayoutDirection)
  
Qt::LayoutDirection a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_LayoutDirection(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->setLayoutDirection(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLayoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: layoutDirection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::layoutDirection
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
                QPainter* w = getWrapped();
                Qt::LayoutDirection res = 
                    
                w->layoutDirection(
                  
                );
              
            // return type: Qt::LayoutDirection

            return RJSHelper::cpp2js_Qt_LayoutDirection(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layoutDirection";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if !defined(QT_NO_RAWFONT)

#endif

    // Class: QPainter
    // Function: drawText
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::drawText
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

   && RJSHelper::is_QString(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: flags (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: text (QString)
  
QString a6_cpp;

      a6_cpp = RJSHelper::js2cpp_QString(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawText(
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: str (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: tf (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: justificationPadding (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawText(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: s (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawText(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: s (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawText(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        
  // convert js parameter to cpp: s (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawText(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: text (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->drawText(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for drawText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::boundingRect
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

   && RJSHelper::is_QString(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: flags (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: text (QString)
  
QString a6_cpp;

      a6_cpp = RJSHelper::js2cpp_QString(handler, a6);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                QRect res = 
                    
                w->boundingRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
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

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: flags (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: text (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                QRectF res = 
                    
                w->boundingRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QRectF

            return RJSHelper::cpp2js_QRectF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: flags (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: text (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                QRect res = 
                    
                w->boundingRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
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

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: text (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                QRectF res = 
                    
                w->boundingRect(
                  a1_cpp
    , a2_cpp
    
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
            
    // Class: QPainter
    // Function: fillRect
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::fillRect
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_QBrush(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp:  (QBrush)
  
QBrush a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QBrush(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_QColor(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: color (QColor)
  
QColor a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QColor(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_Qt_GlobalColor(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: c (Qt::GlobalColor)
  
Qt::GlobalColor a5_cpp;

      a5_cpp = RJSHelper::js2cpp_Qt_GlobalColor(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_Qt_BrushStyle(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: style (Qt::BrushStyle)
  
Qt::BrushStyle a5_cpp;

      a5_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
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
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_QBrush(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp:  (QBrush)
  
QBrush a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QBrush(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_QBrush(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp:  (QBrush)
  
QBrush a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QBrush(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: color (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: color (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_Qt_GlobalColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: c (Qt::GlobalColor)
  
Qt::GlobalColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_GlobalColor(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_Qt_GlobalColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: c (Qt::GlobalColor)
  
Qt::GlobalColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_GlobalColor(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_Qt_BrushStyle(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: style (Qt::BrushStyle)
  
Qt::BrushStyle a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRectF(handler, a1
  )

   && RJSHelper::is_Qt_BrushStyle(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRectF)
  
QRectF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRectF(handler, a1);
        
  // convert js parameter to cpp: style (Qt::BrushStyle)
  
Qt::BrushStyle a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->fillRect(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for fillRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: eraseRect
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::eraseRect
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                
                w->eraseRect(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
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
                QPainter* w = getWrapped();
                
                w->eraseRect(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

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
                QPainter* w = getWrapped();
                
                w->eraseRect(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for eraseRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setRenderHint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setRenderHint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_RenderHint(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (QPainter::RenderHint)
  
QPainter::RenderHint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_RenderHint(handler, a1);
        
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
                QPainter* w = getWrapped();
                
                w->setRenderHint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRenderHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: setRenderHints
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::setRenderHints
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_RenderHints(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hints (QPainter::RenderHints)
  
QPainter::RenderHints a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_RenderHints(handler, a1);
        
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
                QPainter* w = getWrapped();
                
                w->setRenderHints(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRenderHints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: renderHints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::renderHints
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
                QPainter* w = getWrapped();
                QPainter::RenderHints res = 
                    
                w->renderHints(
                  
                );
              
            // return type: QPainter::RenderHints

            return RJSHelper::cpp2js_QPainter_RenderHints(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for renderHints";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: testRenderHint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::testRenderHint
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_RenderHint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hint (QPainter::RenderHint)
  
QPainter::RenderHint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_RenderHint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPainter* w = getWrapped();
                bool res = 
                    
                w->testRenderHint(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for testRenderHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: paintEngine
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::paintEngine
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
                QPainter* w = getWrapped();
                QPaintEngine* res = 
                    
                w->paintEngine(
                  
                );
              
            // return type: QPaintEngine*

            return RJSHelper::cpp2js_QPaintEngine(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for paintEngine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: beginNativePainting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::beginNativePainting
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
                QPainter* w = getWrapped();
                
                w->beginNativePainting(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for beginNativePainting";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPainter
    // Function: endNativePainting
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPainter_Wrapper::endNativePainting
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
                QPainter* w = getWrapped();
                
                w->endNativePainting(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for endNativePainting";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  