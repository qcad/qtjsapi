
  // Auto generated
  
  // include header:
  //#include "qtextstreamwrapper.h"
  //#include "header_cpp.h"
  
    #include "qtextstream_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QTextStream*> QTextStream_Wrapper::basecasters_QTextStream;
    
    // static functions implementation in singleton wrapper:
    
    void QTextStream_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QTextStream_Wrapper>("org.qcad", 1, 0, "QTextStream_Wrapper");
        qmlRegisterInterface<QTextStream_Wrapper>("QTextStream_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QTextStream* t = new RJSType_QTextStream();
          global.setProperty("RJSType_QTextStream", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QTextStream::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QTextStream_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QTextStream_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QTextStream_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QTextStream_BaseJs", mob);
      
      QString fileName = ":generator/js/QTextStream.js";
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
    QTextStream_Wrapper::QTextStream_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QTextStream_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QTextStream_Wrapper::QTextStream_Wrapper(RJSApi& h, QTextStream* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QTextStream_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QTextStream_Wrapper"));
              //setObjectName("QTextStream_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QTextStream_Wrapper::~QTextStream_Wrapper() {
            //RDebug::decCounter(QString("QTextStream_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QTextStream_Wrapper"));

            //qDebug() << "QTextStream_Wrapper::~QTextStream_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QTextStream";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QTextStream_Wrapper::initConnections() {

          //setObjectName("QTextStream_Wrapper");

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
  
    // Class: QTextStream
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QTextStream_Wrapper::QTextStream_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QTextStream_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QTextStream_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

   && RJSHelper::is_QFile_OpenMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: array (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: openMode (QFile::OpenMode)
  
QFile::OpenMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QTextStream::ReadOnly;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QFile_OpenMode(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QTextStream(
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
    
        // construct wrapper:

        
              wrapped = new QTextStream(
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

        
              wrapped = new QTextStream(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QTextStream";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QTextStream
    // Function: setEncoding
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setEncoding
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringConverter_Encoding(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: encoding (QStringConverter::Encoding)
  
QStringConverter::Encoding a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringConverter_Encoding(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                
                w->setEncoding(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setEncoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: encoding
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::encoding
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
                QTextStream* w = getWrapped();
                QStringConverter::Encoding res = 
                    
                w->encoding(
                  
                );
              
            // return type: QStringConverter::Encoding

            return RJSHelper::cpp2js_QStringConverter_Encoding(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for encoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setAutoDetectUnicode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setAutoDetectUnicode
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
                QTextStream* w = getWrapped();
                
                w->setAutoDetectUnicode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAutoDetectUnicode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: autoDetectUnicode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::autoDetectUnicode
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
                QTextStream* w = getWrapped();
                bool res = 
                    
                w->autoDetectUnicode(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for autoDetectUnicode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setGenerateByteOrderMark
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setGenerateByteOrderMark
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
    
  // convert js parameter to cpp: generate (bool)
  
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
                QTextStream* w = getWrapped();
                
                w->setGenerateByteOrderMark(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGenerateByteOrderMark";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: generateByteOrderMark
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::generateByteOrderMark
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
                QTextStream* w = getWrapped();
                bool res = 
                    
                w->generateByteOrderMark(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for generateByteOrderMark";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setLocale
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setLocale
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QLocale(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: locale (QLocale)
  
QLocale a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QLocale(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                
                w->setLocale(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLocale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: locale
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::locale
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
                QTextStream* w = getWrapped();
                QLocale res = 
                    
                w->locale(
                  
                );
              
            // return type: QLocale

            return RJSHelper::cpp2js_QLocale(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for locale";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setDevice
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setDevice
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
                QTextStream* w = getWrapped();
                
                w->setDevice(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setDevice";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: device
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::device
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
                QTextStream* w = getWrapped();
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
            
    // Class: QTextStream
    // Function: status
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::status
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
                QTextStream* w = getWrapped();
                QTextStream::Status res = 
                    
                w->status(
                  
                );
              
            // return type: QTextStream::Status

            return RJSHelper::cpp2js_QTextStream_Status(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for status";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setStatus
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setStatus
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextStream_Status(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: status (QTextStream::Status)
  
QTextStream::Status a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextStream_Status(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                
                w->setStatus(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: resetStatus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::resetStatus
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
                QTextStream* w = getWrapped();
                
                w->resetStatus(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resetStatus";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: atEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::atEnd
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
                QTextStream* w = getWrapped();
                bool res = 
                    
                w->atEnd(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atEnd";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::reset
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
                QTextStream* w = getWrapped();
                
                w->reset(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: flush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::flush
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
                QTextStream* w = getWrapped();
                
                w->flush(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for flush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: seek
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::seek
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                bool res = 
                    
                w->seek(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for seek";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: pos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::pos
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
                QTextStream* w = getWrapped();
                qint64 res = 
                    
                w->pos(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pos";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: skipWhiteSpace
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::skipWhiteSpace
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
                QTextStream* w = getWrapped();
                
                w->skipWhiteSpace(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for skipWhiteSpace";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: readLine
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::readLine
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: maxlen (qint64)
  
qint64 a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 0;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
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
                QTextStream* w = getWrapped();
                QString res = 
                    
                w->readLine(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: readAll
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::readAll
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
                QTextStream* w = getWrapped();
                QString res = 
                    
                w->readAll(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: read
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::read
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qint64(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: maxlen (qint64)
  
qint64 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qint64(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                QString res = 
                    
                w->read(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for read";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setFieldAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setFieldAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextStream_FieldAlignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alignment (QTextStream::FieldAlignment)
  
QTextStream::FieldAlignment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextStream_FieldAlignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                
                w->setFieldAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFieldAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: fieldAlignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::fieldAlignment
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
                QTextStream* w = getWrapped();
                QTextStream::FieldAlignment res = 
                    
                w->fieldAlignment(
                  
                );
              
            // return type: QTextStream::FieldAlignment

            return RJSHelper::cpp2js_QTextStream_FieldAlignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fieldAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setPadChar
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setPadChar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QChar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: ch (QChar)
  
QChar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QChar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                
                w->setPadChar(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPadChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: padChar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::padChar
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
                QTextStream* w = getWrapped();
                QChar res = 
                    
                w->padChar(
                  
                );
              
            // return type: QChar

            return RJSHelper::cpp2js_QChar(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for padChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setFieldWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setFieldWidth
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
                QTextStream* w = getWrapped();
                
                w->setFieldWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFieldWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: fieldWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::fieldWidth
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
                QTextStream* w = getWrapped();
                int res = 
                    
                w->fieldWidth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fieldWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setNumberFlags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setNumberFlags
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextStream_NumberFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (QTextStream::NumberFlags)
  
QTextStream::NumberFlags a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextStream_NumberFlags(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                
                w->setNumberFlags(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNumberFlags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: numberFlags
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::numberFlags
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
                QTextStream* w = getWrapped();
                QTextStream::NumberFlags res = 
                    
                w->numberFlags(
                  
                );
              
            // return type: QTextStream::NumberFlags

            return RJSHelper::cpp2js_QTextStream_NumberFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for numberFlags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setIntegerBase
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setIntegerBase
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
    
  // convert js parameter to cpp: base (int)
  
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
                QTextStream* w = getWrapped();
                
                w->setIntegerBase(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIntegerBase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: integerBase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::integerBase
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
                QTextStream* w = getWrapped();
                int res = 
                    
                w->integerBase(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for integerBase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setRealNumberNotation
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setRealNumberNotation
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTextStream_RealNumberNotation(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: notation (QTextStream::RealNumberNotation)
  
QTextStream::RealNumberNotation a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTextStream_RealNumberNotation(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QTextStream* w = getWrapped();
                
                w->setRealNumberNotation(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRealNumberNotation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: realNumberNotation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::realNumberNotation
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
                QTextStream* w = getWrapped();
                QTextStream::RealNumberNotation res = 
                    
                w->realNumberNotation(
                  
                );
              
            // return type: QTextStream::RealNumberNotation

            return RJSHelper::cpp2js_QTextStream_RealNumberNotation(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for realNumberNotation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: setRealNumberPrecision
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::setRealNumberPrecision
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
    
  // convert js parameter to cpp: precision (int)
  
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
                QTextStream* w = getWrapped();
                
                w->setRealNumberPrecision(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRealNumberPrecision";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: realNumberPrecision
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::realNumberPrecision
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
                QTextStream* w = getWrapped();
                int res = 
                    
                w->realNumberPrecision(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for realNumberPrecision";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QTextStream
    // Function: writeString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QTextStream_Wrapper::writeString
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
    
  // convert js parameter to cpp: s (QString)
  
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
                QTextStream* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QTextStream* res =
                    &
                w->operator<<(
                  a1_cpp
    
                );
              
            // return type: QTextStream&

            return RJSHelper::cpp2js_QTextStream(
              handler, 
              // non-copyable: true
                  // return type is reference, type is not copyable:
                  // convert using pointer:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for writeString";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qtextstream_wrapper.cpp"
  
