
  // Auto generated
  
  // include header:
  //#include "qimagewriterwrapper.h"
  //#include "header_cpp.h"
  
    #include "qimagewriter_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QImageWriter*> QImageWriter_Wrapper::basecasters_QImageWriter;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QImageWriter
    // Function: supportedMimeTypes
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_WrapperSingleton::supportedMimeTypes
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QByteArray> res = 
                
                // call static member function:
                QImageWriter::supportedMimeTypes(
              
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
            
    // Class: QImageWriter
    // Function: imageFormatsForMimeType
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_WrapperSingleton::imageFormatsForMimeType
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
                QImageWriter::imageFormatsForMimeType(
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
            
    void QImageWriter_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QImageWriter_Wrapper>("org.qcad", 1, 0, "QImageWriter_Wrapper");
        qmlRegisterInterface<QImageWriter_Wrapper>("QImageWriter_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QImageWriter* t = new RJSType_QImageWriter();
          global.setProperty("RJSType_QImageWriter", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QImageWriter::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QImageWriter_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QImageWriter_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QImageWriter_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QImageWriter_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QImageWriter_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QImageWriter_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QImageWriter_WrapperSingleton * s = new QImageWriter_WrapperSingleton(handler);
        engine->globalObject().setProperty("QImageWriter_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QImageWriter.js";
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
    QImageWriter_Wrapper::QImageWriter_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QImageWriter_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QImageWriter_Wrapper::QImageWriter_Wrapper(RJSApi& h, QImageWriter* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QImageWriter_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QImageWriter_Wrapper"));
              //setObjectName("QImageWriter_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QImageWriter_Wrapper::~QImageWriter_Wrapper() {
            //RDebug::decCounter(QString("QImageWriter_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QImageWriter_Wrapper"));

            //qDebug() << "QImageWriter_Wrapper::~QImageWriter_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QImageWriter";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QImageWriter_Wrapper::initConnections() {

          //setObjectName("QImageWriter_Wrapper");

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
  
    // Class: QImageWriter
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QImageWriter_Wrapper::QImageWriter_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QImageWriter_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QImageWriter_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QIODevice_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QByteArray(handler, a2
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

      a2_cpp = RJSHelper::js2cpp_QByteArray(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QImageWriter(
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

        
            wrapped = new QImageWriter(
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

        
            wrapped = new QImageWriter(
                
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
                  

                  qWarning() << "no matching constructor variant found for QImageWriter";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QImageWriter
    // Function: setFormat
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setFormat
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
                QImageWriter* w = getWrapped();
                
                w->setFormat(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFormat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: format
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::format
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
                QImageWriter* w = getWrapped();
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
            
    // Class: QImageWriter
    // Function: setDevice
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setDevice
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
                QImageWriter* w = getWrapped();
                
                w->setDevice(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDevice";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::device
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
                QImageWriter* w = getWrapped();
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
            
    // Class: QImageWriter
    // Function: setFileName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setFileName
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
                QImageWriter* w = getWrapped();
                
                w->setFileName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFileName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::fileName
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
                QImageWriter* w = getWrapped();
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
            
    // Class: QImageWriter
    // Function: setQuality
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setQuality
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
                QImageWriter* w = getWrapped();
                
                w->setQuality(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setQuality";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: quality
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::quality
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
                QImageWriter* w = getWrapped();
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
            
    // Class: QImageWriter
    // Function: setCompression
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setCompression
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
    
  // convert js parameter to cpp: compression (int)
  
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
                QImageWriter* w = getWrapped();
                
                w->setCompression(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCompression";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: compression
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::compression
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
                QImageWriter* w = getWrapped();
                int res = 
                    
                w->compression(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for compression";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: setSubType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setSubType
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
    
  // convert js parameter to cpp: type (QByteArray)
  
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
                QImageWriter* w = getWrapped();
                
                w->setSubType(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSubType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: subType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::subType
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
                QImageWriter* w = getWrapped();
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
            
    // Class: QImageWriter
    // Function: supportedSubTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::supportedSubTypes
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
                QImageWriter* w = getWrapped();
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
            
    // Class: QImageWriter
    // Function: setOptimizedWrite
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setOptimizedWrite
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
    
  // convert js parameter to cpp: optimize (bool)
  
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
                QImageWriter* w = getWrapped();
                
                w->setOptimizedWrite(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOptimizedWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: optimizedWrite
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::optimizedWrite
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
                QImageWriter* w = getWrapped();
                bool res = 
                    
                w->optimizedWrite(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for optimizedWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: setProgressiveScanWrite
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setProgressiveScanWrite
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
    
  // convert js parameter to cpp: progressive (bool)
  
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
                QImageWriter* w = getWrapped();
                
                w->setProgressiveScanWrite(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setProgressiveScanWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: progressiveScanWrite
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::progressiveScanWrite
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
                QImageWriter* w = getWrapped();
                bool res = 
                    
                w->progressiveScanWrite(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for progressiveScanWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: transformation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::transformation
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
                QImageWriter* w = getWrapped();
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
            
    // Class: QImageWriter
    // Function: setTransformation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setTransformation
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QImageIOHandler_Transformations(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orientation (QImageIOHandler::Transformations)
  
QImageIOHandler::Transformations a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImageIOHandler_Transformations(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageWriter* w = getWrapped();
                
                w->setTransformation(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransformation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: setText
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::setText
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: key (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
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
                QImageWriter* w = getWrapped();
                
                w->setText(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: canWrite
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::canWrite
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
                QImageWriter* w = getWrapped();
                bool res = 
                    
                w->canWrite(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: write
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::write
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QImage(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: image (QImage)
  
QImage a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImage(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QImageWriter* w = getWrapped();
                bool res = 
                    
                w->write(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for write";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::error
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
                QImageWriter* w = getWrapped();
                QImageWriter::ImageWriterError res = 
                    
                w->error(
                  
                );
              
            // return type: QImageWriter::ImageWriterError

            return RJSHelper::cpp2js_QImageWriter_ImageWriterError(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QImageWriter
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::errorString
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
                QImageWriter* w = getWrapped();
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
            
    // Class: QImageWriter
    // Function: supportsOption
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QImageWriter_Wrapper::supportsOption
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
                QImageWriter* w = getWrapped();
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
  