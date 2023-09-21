

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qabstractscrollarea_base.h"
  //#include "qabstractscrollarea_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QAbstractScrollArea

    // constructors:
    
  // Class: QAbstractScrollArea
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1

#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(draganddrop)

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QAbstractScrollArea_Base::actionEvent(
      QActionEvent* event
    ) {

      //qDebug() << "QAbstractScrollArea_Base::actionEvent()";

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
        QAbstractScrollArea::actionEvent(
          event
        );
      }
    }

  void QAbstractScrollArea_Base::setViewportMargins(
      int left, int top, int right, int bottom
    ) {

      //qDebug() << "QAbstractScrollArea_Base::setViewportMargins()";

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
        QAbstractScrollArea::setViewportMargins(
          left, top, right, bottom
        );
      }
    }

  void QAbstractScrollArea_Base::setViewportMargins(
      const QMargins& margins
    ) {

      //qDebug() << "QAbstractScrollArea_Base::setViewportMargins()";

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
        QAbstractScrollArea::setViewportMargins(
          margins
        );
      }
    }

  QMargins QAbstractScrollArea_Base::viewportMargins(
      
    ) {

      //qDebug() << "QAbstractScrollArea_Base::viewportMargins()";

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
        QAbstractScrollArea::viewportMargins(
          
        );
      }
    }

  bool QAbstractScrollArea_Base::eventFilter(
      QObject* a1, QEvent* a2
    ) {

      //qDebug() << "QAbstractScrollArea_Base::eventFilter()";

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
        QAbstractScrollArea::eventFilter(
          a1, a2
        );
      }
    }

  bool QAbstractScrollArea_Base::event(
      QEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::event()";

      //QJSValue f = self.prototype().property("event");
      QJSValue f = self.property("event");
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
        QJSValue res = engine->evaluate("__self__.event.apply(__self__, __args__);", "", 1, &trace);

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
        QAbstractScrollArea::event(
          a1
        );
      }
    }

  bool QAbstractScrollArea_Base::viewportEvent(
      QEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::viewportEvent()";

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
        QAbstractScrollArea::viewportEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::resizeEvent(
      QResizeEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::resizeEvent()";

      //QJSValue f = self.prototype().property("resizeEvent");
      QJSValue f = self.property("resizeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QResizeEvent(
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
        QAbstractScrollArea::resizeEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::paintEvent(
      QPaintEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::paintEvent()";

      //QJSValue f = self.prototype().property("paintEvent");
      QJSValue f = self.property("paintEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QPaintEvent(
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
        QAbstractScrollArea::paintEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::mousePressEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::mousePressEvent()";

      //QJSValue f = self.prototype().property("mousePressEvent");
      QJSValue f = self.property("mousePressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
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
        QJSValue res = engine->evaluate("__self__.mousePressEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QAbstractScrollArea::mousePressEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::mouseReleaseEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::mouseReleaseEvent()";

      //QJSValue f = self.prototype().property("mouseReleaseEvent");
      QJSValue f = self.property("mouseReleaseEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
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
        QJSValue res = engine->evaluate("__self__.mouseReleaseEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QAbstractScrollArea::mouseReleaseEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::mouseDoubleClickEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::mouseDoubleClickEvent()";

      //QJSValue f = self.prototype().property("mouseDoubleClickEvent");
      QJSValue f = self.property("mouseDoubleClickEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
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
        QJSValue res = engine->evaluate("__self__.mouseDoubleClickEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QAbstractScrollArea::mouseDoubleClickEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::mouseMoveEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QMouseEvent(
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
        QAbstractScrollArea::mouseMoveEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::wheelEvent(
      QWheelEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::wheelEvent()";

      //QJSValue f = self.prototype().property("wheelEvent");
      QJSValue f = self.property("wheelEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QWheelEvent(
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
        QJSValue res = engine->evaluate("__self__.wheelEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QAbstractScrollArea::wheelEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::dragEnterEvent(
      QDragEnterEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::dragEnterEvent()";

      //QJSValue f = self.prototype().property("dragEnterEvent");
      QJSValue f = self.property("dragEnterEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QDragEnterEvent(
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
        QJSValue res = engine->evaluate("__self__.dragEnterEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QAbstractScrollArea::dragEnterEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::keyPressEvent(
      QKeyEvent* a1
    ) {

      //qDebug() << "QAbstractScrollArea_Base::keyPressEvent()";

      //QJSValue f = self.prototype().property("keyPressEvent");
      QJSValue f = self.property("keyPressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_QKeyEvent(
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
        QJSValue res = engine->evaluate("__self__.keyPressEvent.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QAbstractScrollArea::keyPressEvent(
          a1
        );
      }
    }

  void QAbstractScrollArea_Base::scrollContentsBy(
      int dx, int dy
    ) {

      //qDebug() << "QAbstractScrollArea_Base::scrollContentsBy()";

      //QJSValue f = self.prototype().property("scrollContentsBy");
      QJSValue f = self.property("scrollContentsBy");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << cpp2js_int(
    handler, 
    // non-copyable: false
dx
  );


  args << cpp2js_int(
    handler, 
    // non-copyable: false
dy
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.scrollContentsBy.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QAbstractScrollArea::scrollContentsBy(
          dx, dy
        );
      }
    }

  QSize QAbstractScrollArea_Base::viewportSizeHint(
      
    ) {

      //qDebug() << "QAbstractScrollArea_Base::viewportSizeHint()";

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
        QAbstractScrollArea::viewportSizeHint(
          
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      