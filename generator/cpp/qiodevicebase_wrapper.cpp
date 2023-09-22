
  // Auto generated
  
  // include header:
  //#include "qiodevicebasewrapper.h"
  //#include "header_cpp.h"
  
    #include "qiodevicebase_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QIODeviceBase_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QIODeviceBase_Wrapper>("org.qcad", 1, 0, "QIODeviceBase_Wrapper");
        qmlRegisterInterface<QIODeviceBase_Wrapper>("QIODeviceBase_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QIODeviceBase_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QIODeviceBase_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QIODeviceBase_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QIODeviceBase_BaseJs", mob);
      
      QString fileName = ":generator/js/QIODeviceBase.js";
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
    QIODeviceBase_Wrapper::QIODeviceBase_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QIODeviceBase_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QIODeviceBase_Wrapper::QIODeviceBase_Wrapper(RJSApi& h, QIODeviceBase* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QIODeviceBase_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QIODeviceBase_Wrapper"));
              //setObjectName("QIODeviceBase_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QIODeviceBase_Wrapper::~QIODeviceBase_Wrapper() {
            //RDebug::decCounter(QString("QIODeviceBase_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QIODeviceBase_Wrapper"));

            //qDebug() << "QIODeviceBase_Wrapper::~QIODeviceBase_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QIODeviceBase";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QIODeviceBase_Wrapper::initConnections() {

          //setObjectName("QIODeviceBase_Wrapper");

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
  
    // Class: QIODeviceBase
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QIODeviceBase_Wrapper::QIODeviceBase_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QIODeviceBase_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QIODeviceBase_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QIODeviceBase(
                
            );
            wrappedCreated = true;
          

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QIODeviceBase";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  