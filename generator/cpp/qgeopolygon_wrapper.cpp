
  // Auto generated
  
  // include header:
  //#include "qgeopolygonwrapper.h"
  //#include "header_cpp.h"
  
    #ifdef QT_POSITIONING_LIB
    #include "qgeopolygon_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QGeoPolygon*> QGeoPolygon_Wrapper::basecasters_QGeoPolygon;
    
    // static functions implementation in singleton wrapper:
    
    void QGeoPolygon_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QGeoPolygon_Wrapper>("org.qcad", 1, 0, "QGeoPolygon_Wrapper");
        qmlRegisterInterface<QGeoPolygon_Wrapper>("QGeoPolygon_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QGeoPolygon* t = new RJSType_QGeoPolygon();
          global.setProperty("RJSType_QGeoPolygon", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QGeoPolygon::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QGeoPolygon_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QGeoPolygon_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QGeoPolygon_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QGeoPolygon_BaseJs", mob);
      
      QString fileName = ":generator/js/QGeoPolygon.js";
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
    QGeoPolygon_Wrapper::QGeoPolygon_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QGeoPolygon_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QGeoPolygon_Wrapper::QGeoPolygon_Wrapper(RJSApi& h, QGeoPolygon* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QGeoPolygon_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QGeoPolygon_Wrapper"));
              //setObjectName("QGeoPolygon_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QGeoPolygon_Wrapper::~QGeoPolygon_Wrapper() {
            //RDebug::decCounter(QString("QGeoPolygon_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QGeoPolygon_Wrapper"));

            //qDebug() << "QGeoPolygon_Wrapper::~QGeoPolygon_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QGeoPolygon";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QGeoPolygon_Wrapper::initConnections() {

          //setObjectName("QGeoPolygon_Wrapper");

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
  
    // Class: QGeoPolygon
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QGeoPolygon_Wrapper::QGeoPolygon_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QGeoPolygon_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QGeoPolygon_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QList<QGeoCoordinate>)
  
QList<QGeoCoordinate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QGeoCoordinate(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoPolygon(
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
        RJSHelper::is_QGeoPolygon(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QGeoPolygon)
  
QGeoPolygon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoPolygon(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoPolygon(
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
        RJSHelper::is_QGeoShape(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QGeoShape)
  
QGeoShape a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoShape(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoPolygon(
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

        
              wrapped = new QGeoPolygon(
                  
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
                  

                  qWarning() << "no matching constructor variant found for QGeoPolygon";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QGeoPolygon
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::type
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
                QGeoPolygon* w = getWrapped();
                QGeoShape::ShapeType res = 
                    
                w->type(
                  
                );
              
            // return type: QGeoShape::ShapeType

            return RJSHelper::cpp2js_QGeoShape_ShapeType(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::isValid
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
                QGeoPolygon* w = getWrapped();
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
            
    // Class: QGeoPolygon
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::isEmpty
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
                QGeoPolygon* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEmpty";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::contains
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
    
  // convert js parameter to cpp: coordinate (QGeoCoordinate)
  
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
                QGeoPolygon* w = getWrapped();
                bool res = 
                    
                w->contains(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for contains";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: boundingGeoRectangle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::boundingGeoRectangle
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
                QGeoPolygon* w = getWrapped();
                QGeoRectangle res = 
                    
                w->boundingGeoRectangle(
                  
                );
              
            // return type: QGeoRectangle

            return RJSHelper::cpp2js_QGeoRectangle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundingGeoRectangle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::center
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
                QGeoPolygon* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->center(
                  
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for center";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: setPerimeter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::setPerimeter
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QList<QGeoCoordinate>)
  
QList<QGeoCoordinate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                
                w->setPerimeter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPerimeter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: perimeter
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::perimeter
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
                QGeoPolygon* w = getWrapped();
                QList<QGeoCoordinate> res = 
                    
                w->perimeter(
                  
                );
              
            // return type: QList<QGeoCoordinate>

            return RJSHelper::cpp2js_QList_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for perimeter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: addHole
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::addHole
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: holePath (QList<QGeoCoordinate>)
  
QList<QGeoCoordinate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QGeoCoordinate(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                
                w->addHole(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addHole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: holePath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::holePath
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                QList<QGeoCoordinate> res = 
                    
                w->holePath(
                  a1_cpp
    
                );
              
            // return type: QList<QGeoCoordinate>

            return RJSHelper::cpp2js_QList_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for holePath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: removeHole
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::removeHole
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                
                w->removeHole(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeHole";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: holesCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::holesCount
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
                QGeoPolygon* w = getWrapped();
                qsizetype res = 
                    
                w->holesCount(
                  
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for holesCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::translated
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: degreesLatitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: degreesLongitude (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                QGeoPolygon res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QGeoPolygon

            return RJSHelper::cpp2js_QGeoPolygon(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::translate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_double(handler, a1
  )

   && RJSHelper::is_double(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: degreesLatitude (double)
  
double a1_cpp;

      a1_cpp = RJSHelper::js2cpp_double(handler, a1);
        
  // convert js parameter to cpp: degreesLongitude (double)
  
double a2_cpp;

      a2_cpp = RJSHelper::js2cpp_double(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::length
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

   && RJSHelper::is_qsizetype(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: indexFrom (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: indexTo (qsizetype)
  
qsizetype a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qsizetype(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                double res = 
                    
                w->length(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: indexFrom (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                double res = 
                    
                w->length(
                  a1_cpp
    
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
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
                QGeoPolygon* w = getWrapped();
                double res = 
                    
                w->length(
                  
                );
              
            // return type: double

            return RJSHelper::cpp2js_double(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for length";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::size
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
                QGeoPolygon* w = getWrapped();
                qsizetype res = 
                    
                w->size(
                  
                );
              
            // return type: qsizetype

            return RJSHelper::cpp2js_qsizetype(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for size";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: addCoordinate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::addCoordinate
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: coordinate (QGeoCoordinate)
  
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
                QGeoPolygon* w = getWrapped();
                
                w->addCoordinate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: insertCoordinate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::insertCoordinate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

   && RJSHelper::is_QGeoCoordinate(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: coordinate (QGeoCoordinate)
  
QGeoCoordinate a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                
                w->insertCoordinate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for insertCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: replaceCoordinate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::replaceCoordinate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

   && RJSHelper::is_QGeoCoordinate(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        
  // convert js parameter to cpp: coordinate (QGeoCoordinate)
  
QGeoCoordinate a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QGeoCoordinate(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                
                w->replaceCoordinate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for replaceCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: coordinateAt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::coordinateAt
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                QGeoCoordinate res = 
                    
                w->coordinateAt(
                  a1_cpp
    
                );
              
            // return type: QGeoCoordinate

            return RJSHelper::cpp2js_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for coordinateAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: containsCoordinate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::containsCoordinate
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
    
  // convert js parameter to cpp: coordinate (QGeoCoordinate)
  
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
                QGeoPolygon* w = getWrapped();
                bool res = 
                    
                w->containsCoordinate(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for containsCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: removeCoordinate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::removeCoordinate
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: coordinate (QGeoCoordinate)
  
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
                QGeoPolygon* w = getWrapped();
                
                w->removeCoordinate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_qsizetype(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: index (qsizetype)
  
qsizetype a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qsizetype(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPolygon* w = getWrapped();
                
                w->removeCoordinate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPolygon
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPolygon_Wrapper::
                          // special function name for JS wrapper:
                          toStr
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
                QGeoPolygon* w = getWrapped();
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
  
    #include "moc_qgeopolygon_wrapper.cpp"
  
