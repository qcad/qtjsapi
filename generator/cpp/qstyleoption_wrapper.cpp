
  // Auto generated
  
  // include header:
  //#include "qstyleoptionwrapper.h"
  //#include "header_cpp.h"
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOption*> QStyleOption_Wrapper::basecasters_QStyleOption;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOption_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOption_Wrapper>("org.qcad", 1, 0, "QStyleOption_Wrapper");
        qmlRegisterInterface<QStyleOption_Wrapper>("QStyleOption_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOption* t = new RJSType_QStyleOption();
          global.setProperty("RJSType_QStyleOption", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOption::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOption_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOption_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOption_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOption_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOption.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOption_Wrapper::QStyleOption_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOption_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOption_Wrapper::QStyleOption_Wrapper(RJSApi& h, QStyleOption* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOption_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOption_Wrapper"));
              //setObjectName("QStyleOption_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOption_Wrapper::~QStyleOption_Wrapper() {
            //RDebug::decCounter(QString("QStyleOption_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOption_Wrapper"));

            //qDebug() << "QStyleOption_Wrapper::~QStyleOption_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOption";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOption_Wrapper::initConnections() {

          //setObjectName("QStyleOption_Wrapper");

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
  
    // Class: QStyleOption
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QStyleOption_Wrapper::QStyleOption_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QStyleOption_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOption_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: version (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QStyleOption::Version;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        
  // convert js parameter to cpp: type (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = SO_Default;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOption(
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
        RJSHelper::is_QStyleOption(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOption)
  
QStyleOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOption(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOption(
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOption";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOption
    // Function: initFrom
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOption_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOption* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOption
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOption_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOption(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOption)
  
QStyleOption a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOption(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOption* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOption* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOption&

            return RJSHelper::cpp2js_QStyleOption(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionFocusRect*> QStyleOptionFocusRect_Wrapper::basecasters_QStyleOptionFocusRect;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionFocusRect_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionFocusRect_Wrapper>("org.qcad", 1, 0, "QStyleOptionFocusRect_Wrapper");
        qmlRegisterInterface<QStyleOptionFocusRect_Wrapper>("QStyleOptionFocusRect_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionFocusRect* t = new RJSType_QStyleOptionFocusRect();
          global.setProperty("RJSType_QStyleOptionFocusRect", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionFocusRect::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionFocusRect_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionFocusRect_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionFocusRect_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionFocusRect_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionFocusRect.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionFocusRect_Wrapper::QStyleOptionFocusRect_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionFocusRect_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionFocusRect_Wrapper::QStyleOptionFocusRect_Wrapper(RJSApi& h, QStyleOptionFocusRect* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionFocusRect_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionFocusRect_Wrapper"));
              //setObjectName("QStyleOptionFocusRect_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionFocusRect_Wrapper::~QStyleOptionFocusRect_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionFocusRect_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionFocusRect_Wrapper"));

            //qDebug() << "QStyleOptionFocusRect_Wrapper::~QStyleOptionFocusRect_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionFocusRect";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionFocusRect_Wrapper::initConnections() {

          //setObjectName("QStyleOptionFocusRect_Wrapper");

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
  
    // Class: QStyleOptionFocusRect
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionFocusRect_Wrapper::QStyleOptionFocusRect_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionFocusRect_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionFocusRect_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionFocusRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionFocusRect)
  
QStyleOptionFocusRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionFocusRect(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionFocusRect(
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

        
              wrapped = new QStyleOptionFocusRect(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionFocusRect";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionFocusRect
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionFocusRect_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionFocusRect* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionFocusRect
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionFocusRect_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionFocusRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionFocusRect)
  
QStyleOptionFocusRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionFocusRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionFocusRect* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionFocusRect* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionFocusRect&

            return RJSHelper::cpp2js_QStyleOptionFocusRect(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionFrame*> QStyleOptionFrame_Wrapper::basecasters_QStyleOptionFrame;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionFrame_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionFrame_Wrapper>("org.qcad", 1, 0, "QStyleOptionFrame_Wrapper");
        qmlRegisterInterface<QStyleOptionFrame_Wrapper>("QStyleOptionFrame_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionFrame* t = new RJSType_QStyleOptionFrame();
          global.setProperty("RJSType_QStyleOptionFrame", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionFrame::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionFrame_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionFrame_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionFrame_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionFrame_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionFrame.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionFrame_Wrapper::QStyleOptionFrame_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionFrame_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionFrame_Wrapper::QStyleOptionFrame_Wrapper(RJSApi& h, QStyleOptionFrame* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionFrame_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionFrame_Wrapper"));
              //setObjectName("QStyleOptionFrame_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionFrame_Wrapper::~QStyleOptionFrame_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionFrame_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionFrame_Wrapper"));

            //qDebug() << "QStyleOptionFrame_Wrapper::~QStyleOptionFrame_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionFrame";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionFrame_Wrapper::initConnections() {

          //setObjectName("QStyleOptionFrame_Wrapper");

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
  
    // Class: QStyleOptionFrame
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionFrame_Wrapper::QStyleOptionFrame_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionFrame_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionFrame_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionFrame(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionFrame)
  
QStyleOptionFrame a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionFrame(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionFrame(
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

        
              wrapped = new QStyleOptionFrame(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionFrame";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionFrame
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionFrame_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionFrame* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionFrame
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionFrame_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionFrame(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionFrame)
  
QStyleOptionFrame a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionFrame(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionFrame* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionFrame* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionFrame&

            return RJSHelper::cpp2js_QStyleOptionFrame(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionTabWidgetFrame*> QStyleOptionTabWidgetFrame_Wrapper::basecasters_QStyleOptionTabWidgetFrame;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionTabWidgetFrame_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionTabWidgetFrame_Wrapper>("org.qcad", 1, 0, "QStyleOptionTabWidgetFrame_Wrapper");
        qmlRegisterInterface<QStyleOptionTabWidgetFrame_Wrapper>("QStyleOptionTabWidgetFrame_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionTabWidgetFrame* t = new RJSType_QStyleOptionTabWidgetFrame();
          global.setProperty("RJSType_QStyleOptionTabWidgetFrame", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionTabWidgetFrame::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionTabWidgetFrame_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionTabWidgetFrame_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionTabWidgetFrame_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionTabWidgetFrame_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionTabWidgetFrame.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionTabWidgetFrame_Wrapper::QStyleOptionTabWidgetFrame_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionTabWidgetFrame_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionTabWidgetFrame_Wrapper::QStyleOptionTabWidgetFrame_Wrapper(RJSApi& h, QStyleOptionTabWidgetFrame* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionTabWidgetFrame_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionTabWidgetFrame_Wrapper"));
              //setObjectName("QStyleOptionTabWidgetFrame_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionTabWidgetFrame_Wrapper::~QStyleOptionTabWidgetFrame_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionTabWidgetFrame_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionTabWidgetFrame_Wrapper"));

            //qDebug() << "QStyleOptionTabWidgetFrame_Wrapper::~QStyleOptionTabWidgetFrame_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionTabWidgetFrame";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionTabWidgetFrame_Wrapper::initConnections() {

          //setObjectName("QStyleOptionTabWidgetFrame_Wrapper");

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
  
    // Class: QStyleOptionTabWidgetFrame
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionTabWidgetFrame_Wrapper::QStyleOptionTabWidgetFrame_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionTabWidgetFrame_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionTabWidgetFrame_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionTabWidgetFrame(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionTabWidgetFrame)
  
QStyleOptionTabWidgetFrame a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionTabWidgetFrame(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionTabWidgetFrame(
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

        
              wrapped = new QStyleOptionTabWidgetFrame(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionTabWidgetFrame";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionTabWidgetFrame
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionTabWidgetFrame_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionTabWidgetFrame* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionTabWidgetFrame
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionTabWidgetFrame_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionTabWidgetFrame(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionTabWidgetFrame)
  
QStyleOptionTabWidgetFrame a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionTabWidgetFrame(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionTabWidgetFrame* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionTabWidgetFrame* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionTabWidgetFrame&

            return RJSHelper::cpp2js_QStyleOptionTabWidgetFrame(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionTabBarBase*> QStyleOptionTabBarBase_Wrapper::basecasters_QStyleOptionTabBarBase;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionTabBarBase_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionTabBarBase_Wrapper>("org.qcad", 1, 0, "QStyleOptionTabBarBase_Wrapper");
        qmlRegisterInterface<QStyleOptionTabBarBase_Wrapper>("QStyleOptionTabBarBase_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionTabBarBase* t = new RJSType_QStyleOptionTabBarBase();
          global.setProperty("RJSType_QStyleOptionTabBarBase", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionTabBarBase::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionTabBarBase_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionTabBarBase_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionTabBarBase_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionTabBarBase_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionTabBarBase.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionTabBarBase_Wrapper::QStyleOptionTabBarBase_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionTabBarBase_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionTabBarBase_Wrapper::QStyleOptionTabBarBase_Wrapper(RJSApi& h, QStyleOptionTabBarBase* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionTabBarBase_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionTabBarBase_Wrapper"));
              //setObjectName("QStyleOptionTabBarBase_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionTabBarBase_Wrapper::~QStyleOptionTabBarBase_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionTabBarBase_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionTabBarBase_Wrapper"));

            //qDebug() << "QStyleOptionTabBarBase_Wrapper::~QStyleOptionTabBarBase_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionTabBarBase";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionTabBarBase_Wrapper::initConnections() {

          //setObjectName("QStyleOptionTabBarBase_Wrapper");

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
  
    // Class: QStyleOptionTabBarBase
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionTabBarBase_Wrapper::QStyleOptionTabBarBase_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionTabBarBase_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionTabBarBase_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionTabBarBase(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionTabBarBase)
  
QStyleOptionTabBarBase a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionTabBarBase(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionTabBarBase(
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

        
              wrapped = new QStyleOptionTabBarBase(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionTabBarBase";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionTabBarBase
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionTabBarBase_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionTabBarBase* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionTabBarBase
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionTabBarBase_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionTabBarBase(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionTabBarBase)
  
QStyleOptionTabBarBase a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionTabBarBase(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionTabBarBase* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionTabBarBase* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionTabBarBase&

            return RJSHelper::cpp2js_QStyleOptionTabBarBase(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionHeader*> QStyleOptionHeader_Wrapper::basecasters_QStyleOptionHeader;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionHeader_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionHeader_Wrapper>("org.qcad", 1, 0, "QStyleOptionHeader_Wrapper");
        qmlRegisterInterface<QStyleOptionHeader_Wrapper>("QStyleOptionHeader_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionHeader* t = new RJSType_QStyleOptionHeader();
          global.setProperty("RJSType_QStyleOptionHeader", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionHeader::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionHeader_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionHeader_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionHeader_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionHeader_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionHeader.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionHeader_Wrapper::QStyleOptionHeader_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionHeader_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionHeader_Wrapper::QStyleOptionHeader_Wrapper(RJSApi& h, QStyleOptionHeader* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionHeader_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionHeader_Wrapper"));
              //setObjectName("QStyleOptionHeader_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionHeader_Wrapper::~QStyleOptionHeader_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionHeader_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionHeader_Wrapper"));

            //qDebug() << "QStyleOptionHeader_Wrapper::~QStyleOptionHeader_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionHeader";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionHeader_Wrapper::initConnections() {

          //setObjectName("QStyleOptionHeader_Wrapper");

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
  
    // Class: QStyleOptionHeader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionHeader_Wrapper::QStyleOptionHeader_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionHeader_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionHeader_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionHeader(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionHeader)
  
QStyleOptionHeader a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionHeader(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionHeader(
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

        
              wrapped = new QStyleOptionHeader(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionHeader";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionHeader
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionHeader_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionHeader* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionHeader
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionHeader_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionHeader(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionHeader)
  
QStyleOptionHeader a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionHeader(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionHeader* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionHeader* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionHeader&

            return RJSHelper::cpp2js_QStyleOptionHeader(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionHeaderV2*> QStyleOptionHeaderV2_Wrapper::basecasters_QStyleOptionHeaderV2;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionHeaderV2_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionHeaderV2_Wrapper>("org.qcad", 1, 0, "QStyleOptionHeaderV2_Wrapper");
        qmlRegisterInterface<QStyleOptionHeaderV2_Wrapper>("QStyleOptionHeaderV2_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionHeaderV2* t = new RJSType_QStyleOptionHeaderV2();
          global.setProperty("RJSType_QStyleOptionHeaderV2", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionHeaderV2::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionHeaderV2_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionHeaderV2_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionHeaderV2_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionHeaderV2_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionHeaderV2.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionHeaderV2_Wrapper::QStyleOptionHeaderV2_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionHeaderV2_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionHeaderV2_Wrapper::QStyleOptionHeaderV2_Wrapper(RJSApi& h, QStyleOptionHeaderV2* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionHeaderV2_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionHeaderV2_Wrapper"));
              //setObjectName("QStyleOptionHeaderV2_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionHeaderV2_Wrapper::~QStyleOptionHeaderV2_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionHeaderV2_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionHeaderV2_Wrapper"));

            //qDebug() << "QStyleOptionHeaderV2_Wrapper::~QStyleOptionHeaderV2_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionHeaderV2";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionHeaderV2_Wrapper::initConnections() {

          //setObjectName("QStyleOptionHeaderV2_Wrapper");

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
  
    // Class: QStyleOptionHeaderV2
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionHeaderV2_Wrapper::QStyleOptionHeaderV2_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionHeaderV2_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionHeaderV2_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionHeaderV2(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionHeaderV2)
  
QStyleOptionHeaderV2 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionHeaderV2(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionHeaderV2(
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

        
              wrapped = new QStyleOptionHeaderV2(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionHeaderV2";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionHeaderV2
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionHeaderV2_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionHeaderV2(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionHeaderV2)
  
QStyleOptionHeaderV2 a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionHeaderV2(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionHeaderV2* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionHeaderV2* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionHeaderV2&

            return RJSHelper::cpp2js_QStyleOptionHeaderV2(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionButton*> QStyleOptionButton_Wrapper::basecasters_QStyleOptionButton;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionButton_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionButton_Wrapper>("org.qcad", 1, 0, "QStyleOptionButton_Wrapper");
        qmlRegisterInterface<QStyleOptionButton_Wrapper>("QStyleOptionButton_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionButton* t = new RJSType_QStyleOptionButton();
          global.setProperty("RJSType_QStyleOptionButton", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionButton::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionButton_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionButton_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionButton_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionButton_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionButton.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionButton_Wrapper::QStyleOptionButton_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionButton_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionButton_Wrapper::QStyleOptionButton_Wrapper(RJSApi& h, QStyleOptionButton* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionButton_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionButton_Wrapper"));
              //setObjectName("QStyleOptionButton_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionButton_Wrapper::~QStyleOptionButton_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionButton_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionButton_Wrapper"));

            //qDebug() << "QStyleOptionButton_Wrapper::~QStyleOptionButton_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionButton";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionButton_Wrapper::initConnections() {

          //setObjectName("QStyleOptionButton_Wrapper");

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
  
    // Class: QStyleOptionButton
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionButton_Wrapper::QStyleOptionButton_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionButton_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionButton_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionButton(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionButton)
  
QStyleOptionButton a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionButton(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionButton(
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

        
              wrapped = new QStyleOptionButton(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionButton";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionButton
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionButton_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionButton* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionButton
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionButton_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionButton(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionButton)
  
QStyleOptionButton a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionButton(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionButton* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionButton* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionButton&

            return RJSHelper::cpp2js_QStyleOptionButton(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionTab*> QStyleOptionTab_Wrapper::basecasters_QStyleOptionTab;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionTab_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionTab_Wrapper>("org.qcad", 1, 0, "QStyleOptionTab_Wrapper");
        qmlRegisterInterface<QStyleOptionTab_Wrapper>("QStyleOptionTab_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionTab* t = new RJSType_QStyleOptionTab();
          global.setProperty("RJSType_QStyleOptionTab", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionTab::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionTab_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionTab_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionTab_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionTab_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionTab.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionTab_Wrapper::QStyleOptionTab_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionTab_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionTab_Wrapper::QStyleOptionTab_Wrapper(RJSApi& h, QStyleOptionTab* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionTab_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionTab_Wrapper"));
              //setObjectName("QStyleOptionTab_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionTab_Wrapper::~QStyleOptionTab_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionTab_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionTab_Wrapper"));

            //qDebug() << "QStyleOptionTab_Wrapper::~QStyleOptionTab_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionTab";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionTab_Wrapper::initConnections() {

          //setObjectName("QStyleOptionTab_Wrapper");

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
  
    // Class: QStyleOptionTab
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionTab_Wrapper::QStyleOptionTab_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionTab_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionTab_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionTab(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionTab)
  
QStyleOptionTab a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionTab(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionTab(
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

        
              wrapped = new QStyleOptionTab(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionTab";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionTab
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionTab_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionTab* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionTab
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionTab_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionTab(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionTab)
  
QStyleOptionTab a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionTab(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionTab* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionTab* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionTab&

            return RJSHelper::cpp2js_QStyleOptionTab(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionToolBar*> QStyleOptionToolBar_Wrapper::basecasters_QStyleOptionToolBar;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionToolBar_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionToolBar_Wrapper>("org.qcad", 1, 0, "QStyleOptionToolBar_Wrapper");
        qmlRegisterInterface<QStyleOptionToolBar_Wrapper>("QStyleOptionToolBar_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionToolBar* t = new RJSType_QStyleOptionToolBar();
          global.setProperty("RJSType_QStyleOptionToolBar", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionToolBar::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionToolBar_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionToolBar_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionToolBar_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionToolBar_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionToolBar.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionToolBar_Wrapper::QStyleOptionToolBar_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionToolBar_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionToolBar_Wrapper::QStyleOptionToolBar_Wrapper(RJSApi& h, QStyleOptionToolBar* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionToolBar_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionToolBar_Wrapper"));
              //setObjectName("QStyleOptionToolBar_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionToolBar_Wrapper::~QStyleOptionToolBar_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionToolBar_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionToolBar_Wrapper"));

            //qDebug() << "QStyleOptionToolBar_Wrapper::~QStyleOptionToolBar_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionToolBar";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionToolBar_Wrapper::initConnections() {

          //setObjectName("QStyleOptionToolBar_Wrapper");

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
  
    // Class: QStyleOptionToolBar
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionToolBar_Wrapper::QStyleOptionToolBar_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionToolBar_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionToolBar_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionToolBar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionToolBar)
  
QStyleOptionToolBar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionToolBar(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionToolBar(
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

        
              wrapped = new QStyleOptionToolBar(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionToolBar";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionToolBar
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionToolBar_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionToolBar* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionToolBar
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionToolBar_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionToolBar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionToolBar)
  
QStyleOptionToolBar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionToolBar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionToolBar* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionToolBar* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionToolBar&

            return RJSHelper::cpp2js_QStyleOptionToolBar(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionProgressBar*> QStyleOptionProgressBar_Wrapper::basecasters_QStyleOptionProgressBar;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionProgressBar_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionProgressBar_Wrapper>("org.qcad", 1, 0, "QStyleOptionProgressBar_Wrapper");
        qmlRegisterInterface<QStyleOptionProgressBar_Wrapper>("QStyleOptionProgressBar_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionProgressBar* t = new RJSType_QStyleOptionProgressBar();
          global.setProperty("RJSType_QStyleOptionProgressBar", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionProgressBar::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionProgressBar_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionProgressBar_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionProgressBar_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionProgressBar_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionProgressBar.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionProgressBar_Wrapper::QStyleOptionProgressBar_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionProgressBar_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionProgressBar_Wrapper::QStyleOptionProgressBar_Wrapper(RJSApi& h, QStyleOptionProgressBar* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionProgressBar_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionProgressBar_Wrapper"));
              //setObjectName("QStyleOptionProgressBar_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionProgressBar_Wrapper::~QStyleOptionProgressBar_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionProgressBar_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionProgressBar_Wrapper"));

            //qDebug() << "QStyleOptionProgressBar_Wrapper::~QStyleOptionProgressBar_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionProgressBar";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionProgressBar_Wrapper::initConnections() {

          //setObjectName("QStyleOptionProgressBar_Wrapper");

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
  
    // Class: QStyleOptionProgressBar
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionProgressBar_Wrapper::QStyleOptionProgressBar_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionProgressBar_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionProgressBar_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionProgressBar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionProgressBar)
  
QStyleOptionProgressBar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionProgressBar(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionProgressBar(
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

        
              wrapped = new QStyleOptionProgressBar(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionProgressBar";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionProgressBar
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionProgressBar_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionProgressBar* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionProgressBar
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionProgressBar_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionProgressBar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionProgressBar)
  
QStyleOptionProgressBar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionProgressBar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionProgressBar* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionProgressBar* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionProgressBar&

            return RJSHelper::cpp2js_QStyleOptionProgressBar(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionMenuItem*> QStyleOptionMenuItem_Wrapper::basecasters_QStyleOptionMenuItem;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionMenuItem_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionMenuItem_Wrapper>("org.qcad", 1, 0, "QStyleOptionMenuItem_Wrapper");
        qmlRegisterInterface<QStyleOptionMenuItem_Wrapper>("QStyleOptionMenuItem_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionMenuItem* t = new RJSType_QStyleOptionMenuItem();
          global.setProperty("RJSType_QStyleOptionMenuItem", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionMenuItem::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionMenuItem_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionMenuItem_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionMenuItem_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionMenuItem_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionMenuItem.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionMenuItem_Wrapper::QStyleOptionMenuItem_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionMenuItem_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionMenuItem_Wrapper::QStyleOptionMenuItem_Wrapper(RJSApi& h, QStyleOptionMenuItem* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionMenuItem_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionMenuItem_Wrapper"));
              //setObjectName("QStyleOptionMenuItem_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionMenuItem_Wrapper::~QStyleOptionMenuItem_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionMenuItem_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionMenuItem_Wrapper"));

            //qDebug() << "QStyleOptionMenuItem_Wrapper::~QStyleOptionMenuItem_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionMenuItem";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionMenuItem_Wrapper::initConnections() {

          //setObjectName("QStyleOptionMenuItem_Wrapper");

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
  
    // Class: QStyleOptionMenuItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionMenuItem_Wrapper::QStyleOptionMenuItem_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionMenuItem_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionMenuItem_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionMenuItem(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionMenuItem)
  
QStyleOptionMenuItem a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionMenuItem(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionMenuItem(
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

        
              wrapped = new QStyleOptionMenuItem(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionMenuItem";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionMenuItem
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionMenuItem_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionMenuItem* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionMenuItem
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionMenuItem_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionMenuItem(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionMenuItem)
  
QStyleOptionMenuItem a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionMenuItem(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionMenuItem* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionMenuItem* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionMenuItem&

            return RJSHelper::cpp2js_QStyleOptionMenuItem(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionDockWidget*> QStyleOptionDockWidget_Wrapper::basecasters_QStyleOptionDockWidget;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionDockWidget_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionDockWidget_Wrapper>("org.qcad", 1, 0, "QStyleOptionDockWidget_Wrapper");
        qmlRegisterInterface<QStyleOptionDockWidget_Wrapper>("QStyleOptionDockWidget_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionDockWidget* t = new RJSType_QStyleOptionDockWidget();
          global.setProperty("RJSType_QStyleOptionDockWidget", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionDockWidget::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionDockWidget_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionDockWidget_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionDockWidget_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionDockWidget_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionDockWidget.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionDockWidget_Wrapper::QStyleOptionDockWidget_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionDockWidget_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionDockWidget_Wrapper::QStyleOptionDockWidget_Wrapper(RJSApi& h, QStyleOptionDockWidget* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionDockWidget_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionDockWidget_Wrapper"));
              //setObjectName("QStyleOptionDockWidget_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionDockWidget_Wrapper::~QStyleOptionDockWidget_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionDockWidget_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionDockWidget_Wrapper"));

            //qDebug() << "QStyleOptionDockWidget_Wrapper::~QStyleOptionDockWidget_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionDockWidget";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionDockWidget_Wrapper::initConnections() {

          //setObjectName("QStyleOptionDockWidget_Wrapper");

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
  
    // Class: QStyleOptionDockWidget
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionDockWidget_Wrapper::QStyleOptionDockWidget_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionDockWidget_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionDockWidget_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionDockWidget(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionDockWidget)
  
QStyleOptionDockWidget a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionDockWidget(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionDockWidget(
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

        
              wrapped = new QStyleOptionDockWidget(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionDockWidget";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionDockWidget
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionDockWidget_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionDockWidget* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionDockWidget
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionDockWidget_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionDockWidget(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionDockWidget)
  
QStyleOptionDockWidget a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionDockWidget(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionDockWidget* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionDockWidget* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionDockWidget&

            return RJSHelper::cpp2js_QStyleOptionDockWidget(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionViewItem*> QStyleOptionViewItem_Wrapper::basecasters_QStyleOptionViewItem;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionViewItem_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionViewItem_Wrapper>("org.qcad", 1, 0, "QStyleOptionViewItem_Wrapper");
        qmlRegisterInterface<QStyleOptionViewItem_Wrapper>("QStyleOptionViewItem_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionViewItem* t = new RJSType_QStyleOptionViewItem();
          global.setProperty("RJSType_QStyleOptionViewItem", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionViewItem::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionViewItem_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionViewItem_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionViewItem_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionViewItem_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionViewItem.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionViewItem_Wrapper::QStyleOptionViewItem_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionViewItem_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionViewItem_Wrapper::QStyleOptionViewItem_Wrapper(RJSApi& h, QStyleOptionViewItem* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionViewItem_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionViewItem_Wrapper"));
              //setObjectName("QStyleOptionViewItem_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionViewItem_Wrapper::~QStyleOptionViewItem_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionViewItem_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionViewItem_Wrapper"));

            //qDebug() << "QStyleOptionViewItem_Wrapper::~QStyleOptionViewItem_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionViewItem";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionViewItem_Wrapper::initConnections() {

          //setObjectName("QStyleOptionViewItem_Wrapper");

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
  
    // Class: QStyleOptionViewItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionViewItem_Wrapper::QStyleOptionViewItem_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionViewItem_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionViewItem_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionViewItem(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionViewItem)
  
QStyleOptionViewItem a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionViewItem(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionViewItem(
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

        
              wrapped = new QStyleOptionViewItem(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionViewItem";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionViewItem
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionViewItem_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionViewItem* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionViewItem
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionViewItem_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionViewItem(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionViewItem)
  
QStyleOptionViewItem a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionViewItem(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionViewItem* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionViewItem* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionViewItem&

            return RJSHelper::cpp2js_QStyleOptionViewItem(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionToolBox*> QStyleOptionToolBox_Wrapper::basecasters_QStyleOptionToolBox;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionToolBox_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionToolBox_Wrapper>("org.qcad", 1, 0, "QStyleOptionToolBox_Wrapper");
        qmlRegisterInterface<QStyleOptionToolBox_Wrapper>("QStyleOptionToolBox_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionToolBox* t = new RJSType_QStyleOptionToolBox();
          global.setProperty("RJSType_QStyleOptionToolBox", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionToolBox::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionToolBox_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionToolBox_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionToolBox_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionToolBox_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionToolBox.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionToolBox_Wrapper::QStyleOptionToolBox_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionToolBox_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionToolBox_Wrapper::QStyleOptionToolBox_Wrapper(RJSApi& h, QStyleOptionToolBox* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionToolBox_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionToolBox_Wrapper"));
              //setObjectName("QStyleOptionToolBox_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionToolBox_Wrapper::~QStyleOptionToolBox_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionToolBox_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionToolBox_Wrapper"));

            //qDebug() << "QStyleOptionToolBox_Wrapper::~QStyleOptionToolBox_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionToolBox";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionToolBox_Wrapper::initConnections() {

          //setObjectName("QStyleOptionToolBox_Wrapper");

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
  
    // Class: QStyleOptionToolBox
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionToolBox_Wrapper::QStyleOptionToolBox_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionToolBox_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionToolBox_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionToolBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionToolBox)
  
QStyleOptionToolBox a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionToolBox(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionToolBox(
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

        
              wrapped = new QStyleOptionToolBox(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionToolBox";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionToolBox
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionToolBox_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionToolBox* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionToolBox
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionToolBox_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionToolBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionToolBox)
  
QStyleOptionToolBox a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionToolBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionToolBox* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionToolBox* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionToolBox&

            return RJSHelper::cpp2js_QStyleOptionToolBox(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionRubberBand*> QStyleOptionRubberBand_Wrapper::basecasters_QStyleOptionRubberBand;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionRubberBand_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionRubberBand_Wrapper>("org.qcad", 1, 0, "QStyleOptionRubberBand_Wrapper");
        qmlRegisterInterface<QStyleOptionRubberBand_Wrapper>("QStyleOptionRubberBand_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionRubberBand* t = new RJSType_QStyleOptionRubberBand();
          global.setProperty("RJSType_QStyleOptionRubberBand", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionRubberBand::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionRubberBand_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionRubberBand_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionRubberBand_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionRubberBand_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionRubberBand.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionRubberBand_Wrapper::QStyleOptionRubberBand_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionRubberBand_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionRubberBand_Wrapper::QStyleOptionRubberBand_Wrapper(RJSApi& h, QStyleOptionRubberBand* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionRubberBand_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionRubberBand_Wrapper"));
              //setObjectName("QStyleOptionRubberBand_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionRubberBand_Wrapper::~QStyleOptionRubberBand_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionRubberBand_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionRubberBand_Wrapper"));

            //qDebug() << "QStyleOptionRubberBand_Wrapper::~QStyleOptionRubberBand_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionRubberBand";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionRubberBand_Wrapper::initConnections() {

          //setObjectName("QStyleOptionRubberBand_Wrapper");

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
  
    // Class: QStyleOptionRubberBand
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionRubberBand_Wrapper::QStyleOptionRubberBand_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionRubberBand_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionRubberBand_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionRubberBand(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionRubberBand)
  
QStyleOptionRubberBand a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionRubberBand(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionRubberBand(
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

        
              wrapped = new QStyleOptionRubberBand(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionRubberBand";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionRubberBand
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionRubberBand_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionRubberBand* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionRubberBand
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionRubberBand_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionRubberBand(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionRubberBand)
  
QStyleOptionRubberBand a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionRubberBand(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionRubberBand* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionRubberBand* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionRubberBand&

            return RJSHelper::cpp2js_QStyleOptionRubberBand(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionComplex*> QStyleOptionComplex_Wrapper::basecasters_QStyleOptionComplex;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionComplex_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionComplex_Wrapper>("org.qcad", 1, 0, "QStyleOptionComplex_Wrapper");
        qmlRegisterInterface<QStyleOptionComplex_Wrapper>("QStyleOptionComplex_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionComplex* t = new RJSType_QStyleOptionComplex();
          global.setProperty("RJSType_QStyleOptionComplex", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionComplex::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionComplex_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionComplex_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionComplex_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionComplex_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionComplex.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionComplex_Wrapper::QStyleOptionComplex_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionComplex_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionComplex_Wrapper::QStyleOptionComplex_Wrapper(RJSApi& h, QStyleOptionComplex* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionComplex_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionComplex_Wrapper"));
              //setObjectName("QStyleOptionComplex_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionComplex_Wrapper::~QStyleOptionComplex_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionComplex_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionComplex_Wrapper"));

            //qDebug() << "QStyleOptionComplex_Wrapper::~QStyleOptionComplex_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionComplex";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionComplex_Wrapper::initConnections() {

          //setObjectName("QStyleOptionComplex_Wrapper");

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
  
    // Class: QStyleOptionComplex
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QStyleOptionComplex_Wrapper::QStyleOptionComplex_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QStyleOptionComplex_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionComplex_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
    , true
  
  )

   && RJSHelper::is_int(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: version (int)
  
int a1_cpp;

      
          if (a1.isUndefined()) {
            a1_cpp = QStyleOptionComplex::Version;
          }
          else {
            a1_cpp = RJSHelper::js2cpp_int(handler, a1);
          }
        
  // convert js parameter to cpp: type (int)
  
int a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = SO_Complex;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_int(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionComplex(
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
        RJSHelper::is_QStyleOptionComplex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionComplex)
  
QStyleOptionComplex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionComplex(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionComplex(
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionComplex";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionComplex
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionComplex_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionComplex* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionComplex
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionComplex_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionComplex(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionComplex)
  
QStyleOptionComplex a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionComplex(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionComplex* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionComplex* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionComplex&

            return RJSHelper::cpp2js_QStyleOptionComplex(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionSlider*> QStyleOptionSlider_Wrapper::basecasters_QStyleOptionSlider;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionSlider_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionSlider_Wrapper>("org.qcad", 1, 0, "QStyleOptionSlider_Wrapper");
        qmlRegisterInterface<QStyleOptionSlider_Wrapper>("QStyleOptionSlider_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionSlider* t = new RJSType_QStyleOptionSlider();
          global.setProperty("RJSType_QStyleOptionSlider", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionSlider::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionSlider_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionSlider_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionSlider_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionSlider_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionSlider.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionSlider_Wrapper::QStyleOptionSlider_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionSlider_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionSlider_Wrapper::QStyleOptionSlider_Wrapper(RJSApi& h, QStyleOptionSlider* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionSlider_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionSlider_Wrapper"));
              //setObjectName("QStyleOptionSlider_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionSlider_Wrapper::~QStyleOptionSlider_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionSlider_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionSlider_Wrapper"));

            //qDebug() << "QStyleOptionSlider_Wrapper::~QStyleOptionSlider_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionSlider";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionSlider_Wrapper::initConnections() {

          //setObjectName("QStyleOptionSlider_Wrapper");

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
  
    // Class: QStyleOptionSlider
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionSlider_Wrapper::QStyleOptionSlider_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionSlider_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionSlider_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionSlider(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionSlider)
  
QStyleOptionSlider a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionSlider(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionSlider(
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

        
              wrapped = new QStyleOptionSlider(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionSlider";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionSlider
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionSlider_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionSlider(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionSlider)
  
QStyleOptionSlider a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionSlider(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionSlider* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionSlider* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionSlider&

            return RJSHelper::cpp2js_QStyleOptionSlider(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionSpinBox*> QStyleOptionSpinBox_Wrapper::basecasters_QStyleOptionSpinBox;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionSpinBox_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionSpinBox_Wrapper>("org.qcad", 1, 0, "QStyleOptionSpinBox_Wrapper");
        qmlRegisterInterface<QStyleOptionSpinBox_Wrapper>("QStyleOptionSpinBox_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionSpinBox* t = new RJSType_QStyleOptionSpinBox();
          global.setProperty("RJSType_QStyleOptionSpinBox", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionSpinBox::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionSpinBox_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionSpinBox_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionSpinBox_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionSpinBox_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionSpinBox.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionSpinBox_Wrapper::QStyleOptionSpinBox_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionSpinBox_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionSpinBox_Wrapper::QStyleOptionSpinBox_Wrapper(RJSApi& h, QStyleOptionSpinBox* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionSpinBox_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionSpinBox_Wrapper"));
              //setObjectName("QStyleOptionSpinBox_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionSpinBox_Wrapper::~QStyleOptionSpinBox_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionSpinBox_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionSpinBox_Wrapper"));

            //qDebug() << "QStyleOptionSpinBox_Wrapper::~QStyleOptionSpinBox_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionSpinBox";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionSpinBox_Wrapper::initConnections() {

          //setObjectName("QStyleOptionSpinBox_Wrapper");

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
  
    // Class: QStyleOptionSpinBox
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionSpinBox_Wrapper::QStyleOptionSpinBox_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionSpinBox_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionSpinBox_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionSpinBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionSpinBox)
  
QStyleOptionSpinBox a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionSpinBox(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionSpinBox(
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

        
              wrapped = new QStyleOptionSpinBox(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionSpinBox";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionSpinBox
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionSpinBox_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionSpinBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionSpinBox)
  
QStyleOptionSpinBox a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionSpinBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionSpinBox* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionSpinBox* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionSpinBox&

            return RJSHelper::cpp2js_QStyleOptionSpinBox(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionToolButton*> QStyleOptionToolButton_Wrapper::basecasters_QStyleOptionToolButton;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionToolButton_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionToolButton_Wrapper>("org.qcad", 1, 0, "QStyleOptionToolButton_Wrapper");
        qmlRegisterInterface<QStyleOptionToolButton_Wrapper>("QStyleOptionToolButton_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionToolButton* t = new RJSType_QStyleOptionToolButton();
          global.setProperty("RJSType_QStyleOptionToolButton", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionToolButton::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionToolButton_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionToolButton_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionToolButton_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionToolButton_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionToolButton.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionToolButton_Wrapper::QStyleOptionToolButton_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionToolButton_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionToolButton_Wrapper::QStyleOptionToolButton_Wrapper(RJSApi& h, QStyleOptionToolButton* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionToolButton_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionToolButton_Wrapper"));
              //setObjectName("QStyleOptionToolButton_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionToolButton_Wrapper::~QStyleOptionToolButton_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionToolButton_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionToolButton_Wrapper"));

            //qDebug() << "QStyleOptionToolButton_Wrapper::~QStyleOptionToolButton_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionToolButton";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionToolButton_Wrapper::initConnections() {

          //setObjectName("QStyleOptionToolButton_Wrapper");

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
  
    // Class: QStyleOptionToolButton
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionToolButton_Wrapper::QStyleOptionToolButton_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionToolButton_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionToolButton_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionToolButton(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionToolButton)
  
QStyleOptionToolButton a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionToolButton(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionToolButton(
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

        
              wrapped = new QStyleOptionToolButton(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionToolButton";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionToolButton
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionToolButton_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionToolButton(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionToolButton)
  
QStyleOptionToolButton a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionToolButton(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionToolButton* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionToolButton* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionToolButton&

            return RJSHelper::cpp2js_QStyleOptionToolButton(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionComboBox*> QStyleOptionComboBox_Wrapper::basecasters_QStyleOptionComboBox;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionComboBox_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionComboBox_Wrapper>("org.qcad", 1, 0, "QStyleOptionComboBox_Wrapper");
        qmlRegisterInterface<QStyleOptionComboBox_Wrapper>("QStyleOptionComboBox_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionComboBox* t = new RJSType_QStyleOptionComboBox();
          global.setProperty("RJSType_QStyleOptionComboBox", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionComboBox::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionComboBox_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionComboBox_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionComboBox_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionComboBox_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionComboBox.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionComboBox_Wrapper::QStyleOptionComboBox_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionComboBox_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionComboBox_Wrapper::QStyleOptionComboBox_Wrapper(RJSApi& h, QStyleOptionComboBox* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionComboBox_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionComboBox_Wrapper"));
              //setObjectName("QStyleOptionComboBox_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionComboBox_Wrapper::~QStyleOptionComboBox_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionComboBox_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionComboBox_Wrapper"));

            //qDebug() << "QStyleOptionComboBox_Wrapper::~QStyleOptionComboBox_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionComboBox";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionComboBox_Wrapper::initConnections() {

          //setObjectName("QStyleOptionComboBox_Wrapper");

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
  
    // Class: QStyleOptionComboBox
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionComboBox_Wrapper::QStyleOptionComboBox_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionComboBox_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionComboBox_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionComboBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionComboBox)
  
QStyleOptionComboBox a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionComboBox(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionComboBox(
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

        
              wrapped = new QStyleOptionComboBox(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionComboBox";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionComboBox
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionComboBox_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionComboBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionComboBox)
  
QStyleOptionComboBox a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionComboBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionComboBox* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionComboBox* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionComboBox&

            return RJSHelper::cpp2js_QStyleOptionComboBox(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionTitleBar*> QStyleOptionTitleBar_Wrapper::basecasters_QStyleOptionTitleBar;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionTitleBar_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionTitleBar_Wrapper>("org.qcad", 1, 0, "QStyleOptionTitleBar_Wrapper");
        qmlRegisterInterface<QStyleOptionTitleBar_Wrapper>("QStyleOptionTitleBar_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionTitleBar* t = new RJSType_QStyleOptionTitleBar();
          global.setProperty("RJSType_QStyleOptionTitleBar", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionTitleBar::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionTitleBar_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionTitleBar_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionTitleBar_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionTitleBar_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionTitleBar.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionTitleBar_Wrapper::QStyleOptionTitleBar_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionTitleBar_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionTitleBar_Wrapper::QStyleOptionTitleBar_Wrapper(RJSApi& h, QStyleOptionTitleBar* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionTitleBar_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionTitleBar_Wrapper"));
              //setObjectName("QStyleOptionTitleBar_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionTitleBar_Wrapper::~QStyleOptionTitleBar_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionTitleBar_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionTitleBar_Wrapper"));

            //qDebug() << "QStyleOptionTitleBar_Wrapper::~QStyleOptionTitleBar_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionTitleBar";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionTitleBar_Wrapper::initConnections() {

          //setObjectName("QStyleOptionTitleBar_Wrapper");

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
  
    // Class: QStyleOptionTitleBar
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionTitleBar_Wrapper::QStyleOptionTitleBar_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionTitleBar_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionTitleBar_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionTitleBar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionTitleBar)
  
QStyleOptionTitleBar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionTitleBar(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionTitleBar(
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

        
              wrapped = new QStyleOptionTitleBar(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionTitleBar";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionTitleBar
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionTitleBar_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionTitleBar(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionTitleBar)
  
QStyleOptionTitleBar a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionTitleBar(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionTitleBar* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionTitleBar* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionTitleBar&

            return RJSHelper::cpp2js_QStyleOptionTitleBar(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionGroupBox*> QStyleOptionGroupBox_Wrapper::basecasters_QStyleOptionGroupBox;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionGroupBox_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionGroupBox_Wrapper>("org.qcad", 1, 0, "QStyleOptionGroupBox_Wrapper");
        qmlRegisterInterface<QStyleOptionGroupBox_Wrapper>("QStyleOptionGroupBox_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionGroupBox* t = new RJSType_QStyleOptionGroupBox();
          global.setProperty("RJSType_QStyleOptionGroupBox", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionGroupBox::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionGroupBox_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionGroupBox_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionGroupBox_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionGroupBox_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionGroupBox.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionGroupBox_Wrapper::QStyleOptionGroupBox_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionGroupBox_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionGroupBox_Wrapper::QStyleOptionGroupBox_Wrapper(RJSApi& h, QStyleOptionGroupBox* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionGroupBox_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionGroupBox_Wrapper"));
              //setObjectName("QStyleOptionGroupBox_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionGroupBox_Wrapper::~QStyleOptionGroupBox_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionGroupBox_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionGroupBox_Wrapper"));

            //qDebug() << "QStyleOptionGroupBox_Wrapper::~QStyleOptionGroupBox_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionGroupBox";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionGroupBox_Wrapper::initConnections() {

          //setObjectName("QStyleOptionGroupBox_Wrapper");

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
  
    // Class: QStyleOptionGroupBox
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionGroupBox_Wrapper::QStyleOptionGroupBox_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionGroupBox_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionGroupBox_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionGroupBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionGroupBox)
  
QStyleOptionGroupBox a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionGroupBox(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionGroupBox(
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

        
              wrapped = new QStyleOptionGroupBox(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionGroupBox";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionGroupBox
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionGroupBox_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionGroupBox(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionGroupBox)
  
QStyleOptionGroupBox a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionGroupBox(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionGroupBox* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionGroupBox* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionGroupBox&

            return RJSHelper::cpp2js_QStyleOptionGroupBox(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionSizeGrip*> QStyleOptionSizeGrip_Wrapper::basecasters_QStyleOptionSizeGrip;
    
    // static functions implementation in singleton wrapper:
    
    void QStyleOptionSizeGrip_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionSizeGrip_Wrapper>("org.qcad", 1, 0, "QStyleOptionSizeGrip_Wrapper");
        qmlRegisterInterface<QStyleOptionSizeGrip_Wrapper>("QStyleOptionSizeGrip_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionSizeGrip* t = new RJSType_QStyleOptionSizeGrip();
          global.setProperty("RJSType_QStyleOptionSizeGrip", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionSizeGrip::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionSizeGrip_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionSizeGrip_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionSizeGrip_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionSizeGrip_BaseJs", mob);
      
      QString fileName = ":generator/js/QStyleOptionSizeGrip.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionSizeGrip_Wrapper::QStyleOptionSizeGrip_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionSizeGrip_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionSizeGrip_Wrapper::QStyleOptionSizeGrip_Wrapper(RJSApi& h, QStyleOptionSizeGrip* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionSizeGrip_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionSizeGrip_Wrapper"));
              //setObjectName("QStyleOptionSizeGrip_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionSizeGrip_Wrapper::~QStyleOptionSizeGrip_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionSizeGrip_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionSizeGrip_Wrapper"));

            //qDebug() << "QStyleOptionSizeGrip_Wrapper::~QStyleOptionSizeGrip_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionSizeGrip";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionSizeGrip_Wrapper::initConnections() {

          //setObjectName("QStyleOptionSizeGrip_Wrapper");

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
  
    // Class: QStyleOptionSizeGrip
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionSizeGrip_Wrapper::QStyleOptionSizeGrip_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionSizeGrip_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionSizeGrip_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionSizeGrip(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionSizeGrip)
  
QStyleOptionSizeGrip a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionSizeGrip(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionSizeGrip(
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

        
              wrapped = new QStyleOptionSizeGrip(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionSizeGrip";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionSizeGrip
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionSizeGrip_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionSizeGrip(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionSizeGrip)
  
QStyleOptionSizeGrip a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionSizeGrip(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionSizeGrip* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionSizeGrip* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionSizeGrip&

            return RJSHelper::cpp2js_QStyleOptionSizeGrip(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qstyleoption_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QStyleOptionGraphicsItem*> QStyleOptionGraphicsItem_Wrapper::basecasters_QStyleOptionGraphicsItem;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QStyleOptionGraphicsItem
    // Function: levelOfDetailFromTransform
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionGraphicsItem_WrapperSingleton::levelOfDetailFromTransform
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: worldTransform (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            qreal res = 
                
                // call static member function:
                QStyleOptionGraphicsItem::levelOfDetailFromTransform(
              a1_cpp
    
            );
          
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for levelOfDetailFromTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QStyleOptionGraphicsItem_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QStyleOptionGraphicsItem_Wrapper>("org.qcad", 1, 0, "QStyleOptionGraphicsItem_Wrapper");
        qmlRegisterInterface<QStyleOptionGraphicsItem_Wrapper>("QStyleOptionGraphicsItem_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QStyleOptionGraphicsItem* t = new RJSType_QStyleOptionGraphicsItem();
          global.setProperty("RJSType_QStyleOptionGraphicsItem", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QStyleOptionGraphicsItem::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QStyleOptionGraphicsItem_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QStyleOptionGraphicsItem_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QStyleOptionGraphicsItem_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QStyleOptionGraphicsItem_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QStyleOptionGraphicsItem_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QStyleOptionGraphicsItem_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QStyleOptionGraphicsItem_WrapperSingleton * s = new QStyleOptionGraphicsItem_WrapperSingleton(handler);
        engine->globalObject().setProperty("QStyleOptionGraphicsItem_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QStyleOptionGraphicsItem.js";
      QFile scriptFile(fileName);
      if (!scriptFile.open(QIODevice::ReadOnly)) {
        qWarning() << "JS script wrapper file not found:" << fileName;
        return;
      }
      QTextStream stream(&scriptFile);
      QString contents = stream.readAll();
      scriptFile.close();

      //qDebug() << "Evaluating file: " << fileName;
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
    QStyleOptionGraphicsItem_Wrapper::QStyleOptionGraphicsItem_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QStyleOptionGraphicsItem_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QStyleOptionGraphicsItem_Wrapper::QStyleOptionGraphicsItem_Wrapper(RJSApi& h, QStyleOptionGraphicsItem* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QStyleOptionGraphicsItem_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QStyleOptionGraphicsItem_Wrapper"));
              //setObjectName("QStyleOptionGraphicsItem_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QStyleOptionGraphicsItem_Wrapper::~QStyleOptionGraphicsItem_Wrapper() {
            //RDebug::decCounter(QString("QStyleOptionGraphicsItem_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QStyleOptionGraphicsItem_Wrapper"));

            //qDebug() << "QStyleOptionGraphicsItem_Wrapper::~QStyleOptionGraphicsItem_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QStyleOptionGraphicsItem";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QStyleOptionGraphicsItem_Wrapper::initConnections() {

          //setObjectName("QStyleOptionGraphicsItem_Wrapper");

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
  
    // Class: QStyleOptionGraphicsItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QStyleOptionGraphicsItem_Wrapper::QStyleOptionGraphicsItem_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QStyleOptionGraphicsItem_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QStyleOptionGraphicsItem_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionGraphicsItem(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QStyleOptionGraphicsItem)
  
QStyleOptionGraphicsItem a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionGraphicsItem(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QStyleOptionGraphicsItem(
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

        
              wrapped = new QStyleOptionGraphicsItem(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QStyleOptionGraphicsItem";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QStyleOptionGraphicsItem
    // Function: initFrom
    // Source: QStyleOption
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionGraphicsItem_Wrapper::initFrom
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionGraphicsItem* w = getWrapped();
                
                w->initFrom(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for initFrom";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QStyleOptionGraphicsItem
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QStyleOptionGraphicsItem_Wrapper::operator_assign
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QStyleOptionGraphicsItem(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QStyleOptionGraphicsItem)
  
QStyleOptionGraphicsItem a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QStyleOptionGraphicsItem(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QStyleOptionGraphicsItem* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      QStyleOptionGraphicsItem* res =
                    &
                w->operator=(
                  a1_cpp
    
                );
              
            // return type: QStyleOptionGraphicsItem&

            return RJSHelper::cpp2js_QStyleOptionGraphicsItem(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for operator_assign";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qstyleoption_wrapper.cpp"
  
