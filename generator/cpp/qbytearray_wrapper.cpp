
  // Auto generated
  
  // include header:
  //#include "qbytearraywrapper.h"
  //#include "header_cpp.h"
  
    #include "qbytearray_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#ifndef QT_NO_CAST_FROM_BYTEARRAY

#endif

#if !defined(Q_CLANG_QDOC)

#else

#endif

#if !defined(QT_NO_CAST_FROM_ASCII)&&!defined(QT_RESTRICTED_CAST_FROM_ASCII)

#endif

    // Class: QByteArray
    // Function: number
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QByteArray_WrapperSingleton::number
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
        is_double(handler, a1
  )

   && is_char(handler, a2
  )

   && is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (double)
  
double a1_cpp;

      a1_cpp = js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: format (char)
  
char a2_cpp;

      a2_cpp = js2cpp_char(handler, a2);
        
  // convert js parameter to cpp: precision (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QByteArray res = 
                
                // call static member function:
                QByteArray::number(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: base (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 10;
          }
          else {
            a2_cpp = js2cpp_int(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QByteArray res = 
                
                // call static member function:
                QByteArray::number(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for number";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: fromRawData
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_WrapperSingleton::fromRawData
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

   && is_qsizetype(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: size (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = js2cpp_qsizetype(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QByteArray res = 
                
                // call static member function:
                QByteArray::fromRawData(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromRawData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: fromBase64
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_WrapperSingleton::fromBase64
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: base64 (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QByteArray res = 
                
                // call static member function:
                QByteArray::fromBase64(
              a1_cpp
    
            );
          
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromBase64";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: fromHex
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_WrapperSingleton::fromHex
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hexEncoded (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QByteArray res = 
                
                // call static member function:
                QByteArray::fromHex(
              a1_cpp
    
            );
          
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: fromPercentEncoding
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_WrapperSingleton::fromPercentEncoding
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

   && is_char(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pctEncoded (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        
  // convert js parameter to cpp: percent (char)
  
char a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = '%';
          }
          else {
            a2_cpp = js2cpp_char(handler, a2);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QByteArray res = 
                
                // call static member function:
                QByteArray::fromPercentEncoding(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromPercentEncoding";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

    void QByteArray_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QByteArray_Wrapper>("org.qcad", 1, 0, "QByteArray_Wrapper");
        qmlRegisterInterface<QByteArray_Wrapper>("QByteArray_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QByteArray_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QByteArray_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QByteArray_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QByteArray_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QByteArray_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QByteArray_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QByteArray_WrapperSingleton * s = new QByteArray_WrapperSingleton(handler);
        engine->globalObject().setProperty("QByteArray_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QByteArray.js";
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
    QByteArray_Wrapper::QByteArray_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QByteArray_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QByteArray_Wrapper::QByteArray_Wrapper(RJSApi& h, QByteArray* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QByteArray_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QByteArray_Wrapper"));
              //setObjectName("QByteArray_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QByteArray_Wrapper::~QByteArray_Wrapper() {
            //RDebug::decCounter(QString("QByteArray_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QByteArray_Wrapper"));

            //qDebug() << "QByteArray_Wrapper::~QByteArray_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QByteArray";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QByteArray_Wrapper::initConnections() {

          //setObjectName("QByteArray_Wrapper");

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
  
    // Class: QByteArray
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QByteArray_Wrapper::QByteArray_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QByteArray_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QByteArray_Wrapper"));
                
      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QByteArray(
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

        
            wrapped = new QByteArray(
                
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
                  

                  qWarning() << "no matching constructor variant found for QByteArray";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_CAST_FROM_BYTEARRAY

#endif

#if !defined(Q_CLANG_QDOC)

#else

#endif

#if !defined(QT_NO_CAST_FROM_ASCII)&&!defined(QT_RESTRICTED_CAST_FROM_ASCII)

#endif

#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif


    // non-static functions:
    
    // Class: QByteArray
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::isEmpty
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
                QByteArray* w = getWrapped();
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
            
    // Class: QByteArray
    // Function: resize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::resize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->resize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: fill
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::fill
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

   && is_qsizetype(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        
  // convert js parameter to cpp: size (qsizetype)
  
qsizetype a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = js2cpp_qsizetype(handler, a2);
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
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->fill(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fill";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: capacity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::capacity
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
                QByteArray* w = getWrapped();
                qsizetype res = 
                    
                w->capacity(
                  
                );
              
            // return type: qsizetype

            return cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capacity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: reserve
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::reserve
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->reserve(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reserve";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: squeeze
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::squeeze
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
                QByteArray* w = getWrapped();
                
                w->squeeze(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for squeeze";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_CAST_FROM_BYTEARRAY

#endif

    // Class: QByteArray
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::data
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
                QByteArray* w = getWrapped();
                char* res = 
                    
                w->data(
                  
                );
              
            // return type: char*

            return cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of cpp2js_char:
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
                QByteArray* w = getWrapped();
                const char* res = 
                    
                w->data(
                  
                );
              
            // return type: const char*

            return cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of cpp2js_char:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for data";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: constData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::constData
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
                QByteArray* w = getWrapped();
                const char* res = 
                    
                w->constData(
                  
                );
              
            // return type: const char*

            return cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of cpp2js_char:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for constData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: detach
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::detach
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
                QByteArray* w = getWrapped();
                
                w->detach(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for detach";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::isDetached
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
                QByteArray* w = getWrapped();
                bool res = 
                    
                w->isDetached(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDetached";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: isSharedWith
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::isSharedWith
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                bool res = 
                    
                w->isSharedWith(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSharedWith";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::clear
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
                QByteArray* w = getWrapped();
                
                w->clear(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clear";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: at
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::at
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                char res = 
                    
                w->at(
                  a1_cpp
    
                );
              
            // return type: char

            return cpp2js_char(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for at";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: front
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::front
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
                QByteArray* w = getWrapped();
                char res = 
                    
                w->front(
                  
                );
              
            // return type: char

            return cpp2js_char(
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
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      char* res =
                    &
                w->front(
                  
                );
              
            // return type: char&

            return cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for front";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: back
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::back
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
                QByteArray* w = getWrapped();
                char res = 
                    
                w->back(
                  
                );
              
            // return type: char

            return cpp2js_char(
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
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      char* res =
                    &
                w->back(
                  
                );
              
            // return type: char&

            return cpp2js_char(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for back";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: indexOf
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::indexOf
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
        is_char(handler, a1
  )

   && is_qsizetype(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        
  // convert js parameter to cpp: from (qsizetype)
  
qsizetype a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 0;
          }
          else {
            a2_cpp = js2cpp_qsizetype(handler, a2);
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
                QByteArray* w = getWrapped();
                qsizetype res = 
                    
                w->indexOf(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: qsizetype

            return cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for indexOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: lastIndexOf
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::lastIndexOf
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
        is_char(handler, a1
  )

   && is_qsizetype(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        
  // convert js parameter to cpp: from (qsizetype)
  
qsizetype a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = js2cpp_qsizetype(handler, a2);
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
                QByteArray* w = getWrapped();
                qsizetype res = 
                    
                w->lastIndexOf(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: qsizetype

            return cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lastIndexOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::contains
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
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
            
    // Class: QByteArray
    // Function: count
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::count
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                qsizetype res = 
                    
                w->count(
                  a1_cpp
    
                );
              
            // return type: qsizetype

            return cpp2js_qsizetype(
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
                QByteArray* w = getWrapped();
                qsizetype res = 
                    
                w->count(
                  
                );
              
            // return type: qsizetype

            return cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for count";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: left
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::left
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: len (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->left(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for left";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: right
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::right
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: len (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->right(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for right";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: mid
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::mid
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
        is_qsizetype(handler, a1
  )

   && is_qsizetype(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: len (qsizetype)
  
qsizetype a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = js2cpp_qsizetype(handler, a2);
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->mid(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: first
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::first
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: n (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->first(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for first";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: last
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::last
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: n (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->last(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for last";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: sliced
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::sliced
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
        is_qsizetype(handler, a1
  )

   && is_qsizetype(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: n (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = js2cpp_qsizetype(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->sliced(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->sliced(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sliced";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: chopped
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::chopped
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: len (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->chopped(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for chopped";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: startsWith
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::startsWith
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                bool res = 
                    
                w->startsWith(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startsWith";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: endsWith
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::endsWith
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                bool res = 
                    
                w->endsWith(
                  a1_cpp
    
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for endsWith";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: isUpper
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::isUpper
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
                QByteArray* w = getWrapped();
                bool res = 
                    
                w->isUpper(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isUpper";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: isLower
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::isLower
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
                QByteArray* w = getWrapped();
                bool res = 
                    
                w->isLower(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLower";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: truncate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::truncate
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->truncate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for truncate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: chop
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::chop
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: n (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->chop(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for chop";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if !defined(Q_CLANG_QDOC)

    // Class: QByteArray
    // Function: toLower
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toLower
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->toLower(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->toLower(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->toLower(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toLower";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toUpper
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toUpper
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->toUpper(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->toUpper(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->toUpper(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toUpper";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: trimmed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::trimmed
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->trimmed(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->trimmed(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->trimmed(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for trimmed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: simplified
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::simplified
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->simplified(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->simplified(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->simplified(
                  
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for simplified";
                  handler.trace();
                  return QJSValue();
                
              }
            
#else

#endif

    // Class: QByteArray
    // Function: leftJustified
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::leftJustified
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
        is_qsizetype(handler, a1
  )

   && is_char(handler, a2
    , true
  
  )

   && is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: fill (char)
  
char a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = ' ';
          }
          else {
            a2_cpp = js2cpp_char(handler, a2);
          }
        
  // convert js parameter to cpp: truncate (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = js2cpp_bool(handler, a3);
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->leftJustified(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for leftJustified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: rightJustified
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::rightJustified
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
        is_qsizetype(handler, a1
  )

   && is_char(handler, a2
    , true
  
  )

   && is_bool(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: fill (char)
  
char a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = ' ';
          }
          else {
            a2_cpp = js2cpp_char(handler, a2);
          }
        
  // convert js parameter to cpp: truncate (bool)
  
bool a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = false;
          }
          else {
            a3_cpp = js2cpp_bool(handler, a3);
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->rightJustified(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rightJustified";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: prepend
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::prepend
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

   && is_char(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: count (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: c (char)
  
char a2_cpp;

      a2_cpp = js2cpp_char(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->prepend(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

   && is_qsizetype(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: len (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = js2cpp_qsizetype(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->prepend(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->prepend(
                  a1_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->prepend(
                  a1_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->prepend(
                  a1_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for prepend";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: append
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::append
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->append(
                  a1_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->append(
                  a1_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for append";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: insert
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::insert
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
        is_qsizetype(handler, a1
  )

   && is_qsizetype(handler, a2
  )

   && is_char(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: count (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = js2cpp_qsizetype(handler, a2);
        
  // convert js parameter to cpp: c (char)
  
char a3_cpp;

      a3_cpp = js2cpp_char(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->insert(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

   && is_char_ptr(handler, a2
    , true
  
  )

   && is_qsizetype(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: s (char)
  

      // char pointer string:
      QByteArray a2_ba = js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp: len (qsizetype)
  
qsizetype a3_cpp;

      a3_cpp = js2cpp_qsizetype(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->insert(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

   && is_char_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: s (char)
  

      // char pointer string:
      QByteArray a2_ba = js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->insert(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

   && is_QByteArray(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: data (QByteArray)
  
QByteArray a2_cpp;

      a2_cpp = js2cpp_QByteArray(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->insert(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

   && is_char(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: i (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: c (char)
  
char a2_cpp;

      a2_cpp = js2cpp_char(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->insert(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for insert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: remove
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::remove
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

   && is_qsizetype(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: len (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = js2cpp_qsizetype(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->remove(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for remove";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: replace
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::replace
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
        is_qsizetype(handler, a1
  )

   && is_qsizetype(handler, a2
  )

   && is_char_ptr(handler, a3
    , true
  
  )

   && is_qsizetype(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: len (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = js2cpp_qsizetype(handler, a2);
        
  // convert js parameter to cpp: s (char)
  

      // char pointer string:
      QByteArray a3_ba = js2cpp_char_ptr(handler, a3).toLocal8Bit();
      const char* a3_cpp = a3_ba.constData();
    
  // convert js parameter to cpp: alen (qsizetype)
  
qsizetype a4_cpp;

      a4_cpp = js2cpp_qsizetype(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->replace(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

   && is_qsizetype(handler, a2
  )

   && is_char_ptr(handler, a3
    , true
  
  )

   && is_qsizetype(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: before (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: bsize (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = js2cpp_qsizetype(handler, a2);
        
  // convert js parameter to cpp: after (char)
  

      // char pointer string:
      QByteArray a3_ba = js2cpp_char_ptr(handler, a3).toLocal8Bit();
      const char* a3_cpp = a3_ba.constData();
    
  // convert js parameter to cpp: asize (qsizetype)
  
qsizetype a4_cpp;

      a4_cpp = js2cpp_qsizetype(handler, a4);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->replace(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_char(handler, a1
  )

   && is_char(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: before (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        
  // convert js parameter to cpp: after (char)
  
char a2_cpp;

      a2_cpp = js2cpp_char(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->replace(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for replace";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: split
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::split
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sep (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->split(
                  a1_cpp
    
                );
              
            // return type: QList<QByteArray>

            return cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for split";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: repeated
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::repeated
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: times (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->repeated(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for repeated";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if !defined(QT_NO_CAST_FROM_ASCII)&&!defined(QT_RESTRICTED_CAST_FROM_ASCII)

#endif

    // Class: QByteArray
    // Function: toShort
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toShort
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
                QByteArray* w = getWrapped();
                short res = 
                    
                w->toShort(
                  
                );
              
            // return type: short

            return cpp2js_short(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toShort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toUShort
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toUShort
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
                QByteArray* w = getWrapped();
                ushort res = 
                    
                w->toUShort(
                  
                );
              
            // return type: ushort

            return cpp2js_ushort(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toUShort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toInt
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toInt
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
                QByteArray* w = getWrapped();
                int res = 
                    
                w->toInt(
                  
                );
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toInt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toUInt
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toUInt
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
                QByteArray* w = getWrapped();
                uint res = 
                    
                w->toUInt(
                  
                );
              
            // return type: uint

            return cpp2js_uint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toUInt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toLong
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toLong
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
                QByteArray* w = getWrapped();
                long res = 
                    
                w->toLong(
                  
                );
              
            // return type: long

            return cpp2js_long(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toLong";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toULong
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toULong
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
                QByteArray* w = getWrapped();
                ulong res = 
                    
                w->toULong(
                  
                );
              
            // return type: ulong

            return cpp2js_ulong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toULong";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toLongLong
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toLongLong
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
                QByteArray* w = getWrapped();
                qlonglong res = 
                    
                w->toLongLong(
                  
                );
              
            // return type: qlonglong

            return cpp2js_qlonglong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toLongLong";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toULongLong
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toULongLong
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
                QByteArray* w = getWrapped();
                qulonglong res = 
                    
                w->toULongLong(
                  
                );
              
            // return type: qulonglong

            return cpp2js_qulonglong(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toULongLong";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toFloat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toFloat
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
                QByteArray* w = getWrapped();
                float res = 
                    
                w->toFloat(
                  
                );
              
            // return type: float

            return cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toFloat";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toDouble
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toDouble
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
                QByteArray* w = getWrapped();
                double res = 
                    
                w->toDouble(
                  
                );
              
            // return type: double

            return cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toDouble";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: toHex
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::toHex
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: separator (char)
  
char a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = '\0';
          }
          else {
            a1_cpp = js2cpp_char(handler, a1);
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
                QByteArray* w = getWrapped();
                QByteArray res = 
                    
                w->toHex(
                  a1_cpp
    
                );
              
            // return type: QByteArray

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toHex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: setNum
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::setNum
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
        is_double(handler, a1
  )

   && is_char(handler, a2
  )

   && is_int(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (double)
  
double a1_cpp;

      a1_cpp = js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: format (char)
  
char a2_cpp;

      a2_cpp = js2cpp_char(handler, a2);
        
  // convert js parameter to cpp: precision (int)
  
int a3_cpp;

      a3_cpp = js2cpp_int(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->setNum(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        is_int(handler, a1
  )

   && is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: base (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = 10;
          }
          else {
            a2_cpp = js2cpp_int(handler, a2);
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
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->setNum(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setNum";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: setRawData
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::setRawData
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

   && is_qsizetype(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: n (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = js2cpp_qsizetype(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QByteArray* res =
                    &
                w->setRawData(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QByteArray&

            return cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setRawData";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if defined(Q_OS_DARWIN)||defined(Q_QDOC)

#endif

    // Class: QByteArray
    // Function: push_back
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::push_back
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->push_back(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->push_back(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->push_back(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for push_back";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: push_front
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::push_front
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->push_front(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->push_front(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (QByteArray)
  
QByteArray a1_cpp;

      a1_cpp = js2cpp_QByteArray(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QByteArray* w = getWrapped();
                
                w->push_front(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for push_front";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: shrink_to_fit
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::shrink_to_fit
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
                QByteArray* w = getWrapped();
                
                w->shrink_to_fit(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for shrink_to_fit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::size
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
                QByteArray* w = getWrapped();
                qsizetype res = 
                    
                w->size(
                  
                );
              
            // return type: qsizetype

            return cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::length
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
                QByteArray* w = getWrapped();
                qsizetype res = 
                    
                w->length(
                  
                );
              
            // return type: qsizetype

            return cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for length";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QByteArray
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QByteArray_Wrapper::isNull
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
                QByteArray* w = getWrapped();
                bool res = 
                    
                w->isNull(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isNull";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  