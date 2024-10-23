
  // Auto generated
  
  // include header:
  //#include "qtsqlglobalwrapper.h"
  //#include "header_cpp.h"
  
    #include "qtsqlglobal_wrapper.h"

  
    void QSql_Wrapper::init(RJSApi& handler) {
      
        //qmlRegisterType<QSql_Wrapper>("org.qcad", 1, 0, "QSql_Wrapper");
        qmlRegisterInterface<QSql_Wrapper>("QSql_Wrapper", 1);
      

      QJSEngine* engine = handler.getEngine();

      
          // type is namespace, no scriptable type (RJSType_QSql)
        

      // wrapper:
      QJSValue mo = engine->newQMetaObject(&QSql_Wrapper::staticMetaObject);
      engine->globalObject().setProperty("QSql_Wrapper", mo);


      
        // JS base class:
        //QJSValue mob = engine->newQMetaObject(&QSql_BaseJs::staticMetaObject);
        //engine->globalObject().setProperty("QSql_BaseJs", mob);
      
      QString fileName = ":generator/js/QSql.js";
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
  

  // constructors:
  

    // non-static functions:
    

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
    #include "moc_qtsqlglobal_wrapper.cpp"
  
