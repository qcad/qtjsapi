
  // Auto generated
  
  // include header:
  //#include "qdesktopserviceswrapper.h"
  //#include "header_cpp.h"
  
    #include "qdesktopservices_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    // Class: QDesktopServices
    // Function: openUrl
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDesktopServices_WrapperSingleton::openUrl
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
    
  // convert js parameter to cpp: url (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            bool res = 
                
                // call static member function:
                QDesktopServices::openUrl(
              a1_cpp
    
            );
          
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for openUrl";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDesktopServices
    // Function: setUrlHandler
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QDesktopServices_WrapperSingleton::setUrlHandler
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
        RJSHelper::is_QString(handler, a1
  )

   && RJSHelper::is_QObject_ptr(handler, a2
    , true
  
  )

   && RJSHelper::is_char_ptr(handler, a3
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: scheme (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        
  // convert js parameter to cpp: receiver (QObject)
  

          // pointer:
          QObject*
         a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QObject_ptr(handler, a2);
        
  // convert js parameter to cpp: method (char)
  

      // char pointer string:
      QByteArray a3_ba = RJSHelper::js2cpp_char_ptr(handler, a3).toLocal8Bit();
      const char* a3_cpp = a3_ba.constData();
    

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QDesktopServices::setUrlHandler(
              a1_cpp
    , a2_cpp
    , a3_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setUrlHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QDesktopServices
    // Function: unsetUrlHandler
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QDesktopServices_WrapperSingleton::unsetUrlHandler
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
    
  // convert js parameter to cpp: scheme (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            
                // call static member function:
                QDesktopServices::unsetUrlHandler(
              a1_cpp
    
            );
          
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for unsetUrlHandler";
                  handler.trace();
                  return QJSValue();
                
              }
            
    void QDesktopServices_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QDesktopServices_Wrapper>("org.qcad", 1, 0, "QDesktopServices_Wrapper");
        qmlRegisterInterface<QDesktopServices_Wrapper>("QDesktopServices_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QDesktopServices_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QDesktopServices_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QDesktopServices_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QDesktopServices_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QDesktopServices_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QDesktopServices_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QDesktopServices_WrapperSingleton * s = new QDesktopServices_WrapperSingleton(handler);
        engine->globalObject().setProperty("QDesktopServices_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QDesktopServices.js";
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
    QDesktopServices_Wrapper::QDesktopServices_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QDesktopServices_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QDesktopServices_Wrapper::QDesktopServices_Wrapper(RJSApi& h, QDesktopServices* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QDesktopServices_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QDesktopServices_Wrapper"));
              //setObjectName("QDesktopServices_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QDesktopServices_Wrapper::~QDesktopServices_Wrapper() {
            //RDebug::decCounter(QString("QDesktopServices_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QDesktopServices_Wrapper"));

            //qDebug() << "QDesktopServices_Wrapper::~QDesktopServices_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QDesktopServices";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QDesktopServices_Wrapper::initConnections() {

          //setObjectName("QDesktopServices_Wrapper");

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
  
    // Class: QDesktopServices
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QDesktopServices_Wrapper::QDesktopServices_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QDesktopServices_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QDesktopServices_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QDesktopServices(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QDesktopServices";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  