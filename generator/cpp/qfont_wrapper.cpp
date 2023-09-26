
  // Auto generated
  
  // include header:
  //#include "qfontwrapper.h"
  //#include "header_cpp.h"
  
    #include "qfont_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QFont*> QFont_Wrapper::basecasters_QFont;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QFont
    // Function: substitute
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::substitute
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
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QFont::substitute(
              a1_cpp
    
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for substitute";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: substitutes
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::substitutes
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
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QFont::substitutes(
              a1_cpp
    
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for substitutes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: substitutions
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::substitutions
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QFont::substitutions(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for substitutions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: insertSubstitution
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::insertSubstitution
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
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp:  (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QFont::insertSubstitution(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertSubstitution";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: insertSubstitutions
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::insertSubstitutions
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

   && RJSHelper::is_QStringList(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp:  (QStringList)
  
QStringList a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QStringList(handler, a2);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QFont::insertSubstitutions(
              a1_cpp
    , a2_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertSubstitutions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: removeSubstitutions
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::removeSubstitutions
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
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QFont::removeSubstitutions(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeSubstitutions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: initialize
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::initialize
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QFont::initialize(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initialize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: cleanup
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::cleanup
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QFont::cleanup(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for cleanup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: cacheStatistics
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_WrapperSingleton::cacheStatistics
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QFont::cacheStatistics(
              
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for cacheStatistics";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QFont_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QFont_Wrapper>("org.qcad", 1, 0, "QFont_Wrapper");
        qmlRegisterInterface<QFont_Wrapper>("QFont_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QFont* t = new RJSType_QFont();
          global.setProperty("RJSType_QFont", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QFont::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QFont_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QFont_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QFont_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QFont_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QFont_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QFont_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QFont_WrapperSingleton * s = new QFont_WrapperSingleton(handler);
        engine->globalObject().setProperty("QFont_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QFont.js";
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
    QFont_Wrapper::QFont_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QFont_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QFont_Wrapper::QFont_Wrapper(RJSApi& h, QFont* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QFont_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QFont_Wrapper"));
              //setObjectName("QFont_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QFont_Wrapper::~QFont_Wrapper() {
            //RDebug::decCounter(QString("QFont_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QFont_Wrapper"));

            //qDebug() << "QFont_Wrapper::~QFont_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QFont";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QFont_Wrapper::initConnections() {

          //setObjectName("QFont_Wrapper");

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
  
    // Class: QFont
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QFont_Wrapper::QFont_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QFont_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QFont_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: family (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: pointSize (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        
  // convert js parameter to cpp: weight (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        
  // convert js parameter to cpp: italic (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFont(
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
        RJSHelper::is_QStringList(handler, a1
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

   && RJSHelper::is_int(handler, a3
    , true
  
  )

   && RJSHelper::is_bool(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: families (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        
  // convert js parameter to cpp: pointSize (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = -1;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        
  // convert js parameter to cpp: weight (int)
  
int a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = -1;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_int(handler, a3);
          }
        
  // convert js parameter to cpp: italic (bool)
  
bool a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = false;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_bool(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFont(
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
        RJSHelper::is_QFont(handler, a1
  )

   && RJSHelper::is_QPaintDevice_ptr(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        
  // convert js parameter to cpp: pd (QPaintDevice)
  

          // pointer:
          QPaintDevice*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPaintDevice_ptr(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFont(
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
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: font (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFont(
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

        
            wrapped = new QFont(
                
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
                  

                  qWarning() << "no matching constructor variant found for QFont";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QFont
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: family
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::family
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
                QFont* w = getWrapped();
                QString res = 
                    
                w->family(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for family";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setFamily
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setFamily
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
                QFont* w = getWrapped();
                
                w->setFamily(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFamily";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: families
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::families
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
                QFont* w = getWrapped();
                QStringList res = 
                    
                w->families(
                  
                );
              
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for families";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setFamilies
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setFamilies
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
    
  // convert js parameter to cpp:  (QStringList)
  
QStringList a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStringList(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->setFamilies(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFamilies";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: styleName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::styleName
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
                QFont* w = getWrapped();
                QString res = 
                    
                w->styleName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for styleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setStyleName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setStyleName
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
                QFont* w = getWrapped();
                
                w->setStyleName(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyleName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: pointSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::pointSize
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
                QFont* w = getWrapped();
                int res = 
                    
                w->pointSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setPointSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setPointSize
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
    
  // convert js parameter to cpp:  (int)
  
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
                QFont* w = getWrapped();
                
                w->setPointSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPointSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: pointSizeF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::pointSizeF
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
                QFont* w = getWrapped();
                qreal res = 
                    
                w->pointSizeF(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pointSizeF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setPointSizeF
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setPointSizeF
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
    
  // convert js parameter to cpp:  (qreal)
  
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
                QFont* w = getWrapped();
                
                w->setPointSizeF(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPointSizeF";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: pixelSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::pixelSize
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
                QFont* w = getWrapped();
                int res = 
                    
                w->pixelSize(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for pixelSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setPixelSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setPixelSize
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
    
  // convert js parameter to cpp:  (int)
  
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
                QFont* w = getWrapped();
                
                w->setPixelSize(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPixelSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: weight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::weight
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
                QFont* w = getWrapped();
                QFont::Weight res = 
                    
                w->weight(
                  
                );
              
            // return type: QFont::Weight

            return RJSHelper::cpp2js_QFont_Weight(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for weight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setWeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setWeight
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont_Weight(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: weight (QFont::Weight)
  
QFont::Weight a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont_Weight(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->setWeight(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWeight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: bold
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::bold
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->bold(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for bold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setBold
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setBold
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QFont* w = getWrapped();
                
                w->setBold(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBold";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont_Style(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: style (QFont::Style)
  
QFont::Style a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont_Style(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->setStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: style
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::style
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
                QFont* w = getWrapped();
                QFont::Style res = 
                    
                w->style(
                  
                );
              
            // return type: QFont::Style

            return RJSHelper::cpp2js_QFont_Style(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for style";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: italic
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::italic
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->italic(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for italic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setItalic
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setItalic
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
                QFont* w = getWrapped();
                
                w->setItalic(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setItalic";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: underline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::underline
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->underline(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for underline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setUnderline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setUnderline
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QFont* w = getWrapped();
                
                w->setUnderline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUnderline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: overline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::overline
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->overline(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for overline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setOverline
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setOverline
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QFont* w = getWrapped();
                
                w->setOverline(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOverline";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: strikeOut
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::strikeOut
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->strikeOut(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for strikeOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setStrikeOut
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setStrikeOut
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QFont* w = getWrapped();
                
                w->setStrikeOut(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStrikeOut";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: fixedPitch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::fixedPitch
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->fixedPitch(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setFixedPitch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setFixedPitch
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QFont* w = getWrapped();
                
                w->setFixedPitch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFixedPitch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: kerning
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::kerning
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->kerning(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for kerning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setKerning
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setKerning
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
    
  // convert js parameter to cpp:  (bool)
  
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
                QFont* w = getWrapped();
                
                w->setKerning(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setKerning";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: styleHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::styleHint
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
                QFont* w = getWrapped();
                QFont::StyleHint res = 
                    
                w->styleHint(
                  
                );
              
            // return type: QFont::StyleHint

            return RJSHelper::cpp2js_QFont_StyleHint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for styleHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: styleStrategy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::styleStrategy
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
                QFont* w = getWrapped();
                QFont::StyleStrategy res = 
                    
                w->styleStrategy(
                  
                );
              
            // return type: QFont::StyleStrategy

            return RJSHelper::cpp2js_QFont_StyleStrategy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for styleStrategy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setStyleHint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setStyleHint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont_StyleHint(handler, a1
  )

   && RJSHelper::is_QFont_StyleStrategy(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont::StyleHint)
  
QFont::StyleHint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont_StyleHint(handler, a1);
        
  // convert js parameter to cpp:  (QFont::StyleStrategy)
  
QFont::StyleStrategy a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QFont::PreferDefault;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QFont_StyleStrategy(handler, a2);
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
                QFont* w = getWrapped();
                
                w->setStyleHint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyleHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setStyleStrategy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setStyleStrategy
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont_StyleStrategy(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: s (QFont::StyleStrategy)
  
QFont::StyleStrategy a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont_StyleStrategy(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->setStyleStrategy(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyleStrategy";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: stretch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::stretch
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
                QFont* w = getWrapped();
                int res = 
                    
                w->stretch(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for stretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setStretch
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setStretch
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
    
  // convert js parameter to cpp:  (int)
  
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
                QFont* w = getWrapped();
                
                w->setStretch(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStretch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: letterSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::letterSpacing
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
                QFont* w = getWrapped();
                qreal res = 
                    
                w->letterSpacing(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for letterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: letterSpacingType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::letterSpacingType
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
                QFont* w = getWrapped();
                QFont::SpacingType res = 
                    
                w->letterSpacingType(
                  
                );
              
            // return type: QFont::SpacingType

            return RJSHelper::cpp2js_QFont_SpacingType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for letterSpacingType";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setLetterSpacing
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setLetterSpacing
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont_SpacingType(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QFont::SpacingType)
  
QFont::SpacingType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont_SpacingType(handler, a1);
        
  // convert js parameter to cpp: spacing (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->setLetterSpacing(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLetterSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: wordSpacing
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::wordSpacing
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
                QFont* w = getWrapped();
                qreal res = 
                    
                w->wordSpacing(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for wordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setWordSpacing
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setWordSpacing
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
    
  // convert js parameter to cpp: spacing (qreal)
  
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
                QFont* w = getWrapped();
                
                w->setWordSpacing(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWordSpacing";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setCapitalization
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setCapitalization
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont_Capitalization(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont::Capitalization)
  
QFont::Capitalization a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont_Capitalization(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->setCapitalization(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCapitalization";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: capitalization
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::capitalization
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
                QFont* w = getWrapped();
                QFont::Capitalization res = 
                    
                w->capitalization(
                  
                );
              
            // return type: QFont::Capitalization

            return RJSHelper::cpp2js_QFont_Capitalization(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for capitalization";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setHintingPreference
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setHintingPreference
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont_HintingPreference(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: hintingPreference (QFont::HintingPreference)
  
QFont::HintingPreference a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont_HintingPreference(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->setHintingPreference(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setHintingPreference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: hintingPreference
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::hintingPreference
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
                QFont* w = getWrapped();
                QFont::HintingPreference res = 
                    
                w->hintingPreference(
                  
                );
              
            // return type: QFont::HintingPreference

            return RJSHelper::cpp2js_QFont_HintingPreference(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hintingPreference";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: exactMatch
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::exactMatch
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->exactMatch(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exactMatch";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: isCopyOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::isCopyOf
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                bool res = 
                    
                w->isCopyOf(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCopyOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: key
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::key
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
                QFont* w = getWrapped();
                QString res = 
                    
                w->key(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for key";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::toString
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
                QFont* w = getWrapped();
                QString res = 
                    
                w->toString(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: fromString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::fromString
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
                QFont* w = getWrapped();
                bool res = 
                    
                w->fromString(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for fromString";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: defaultFamily
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::defaultFamily
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
                QFont* w = getWrapped();
                QString res = 
                    
                w->defaultFamily(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultFamily";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: resolve
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::resolve
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFont(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFont)
  
QFont a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFont(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                QFont res = 
                    
                w->resolve(
                  a1_cpp
    
                );
              
            // return type: QFont

            return RJSHelper::cpp2js_QFont(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for resolve";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: resolveMask
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::resolveMask
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
                QFont* w = getWrapped();
                uint res = 
                    
                w->resolveMask(
                  
                );
              
            // return type: uint

            return RJSHelper::cpp2js_uint(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for resolveMask";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFont
    // Function: setResolveMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFont_Wrapper::setResolveMask
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_uint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mask (uint)
  
uint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_uint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QFont* w = getWrapped();
                
                w->setResolveMask(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setResolveMask";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
