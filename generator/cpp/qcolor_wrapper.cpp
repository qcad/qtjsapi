
  // Auto generated
  
  // include header:
  //#include "qcolorwrapper.h"
  //#include "header_cpp.h"
  
    #include "qcolor_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

    // Class: QColor
    // Function: colorNames
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::colorNames
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QColor::colorNames(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for colorNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: fromRgb
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::fromRgb
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: g (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: b (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromRgb(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromRgb";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: fromRgbF
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::fromRgbF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: g (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: b (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromRgbF(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromRgbF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: fromHsv
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::fromHsv
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: s (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: v (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromHsv(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHsv";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: fromHsvF
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::fromHsvF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: s (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: v (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromHsvF(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHsvF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: fromCmyk
    // Source: 
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::fromCmyk
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: y (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: k (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: a (int)
  
int a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 255;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_int(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromCmyk(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromCmyk";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: fromCmykF
    // Source: 
    // Static: true
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::fromCmykF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
  )

   && RJSHelper::is_float(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: m (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: y (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: k (float)
  
float a4_cpp;

      a4_cpp = RJSHelper::js2cpp_float(handler, a4);
        
  // convert js parameter to cpp: a (float)
  
float a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 1.0;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_float(handler, a5);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromCmykF(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromCmykF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: fromHsl
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::fromHsl
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: s (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: l (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromHsl(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHsl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: fromHslF
    // Source: 
    // Static: true
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::fromHslF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: s (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: l (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
          }
        

    // call function:
    
            // static member function:
            // call base class static function:
            QColor res = 
                
                // call static member function:
                QColor::fromHslF(
              a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
            );
          
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromHslF";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

    // Class: QColor
    // Function: isValidColor
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_WrapperSingleton::isValidColor
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
                QColor::isValidColor(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValidColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    void QColor_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QColor_Wrapper>("org.qcad", 1, 0, "QColor_Wrapper");
        qmlRegisterInterface<QColor_Wrapper>("QColor_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QColor_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QColor_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QColor_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QColor_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QColor_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QColor_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QColor_WrapperSingleton * s = new QColor_WrapperSingleton(handler);
        engine->globalObject().setProperty("QColor_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QColor.js";
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
    QColor_Wrapper::QColor_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QColor_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QColor_Wrapper::QColor_Wrapper(RJSApi& h, QColor* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QColor_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QColor_Wrapper"));
              //setObjectName("QColor_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QColor_Wrapper::~QColor_Wrapper() {
            //RDebug::decCounter(QString("QColor_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QColor_Wrapper"));

            //qDebug() << "QColor_Wrapper::~QColor_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QColor";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QColor_Wrapper::initConnections() {

          //setObjectName("QColor_Wrapper");

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
  
    // Class: QColor
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QColor_Wrapper::QColor_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QColor_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QColor_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: g (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: b (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_int(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QColor(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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
        RJSHelper::is_Qt_GlobalColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (Qt::GlobalColor)
  
Qt::GlobalColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_GlobalColor(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QColor(
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
    
  // convert js parameter to cpp: name (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QColor(
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

        
            wrapped = new QColor(
                
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
   && a3.isUndefined()
   && a4.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QColor";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif

#if QT_STRINGVIEW_LEVEL<2

#endif


    // non-static functions:
    
#if QT_STRINGVIEW_LEVEL<2

#endif

    // Class: QColor
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::isValid
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
                QColor* w = getWrapped();
                bool res = 
                    
                w->isValid(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isValid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: name
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::name
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor_NameFormat(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QColor::NameFormat)
  
QColor::NameFormat a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QColor::HexRgb;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_QColor_NameFormat(handler, a1);
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
                QColor* w = getWrapped();
                QString res = 
                    
                w->name(
                  a1_cpp
    
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
            
#if QT_STRINGVIEW_LEVEL<2

    // Class: QColor
    // Function: setNamedColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setNamedColor
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
                QColor* w = getWrapped();
                
                w->setNamedColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setNamedColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
#endif

    // Class: QColor
    // Function: spec
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::spec
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
                QColor* w = getWrapped();
                QColor::Spec res = 
                    
                w->spec(
                  
                );
              
            // return type: QColor::Spec

            return RJSHelper::cpp2js_QColor_Spec(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spec";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: alpha
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::alpha
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
                QColor* w = getWrapped();
                int res = 
                    
                w->alpha(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alpha";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setAlpha
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setAlpha
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
    
  // convert js parameter to cpp: alpha (int)
  
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
                QColor* w = getWrapped();
                
                w->setAlpha(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlpha";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: alphaF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::alphaF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->alphaF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alphaF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setAlphaF
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setAlphaF
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: alpha (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QColor* w = getWrapped();
                
                w->setAlphaF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlphaF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: red
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::red
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
                QColor* w = getWrapped();
                int res = 
                    
                w->red(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for red";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: green
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::green
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
                QColor* w = getWrapped();
                int res = 
                    
                w->green(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for green";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: blue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::blue
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
                QColor* w = getWrapped();
                int res = 
                    
                w->blue(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setRed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setRed
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
    
  // convert js parameter to cpp: red (int)
  
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
                QColor* w = getWrapped();
                
                w->setRed(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRed";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setGreen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setGreen
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
    
  // convert js parameter to cpp: green (int)
  
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
                QColor* w = getWrapped();
                
                w->setGreen(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGreen";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setBlue
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setBlue
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
    
  // convert js parameter to cpp: blue (int)
  
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
                QColor* w = getWrapped();
                
                w->setBlue(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: redF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::redF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->redF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for redF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: greenF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::greenF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->greenF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for greenF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: blueF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::blueF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->blueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setRedF
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setRedF
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: red (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QColor* w = getWrapped();
                
                w->setRedF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRedF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setGreenF
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setGreenF
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: green (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QColor* w = getWrapped();
                
                w->setGreenF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGreenF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setBlueF
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setBlueF
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_float(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: blue (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QColor* w = getWrapped();
                
                w->setBlueF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBlueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setRgb
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setRgb
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: g (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: b (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
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
                QColor* w = getWrapped();
                
                w->setRgb(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRgb";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setRgbF
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setRgbF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: g (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: b (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
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
                QColor* w = getWrapped();
                
                w->setRgbF(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRgbF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hue
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
                QColor* w = getWrapped();
                int res = 
                    
                w->hue(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: saturation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::saturation
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
                QColor* w = getWrapped();
                int res = 
                    
                w->saturation(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for saturation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hsvHue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hsvHue
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
                QColor* w = getWrapped();
                int res = 
                    
                w->hsvHue(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hsvHue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hsvSaturation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hsvSaturation
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
                QColor* w = getWrapped();
                int res = 
                    
                w->hsvSaturation(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hsvSaturation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::value
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
                QColor* w = getWrapped();
                int res = 
                    
                w->value(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for value";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hueF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hueF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->hueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: saturationF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::saturationF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->saturationF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for saturationF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hsvHueF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hsvHueF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->hsvHueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hsvHueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hsvSaturationF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hsvSaturationF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->hsvSaturationF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hsvSaturationF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: valueF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::valueF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->valueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for valueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setHsv
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setHsv
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: s (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: v (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
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
                QColor* w = getWrapped();
                
                w->setHsv(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHsv";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setHsvF
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setHsvF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: s (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: v (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
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
                QColor* w = getWrapped();
                
                w->setHsvF(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHsvF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: cyan
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::cyan
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
                QColor* w = getWrapped();
                int res = 
                    
                w->cyan(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cyan";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: magenta
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::magenta
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
                QColor* w = getWrapped();
                int res = 
                    
                w->magenta(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for magenta";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: yellow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::yellow
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
                QColor* w = getWrapped();
                int res = 
                    
                w->yellow(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for yellow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: black
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::black
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
                QColor* w = getWrapped();
                int res = 
                    
                w->black(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for black";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: cyanF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::cyanF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->cyanF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cyanF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: magentaF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::magentaF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->magentaF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for magentaF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: yellowF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::yellowF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->yellowF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for yellowF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: blackF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::blackF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->blackF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for blackF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setCmyk
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setCmyk
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_int(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: m (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: y (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: k (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: a (int)
  
int a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 255;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_int(handler, a5);
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
                QColor* w = getWrapped();
                
                w->setCmyk(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCmyk";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setCmykF
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setCmykF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
  )

   && RJSHelper::is_float(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: c (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: m (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: y (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: k (float)
  
float a4_cpp;

      a4_cpp = RJSHelper::js2cpp_float(handler, a4);
        
  // convert js parameter to cpp: a (float)
  
float a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = 1.0;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_float(handler, a5);
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
                QColor* w = getWrapped();
                
                w->setCmykF(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCmykF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hslHue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hslHue
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
                QColor* w = getWrapped();
                int res = 
                    
                w->hslHue(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hslHue";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hslSaturation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hslSaturation
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
                QColor* w = getWrapped();
                int res = 
                    
                w->hslSaturation(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hslSaturation";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: lightness
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::lightness
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
                QColor* w = getWrapped();
                int res = 
                    
                w->lightness(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lightness";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hslHueF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hslHueF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->hslHueF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hslHueF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: hslSaturationF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::hslSaturationF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->hslSaturationF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hslSaturationF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: lightnessF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::lightnessF
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
                QColor* w = getWrapped();
                float res = 
                    
                w->lightnessF(
                  
                );
              
            // return type: float

            return RJSHelper::cpp2js_float(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lightnessF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setHsl
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setHsl
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
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: s (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: l (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: a (int)
  
int a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 255;
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
                QColor* w = getWrapped();
                
                w->setHsl(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHsl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: setHslF
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::setHslF
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
        RJSHelper::is_float(handler, a1
  )

   && RJSHelper::is_float(handler, a2
  )

   && RJSHelper::is_float(handler, a3
  )

   && RJSHelper::is_float(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: h (float)
  
float a1_cpp;

      a1_cpp = RJSHelper::js2cpp_float(handler, a1);
        
  // convert js parameter to cpp: s (float)
  
float a2_cpp;

      a2_cpp = RJSHelper::js2cpp_float(handler, a2);
        
  // convert js parameter to cpp: l (float)
  
float a3_cpp;

      a3_cpp = RJSHelper::js2cpp_float(handler, a3);
        
  // convert js parameter to cpp: a (float)
  
float a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = 1.0;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_float(handler, a4);
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
                QColor* w = getWrapped();
                
                w->setHslF(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHslF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: toRgb
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::toRgb
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
                QColor* w = getWrapped();
                QColor res = 
                    
                w->toRgb(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toRgb";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: toHsv
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::toHsv
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
                QColor* w = getWrapped();
                QColor res = 
                    
                w->toHsv(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toHsv";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: toCmyk
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::toCmyk
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
                QColor* w = getWrapped();
                QColor res = 
                    
                w->toCmyk(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toCmyk";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: toHsl
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::toHsl
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
                QColor* w = getWrapped();
                QColor res = 
                    
                w->toHsl(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toHsl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: toExtendedRgb
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::toExtendedRgb
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
                QColor* w = getWrapped();
                QColor res = 
                    
                w->toExtendedRgb(
                  
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toExtendedRgb";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: convertTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::convertTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor_Spec(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: colorSpec (QColor::Spec)
  
QColor::Spec a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor_Spec(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QColor* w = getWrapped();
                QColor res = 
                    
                w->convertTo(
                  a1_cpp
    
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for convertTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: lighter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::lighter
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 150;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                QColor* w = getWrapped();
                QColor res = 
                    
                w->lighter(
                  a1_cpp
    
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for lighter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QColor
    // Function: darker
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QColor_Wrapper::darker
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: f (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = 200;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
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
                QColor* w = getWrapped();
                QColor res = 
                    
                w->darker(
                  a1_cpp
    
                );
              
            // return type: QColor

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for darker";
                  handler.trace();
                  return QJSValue();
                
              }
            
#if QT_STRINGVIEW_LEVEL<2

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  