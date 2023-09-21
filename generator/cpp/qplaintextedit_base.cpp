

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qplaintextedit_base.h"
  //#include "qplaintextedit_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QPlainTextEdit

    // constructors:
    
  // Class: QPlainTextEdit
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1

  // Class: QPlainTextEdit
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2

#if QT_CONFIG(regularexpression)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#ifndef QT_NO_CLIPBOARD

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(draganddrop)

#endif

#if QT_CONFIG(wheelevent)

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QPlainTextEdit_Base::actionEvent(
      QActionEvent* event
    ) {

      //qDebug() << "QPlainTextEdit_Base::actionEvent()";

      //QJSValue f = self.prototype().property("actionEvent");
      QJSValue f = self.property("actionEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QActionEvent(
    handler, 
    // non-copyable: true
event
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.actionEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QPlainTextEdit::actionEvent(
          event
        );
      }
    }

  void QPlainTextEdit_Base::setViewportMargins(
      int left, int top, int right, int bottom
    ) {

      //qDebug() << "QPlainTextEdit_Base::setViewportMargins()";

      //QJSValue f = self.prototype().property("setViewportMargins");
      QJSValue f = self.property("setViewportMargins");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_int(
    handler, 
    // non-copyable: false
left
  );


  args << cpp2js_int(
    handler, 
    // non-copyable: false
top
  );


  args << cpp2js_int(
    handler, 
    // non-copyable: false
right
  );


  args << cpp2js_int(
    handler, 
    // non-copyable: false
bottom
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setViewportMargins.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QPlainTextEdit::setViewportMargins(
          left, top, right, bottom
        );
      }
    }

  void QPlainTextEdit_Base::setViewportMargins(
      const QMargins& margins
    ) {

      //qDebug() << "QPlainTextEdit_Base::setViewportMargins()";

      //QJSValue f = self.prototype().property("setViewportMargins");
      QJSValue f = self.property("setViewportMargins");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMargins(
    handler, 
    // non-copyable: false
margins
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setViewportMargins.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QPlainTextEdit::setViewportMargins(
          margins
        );
      }
    }

  QMargins QPlainTextEdit_Base::viewportMargins(
      
    ) {

      //qDebug() << "QPlainTextEdit_Base::viewportMargins()";

      //QJSValue f = self.prototype().property("viewportMargins");
      QJSValue f = self.property("viewportMargins");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.viewportMargins.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return js2cpp_QMargins(handler, res);
          
      }
      else {
        
          return
        QPlainTextEdit::viewportMargins(
          
        );
      }
    }

  bool QPlainTextEdit_Base::eventFilter(
      QObject* a1, QEvent* a2
    ) {

      //qDebug() << "QPlainTextEdit_Base::eventFilter()";

      //QJSValue f = self.prototype().property("eventFilter");
      QJSValue f = self.property("eventFilter");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QObject(
    handler, 
    // non-copyable: true
a1
  );


  args << cpp2js_QEvent(
    handler, 
    // non-copyable: true
a2
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.eventFilter.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return js2cpp_bool(handler, res);
          
      }
      else {
        
          return
        QPlainTextEdit::eventFilter(
          a1, a2
        );
      }
    }

  bool QPlainTextEdit_Base::viewportEvent(
      QEvent* a1
    ) {

      //qDebug() << "QPlainTextEdit_Base::viewportEvent()";

      //QJSValue f = self.prototype().property("viewportEvent");
      QJSValue f = self.property("viewportEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QEvent(
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
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.viewportEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return js2cpp_bool(handler, res);
          
      }
      else {
        
          return
        QPlainTextEdit::viewportEvent(
          a1
        );
      }
    }

  QSize QPlainTextEdit_Base::viewportSizeHint(
      
    ) {

      //qDebug() << "QPlainTextEdit_Base::viewportSizeHint()";

      //QJSValue f = self.prototype().property("viewportSizeHint");
      QJSValue f = self.property("viewportSizeHint");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.viewportSizeHint.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return js2cpp_QSize(handler, res);
          
      }
      else {
        
          return
        QPlainTextEdit::viewportSizeHint(
          
        );
      }
    }

  void QPlainTextEdit_Base::resizeEvent(
      QResizeEvent* e
    ) {

      //qDebug() << "QPlainTextEdit_Base::resizeEvent()";

      //QJSValue f = self.prototype().property("resizeEvent");
      QJSValue f = self.property("resizeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QResizeEvent(
    handler, 
    // non-copyable: true
e
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.resizeEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QPlainTextEdit::resizeEvent(
          e
        );
      }
    }

  void QPlainTextEdit_Base::paintEvent(
      QPaintEvent* e
    ) {

      //qDebug() << "QPlainTextEdit_Base::paintEvent()";

      //QJSValue f = self.prototype().property("paintEvent");
      QJSValue f = self.property("paintEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QPaintEvent(
    handler, 
    // non-copyable: true
e
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.paintEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QPlainTextEdit::paintEvent(
          e
        );
      }
    }

  void QPlainTextEdit_Base::mouseMoveEvent(
      QMouseEvent* e
    ) {

      //qDebug() << "QPlainTextEdit_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
    handler, 
    // non-copyable: true
e
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.mouseMoveEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QPlainTextEdit::mouseMoveEvent(
          e
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      