
  // Auto generated
  
  // include header:
  //#include "qhelpcontentitemwrapper.h"
  //#include "header_cpp.h"
  
    #ifdef QT_HELP_LIB
    #include "qhelpcontentitem_wrapper.h"

  
      // list of registered base casters for this wrapper class:
      QList<RJSBasecaster_QHelpContentItem*> QHelpContentItem_Wrapper::basecasters_QHelpContentItem;
    
    // static functions implementation in singleton wrapper:
    
    void QHelpContentItem_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QHelpContentItem_Wrapper>("org.qcad", 1, 0, "QHelpContentItem_Wrapper");
        qmlRegisterInterface<QHelpContentItem_Wrapper>("QHelpContentItem_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // make type scriptable for JS files:
          QJSValue global = engine->globalObject();
          RJSType_QHelpContentItem* t = new RJSType_QHelpContentItem();
          global.setProperty("RJSType_QHelpContentItem", engine->newQObject(t));

          // initialize ID for this type:
          RJSType_QHelpContentItem::getIdStatic();

          

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QHelpContentItem_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QHelpContentItem_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QHelpContentItem_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QHelpContentItem_BaseJs", mob);
      
      QString fileName = ":generator/js/QHelpContentItem.js";
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
    QHelpContentItem_Wrapper::QHelpContentItem_Wrapper(QJSEngine* e) : wrapped(nullptr), wrappedCreated(false) {
            //setObjectName("QHelpContentItem_Wrapper");
            setEngine(e);

            // signal forwarding:
            //initConnections();
          }
        
    */

    
      // special constructor to wrap existing object:
      QHelpContentItem_Wrapper::QHelpContentItem_Wrapper(RJSApi& h, QHelpContentItem* o, bool wrappedCreated) : RJSWrapperObj(h), 

            
            wrapped(o), 
            

            wrappedCreated(wrappedCreated) {
              //RDebug::incCounter(QString("QHelpContentItem_Wrapper_") + handler.getEngine()->objectName());
              //RDebug::incCounter(QString("QHelpContentItem_Wrapper"));
              //setObjectName("QHelpContentItem_Wrapper");
              //setHandler(h);

              

              // signal forwarding:
              initConnections();
            }
          

      // destructor:
      QHelpContentItem_Wrapper::~QHelpContentItem_Wrapper() {
            //RDebug::decCounter(QString("QHelpContentItem_Wrapper_") + handler.getEngine()->objectName());
            //RDebug::decCounter(QString("QHelpContentItem_Wrapper"));

            //qDebug() << "QHelpContentItem_Wrapper::~QHelpContentItem_Wrapper";

            // tell script handler that this wrapper no longer exists:
            handler.unregisterWrapper(*this);

            
            if (wrappedCreated) {
              
                  // never delete wrapped object (non-copyable, CPP ownership or private destructor)
                  //qDebug() << "NOT deleting instance of QHelpContentItem";
                
            }
            
          }
        
    // initialization of signal forwarding
    
        void QHelpContentItem_Wrapper::initConnections() {

          //setObjectName("QHelpContentItem_Wrapper");

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
    
    // Class: QHelpContentItem
    // Function: child
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QHelpContentItem_Wrapper::child
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
    
  // convert js parameter to cpp: row (int)
  
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
                QHelpContentItem* w = getWrapped();
                QHelpContentItem* res = 
                    
                w->child(
                  a1_cpp
    
                );
              
            // return type: QHelpContentItem*

            return RJSHelper::cpp2js_QHelpContentItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for child";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHelpContentItem
    // Function: childCount
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHelpContentItem_Wrapper::childCount
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
                QHelpContentItem* w = getWrapped();
                int res = 
                    
                w->childCount(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for childCount";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHelpContentItem
    // Function: title
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHelpContentItem_Wrapper::title
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
                QHelpContentItem* w = getWrapped();
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
            
    // Class: QHelpContentItem
    // Function: url
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHelpContentItem_Wrapper::url
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
                QHelpContentItem* w = getWrapped();
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
            
    // Class: QHelpContentItem
    // Function: row
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHelpContentItem_Wrapper::row
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
                QHelpContentItem* w = getWrapped();
                int res = 
                    
                w->row(
                  
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for row";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHelpContentItem
    // Function: parent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

                QJSValue 
              QHelpContentItem_Wrapper::parent
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
                QHelpContentItem* w = getWrapped();
                QHelpContentItem* res = 
                    
                w->parent(
                  
                );
              
            // return type: QHelpContentItem*

            return RJSHelper::cpp2js_QHelpContentItem(
              handler, 
              // non-copyable: true
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for parent";
                  handler.trace();
                  return QJSValue();
                
              }
            
    // Class: QHelpContentItem
    // Function: childPosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

                QJSValue 
              QHelpContentItem_Wrapper::childPosition
              (
                
  const QJSValue& 
  a1
              ) 
              
                const
              
              {
                
      // check parameter types:
      if (
        RJSHelper::is_QHelpContentItem_ptr(handler, a1
    , true
  
  )

  
      ) {
    
      // prepare parameters:
    
  // convert js parameter to cpp: child (QHelpContentItem)
  

          // pointer:
          QHelpContentItem*
         a1_cpp;

      a1_cpp = RJSHelper::js2cpp_QHelpContentItem_ptr(handler, a1);
        

    // call function:
    
          if (!hasWrapped()) {
            qWarning() << "wrapped is NULL";
            handler.trace();
            return QJSValue();
          }

          
            // non-static member function:
            // call function of wrapped object:
            
                // call function of C++ class:
                QHelpContentItem* w = getWrapped();
                int res = 
                    
                w->childPosition(
                  a1_cpp
    
                );
              
            // return type: int

            return RJSHelper::cpp2js_int(
              handler, 
              // non-copyable: false
                  res
                
              );
            
  }

                  qWarning() << "no matching function variant found for childPosition";
                  handler.trace();
                  return QJSValue();
                
              }
            

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #endif
  
    #include "moc_qhelpcontentitem_wrapper.cpp"
  
