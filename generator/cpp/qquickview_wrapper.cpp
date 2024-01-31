
  // Auto generated
  
  // include header:
  //#include "qquickviewwrapper.h"
  //#include "header_cpp.h"
  
    #include "qquickview_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QQuickView*> QQuickView_Wrapper::basecasters_QQuickView;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QQuickView
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QQuickView_WrapperSingleton::tr
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
            
    void QQuickView_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QQuickView_Wrapper>("org.qcad", 1, 0, "QQuickView_Wrapper");
        qmlRegisterInterface<QQuickView_Wrapper>("QQuickView_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QQuickView* t = new RJSType_QQuickView();
          global.setProperty("RJSType_QQuickView", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QQuickView::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QQuickView_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QQuickView_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QQuickView_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QQuickView_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QQuickView_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QQuickView_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QQuickView_WrapperSingleton * s = new QQuickView_WrapperSingleton(handler);
        engine->globalObject().setProperty("QQuickView_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QQuickView.js";
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
    QQuickView_Wrapper::QQuickView_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QQuickView_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QQuickView_Wrapper::QQuickView_Wrapper(RJSApi& h, QQuickView* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QQuickView_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QQuickView_Wrapper"));
              //setObjectName("QQuickView_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QQuickView_Wrapper::~QQuickView_Wrapper() {
            //RDebug::decCounter(QString("QQuickView_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QQuickView_Wrapper"));

            //qDebug() << "QQuickView_Wrapper::~QQuickView_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QQuickView";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QQuickView_Wrapper::initConnections() {

          //setObjectName("QQuickView_Wrapper");

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
    SIGNAL(screenChanged(QScreen*)), 
    this, 
    SLOT(screenChangedEmitter(QScreen*))
  );

  connect(
    getWrapped(), 
    SIGNAL(modalityChanged(Qt::WindowModality)), 
    this, 
    SLOT(modalityChangedEmitter(Qt::WindowModality))
  );

  connect(
    getWrapped(), 
    SIGNAL(windowStateChanged(Qt::WindowState)), 
    this, 
    SLOT(windowStateChangedEmitter(Qt::WindowState))
  );

  connect(
    getWrapped(), 
    SIGNAL(windowTitleChanged(const QString&)), 
    this, 
    SLOT(windowTitleChangedEmitter(const QString&))
  );

  connect(
    getWrapped(), 
    SIGNAL(xChanged(int)), 
    this, 
    SLOT(xChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(yChanged(int)), 
    this, 
    SLOT(yChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(widthChanged(int)), 
    this, 
    SLOT(widthChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(heightChanged(int)), 
    this, 
    SLOT(heightChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(minimumWidthChanged(int)), 
    this, 
    SLOT(minimumWidthChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(minimumHeightChanged(int)), 
    this, 
    SLOT(minimumHeightChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(maximumWidthChanged(int)), 
    this, 
    SLOT(maximumWidthChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(maximumHeightChanged(int)), 
    this, 
    SLOT(maximumHeightChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(visibleChanged(bool)), 
    this, 
    SLOT(visibleChangedEmitter(bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(visibilityChanged(QWindow::Visibility)), 
    this, 
    SLOT(visibilityChangedEmitter(QWindow::Visibility))
  );

  connect(
    getWrapped(), 
    SIGNAL(activeChanged()), 
    this, 
    SLOT(activeChangedEmitter())
  );

  connect(
    getWrapped(), 
    SIGNAL(contentOrientationChanged(Qt::ScreenOrientation)), 
    this, 
    SLOT(contentOrientationChangedEmitter(Qt::ScreenOrientation))
  );

  connect(
    getWrapped(), 
    SIGNAL(focusObjectChanged(QObject*)), 
    this, 
    SLOT(focusObjectChangedEmitter(QObject*))
  );

  connect(
    getWrapped(), 
    SIGNAL(opacityChanged(qreal)), 
    this, 
    SLOT(opacityChangedEmitter(qreal))
  );

  connect(
    getWrapped(), 
    SIGNAL(transientParentChanged(QWindow*)), 
    this, 
    SLOT(transientParentChangedEmitter(QWindow*))
  );

  connect(
    getWrapped(), 
    SIGNAL(statusChanged(QQuickView::Status)), 
    this, 
    SLOT(statusChangedEmitter(QQuickView::Status))
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
  
    // Class: QQuickView
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QQuickView_Wrapper::QQuickView_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QQuickView_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QQuickView_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

   && RJSHelper::is_QWindow_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: source (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        
  // convert js parameter to cpp: parent (QWindow)
  

          // pointer:
          QWindow*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = nullptr;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QWindow_ptr(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QQuickView(
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
        RJSHelper::is_QWindow_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QWindow)
  

          // pointer:
          QWindow*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QWindow_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QQuickView(
                a1_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for QQuickView";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QQuickView
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::objectName
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setObjectName
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
                QQuickView* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::isWidgetType
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::isWindowType
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::signalsBlocked
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::blockSignals
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::findChild
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::children
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
                QQuickView* w = getWrapped();
                
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
            
    // Class: QQuickView
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::installEventFilter
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
                QQuickView* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::removeEventFilter
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
                QQuickView* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::dumpObjectTree
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
                QQuickView* w = getWrapped();
                
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
                QQuickView* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::dumpObjectInfo
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
                QQuickView* w = getWrapped();
                
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
                QQuickView* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setProperty
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::property
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::dynamicPropertyNames
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::deleteLater
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
                QQuickView* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: isVisible
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::isVisible
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->isVisible(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: visibility
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::visibility
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
                QQuickView* w = getWrapped();
                QWindow::Visibility res = 
                    
                w->visibility(
                  
                );
              
            // return type: QWindow::Visibility

            return RJSHelper::cpp2js_QWindow_Visibility(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for visibility";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setVisibility
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setVisibility
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWindow_Visibility(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QWindow::Visibility)
  
QWindow::Visibility a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWindow_Visibility(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setVisibility(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisibility";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: create
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::create
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
                QQuickView* w = getWrapped();
                
                w->create(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for create";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: parent
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::parent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWindow_AncestorMode(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QWindow::AncestorMode)
  
QWindow::AncestorMode a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QWindow::ExcludeTransients;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QWindow_AncestorMode(handler, a1);
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
                QQuickView* w = getWrapped();
                QWindow* res = 
                    
                w->parent(
                  a1_cpp
    
                );
              
            // return type: QWindow*

            return RJSHelper::cpp2js_QWindow(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setParent
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setParent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWindow_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QWindow)
  

          // pointer:
          QWindow*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWindow_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: isTopLevel
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::isTopLevel
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->isTopLevel(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTopLevel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: isModal
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::isModal
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->isModal(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isModal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: modality
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::modality
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
                QQuickView* w = getWrapped();
                Qt::WindowModality res = 
                    
                w->modality(
                  
                );
              
            // return type: Qt::WindowModality

            return RJSHelper::cpp2js_Qt_WindowModality(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for modality";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setModality
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setModality
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowModality(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: modality (Qt::WindowModality)
  
Qt::WindowModality a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowModality(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setModality(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setModality";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setFlags
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setFlags
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowFlags(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: flags (Qt::WindowFlags)
  
Qt::WindowFlags a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowFlags(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setFlags(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFlags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: flags
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::flags
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
                QQuickView* w = getWrapped();
                Qt::WindowFlags res = 
                    
                w->flags(
                  
                );
              
            // return type: Qt::WindowFlags

            return RJSHelper::cpp2js_Qt_WindowFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setFlag
    // Source: QWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setFlag
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowType(handler, a1
  )

   && RJSHelper::is_bool(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::WindowType)
  
Qt::WindowType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowType(handler, a1);
        
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
                QQuickView* w = getWrapped();
                
                w->setFlag(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFlag";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: type
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::type
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
                QQuickView* w = getWrapped();
                Qt::WindowType res = 
                    
                w->type(
                  
                );
              
            // return type: Qt::WindowType

            return RJSHelper::cpp2js_Qt_WindowType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: title
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::title
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
                QQuickView* w = getWrapped();
                QString res = 
                    
                w->title(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for title";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setOpacity
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setOpacity
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
    
  // convert js parameter to cpp: level (qreal)
  
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
                QQuickView* w = getWrapped();
                
                w->setOpacity(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOpacity";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: opacity
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::opacity
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: setMask
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setMask
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: region (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setMask(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: mask
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::mask
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
                QQuickView* w = getWrapped();
                QRegion res = 
                    
                w->mask(
                  
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: isActive
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::isActive
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: reportContentOrientationChange
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::reportContentOrientationChange
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_ScreenOrientation(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: orientation (Qt::ScreenOrientation)
  
Qt::ScreenOrientation a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_ScreenOrientation(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->reportContentOrientationChange(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for reportContentOrientationChange";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: contentOrientation
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::contentOrientation
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
                QQuickView* w = getWrapped();
                Qt::ScreenOrientation res = 
                    
                w->contentOrientation(
                  
                );
              
            // return type: Qt::ScreenOrientation

            return RJSHelper::cpp2js_Qt_ScreenOrientation(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contentOrientation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: devicePixelRatio
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::devicePixelRatio
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: windowState
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::windowState
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
                QQuickView* w = getWrapped();
                Qt::WindowState res = 
                    
                w->windowState(
                  
                );
              
            // return type: Qt::WindowState

            return RJSHelper::cpp2js_Qt_WindowState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: windowStates
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::windowStates
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
                QQuickView* w = getWrapped();
                Qt::WindowStates res = 
                    
                w->windowStates(
                  
                );
              
            // return type: Qt::WindowStates

            return RJSHelper::cpp2js_Qt_WindowStates(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setWindowState
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setWindowState
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowState(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: state (Qt::WindowState)
  
Qt::WindowState a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowState(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setWindowState(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowState";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setWindowStates
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setWindowStates
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_WindowStates(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: states (Qt::WindowStates)
  
Qt::WindowStates a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_WindowStates(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setWindowStates(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWindowStates";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setTransientParent
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setTransientParent
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWindow_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QWindow)
  

          // pointer:
          QWindow*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWindow_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setTransientParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransientParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: transientParent
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::transientParent
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
                QQuickView* w = getWrapped();
                QWindow* res = 
                    
                w->transientParent(
                  
                );
              
            // return type: QWindow*

            return RJSHelper::cpp2js_QWindow(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transientParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: isAncestorOf
    // Source: QWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::isAncestorOf
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
        RJSHelper::is_QWindow_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QWindow_AncestorMode(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: child (QWindow)
  

          // pointer:
          QWindow*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWindow_ptr(handler, a1);
        
  // convert js parameter to cpp: mode (QWindow::AncestorMode)
  
QWindow::AncestorMode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QWindow::IncludeTransients;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QWindow_AncestorMode(handler, a2);
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->isAncestorOf(
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

                  qWarning() << "no matching function variant found for isAncestorOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: isExposed
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::isExposed
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->isExposed(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isExposed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: minimumWidth
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::minimumWidth
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
                QQuickView* w = getWrapped();
                int res = 
                    
                w->minimumWidth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: minimumHeight
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::minimumHeight
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
                QQuickView* w = getWrapped();
                int res = 
                    
                w->minimumHeight(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: maximumWidth
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::maximumWidth
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
                QQuickView* w = getWrapped();
                int res = 
                    
                w->maximumWidth(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: maximumHeight
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::maximumHeight
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
                QQuickView* w = getWrapped();
                int res = 
                    
                w->maximumHeight(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: minimumSize
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::minimumSize
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
                QQuickView* w = getWrapped();
                QSize res = 
                    
                w->minimumSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: maximumSize
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::maximumSize
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
                QQuickView* w = getWrapped();
                QSize res = 
                    
                w->maximumSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: baseSize
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::baseSize
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
                QQuickView* w = getWrapped();
                QSize res = 
                    
                w->baseSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for baseSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: sizeIncrement
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::sizeIncrement
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
                QQuickView* w = getWrapped();
                QSize res = 
                    
                w->sizeIncrement(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizeIncrement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setMinimumSize
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setMinimumSize
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
                QQuickView* w = getWrapped();
                
                w->setMinimumSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinimumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setMaximumSize
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setMaximumSize
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
                QQuickView* w = getWrapped();
                
                w->setMaximumSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaximumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setBaseSize
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setBaseSize
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
                QQuickView* w = getWrapped();
                
                w->setBaseSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBaseSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setSizeIncrement
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setSizeIncrement
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
                QQuickView* w = getWrapped();
                
                w->setSizeIncrement(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSizeIncrement";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: geometry
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::geometry
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
                QQuickView* w = getWrapped();
                QRect res = 
                    
                w->geometry(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for geometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: frameMargins
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::frameMargins
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
                QQuickView* w = getWrapped();
                QMargins res = 
                    
                w->frameMargins(
                  
                );
              
            // return type: QMargins

            return RJSHelper::cpp2js_QMargins(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameMargins";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: frameGeometry
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::frameGeometry
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
                QQuickView* w = getWrapped();
                QRect res = 
                    
                w->frameGeometry(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for frameGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: framePosition
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::framePosition
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
                QQuickView* w = getWrapped();
                QPoint res = 
                    
                w->framePosition(
                  
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for framePosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setFramePosition
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setFramePosition
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: point (QPoint)
  
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
                QQuickView* w = getWrapped();
                
                w->setFramePosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFramePosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: width
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::width
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: height
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::height
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: x
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::x
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
                QQuickView* w = getWrapped();
                int res = 
                    
                w->x(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for x";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: y
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::y
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
                QQuickView* w = getWrapped();
                int res = 
                    
                w->y(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for y";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: size
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::size
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
                QQuickView* w = getWrapped();
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
            
    // Class: QQuickView
    // Function: position
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::position
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
                QQuickView* w = getWrapped();
                QPoint res = 
                    
                w->position(
                  
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for position";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setPosition
    // Source: QWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setPosition
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
    
  // convert js parameter to cpp: posx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: posy (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setPosition(
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
    
  // convert js parameter to cpp: pt (QPoint)
  
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
                QQuickView* w = getWrapped();
                
                w->setPosition(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: resize
    // Source: QWindow
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::resize
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
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
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
                QQuickView* w = getWrapped();
                
                w->resize(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QSize(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: newSize (QSize)
  
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
                QQuickView* w = getWrapped();
                
                w->resize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for resize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setFilePath
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setFilePath
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
    
  // convert js parameter to cpp: filePath (QString)
  
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
                QQuickView* w = getWrapped();
                
                w->setFilePath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFilePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: filePath
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::filePath
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
                QQuickView* w = getWrapped();
                QString res = 
                    
                w->filePath(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for filePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setIcon
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setIcon
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QIcon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: icon (QIcon)
  
QIcon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIcon(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setIcon(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: icon
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::icon
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
                QQuickView* w = getWrapped();
                QIcon res = 
                    
                w->icon(
                  
                );
              
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for icon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: destroy
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::destroy
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
                QQuickView* w = getWrapped();
                
                w->destroy(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for destroy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setKeyboardGrabEnabled
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setKeyboardGrabEnabled
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
    
  // convert js parameter to cpp: grab (bool)
  
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->setKeyboardGrabEnabled(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setKeyboardGrabEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setMouseGrabEnabled
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setMouseGrabEnabled
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
    
  // convert js parameter to cpp: grab (bool)
  
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->setMouseGrabEnabled(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setMouseGrabEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: screen
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::screen
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
                QQuickView* w = getWrapped();
                QScreen* res = 
                    
                w->screen(
                  
                );
              
            // return type: QScreen*

            return RJSHelper::cpp2js_QScreen(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for screen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setScreen
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setScreen
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QScreen_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: screen (QScreen)
  

          // pointer:
          QScreen*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QScreen_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setScreen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setScreen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: focusObject
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::focusObject
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
                QQuickView* w = getWrapped();
                QObject* res = 
                    
                w->focusObject(
                  
                );
              
            // return type: QObject*

            return RJSHelper::cpp2js_QObject(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focusObject";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: mapToGlobal
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::mapToGlobal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (QPointF)
  
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
                QQuickView* w = getWrapped();
                QPointF res = 
                    
                w->mapToGlobal(
                  a1_cpp
    
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (QPoint)
  
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
                QQuickView* w = getWrapped();
                QPoint res = 
                    
                w->mapToGlobal(
                  a1_cpp
    
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapToGlobal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: mapFromGlobal
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::mapFromGlobal
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (QPointF)
  
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
                QQuickView* w = getWrapped();
                QPointF res = 
                    
                w->mapFromGlobal(
                  a1_cpp
    
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (QPoint)
  
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
                QQuickView* w = getWrapped();
                QPoint res = 
                    
                w->mapFromGlobal(
                  a1_cpp
    
                );
              
            // return type: QPoint

            return RJSHelper::cpp2js_QPoint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mapFromGlobal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: cursor
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::cursor
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
                QQuickView* w = getWrapped();
                QCursor res = 
                    
                w->cursor(
                  
                );
              
            // return type: QCursor

            return RJSHelper::cpp2js_QCursor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setCursor
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setCursor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QCursor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QCursor)
  
QCursor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QCursor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setCursor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: unsetCursor
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::unsetCursor
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
                QQuickView* w = getWrapped();
                
                w->unsetCursor(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetCursor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: requestActivate
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::requestActivate
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
                QQuickView* w = getWrapped();
                
                w->requestActivate(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for requestActivate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setVisible
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setVisible
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
    
  // convert js parameter to cpp: visible (bool)
  
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
                QQuickView* w = getWrapped();
                
                w->setVisible(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setVisible";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: show
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::show
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
                QQuickView* w = getWrapped();
                
                w->show(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for show";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: hide
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::hide
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
                QQuickView* w = getWrapped();
                
                w->hide(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for hide";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: showMinimized
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::showMinimized
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
                QQuickView* w = getWrapped();
                
                w->showMinimized(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showMinimized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: showMaximized
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::showMaximized
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
                QQuickView* w = getWrapped();
                
                w->showMaximized(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showMaximized";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: showFullScreen
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::showFullScreen
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
                QQuickView* w = getWrapped();
                
                w->showFullScreen(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showFullScreen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: showNormal
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::showNormal
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
                QQuickView* w = getWrapped();
                
                w->showNormal(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for showNormal";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: close
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::close
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->close(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for close";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: raise
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::raise
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
                QQuickView* w = getWrapped();
                
                w->raise(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for raise";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: lower
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::lower
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
                QQuickView* w = getWrapped();
                
                w->lower(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for lower";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: startSystemResize
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::startSystemResize
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_Edges(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: edges (Qt::Edges)
  
Qt::Edges a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_Edges(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->startSystemResize(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startSystemResize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: startSystemMove
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::startSystemMove
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
                QQuickView* w = getWrapped();
                bool res = 
                    
                w->startSystemMove(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for startSystemMove";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setTitle
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setTitle
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
    
  // convert js parameter to cpp:  (QString)
  
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
                QQuickView* w = getWrapped();
                
                w->setTitle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTitle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setX
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setX
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
    
  // convert js parameter to cpp: arg (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setX(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setX";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setY
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setY
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
    
  // convert js parameter to cpp: arg (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setY(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setY";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setWidth
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setWidth
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
    
  // convert js parameter to cpp: arg (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setHeight
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setHeight
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
    
  // convert js parameter to cpp: arg (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setGeometry
    // Source: QWindow
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setGeometry
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
    
  // convert js parameter to cpp: posx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: posy (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setGeometry(
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
                QQuickView* w = getWrapped();
                
                w->setGeometry(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setMinimumWidth
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setMinimumWidth
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
    
  // convert js parameter to cpp: w (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setMinimumWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinimumWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setMinimumHeight
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setMinimumHeight
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
    
  // convert js parameter to cpp: h (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setMinimumHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMinimumHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setMaximumWidth
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setMaximumWidth
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
    
  // convert js parameter to cpp: w (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setMaximumWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaximumWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setMaximumHeight
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setMaximumHeight
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
    
  // convert js parameter to cpp: h (int)
  
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
                QQuickView* w = getWrapped();
                
                w->setMaximumHeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setMaximumHeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: alert
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::alert
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
    
  // convert js parameter to cpp: msec (int)
  
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
                QQuickView* w = getWrapped();
                
                w->alert(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for alert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: requestUpdate
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::requestUpdate
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
                QQuickView* w = getWrapped();
                
                w->requestUpdate(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for requestUpdate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: screenChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::screenChangedEmitter(
                QScreen* screen
              ) {
                // convert cpp parameters to js:
                
  // parameter: screen (QScreen)
  


  QJSValue a1_js = RJSHelper::cpp2js_QScreen(
    handler, 
    screen
  );


                emit screenChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: modalityChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::modalityChangedEmitter(
                Qt::WindowModality modality
              ) {
                // convert cpp parameters to js:
                
  // parameter: modality (Qt::WindowModality)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_WindowModality(
    handler, 
    modality
  );


                emit modalityChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: windowStateChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::windowStateChangedEmitter(
                Qt::WindowState windowState
              ) {
                // convert cpp parameters to js:
                
  // parameter: windowState (Qt::WindowState)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_WindowState(
    handler, 
    windowState
  );


                emit windowStateChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: windowTitleChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::windowTitleChangedEmitter(
                const QString& title
              ) {
                // convert cpp parameters to js:
                
  // parameter: title (QString)
  


  QJSValue a1_js = RJSHelper::cpp2js_QString(
    handler, 
    title
  );


                emit windowTitleChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: xChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::xChangedEmitter(
                int arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    arg
  );


                emit xChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: yChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::yChangedEmitter(
                int arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    arg
  );


                emit yChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: widthChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::widthChangedEmitter(
                int arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    arg
  );


                emit widthChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: heightChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::heightChangedEmitter(
                int arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    arg
  );


                emit heightChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: minimumWidthChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::minimumWidthChangedEmitter(
                int arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    arg
  );


                emit minimumWidthChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: minimumHeightChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::minimumHeightChangedEmitter(
                int arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    arg
  );


                emit minimumHeightChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: maximumWidthChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::maximumWidthChangedEmitter(
                int arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    arg
  );


                emit maximumWidthChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: maximumHeightChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::maximumHeightChangedEmitter(
                int arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    arg
  );


                emit maximumHeightChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: visibleChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::visibleChangedEmitter(
                bool arg
              ) {
                // convert cpp parameters to js:
                
  // parameter: arg (bool)
  


  QJSValue a1_js = RJSHelper::cpp2js_bool(
    handler, 
    arg
  );


                emit visibleChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: visibilityChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::visibilityChangedEmitter(
                QWindow::Visibility visibility
              ) {
                // convert cpp parameters to js:
                
  // parameter: visibility (QWindow::Visibility)
  


  QJSValue a1_js = RJSHelper::cpp2js_QWindow_Visibility(
    handler, 
    visibility
  );


                emit visibilityChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: activeChanged
    // Source: QWindow
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::activeChangedEmitter(
                
              ) {
                // convert cpp parameters to js:
                

                emit activeChanged(
                  
                );
              }
            
    // Class: QQuickView
    // Function: contentOrientationChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::contentOrientationChangedEmitter(
                Qt::ScreenOrientation orientation
              ) {
                // convert cpp parameters to js:
                
  // parameter: orientation (Qt::ScreenOrientation)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_ScreenOrientation(
    handler, 
    orientation
  );


                emit contentOrientationChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: focusObjectChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::focusObjectChangedEmitter(
                QObject* object
              ) {
                // convert cpp parameters to js:
                
  // parameter: object (QObject)
  


  QJSValue a1_js = RJSHelper::cpp2js_QObject(
    handler, 
    object
  );


                emit focusObjectChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: opacityChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::opacityChangedEmitter(
                qreal opacity
              ) {
                // convert cpp parameters to js:
                
  // parameter: opacity (qreal)
  


  QJSValue a1_js = RJSHelper::cpp2js_qreal(
    handler, 
    opacity
  );


                emit opacityChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: transientParentChanged
    // Source: QWindow
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::transientParentChangedEmitter(
                QWindow* transientParent
              ) {
                // convert cpp parameters to js:
                
  // parameter: transientParent (QWindow)
  


  QJSValue a1_js = RJSHelper::cpp2js_QWindow(
    handler, 
    transientParent
  );


                emit transientParentChanged(
                  a1_js
                );
              }
            
    // Class: QQuickView
    // Function: resizeMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::resizeMode
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
                QQuickView* w = getWrapped();
                QQuickView::ResizeMode res = 
                    
                w->resizeMode(
                  
                );
              
            // return type: QQuickView::ResizeMode

            return RJSHelper::cpp2js_QQuickView_ResizeMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for resizeMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setResizeMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setResizeMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QQuickView_ResizeMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QQuickView::ResizeMode)
  
QQuickView::ResizeMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QQuickView_ResizeMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setResizeMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setResizeMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setSource
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setSource
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setSource(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSource";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: setInitialProperties
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QQuickView_Wrapper::setInitialProperties
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QVariantMap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: initialProperties (QVariantMap)
  
QVariantMap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QVariantMap(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QQuickView* w = getWrapped();
                
                w->setInitialProperties(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInitialProperties";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QQuickView
    // Function: statusChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QQuickView_Wrapper::statusChangedEmitter(
                QQuickView::Status a1
              ) {
                // convert cpp parameters to js:
                
  // parameter:  (QQuickView::Status)
  


  QJSValue a1_js = RJSHelper::cpp2js_QQuickView_Status(
    handler, 
    a1
  );


                emit statusChanged(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
