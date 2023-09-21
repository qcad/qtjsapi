
  // Auto generated
  
  // include header:
  //#include "qsortfilterproxymodelwrapper.h"
  //#include "header_cpp.h"
  
    #include "qsortfilterproxymodel_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QSortFilterProxyModel
    // Function: tr
    // Source: QObject
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_WrapperSingleton::tr
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
            
    void QSortFilterProxyModel_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSortFilterProxyModel_Wrapper>("org.qcad", 1, 0, "QSortFilterProxyModel_Wrapper");
        qmlRegisterInterface<QSortFilterProxyModel_Wrapper>("QSortFilterProxyModel_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSortFilterProxyModel_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSortFilterProxyModel_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSortFilterProxyModel_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSortFilterProxyModel_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QSortFilterProxyModel_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QSortFilterProxyModel_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QSortFilterProxyModel_WrapperSingleton * s = new QSortFilterProxyModel_WrapperSingleton(handler);
        engine->globalObject().setProperty("QSortFilterProxyModel_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generated/js/QSortFilterProxyModel.js";
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
    QSortFilterProxyModel_Wrapper::QSortFilterProxyModel_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSortFilterProxyModel_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSortFilterProxyModel_Wrapper::QSortFilterProxyModel_Wrapper(RJSApi& h, QSortFilterProxyModel* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSortFilterProxyModel_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSortFilterProxyModel_Wrapper"));
              //setObjectName("QSortFilterProxyModel_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSortFilterProxyModel_Wrapper::~QSortFilterProxyModel_Wrapper() {
            //RDebug::decCounter(QString("QSortFilterProxyModel_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSortFilterProxyModel_Wrapper"));

            //qDebug() << "QSortFilterProxyModel_Wrapper::~QSortFilterProxyModel_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QSortFilterProxyModel";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSortFilterProxyModel_Wrapper::initConnections() {

          //setObjectName("QSortFilterProxyModel_Wrapper");

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
    SIGNAL(headerDataChanged(Qt::Orientation, int, int)), 
    this, 
    SLOT(headerDataChangedEmitter(Qt::Orientation, int, int))
  );

  connect(
    getWrapped(), 
    SIGNAL(rowsInserted(const QModelIndex&, int, int)), 
    this, 
    SLOT(rowsInsertedEmitter(const QModelIndex&, int, int))
  );

  connect(
    getWrapped(), 
    SIGNAL(dynamicSortFilterChanged(bool)), 
    this, 
    SLOT(dynamicSortFilterChangedEmitter(bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(filterCaseSensitivityChanged(Qt::CaseSensitivity)), 
    this, 
    SLOT(filterCaseSensitivityChangedEmitter(Qt::CaseSensitivity))
  );

  connect(
    getWrapped(), 
    SIGNAL(sortCaseSensitivityChanged(Qt::CaseSensitivity)), 
    this, 
    SLOT(sortCaseSensitivityChangedEmitter(Qt::CaseSensitivity))
  );

  connect(
    getWrapped(), 
    SIGNAL(sortLocaleAwareChanged(bool)), 
    this, 
    SLOT(sortLocaleAwareChangedEmitter(bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(sortRoleChanged(int)), 
    this, 
    SLOT(sortRoleChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(filterRoleChanged(int)), 
    this, 
    SLOT(filterRoleChangedEmitter(int))
  );

  connect(
    getWrapped(), 
    SIGNAL(recursiveFilteringEnabledChanged(bool)), 
    this, 
    SLOT(recursiveFilteringEnabledChangedEmitter(bool))
  );

  connect(
    getWrapped(), 
    SIGNAL(autoAcceptChildRowsChanged(bool)), 
    this, 
    SLOT(autoAcceptChildRowsChangedEmitter(bool))
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
  
    // Class: QSortFilterProxyModel
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QSortFilterProxyModel_Wrapper::QSortFilterProxyModel_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSortFilterProxyModel_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSortFilterProxyModel_Wrapper"));
                
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

      
          if (a1.isUndefined()) {
            a1_cpp = nullptr;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a1);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSortFilterProxyModel(
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
                  

                  qWarning() << "no matching constructor variant found for QSortFilterProxyModel";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSortFilterProxyModel
    // Function: objectName
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::objectName
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: setObjectName
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setObjectName
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->setObjectName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setObjectName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: isWidgetType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::isWidgetType
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: isWindowType
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::isWindowType
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: signalsBlocked
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::signalsBlocked
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: blockSignals
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::blockSignals
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: findChild
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::findChild
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: children
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::children
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
                QSortFilterProxyModel* w = getWrapped();
                
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
            
    // Class: QSortFilterProxyModel
    // Function: setParent
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setParent
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->setParent(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setParent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: installEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::installEventFilter
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->installEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for installEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: removeEventFilter
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::removeEventFilter
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->removeEventFilter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeEventFilter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: dumpObjectTree
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::dumpObjectTree
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
                QSortFilterProxyModel* w = getWrapped();
                
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->dumpObjectTree(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectTree";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: dumpObjectInfo
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::dumpObjectInfo
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
                QSortFilterProxyModel* w = getWrapped();
                
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->dumpObjectInfo(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for dumpObjectInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: setProperty
    // Source: QObject
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setProperty
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: property
    // Source: QObject
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::property
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: dynamicPropertyNames
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::dynamicPropertyNames
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
                QSortFilterProxyModel* w = getWrapped();
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
            
    // Class: QSortFilterProxyModel
    // Function: deleteLater
    // Source: QObject
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::deleteLater
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->deleteLater(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for deleteLater";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: hasIndex
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::hasIndex
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->hasIndex(
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

                  qWarning() << "no matching function variant found for hasIndex";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: clearItemData
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::clearItemData
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->clearItemData(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for clearItemData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: supportedDragActions
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::supportedDragActions
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
                QSortFilterProxyModel* w = getWrapped();
                Qt::DropActions res = 
                    
                w->supportedDragActions(
                  
                );
              
            // return type: Qt::DropActions

            return RJSHelper::cpp2js_Qt_DropActions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedDragActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: moveRows
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::moveRows
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
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_QModelIndex(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceParent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: sourceRow (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: count (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: destinationParent (QModelIndex)
  
QModelIndex a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QModelIndex(handler, a4);
        
  // convert js parameter to cpp: destinationChild (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->moveRows(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: moveColumns
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::moveColumns
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
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_QModelIndex(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceParent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: sourceColumn (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: count (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: destinationParent (QModelIndex)
  
QModelIndex a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QModelIndex(handler, a4);
        
  // convert js parameter to cpp: destinationChild (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->moveColumns(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: insertRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::insertRow
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

   && RJSHelper::is_QModelIndex(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QModelIndex();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QModelIndex(handler, a2);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->insertRow(
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

                  qWarning() << "no matching function variant found for insertRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: insertColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::insertColumn
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

   && RJSHelper::is_QModelIndex(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QModelIndex();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QModelIndex(handler, a2);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->insertColumn(
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

                  qWarning() << "no matching function variant found for insertColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: removeRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::removeRow
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

   && RJSHelper::is_QModelIndex(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QModelIndex();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QModelIndex(handler, a2);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->removeRow(
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

                  qWarning() << "no matching function variant found for removeRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: removeColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::removeColumn
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

   && RJSHelper::is_QModelIndex(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QModelIndex();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QModelIndex(handler, a2);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->removeColumn(
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

                  qWarning() << "no matching function variant found for removeColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: moveRow
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::moveRow
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
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceParent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: sourceRow (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: destinationParent (QModelIndex)
  
QModelIndex a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
        
  // convert js parameter to cpp: destinationChild (int)
  
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->moveRow(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveRow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: moveColumn
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::moveColumn
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
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceParent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: sourceColumn (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: destinationParent (QModelIndex)
  
QModelIndex a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
        
  // convert js parameter to cpp: destinationChild (int)
  
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->moveColumn(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for moveColumn";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: headerDataChanged
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::headerDataChangedEmitter(
                Qt::Orientation orientation, int first, int last
              ) {
                // convert cpp parameters to js:
                
  // parameter: orientation (Qt::Orientation)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_Orientation(
    handler, 
    orientation
  );

  // parameter: first (int)
  


  QJSValue a2_js = RJSHelper::cpp2js_int(
    handler, 
    first
  );

  // parameter: last (int)
  


  QJSValue a3_js = RJSHelper::cpp2js_int(
    handler, 
    last
  );


                emit headerDataChanged(
                  a1_js, a2_js, a3_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: rowsInserted
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::rowsInsertedEmitter(
                const QModelIndex& parent, int first, int last
              ) {
                // convert cpp parameters to js:
                
  // parameter: parent (QModelIndex)
  


  QJSValue a1_js = RJSHelper::cpp2js_QModelIndex(
    handler, 
    parent
  );

  // parameter: first (int)
  


  QJSValue a2_js = RJSHelper::cpp2js_int(
    handler, 
    first
  );

  // parameter: last (int)
  


  QJSValue a3_js = RJSHelper::cpp2js_int(
    handler, 
    last
  );


                emit rowsInserted(
                  a1_js, a2_js, a3_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: submit
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::submit
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->submit(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for submit";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: revert
    // Source: QAbstractItemModel
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::revert
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->revert(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for revert";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: setSourceModel
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setSourceModel
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractItemModel_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: sourceModel (QAbstractItemModel)
  

          // pointer:
          QAbstractItemModel*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractItemModel_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                
                w->setSourceModel(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSourceModel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: setFilterRegularExpression
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setFilterRegularExpression
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
    
  // convert js parameter to cpp: pattern (QString)
  
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->setFilterRegularExpression(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QRegularExpression(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: regularExpression (QRegularExpression)
  
QRegularExpression a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegularExpression(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                
                w->setFilterRegularExpression(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFilterRegularExpression";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: setFilterWildcard
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setFilterWildcard
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
    
  // convert js parameter to cpp: pattern (QString)
  
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->setFilterWildcard(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFilterWildcard";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: setFilterFixedString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setFilterFixedString
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
    
  // convert js parameter to cpp: pattern (QString)
  
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->setFilterFixedString(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFilterFixedString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: invalidate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::invalidate
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->invalidate(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for invalidate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: index
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::index
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
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
                QSortFilterProxyModel* w = getWrapped();
                QModelIndex res = 
                    
                w->index(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QModelIndex

            return RJSHelper::cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for index";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: parent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::parent
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: child (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                QModelIndex res = 
                    
                w->parent(
                  a1_cpp
    
                );
              
            // return type: QModelIndex

            return RJSHelper::cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: sibling
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::sibling
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: column (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: idx (QModelIndex)
  
QModelIndex a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                QModelIndex res = 
                    
                w->sibling(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QModelIndex

            return RJSHelper::cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sibling";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: rowCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::rowCount
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QModelIndex();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
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
                QSortFilterProxyModel* w = getWrapped();
                int res = 
                    
                w->rowCount(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rowCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: columnCount
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::columnCount
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QModelIndex();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
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
                QSortFilterProxyModel* w = getWrapped();
                int res = 
                    
                w->columnCount(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for columnCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: hasChildren
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::hasChildren
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QModelIndex();
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->hasChildren(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasChildren";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::data
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
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: role (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::DisplayRole;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
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
                QSortFilterProxyModel* w = getWrapped();
                QVariant res = 
                    
                w->data(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for data";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setData
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
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_QVariant(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QVariant(handler, a2);
        
  // convert js parameter to cpp: role (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::EditRole;
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->setData(
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

                  qWarning() << "no matching function variant found for setData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: headerData
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::headerData
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_Qt_Orientation(handler, a2
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: section (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: orientation (Qt::Orientation)
  
Qt::Orientation a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_Orientation(handler, a2);
        
  // convert js parameter to cpp: role (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::DisplayRole;
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
                QSortFilterProxyModel* w = getWrapped();
                QVariant res = 
                    
                w->headerData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for headerData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: setHeaderData
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::setHeaderData
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

   && RJSHelper::is_Qt_Orientation(handler, a2
  )

   && RJSHelper::is_QVariant(handler, a3
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: section (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: orientation (Qt::Orientation)
  
Qt::Orientation a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_Orientation(handler, a2);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QVariant(handler, a3);
        
  // convert js parameter to cpp: role (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = Qt::EditRole;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->setHeaderData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for setHeaderData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: mimeData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::mimeData
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndexList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: indexes (QModelIndexList)
  
QModelIndexList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndexList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                QMimeData* res = 
                    
                w->mimeData(
                  a1_cpp
    
                );
              
            // return type: QMimeData*

            return RJSHelper::cpp2js_QMimeData(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mimeData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: dropMimeData
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::dropMimeData
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
  a5
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QMimeData_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_Qt_DropAction(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_QModelIndex(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: data (QMimeData)
  

          // pointer:
          QMimeData*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QMimeData_ptr(handler, a1);
        
  // convert js parameter to cpp: action (Qt::DropAction)
  
Qt::DropAction a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_DropAction(handler, a2);
        
  // convert js parameter to cpp: row (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: column (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QModelIndex(handler, a5);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->dropMimeData(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dropMimeData";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: insertRows
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::insertRows
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->insertRows(
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

                  qWarning() << "no matching function variant found for insertRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: insertColumns
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::insertColumns
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->insertColumns(
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

                  qWarning() << "no matching function variant found for insertColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: removeRows
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::removeRows
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: row (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->removeRows(
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

                  qWarning() << "no matching function variant found for removeRows";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: removeColumns
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::removeColumns
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QModelIndex(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: count (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QModelIndex();
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QModelIndex(handler, a3);
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
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->removeColumns(
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

                  qWarning() << "no matching function variant found for removeColumns";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: fetchMore
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::fetchMore
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                
                w->fetchMore(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for fetchMore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: canFetchMore
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::canFetchMore
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: parent (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                bool res = 
                    
                w->canFetchMore(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for canFetchMore";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::flags
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                Qt::ItemFlags res = 
                    
                w->flags(
                  a1_cpp
    
                );
              
            // return type: Qt::ItemFlags

            return RJSHelper::cpp2js_Qt_ItemFlags(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for flags";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: buddy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::buddy
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                QModelIndex res = 
                    
                w->buddy(
                  a1_cpp
    
                );
              
            // return type: QModelIndex

            return RJSHelper::cpp2js_QModelIndex(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for buddy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: match
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::match
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
  a5
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QVariant(handler, a3
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

   && RJSHelper::is_Qt_MatchFlags(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: start (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        
  // convert js parameter to cpp: role (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: value (QVariant)
  
QVariant a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QVariant(handler, a3);
        
  // convert js parameter to cpp: hits (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        
  // convert js parameter to cpp: flags (Qt::MatchFlags)
  
Qt::MatchFlags a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = Qt::MatchFlags(Qt::MatchStartsWith|Qt::MatchWrap);
          }
          else {
            a5_cpp = RJSHelper::js2cpp_Qt_MatchFlags(handler, a5);
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
                QSortFilterProxyModel* w = getWrapped();
                QModelIndexList res = 
                    
                w->match(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            // return type: QModelIndexList

            return RJSHelper::cpp2js_QModelIndexList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for match";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: span
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::span
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QModelIndex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (QModelIndex)
  
QModelIndex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QModelIndex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSortFilterProxyModel* w = getWrapped();
                QSize res = 
                    
                w->span(
                  a1_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for span";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: sort
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::sort
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

   && RJSHelper::is_Qt_SortOrder(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: column (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: order (Qt::SortOrder)
  
Qt::SortOrder a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::AscendingOrder;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_SortOrder(handler, a2);
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
                QSortFilterProxyModel* w = getWrapped();
                
                w->sort(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for sort";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: mimeTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::mimeTypes
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
                QSortFilterProxyModel* w = getWrapped();
                QStringList res = 
                    
                w->mimeTypes(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mimeTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: supportedDropActions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSortFilterProxyModel_Wrapper::supportedDropActions
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
                QSortFilterProxyModel* w = getWrapped();
                Qt::DropActions res = 
                    
                w->supportedDropActions(
                  
                );
              
            // return type: Qt::DropActions

            return RJSHelper::cpp2js_Qt_DropActions(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedDropActions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSortFilterProxyModel
    // Function: dynamicSortFilterChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::dynamicSortFilterChangedEmitter(
                bool dynamicSortFilter
              ) {
                // convert cpp parameters to js:
                
  // parameter: dynamicSortFilter (bool)
  


  QJSValue a1_js = RJSHelper::cpp2js_bool(
    handler, 
    dynamicSortFilter
  );


                emit dynamicSortFilterChanged(
                  a1_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: filterCaseSensitivityChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::filterCaseSensitivityChangedEmitter(
                Qt::CaseSensitivity filterCaseSensitivity
              ) {
                // convert cpp parameters to js:
                
  // parameter: filterCaseSensitivity (Qt::CaseSensitivity)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_CaseSensitivity(
    handler, 
    filterCaseSensitivity
  );


                emit filterCaseSensitivityChanged(
                  a1_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: sortCaseSensitivityChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::sortCaseSensitivityChangedEmitter(
                Qt::CaseSensitivity sortCaseSensitivity
              ) {
                // convert cpp parameters to js:
                
  // parameter: sortCaseSensitivity (Qt::CaseSensitivity)
  


  QJSValue a1_js = RJSHelper::cpp2js_Qt_CaseSensitivity(
    handler, 
    sortCaseSensitivity
  );


                emit sortCaseSensitivityChanged(
                  a1_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: sortLocaleAwareChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::sortLocaleAwareChangedEmitter(
                bool sortLocaleAware
              ) {
                // convert cpp parameters to js:
                
  // parameter: sortLocaleAware (bool)
  


  QJSValue a1_js = RJSHelper::cpp2js_bool(
    handler, 
    sortLocaleAware
  );


                emit sortLocaleAwareChanged(
                  a1_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: sortRoleChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::sortRoleChangedEmitter(
                int sortRole
              ) {
                // convert cpp parameters to js:
                
  // parameter: sortRole (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    sortRole
  );


                emit sortRoleChanged(
                  a1_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: filterRoleChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::filterRoleChangedEmitter(
                int filterRole
              ) {
                // convert cpp parameters to js:
                
  // parameter: filterRole (int)
  


  QJSValue a1_js = RJSHelper::cpp2js_int(
    handler, 
    filterRole
  );


                emit filterRoleChanged(
                  a1_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: recursiveFilteringEnabledChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::recursiveFilteringEnabledChangedEmitter(
                bool recursiveFilteringEnabled
              ) {
                // convert cpp parameters to js:
                
  // parameter: recursiveFilteringEnabled (bool)
  


  QJSValue a1_js = RJSHelper::cpp2js_bool(
    handler, 
    recursiveFilteringEnabled
  );


                emit recursiveFilteringEnabledChanged(
                  a1_js
                );
              }
            
    // Class: QSortFilterProxyModel
    // Function: autoAcceptChildRowsChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal emitter: called when signal is emitted from wrapped object:
              void 
              QSortFilterProxyModel_Wrapper::autoAcceptChildRowsChangedEmitter(
                bool autoAcceptChildRows
              ) {
                // convert cpp parameters to js:
                
  // parameter: autoAcceptChildRows (bool)
  


  QJSValue a1_js = RJSHelper::cpp2js_bool(
    handler, 
    autoAcceptChildRows
  );


                emit autoAcceptChildRowsChanged(
                  a1_js
                );
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  