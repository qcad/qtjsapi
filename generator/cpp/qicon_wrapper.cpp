
  // Auto generated
  
  // include header:
  //#include "qiconwrapper.h"
  //#include "header_cpp.h"
  
    #include "qicon_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QIcon
    // Function: fromTheme
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::fromTheme
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

   && RJSHelper::is_QIcon(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: fallback (QIcon)
  
QIcon a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QIcon(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QIcon res = 
                
                // call static member function:
                QIcon::fromTheme(
              a1_cpp
    , a2_cpp
    
            );
          
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

  &&
    a2.isUndefined()

    
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QIcon res = 
                
                // call static member function:
                QIcon::fromTheme(
              a1_cpp
    
            );
          
            // return type: QIcon

            return RJSHelper::cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromTheme";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: hasThemeIcon
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::hasThemeIcon
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
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QIcon::hasThemeIcon(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasThemeIcon";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: themeSearchPaths
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::themeSearchPaths
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QIcon::themeSearchPaths(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for themeSearchPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: setThemeSearchPaths
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::setThemeSearchPaths
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: searchpath (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QIcon::setThemeSearchPaths(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setThemeSearchPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: fallbackSearchPaths
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::fallbackSearchPaths
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QIcon::fallbackSearchPaths(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fallbackSearchPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: setFallbackSearchPaths
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::setFallbackSearchPaths
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStringList(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: paths (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QIcon::setFallbackSearchPaths(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFallbackSearchPaths";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: themeName
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::themeName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QIcon::themeName(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for themeName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: setThemeName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::setThemeName
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
    
  // convert js parameter to cpp: path (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QIcon::setThemeName(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setThemeName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: fallbackThemeName
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::fallbackThemeName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QIcon::fallbackThemeName(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fallbackThemeName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: setFallbackThemeName
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QIcon_WrapperSingleton::setFallbackThemeName
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QIcon::setFallbackThemeName(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFallbackThemeName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QIcon_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QIcon_Wrapper>("org.qcad", 1, 0, "QIcon_Wrapper");
        qmlRegisterInterface<QIcon_Wrapper>("QIcon_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QIcon* t = new RJSType_QIcon();
          global.setProperty("RJSType_QIcon", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QIcon::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QIcon_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QIcon_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QIcon_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QIcon_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QIcon_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QIcon_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QIcon_WrapperSingleton * s = new QIcon_WrapperSingleton(handler);
        engine->globalObject().setProperty("QIcon_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QIcon.js";
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
    QIcon_Wrapper::QIcon_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QIcon_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QIcon_Wrapper::QIcon_Wrapper(RJSApi& h, QIcon* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QIcon_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QIcon_Wrapper"));
              //setObjectName("QIcon_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QIcon_Wrapper::~QIcon_Wrapper() {
            //RDebug::decCounter(QString("QIcon_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QIcon_Wrapper"));

            //qDebug() << "QIcon_Wrapper::~QIcon_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QIcon";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QIcon_Wrapper::initConnections() {

          //setObjectName("QIcon_Wrapper");

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
  
    // Class: QIcon
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QIcon_Wrapper::QIcon_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QIcon_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QIcon_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QPixmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPixmap(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QIcon(
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
        RJSHelper::is_QIcon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QIcon)
  
QIcon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QIcon(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QIcon(
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
        RJSHelper::is_QString(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QIcon(
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

        
            wrapped = new QIcon(
                
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
                  

                  qWarning() << "no matching constructor variant found for QIcon";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

#if QT_DEPRECATED_SINCE(6,0)

#endif


    // non-static functions:
    
    // Class: QIcon
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::swap
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
    
  // convert js parameter to cpp: other (QIcon)
  
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
                QIcon* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: pixmap
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::pixmap
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

   && RJSHelper::is_QIcon_Mode(handler, a3
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a4
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
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIcon::Normal;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a3);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QIcon::Off;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QIcon_State(handler, a4);
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
                QIcon* w = getWrapped();
                QPixmap res = 
                    
                w->pixmap(
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

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_QIcon_Mode(handler, a3
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        
  // convert js parameter to cpp: devicePixelRatio (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIcon::Normal;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a3);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QIcon::Off;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QIcon_State(handler, a4);
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
                QIcon* w = getWrapped();
                QPixmap res = 
                    
                w->pixmap(
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

   && RJSHelper::is_QIcon_Mode(handler, a2
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QIcon::Normal;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a2);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIcon::Off;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIcon_State(handler, a3);
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
                QIcon* w = getWrapped();
                QPixmap res = 
                    
                w->pixmap(
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

      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_QIcon_Mode(handler, a2
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: extent (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QIcon::Normal;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a2);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIcon::Off;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIcon_State(handler, a3);
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
                QIcon* w = getWrapped();
                QPixmap res = 
                    
                w->pixmap(
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

                  qWarning() << "no matching function variant found for pixmap";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QIcon
    // Function: actualSize
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::actualSize
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
        RJSHelper::is_QSize(handler, a1
  )

   && RJSHelper::is_QIcon_Mode(handler, a2
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: size (QSize)
  
QSize a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QSize(handler, a1);
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QIcon::Normal;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a2);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIcon::Off;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIcon_State(handler, a3);
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
                QIcon* w = getWrapped();
                QSize res = 
                    
                w->actualSize(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for actualSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_DEPRECATED_SINCE(6,0)

#endif

    // Class: QIcon
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::name
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
                QIcon* w = getWrapped();
                QString res = 
                    
                w->name(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for name";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: paint
    // Source: 
    // Static: false
    // Parameters: 8
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::paint
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
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPainter_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
  )

   && RJSHelper::is_Qt_Alignment(handler, a6
    , true
  
  )

   && RJSHelper::is_QIcon_Mode(handler, a7
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a8
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: painter (QPainter)
  

          // pointer:
          QPainter*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_ptr(handler, a1);
        
  // convert js parameter to cpp: x (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: y (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: w (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: h (int)
  
int a5_cpp;

      a5_cpp = RJSHelper::js2cpp_int(handler, a5);
        
  // convert js parameter to cpp: alignment (Qt::Alignment)
  
Qt::Alignment a6_cpp;

      
          if (a6.isUndefined()) {
            a6_cpp = Qt::AlignCenter;
          }
          else {
            a6_cpp = RJSHelper::js2cpp_Qt_Alignment(handler, a6);
          }
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a7_cpp;

      
          if (a7.isUndefined()) {
            a7_cpp = QIcon::Normal;
          }
          else {
            a7_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a7);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a8_cpp;

      
          if (a8.isUndefined()) {
            a8_cpp = QIcon::Off;
          }
          else {
            a8_cpp = RJSHelper::js2cpp_QIcon_State(handler, a8);
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
                QIcon* w = getWrapped();
                
                w->paint(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPainter_ptr(handler, a1
    , true
  
  )

   && RJSHelper::is_QRect(handler, a2
  )

   && RJSHelper::is_Qt_Alignment(handler, a3
    , true
  
  )

   && RJSHelper::is_QIcon_Mode(handler, a4
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: painter (QPainter)
  

          // pointer:
          QPainter*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPainter_ptr(handler, a1);
        
  // convert js parameter to cpp: rect (QRect)
  
QRect a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QRect(handler, a2);
        
  // convert js parameter to cpp: alignment (Qt::Alignment)
  
Qt::Alignment a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = Qt::AlignCenter;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_Qt_Alignment(handler, a3);
          }
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QIcon::Normal;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a4);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = QIcon::Off;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_QIcon_State(handler, a5);
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
                QIcon* w = getWrapped();
                
                w->paint(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for paint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::isNull
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
                QIcon* w = getWrapped();
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
            
    // Class: QIcon
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::isDetached
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
                QIcon* w = getWrapped();
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
            
    // Class: QIcon
    // Function: detach
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::detach
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
                QIcon* w = getWrapped();
                
                w->detach(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for detach";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: cacheKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::cacheKey
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
                QIcon* w = getWrapped();
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
            
    // Class: QIcon
    // Function: addPixmap
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::addPixmap
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
        RJSHelper::is_QPixmap(handler, a1
  )

   && RJSHelper::is_QIcon_Mode(handler, a2
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPixmap(handler, a1);
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QIcon::Normal;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a2);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIcon::Off;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIcon_State(handler, a3);
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
                QIcon* w = getWrapped();
                
                w->addPixmap(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addPixmap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: addFile
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::addFile
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QSize(handler, a2
    , true
  
  )

   && RJSHelper::is_QIcon_Mode(handler, a3
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: fileName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: size (QSize)
  
QSize a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QSize();
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QSize(handler, a2);
          }
        
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QIcon::Normal;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a3);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QIcon::Off;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QIcon_State(handler, a4);
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
                QIcon* w = getWrapped();
                
                w->addFile(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addFile";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: availableSizes
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::availableSizes
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
        RJSHelper::is_QIcon_Mode(handler, a1
    , true
  
  )

   && RJSHelper::is_QIcon_State(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QIcon::Mode)
  
QIcon::Mode a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QIcon::Normal;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QIcon_Mode(handler, a1);
          }
        
  // convert js parameter to cpp: state (QIcon::State)
  
QIcon::State a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QIcon::Off;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QIcon_State(handler, a2);
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
                QIcon* w = getWrapped();
                QList<QSize> res = 
                    
                w->availableSizes(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QList<QSize>

            return RJSHelper::cpp2js_QList_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availableSizes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: setIsMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::setIsMask
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
    
  // convert js parameter to cpp: isMask (bool)
  
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
                QIcon* w = getWrapped();
                
                w->setIsMask(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setIsMask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QIcon
    // Function: isMask
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QIcon_Wrapper::isMask
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
                QIcon* w = getWrapped();
                bool res = 
                    
                w->isMask(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isMask";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  