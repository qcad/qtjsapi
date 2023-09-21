
  // Auto generated
  
  // include header:
  //#include "qpixmapwrapper.h"
  //#include "header_cpp.h"
  
    #include "qpixmap_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QPixmap
    // Function: devicePixelRatioFScale
    // Source: QPaintDevice
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_WrapperSingleton::devicePixelRatioFScale
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
            
#ifndef QT_NO_IMAGEFORMAT_XPM

#endif

    // Class: QPixmap
    // Function: defaultDepth
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_WrapperSingleton::defaultDepth
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QPixmap::defaultDepth(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultDepth";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_IMAGE_HEURISTIC_MASK

#endif

    // Class: QPixmap
    // Function: trueMatrix
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPixmap_WrapperSingleton::trueMatrix
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
        RJSHelper::is_QTransform(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: m (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        
  // convert js parameter to cpp: w (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: h (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QTransform res = 
                
                // call static member function:
                QPixmap::trueMatrix(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trueMatrix";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: fromImage
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPixmap_WrapperSingleton::fromImage
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QImage(handler, a1
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: image (QImage)
  
QImage a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImage(handler, a1);
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::AutoColor;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPixmap res = 
                
                // call static member function:
                QPixmap::fromImage(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QImage(handler, a1
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: image (QImage)
  
QImage a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImage(handler, a1);
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::AutoColor;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPixmap res = 
                
                // call static member function:
                QPixmap::fromImage(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: fromImageReader
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPixmap_WrapperSingleton::fromImageReader
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QImageReader_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: imageReader (QImageReader)
  

          // pointer:
          QImageReader*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImageReader_ptr(handler, a1);
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::AutoColor;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPixmap res = 
                
                // call static member function:
                QPixmap::fromImageReader(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromImageReader";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if !defined(QT_NO_DATASTREAM)

#endif

    void QPixmap_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPixmap_Wrapper>("org.qcad", 1, 0, "QPixmap_Wrapper");
        qmlRegisterInterface<QPixmap_Wrapper>("QPixmap_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPixmap_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPixmap_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPixmap_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPixmap_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QPixmap_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QPixmap_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QPixmap_WrapperSingleton * s = new QPixmap_WrapperSingleton(handler);
        engine->globalObject().setProperty("QPixmap_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QPixmap.js";
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
    QPixmap_Wrapper::QPixmap_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPixmap_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPixmap_Wrapper::QPixmap_Wrapper(RJSApi& h, QPixmap* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPixmap_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPixmap_Wrapper"));
              //setObjectName("QPixmap_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPixmap_Wrapper::~QPixmap_Wrapper() {
            //RDebug::decCounter(QString("QPixmap_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPixmap_Wrapper"));

            //qDebug() << "QPixmap_Wrapper::~QPixmap_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPixmap";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPixmap_Wrapper::initConnections() {

          //setObjectName("QPixmap_Wrapper");

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
  
    // Class: QPixmap
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QPixmap_Wrapper::QPixmap_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPixmap_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPixmap_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::AutoColor;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a3);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPixmap(
                a1_cpp
    , a2_cpp
    , a3_cpp
    
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
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPixmap(
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
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPixmap(
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
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPixmap(
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
        RJSHelper::is_QPixmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QPixmap)
  
QPixmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPixmap(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPixmap(
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
        RJSHelper::is_QPixmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPixmap)
  
QPixmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPixmap(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPixmap(
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

        
            wrapped = new QPixmap(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QPixmap";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_IMAGEFORMAT_XPM

#endif

#ifndef QT_NO_IMAGE_HEURISTIC_MASK

#endif

#if !defined(QT_NO_DATASTREAM)

#endif


    // non-static functions:
    
    // Class: QPixmap
    // Function: paintingActive
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::paintingActive
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: widthMM
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::widthMM
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: heightMM
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::heightMM
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: logicalDpiX
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::logicalDpiX
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: logicalDpiY
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::logicalDpiY
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: physicalDpiX
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::physicalDpiX
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: physicalDpiY
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::physicalDpiY
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: devicePixelRatioF
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::devicePixelRatioF
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: colorCount
    // Source: QPaintDevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::colorCount
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
                QPixmap* w = getWrapped();
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
            
#ifndef QT_NO_IMAGEFORMAT_XPM

#endif

    // Class: QPixmap
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPixmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPixmap)
  
QPixmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPixmap(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPixmap* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::isNull
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: devType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::devType
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::width
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::height
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::size
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
                QPixmap* w = getWrapped();
                QSize res = 
                    
                w->size(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: rect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::rect
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
                QPixmap* w = getWrapped();
                QRect res = 
                    
                w->rect(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: depth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::depth
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: fill
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::fill
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fillColor (QColor)
  
QColor a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = Qt::white;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
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
                QPixmap* w = getWrapped();
                
                w->fill(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for fill";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: mask
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::mask
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
                QPixmap* w = getWrapped();
                QBitmap res = 
                    
                w->mask(
                  
                );
              
            // return type: QBitmap

            return RJSHelper::cpp2js_QBitmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: setMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::setMask
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QBitmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QBitmap)
  
QBitmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBitmap(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPixmap* w = getWrapped();
                
                w->setMask(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: devicePixelRatio
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::devicePixelRatio
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: setDevicePixelRatio
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::setDevicePixelRatio
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
    
  // convert js parameter to cpp: scaleFactor (qreal)
  
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
                QPixmap* w = getWrapped();
                
                w->setDevicePixelRatio(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDevicePixelRatio";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: deviceIndependentSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::deviceIndependentSize
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
                QPixmap* w = getWrapped();
                QSizeF res = 
                    
                w->deviceIndependentSize(
                  
                );
              
            // return type: QSizeF

            return RJSHelper::cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for deviceIndependentSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: hasAlpha
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::hasAlpha
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->hasAlpha(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasAlpha";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: hasAlphaChannel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::hasAlphaChannel
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->hasAlphaChannel(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasAlphaChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_IMAGE_HEURISTIC_MASK

    // Class: QPixmap
    // Function: createHeuristicMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::createHeuristicMask
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_bool(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: clipTight (bool)
  
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
                QPixmap* w = getWrapped();
                QBitmap res = 
                    
                w->createHeuristicMask(
                  a1_cpp
    
                );
              
            // return type: QBitmap

            return RJSHelper::cpp2js_QBitmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createHeuristicMask";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QPixmap
    // Function: createMaskFromColor
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::createMaskFromColor
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
        RJSHelper::is_QColor(handler, a1
  )

   && RJSHelper::is_Qt_MaskMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: maskColor (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::MaskMode)
  
Qt::MaskMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::MaskInColor;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_MaskMode(handler, a2);
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
                QPixmap* w = getWrapped();
                QBitmap res = 
                    
                w->createMaskFromColor(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QBitmap

            return RJSHelper::cpp2js_QBitmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createMaskFromColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: scaled
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::scaled
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a3
    , true
  
  )

   && RJSHelper::is_Qt_TransformationMode(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: aspectMode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::IgnoreAspectRatio;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a3);
          }
        
  // convert js parameter to cpp: mode (Qt::TransformationMode)
  
Qt::TransformationMode a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::FastTransformation;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_Qt_TransformationMode(handler, a4);
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
                QPixmap* w = getWrapped();
                QPixmap res = 
                    
                w->scaled(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

   && RJSHelper::is_Qt_AspectRatioMode(handler, a2
    , true
  
  )

   && RJSHelper::is_Qt_TransformationMode(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        
  // convert js parameter to cpp: aspectMode (Qt::AspectRatioMode)
  
Qt::AspectRatioMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::IgnoreAspectRatio;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_AspectRatioMode(handler, a2);
          }
        
  // convert js parameter to cpp: mode (Qt::TransformationMode)
  
Qt::TransformationMode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::FastTransformation;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_TransformationMode(handler, a3);
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
                QPixmap* w = getWrapped();
                QPixmap res = 
                    
                w->scaled(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: scaledToWidth
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::scaledToWidth
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

   && RJSHelper::is_Qt_TransformationMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::TransformationMode)
  
Qt::TransformationMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FastTransformation;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_TransformationMode(handler, a2);
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
                QPixmap* w = getWrapped();
                QPixmap res = 
                    
                w->scaledToWidth(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaledToWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: scaledToHeight
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::scaledToHeight
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

   && RJSHelper::is_Qt_TransformationMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::TransformationMode)
  
Qt::TransformationMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FastTransformation;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_TransformationMode(handler, a2);
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
                QPixmap* w = getWrapped();
                QPixmap res = 
                    
                w->scaledToHeight(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaledToHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: transformed
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::transformed
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
        RJSHelper::is_QTransform(handler, a1
  )

   && RJSHelper::is_Qt_TransformationMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        
  // convert js parameter to cpp: mode (Qt::TransformationMode)
  
Qt::TransformationMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FastTransformation;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_TransformationMode(handler, a2);
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
                QPixmap* w = getWrapped();
                QPixmap res = 
                    
                w->transformed(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transformed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: toImage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::toImage
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
                QPixmap* w = getWrapped();
                QImage res = 
                    
                w->toImage(
                  
                );
              
            // return type: QImage

            return RJSHelper::cpp2js_QImage(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: load
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::load
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::AutoColor;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a3);
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->load(
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

                  qWarning() << "no matching function variant found for load";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: loadFromData
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::loadFromData
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
        RJSHelper::is_QByteArray(handler, a1
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: format (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::AutoColor;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a3);
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->loadFromData(
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

                  qWarning() << "no matching function variant found for loadFromData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: save
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::save
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp: quality (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->save(
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

      // check parameter types:
      if (
        RJSHelper::is_QIODevice_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_char_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODevice_ptr(handler, a1);
        
  // convert js parameter to cpp: format (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp: quality (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->save(
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

                  qWarning() << "no matching function variant found for save";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: convertFromImage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::convertFromImage
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QImage(handler, a1
  )

   && RJSHelper::is_Qt_ImageConversionFlags(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: img (QImage)
  
QImage a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImage(handler, a1);
        
  // convert js parameter to cpp: flags (Qt::ImageConversionFlags)
  
Qt::ImageConversionFlags a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::AutoColor;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_ImageConversionFlags(handler, a2);
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->convertFromImage(
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

                  qWarning() << "no matching function variant found for convertFromImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: copy
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::copy
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
        
  // convert js parameter to cpp: width (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: height (int)
  
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
                QPixmap* w = getWrapped();
                QPixmap res = 
                    
                w->copy(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: rect (QRect)
  
QRect a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QRect();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
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
                QPixmap* w = getWrapped();
                QPixmap res = 
                    
                w->copy(
                  a1_cpp
    
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for copy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: scroll
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::scroll
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
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: x (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: y (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: width (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: height (int)
  
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
                QPixmap* w = getWrapped();
                
                w->scroll(
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QRect(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: rect (QRect)
  
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
                QPixmap* w = getWrapped();
                
                w->scroll(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for scroll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: cacheKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::cacheKey
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
                QPixmap* w = getWrapped();
                qint64 res = 
                    
                w->cacheKey(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cacheKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::isDetached
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
                QPixmap* w = getWrapped();
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
            
    // Class: QPixmap
    // Function: detach
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::detach
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
                QPixmap* w = getWrapped();
                
                w->detach(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for detach";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: isQBitmap
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::isQBitmap
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
                QPixmap* w = getWrapped();
                bool res = 
                    
                w->isQBitmap(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isQBitmap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPixmap
    // Function: paintEngine
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPixmap_Wrapper::paintEngine
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
                QPixmap* w = getWrapped();
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
            
#if !defined(QT_NO_DATASTREAM)

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  