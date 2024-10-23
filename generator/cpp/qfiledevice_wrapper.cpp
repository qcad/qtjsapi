
  // Auto generated
  
  // include header:
  //#include "qfiledevicewrapper.h"
  //#include "header_cpp.h"
  
    #include "qfiledevice_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QFileDevice*> QFileDevice_Wrapper::basecasters_QFileDevice;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QFileDevice
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_WrapperSingleton::tr
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
        RJSHelper::is_char_ptr(handler, a1
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
    
  // convert js parameter to cpp: sourceText (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp:  (char)
  

      // char pointer string:
      QByteArray a2_ba = RJSHelper::js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp:  (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QObject::tr(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tr";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QFileDevice_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QFileDevice_Wrapper>("org.qcad", 1, 0, "QFileDevice_Wrapper");
        qmlRegisterInterface<QFileDevice_Wrapper>("QFileDevice_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QFileDevice* t = new RJSType_QFileDevice();
          global.setProperty("RJSType_QFileDevice", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QFileDevice::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QFileDevice_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QFileDevice_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QFileDevice_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QFileDevice_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QFileDevice_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QFileDevice_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QFileDevice_WrapperSingleton * s = new QFileDevice_WrapperSingleton(handler);
        engine->globalObject().setProperty("QFileDevice_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QFileDevice.js";
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
    QFileDevice_Wrapper::QFileDevice_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QFileDevice_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QFileDevice_Wrapper::QFileDevice_Wrapper(RJSApi& h, QFileDevice* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QFileDevice_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QFileDevice_Wrapper"));
              //setObjectName("QFileDevice_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QFileDevice_Wrapper::~QFileDevice_Wrapper() {
            //RDebug::decCounter(QString("QFileDevice_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QFileDevice_Wrapper"));

            //qDebug() << "QFileDevice_Wrapper::~QFileDevice_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QFileDevice";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QFileDevice_Wrapper::initConnections() {

          //setObjectName("QFileDevice_Wrapper");

          // tell script handler that this wrapper needs to be deleted if the engine is deleted:
          handler.registerWrapper(*this);

          
              // wrapped object is a QObject and not a wrapper for a null pointer:
              // wrapper is managed by the QObject as child:
              if (hasWrapped()) {
                QJSEngine::setObjectOwnership(this, QJSEngine::CppOwnership);
              }
            

          if (hasWrapped()) {
            
                // set parent of wrapper to wrapped:
                // wrapper can be looked up for object:
                QVariant vThis = QVariant::fromValue(this);
                getWrapped()->setProperty("__wrapper__",  vThis);

                // make sure wrapper is deleted when object is deleted:
                // make sure wrapper stays alive as long as the wrapped stays alive::
                QObject::setParent(getWrapped());
              
            // set up signal forwarding:
            
  connect(
    getWrapped(), 
    SIGNAL(readyRead()), 
    this, 
    SLOT(readyReadEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(channelReadyRead(int)), 
    this, 
    SLOT(channelReadyReadEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(bytesWritten(qint64)), 
    this, 
    SLOT(bytesWrittenEmitter(qint64))
  );

  connect(
    getWrapped(), 
    SIGNAL(channelBytesWritten(int, qint64)), 
    this, 
    SLOT(channelBytesWrittenEmitter(int, qint64))
  );

  connect(
    getWrapped(), 
    SIGNAL(aboutToClose()), 
    this, 
    SLOT(aboutToCloseEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(readChannelFinished()), 
    this, 
    SLOT(readChannelFinishedEmitter())
  );

              /*
              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
              */
            
          }
        }
      

  // constructors:
  

    // non-static functions:
    
    // Class: QFileDevice
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::objectName
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
                QFileDevice* w = getWrapped();
                QString res = 
                    
                w->objectName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::setObjectName
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
    
  // convert js parameter to cpp: name (QString)
  
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
                QFileDevice* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::isWidgetType
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->isWidgetType(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWidgetType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::isWindowType
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->isWindowType(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindowType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::signalsBlocked
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->signalsBlocked(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for signalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::blockSignals
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
    
  // convert js parameter to cpp: b (bool)
  
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->blockSignals(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockSignals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::findChild
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
        RJSHelper::is_QString(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_FindChildOptions(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: aName (QString)
  
QString a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QString();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
          }
        
  // convert js parameter to cpp: options (Qt::FindChildOptions)
  
Qt::FindChildOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FindChildrenRecursively;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_FindChildOptions(handler, a2);
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
                QFileDevice* w = getWrapped();
                QObject* res = 
                    
                w->findChild<QObject*>(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::children
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
                QFileDevice* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QObjectList* res =
                    &
                w->children(
                  
                );
              
            // return type: const QObjectList&

            return RJSHelper::cpp2js_QObjectList(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for children";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::setParent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::installEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filterObj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::removeEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: obj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::dumpObjectTree
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
                QFileDevice* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
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
                QFileDevice* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::dumpObjectInfo
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
                QFileDevice* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
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
                QFileDevice* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::setProperty
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->setProperty(
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

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
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
                QFileDevice* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::dynamicPropertyNames
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
                QFileDevice* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->dynamicPropertyNames(
                  
                );
              
            // return type: QList<QByteArray>

            return RJSHelper::cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dynamicPropertyNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::parent
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
                QFileDevice* w = getWrapped();
                QObject* res = 
                    
                w->parent(
                  
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::deleteLater
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
                QFileDevice* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: openMode
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::openMode
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
                QFileDevice* w = getWrapped();
                QIODeviceBase::OpenMode res = 
                    
                w->openMode(
                  
                );
              
            // return type: QIODeviceBase::OpenMode

            return RJSHelper::cpp2js_QIODeviceBase_OpenMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for openMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: setTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::setTextModeEnabled
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
                QFileDevice* w = getWrapped();
                
                w->setTextModeEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextModeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: isTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::isTextModeEnabled
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->isTextModeEnabled(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTextModeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: isOpen
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::isOpen
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->isOpen(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isOpen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: isReadable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::isReadable
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->isReadable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isReadable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: isWritable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::isWritable
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->isWritable(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWritable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: readChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::readChannelCount
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
                QFileDevice* w = getWrapped();
                int res = 
                    
                w->readChannelCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readChannelCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: writeChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::writeChannelCount
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
                QFileDevice* w = getWrapped();
                int res = 
                    
                w->writeChannelCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for writeChannelCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: currentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::currentReadChannel
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
                QFileDevice* w = getWrapped();
                int res = 
                    
                w->currentReadChannel(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: setCurrentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::setCurrentReadChannel
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
    
  // convert js parameter to cpp: channel (int)
  
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
                QFileDevice* w = getWrapped();
                
                w->setCurrentReadChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentReadChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: currentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::currentWriteChannel
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
                QFileDevice* w = getWrapped();
                int res = 
                    
                w->currentWriteChannel(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentWriteChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: setCurrentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::setCurrentWriteChannel
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
    
  // convert js parameter to cpp: channel (int)
  
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
                QFileDevice* w = getWrapped();
                
                w->setCurrentWriteChannel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentWriteChannel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: open
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::open
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QIODeviceBase_OpenMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QIODeviceBase::OpenMode)
  
QIODeviceBase::OpenMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIODeviceBase_OpenMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->open(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for open";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: reset
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::reset
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->reset(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for reset";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: bytesAvailable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::bytesAvailable
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
                QFileDevice* w = getWrapped();
                qint64 res = 
                    
                w->bytesAvailable(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bytesAvailable";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: bytesToWrite
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::bytesToWrite
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
                QFileDevice* w = getWrapped();
                qint64 res = 
                    
                w->bytesToWrite(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bytesToWrite";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: readAll
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::readAll
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
                QFileDevice* w = getWrapped();
                QByteArray res = 
                    
                w->readAll(
                  
                );
              
            // return type: QByteArray

            return RJSHelper::cpp2js_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for readAll";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: canReadLine
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::canReadLine
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->canReadLine(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canReadLine";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: startTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::startTransaction
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
                QFileDevice* w = getWrapped();
                
                w->startTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for startTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: commitTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::commitTransaction
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
                QFileDevice* w = getWrapped();
                
                w->commitTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for commitTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: rollbackTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::rollbackTransaction
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
                QFileDevice* w = getWrapped();
                
                w->rollbackTransaction(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for rollbackTransaction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: isTransactionStarted
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::isTransactionStarted
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->isTransactionStarted(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTransactionStarted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: write
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::write
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_qint64(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: len (qint64)
  
qint64 a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qint64(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (char)
  

      // char pointer string:
      QByteArray a1_ba = RJSHelper::js2cpp_char_ptr(handler, a1).toLocal8Bit();
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
                QFileDevice* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QByteArray(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QByteArray)
  
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
                QFileDevice* w = getWrapped();
                qint64 res = 
                    
                w->write(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for write";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: skip
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::skip
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
    
  // convert js parameter to cpp: maxSize (qint64)
  
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
                QFileDevice* w = getWrapped();
                qint64 res = 
                    
                w->skip(
                  a1_cpp
    
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for skip";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: waitForReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::waitForReadyRead
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
    
  // convert js parameter to cpp: msecs (int)
  
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->waitForReadyRead(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForReadyRead";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: waitForBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::waitForBytesWritten
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
    
  // convert js parameter to cpp: msecs (int)
  
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->waitForBytesWritten(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for waitForBytesWritten";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: ungetChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::ungetChar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = RJSHelper::js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                
                w->ungetChar(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for ungetChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: putChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::putChar
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_char(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (char)
  
char a1_cpp;

      a1_cpp = RJSHelper::js2cpp_char(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->putChar(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for putChar";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: errorString
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::errorString
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
                QFileDevice* w = getWrapped();
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
            
    // Class: QFileDevice
    // Function: readyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QFileDevice_Wrapper::readyReadEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readyRead(
                  
                );
              }
            
    // Class: QFileDevice
    // Function: channelReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QFileDevice_Wrapper::channelReadyReadEmitter(
                int channel
              ) {
                // convert cpp parameters to js:
                
  // parameter: channel (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    channel
  );


                emit channelReadyRead(
                  a1_js
                );
              }
            
    // Class: QFileDevice
    // Function: bytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QFileDevice_Wrapper::bytesWrittenEmitter(
                qint64 bytes
              ) {
                // convert cpp parameters to js:
                
  // parameter: bytes (qint64)
  


  QJSValue a1_js = RJSHelper::cpp2js_qint64(
    handler, 
    bytes
  );


                emit bytesWritten(
                  a1_js
                );
              }
            
    // Class: QFileDevice
    // Function: channelBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QFileDevice_Wrapper::channelBytesWrittenEmitter(
                int channel, qint64 bytes
              ) {
                // convert cpp parameters to js:
                
  // parameter: channel (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    channel
  );

  // parameter: bytes (qint64)
  


  QJSValue a2_js = RJSHelper::cpp2js_qint64(
    handler, 
    bytes
  );


                emit channelBytesWritten(
                  a1_js, a2_js
                );
              }
            
    // Class: QFileDevice
    // Function: aboutToClose
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QFileDevice_Wrapper::aboutToCloseEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit aboutToClose(
                  
                );
              }
            
    // Class: QFileDevice
    // Function: readChannelFinished
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QFileDevice_Wrapper::readChannelFinishedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit readChannelFinished(
                  
                );
              }
            
    // Class: QFileDevice
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::error
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
                QFileDevice* w = getWrapped();
                QFileDevice::FileError res = 
                    
                w->error(
                  
                );
              
            // return type: QFileDevice::FileError

            return RJSHelper::cpp2js_QFileDevice_FileError(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for error";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: unsetError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::unsetError
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
                QFileDevice* w = getWrapped();
                
                w->unsetError(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetError";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: close
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::close
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
                QFileDevice* w = getWrapped();
                
                w->close(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for close";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: isSequential
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::isSequential
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->isSequential(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isSequential";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: handle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::handle
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
                QFileDevice* w = getWrapped();
                int res = 
                    
                w->handle(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for handle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: fileName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::fileName
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
                QFileDevice* w = getWrapped();
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
            
    // Class: QFileDevice
    // Function: pos
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::pos
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
                QFileDevice* w = getWrapped();
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
            
    // Class: QFileDevice
    // Function: seek
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::seek
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
    
  // convert js parameter to cpp: offset (qint64)
  
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
                QFileDevice* w = getWrapped();
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
            
    // Class: QFileDevice
    // Function: atEnd
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::atEnd
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
                QFileDevice* w = getWrapped();
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
            
    // Class: QFileDevice
    // Function: flush
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::flush
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->flush(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::size
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
                QFileDevice* w = getWrapped();
                qint64 res = 
                    
                w->size(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: resize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::resize
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
    
  // convert js parameter to cpp: sz (qint64)
  
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
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->resize(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for resize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: permissions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::permissions
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
                QFileDevice* w = getWrapped();
                QFile::Permissions res = 
                    
                w->permissions(
                  
                );
              
            // return type: QFile::Permissions

            return RJSHelper::cpp2js_QFile_Permissions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for permissions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: setPermissions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::setPermissions
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFile_Permissions(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: permissionSpec (QFile::Permissions)
  
QFile::Permissions a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFile_Permissions(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->setPermissions(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setPermissions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: fileTime
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::fileTime
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFileDevice_FileTime(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: time (QFileDevice::FileTime)
  
QFileDevice::FileTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFileDevice_FileTime(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                QDateTime res = 
                    
                w->fileTime(
                  a1_cpp
    
                );
              
            // return type: QDateTime

            return RJSHelper::cpp2js_QDateTime(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fileTime";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileDevice
    // Function: setFileTime
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFileDevice_Wrapper::setFileTime
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QDateTime(handler, a1
  )

   && RJSHelper::is_QFileDevice_FileTime(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: newDate (QDateTime)
  
QDateTime a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QDateTime(handler, a1);
        
  // convert js parameter to cpp: fileTime (QFileDevice::FileTime)
  
QFileDevice::FileTime a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QFileDevice_FileTime(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFileDevice* w = getWrapped();
                bool res = 
                    
                w->setFileTime(
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

                  qWarning() << "no matching function variant found for setFileTime";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qfiledevice_wrapper.cpp"
  
