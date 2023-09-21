

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QABSTRACTSCROLLAREA_H_BASE
  #define QABSTRACTSCROLLAREA_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QMargins>
  
    #include <QScrollBar>
  
    #include <QQmlEngine>

    
        #include <QAbstractScrollArea>
      
    // Base class for QAbstractScrollArea
      class QAbstractScrollArea_Base : public QAbstractScrollArea {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QAbstractScrollArea
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QAbstractScrollArea_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QAbstractScrollArea(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(draganddrop)

#endif

    // destructor:
    virtual ~QAbstractScrollArea_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void actionEvent(
      QActionEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void actionEventPublic(
      QActionEvent* event
    ) {
      //qDebug() << "QAbstractScrollArea_Base::actionEventPublic()";
      QAbstractScrollArea::actionEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setViewportMargins(
      int left, int top, int right, int bottom
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setViewportMarginsPublic(
      int left, int top, int right, int bottom
    ) {
      //qDebug() << "QAbstractScrollArea_Base::setViewportMarginsPublic()";
      QAbstractScrollArea::setViewportMargins(
        left, top, right, bottom
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setViewportMargins(
      const QMargins& margins
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setViewportMarginsPublic(
      const QMargins& margins
    ) {
      //qDebug() << "QAbstractScrollArea_Base::setViewportMarginsPublic()";
      QAbstractScrollArea::setViewportMargins(
        margins
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QMargins viewportMargins(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QMargins viewportMarginsPublic(
      
    ) {
      //qDebug() << "QAbstractScrollArea_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QAbstractScrollArea::viewportMargins(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool eventFilter(
      QObject* a1, QEvent* a2
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool eventFilterPublic(
      QObject* a1, QEvent* a2
    ) {
      //qDebug() << "QAbstractScrollArea_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QAbstractScrollArea::eventFilter(
        a1, a2
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool event(
      QEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool eventPublic(
      QEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::eventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QAbstractScrollArea::event(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual bool viewportEvent(
      QEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual bool viewportEventPublic(
      QEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::viewportEventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QAbstractScrollArea::viewportEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeEvent(
      QResizeEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeEventPublic(
      QResizeEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::resizeEventPublic()";
      QAbstractScrollArea::resizeEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void paintEvent(
      QPaintEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::paintEventPublic()";
      QAbstractScrollArea::paintEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mousePressEvent(
      QMouseEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mousePressEventPublic(
      QMouseEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::mousePressEventPublic()";
      QAbstractScrollArea::mousePressEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseReleaseEvent(
      QMouseEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseReleaseEventPublic(
      QMouseEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::mouseReleaseEventPublic()";
      QAbstractScrollArea::mouseReleaseEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseDoubleClickEvent(
      QMouseEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseDoubleClickEventPublic(
      QMouseEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::mouseDoubleClickEventPublic()";
      QAbstractScrollArea::mouseDoubleClickEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseMoveEvent(
      QMouseEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseMoveEventPublic(
      QMouseEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::mouseMoveEventPublic()";
      QAbstractScrollArea::mouseMoveEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void wheelEvent(
      QWheelEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void wheelEventPublic(
      QWheelEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::wheelEventPublic()";
      QAbstractScrollArea::wheelEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void dragEnterEvent(
      QDragEnterEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void dragEnterEventPublic(
      QDragEnterEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::dragEnterEventPublic()";
      QAbstractScrollArea::dragEnterEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void keyPressEvent(
      QKeyEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void keyPressEventPublic(
      QKeyEvent* a1
    ) {
      //qDebug() << "QAbstractScrollArea_Base::keyPressEventPublic()";
      QAbstractScrollArea::keyPressEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void scrollContentsBy(
      int dx, int dy
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void scrollContentsByPublic(
      int dx, int dy
    ) {
      //qDebug() << "QAbstractScrollArea_Base::scrollContentsByPublic()";
      QAbstractScrollArea::scrollContentsBy(
        dx, dy
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual QSize viewportSizeHint(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual QSize viewportSizeHintPublic(
      
    ) {
      //qDebug() << "QAbstractScrollArea_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QAbstractScrollArea::viewportSizeHint(
        
      );
    }
  

      // public virtual overwritten functions / events:
      

      // public pure-virtual functions:
      

    public:
      //void setRecFlag(bool on) {
      //  recFlag = on;
      //}

    public:
      QJSValue self;

    private:
      
        RJSApi& handler;
      
      //bool recFlag;

    };
    
  #endif
  