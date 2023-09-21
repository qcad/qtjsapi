

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QHEADERVIEW_H_BASE
  #define QHEADERVIEW_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QStyleOptionHeader>
  
    #include <QQmlEngine>

    
        #include <QHeaderView>
      
    // Base class for QHeaderView
      class QHeaderView_Base : public QHeaderView {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QHeaderView
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QHeaderView_Base
        
      (

        
          RJSApi& _h
          
            ,
          Qt::Orientation orientation, QWidget* parent=nullptr
      )
      
        : QHeaderView(
          orientation, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#ifndef QT_NO_DATASTREAM

#endif

    // destructor:
    virtual ~QHeaderView_Base() { }

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
      //qDebug() << "QHeaderView_Base::actionEventPublic()";
      QHeaderView::actionEvent(
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
      //qDebug() << "QHeaderView_Base::setViewportMarginsPublic()";
      QHeaderView::setViewportMargins(
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
      //qDebug() << "QHeaderView_Base::setViewportMarginsPublic()";
      QHeaderView::setViewportMargins(
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
      //qDebug() << "QHeaderView_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QHeaderView::viewportMargins(
        
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
      //qDebug() << "QHeaderView_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QHeaderView::eventFilter(
        a1, a2
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
      //qDebug() << "QHeaderView_Base::wheelEventPublic()";
      QHeaderView::wheelEvent(
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
      //qDebug() << "QHeaderView_Base::dragEnterEventPublic()";
      QHeaderView::dragEnterEvent(
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
      //qDebug() << "QHeaderView_Base::keyPressEventPublic()";
      QHeaderView::keyPressEvent(
        a1
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
      //qDebug() << "QHeaderView_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QHeaderView::viewportSizeHint(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void pressed(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void pressedPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "QHeaderView_Base::pressedPublic()";
      QHeaderView::pressed(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void clicked(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void clickedPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "QHeaderView_Base::clickedPublic()";
      QHeaderView::clicked(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void activated(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void activatedPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "QHeaderView_Base::activatedPublic()";
      QHeaderView::activated(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void entered(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void enteredPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "QHeaderView_Base::enteredPublic()";
      QHeaderView::entered(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void viewportEntered(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void viewportEnteredPublic(
      
    ) {
      //qDebug() << "QHeaderView_Base::viewportEnteredPublic()";
      QHeaderView::viewportEntered(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void iconSizeChanged(
      const QSize& size
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void iconSizeChangedPublic(
      const QSize& size
    ) {
      //qDebug() << "QHeaderView_Base::iconSizeChangedPublic()";
      QHeaderView::iconSizeChanged(
        size
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeEvent(
      QResizeEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeEventPublic(
      QResizeEvent* event
    ) {
      //qDebug() << "QHeaderView_Base::resizeEventPublic()";
      QHeaderView::resizeEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void paintEvent(
      QPaintEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* e
    ) {
      //qDebug() << "QHeaderView_Base::paintEventPublic()";
      QHeaderView::paintEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseMoveEvent(
      QMouseEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseMoveEventPublic(
      QMouseEvent* e
    ) {
      //qDebug() << "QHeaderView_Base::mouseMoveEventPublic()";
      QHeaderView::mouseMoveEvent(
        e
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
  