
  // Auto generated
  
  // include header:
  //#include "qpalettewrapper.h"
  //#include "header_cpp.h"
  
    #include "qpalette_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QPalette*> QPalette_Wrapper::basecasters_QPalette;
    
    // static functions implementation in singleton wrapper:
    
    void QPalette_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QPalette_Wrapper>("org.qcad", 1, 0, "QPalette_Wrapper");
        qmlRegisterInterface<QPalette_Wrapper>("QPalette_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QPalette* t = new RJSType_QPalette();
          global.setProperty("RJSType_QPalette", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QPalette::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QPalette_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QPalette_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QPalette_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QPalette_BaseJs", mob);
      
      QString fileName = ":generator/js/QPalette.js";
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
    QPalette_Wrapper::QPalette_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QPalette_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QPalette_Wrapper::QPalette_Wrapper(RJSApi& h, QPalette* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QPalette_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QPalette_Wrapper"));
              //setObjectName("QPalette_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QPalette_Wrapper::~QPalette_Wrapper() {
            //RDebug::decCounter(QString("QPalette_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QPalette_Wrapper"));

            //qDebug() << "QPalette_Wrapper::~QPalette_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QPalette";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QPalette_Wrapper::initConnections() {

          //setObjectName("QPalette_Wrapper");

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
  
    // Class: QPalette
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 9
    // preceding Parameters: -1
QPalette_Wrapper::QPalette_Wrapper
                
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
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8, 
  const QJSValue& 
  a9
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QPalette_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QPalette_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QBrush(handler, a1
  )

   && RJSHelper::is_QBrush(handler, a2
  )

   && RJSHelper::is_QBrush(handler, a3
  )

   && RJSHelper::is_QBrush(handler, a4
  )

   && RJSHelper::is_QBrush(handler, a5
  )

   && RJSHelper::is_QBrush(handler, a6
  )

   && RJSHelper::is_QBrush(handler, a7
  )

   && RJSHelper::is_QBrush(handler, a8
  )

   && RJSHelper::is_QBrush(handler, a9
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: windowText (QBrush)
  
QBrush a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBrush(handler, a1);
        
  // convert js parameter to cpp: button (QBrush)
  
QBrush a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QBrush(handler, a2);
        
  // convert js parameter to cpp: light (QBrush)
  
QBrush a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QBrush(handler, a3);
        
  // convert js parameter to cpp: dark (QBrush)
  
QBrush a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QBrush(handler, a4);
        
  // convert js parameter to cpp: mid (QBrush)
  
QBrush a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QBrush(handler, a5);
        
  // convert js parameter to cpp: text (QBrush)
  
QBrush a6_cpp;

      a6_cpp = RJSHelper::js2cpp_QBrush(handler, a6);
        
  // convert js parameter to cpp: bright_text (QBrush)
  
QBrush a7_cpp;

      a7_cpp = RJSHelper::js2cpp_QBrush(handler, a7);
        
  // convert js parameter to cpp: base (QBrush)
  
QBrush a8_cpp;

      a8_cpp = RJSHelper::js2cpp_QBrush(handler, a8);
        
  // convert js parameter to cpp: window (QBrush)
  
QBrush a9_cpp;

      a9_cpp = RJSHelper::js2cpp_QBrush(handler, a9);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPalette(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    , a9_cpp
    
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
        RJSHelper::is_QColor(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

   && RJSHelper::is_QColor(handler, a3
  )

   && RJSHelper::is_QColor(handler, a4
  )

   && RJSHelper::is_QColor(handler, a5
  )

   && RJSHelper::is_QColor(handler, a6
  )

   && RJSHelper::is_QColor(handler, a7
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: windowText (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        
  // convert js parameter to cpp: window (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        
  // convert js parameter to cpp: light (QColor)
  
QColor a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QColor(handler, a3);
        
  // convert js parameter to cpp: dark (QColor)
  
QColor a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QColor(handler, a4);
        
  // convert js parameter to cpp: mid (QColor)
  
QColor a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QColor(handler, a5);
        
  // convert js parameter to cpp: text (QColor)
  
QColor a6_cpp;

      a6_cpp = RJSHelper::js2cpp_QColor(handler, a6);
        
  // convert js parameter to cpp: base (QColor)
  
QColor a7_cpp;

      a7_cpp = RJSHelper::js2cpp_QColor(handler, a7);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPalette(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    
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
        RJSHelper::is_QColor(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: button (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        
  // convert js parameter to cpp: window (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPalette(
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
        RJSHelper::is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: button (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPalette(
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
        RJSHelper::is_Qt_GlobalColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: button (Qt::GlobalColor)
  
Qt::GlobalColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_GlobalColor(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPalette(
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
        RJSHelper::is_QPalette(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: palette (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPalette(
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
        RJSHelper::is_QPalette(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QPalette(
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

        
            wrapped = new QPalette(
                
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
   && a6.isUndefined()
   && a7.isUndefined()
   && a8.isUndefined()
   && a9.isUndefined()
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QPalette";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QPalette
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: currentColorGroup
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::currentColorGroup
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
                QPalette* w = getWrapped();
                QPalette::ColorGroup res = 
                    
                w->currentColorGroup(
                  
                );
              
            // return type: QPalette::ColorGroup

            return RJSHelper::cpp2js_QPalette_ColorGroup(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for currentColorGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: setCurrentColorGroup
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::setCurrentColorGroup
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorGroup(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cg (QPalette::ColorGroup)
  
QPalette::ColorGroup a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                w->setCurrentColorGroup(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCurrentColorGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: color
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::color
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
        RJSHelper::is_QPalette_ColorGroup(handler, a1
  )

   && RJSHelper::is_QPalette_ColorRole(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cg (QPalette::ColorGroup)
  
QPalette::ColorGroup a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a1);
        
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QColor* res =
                    &
                w->color(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: const QColor&

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorRole(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QColor* res =
                    &
                w->color(
                  a1_cpp
    
                );
              
            // return type: const QColor&

            return RJSHelper::cpp2js_QColor(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for color";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: brush
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::brush
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
        RJSHelper::is_QPalette_ColorGroup(handler, a1
  )

   && RJSHelper::is_QPalette_ColorRole(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cg (QPalette::ColorGroup)
  
QPalette::ColorGroup a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a1);
        
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->brush(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorRole(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->brush(
                  a1_cpp
    
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: setColor
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::setColor
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorGroup(handler, a1
  )

   && RJSHelper::is_QPalette_ColorRole(handler, a2
  )

   && RJSHelper::is_QColor(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cg (QPalette::ColorGroup)
  
QPalette::ColorGroup a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a1);
        
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a2);
        
  // convert js parameter to cpp: color (QColor)
  
QColor a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QColor(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorRole(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a1);
        
  // convert js parameter to cpp: color (QColor)
  
QColor a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QColor(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: setBrush
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::setBrush
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorGroup(handler, a1
  )

   && RJSHelper::is_QPalette_ColorRole(handler, a2
  )

   && RJSHelper::is_QBrush(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cg (QPalette::ColorGroup)
  
QPalette::ColorGroup a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a1);
        
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a2);
        
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QBrush(handler, a3);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                w->setBrush(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorRole(handler, a1
  )

   && RJSHelper::is_QBrush(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a1);
        
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QBrush(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                w->setBrush(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setBrush";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: isBrushSet
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::isBrushSet
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
        RJSHelper::is_QPalette_ColorGroup(handler, a1
  )

   && RJSHelper::is_QPalette_ColorRole(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cg (QPalette::ColorGroup)
  
QPalette::ColorGroup a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a1);
        
  // convert js parameter to cpp: cr (QPalette::ColorRole)
  
QPalette::ColorRole a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPalette_ColorRole(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                bool res = 
                    
                w->isBrushSet(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isBrushSet";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: setColorGroup
    // Source: 
    // Static: false
    // Parameters: 10
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::setColorGroup
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4, 
  const QJSValue& 
  a5, 
  const QJSValue& 
  a6, 
  const QJSValue& 
  a7, 
  const QJSValue& 
  a8, 
  const QJSValue& 
  a9, 
  const QJSValue& 
  a10
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette_ColorGroup(handler, a1
  )

   && RJSHelper::is_QBrush(handler, a2
  )

   && RJSHelper::is_QBrush(handler, a3
  )

   && RJSHelper::is_QBrush(handler, a4
  )

   && RJSHelper::is_QBrush(handler, a5
  )

   && RJSHelper::is_QBrush(handler, a6
  )

   && RJSHelper::is_QBrush(handler, a7
  )

   && RJSHelper::is_QBrush(handler, a8
  )

   && RJSHelper::is_QBrush(handler, a9
  )

   && RJSHelper::is_QBrush(handler, a10
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cr (QPalette::ColorGroup)
  
QPalette::ColorGroup a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a1);
        
  // convert js parameter to cpp: windowText (QBrush)
  
QBrush a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QBrush(handler, a2);
        
  // convert js parameter to cpp: button (QBrush)
  
QBrush a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QBrush(handler, a3);
        
  // convert js parameter to cpp: light (QBrush)
  
QBrush a4_cpp;

      a4_cpp = RJSHelper::js2cpp_QBrush(handler, a4);
        
  // convert js parameter to cpp: dark (QBrush)
  
QBrush a5_cpp;

      a5_cpp = RJSHelper::js2cpp_QBrush(handler, a5);
        
  // convert js parameter to cpp: mid (QBrush)
  
QBrush a6_cpp;

      a6_cpp = RJSHelper::js2cpp_QBrush(handler, a6);
        
  // convert js parameter to cpp: text (QBrush)
  
QBrush a7_cpp;

      a7_cpp = RJSHelper::js2cpp_QBrush(handler, a7);
        
  // convert js parameter to cpp: bright_text (QBrush)
  
QBrush a8_cpp;

      a8_cpp = RJSHelper::js2cpp_QBrush(handler, a8);
        
  // convert js parameter to cpp: base (QBrush)
  
QBrush a9_cpp;

      a9_cpp = RJSHelper::js2cpp_QBrush(handler, a9);
        
  // convert js parameter to cpp: window (QBrush)
  
QBrush a10_cpp;

      a10_cpp = RJSHelper::js2cpp_QBrush(handler, a10);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                
                w->setColorGroup(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    , a7_cpp
    , a8_cpp
    , a9_cpp
    , a10_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColorGroup";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: isEqual
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::isEqual
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
        RJSHelper::is_QPalette_ColorGroup(handler, a1
  )

   && RJSHelper::is_QPalette_ColorGroup(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cr1 (QPalette::ColorGroup)
  
QPalette::ColorGroup a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a1);
        
  // convert js parameter to cpp: cr2 (QPalette::ColorGroup)
  
QPalette::ColorGroup a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPalette_ColorGroup(handler, a2);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                bool res = 
                    
                w->isEqual(
                  a1_cpp
    , a2_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isEqual";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: windowText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::windowText
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->windowText(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for windowText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: button
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::button
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->button(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for button";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: light
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::light
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->light(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for light";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: dark
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::dark
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->dark(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for dark";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: mid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::mid
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->mid(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for mid";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::text
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->text(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for text";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: base
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::base
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->base(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for base";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: alternateBase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::alternateBase
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->alternateBase(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alternateBase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: toolTipBase
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::toolTipBase
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->toolTipBase(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toolTipBase";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: toolTipText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::toolTipText
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->toolTipText(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for toolTipText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: window
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::window
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->window(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for window";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: midlight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::midlight
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->midlight(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for midlight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: brightText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::brightText
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->brightText(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for brightText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: buttonText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::buttonText
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->buttonText(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for buttonText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: shadow
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::shadow
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->shadow(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for shadow";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: highlight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::highlight
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->highlight(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for highlight";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: highlightedText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::highlightedText
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->highlightedText(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for highlightedText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: link
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::link
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->link(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for link";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: linkVisited
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::linkVisited
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->linkVisited(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for linkVisited";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: placeholderText
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::placeholderText
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
                QPalette* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QBrush* res =
                    &
                w->placeholderText(
                  
                );
              
            // return type: const QBrush&

            return RJSHelper::cpp2js_QBrush(
              handler, 
              // non-copyable: false
                  // return type is reference, type is copyable:
                  // convert pointer back to reference:
                  *res
                
              );
            
  }

                  qWarning() << "no matching function variant found for placeholderText";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: isCopyOf
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::isCopyOf
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: p (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                bool res = 
                    
                w->isCopyOf(
                  a1_cpp
    
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isCopyOf";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: cacheKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::cacheKey
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
                QPalette* w = getWrapped();
                qint64 res = 
                    
                w->cacheKey(
                  
                );
              
            // return type: qint64

            return RJSHelper::cpp2js_qint64(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for cacheKey";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QPalette
    // Function: resolve
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QPalette_Wrapper::resolve
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPalette(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QPalette)
  
QPalette a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPalette(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QPalette* w = getWrapped();
                QPalette res = 
                    
                w->resolve(
                  a1_cpp
    
                );
              
            // return type: QPalette

            return RJSHelper::cpp2js_QPalette(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for resolve";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  