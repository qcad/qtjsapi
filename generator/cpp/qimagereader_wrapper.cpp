
  // Auto generated
  
  // include header:
  //#include "qimagereaderwrapper.h"
  //#include "header_cpp.h"
  
    #include "qimagereader_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QImageReader*> QImageReader_Wrapper::basecasters_QImageReader;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QImageReader
    // Function: supportedMimeTypes
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_WrapperSingleton::supportedMimeTypes
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QByteArray> res = 
                
                // call static member function:
                QImageReader::supportedMimeTypes(
              
            );
          
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedMimeTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: imageFormatsForMimeType
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_WrapperSingleton::imageFormatsForMimeType
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mimeType (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QByteArray> res = 
                
                // call static member function:
                QImageReader::imageFormatsForMimeType(
              a1_cpp
    
            );
          
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for imageFormatsForMimeType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: allocationLimit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_WrapperSingleton::allocationLimit
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            int res = 
                
                // call static member function:
                QImageReader::allocationLimit(
              
            );
          
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for allocationLimit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setAllocationLimit
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_WrapperSingleton::setAllocationLimit
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
    
  // convert js parameter to cpp: mbLimit (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QImageReader::setAllocationLimit(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAllocationLimit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QImageReader_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QImageReader_Wrapper>("org.qcad", 1, 0, "QImageReader_Wrapper");
        qmlRegisterInterface<QImageReader_Wrapper>("QImageReader_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QImageReader* t = new RJSType_QImageReader();
          global.setProperty("RJSType_QImageReader", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QImageReader::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QImageReader_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QImageReader_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QImageReader_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QImageReader_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QImageReader_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QImageReader_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QImageReader_WrapperSingleton * s = new QImageReader_WrapperSingleton(handler);
        engine->globalObject().setProperty("QImageReader_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QImageReader.js";
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
    QImageReader_Wrapper::QImageReader_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QImageReader_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QImageReader_Wrapper::QImageReader_Wrapper(RJSApi& h, QImageReader* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QImageReader_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QImageReader_Wrapper"));
              //setObjectName("QImageReader_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QImageReader_Wrapper::~QImageReader_Wrapper() {
            //RDebug::decCounter(QString("QImageReader_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QImageReader_Wrapper"));

            //qDebug() << "QImageReader_Wrapper::~QImageReader_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QImageReader";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QImageReader_Wrapper::initConnections() {

          //setObjectName("QImageReader_Wrapper");

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
  
    // Class: QImageReader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QImageReader_Wrapper::QImageReader_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QImageReader_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QImageReader_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QIODevice_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QByteArray(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODevice_ptr(handler, a1);
        
  // convert js parameter to cpp: format (QByteArray)
  
QByteArray a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QByteArray();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QByteArray(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QImageReader(
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QByteArray(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: format (QByteArray)
  
QByteArray a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QByteArray();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QByteArray(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QImageReader(
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

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QImageReader(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QImageReader";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QImageReader
    // Function: setFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageReader* w = getWrapped();
                
                w->setFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: format
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::format
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
                QImageReader* w = getWrapped();
                QByteArray res = 
                    
                w->format(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for format";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setAutoDetectImageFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setAutoDetectImageFormat
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
                QImageReader* w = getWrapped();
                
                w->setAutoDetectImageFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoDetectImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: autoDetectImageFormat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::autoDetectImageFormat
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
                QImageReader* w = getWrapped();
                bool res = 
                    
                w->autoDetectImageFormat(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoDetectImageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setDecideFormatFromContent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setDecideFormatFromContent
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
    
  // convert js parameter to cpp: ignored (bool)
  
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
                QImageReader* w = getWrapped();
                
                w->setDecideFormatFromContent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDecideFormatFromContent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: decideFormatFromContent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::decideFormatFromContent
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
                QImageReader* w = getWrapped();
                bool res = 
                    
                w->decideFormatFromContent(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for decideFormatFromContent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setDevice
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setDevice
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QIODevice_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODevice_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageReader* w = getWrapped();
                
                w->setDevice(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDevice";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::device
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
                QImageReader* w = getWrapped();
                QIODevice* res = 
                    
                w->device(
                  
                );
              
            // return type: QIODevice*

            return RJSHelper::cpp2js_QIODevice(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for device";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setFileName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setFileName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageReader* w = getWrapped();
                
                w->setFileName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::fileName
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
                QImageReader* w = getWrapped();
                QString res = 
                    
                w->fileName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::size
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
                QImageReader* w = getWrapped();
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
            
    // Class: QImageReader
    // Function: imageFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::imageFormat
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageReader* w = getWrapped();
                QByteArray res = 
                    
                w->imageFormat(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
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

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODevice_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageReader* w = getWrapped();
                QByteArray res = 
                    
                w->imageFormat(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

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
                QImageReader* w = getWrapped();
                QImage::Format res = 
                    
                w->imageFormat(
                  
                );
              
            // return type: QImage::Format

            return RJSHelper::cpp2js_QImage_Format(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for imageFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: textKeys
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::textKeys
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
                QImageReader* w = getWrapped();
                QStringList res = 
                    
                w->textKeys(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textKeys";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::text
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageReader* w = getWrapped();
                QString res = 
                    
                w->text(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for text";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setClipRect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setClipRect
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
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
                QImageReader* w = getWrapped();
                
                w->setClipRect(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setClipRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: clipRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::clipRect
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
                QImageReader* w = getWrapped();
                QRect res = 
                    
                w->clipRect(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clipRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setScaledSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setScaledSize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageReader* w = getWrapped();
                
                w->setScaledSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScaledSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: scaledSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::scaledSize
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
                QImageReader* w = getWrapped();
                QSize res = 
                    
                w->scaledSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaledSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setQuality
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setQuality
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
    
  // convert js parameter to cpp: quality (int)
  
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
                QImageReader* w = getWrapped();
                
                w->setQuality(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuality";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: quality
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::quality
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
                QImageReader* w = getWrapped();
                int res = 
                    
                w->quality(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for quality";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setScaledClipRect
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setScaledClipRect
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
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
                QImageReader* w = getWrapped();
                
                w->setScaledClipRect(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScaledClipRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: scaledClipRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::scaledClipRect
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
                QImageReader* w = getWrapped();
                QRect res = 
                    
                w->scaledClipRect(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for scaledClipRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setBackgroundColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setBackgroundColor
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
                QImageReader* w = getWrapped();
                
                w->setBackgroundColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBackgroundColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: backgroundColor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::backgroundColor
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
                QImageReader* w = getWrapped();
                QColor res = 
                    
                w->backgroundColor(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for backgroundColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: supportsAnimation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::supportsAnimation
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
                QImageReader* w = getWrapped();
                bool res = 
                    
                w->supportsAnimation(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportsAnimation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: transformation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::transformation
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
                QImageReader* w = getWrapped();
                QImageIOHandler::Transformations res = 
                    
                w->transformation(
                  
                );
              
            // return type: QImageIOHandler::Transformations

            return RJSHelper::cpp2js_QImageIOHandler_Transformations(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transformation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: setAutoTransform
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::setAutoTransform
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
                QImageReader* w = getWrapped();
                
                w->setAutoTransform(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: autoTransform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::autoTransform
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
                QImageReader* w = getWrapped();
                bool res = 
                    
                w->autoTransform(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: subType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::subType
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
                QImageReader* w = getWrapped();
                QByteArray res = 
                    
                w->subType(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: supportedSubTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::supportedSubTypes
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
                QImageReader* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->supportedSubTypes(
                  
                );
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedSubTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: canRead
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::canRead
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
                QImageReader* w = getWrapped();
                bool res = 
                    
                w->canRead(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canRead";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: read
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::read
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
                QImageReader* w = getWrapped();
                QImage res = 
                    
                w->read(
                  
                );
              
            // return type: QImage

            return RJSHelper::cpp2js_QImage(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for read";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: jumpToNextImage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::jumpToNextImage
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
                QImageReader* w = getWrapped();
                bool res = 
                    
                w->jumpToNextImage(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for jumpToNextImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: jumpToImage
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::jumpToImage
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
    
  // convert js parameter to cpp: imageNumber (int)
  
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
                QImageReader* w = getWrapped();
                bool res = 
                    
                w->jumpToImage(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for jumpToImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: loopCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::loopCount
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
                QImageReader* w = getWrapped();
                int res = 
                    
                w->loopCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for loopCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: imageCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::imageCount
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
                QImageReader* w = getWrapped();
                int res = 
                    
                w->imageCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for imageCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: nextImageDelay
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::nextImageDelay
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
                QImageReader* w = getWrapped();
                int res = 
                    
                w->nextImageDelay(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nextImageDelay";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: currentImageNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::currentImageNumber
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
                QImageReader* w = getWrapped();
                int res = 
                    
                w->currentImageNumber(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentImageNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: currentImageRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::currentImageRect
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
                QImageReader* w = getWrapped();
                QRect res = 
                    
                w->currentImageRect(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentImageRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::error
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
                QImageReader* w = getWrapped();
                QImageReader::ImageReaderError res = 
                    
                w->error(
                  
                );
              
            // return type: QImageReader::ImageReaderError

            return RJSHelper::cpp2js_QImageReader_ImageReaderError(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::errorString
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
                QImageReader* w = getWrapped();
                QString res = 
                    
                w->errorString(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for errorString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageReader
    // Function: supportsOption
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageReader_Wrapper::supportsOption
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QImageIOHandler_ImageOption(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: option (QImageIOHandler::ImageOption)
  
QImageIOHandler::ImageOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImageIOHandler_ImageOption(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageReader* w = getWrapped();
                bool res = 
                    
                w->supportsOption(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportsOption";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qimagereader_wrapper.cpp"
  
