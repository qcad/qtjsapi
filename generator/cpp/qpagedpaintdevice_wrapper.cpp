
  // Auto generated
  
  // include header:
  //#include "qpagedpaintdevicewrapper.h"
  //#include "header_cpp.h"
  
    #include "qpagedpaintdevice_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QPagedPaintDevice*> QPagedPaintDevice_Wrapper::basecasters_QPagedPaintDevice;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QPagedPaintDevice
    // Function: devicePixelRatioFScale
    // Source: QPaintDevice
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_WrapperSingleton::devicePixelRatioFScale
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            qreal res = 
                
                // call static member function:
                QPaintDevice::devicePixelRatioFScale(
              
            );
          
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devicePixelRatioFScale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QPagedPaintDevice_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPagedPaintDevice_Wrapper>("org.qcad", 1, 0, "QPagedPaintDevice_Wrapper");
        qmlRegisterInterface<QPagedPaintDevice_Wrapper>("QPagedPaintDevice_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QPagedPaintDevice* t = new RJSType_QPagedPaintDevice();
          global.setProperty("RJSType_QPagedPaintDevice", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QPagedPaintDevice::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPagedPaintDevice_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPagedPaintDevice_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPagedPaintDevice_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPagedPaintDevice_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QPagedPaintDevice_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QPagedPaintDevice_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QPagedPaintDevice_WrapperSingleton * s = new QPagedPaintDevice_WrapperSingleton(handler);
        engine->globalObject().setProperty("QPagedPaintDevice_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QPagedPaintDevice.js";
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
    QPagedPaintDevice_Wrapper::QPagedPaintDevice_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPagedPaintDevice_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPagedPaintDevice_Wrapper::QPagedPaintDevice_Wrapper(RJSApi& h, QPagedPaintDevice* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPagedPaintDevice_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPagedPaintDevice_Wrapper"));
              //setObjectName("QPagedPaintDevice_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPagedPaintDevice_Wrapper::~QPagedPaintDevice_Wrapper() {
            //RDebug::decCounter(QString("QPagedPaintDevice_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPagedPaintDevice_Wrapper"));

            //qDebug() << "QPagedPaintDevice_Wrapper::~QPagedPaintDevice_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPagedPaintDevice";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPagedPaintDevice_Wrapper::initConnections() {

          //setObjectName("QPagedPaintDevice_Wrapper");

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
  

    // non-static functions:
    
    // Class: QPagedPaintDevice
    // Function: devType
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::devType
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->devType(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: paintingActive
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::paintingActive
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
                QPagedPaintDevice* w = getWrapped();
                bool res = 
                    
                w->paintingActive(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for paintingActive";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: paintEngine
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::paintEngine
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
                QPagedPaintDevice* w = getWrapped();
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
            
    // Class: QPagedPaintDevice
    // Function: width
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::width
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
                QPagedPaintDevice* w = getWrapped();
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
            
    // Class: QPagedPaintDevice
    // Function: height
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::height
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
                QPagedPaintDevice* w = getWrapped();
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
            
    // Class: QPagedPaintDevice
    // Function: widthMM
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::widthMM
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->widthMM(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for widthMM";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: heightMM
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::heightMM
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->heightMM(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for heightMM";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: logicalDpiX
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::logicalDpiX
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->logicalDpiX(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for logicalDpiX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: logicalDpiY
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::logicalDpiY
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->logicalDpiY(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for logicalDpiY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: physicalDpiX
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::physicalDpiX
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->physicalDpiX(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for physicalDpiX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: physicalDpiY
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::physicalDpiY
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->physicalDpiY(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for physicalDpiY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: devicePixelRatio
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::devicePixelRatio
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
                QPagedPaintDevice* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatio(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devicePixelRatio";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: devicePixelRatioF
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::devicePixelRatioF
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
                QPagedPaintDevice* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatioF(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devicePixelRatioF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: colorCount
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::colorCount
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->colorCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: depth
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::depth
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
                QPagedPaintDevice* w = getWrapped();
                int res = 
                    
                w->depth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for depth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: newPage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::newPage
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
                QPagedPaintDevice* w = getWrapped();
                bool res = 
                    
                w->newPage(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for newPage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: setPageLayout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::setPageLayout
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageLayout (QPageLayout)
  
QPageLayout a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPagedPaintDevice* w = getWrapped();
                bool res = 
                    
                w->setPageLayout(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setPageLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: setPageSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::setPageSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pageSize (QPageSize)
  
QPageSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPagedPaintDevice* w = getWrapped();
                bool res = 
                    
                w->setPageSize(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setPageSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: setPageOrientation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::setPageOrientation
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageLayout_Orientation(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orientation (QPageLayout::Orientation)
  
QPageLayout::Orientation a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageLayout_Orientation(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPagedPaintDevice* w = getWrapped();
                bool res = 
                    
                w->setPageOrientation(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setPageOrientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: setPageMargins
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::setPageMargins
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMarginsF(handler, a1
  )

   && RJSHelper::is_QPageLayout_Unit(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: margins (QMarginsF)
  
QMarginsF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMarginsF(handler, a1);
        
  // convert js parameter to cpp: units (QPageLayout::Unit)
  
QPageLayout::Unit a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QPageLayout::Millimeter;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QPageLayout_Unit(handler, a2);
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
                QPagedPaintDevice* w = getWrapped();
                bool res = 
                    
                w->setPageMargins(
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

                  qWarning() << "no matching function variant found for setPageMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: pageLayout
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::pageLayout
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
                QPagedPaintDevice* w = getWrapped();
                QPageLayout res = 
                    
                w->pageLayout(
                  
                );
              
            // return type: QPageLayout

            return RJSHelper::cpp2js_QPageLayout(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pageLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: setPageRanges
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::setPageRanges
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPageRanges(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ranges (QPageRanges)
  
QPageRanges a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPageRanges(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPagedPaintDevice* w = getWrapped();
                
                w->setPageRanges(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPageRanges";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPagedPaintDevice
    // Function: pageRanges
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPagedPaintDevice_Wrapper::pageRanges
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
                QPagedPaintDevice* w = getWrapped();
                QPageRanges res = 
                    
                w->pageRanges(
                  
                );
              
            // return type: QPageRanges

            return RJSHelper::cpp2js_QPageRanges(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pageRanges";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qpagedpaintdevice_wrapper.cpp"
  
