

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qtextbrowser_base.h"
  //#include "qtextbrowser_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QTextBrowser

    // constructors:
    
  // Class: QTextBrowser
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1

      // protected overwritten functions / events and their public invokable counterparts:
      void QTextBrowser_Base::actionEvent(
      QActionEvent* event
    ) {

      //qDebug() << "QTextBrowser_Base::actionEvent()";

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
        QTextBrowser::actionEvent(
          event
        );
      }
    }

  void QTextBrowser_Base::resizeEvent(
      QResizeEvent* e
    ) {

      //qDebug() << "QTextBrowser_Base::resizeEvent()";

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
        QTextBrowser::resizeEvent(
          e
        );
      }
    }

  void QTextBrowser_Base::mouseMoveEvent(
      QMouseEvent* ev
    ) {

      //qDebug() << "QTextBrowser_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
    handler, 
    // non-copyable: true
ev
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
        QTextBrowser::mouseMoveEvent(
          ev
        );
      }
    }

  void QTextBrowser_Base::paintEvent(
      QPaintEvent* e
    ) {

      //qDebug() << "QTextBrowser_Base::paintEvent()";

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
        QTextBrowser::paintEvent(
          e
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      