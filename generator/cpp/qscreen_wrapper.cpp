
  // Auto generated
  
  // include header:
  //#include "qscreenwrapper.h"
  //#include "header_cpp.h"
  
    #include "qscreen_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QScreen
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QScreen_WrapperSingleton::tr
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
        is_char_ptr(handler, a1
    , true
  
  )

   && is_char_ptr(handler, a2
    , true
  
  )

   && is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceText (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp:  (char)
  

      // char pointer string:
      QByteArray a2_ba = js2cpp_char_ptr(handler, a2).toLocal8Bit();
      const char* a2_cpp = a2_ba.constData();
    
  // convert js parameter to cpp:  (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = js2cpp_int(handler, a3);
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

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for tr";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QScreen_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QScreen_Wrapper>("org.qcad", 1, 0, "QScreen_Wrapper");
        qmlRegisterInterface<QScreen_Wrapper>("QScreen_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QScreen_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QScreen_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QScreen_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QScreen_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QScreen_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QScreen_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QScreen_WrapperSingleton * s = new QScreen_WrapperSingleton(handler);
        engine->globalObject().setProperty("QScreen_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QScreen.js";
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
    QScreen_Wrapper::QScreen_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QScreen_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QScreen_Wrapper::QScreen_Wrapper(RJSApi& h, QScreen* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QScreen_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QScreen_Wrapper"));
              //setObjectName("QScreen_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QScreen_Wrapper::~QScreen_Wrapper() {
            //RDebug::decCounter(QString("QScreen_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QScreen_Wrapper"));

            //qDebug() << "QScreen_Wrapper::~QScreen_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QScreen";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QScreen_Wrapper::initConnections() {

          //setObjectName("QScreen_Wrapper");

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
    SIGNAL(geometryChanged(const QRect&)), 
    this, 
    SLOT(geometryChangedEmitter(const QRect&))
  );

  connect(
    getWrapped(), 
    SIGNAL(availableGeometryChanged(const QRect&)), 
    this, 
    SLOT(availableGeometryChangedEmitter(const QRect&))
  );

  connect(
    getWrapped(), 
    SIGNAL(physicalSizeChanged(const QSizeF&)), 
    this, 
    SLOT(physicalSizeChangedEmitter(const QSizeF&))
  );

  connect(
    getWrapped(), 
    SIGNAL(physicalDotsPerInchChanged(qreal)), 
    this, 
    SLOT(physicalDotsPerInchChangedEmitter(qreal))
  );

  connect(
    getWrapped(), 
    SIGNAL(logicalDotsPerInchChanged(qreal)), 
    this, 
    SLOT(logicalDotsPerInchChangedEmitter(qreal))
  );

  connect(
    getWrapped(), 
    SIGNAL(virtualGeometryChanged(const QRect&)), 
    this, 
    SLOT(virtualGeometryChangedEmitter(const QRect&))
  );

  connect(
    getWrapped(), 
    SIGNAL(primaryOrientationChanged(Qt::ScreenOrientation)), 
    this, 
    SLOT(primaryOrientationChangedEmitter(Qt::ScreenOrientation))
  );

  connect(
    getWrapped(), 
    SIGNAL(orientationChanged(Qt::ScreenOrientation)), 
    this, 
    SLOT(orientationChangedEmitter(Qt::ScreenOrientation))
  );

  connect(
    getWrapped(), 
    SIGNAL(refreshRateChanged(qreal)), 
    this, 
    SLOT(refreshRateChangedEmitter(qreal))
  );

              connect(
                getWrapped(),
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
            
          }
        }
      

  // constructors:
  

    // non-static functions:
    
    // Class: QScreen
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::objectName
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
                QScreen* w = getWrapped();
                QString res = 
                    
                w->objectName(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for objectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::setObjectName
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

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
                QScreen* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::isWidgetType
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
                QScreen* w = getWrapped();
                bool res = 
                    
                w->isWidgetType(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWidgetType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::isWindowType
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
                QScreen* w = getWrapped();
                bool res = 
                    
                w->isWindowType(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isWindowType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::signalsBlocked
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
                QScreen* w = getWrapped();
                bool res = 
                    
                w->signalsBlocked(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for signalsBlocked";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::blockSignals
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_bool(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: b (bool)
  
bool a1_cpp;

      a1_cpp = js2cpp_bool(handler, a1);
        

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
                QScreen* w = getWrapped();
                bool res = 
                    
                w->blockSignals(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blockSignals";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::findChild
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
        is_QString(handler, a1
    , true
  
  )

   && is_Qt_FindChildOptions(handler, a2
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
            a1_cpp = js2cpp_QString(handler, a1);
          }
        
  // convert js parameter to cpp: options (Qt::FindChildOptions)
  
Qt::FindChildOptions a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::FindChildrenRecursively;
          }
          else {
            a2_cpp = js2cpp_Qt_FindChildOptions(handler, a2);
          }
        

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
                QScreen* w = getWrapped();
                QObject* res = 
                    
                w->findChild<QObject*>(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QObject*

            return cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for findChild";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::children
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
                QScreen* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QObjectList* res =
                    &
                w->children(
                  
                );
              
                //setRecFlag(false);
              
            // return type: const QObjectList&

            return cpp2js_QObjectList(
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
            
    // Class: QScreen
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::setParent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        

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
                QScreen* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::installEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: filterObj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        

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
                QScreen* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::removeEventFilter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: obj (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      a1_cpp = js2cpp_QObject_ptr(handler, a1);
        

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
                QScreen* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::dumpObjectTree
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QScreen* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

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
                QScreen* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::dumpObjectInfo
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QScreen* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

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
                QScreen* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::setProperty
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

   && is_QVariant(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = js2cpp_QVariant(handler, a2);
        

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
                QScreen* w = getWrapped();
                bool res = 
                    
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setProperty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::property
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_char_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (char)
  

      // char pointer string:
      QByteArray a1_ba = js2cpp_char_ptr(handler, a1).toLocal8Bit();
      const char* a1_cpp = a1_ba.constData();
    

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
                QScreen* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QVariant

            return cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for property";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::dynamicPropertyNames
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
                QScreen* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->dynamicPropertyNames(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<QByteArray>

            return cpp2js_QList_QByteArray(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dynamicPropertyNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::parent
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
                QScreen* w = getWrapped();
                QObject* res = 
                    
                w->parent(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QObject*

            return cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::deleteLater
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QScreen* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::name
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
                QScreen* w = getWrapped();
                QString res = 
                    
                w->name(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: manufacturer
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::manufacturer
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
                QScreen* w = getWrapped();
                QString res = 
                    
                w->manufacturer(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for manufacturer";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: model
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::model
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
                QScreen* w = getWrapped();
                QString res = 
                    
                w->model(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for model";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: serialNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::serialNumber
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
                QScreen* w = getWrapped();
                QString res = 
                    
                w->serialNumber(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for serialNumber";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: depth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::depth
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
                QScreen* w = getWrapped();
                int res = 
                    
                w->depth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for depth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::size
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
                QScreen* w = getWrapped();
                QSize res = 
                    
                w->size(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: geometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::geometry
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
                QScreen* w = getWrapped();
                QRect res = 
                    
                w->geometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for geometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: physicalSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::physicalSize
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
                QScreen* w = getWrapped();
                QSizeF res = 
                    
                w->physicalSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSizeF

            return cpp2js_QSizeF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for physicalSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: physicalDotsPerInchX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::physicalDotsPerInchX
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
                QScreen* w = getWrapped();
                qreal res = 
                    
                w->physicalDotsPerInchX(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for physicalDotsPerInchX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: physicalDotsPerInchY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::physicalDotsPerInchY
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
                QScreen* w = getWrapped();
                qreal res = 
                    
                w->physicalDotsPerInchY(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for physicalDotsPerInchY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: physicalDotsPerInch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::physicalDotsPerInch
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
                QScreen* w = getWrapped();
                qreal res = 
                    
                w->physicalDotsPerInch(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for physicalDotsPerInch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: logicalDotsPerInchX
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::logicalDotsPerInchX
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
                QScreen* w = getWrapped();
                qreal res = 
                    
                w->logicalDotsPerInchX(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for logicalDotsPerInchX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: logicalDotsPerInchY
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::logicalDotsPerInchY
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
                QScreen* w = getWrapped();
                qreal res = 
                    
                w->logicalDotsPerInchY(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for logicalDotsPerInchY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: logicalDotsPerInch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::logicalDotsPerInch
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
                QScreen* w = getWrapped();
                qreal res = 
                    
                w->logicalDotsPerInch(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for logicalDotsPerInch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: devicePixelRatio
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::devicePixelRatio
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
                QScreen* w = getWrapped();
                qreal res = 
                    
                w->devicePixelRatio(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for devicePixelRatio";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: availableSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::availableSize
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
                QScreen* w = getWrapped();
                QSize res = 
                    
                w->availableSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availableSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: availableGeometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::availableGeometry
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
                QScreen* w = getWrapped();
                QRect res = 
                    
                w->availableGeometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availableGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: virtualSiblings
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::virtualSiblings
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
                QScreen* w = getWrapped();
                QList<QScreen*> res = 
                    
                w->virtualSiblings(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QList<QScreen*>

            return cpp2js_QList_QScreen_ptr(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for virtualSiblings";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: virtualSiblingAt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::virtualSiblingAt
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QPoint)
  
QPoint a1_cpp;

      a1_cpp = js2cpp_QPoint(handler, a1);
        

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
                QScreen* w = getWrapped();
                QScreen* res = 
                    
                w->virtualSiblingAt(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QScreen*

            return cpp2js_QScreen(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for virtualSiblingAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: virtualSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::virtualSize
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
                QScreen* w = getWrapped();
                QSize res = 
                    
                w->virtualSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for virtualSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: virtualGeometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::virtualGeometry
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
                QScreen* w = getWrapped();
                QRect res = 
                    
                w->virtualGeometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for virtualGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: availableVirtualSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::availableVirtualSize
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
                QScreen* w = getWrapped();
                QSize res = 
                    
                w->availableVirtualSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availableVirtualSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: availableVirtualGeometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::availableVirtualGeometry
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
                QScreen* w = getWrapped();
                QRect res = 
                    
                w->availableVirtualGeometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availableVirtualGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: primaryOrientation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::primaryOrientation
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
                QScreen* w = getWrapped();
                Qt::ScreenOrientation res = 
                    
                w->primaryOrientation(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::ScreenOrientation

            return cpp2js_Qt_ScreenOrientation(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for primaryOrientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: orientation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::orientation
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
                QScreen* w = getWrapped();
                Qt::ScreenOrientation res = 
                    
                w->orientation(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::ScreenOrientation

            return cpp2js_Qt_ScreenOrientation(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for orientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: nativeOrientation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::nativeOrientation
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
                QScreen* w = getWrapped();
                Qt::ScreenOrientation res = 
                    
                w->nativeOrientation(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::ScreenOrientation

            return cpp2js_Qt_ScreenOrientation(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nativeOrientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: angleBetween
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::angleBetween
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
        is_Qt_ScreenOrientation(handler, a1
  )

   && is_Qt_ScreenOrientation(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a1_cpp;

      a1_cpp = js2cpp_Qt_ScreenOrientation(handler, a1);
        
  // convert js parameter to cpp: b (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a2_cpp;

      a2_cpp = js2cpp_Qt_ScreenOrientation(handler, a2);
        

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
                QScreen* w = getWrapped();
                int res = 
                    
                w->angleBetween(
                  a1_cpp
    , a2_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: int

            return cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for angleBetween";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: transformBetween
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::transformBetween
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
        is_Qt_ScreenOrientation(handler, a1
  )

   && is_Qt_ScreenOrientation(handler, a2
  )

   && is_QRect(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a1_cpp;

      a1_cpp = js2cpp_Qt_ScreenOrientation(handler, a1);
        
  // convert js parameter to cpp: b (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a2_cpp;

      a2_cpp = js2cpp_Qt_ScreenOrientation(handler, a2);
        
  // convert js parameter to cpp: target (QRect)
  
QRect a3_cpp;

      a3_cpp = js2cpp_QRect(handler, a3);
        

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
                QScreen* w = getWrapped();
                QTransform res = 
                    
                w->transformBetween(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QTransform

            return cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transformBetween";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: mapBetween
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::mapBetween
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
        is_Qt_ScreenOrientation(handler, a1
  )

   && is_Qt_ScreenOrientation(handler, a2
  )

   && is_QRect(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a1_cpp;

      a1_cpp = js2cpp_Qt_ScreenOrientation(handler, a1);
        
  // convert js parameter to cpp: b (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a2_cpp;

      a2_cpp = js2cpp_Qt_ScreenOrientation(handler, a2);
        
  // convert js parameter to cpp: rect (QRect)
  
QRect a3_cpp;

      a3_cpp = js2cpp_QRect(handler, a3);
        

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
                QScreen* w = getWrapped();
                QRect res = 
                    
                w->mapBetween(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapBetween";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: isPortrait
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::isPortrait
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_Qt_ScreenOrientation(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orientation (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a1_cpp;

      a1_cpp = js2cpp_Qt_ScreenOrientation(handler, a1);
        

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
                QScreen* w = getWrapped();
                bool res = 
                    
                w->isPortrait(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isPortrait";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: isLandscape
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::isLandscape
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_Qt_ScreenOrientation(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orientation (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a1_cpp;

      a1_cpp = js2cpp_Qt_ScreenOrientation(handler, a1);
        

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
                QScreen* w = getWrapped();
                bool res = 
                    
                w->isLandscape(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLandscape";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: refreshRate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QScreen_Wrapper::refreshRate
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
                QScreen* w = getWrapped();
                qreal res = 
                    
                w->refreshRate(
                  
                );
              
                //setRecFlag(false);
              
            // return type: qreal

            return cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for refreshRate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QScreen
    // Function: geometryChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::geometryChangedEmitter(
                const QRect& geometry
              ) {
                // convert cpp parameters to js:
                
  // parameter: geometry (QRect)
  


  QJSValue a1_js = cpp2js_QRect(
    handler, 
    geometry
  );


                emit geometryChanged(
                  a1_js
                );
              }
            
    // Class: QScreen
    // Function: availableGeometryChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::availableGeometryChangedEmitter(
                const QRect& geometry
              ) {
                // convert cpp parameters to js:
                
  // parameter: geometry (QRect)
  


  QJSValue a1_js = cpp2js_QRect(
    handler, 
    geometry
  );


                emit availableGeometryChanged(
                  a1_js
                );
              }
            
    // Class: QScreen
    // Function: physicalSizeChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::physicalSizeChangedEmitter(
                const QSizeF& size
              ) {
                // convert cpp parameters to js:
                
  // parameter: size (QSizeF)
  


  QJSValue a1_js = cpp2js_QSizeF(
    handler, 
    size
  );


                emit physicalSizeChanged(
                  a1_js
                );
              }
            
    // Class: QScreen
    // Function: physicalDotsPerInchChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::physicalDotsPerInchChangedEmitter(
                qreal dpi
              ) {
                // convert cpp parameters to js:
                
  // parameter: dpi (qreal)
  


  QJSValue a1_js = cpp2js_qreal(
    handler, 
    dpi
  );


                emit physicalDotsPerInchChanged(
                  a1_js
                );
              }
            
    // Class: QScreen
    // Function: logicalDotsPerInchChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::logicalDotsPerInchChangedEmitter(
                qreal dpi
              ) {
                // convert cpp parameters to js:
                
  // parameter: dpi (qreal)
  


  QJSValue a1_js = cpp2js_qreal(
    handler, 
    dpi
  );


                emit logicalDotsPerInchChanged(
                  a1_js
                );
              }
            
    // Class: QScreen
    // Function: virtualGeometryChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::virtualGeometryChangedEmitter(
                const QRect& rect
              ) {
                // convert cpp parameters to js:
                
  // parameter: rect (QRect)
  


  QJSValue a1_js = cpp2js_QRect(
    handler, 
    rect
  );


                emit virtualGeometryChanged(
                  a1_js
                );
              }
            
    // Class: QScreen
    // Function: primaryOrientationChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::primaryOrientationChangedEmitter(
                Qt::ScreenOrientation orientation
              ) {
                // convert cpp parameters to js:
                
  // parameter: orientation (Qt::ScreenOrientation)
  


  QJSValue a1_js = cpp2js_Qt_ScreenOrientation(
    handler, 
    orientation
  );


                emit primaryOrientationChanged(
                  a1_js
                );
              }
            
    // Class: QScreen
    // Function: orientationChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::orientationChangedEmitter(
                Qt::ScreenOrientation orientation
              ) {
                // convert cpp parameters to js:
                
  // parameter: orientation (Qt::ScreenOrientation)
  


  QJSValue a1_js = cpp2js_Qt_ScreenOrientation(
    handler, 
    orientation
  );


                emit orientationChanged(
                  a1_js
                );
              }
            
    // Class: QScreen
    // Function: refreshRateChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QScreen_Wrapper::refreshRateChangedEmitter(
                qreal refreshRate
              ) {
                // convert cpp parameters to js:
                
  // parameter: refreshRate (qreal)
  


  QJSValue a1_js = cpp2js_qreal(
    handler, 
    refreshRate
  );


                emit refreshRateChanged(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  