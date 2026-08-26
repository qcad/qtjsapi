
  // Auto generated
  
  // include header:
  //#include "qsqlerrorwrapper.h"
  //#include "header_cpp.h"
  
    #ifdef QT_SQL_LIB
    #include "qsqlerror_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QSqlError*> QSqlError_Wrapper::basecasters_QSqlError;
    
    // static functions implementation in singleton wrapper:
    
    void QSqlError_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSqlError_Wrapper>("org.qcad", 1, 0, "QSqlError_Wrapper");
        qmlRegisterInterface<QSqlError_Wrapper>("QSqlError_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QSqlError* t = new RJSType_QSqlError();
          global.setProperty("RJSType_QSqlError", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QSqlError::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSqlError_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSqlError_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSqlError_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSqlError_BaseJs", mob);
      
      QString fileName = ":generator/js/QSqlError.js";
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
    QSqlError_Wrapper::QSqlError_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSqlError_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSqlError_Wrapper::QSqlError_Wrapper(RJSApi& h, QSqlError* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSqlError_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSqlError_Wrapper"));
              //setObjectName("QSqlError_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSqlError_Wrapper::~QSqlError_Wrapper() {
            //RDebug::decCounter(QString("QSqlError_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSqlError_Wrapper"));

            //qDebug() << "QSqlError_Wrapper::~QSqlError_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QSqlError";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSqlError_Wrapper::initConnections() {

          //setObjectName("QSqlError_Wrapper");

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
  
    // Class: QSqlError
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1
QSqlError_Wrapper::QSqlError_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QSqlError_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSqlError_Wrapper"));
                
      {
    

    // call function:
    
        // construct wrapper:

        
              wrapped = new QSqlError(
                  
              );
              wrappedCreated = true;
            

        // signal forwarding:
        // TODO
        //connect(wrapped, SIGNAL(triggered(bool)), this, SLOT(triggeredEmitter(bool)));
        initConnections();
        return;

      
  }


                  qWarning() << "no matching constructor variant found for QSqlError";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSqlError
    // Function: driverText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSqlError_Wrapper::driverText
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
                QSqlError* w = getWrapped();
                QString res = 
                    
                w->driverText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for driverText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSqlError
    // Function: databaseText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSqlError_Wrapper::databaseText
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
                QSqlError* w = getWrapped();
                QString res = 
                    
                w->databaseText(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for databaseText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSqlError
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSqlError_Wrapper::type
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
                QSqlError* w = getWrapped();
                QSqlError::ErrorType res = 
                    
                w->type(
                  
                );
              
            // return type: QSqlError::ErrorType

            return RJSHelper::cpp2js_QSqlError_ErrorType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSqlError
    // Function: nativeErrorCode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSqlError_Wrapper::nativeErrorCode
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
                QSqlError* w = getWrapped();
                QString res = 
                    
                w->nativeErrorCode(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for nativeErrorCode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSqlError
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSqlError_Wrapper::text
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
                QSqlError* w = getWrapped();
                QString res = 
                    
                w->text(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for text";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSqlError
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSqlError_Wrapper::isValid
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
                QSqlError* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #endif
  
    #include "moc_qsqlerror_wrapper.cpp"
  
