

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qlayout_base.h"
  //#include "qlayout_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QLayout

    // constructors:
    
  // Class: QLayout
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      

      // public virtual overwritten functions / events:
      QSize QLayout_Base::sizeHint(
      
    ) 
    
      const
    
    {

      //qDebug() << "QLayout_Base::sizeHint()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("sizeHint");
      QJSValue f = self.property("sizeHint");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.sizeHint();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.sizeHint.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling sizeHint:" << res.toString();
        //  engine->throwError("exception in: QLayout::sizeHint:" + res.toString());
        //}

        
            return js2cpp_QSize(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QLayout::sizeHint"));
      //}

      
          // pure virtual function:
          // return default value:
          
              // QSize
              return QSize();
            
    }

  void QLayout_Base::addItem(
      QLayoutItem* a1
    ) 
    
    {

      //qDebug() << "QLayout_Base::addItem()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("addItem");
      QJSValue f = self.property("addItem");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QLayoutItem(
    handler, 
    // non-copyable: true
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.addItem();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.addItem.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling addItem:" << res.toString();
        //  engine->throwError("exception in: QLayout::addItem:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QLayout::addItem"));
      //}

      
          // pure virtual function:
          // return default value:
          
              // void
              return;
            
    }

  QSize QLayout_Base::minimumSize(
      
    ) 
    
      const
    
    {

      //qDebug() << "QLayout_Base::minimumSize()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("minimumSize");
      QJSValue f = self.property("minimumSize");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.minimumSize();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.minimumSize.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling minimumSize:" << res.toString();
        //  engine->throwError("exception in: QLayout::minimumSize:" + res.toString());
        //}

        
            return js2cpp_QSize(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QLayout::minimumSize"));
      //}

      
          // call implementation of original class:
          return QLayout::minimumSize(
            
          );
        
    }

  void QLayout_Base::setGeometry(
      const QRect& a1
    ) 
    
    {

      //qDebug() << "QLayout_Base::setGeometry()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("setGeometry");
      QJSValue f = self.property("setGeometry");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_QRect(
    handler, 
    // non-copyable: false
a1
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.setGeometry();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setGeometry.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling setGeometry:" << res.toString();
        //  engine->throwError("exception in: QLayout::setGeometry:" + res.toString());
        //}

        
            // void:
            return;
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QLayout::setGeometry"));
      //}

      
          // call implementation of original class:
          return QLayout::setGeometry(
            a1
          );
        
    }

  QLayoutItem* QLayout_Base::itemAt(
      int index
    ) 
    
      const
    
    {

      //qDebug() << "QLayout_Base::itemAt()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("itemAt");
      QJSValue f = self.property("itemAt");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_int(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.itemAt();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.itemAt.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling itemAt:" << res.toString();
        //  engine->throwError("exception in: QLayout::itemAt:" + res.toString());
        //}

        
            return js2cpp_QLayoutItem_ptr(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QLayout::itemAt"));
      //}

      
          // pure virtual function:
          // return default value:
          
              // pointer:
              return nullptr;
            
    }

  QLayoutItem* QLayout_Base::takeAt(
      int index
    ) 
    
    {

      //qDebug() << "QLayout_Base::takeAt()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("takeAt");
      QJSValue f = self.property("takeAt");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << cpp2js_int(
    handler, 
    // non-copyable: false
index
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.takeAt();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.takeAt.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling takeAt:" << res.toString();
        //  engine->throwError("exception in: QLayout::takeAt:" + res.toString());
        //}

        
            return js2cpp_QLayoutItem_ptr(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QLayout::takeAt"));
      //}

      
          // pure virtual function:
          // return default value:
          
              // pointer:
              return nullptr;
            
    }

  int QLayout_Base::count(
      
    ) 
    
      const
    
    {

      //qDebug() << "QLayout_Base::count()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("count");
      QJSValue f = self.property("count");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.count();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.count.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling count:" << res.toString();
        //  engine->throwError("exception in: QLayout::count:" + res.toString());
        //}

        
            return js2cpp_int(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QLayout::count"));
      //}

      
          // pure virtual function:
          // return default value:
          
              // int
              return 0;
            
    }

  

      // public pure-virtual functions:
      