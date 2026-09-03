
  // Auto generated
  
  // include header:
  //#include "qgeojsonwrapper.h"
  //#include "header_cpp.h"
  
    #ifdef QT_LOCATION_LIB
    #include "qgeojson_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QGeoJson*> QGeoJson_Wrapper::basecasters_QGeoJson;
    
    // static functions implementation in singleton wrapper:
    
    // Class: QGeoJson
    // Function: importGeoJson
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoJson_WrapperSingleton::importGeoJson
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QJsonDocument(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: doc (QJsonDocument)
  
QJsonDocument a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QJsonDocument(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QVariant> res = 
                
                // call static member function:
                QGeoJson::importGeoJson(
              a1_cpp
    
            );
          
            // return type: QList<QVariant>

            return RJSHelper::cpp2js_QList_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for importGeoJson";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoJson
    // Function: importGeoJsonPlain
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoJson_WrapperSingleton::importGeoJsonPlain
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QJsonDocument(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: doc (QJsonDocument)
  
QJsonDocument a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QJsonDocument(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QList<QVariant> res = 
                
                // call static member function:
                QGeoJson::importGeoJsonPlain(
              a1_cpp
    
            );
          
            // return type: QList<QVariant>

            return RJSHelper::cpp2js_QList_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for importGeoJsonPlain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoJson
    // Function: toPlain
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoJson_WrapperSingleton::toPlain
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QVariant(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: v (QVariant)
  
QVariant a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QVariant(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QVariant res = 
                
                // call static member function:
                QGeoJson::toPlain(
              a1_cpp
    
            );
          
            // return type: QVariant

            return RJSHelper::cpp2js_QVariant(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toPlain";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoJson
    // Function: exportGeoJson
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoJson_WrapperSingleton::exportGeoJson
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QVariant(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: list (QList<QVariant>)
  
QList<QVariant> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QVariant(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QJsonDocument res = 
                
                // call static member function:
                QGeoJson::exportGeoJson(
              a1_cpp
    
            );
          
            // return type: QJsonDocument

            return RJSHelper::cpp2js_QJsonDocument(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for exportGeoJson";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoJson
    // Function: toString
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoJson_WrapperSingleton::
                          // special function name for JS wrapper:
                          toStr
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QVariant(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: importedGeoJson (QList<QVariant>)
  
QList<QVariant> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QVariant(handler, a1);
        

    // call function:
    
            // static member function:
            // call base class static function:
            QString res = 
                
                // call static member function:
                QGeoJson::toString(
              a1_cpp
    
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
            
    void QGeoJson_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QGeoJson_Wrapper>("org.qcad", 1, 0, "QGeoJson_Wrapper");
        qmlRegisterInterface<QGeoJson_Wrapper>("QGeoJson_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QGeoJson* t = new RJSType_QGeoJson();
          global.setProperty("RJSType_QGeoJson", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QGeoJson::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QGeoJson_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QGeoJson_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QGeoJson_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QGeoJson_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QGeoJson_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QGeoJson_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QGeoJson_WrapperSingleton * s = new QGeoJson_WrapperSingleton(handler);
        engine->globalObject().setProperty("QGeoJson_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QGeoJson.js";
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
    QGeoJson_Wrapper::QGeoJson_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QGeoJson_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QGeoJson_Wrapper::QGeoJson_Wrapper(RJSApi& h, QGeoJson* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QGeoJson_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QGeoJson_Wrapper"));
              //setObjectName("QGeoJson_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QGeoJson_Wrapper::~QGeoJson_Wrapper() {
            //RDebug::decCounter(QString("QGeoJson_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QGeoJson_Wrapper"));

            //qDebug() << "QGeoJson_Wrapper::~QGeoJson_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QGeoJson";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QGeoJson_Wrapper::initConnections() {

          //setObjectName("QGeoJson_Wrapper");

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
  

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #endif
  
    #include "moc_qgeojson_wrapper.cpp"
  
