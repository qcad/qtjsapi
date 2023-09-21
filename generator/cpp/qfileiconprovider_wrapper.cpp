
  // Auto generated
  
  // include header:
  //#include "qfileiconproviderwrapper.h"
  //#include "header_cpp.h"
  
    #include "qfileiconprovider_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QFileIconProvider_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QFileIconProvider_Wrapper>("org.qcad", 1, 0, "QFileIconProvider_Wrapper");
        qmlRegisterInterface<QFileIconProvider_Wrapper>("QFileIconProvider_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QFileIconProvider_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QFileIconProvider_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QFileIconProvider_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QFileIconProvider_BaseJs", mob);
      
      QString fileName = ":generated/js/QFileIconProvider.js";
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
    QFileIconProvider_Wrapper::QFileIconProvider_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QFileIconProvider_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QFileIconProvider_Wrapper::QFileIconProvider_Wrapper(RJSApi& h, QFileIconProvider* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QFileIconProvider_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QFileIconProvider_Wrapper"));
              //setObjectName("QFileIconProvider_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QFileIconProvider_Wrapper::~QFileIconProvider_Wrapper() {
            //RDebug::decCounter(QString("QFileIconProvider_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QFileIconProvider_Wrapper"));

            //qDebug() << "QFileIconProvider_Wrapper::~QFileIconProvider_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QFileIconProvider";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QFileIconProvider_Wrapper::initConnections() {

          //setObjectName("QFileIconProvider_Wrapper");

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
  
    // Class: QFileIconProvider
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QFileIconProvider_Wrapper::QFileIconProvider_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QFileIconProvider_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QFileIconProvider_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QFileIconProvider_Base(
              handler
              
            );
            wrappedCreated = true;

            // set handler for wrapped base object:
            //((QFileIconProvider_Base*)wrapped)->setHandler(handler);

            // store self to call into JS:
            ((QFileIconProvider_Base*)wrapped)->self = handler.getSelf();
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QFileIconProvider";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QFileIconProvider
    // Function: type
    // Source: QAbstractFileIconProvider
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileIconProvider_Wrapper::type
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QFileInfo(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QFileInfo)
  
QFileInfo a1_cpp;

      a1_cpp = js2cpp_QFileInfo(handler, a1);
        

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
                QFileIconProvider* w = getWrapped();
                QString res = 
                    
                w->type(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QString

            return cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileIconProvider
    // Function: setOptions
    // Source: QAbstractFileIconProvider
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileIconProvider_Wrapper::setOptions
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        is_QAbstractFileIconProvider_Options(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QAbstractFileIconProvider::Options)
  
QAbstractFileIconProvider::Options a1_cpp;

      a1_cpp = js2cpp_QAbstractFileIconProvider_Options(handler, a1);
        

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
                QFileIconProvider* w = getWrapped();
                
                w->setOptions(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setOptions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileIconProvider
    // Function: options
    // Source: QAbstractFileIconProvider
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QFileIconProvider_Wrapper::options
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
                QFileIconProvider* w = getWrapped();
                QAbstractFileIconProvider::Options res = 
                    
                w->options(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QAbstractFileIconProvider::Options

            return cpp2js_QAbstractFileIconProvider_Options(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for options";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QFileIconProvider
    // Function: icon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QFileIconProvider_Wrapper::icon
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        is_QAbstractFileIconProvider_IconType(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: type (QAbstractFileIconProvider::IconType)
  
QAbstractFileIconProvider::IconType a1_cpp;

      a1_cpp = js2cpp_QAbstractFileIconProvider_IconType(handler, a1);
        

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
                QFileIconProvider* w = getWrapped();
                QIcon res = 
                    
                w->icon(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QIcon

            return cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        is_QFileInfo(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: info (QFileInfo)
  
QFileInfo a1_cpp;

      a1_cpp = js2cpp_QFileInfo(handler, a1);
        

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
                QFileIconProvider* w = getWrapped();
                QIcon res = 
                    
                w->icon(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: QIcon

            return cpp2js_QIcon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for icon";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  