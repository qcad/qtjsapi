
  // Auto generated
  
  // include header:
  //#include "qbrushwrapper.h"
  //#include "header_cpp.h"
  
    #include "qbrush_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QBrush_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QBrush_Wrapper>("org.qcad", 1, 0, "QBrush_Wrapper");
        qmlRegisterInterface<QBrush_Wrapper>("QBrush_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QBrush_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QBrush_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QBrush_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QBrush_BaseJs", mob);
      
      QString fileName = ":generator/js/QBrush.js";
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
    QBrush_Wrapper::QBrush_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QBrush_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QBrush_Wrapper::QBrush_Wrapper(RJSApi& h, QBrush* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QBrush_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QBrush_Wrapper"));
              //setObjectName("QBrush_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QBrush_Wrapper::~QBrush_Wrapper() {
            //RDebug::decCounter(QString("QBrush_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QBrush_Wrapper"));

            //qDebug() << "QBrush_Wrapper::~QBrush_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QBrush";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QBrush_Wrapper::initConnections() {

          //setObjectName("QBrush_Wrapper");

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
  
    // Class: QBrush
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1
QBrush_Wrapper::QBrush_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QBrush_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QBrush_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QColor(handler, a1
  )

   && RJSHelper::is_Qt_BrushStyle(handler, a2
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        
  // convert js parameter to cpp: bs (Qt::BrushStyle)
  
Qt::BrushStyle a2_cpp;

      
          if (a2.isUndefined()) {
            a2_cpp = Qt::SolidPattern;
          }
          else {
            a2_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a2);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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
        RJSHelper::is_Qt_GlobalColor(handler, a1
  )

   && RJSHelper::is_Qt_BrushStyle(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (Qt::GlobalColor)
  
Qt::GlobalColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_GlobalColor(handler, a1);
        
  // convert js parameter to cpp: bs (Qt::BrushStyle)
  
Qt::BrushStyle a2_cpp;

      a2_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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

   && RJSHelper::is_QPixmap(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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
        RJSHelper::is_Qt_GlobalColor(handler, a1
  )

   && RJSHelper::is_QPixmap(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (Qt::GlobalColor)
  
Qt::GlobalColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_GlobalColor(handler, a1);
        
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPixmap(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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
        RJSHelper::is_Qt_BrushStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: bs (Qt::BrushStyle)
  
Qt::BrushStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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
        RJSHelper::is_QPixmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPixmap(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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
        RJSHelper::is_QImage(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: image (QImage)
  
QImage a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImage(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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
        RJSHelper::is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: brush (QBrush)
  
QBrush a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBrush(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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
        RJSHelper::is_QGradient(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: gradient (QGradient)
  
QGradient a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QBrush(
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

        
            wrapped = new QBrush(
                
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
                  

                  qWarning() << "no matching constructor variant found for QBrush";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QBrush
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::swap
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QBrush(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: other (QBrush)
  
QBrush a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QBrush(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QBrush* w = getWrapped();
                
                w->swap(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for swap";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: style
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::style
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
                QBrush* w = getWrapped();
                Qt::BrushStyle res = 
                    
                w->style(
                  
                );
              
            // return type: Qt::BrushStyle

            return RJSHelper::cpp2js_Qt_BrushStyle(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for style";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: setStyle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::setStyle
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_BrushStyle(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (Qt::BrushStyle)
  
Qt::BrushStyle a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_BrushStyle(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QBrush* w = getWrapped();
                
                w->setStyle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStyle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: transform
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::transform
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
                QBrush* w = getWrapped();
                QTransform res = 
                    
                w->transform(
                  
                );
              
            // return type: QTransform

            return RJSHelper::cpp2js_QTransform(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for transform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: setTransform
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::setTransform
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QTransform(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QTransform)
  
QTransform a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QTransform(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QBrush* w = getWrapped();
                
                w->setTransform(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTransform";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: texture
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::texture
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
                QBrush* w = getWrapped();
                QPixmap res = 
                    
                w->texture(
                  
                );
              
            // return type: QPixmap

            return RJSHelper::cpp2js_QPixmap(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for texture";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: setTexture
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::setTexture
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QPixmap(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pixmap (QPixmap)
  
QPixmap a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPixmap(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QBrush* w = getWrapped();
                
                w->setTexture(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTexture";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: textureImage
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::textureImage
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
                QBrush* w = getWrapped();
                QImage res = 
                    
                w->textureImage(
                  
                );
              
            // return type: QImage

            return RJSHelper::cpp2js_QImage(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for textureImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: setTextureImage
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::setTextureImage
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QImage(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: image (QImage)
  
QImage a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QImage(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QBrush* w = getWrapped();
                
                w->setTextureImage(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setTextureImage";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: color
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::color
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
                QBrush* w = getWrapped();
                
                      // return type is reference:
                      // use pointer instead 3:
                      const QColor* res =
                    &
                w->color(
                  
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
            
    // Class: QBrush
    // Function: setColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::setColor
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (QColor)
  
QColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QBrush* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_Qt_GlobalColor(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: color (Qt::GlobalColor)
  
Qt::GlobalColor a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_GlobalColor(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QBrush* w = getWrapped();
                
                w->setColor(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColor";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: gradient
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::gradient
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
                QBrush* w = getWrapped();
                const QGradient* res = 
                    
                w->gradient(
                  
                );
              
            // return type: const QGradient*

            return RJSHelper::cpp2js_QGradient(
              handler, 
              // non-copyable: false
                  // return type is pointer, type is copyable:
                  // call pointer implementation of RJSHelper::cpp2js_QGradient:
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for gradient";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: isOpaque
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::isOpaque
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
                QBrush* w = getWrapped();
                bool res = 
                    
                w->isOpaque(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isOpaque";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QBrush
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QBrush_Wrapper::isDetached
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
                QBrush* w = getWrapped();
                bool res = 
                    
                w->isDetached(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for isDetached";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qbrush_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QGradient_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QGradient_Wrapper>("org.qcad", 1, 0, "QGradient_Wrapper");
        qmlRegisterInterface<QGradient_Wrapper>("QGradient_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QGradient_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QGradient_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QGradient_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QGradient_BaseJs", mob);
      
      QString fileName = ":generator/js/QGradient.js";
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
    QGradient_Wrapper::QGradient_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QGradient_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QGradient_Wrapper::QGradient_Wrapper(RJSApi& h, QGradient* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QGradient_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QGradient_Wrapper"));
              //setObjectName("QGradient_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QGradient_Wrapper::~QGradient_Wrapper() {
            //RDebug::decCounter(QString("QGradient_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QGradient_Wrapper"));

            //qDebug() << "QGradient_Wrapper::~QGradient_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QGradient";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QGradient_Wrapper::initConnections() {

          //setObjectName("QGradient_Wrapper");

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
  
    // Class: QGradient
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QGradient_Wrapper::QGradient_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QGradient_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QGradient_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_Preset(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QGradient::Preset)
  
QGradient::Preset a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_Preset(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QGradient(
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

        
            wrapped = new QGradient(
                
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
                  

                  qWarning() << "no matching constructor variant found for QGradient";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QGradient
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGradient_Wrapper::type
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
                QGradient* w = getWrapped();
                QGradient::Type res = 
                    
                w->type(
                  
                );
              
            // return type: QGradient::Type

            return RJSHelper::cpp2js_QGradient_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGradient
    // Function: setSpread
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGradient_Wrapper::setSpread
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_Spread(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spread (QGradient::Spread)
  
QGradient::Spread a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_Spread(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGradient* w = getWrapped();
                
                w->setSpread(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGradient
    // Function: spread
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGradient_Wrapper::spread
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
                QGradient* w = getWrapped();
                QGradient::Spread res = 
                    
                w->spread(
                  
                );
              
            // return type: QGradient::Spread

            return RJSHelper::cpp2js_QGradient_Spread(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGradient
    // Function: setColorAt
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QGradient_Wrapper::setColorAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
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
                QGradient* w = getWrapped();
                
                w->setColorAt(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColorAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGradient
    // Function: coordinateMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGradient_Wrapper::coordinateMode
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
                QGradient* w = getWrapped();
                QGradient::CoordinateMode res = 
                    
                w->coordinateMode(
                  
                );
              
            // return type: QGradient::CoordinateMode

            return RJSHelper::cpp2js_QGradient_CoordinateMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for coordinateMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGradient
    // Function: setCoordinateMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGradient_Wrapper::setCoordinateMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_CoordinateMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QGradient::CoordinateMode)
  
QGradient::CoordinateMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_CoordinateMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGradient* w = getWrapped();
                
                w->setCoordinateMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCoordinateMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGradient
    // Function: interpolationMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QGradient_Wrapper::interpolationMode
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
                QGradient* w = getWrapped();
                QGradient::InterpolationMode res = 
                    
                w->interpolationMode(
                  
                );
              
            // return type: QGradient::InterpolationMode

            return RJSHelper::cpp2js_QGradient_InterpolationMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for interpolationMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QGradient
    // Function: setInterpolationMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QGradient_Wrapper::setInterpolationMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_InterpolationMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QGradient::InterpolationMode)
  
QGradient::InterpolationMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_InterpolationMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QGradient* w = getWrapped();
                
                w->setInterpolationMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInterpolationMode";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qbrush_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QLinearGradient_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QLinearGradient_Wrapper>("org.qcad", 1, 0, "QLinearGradient_Wrapper");
        qmlRegisterInterface<QLinearGradient_Wrapper>("QLinearGradient_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QLinearGradient_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QLinearGradient_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QLinearGradient_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QLinearGradient_BaseJs", mob);
      
      QString fileName = ":generator/js/QLinearGradient.js";
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
    QLinearGradient_Wrapper::QLinearGradient_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QLinearGradient_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QLinearGradient_Wrapper::QLinearGradient_Wrapper(RJSApi& h, QLinearGradient* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QLinearGradient_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QLinearGradient_Wrapper"));
              //setObjectName("QLinearGradient_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QLinearGradient_Wrapper::~QLinearGradient_Wrapper() {
            //RDebug::decCounter(QString("QLinearGradient_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QLinearGradient_Wrapper"));

            //qDebug() << "QLinearGradient_Wrapper::~QLinearGradient_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QLinearGradient";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QLinearGradient_Wrapper::initConnections() {

          //setObjectName("QLinearGradient_Wrapper");

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
  
    // Class: QLinearGradient
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QLinearGradient_Wrapper::QLinearGradient_Wrapper
                
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
  a4
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QLinearGradient_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QLinearGradient_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: xStart (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: yStart (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: xFinalStop (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: yFinalStop (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QLinearGradient(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_QPointF(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: start (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: finalStop (QPointF)
  
QPointF a2_cpp;

      a2_cpp = RJSHelper::js2cpp_QPointF(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QLinearGradient(
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

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QLinearGradient(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QLinearGradient";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QLinearGradient
    // Function: type
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::type
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
                QLinearGradient* w = getWrapped();
                QGradient::Type res = 
                    
                w->type(
                  
                );
              
            // return type: QGradient::Type

            return RJSHelper::cpp2js_QGradient_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: setSpread
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::setSpread
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_Spread(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spread (QGradient::Spread)
  
QGradient::Spread a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_Spread(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLinearGradient* w = getWrapped();
                
                w->setSpread(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: spread
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::spread
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
                QLinearGradient* w = getWrapped();
                QGradient::Spread res = 
                    
                w->spread(
                  
                );
              
            // return type: QGradient::Spread

            return RJSHelper::cpp2js_QGradient_Spread(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: setColorAt
    // Source: QGradient
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::setColorAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
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
                QLinearGradient* w = getWrapped();
                
                w->setColorAt(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColorAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: coordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::coordinateMode
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
                QLinearGradient* w = getWrapped();
                QGradient::CoordinateMode res = 
                    
                w->coordinateMode(
                  
                );
              
            // return type: QGradient::CoordinateMode

            return RJSHelper::cpp2js_QGradient_CoordinateMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for coordinateMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: setCoordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::setCoordinateMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_CoordinateMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QGradient::CoordinateMode)
  
QGradient::CoordinateMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_CoordinateMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLinearGradient* w = getWrapped();
                
                w->setCoordinateMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCoordinateMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: interpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::interpolationMode
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
                QLinearGradient* w = getWrapped();
                QGradient::InterpolationMode res = 
                    
                w->interpolationMode(
                  
                );
              
            // return type: QGradient::InterpolationMode

            return RJSHelper::cpp2js_QGradient_InterpolationMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for interpolationMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: setInterpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::setInterpolationMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_InterpolationMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QGradient::InterpolationMode)
  
QGradient::InterpolationMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_InterpolationMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLinearGradient* w = getWrapped();
                
                w->setInterpolationMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInterpolationMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: start
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::start
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
                QLinearGradient* w = getWrapped();
                QPointF res = 
                    
                w->start(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for start";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: setStart
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::setStart
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
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
                QLinearGradient* w = getWrapped();
                
                w->setStart(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: start (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLinearGradient* w = getWrapped();
                
                w->setStart(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setStart";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: finalStop
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::finalStop
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
                QLinearGradient* w = getWrapped();
                QPointF res = 
                    
                w->finalStop(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for finalStop";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLinearGradient
    // Function: setFinalStop
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QLinearGradient_Wrapper::setFinalStop
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
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
                QLinearGradient* w = getWrapped();
                
                w->setFinalStop(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: stop (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLinearGradient* w = getWrapped();
                
                w->setFinalStop(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFinalStop";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qbrush_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QRadialGradient_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QRadialGradient_Wrapper>("org.qcad", 1, 0, "QRadialGradient_Wrapper");
        qmlRegisterInterface<QRadialGradient_Wrapper>("QRadialGradient_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QRadialGradient_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QRadialGradient_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QRadialGradient_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QRadialGradient_BaseJs", mob);
      
      QString fileName = ":generator/js/QRadialGradient.js";
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
    QRadialGradient_Wrapper::QRadialGradient_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QRadialGradient_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QRadialGradient_Wrapper::QRadialGradient_Wrapper(RJSApi& h, QRadialGradient* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QRadialGradient_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QRadialGradient_Wrapper"));
              //setObjectName("QRadialGradient_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QRadialGradient_Wrapper::~QRadialGradient_Wrapper() {
            //RDebug::decCounter(QString("QRadialGradient_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QRadialGradient_Wrapper"));

            //qDebug() << "QRadialGradient_Wrapper::~QRadialGradient_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QRadialGradient";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QRadialGradient_Wrapper::initConnections() {

          //setObjectName("QRadialGradient_Wrapper");

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
  
    // Class: QRadialGradient
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 6
    // preceding Parameters: -1
QRadialGradient_Wrapper::QRadialGradient_Wrapper
                
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
  a6
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QRadialGradient_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QRadialGradient_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

   && RJSHelper::is_qreal(handler, a5
  )

   && RJSHelper::is_qreal(handler, a6
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: cy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: centerRadius (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: fx (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        
  // convert js parameter to cpp: fy (qreal)
  
qreal a5_cpp;

      a5_cpp = RJSHelper::js2cpp_qreal(handler, a5);
        
  // convert js parameter to cpp: focalRadius (qreal)
  
qreal a6_cpp;

      a6_cpp = RJSHelper::js2cpp_qreal(handler, a6);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRadialGradient(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    , a5_cpp
    , a6_cpp
    
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
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

   && RJSHelper::is_qreal(handler, a5
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: cy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: radius (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        
  // convert js parameter to cpp: fx (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        
  // convert js parameter to cpp: fy (qreal)
  
qreal a5_cpp;

      a5_cpp = RJSHelper::js2cpp_qreal(handler, a5);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRadialGradient(
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_QPointF(handler, a3
  )

   && RJSHelper::is_qreal(handler, a4
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: centerRadius (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: focalPoint (QPointF)
  
QPointF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QPointF(handler, a3);
        
  // convert js parameter to cpp: focalRadius (qreal)
  
qreal a4_cpp;

      a4_cpp = RJSHelper::js2cpp_qreal(handler, a4);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRadialGradient(
                a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_QPointF(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: radius (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: focalPoint (QPointF)
  
QPointF a3_cpp;

      a3_cpp = RJSHelper::js2cpp_QPointF(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRadialGradient(
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
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

   && RJSHelper::is_qreal(handler, a3
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: cx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: cy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: radius (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRadialGradient(
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: radius (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRadialGradient(
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

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QRadialGradient(
                
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
  
                      ) {
                      wrapped = nullptr;
                      wrappedCreated = false;
                      return;
                    }
                  

                  qWarning() << "no matching constructor variant found for QRadialGradient";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QRadialGradient
    // Function: type
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::type
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
                QRadialGradient* w = getWrapped();
                QGradient::Type res = 
                    
                w->type(
                  
                );
              
            // return type: QGradient::Type

            return RJSHelper::cpp2js_QGradient_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setSpread
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setSpread
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_Spread(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spread (QGradient::Spread)
  
QGradient::Spread a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_Spread(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRadialGradient* w = getWrapped();
                
                w->setSpread(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: spread
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::spread
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
                QRadialGradient* w = getWrapped();
                QGradient::Spread res = 
                    
                w->spread(
                  
                );
              
            // return type: QGradient::Spread

            return RJSHelper::cpp2js_QGradient_Spread(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setColorAt
    // Source: QGradient
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setColorAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
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
                QRadialGradient* w = getWrapped();
                
                w->setColorAt(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColorAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: coordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::coordinateMode
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
                QRadialGradient* w = getWrapped();
                QGradient::CoordinateMode res = 
                    
                w->coordinateMode(
                  
                );
              
            // return type: QGradient::CoordinateMode

            return RJSHelper::cpp2js_QGradient_CoordinateMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for coordinateMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setCoordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setCoordinateMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_CoordinateMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QGradient::CoordinateMode)
  
QGradient::CoordinateMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_CoordinateMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRadialGradient* w = getWrapped();
                
                w->setCoordinateMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCoordinateMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: interpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::interpolationMode
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
                QRadialGradient* w = getWrapped();
                QGradient::InterpolationMode res = 
                    
                w->interpolationMode(
                  
                );
              
            // return type: QGradient::InterpolationMode

            return RJSHelper::cpp2js_QGradient_InterpolationMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for interpolationMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setInterpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setInterpolationMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_InterpolationMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QGradient::InterpolationMode)
  
QGradient::InterpolationMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_InterpolationMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRadialGradient* w = getWrapped();
                
                w->setInterpolationMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInterpolationMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::center
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
                QRadialGradient* w = getWrapped();
                QPointF res = 
                    
                w->center(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for center";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setCenter
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setCenter
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
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
                QRadialGradient* w = getWrapped();
                
                w->setCenter(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRadialGradient* w = getWrapped();
                
                w->setCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: focalPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::focalPoint
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
                QRadialGradient* w = getWrapped();
                QPointF res = 
                    
                w->focalPoint(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focalPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setFocalPoint
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setFocalPoint
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
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
                QRadialGradient* w = getWrapped();
                
                w->setFocalPoint(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: focalPoint (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QRadialGradient* w = getWrapped();
                
                w->setFocalPoint(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFocalPoint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: radius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::radius
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
                QRadialGradient* w = getWrapped();
                qreal res = 
                    
                w->radius(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for radius";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setRadius
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
    
  // convert js parameter to cpp: radius (qreal)
  
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
                QRadialGradient* w = getWrapped();
                
                w->setRadius(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setRadius";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: centerRadius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::centerRadius
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
                QRadialGradient* w = getWrapped();
                qreal res = 
                    
                w->centerRadius(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for centerRadius";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setCenterRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setCenterRadius
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
    
  // convert js parameter to cpp: radius (qreal)
  
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
                QRadialGradient* w = getWrapped();
                
                w->setCenterRadius(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCenterRadius";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: focalRadius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::focalRadius
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
                QRadialGradient* w = getWrapped();
                qreal res = 
                    
                w->focalRadius(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for focalRadius";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QRadialGradient
    // Function: setFocalRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QRadialGradient_Wrapper::setFocalRadius
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
    
  // convert js parameter to cpp: radius (qreal)
  
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
                QRadialGradient* w = getWrapped();
                
                w->setFocalRadius(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setFocalRadius";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qbrush_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QConicalGradient_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QConicalGradient_Wrapper>("org.qcad", 1, 0, "QConicalGradient_Wrapper");
        qmlRegisterInterface<QConicalGradient_Wrapper>("QConicalGradient_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QConicalGradient_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QConicalGradient_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QConicalGradient_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QConicalGradient_BaseJs", mob);
      
      QString fileName = ":generator/js/QConicalGradient.js";
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
    QConicalGradient_Wrapper::QConicalGradient_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QConicalGradient_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QConicalGradient_Wrapper::QConicalGradient_Wrapper(RJSApi& h, QConicalGradient* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QConicalGradient_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QConicalGradient_Wrapper"));
              //setObjectName("QConicalGradient_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QConicalGradient_Wrapper::~QConicalGradient_Wrapper() {
            //RDebug::decCounter(QString("QConicalGradient_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QConicalGradient_Wrapper"));

            //qDebug() << "QConicalGradient_Wrapper::~QConicalGradient_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QConicalGradient";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QConicalGradient_Wrapper::initConnections() {

          //setObjectName("QConicalGradient_Wrapper");

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
  
    // Class: QConicalGradient
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1
QConicalGradient_Wrapper::QConicalGradient_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QConicalGradient_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QConicalGradient_Wrapper"));
                
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
    
  // convert js parameter to cpp: cx (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: cy (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        
  // convert js parameter to cpp: startAngle (qreal)
  
qreal a3_cpp;

      a3_cpp = RJSHelper::js2cpp_qreal(handler, a3);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QConicalGradient(
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
        RJSHelper::is_QPointF(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        
  // convert js parameter to cpp: startAngle (qreal)
  
qreal a2_cpp;

      a2_cpp = RJSHelper::js2cpp_qreal(handler, a2);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QConicalGradient(
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

      {
    

    // call function:
    
        // construct wrapper:

        
            wrapped = new QConicalGradient(
                
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
                  

                  qWarning() << "no matching constructor variant found for QConicalGradient";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QConicalGradient
    // Function: type
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::type
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
                QConicalGradient* w = getWrapped();
                QGradient::Type res = 
                    
                w->type(
                  
                );
              
            // return type: QGradient::Type

            return RJSHelper::cpp2js_QGradient_Type(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for type";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: setSpread
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::setSpread
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_Spread(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: spread (QGradient::Spread)
  
QGradient::Spread a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_Spread(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QConicalGradient* w = getWrapped();
                
                w->setSpread(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setSpread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: spread
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::spread
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
                QConicalGradient* w = getWrapped();
                QGradient::Spread res = 
                    
                w->spread(
                  
                );
              
            // return type: QGradient::Spread

            return RJSHelper::cpp2js_QGradient_Spread(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spread";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: setColorAt
    // Source: QGradient
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::setColorAt
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_QColor(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: pos (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
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
                QConicalGradient* w = getWrapped();
                
                w->setColorAt(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setColorAt";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: coordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::coordinateMode
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
                QConicalGradient* w = getWrapped();
                QGradient::CoordinateMode res = 
                    
                w->coordinateMode(
                  
                );
              
            // return type: QGradient::CoordinateMode

            return RJSHelper::cpp2js_QGradient_CoordinateMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for coordinateMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: setCoordinateMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::setCoordinateMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_CoordinateMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QGradient::CoordinateMode)
  
QGradient::CoordinateMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_CoordinateMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QConicalGradient* w = getWrapped();
                
                w->setCoordinateMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCoordinateMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: interpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::interpolationMode
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
                QConicalGradient* w = getWrapped();
                QGradient::InterpolationMode res = 
                    
                w->interpolationMode(
                  
                );
              
            // return type: QGradient::InterpolationMode

            return RJSHelper::cpp2js_QGradient_InterpolationMode(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for interpolationMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: setInterpolationMode
    // Source: QGradient
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::setInterpolationMode
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QGradient_InterpolationMode(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: mode (QGradient::InterpolationMode)
  
QGradient::InterpolationMode a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QGradient_InterpolationMode(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QConicalGradient* w = getWrapped();
                
                w->setInterpolationMode(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setInterpolationMode";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::center
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
                QConicalGradient* w = getWrapped();
                QPointF res = 
                    
                w->center(
                  
                );
              
            // return type: QPointF

            return RJSHelper::cpp2js_QPointF(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for center";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: setCenter
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::setCenter
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_qreal(handler, a1
  )

   && RJSHelper::is_qreal(handler, a2
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: x (qreal)
  
qreal a1_cpp;

      a1_cpp = RJSHelper::js2cpp_qreal(handler, a1);
        
  // convert js parameter to cpp: y (qreal)
  
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
                QConicalGradient* w = getWrapped();
                
                w->setCenter(
                  a1_cpp
    , a2_cpp
    
                );
              
            return QJSValue();
          
  }

      // check parameter types:
      if (
        RJSHelper::is_QPointF(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: center (QPointF)
  
QPointF a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QPointF(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QConicalGradient* w = getWrapped();
                
                w->setCenter(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setCenter";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: angle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::angle
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
                QConicalGradient* w = getWrapped();
                qreal res = 
                    
                w->angle(
                  
                );
              
            // return type: qreal

            return RJSHelper::cpp2js_qreal(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for angle";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QConicalGradient
    // Function: setAngle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QConicalGradient_Wrapper::setAngle
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
    
  // convert js parameter to cpp: angle (qreal)
  
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
                QConicalGradient* w = getWrapped();
                
                w->setAngle(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAngle";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  