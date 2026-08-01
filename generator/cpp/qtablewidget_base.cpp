

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  // include header:
  #include "qtablewidget_base.h"
  //#include "qtablewidget_wrapper.h"
  //#include "header_cpp.h"
    
    // Base class for QTableWidget

    // constructors:
    
  // Class: QTableWidget
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1

  // Class: QTableWidget
  // Function: 
  // Parameters: 1
  // preceding Parameters: 3

#if QT_CONFIG(draganddrop)

#endif

      // protected overwritten functions / events and their public invokable counterparts:
      void QTableWidget_Base::actionEvent(
      QActionEvent* event
    ) {

      //qDebug() << "QTableWidget_Base::actionEvent()";

      //QJSValue f = self.prototype().property("actionEvent");
      QJSValue f = self.property("actionEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QActionEvent(
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
        QTableWidget::actionEvent(
          event
        );
      }
    }

  void QTableWidget_Base::setViewportMargins(
      int left, int top, int right, int bottom
    ) {

      //qDebug() << "QTableWidget_Base::setViewportMargins()";

      //QJSValue f = self.prototype().property("setViewportMargins");
      QJSValue f = self.property("setViewportMargins");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
left
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
top
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
right
  );


  args << RJSHelper::cpp2js_int(
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
        QTableWidget::setViewportMargins(
          left, top, right, bottom
        );
      }
    }

  void QTableWidget_Base::setViewportMargins(
      const QMargins& margins
    ) {

      //qDebug() << "QTableWidget_Base::setViewportMargins()";

      //QJSValue f = self.prototype().property("setViewportMargins");
      QJSValue f = self.property("setViewportMargins");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMargins(
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
        QTableWidget::setViewportMargins(
          margins
        );
      }
    }

  QMargins QTableWidget_Base::viewportMargins(
      
    ) {

      //qDebug() << "QTableWidget_Base::viewportMargins()";

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
            return RJSHelper::js2cpp_QMargins(handler, res);
          
      }
      else {
        
          return
        QTableWidget::viewportMargins(
          
        );
      }
    }

  bool QTableWidget_Base::event(
      QEvent* a1
    ) {

      //qDebug() << "QTableWidget_Base::event()";

      //QJSValue f = self.prototype().property("event");
      QJSValue f = self.property("event");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QEvent(
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
            return RJSHelper::js2cpp_bool(handler, res);
          
      }
      else {
        
          return
        QTableWidget::event(
          a1
        );
      }
    }

  bool QTableWidget_Base::viewportEvent(
      QEvent* a1
    ) {

      //qDebug() << "QTableWidget_Base::viewportEvent()";

      //QJSValue f = self.prototype().property("viewportEvent");
      QJSValue f = self.property("viewportEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QEvent(
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
            return RJSHelper::js2cpp_bool(handler, res);
          
      }
      else {
        
          return
        QTableWidget::viewportEvent(
          a1
        );
      }
    }

  void QTableWidget_Base::mousePressEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QTableWidget_Base::mousePressEvent()";

      //QJSValue f = self.prototype().property("mousePressEvent");
      QJSValue f = self.property("mousePressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
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
        QTableWidget::mousePressEvent(
          a1
        );
      }
    }

  void QTableWidget_Base::mouseReleaseEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QTableWidget_Base::mouseReleaseEvent()";

      //QJSValue f = self.prototype().property("mouseReleaseEvent");
      QJSValue f = self.property("mouseReleaseEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
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
        QTableWidget::mouseReleaseEvent(
          a1
        );
      }
    }

  void QTableWidget_Base::mouseDoubleClickEvent(
      QMouseEvent* a1
    ) {

      //qDebug() << "QTableWidget_Base::mouseDoubleClickEvent()";

      //QJSValue f = self.prototype().property("mouseDoubleClickEvent");
      QJSValue f = self.property("mouseDoubleClickEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
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
        QTableWidget::mouseDoubleClickEvent(
          a1
        );
      }
    }

  void QTableWidget_Base::wheelEvent(
      QWheelEvent* a1
    ) {

      //qDebug() << "QTableWidget_Base::wheelEvent()";

      //QJSValue f = self.prototype().property("wheelEvent");
      QJSValue f = self.property("wheelEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QWheelEvent(
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
        QTableWidget::wheelEvent(
          a1
        );
      }
    }

  void QTableWidget_Base::dragEnterEvent(
      QDragEnterEvent* a1
    ) {

      //qDebug() << "QTableWidget_Base::dragEnterEvent()";

      //QJSValue f = self.prototype().property("dragEnterEvent");
      QJSValue f = self.property("dragEnterEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QDragEnterEvent(
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
        QTableWidget::dragEnterEvent(
          a1
        );
      }
    }

  void QTableWidget_Base::keyPressEvent(
      QKeyEvent* a1
    ) {

      //qDebug() << "QTableWidget_Base::keyPressEvent()";

      //QJSValue f = self.prototype().property("keyPressEvent");
      QJSValue f = self.property("keyPressEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QKeyEvent(
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
        QTableWidget::keyPressEvent(
          a1
        );
      }
    }

  void QTableWidget_Base::pressed(
      const QModelIndex& index
    ) {

      //qDebug() << "QTableWidget_Base::pressed()";

      //QJSValue f = self.prototype().property("pressed");
      QJSValue f = self.property("pressed");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
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
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.pressed.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::pressed(
          index
        );
      }
    }

  void QTableWidget_Base::clicked(
      const QModelIndex& index
    ) {

      //qDebug() << "QTableWidget_Base::clicked()";

      //QJSValue f = self.prototype().property("clicked");
      QJSValue f = self.property("clicked");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
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
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.clicked.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::clicked(
          index
        );
      }
    }

  void QTableWidget_Base::activated(
      const QModelIndex& index
    ) {

      //qDebug() << "QTableWidget_Base::activated()";

      //QJSValue f = self.prototype().property("activated");
      QJSValue f = self.property("activated");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
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
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.activated.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::activated(
          index
        );
      }
    }

  void QTableWidget_Base::entered(
      const QModelIndex& index
    ) {

      //qDebug() << "QTableWidget_Base::entered()";

      //QJSValue f = self.prototype().property("entered");
      QJSValue f = self.property("entered");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
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
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.entered.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::entered(
          index
        );
      }
    }

  void QTableWidget_Base::viewportEntered(
      
    ) {

      //qDebug() << "QTableWidget_Base::viewportEntered()";

      //QJSValue f = self.prototype().property("viewportEntered");
      QJSValue f = self.property("viewportEntered");
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
        QJSValue res = engine->evaluate("__self__.viewportEntered.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::viewportEntered(
          
        );
      }
    }

  void QTableWidget_Base::iconSizeChanged(
      const QSize& size
    ) {

      //qDebug() << "QTableWidget_Base::iconSizeChanged()";

      //QJSValue f = self.prototype().property("iconSizeChanged");
      QJSValue f = self.property("iconSizeChanged");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QSize(
    handler, 
    // non-copyable: false
size
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.iconSizeChanged.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::iconSizeChanged(
          size
        );
      }
    }

  void QTableWidget_Base::mouseMoveEvent(
      QMouseEvent* event
    ) {

      //qDebug() << "QTableWidget_Base::mouseMoveEvent()";

      //QJSValue f = self.prototype().property("mouseMoveEvent");
      QJSValue f = self.property("mouseMoveEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QMouseEvent(
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
        QTableWidget::mouseMoveEvent(
          event
        );
      }
    }

  void QTableWidget_Base::resizeEvent(
      QResizeEvent* event
    ) {

      //qDebug() << "QTableWidget_Base::resizeEvent()";

      //QJSValue f = self.prototype().property("resizeEvent");
      QJSValue f = self.property("resizeEvent");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QResizeEvent(
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
        QTableWidget::resizeEvent(
          event
        );
      }
    }

  void QTableWidget_Base::rowMoved(
      int row, int oldIndex, int newIndex
    ) {

      //qDebug() << "QTableWidget_Base::rowMoved()";

      //QJSValue f = self.prototype().property("rowMoved");
      QJSValue f = self.property("rowMoved");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
row
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
oldIndex
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
newIndex
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.rowMoved.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::rowMoved(
          row, oldIndex, newIndex
        );
      }
    }

  void QTableWidget_Base::columnMoved(
      int column, int oldIndex, int newIndex
    ) {

      //qDebug() << "QTableWidget_Base::columnMoved()";

      //QJSValue f = self.prototype().property("columnMoved");
      QJSValue f = self.property("columnMoved");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
column
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
oldIndex
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
newIndex
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.columnMoved.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::columnMoved(
          column, oldIndex, newIndex
        );
      }
    }

  void QTableWidget_Base::rowResized(
      int row, int oldHeight, int newHeight
    ) {

      //qDebug() << "QTableWidget_Base::rowResized()";

      //QJSValue f = self.prototype().property("rowResized");
      QJSValue f = self.property("rowResized");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
row
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
oldHeight
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
newHeight
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.rowResized.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::rowResized(
          row, oldHeight, newHeight
        );
      }
    }

  void QTableWidget_Base::columnResized(
      int column, int oldWidth, int newWidth
    ) {

      //qDebug() << "QTableWidget_Base::columnResized()";

      //QJSValue f = self.prototype().property("columnResized");
      QJSValue f = self.property("columnResized");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
column
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
oldWidth
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
newWidth
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.columnResized.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::columnResized(
          column, oldWidth, newWidth
        );
      }
    }

  void QTableWidget_Base::rowCountChanged(
      int oldCount, int newCount
    ) {

      //qDebug() << "QTableWidget_Base::rowCountChanged()";

      //QJSValue f = self.prototype().property("rowCountChanged");
      QJSValue f = self.property("rowCountChanged");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
oldCount
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
newCount
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.rowCountChanged.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::rowCountChanged(
          oldCount, newCount
        );
      }
    }

  void QTableWidget_Base::columnCountChanged(
      int oldCount, int newCount
    ) {

      //qDebug() << "QTableWidget_Base::columnCountChanged()";

      //QJSValue f = self.prototype().property("columnCountChanged");
      QJSValue f = self.property("columnCountChanged");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
oldCount
  );


  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
