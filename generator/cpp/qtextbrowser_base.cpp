

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
      void QTextBrowser_Base::mouseMoveEvent(
      QMouseEvent* ev
    ) {

      //qDebug() << "QTextBrowser_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
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
        

  args << RJSHelper::cpp2js_QPaintEvent(
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
      QVariant QTextBrowser_Base::loadResource(
      int type, const QUrl& name
    ) 
    
    {

      //qDebug() << "QTextBrowser_Base::loadResource()";

      // make sure we don't call same function (recursion):
      // only call JS function implementation

      QJSEngine* engine = handler.getEngine();

      //QJSValue f = self.prototype().property("loadResource");
      QJSValue f = self.property("loadResource");
      if (f.isCallable() /*&& !recFlag*/) {
        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
type
  );


  args << RJSHelper::cpp2js_QUrl(
    handler, 
    // non-copyable: false
name
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        //engine->evaluate("__self__.loadResource();");
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.loadResource.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }

        // does not provide back trace in case of error:
        //QJSValue res = f.callWithInstance(self, args);
        //if (res.isError()) {
        //  qWarning() << "Error while calling loadResource:" << res.toString();
        //  engine->throwError("exception in: QTextBrowser::loadResource:" + res.toString());
        //}

        
            return RJSHelper::js2cpp_QVariant(handler, res);
          
      }

      //if (!recFlag) {
        // function not implemented in JS: exception
        engine->throwError(QString("function not implemented in JS class: QTextBrowser::loadResource"));
      //}

      
          // call implementation of original class:
          return QTextBrowser::loadResource(
            type, name
          );
        
    }

  

      // public pure-virtual functions:
      