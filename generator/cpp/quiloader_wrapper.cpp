
  // Auto generated
  
  // include header:
  //#include "quiloaderwrapper.h"
  //#include "header_cpp.h"
  
    #include "quiloader_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QUiLoader
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_WrapperSingleton::tr
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
            
    void QUiLoader_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QUiLoader_Wrapper>("org.qcad", 1, 0, "QUiLoader_Wrapper");
        qmlRegisterInterface<QUiLoader_Wrapper>("QUiLoader_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QUiLoader_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QUiLoader_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QUiLoader_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QUiLoader_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QUiLoader_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QUiLoader_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QUiLoader_WrapperSingleton * s = new QUiLoader_WrapperSingleton(handler);
        engine->globalObject().setProperty("QUiLoader_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QUiLoader.js";
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
    QUiLoader_Wrapper::QUiLoader_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QUiLoader_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QUiLoader_Wrapper::QUiLoader_Wrapper(RJSApi& h, QUiLoader* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QUiLoader_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QUiLoader_Wrapper"));
              //setObjectName("QUiLoader_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QUiLoader_Wrapper::~QUiLoader_Wrapper() {
            //RDebug::decCounter(QString("QUiLoader_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QUiLoader_Wrapper"));

            //qDebug() << "QUiLoader_Wrapper::~QUiLoader_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QUiLoader";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QUiLoader_Wrapper::initConnections() {

          //setObjectName("QUiLoader_Wrapper");

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
                SIGNAL(destroyed(QObject*)),
                &handler,
                SLOT(slotDestroyed(QObject*))
              );
            
          }
        }
      

  // constructors:
  
    // Class: QUiLoader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QUiLoader_Wrapper::QUiLoader_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QUiLoader_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QUiLoader_Wrapper"));
                
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

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = js2cpp_QObject_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QUiLoader(
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QUiLoader";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QUiLoader
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::objectName
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
                QUiLoader* w = getWrapped();
                QString res = 
                    
                w->objectName(
                  
                );
              
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
            
    // Class: QUiLoader
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::setObjectName
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::isWidgetType
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
                QUiLoader* w = getWrapped();
                bool res = 
                    
                w->isWidgetType(
                  
                );
              
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
            
    // Class: QUiLoader
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::isWindowType
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
                QUiLoader* w = getWrapped();
                bool res = 
                    
                w->isWindowType(
                  
                );
              
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
            
    // Class: QUiLoader
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::signalsBlocked
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
                QUiLoader* w = getWrapped();
                bool res = 
                    
                w->signalsBlocked(
                  
                );
              
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
            
    // Class: QUiLoader
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::blockSignals
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                bool res = 
                    
                w->blockSignals(
                  a1_cpp
    
                );
              
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
            
    // Class: QUiLoader
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::findChild
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                QObject* res = 
                    
                w->findChild<QObject*>(
                  a1_cpp
    , a2_cpp
    
                );
              
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
            
    // Class: QUiLoader
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::children
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
                QUiLoader* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QObjectList* res =
                    &
                w->children(
                  
                );
              
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
            
    // Class: QUiLoader
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::setParent
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::installEventFilter
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::removeEventFilter
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::dumpObjectTree
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
                QUiLoader* w = getWrapped();
                
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
                QUiLoader* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::dumpObjectInfo
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
                QUiLoader* w = getWrapped();
                
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
                QUiLoader* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::setProperty
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                bool res = 
                    
                w->setProperty(
                  a1_cpp
    , a2_cpp
    
                );
              
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
            
    // Class: QUiLoader
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::property
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

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                QVariant res = 
                    
                w->property(
                  a1_cpp
    
                );
              
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
            
    // Class: QUiLoader
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::dynamicPropertyNames
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
                QUiLoader* w = getWrapped();
                QList<QByteArray> res = 
                    
                w->dynamicPropertyNames(
                  
                );
              
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
            
    // Class: QUiLoader
    // Function: parent
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::parent
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
                QUiLoader* w = getWrapped();
                QObject* res = 
                    
                w->parent(
                  
                );
              
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
            
    // Class: QUiLoader
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::deleteLater
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
                QUiLoader* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: pluginPaths
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::pluginPaths
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
                QUiLoader* w = getWrapped();
                QStringList res = 
                    
                w->pluginPaths(
                  
                );
              
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pluginPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: clearPluginPaths
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::clearPluginPaths
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
                QUiLoader* w = getWrapped();
                
                w->clearPluginPaths(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearPluginPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: addPluginPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::addPluginPath
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
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                
                w->addPluginPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPluginPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: load
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::load
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QIODevice_ptr(handler, a1
    , true
  
  )

   && is_QWidget_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: device (QIODevice)
  

          // pointer:
          QIODevice*
         a1_cpp;

      a1_cpp = js2cpp_QIODevice_ptr(handler, a1);
        
  // convert js parameter to cpp: parentWidget (QWidget)
  

          // pointer:
          QWidget*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = nullptr;
          }
          else {
            a2_cpp = js2cpp_QWidget_ptr(handler, a2);
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
                QUiLoader* w = getWrapped();
                QWidget* res = 
                    
                w->load(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QWidget*

            return cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for load";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: availableWidgets
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::availableWidgets
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
                QUiLoader* w = getWrapped();
                QStringList res = 
                    
                w->availableWidgets(
                  
                );
              
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availableWidgets";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: availableLayouts
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::availableLayouts
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
                QUiLoader* w = getWrapped();
                QStringList res = 
                    
                w->availableLayouts(
                  
                );
              
            // return type: QStringList

            return cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availableLayouts";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: createWidget
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::createWidget
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
        is_QString(handler, a1
  )

   && is_QWidget_ptr(handler, a2
    , true
  
  )

   && is_QString(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: className (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: parent (QWidget)
  

          // pointer:
          QWidget*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = nullptr;
          }
          else {
            a2_cpp = js2cpp_QWidget_ptr(handler, a2);
          }
        
  // convert js parameter to cpp: name (QString)
  
QString a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QString();
          }
          else {
            a3_cpp = js2cpp_QString(handler, a3);
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
                QUiLoader* w = getWrapped();
                QWidget* res = 
                    
                w->createWidget(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QWidget*

            return cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createWidget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: createLayout
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::createLayout
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
        is_QString(handler, a1
  )

   && is_QObject_ptr(handler, a2
    , true
  
  )

   && is_QString(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: className (QString)
  
QString a1_cpp;

      a1_cpp = js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = nullptr;
          }
          else {
            a2_cpp = js2cpp_QObject_ptr(handler, a2);
          }
        
  // convert js parameter to cpp: name (QString)
  
QString a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QString();
          }
          else {
            a3_cpp = js2cpp_QString(handler, a3);
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
                QUiLoader* w = getWrapped();
                QLayout* res = 
                    
                w->createLayout(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QLayout*

            return cpp2js_QLayout(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createLayout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: createActionGroup
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::createActionGroup
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

   && is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = js2cpp_QObject_ptr(handler, a1);
          }
        
  // convert js parameter to cpp: name (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = js2cpp_QString(handler, a2);
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
                QUiLoader* w = getWrapped();
                QActionGroup* res = 
                    
                w->createActionGroup(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QActionGroup*

            return cpp2js_QActionGroup(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createActionGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: createAction
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::createAction
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QObject_ptr(handler, a1
    , true
  
  )

   && is_QString(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QObject)
  

          // pointer:
          QObject*
         a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = js2cpp_QObject_ptr(handler, a1);
          }
        
  // convert js parameter to cpp: name (QString)
  
QString a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QString();
          }
          else {
            a2_cpp = js2cpp_QString(handler, a2);
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
                QUiLoader* w = getWrapped();
                QAction* res = 
                    
                w->createAction(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QAction*

            return cpp2js_QAction(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for createAction";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: setWorkingDirectory
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::setWorkingDirectory
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QDir(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dir (QDir)
  
QDir a1_cpp;

      a1_cpp = js2cpp_QDir(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                
                w->setWorkingDirectory(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWorkingDirectory";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: workingDirectory
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::workingDirectory
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
                QUiLoader* w = getWrapped();
                QDir res = 
                    
                w->workingDirectory(
                  
                );
              
            // return type: QDir

            return cpp2js_QDir(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for workingDirectory";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: setLanguageChangeEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::setLanguageChangeEnabled
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
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                
                w->setLanguageChangeEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLanguageChangeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: isLanguageChangeEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::isLanguageChangeEnabled
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
                QUiLoader* w = getWrapped();
                bool res = 
                    
                w->isLanguageChangeEnabled(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isLanguageChangeEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: setTranslationEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::setTranslationEnabled
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
    
  // convert js parameter to cpp: enabled (bool)
  
bool a1_cpp;

      a1_cpp = js2cpp_bool(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QUiLoader* w = getWrapped();
                
                w->setTranslationEnabled(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTranslationEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: isTranslationEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::isTranslationEnabled
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
                QUiLoader* w = getWrapped();
                bool res = 
                    
                w->isTranslationEnabled(
                  
                );
              
            // return type: bool

            return cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isTranslationEnabled";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QUiLoader
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QUiLoader_Wrapper::errorString
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
                QUiLoader* w = getWrapped();
                QString res = 
                    
                w->errorString(
                  
                );
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for errorString";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  