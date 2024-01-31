

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qmainwindow_base.h"
  //#include "qmainwindow_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QMainWindow

    // constructors:
    
#if QT_CONFIG(dockwidget)

#if QT_CONFIG(tabbar)

#endif

#if QT_CONFIG(tabwidget)

#endif

#endif

#if QT_CONFIG(toolbar)

#endif

  // Class: QMainWindow
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1

#if QT_CONFIG(dockwidget)

#endif

#if QT_CONFIG(tabbar)

#endif

#if QT_CONFIG(tabwidget)

#endif

#if QT_CONFIG(menubar)

#endif

#if QT_CONFIG(statusbar)

#endif

#if QT_CONFIG(dockwidget)

#endif

#if QT_CONFIG(toolbar)

#endif

#if QT_CONFIG(dockwidget)

#if QT_CONFIG(tabbar)

#endif

#endif

#if QT_CONFIG(menu)

#endif

#if QT_CONFIG(dockwidget)

#endif

#if QT_CONFIG(toolbar)

#endif

#if QT_CONFIG(dockwidget)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QMainWindow_Base::contextMenuEvent(
      QContextMenuEvent* event
    ) {

      //qDebug() << "QMainWindow_Base::contextMenuEvent()";

      //QJSValue f = self.prototype().property("contextMenuEvent");
      QJSValue f = self.property("contextMenuEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QContextMenuEvent(
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
        QJSValue res = engine->evaluate("__self__.contextMenuEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QMainWindow::contextMenuEvent(
          event
        );
      }
    }

  bool QMainWindow_Base::event(
      QEvent* event
    ) {

      //qDebug() << "QMainWindow_Base::event()";

      //QJSValue f = self.prototype().property("event");
      QJSValue f = self.property("event");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QEvent(
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
        QJSValue res = engine->evaluate("__self__.event.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_bool(handler, res);
          
      }
      else {
        
          return
        QMainWindow::event(
          event
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      