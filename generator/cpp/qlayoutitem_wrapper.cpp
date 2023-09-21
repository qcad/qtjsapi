
  // Auto generated
  
  // include header:
  //#include "qlayoutitemwrapper.h"
  //#include "header_cpp.h"
  
    #include "qlayoutitem_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QLayoutItem_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QLayoutItem_Wrapper>("org.qcad", 1, 0, "QLayoutItem_Wrapper");
        qmlRegisterInterface<QLayoutItem_Wrapper>("QLayoutItem_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QLayoutItem_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QLayoutItem_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QLayoutItem_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QLayoutItem_BaseJs", mob);
      
      QString fileName = ":generated/js/QLayoutItem.js";
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
    QLayoutItem_Wrapper::QLayoutItem_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QLayoutItem_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QLayoutItem_Wrapper::QLayoutItem_Wrapper(RJSApi& h, QLayoutItem* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QLayoutItem_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QLayoutItem_Wrapper"));
              //setObjectName("QLayoutItem_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QLayoutItem_Wrapper::~QLayoutItem_Wrapper() {
            //RDebug::decCounter(QString("QLayoutItem_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QLayoutItem_Wrapper"));

            //qDebug() << "QLayoutItem_Wrapper::~QLayoutItem_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QLayoutItem";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QLayoutItem_Wrapper::initConnections() {

          //setObjectName("QLayoutItem_Wrapper");

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
    
    // Class: QLayoutItem
    // Function: minimumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::minimumSize
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                QSize res = 
                    
                w->minimumSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: maximumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::maximumSize
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                QSize res = 
                    
                w->maximumSize(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: expandingDirections
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::expandingDirections
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                Qt::Orientations res = 
                    
                w->expandingDirections(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::Orientations

            return RJSHelper::cpp2js_Qt_Orientations(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for expandingDirections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: setGeometry
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::setGeometry
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
QRect a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QRect(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                
                w->setGeometry(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: geometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::geometry
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                QRect res = 
                    
                w->geometry(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for geometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::isEmpty
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                bool res = 
                    
                w->isEmpty(
                  
                );
              
                //setRecFlag(false);
              
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
            
    // Class: QLayoutItem
    // Function: hasHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::hasHeightForWidth
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                bool res = 
                    
                w->hasHeightForWidth(
                  
                );
              
                //setRecFlag(false);
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: heightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::heightForWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                int res = 
                    
                w->heightForWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for heightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: minimumHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::minimumHeightForWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                int res = 
                    
                w->minimumHeightForWidth(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: invalidate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::invalidate
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                
                w->invalidate(
                  
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for invalidate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: widget
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::widget
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                QWidget* res = 
                    
                w->widget(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for widget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: layout
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::layout
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                QLayout* res = 
                    
                w->layout(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QLayout*

            return RJSHelper::cpp2js_QLayout(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: spacerItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::spacerItem
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                QSpacerItem* res = 
                    
                w->spacerItem(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSpacerItem*

            return RJSHelper::cpp2js_QSpacerItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spacerItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: alignment
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::alignment
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                Qt::Alignment res = 
                    
                w->alignment(
                  
                );
              
                //setRecFlag(false);
              
            // return type: Qt::Alignment

            return RJSHelper::cpp2js_Qt_Alignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: setAlignment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::setAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_Alignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (Qt::Alignment)
  
Qt::Alignment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_Alignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                
                w->setAlignment(
                  a1_cpp
    
                );
              
                //setRecFlag(false);
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QLayoutItem
    // Function: controlTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QLayoutItem_Wrapper::controlTypes
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

          
            //setRecFlag(true);
          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QLayoutItem* w = getWrapped();
                QSizePolicy::ControlTypes res = 
                    
                w->controlTypes(
                  
                );
              
                //setRecFlag(false);
              
            // return type: QSizePolicy::ControlTypes

            return RJSHelper::cpp2js_QSizePolicy_ControlTypes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for controlTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qlayoutitem_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QSpacerItem_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSpacerItem_Wrapper>("org.qcad", 1, 0, "QSpacerItem_Wrapper");
        qmlRegisterInterface<QSpacerItem_Wrapper>("QSpacerItem_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSpacerItem_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSpacerItem_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSpacerItem_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSpacerItem_BaseJs", mob);
      
      QString fileName = ":generated/js/QSpacerItem.js";
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
    QSpacerItem_Wrapper::QSpacerItem_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QSpacerItem_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QSpacerItem_Wrapper::QSpacerItem_Wrapper(RJSApi& h, QSpacerItem* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QSpacerItem_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QSpacerItem_Wrapper"));
              //setObjectName("QSpacerItem_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QSpacerItem_Wrapper::~QSpacerItem_Wrapper() {
            //RDebug::decCounter(QString("QSpacerItem_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QSpacerItem_Wrapper"));

            //qDebug() << "QSpacerItem_Wrapper::~QSpacerItem_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QSpacerItem";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QSpacerItem_Wrapper::initConnections() {

          //setObjectName("QSpacerItem_Wrapper");

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
  
    // Class: QSpacerItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1
QSpacerItem_Wrapper::QSpacerItem_Wrapper
                
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
                
                  //RDebug::incCounter(QString("QSpacerItem_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QSpacerItem_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QSizePolicy_Policy(handler, a3
    , true
  
  )

   && RJSHelper::is_QSizePolicy_Policy(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: hData (QSizePolicy::Policy)
  
QSizePolicy::Policy a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QSizePolicy::Minimum;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a3);
          }
        
  // convert js parameter to cpp: vData (QSizePolicy::Policy)
  
QSizePolicy::Policy a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QSizePolicy::Minimum;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a4);
          }
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QSpacerItem(
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
                  

                  qWarning() << "no matching constructor variant found for QSpacerItem";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QSpacerItem
    // Function: hasHeightForWidth
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::hasHeightForWidth
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
                QSpacerItem* w = getWrapped();
                bool res = 
                    
                w->hasHeightForWidth(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: heightForWidth
    // Source: QLayoutItem
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::heightForWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSpacerItem* w = getWrapped();
                int res = 
                    
                w->heightForWidth(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for heightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: minimumHeightForWidth
    // Source: QLayoutItem
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::minimumHeightForWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSpacerItem* w = getWrapped();
                int res = 
                    
                w->minimumHeightForWidth(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: invalidate
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::invalidate
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
                QSpacerItem* w = getWrapped();
                
                w->invalidate(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for invalidate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: widget
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::widget
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
                QSpacerItem* w = getWrapped();
                QWidget* res = 
                    
                w->widget(
                  
                );
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for widget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: layout
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::layout
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
                QSpacerItem* w = getWrapped();
                QLayout* res = 
                    
                w->layout(
                  
                );
              
            // return type: QLayout*

            return RJSHelper::cpp2js_QLayout(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: alignment
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::alignment
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
                QSpacerItem* w = getWrapped();
                Qt::Alignment res = 
                    
                w->alignment(
                  
                );
              
            // return type: Qt::Alignment

            return RJSHelper::cpp2js_Qt_Alignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: setAlignment
    // Source: QLayoutItem
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::setAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_Alignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (Qt::Alignment)
  
Qt::Alignment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_Alignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSpacerItem* w = getWrapped();
                
                w->setAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: controlTypes
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::controlTypes
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
                QSpacerItem* w = getWrapped();
                QSizePolicy::ControlTypes res = 
                    
                w->controlTypes(
                  
                );
              
            // return type: QSizePolicy::ControlTypes

            return RJSHelper::cpp2js_QSizePolicy_ControlTypes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for controlTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: changeSize
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::changeSize
              (
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2, 
  const QJSValue& 
  a3, 
  const QJSValue& 
  a4
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

   && RJSHelper::is_int(handler, a2
  )

   && RJSHelper::is_QSizePolicy_Policy(handler, a3
    , true
  
  )

   && RJSHelper::is_QSizePolicy_Policy(handler, a4
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        
  // convert js parameter to cpp: h (int)
  
int a2_cpp;

      a2_cpp = RJSHelper::js2cpp_int(handler, a2);
        
  // convert js parameter to cpp: hData (QSizePolicy::Policy)
  
QSizePolicy::Policy a3_cpp;

      
          if (a3.isUndefined()) {
            a3_cpp = QSizePolicy::Minimum;
          }
          else {
            a3_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a3);
          }
        
  // convert js parameter to cpp: vData (QSizePolicy::Policy)
  
QSizePolicy::Policy a4_cpp;

      
          if (a4.isUndefined()) {
            a4_cpp = QSizePolicy::Minimum;
          }
          else {
            a4_cpp = RJSHelper::js2cpp_QSizePolicy_Policy(handler, a4);
          }
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QSpacerItem* w = getWrapped();
                
                w->changeSize(
                  a1_cpp
    , a2_cpp
    , a3_cpp
    , a4_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for changeSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: sizeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::sizeHint
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
                QSpacerItem* w = getWrapped();
                QSize res = 
                    
                w->sizeHint(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: minimumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::minimumSize
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
                QSpacerItem* w = getWrapped();
                QSize res = 
                    
                w->minimumSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: maximumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::maximumSize
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
                QSpacerItem* w = getWrapped();
                QSize res = 
                    
                w->maximumSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: expandingDirections
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::expandingDirections
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
                QSpacerItem* w = getWrapped();
                Qt::Orientations res = 
                    
                w->expandingDirections(
                  
                );
              
            // return type: Qt::Orientations

            return RJSHelper::cpp2js_Qt_Orientations(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for expandingDirections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::isEmpty
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
                QSpacerItem* w = getWrapped();
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
            
    // Class: QSpacerItem
    // Function: setGeometry
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::setGeometry
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
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
                QSpacerItem* w = getWrapped();
                
                w->setGeometry(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: geometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::geometry
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
                QSpacerItem* w = getWrapped();
                QRect res = 
                    
                w->geometry(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for geometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: spacerItem
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::spacerItem
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
                QSpacerItem* w = getWrapped();
                QSpacerItem* res = 
                    
                w->spacerItem(
                  
                );
              
            // return type: QSpacerItem*

            return RJSHelper::cpp2js_QSpacerItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spacerItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QSpacerItem
    // Function: sizePolicy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QSpacerItem_Wrapper::sizePolicy
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
                QSpacerItem* w = getWrapped();
                QSizePolicy res = 
                    
                w->sizePolicy(
                  
                );
              
            // return type: QSizePolicy

            return RJSHelper::cpp2js_QSizePolicy(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizePolicy";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "qlayoutitem_wrapper.h"

  
    // static functions implementation in singleton wrapper:
    
    void QWidgetItem_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QWidgetItem_Wrapper>("org.qcad", 1, 0, "QWidgetItem_Wrapper");
        qmlRegisterInterface<QWidgetItem_Wrapper>("QWidgetItem_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QWidgetItem_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QWidgetItem_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QWidgetItem_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QWidgetItem_BaseJs", mob);
      
      QString fileName = ":generated/js/QWidgetItem.js";
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
    QWidgetItem_Wrapper::QWidgetItem_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QWidgetItem_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QWidgetItem_Wrapper::QWidgetItem_Wrapper(RJSApi& h, QWidgetItem* o, bool wrappedCreated) : RJSWrapperObj(h), wrapped(o), wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QWidgetItem_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QWidgetItem_Wrapper"));
              //setObjectName("QWidgetItem_Wrapper");
              //setHandler(h);

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QWidgetItem_Wrapper::~QWidgetItem_Wrapper() {
            //RDebug::decCounter(QString("QWidgetItem_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QWidgetItem_Wrapper"));

            //qDebug() << "QWidgetItem_Wrapper::~QWidgetItem_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // delete wrapped object (copyable, JS ownership)
                  //qDebug() << "deleting instance of QWidgetItem";
                  delete wrapped;
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QWidgetItem_Wrapper::initConnections() {

          //setObjectName("QWidgetItem_Wrapper");

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
  
    // Class: QWidgetItem
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1
QWidgetItem_Wrapper::QWidgetItem_Wrapper
                
              (
                
                  // RJSApi:
                  QObject* h
                  ,
  const QJSValue& 
  a1
              ) 
              
                : RJSWrapperObj(*(RJSApi*)h)
              
              {
                
                  //RDebug::incCounter(QString("QWidgetItem_Wrapper_") + handler.getEngine()->objectName());
                  //RDebug::incCounter(QString("QWidgetItem_Wrapper"));
                
      // check parameter types:
      if (
        RJSHelper::is_QWidget_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: w (QWidget)
  

          // pointer:
          QWidget*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QWidget_ptr(handler, a1);
        

    // call function:
    
        // construct wrapper:

        
            wrapped = new QWidgetItem(
                a1_cpp
    
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
                  

                  qWarning() << "no matching constructor variant found for QWidgetItem";
                  wrapped = nullptr;
                  wrappedCreated = false;
                  handler.trace();
                
              }
            

    // non-static functions:
    
    // Class: QWidgetItem
    // Function: invalidate
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::invalidate
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
                QWidgetItem* w = getWrapped();
                
                w->invalidate(
                  
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for invalidate";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: layout
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::layout
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
                QWidgetItem* w = getWrapped();
                QLayout* res = 
                    
                w->layout(
                  
                );
              
            // return type: QLayout*

            return RJSHelper::cpp2js_QLayout(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for layout";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: spacerItem
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::spacerItem
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
                QWidgetItem* w = getWrapped();
                QSpacerItem* res = 
                    
                w->spacerItem(
                  
                );
              
            // return type: QSpacerItem*

            return RJSHelper::cpp2js_QSpacerItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for spacerItem";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: alignment
    // Source: QLayoutItem
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::alignment
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
                QWidgetItem* w = getWrapped();
                Qt::Alignment res = 
                    
                w->alignment(
                  
                );
              
            // return type: Qt::Alignment

            return RJSHelper::cpp2js_Qt_Alignment(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for alignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: setAlignment
    // Source: QLayoutItem
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::setAlignment
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_Qt_Alignment(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: a (Qt::Alignment)
  
Qt::Alignment a1_cpp;

      a1_cpp = RJSHelper::js2cpp_Qt_Alignment(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QWidgetItem* w = getWrapped();
                
                w->setAlignment(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setAlignment";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: sizeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::sizeHint
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
                QWidgetItem* w = getWrapped();
                QSize res = 
                    
                w->sizeHint(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for sizeHint";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: minimumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::minimumSize
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
                QWidgetItem* w = getWrapped();
                QSize res = 
                    
                w->minimumSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: maximumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::maximumSize
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
                QWidgetItem* w = getWrapped();
                QSize res = 
                    
                w->maximumSize(
                  
                );
              
            // return type: QSize

            return RJSHelper::cpp2js_QSize(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for maximumSize";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: expandingDirections
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::expandingDirections
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
                QWidgetItem* w = getWrapped();
                Qt::Orientations res = 
                    
                w->expandingDirections(
                  
                );
              
            // return type: Qt::Orientations

            return RJSHelper::cpp2js_Qt_Orientations(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for expandingDirections";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::isEmpty
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
                QWidgetItem* w = getWrapped();
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
            
    // Class: QWidgetItem
    // Function: setGeometry
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::setGeometry
              (
                
  const QJSValue& 
  a1
              ) 
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QRect(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (QRect)
  
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
                QWidgetItem* w = getWrapped();
                
                w->setGeometry(
                  a1_cpp
    
                );
              
            return QJSValue();
          
  }

                  qWarning() << "no matching function variant found for setGeometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: geometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::geometry
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
                QWidgetItem* w = getWrapped();
                QRect res = 
                    
                w->geometry(
                  
                );
              
            // return type: QRect

            return RJSHelper::cpp2js_QRect(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for geometry";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: widget
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::widget
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
                QWidgetItem* w = getWrapped();
                QWidget* res = 
                    
                w->widget(
                  
                );
              
            // return type: QWidget*

            return RJSHelper::cpp2js_QWidget(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for widget";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: hasHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::hasHeightForWidth
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
                QWidgetItem* w = getWrapped();
                bool res = 
                    
                w->hasHeightForWidth(
                  
                );
              
            // return type: bool

            return RJSHelper::cpp2js_bool(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for hasHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: heightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::heightForWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QWidgetItem* w = getWrapped();
                int res = 
                    
                w->heightForWidth(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for heightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: minimumHeightForWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::minimumHeightForWidth
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_int(handler, a1
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp:  (int)
  
int a1_cpp;

      a1_cpp = RJSHelper::js2cpp_int(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QWidgetItem* w = getWrapped();
                int res = 
                    
                w->minimumHeightForWidth(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for minimumHeightForWidth";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QWidgetItem
    // Function: controlTypes
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QWidgetItem_Wrapper::controlTypes
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
                QWidgetItem* w = getWrapped();
                QSizePolicy::ControlTypes res = 
                    
                w->controlTypes(
                  
                );
              
            // return type: QSizePolicy::ControlTypes

            return RJSHelper::cpp2js_QSizePolicy_ControlTypes(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for controlTypes";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  