newCount
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.columnCountChanged.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::columnCountChanged(
          oldCount, newCount
        );
      }
    }

  void QTableWidget_Base::scrollContentsBy(
      int dx, int dy
    ) {

      //qDebug() << "QTableWidget_Base::scrollContentsBy()";

      //QJSValue f = self.prototype().property("scrollContentsBy");
      QJSValue f = self.property("scrollContentsBy");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
dx
  );


  args << RJSHelper::cpp2js_int(
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
        QTableWidget::scrollContentsBy(
          dx, dy
        );
      }
    }

  void QTableWidget_Base::paintEvent(
      QPaintEvent* e
    ) {

      //qDebug() << "QTableWidget_Base::paintEvent()";

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
        QTableWidget::paintEvent(
          e
        );
      }
    }

  int QTableWidget_Base::horizontalOffset(
      
    ) {

      //qDebug() << "QTableWidget_Base::horizontalOffset()";

      //QJSValue f = self.prototype().property("horizontalOffset");
      QJSValue f = self.property("horizontalOffset");
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
        QJSValue res = engine->evaluate("__self__.horizontalOffset.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_int(handler, res);
          
      }
      else {
        
          return
        QTableWidget::horizontalOffset(
          
        );
      }
    }

  int QTableWidget_Base::verticalOffset(
      
    ) {

      //qDebug() << "QTableWidget_Base::verticalOffset()";

      //QJSValue f = self.prototype().property("verticalOffset");
      QJSValue f = self.property("verticalOffset");
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
        QJSValue res = engine->evaluate("__self__.verticalOffset.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_int(handler, res);
          
      }
      else {
        
          return
        QTableWidget::verticalOffset(
          
        );
      }
    }

  void QTableWidget_Base::setSelection(
      const QRect& rect, QItemSelectionModel::SelectionFlags command
    ) {

      //qDebug() << "QTableWidget_Base::setSelection()";

      //QJSValue f = self.prototype().property("setSelection");
      QJSValue f = self.property("setSelection");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QRect(
    handler, 
    // non-copyable: false
rect
  );


  args << RJSHelper::cpp2js_QItemSelectionModel_SelectionFlags(
    handler, 
    // non-copyable: false
command
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.setSelection.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::setSelection(
          rect, command
        );
      }
    }

  QRegion QTableWidget_Base::visualRegionForSelection(
      const QItemSelection& selection
    ) {

      //qDebug() << "QTableWidget_Base::visualRegionForSelection()";

      //QJSValue f = self.prototype().property("visualRegionForSelection");
      QJSValue f = self.property("visualRegionForSelection");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QItemSelection(
    handler, 
    // non-copyable: false
selection
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.visualRegionForSelection.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            // convert return value js2cpp and return:
            return RJSHelper::js2cpp_QRegion(handler, res);
          
      }
      else {
        
          return
        QTableWidget::visualRegionForSelection(
          selection
        );
      }
    }

  void QTableWidget_Base::updateGeometries(
      
    ) {

      //qDebug() << "QTableWidget_Base::updateGeometries()";

      //QJSValue f = self.prototype().property("updateGeometries");
      QJSValue f = self.property("updateGeometries");
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
        QJSValue res = engine->evaluate("__self__.updateGeometries.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::updateGeometries(
          
        );
      }
    }

  QSize QTableWidget_Base::viewportSizeHint(
      
    ) {

      //qDebug() << "QTableWidget_Base::viewportSizeHint()";

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
            return RJSHelper::js2cpp_QSize(handler, res);
          
      }
      else {
        
          return
        QTableWidget::viewportSizeHint(
          
        );
      }
    }

  void QTableWidget_Base::verticalScrollbarAction(
      int action
    ) {

      //qDebug() << "QTableWidget_Base::verticalScrollbarAction()";

      //QJSValue f = self.prototype().property("verticalScrollbarAction");
      QJSValue f = self.property("verticalScrollbarAction");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
action
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.verticalScrollbarAction.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::verticalScrollbarAction(
          action
        );
      }
    }

  void QTableWidget_Base::horizontalScrollbarAction(
      int action
    ) {

      //qDebug() << "QTableWidget_Base::horizontalScrollbarAction()";

      //QJSValue f = self.prototype().property("horizontalScrollbarAction");
      QJSValue f = self.property("horizontalScrollbarAction");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_int(
    handler, 
    // non-copyable: false
action
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.horizontalScrollbarAction.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::horizontalScrollbarAction(
          action
        );
      }
    }

  bool QTableWidget_Base::isIndexHidden(
      const QModelIndex& index
    ) {

      //qDebug() << "QTableWidget_Base::isIndexHidden()";

      //QJSValue f = self.prototype().property("isIndexHidden");
      QJSValue f = self.property("isIndexHidden");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
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
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.isIndexHidden.apply(__self__, __args__);", "", 1, &trace);

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
        QTableWidget::isIndexHidden(
          index
        );
      }
    }

  void QTableWidget_Base::selectionChanged(
      const QItemSelection& selected, const QItemSelection& deselected
    ) {

      //qDebug() << "QTableWidget_Base::selectionChanged()";

      //QJSValue f = self.prototype().property("selectionChanged");
      QJSValue f = self.property("selectionChanged");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QItemSelection(
    handler, 
    // non-copyable: false
selected
  );


  args << RJSHelper::cpp2js_QItemSelection(
    handler, 
    // non-copyable: false
deselected
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.selectionChanged.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::selectionChanged(
          selected, deselected
        );
      }
    }

  void QTableWidget_Base::currentChanged(
      const QModelIndex& current, const QModelIndex& previous
    ) {

      //qDebug() << "QTableWidget_Base::currentChanged()";

      //QJSValue f = self.prototype().property("currentChanged");
      QJSValue f = self.property("currentChanged");
      if (f.isCallable() /*&& !recFlag*/) {
        


        QJSEngine* engine = handler.getEngine();

        QJSValueList args;
        

  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
current
  );


  args << RJSHelper::cpp2js_QModelIndex(
    handler, 
    // non-copyable: false
previous
  );


        QJSValue argsValue = engine->newArray(args.length());
        for (int i=0; i<args.length(); i++) {
          argsValue.setProperty(i, args[i]);
        }

        engine->globalObject().setProperty("__self__", self);
        engine->globalObject().setProperty("__args__", argsValue);
        QStringList trace;
        QJSValue res = engine->evaluate("__self__.currentChanged.apply(__self__, __args__);", "", 1, &trace);

        if (res.isError()) {
          qWarning() << "exception: " << res.toString();
          for (int i=0; i<trace.length(); i++) {
            qWarning() << trace[i];
          }
        }


        
            return;
          
      }
      else {
        QTableWidget::currentChanged(
          current, previous
        );
      }
    }

  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      