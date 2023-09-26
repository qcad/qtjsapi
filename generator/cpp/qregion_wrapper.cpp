
  // Auto generated
  
  // include header:
  //#include "qregionwrapper.h"
  //#include "header_cpp.h"
  
    #include "qregion_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QRegion*> QRegion_Wrapper::basecasters_QRegion;
    
    // static functions implementation in singleton wrapper:
    
#ifdef Q_COMPILER_MANGLES_RETURN_TYPE

#else

#endif

#ifndef QT_NO_DATASTREAM

#endif

#ifndef QT_NO_DATASTREAM

#endif

    void QRegion_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QRegion_Wrapper>("org.qcad", 1, 0, "QRegion_Wrapper");
        qmlRegisterInterface<QRegion_Wrapper>("QRegion_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QRegion* t = new RJSType_QRegion();
          global.setProperty("RJSType_QRegion", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QRegion::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QRegion_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QRegion_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QRegion_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QRegion_BaseJs", mob);
      
        // singleton wrapper:
        QJSValue mos = engine->newQMetaObject(&QRegion_WrapperSingleton::staticMetaObject);
        engine->globalObject().setProperty("QRegion_WrapperSingleton", mos);

        // create instance of singleton wrapper for static functions:
        QRegion_WrapperSingleton * s = new QRegion_WrapperSingleton(handler);
        engine->globalObject().setProperty("QRegion_WrapperSingletonInstance", engine->newQObject(s));
        QJSEngine::setObjectOwnership(s, QJSEngine::CppOwnership);
      
      QString fileName = ":generator/js/QRegion.js";
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
    QRegion_Wrapper::QRegion_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QRegion_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QRegion_Wrapper::QRegion_Wrapper(RJSApi& h, QRegion* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QRegion_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QRegion_Wrapper"));
              //setObjectName("QRegion_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QRegion_Wrapper::~QRegion_Wrapper() {
            //RDebug::decCounter(QString("QRegion_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QRegion_Wrapper"));

            //qDebug() << "QRegion_Wrapper::~QRegion_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QRegion";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QRegion_Wrapper::initConnections() {

          //setObjectName("QRegion_Wrapper");

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
  
    // Class: QRegion
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1
QRegion_Wrapper::QRegion_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QRegion_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QRegion_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_int(handler, a3
  )

   && RJSHelper::is_int(handler, a4
  )

   && RJSHelper::is_QRegion_RegionType(handler, a5
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: y (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: w (int)
  
int a3_cpp;

      a3_cpp = RJSHelper::js2cpp_int(handler, a3);
        
  // convert js parameter to cpp: h (int)
  
int a4_cpp;

      a4_cpp = RJSHelper::js2cpp_int(handler, a4);
        
  // convert js parameter to cpp: t (QRegion::RegionType)
  
QRegion::RegionType a5_cpp;

      
          if (a5.isUndefined()) {
            a5_cpp = QRegion::Rectangle;
          }
          else {
            a5_cpp = RJSHelper::js2cpp_QRegion_RegionType(handler, a5);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegion(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    
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
        RJSHelper::is_QRect(handler, a1
  )

   && RJSHelper::is_QRegion_RegionType(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        
  // convert js parameter to cpp: t (QRegion::RegionType)
  
QRegion::RegionType a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = QRegion::Rectangle;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_QRegion_RegionType(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegion(
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
        RJSHelper::is_QPolygon(handler, a1
  )

   && RJSHelper::is_Qt_FillRule(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pa (QPolygon)
  
QPolygon a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPolygon(handler, a1);
        
  // convert js parameter to cpp: fillRule (Qt::FillRule)
  
Qt::FillRule a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::OddEvenFill;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_FillRule(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegion(
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
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: region (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegion(
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
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegion(
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
        RJSHelper::is_QBitmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bitmap (QBitmap)
  
QBitmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBitmap(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRegion(
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

        
            wrapped = new QRegion(
                
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
   && a4.isUndefined()
   && a5.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QRegion";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            
#ifdef Q_COMPILER_MANGLES_RETURN_TYPE

#else

#endif

#ifndef QT_NO_DATASTREAM

#endif

#ifndef QT_NO_DATASTREAM

#endif


    // non-static functions:
    
    // Class: QRegion
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::isEmpty
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
                QRegion* w = getWrapped();
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
            
    // Class: QRegion
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::isNull
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
                QRegion* w = getWrapped();
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
            
    // Class: QRegion
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::contains
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
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

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
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
            
    // Class: QRegion
    // Function: translate
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::translate
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                
                w->translate(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                
                w->translate(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for translate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: translated
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::translated
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
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: dx (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: dy (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                QRegion res = 
                    
                w->translated(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPoint(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPoint)
  
QPoint a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPoint(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                QRegion res = 
                    
                w->translated(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for translated";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: united
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::united
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                QRegion res = 
                    
                w->united(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                QRegion res = 
                    
                w->united(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for united";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: intersected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::intersected
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                QRegion res = 
                    
                w->intersected(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                QRegion res = 
                    
                w->intersected(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersected";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: subtracted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::subtracted
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                QRegion res = 
                    
                w->subtracted(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for subtracted";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: xored
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::xored
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                QRegion res = 
                    
                w->xored(
                  a1_cpp
    
                );
              
            // return type: QRegion

            return RJSHelper::cpp2js_QRegion(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for xored";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: intersects
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::intersects
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRegion(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRegion)
  
QRegion a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRegion(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                bool res = 
                    
                w->intersects(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: r (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRegion* w = getWrapped();
                bool res = 
                    
                w->intersects(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for intersects";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::boundingRect
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
                QRegion* w = getWrapped();
                QRect res = 
                    
                w->boundingRect(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for boundingRect";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRegion
    // Function: rectCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRegion_Wrapper::rectCount
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
                QRegion* w = getWrapped();
                int res = 
                    
                w->rectCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for rectCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
#ifdef Q_COMPILER_MANGLES_RETURN_TYPE

#else

#endif

#ifndef QT_NO_DATASTREAM

#endif

#ifndef QT_NO_DATASTREAM

#endif


  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  