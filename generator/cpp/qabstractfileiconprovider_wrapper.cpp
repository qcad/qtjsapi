
  // Auto generated
  
  // include header:
  //#include "qabstractfileiconproviderwrapper.h"
  //#include "header_cpp.h"
  
    #include "qabstractfileiconprovider_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QAbstractFileIconProvider*> QAbstractFileIconProvider_Wrapper::basecasters_QAbstractFileIconProvider;
    
    // static functions implementation in singleton wrapper:
    
    void QAbstractFileIconProvider_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QAbstractFileIconProvider_Wrapper>("org.qcad", 1, 0, "QAbstractFileIconProvider_Wrapper");
        qmlRegisterInterface<QAbstractFileIconProvider_Wrapper>("QAbstractFileIconProvider_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QAbstractFileIconProvider* t = new RJSType_QAbstractFileIconProvider();
          global.setProperty("RJSType_QAbstractFileIconProvider", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QAbstractFileIconProvider::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QAbstractFileIconProvider_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QAbstractFileIconProvider_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QAbstractFileIconProvider_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QAbstractFileIconProvider_BaseJs", mob);
      
      QString fileName = ":generator/js/QAbstractFileIconProvider.js";
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
    QAbstractFileIconProvider_Wrapper::QAbstractFileIconProvider_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QAbstractFileIconProvider_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QAbstractFileIconProvider_Wrapper::QAbstractFileIconProvider_Wrapper(RJSApi& h, QAbstractFileIconProvider* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QAbstractFileIconProvider_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QAbstractFileIconProvider_Wrapper"));
              //setObjectName("QAbstractFileIconProvider_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QAbstractFileIconProvider_Wrapper::~QAbstractFileIconProvider_Wrapper() {
            //RDebug::decCounter(QString("QAbstractFileIconProvider_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QAbstractFileIconProvider_Wrapper"));

            //qDebug() << "QAbstractFileIconProvider_Wrapper::~QAbstractFileIconProvider_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QAbstractFileIconProvider";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QAbstractFileIconProvider_Wrapper::initConnections() {

          //setObjectName("QAbstractFileIconProvider_Wrapper");

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
  
    // Class: QAbstractFileIconProvider
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QAbstractFileIconProvider_Wrapper::QAbstractFileIconProvider_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QAbstractFileIconProvider_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QAbstractFileIconProvider_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new QAbstractFileIconProvider(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QAbstractFileIconProvider";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QAbstractFileIconProvider
    // Function: icon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QAbstractFileIconProvider_Wrapper::icon
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractFileIconProvider_IconType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QAbstractFileIconProvider::IconType)
  
QAbstractFileIconProvider::IconType a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractFileIconProvider_IconType(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QAbstractFileIconProvider* w = getWrapped();
                QIcon res = 
                    
                w->icon(
                  a1_cpp
    
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
        RJSHelper::is_QFileInfo(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFileInfo)
  
QFileInfo a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFileInfo(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QAbstractFileIconProvider* w = getWrapped();
                QIcon res = 
                    
                w->icon(
                  a1_cpp
    
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
            
    // Class: QAbstractFileIconProvider
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QAbstractFileIconProvider_Wrapper::type
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QFileInfo(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFileInfo)
  
QFileInfo a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QFileInfo(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QAbstractFileIconProvider* w = getWrapped();
                QString res = 
                    
                w->type(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QAbstractFileIconProvider
    // Function: setOptions
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QAbstractFileIconProvider_Wrapper::setOptions
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QAbstractFileIconProvider_Options(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QAbstractFileIconProvider::Options)
  
QAbstractFileIconProvider::Options a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QAbstractFileIconProvider_Options(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QAbstractFileIconProvider* w = getWrapped();
                
                w->setOptions(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QAbstractFileIconProvider
    // Function: options
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QAbstractFileIconProvider_Wrapper::options
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
                QAbstractFileIconProvider* w = getWrapped();
                QAbstractFileIconProvider::Options res = 
                    
                w->options(
                  
                );
              
            // return type: QAbstractFileIconProvider::Options

            return RJSHelper::cpp2js_QAbstractFileIconProvider_Options(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for options";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qabstractfileiconprovider_wrapper.cpp"
  
