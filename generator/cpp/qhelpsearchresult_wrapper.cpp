
  // Auto generated
  
  // include header:
  //#include "qhelpsearchresultwrapper.h"
  //#include "header_cpp.h"
  
    #ifdef QT_HELP_LIB
    #include "qhelpsearchresult_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QHelpSearchResult*> QHelpSearchResult_Wrapper::basecasters_QHelpSearchResult;
    
    // static functions implementation in singleton wrapper:
    
    void QHelpSearchResult_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QHelpSearchResult_Wrapper>("org.qcad", 1, 0, "QHelpSearchResult_Wrapper");
        qmlRegisterInterface<QHelpSearchResult_Wrapper>("QHelpSearchResult_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QHelpSearchResult* t = new RJSType_QHelpSearchResult();
          global.setProperty("RJSType_QHelpSearchResult", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QHelpSearchResult::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QHelpSearchResult_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QHelpSearchResult_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QHelpSearchResult_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QHelpSearchResult_BaseJs", mob);
      
      QString fileName = ":generator/js/QHelpSearchResult.js";
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
    QHelpSearchResult_Wrapper::QHelpSearchResult_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QHelpSearchResult_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QHelpSearchResult_Wrapper::QHelpSearchResult_Wrapper(RJSApi& h, QHelpSearchResult* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QHelpSearchResult_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QHelpSearchResult_Wrapper"));
              //setObjectName("QHelpSearchResult_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QHelpSearchResult_Wrapper::~QHelpSearchResult_Wrapper() {
            //RDebug::decCounter(QString("QHelpSearchResult_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QHelpSearchResult_Wrapper"));

            //qDebug() << "QHelpSearchResult_Wrapper::~QHelpSearchResult_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QHelpSearchResult";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QHelpSearchResult_Wrapper::initConnections() {

          //setObjectName("QHelpSearchResult_Wrapper");

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
  
    // Class: QHelpSearchResult
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QHelpSearchResult_Wrapper::QHelpSearchResult_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QHelpSearchResult_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QHelpSearchResult_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QUrl(handler, a1
  )

   && RJSHelper::is_QString(handler, a2
  )

   && RJSHelper::is_QString(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: url (QUrl)
  
QUrl a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QUrl(handler, a1);
        
  // convert js parameter to cpp: title (QString)
  
QString a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QString(handler, a2);
        
  // convert js parameter to cpp: snippet (QString)
  
QString a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QString(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QHelpSearchResult(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
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

        
              wrapped = new QHelpSearchResult(
                  
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
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QHelpSearchResult";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QHelpSearchResult
    // Function: title
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHelpSearchResult_Wrapper::title
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
                QHelpSearchResult* w = getWrapped();
                QString res = 
                    
                w->title(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for title";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHelpSearchResult
    // Function: url
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHelpSearchResult_Wrapper::url
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
                QHelpSearchResult* w = getWrapped();
                QUrl res = 
                    
                w->url(
                  
                );
              
            // return type: QUrl

            return RJSHelper::cpp2js_QUrl(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for url";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHelpSearchResult
    // Function: snippet
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHelpSearchResult_Wrapper::snippet
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
                QHelpSearchResult* w = getWrapped();
                QString res = 
                    
                w->snippet(
                  
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for snippet";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #endif
  
    #include "moc_qhelpsearchresult_wrapper.cpp"
  
