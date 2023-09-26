
  // Auto generated
  
  // include header:
  //#include "qprinterinfowrapper.h"
  //#include "header_cpp.h"
  
    #include "qprinterinfo_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QPrinterInfo*> QPrinterInfo_Wrapper::basecasters_QPrinterInfo;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QPrinterInfo
    // Function: availablePrinterNames
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_WrapperSingleton::availablePrinterNames
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QStringList res = 
                
                // call static member function:
                QPrinterInfo::availablePrinterNames(
              
            );
          
            // return type: QStringList

            return RJSHelper::cpp2js_QStringList(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availablePrinterNames";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: availablePrinters
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_WrapperSingleton::availablePrinters
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QPrinterInfo> res = 
                
                // call static member function:
                QPrinterInfo::availablePrinters(
              
            );
          
            // return type: QList<QPrinterInfo>

            return RJSHelper::cpp2js_QList_QPrinterInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for availablePrinters";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: defaultPrinterName
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_WrapperSingleton::defaultPrinterName
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QPrinterInfo::defaultPrinterName(
              
            );
          
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultPrinterName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: defaultPrinter
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_WrapperSingleton::defaultPrinter
              (
                
              ) 
              
              {
                
      {
    

    // call function:
    
            // static member function:
            // call base class static function:
            QPrinterInfo res = 
                
                // call static member function:
                QPrinterInfo::defaultPrinter(
              
            );
          
            // return type: QPrinterInfo

            return RJSHelper::cpp2js_QPrinterInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultPrinter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: printerInfo
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_WrapperSingleton::printerInfo
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
    
  // convert js parameter to cpp: printerName (QString)
  
QString a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QString(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QPrinterInfo res = 
                
                // call static member function:
                QPrinterInfo::printerInfo(
              a1_cpp
    
            );
          
            // return type: QPrinterInfo

            return RJSHelper::cpp2js_QPrinterInfo(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for printerInfo";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif

    void QPrinterInfo_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPrinterInfo_Wrapper>("org.qcad", 1, 0, "QPrinterInfo_Wrapper");
        qmlRegisterInterface<QPrinterInfo_Wrapper>("QPrinterInfo_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QPrinterInfo* t = new RJSType_QPrinterInfo();
          global.setProperty("RJSType_QPrinterInfo", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QPrinterInfo::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPrinterInfo_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPrinterInfo_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPrinterInfo_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPrinterInfo_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QPrinterInfo_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QPrinterInfo_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QPrinterInfo_WrapperSingleton * s = new QPrinterInfo_WrapperSingleton(handler);
        engine->globalObject().setProperty("QPrinterInfo_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QPrinterInfo.js";
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
    QPrinterInfo_Wrapper::QPrinterInfo_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPrinterInfo_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPrinterInfo_Wrapper::QPrinterInfo_Wrapper(RJSApi& h, QPrinterInfo* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPrinterInfo_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPrinterInfo_Wrapper"));
              //setObjectName("QPrinterInfo_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPrinterInfo_Wrapper::~QPrinterInfo_Wrapper() {
            //RDebug::decCounter(QString("QPrinterInfo_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPrinterInfo_Wrapper"));

            //qDebug() << "QPrinterInfo_Wrapper::~QPrinterInfo_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPrinterInfo";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPrinterInfo_Wrapper::initConnections() {

          //setObjectName("QPrinterInfo_Wrapper");

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
  
    // Class: QPrinterInfo
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QPrinterInfo_Wrapper::QPrinterInfo_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPrinterInfo_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPrinterInfo_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QPrinterInfo(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPrinterInfo)
  
QPrinterInfo a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPrinterInfo(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPrinterInfo(
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
        RJSHelper::is_QPrinter_ptr(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: printer (QPrinter)
  

          // non copyable:
          QPrinter*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPrinter_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPrinterInfo(
                *a1_cpp
    
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

        
            wrapped = new QPrinterInfo(
                
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
                  

                  qWarning() << "no matching constructor variant found for QPrinterInfo";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
    // Class: QPrinterInfo
    // Function: printerName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::printerName
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
                QPrinterInfo* w = getWrapped();
                QString res = 
                    
                w->printerName(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for printerName";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: description
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::description
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
                QPrinterInfo* w = getWrapped();
                QString res = 
                    
                w->description(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for description";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: location
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::location
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
                QPrinterInfo* w = getWrapped();
                QString res = 
                    
                w->location(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for location";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: makeAndModel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::makeAndModel
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
                QPrinterInfo* w = getWrapped();
                QString res = 
                    
                w->makeAndModel(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for makeAndModel";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::isNull
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
                QPrinterInfo* w = getWrapped();
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
            
    // Class: QPrinterInfo
    // Function: isDefault
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::isDefault
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
                QPrinterInfo* w = getWrapped();
                bool res = 
                    
                w->isDefault(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDefault";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: isRemote
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::isRemote
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
                QPrinterInfo* w = getWrapped();
                bool res = 
                    
                w->isRemote(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isRemote";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: state
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::state
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
                QPrinterInfo* w = getWrapped();
                QPrinter::PrinterState res = 
                    
                w->state(
                  
                );
              
            // return type: QPrinter::PrinterState

            return RJSHelper::cpp2js_QPrinter_PrinterState(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for state";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: supportedPageSizes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::supportedPageSizes
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
                QPrinterInfo* w = getWrapped();
                QList<QPageSize> res = 
                    
                w->supportedPageSizes(
                  
                );
              
            // return type: QList<QPageSize>

            return RJSHelper::cpp2js_QList_QPageSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedPageSizes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: defaultPageSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::defaultPageSize
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
                QPrinterInfo* w = getWrapped();
                QPageSize res = 
                    
                w->defaultPageSize(
                  
                );
              
            // return type: QPageSize

            return RJSHelper::cpp2js_QPageSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultPageSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: supportsCustomPageSizes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::supportsCustomPageSizes
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
                QPrinterInfo* w = getWrapped();
                bool res = 
                    
                w->supportsCustomPageSizes(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportsCustomPageSizes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: minimumPhysicalPageSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::minimumPhysicalPageSize
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
                QPrinterInfo* w = getWrapped();
                QPageSize res = 
                    
                w->minimumPhysicalPageSize(
                  
                );
              
            // return type: QPageSize

            return RJSHelper::cpp2js_QPageSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumPhysicalPageSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: maximumPhysicalPageSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::maximumPhysicalPageSize
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
                QPrinterInfo* w = getWrapped();
                QPageSize res = 
                    
                w->maximumPhysicalPageSize(
                  
                );
              
            // return type: QPageSize

            return RJSHelper::cpp2js_QPageSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumPhysicalPageSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: supportedResolutions
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::supportedResolutions
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
                QPrinterInfo* w = getWrapped();
                QList<int> res = 
                    
                w->supportedResolutions(
                  
                );
              
            // return type: QList<int>

            return RJSHelper::cpp2js_QList_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedResolutions";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: defaultDuplexMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::defaultDuplexMode
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
                QPrinterInfo* w = getWrapped();
                QPrinter::DuplexMode res = 
                    
                w->defaultDuplexMode(
                  
                );
              
            // return type: QPrinter::DuplexMode

            return RJSHelper::cpp2js_QPrinter_DuplexMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultDuplexMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: supportedDuplexModes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::supportedDuplexModes
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
                QPrinterInfo* w = getWrapped();
                QList<QPrinter::DuplexMode> res = 
                    
                w->supportedDuplexModes(
                  
                );
              
            // return type: QList<QPrinter::DuplexMode>

            return RJSHelper::cpp2js_QList_QPrinter_DuplexMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedDuplexModes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: defaultColorMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::defaultColorMode
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
                QPrinterInfo* w = getWrapped();
                QPrinter::ColorMode res = 
                    
                w->defaultColorMode(
                  
                );
              
            // return type: QPrinter::ColorMode

            return RJSHelper::cpp2js_QPrinter_ColorMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for defaultColorMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPrinterInfo
    // Function: supportedColorModes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPrinterInfo_Wrapper::supportedColorModes
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
                QPrinterInfo* w = getWrapped();
                QList<QPrinter::ColorMode> res = 
                    
                w->supportedColorModes(
                  
                );
              
            // return type: QList<QPrinter::ColorMode>

            return RJSHelper::cpp2js_QList_QPrinter_ColorMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for supportedColorModes";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifndef QT_NO_DEBUG_STREAM

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  