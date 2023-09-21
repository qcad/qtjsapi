
  // Auto generated
  
  // include header:
  //#include "qpaintdevicewrapper.h"
  //#include "header_cpp.h"
  
    #include "qpaintdevice_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QPaintDevice
    // Function: devicePixelRatioFScale
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_WrapperSingleton::devicePixelRatioFScale
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
            
    void QPaintDevice_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPaintDevice_Wrapper>("org.qcad", 1, 0, "QPaintDevice_Wrapper");
        qmlRegisterInterface<QPaintDevice_Wrapper>("QPaintDevice_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPaintDevice_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPaintDevice_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPaintDevice_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPaintDevice_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QPaintDevice_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QPaintDevice_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QPaintDevice_WrapperSingleton * s = new QPaintDevice_WrapperSingleton(handler);
        engine->globalObject().setProperty("QPaintDevice_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QPaintDevice.js";
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
    QPaintDevice_Wrapper::QPaintDevice_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPaintDevice_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPaintDevice_Wrapper::QPaintDevice_Wrapper(RJSApi& h, QPaintDevice* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPaintDevice_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPaintDevice_Wrapper"));
              //setObjectName("QPaintDevice_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPaintDevice_Wrapper::~QPaintDevice_Wrapper() {
            //RDebug::decCounter(QString("QPaintDevice_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPaintDevice_Wrapper"));

            //qDebug() << "QPaintDevice_Wrapper::~QPaintDevice_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QPaintDevice";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPaintDevice_Wrapper::initConnections() {

          //setObjectName("QPaintDevice_Wrapper");

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
    
    // Class: QPaintDevice
    // Function: devType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::devType
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->devType(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: paintingActive
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::paintingActive
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                bool res = 
                    
                w->paintingActive(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: paintEngine
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::paintEngine
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                QPaintEngine* res = 
                    
                w->paintEngine(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::width
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->width(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::height
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->height(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: widthMM
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::widthMM
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->widthMM(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: heightMM
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::heightMM
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->heightMM(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: logicalDpiX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::logicalDpiX
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->logicalDpiX(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: logicalDpiY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::logicalDpiY
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->logicalDpiY(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: physicalDpiX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::physicalDpiX
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->physicalDpiX(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: physicalDpiY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::physicalDpiY
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->physicalDpiY(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: devicePixelRatio
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::devicePixelRatio
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatio(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: devicePixelRatioF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::devicePixelRatioF
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatioF(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: colorCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::colorCount
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->colorCount(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QPaintDevice
    // Function: depth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPaintDevice_Wrapper::depth
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPaintDevice* w = getWrapped();
                int res = 
                    
                w->depth(
                  
                );
              
                //setRecFlag(false);
              
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  