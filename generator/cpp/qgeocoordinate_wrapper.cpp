
  // Auto generated
  
  // include header:
  //#include "qgeocoordinatewrapper.h"
  //#include "header_cpp.h"
  
    #ifdef QT_POSITIONING_LIB
    #include "qgeocoordinate_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QGeoCoordinate*> QGeoCoordinate_Wrapper::basecasters_QGeoCoordinate;
    
    // static functions implementation in singleton wrapper:
    
    void QGeoCoordinate_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QGeoCoordinate_Wrapper>("org.qcad", 1, 0, "QGeoCoordinate_Wrapper");
        qmlRegisterInterface<QGeoCoordinate_Wrapper>("QGeoCoordinate_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QGeoCoordinate* t = new RJSType_QGeoCoordinate();
          global.setProperty("RJSType_QGeoCoordinate", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QGeoCoordinate::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QGeoCoordinate_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QGeoCoordinate_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QGeoCoordinate_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QGeoCoordinate_BaseJs", mob);
      
      QString fileName = ":generator/js/QGeoCoordinate.js";
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
    QGeoCoordinate_Wrapper::QGeoCoordinate_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QGeoCoordinate_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QGeoCoordinate_Wrapper::QGeoCoordinate_Wrapper(RJSApi& h, QGeoCoordinate* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QGeoCoordinate_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QGeoCoordinate_Wrapper"));
              //setObjectName("QGeoCoordinate_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QGeoCoordinate_Wrapper::~QGeoCoordinate_Wrapper() {
            //RDebug::decCounter(QString("QGeoCoordinate_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QGeoCoordinate_Wrapper"));

            //qDebug() << "QGeoCoordinate_Wrapper::~QGeoCoordinate_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QGeoCoordinate";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QGeoCoordinate_Wrapper::initConnections() {

          //setObjectName("QGeoCoordinate_Wrapper");

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
  
    // Class: QGeoCoordinate
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QGeoCoordinate_Wrapper::QGeoCoordinate_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QGeoCoordinate_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QGeoCoordinate_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

   && RJSHelper::is_double(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: latitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: longitude (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        
  // convert js parameter to cpp: altitude (double)
  
double a3_cpp;

      a3_cpp = RJSHelper::js2cpp_double(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoCoordinate(
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

      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: latitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: longitude (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoCoordinate(
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
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoCoordinate(
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

        
              wrapped = new QGeoCoordinate(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QGeoCoordinate";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QGeoCoordinate
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::isValid
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
                QGeoCoordinate* w = getWrapped();
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
            
    // Class: QGeoCoordinate
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::type
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
                QGeoCoordinate* w = getWrapped();
                QGeoCoordinate::CoordinateType res = 
                    
                w->type(
                  
                );
              
            // return type: QGeoCoordinate::CoordinateType

            return RJSHelper::cpp2js_QGeoCoordinate_CoordinateType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: setLatitude
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::setLatitude
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: latitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoCoordinate* w = getWrapped();
                
                w->setLatitude(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLatitude";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: latitude
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::latitude
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
                QGeoCoordinate* w = getWrapped();
                double res = 
                    
                w->latitude(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for latitude";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: setLongitude
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::setLongitude
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: longitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoCoordinate* w = getWrapped();
                
                w->setLongitude(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setLongitude";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: longitude
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::longitude
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
                QGeoCoordinate* w = getWrapped();
                double res = 
                    
                w->longitude(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for longitude";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: setAltitude
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::setAltitude
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: altitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoCoordinate* w = getWrapped();
                
                w->setAltitude(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAltitude";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: altitude
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::altitude
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
                QGeoCoordinate* w = getWrapped();
                double res = 
                    
                w->altitude(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for altitude";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: distanceTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::distanceTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoCoordinate* w = getWrapped();
                qreal res = 
                    
                w->distanceTo(
                  a1_cpp
    
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for distanceTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: azimuthTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::azimuthTo
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QGeoCoordinate)
  
QGeoCoordinate a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoCoordinate* w = getWrapped();
                qreal res = 
                    
                w->azimuthTo(
                  a1_cpp
    
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for azimuthTo";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: atDistanceAndAzimuth
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::atDistanceAndAzimuth
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: azimuth (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: distanceUp (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoCoordinate* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->atDistanceAndAzimuth(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: distance (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: azimuth (qreal)
  
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
                QGeoCoordinate* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->atDistanceAndAzimuth(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for atDistanceAndAzimuth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoCoordinate
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoCoordinate_Wrapper::
                          // special function name for JS wrapper:
                          toStr
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate_CoordinateFormat(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: format (QGeoCoordinate::CoordinateFormat)
  
QGeoCoordinate::CoordinateFormat a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoCoordinate_CoordinateFormat(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoCoordinate* w = getWrapped();
                QString res = 
                    
                w->toString(
                  a1_cpp
    
                );
              
            // return type: QString

            return RJSHelper::cpp2js_QString(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

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
                QGeoCoordinate* w = getWrapped();
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
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #endif
  
    #include "moc_qgeocoordinate_wrapper.cpp"
  
