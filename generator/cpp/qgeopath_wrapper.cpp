
  // Auto generated
  
  // include header:
  //#include "qgeopathwrapper.h"
  //#include "header_cpp.h"
  
    #ifdef QT_POSITIONING_LIB
    #include "qgeopath_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QGeoPath*> QGeoPath_Wrapper::basecasters_QGeoPath;
    
    // static functions implementation in singleton wrapper:
    
    void QGeoPath_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QGeoPath_Wrapper>("org.qcad", 1, 0, "QGeoPath_Wrapper");
        qmlRegisterInterface<QGeoPath_Wrapper>("QGeoPath_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QGeoPath* t = new RJSType_QGeoPath();
          global.setProperty("RJSType_QGeoPath", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QGeoPath::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QGeoPath_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QGeoPath_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QGeoPath_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QGeoPath_BaseJs", mob);
      
      QString fileName = ":generator/js/QGeoPath.js";
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
    QGeoPath_Wrapper::QGeoPath_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QGeoPath_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QGeoPath_Wrapper::QGeoPath_Wrapper(RJSApi& h, QGeoPath* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QGeoPath_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QGeoPath_Wrapper"));
              //setObjectName("QGeoPath_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QGeoPath_Wrapper::~QGeoPath_Wrapper() {
            //RDebug::decCounter(QString("QGeoPath_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QGeoPath_Wrapper"));

            //qDebug() << "QGeoPath_Wrapper::~QGeoPath_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QGeoPath";
                  
                    delete wrapped;
                    wrapped = nullptr;
                  
            }
            
          }
        
    // initialization of signal forwarding
    
        void QGeoPath_Wrapper::initConnections() {

          //setObjectName("QGeoPath_Wrapper");

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
  
    // Class: QGeoPath
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QGeoPath_Wrapper::QGeoPath_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QGeoPath_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QGeoPath_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QList_QGeoCoordinate(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QList<QGeoCoordinate>)
  
QList<QGeoCoordinate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QGeoCoordinate(handler, a1);
        
  // convert js parameter to cpp: width (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoPath(
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
        RJSHelper::is_QList_QGeoCoordinate(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: path (QList<QGeoCoordinate>)
  
QList<QGeoCoordinate> a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QList_QGeoCoordinate(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoPath(
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
        RJSHelper::is_QGeoPath(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QGeoPath)
  
QGeoPath a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGeoPath(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
              wrapped = new QGeoPath(
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

        
              wrapped = new QGeoPath(
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

        
              wrapped = new QGeoPath(
                  
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
  
                      ) {
                      
                        wrapped = nullptr;
                      
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QGeoPath";
                  
                    wrapped = nullptr;
                  
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QGeoPath
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::type
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::isValid
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::isEmpty
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::contains
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: boundingGeoRectangle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::boundingGeoRectangle
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::center
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: setPath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::setPath
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
                QGeoPath* w = getWrapped();
                
                w->setPath(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPath
    // Function: path
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::path
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
                QGeoPath* w = getWrapped();
                QList<QGeoCoordinate> res = 
                    
                w->path(
                  
                );
              
            // return type: QList<QGeoCoordinate>

            return RJSHelper::cpp2js_QList_QGeoCoordinate(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for path";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPath
    // Function: clearPath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::clearPath
              (
                
              ) 
              
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
                QGeoPath* w = getWrapped();
                
                w->clearPath(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for clearPath";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPath
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::setWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: width (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGeoPath* w = getWrapped();
                
                w->setWidth(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPath
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::width
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
                QGeoPath* w = getWrapped();
                qreal res = 
                    
                w->width(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for width";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPath
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::translated
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
                QGeoPath* w = getWrapped();
                QGeoPath res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QGeoPath

            return RJSHelper::cpp2js_QGeoPath(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPath
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::translate
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
                QGeoPath* w = getWrapped();
                
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
            
    // Class: QGeoPath
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::length
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
                QGeoPath* w = getWrapped();
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
                QGeoPath* w = getWrapped();
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::size
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: addCoordinate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::addCoordinate
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
                QGeoPath* w = getWrapped();
                
                w->addCoordinate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for addCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPath
    // Function: insertCoordinate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::insertCoordinate
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
                QGeoPath* w = getWrapped();
                
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
            
    // Class: QGeoPath
    // Function: replaceCoordinate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::replaceCoordinate
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
                QGeoPath* w = getWrapped();
                
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
            
    // Class: QGeoPath
    // Function: coordinateAt
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::coordinateAt
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: containsCoordinate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::containsCoordinate
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
                QGeoPath* w = getWrapped();
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
            
    // Class: QGeoPath
    // Function: removeCoordinate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::removeCoordinate
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
                QGeoPath* w = getWrapped();
                
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
                QGeoPath* w = getWrapped();
                
                w->removeCoordinate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for removeCoordinate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGeoPath
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGeoPath_Wrapper::
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
                QGeoPath* w = getWrapped();
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
  
    #include "moc_qgeopath_wrapper.cpp"
  
