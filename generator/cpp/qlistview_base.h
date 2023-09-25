

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QLISTVIEW_H_BASE
  #define QLISTVIEW_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QQmlEngine>

    
        #include <QListView>
      
    // Base class for QListView
      class QListView_Base : public QListView {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QListView
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QListView_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QListView(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(wheelevent)

#endif

#if QT_CONFIG(draganddrop)

#endif

    // destructor:
    virtual ~QListView_Base() { }

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
      //qDebug() << "QListView_Base::actionEventPublic()";
      QListView::actionEvent(
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
      //qDebug() << "QListView_Base::setViewportMarginsPublic()";
      QListView::setViewportMargins(
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
      //qDebug() << "QListView_Base::setViewportMarginsPublic()";
      QListView::setViewportMargins(
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
      //qDebug() << "QListView_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::viewportMargins(
        
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
      //qDebug() << "QListView_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::eventFilter(
        a1, a2
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
      //qDebug() << "QListView_Base::viewportEventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::viewportEvent(
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
      //qDebug() << "QListView_Base::mousePressEventPublic()";
      QListView::mousePressEvent(
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
      //qDebug() << "QListView_Base::mouseDoubleClickEventPublic()";
      QListView::mouseDoubleClickEvent(
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
      //qDebug() << "QListView_Base::dragEnterEventPublic()";
      QListView::dragEnterEvent(
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
      //qDebug() << "QListView_Base::keyPressEventPublic()";
      QListView::keyPressEvent(
        a1
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
      //qDebug() << "QListView_Base::pressedPublic()";
      QListView::pressed(
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
      //qDebug() << "QListView_Base::clickedPublic()";
      QListView::clicked(
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
      //qDebug() << "QListView_Base::activatedPublic()";
      QListView::activated(
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
      //qDebug() << "QListView_Base::enteredPublic()";
      QListView::entered(
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
      //qDebug() << "QListView_Base::viewportEnteredPublic()";
      QListView::viewportEntered(
        
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
      //qDebug() << "QListView_Base::iconSizeChangedPublic()";
      QListView::iconSizeChanged(
        size
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool event(
      QEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool eventPublic(
      QEvent* e
    ) {
      //qDebug() << "QListView_Base::eventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::event(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void scrollContentsBy(
      int dx, int dy
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void scrollContentsByPublic(
      int dx, int dy
    ) {
      //qDebug() << "QListView_Base::scrollContentsByPublic()";
      QListView::scrollContentsBy(
        dx, dy
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeContents(
      int width, int height
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeContentsPublic(
      int width, int height
    ) {
      //qDebug() << "QListView_Base::resizeContentsPublic()";
      QListView::resizeContents(
        width, height
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QSize contentsSize(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QSize contentsSizePublic(
      
    ) {
      //qDebug() << "QListView_Base::contentsSizePublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::contentsSize(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void dataChanged(
      const QModelIndex& topLeft, const QModelIndex& bottomRight, const QList<int>& roles=QList<int>()
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void dataChangedPublic(
      const QModelIndex& topLeft, const QModelIndex& bottomRight, const QList<int>& roles=QList<int>()
    ) {
      //qDebug() << "QListView_Base::dataChangedPublic()";
      QListView::dataChanged(
        topLeft, bottomRight, roles
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void rowsInserted(
      const QModelIndex& parent, int start, int end
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void rowsInsertedPublic(
      const QModelIndex& parent, int start, int end
    ) {
      //qDebug() << "QListView_Base::rowsInsertedPublic()";
      QListView::rowsInserted(
        parent, start, end
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void rowsAboutToBeRemoved(
      const QModelIndex& parent, int start, int end
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void rowsAboutToBeRemovedPublic(
      const QModelIndex& parent, int start, int end
    ) {
      //qDebug() << "QListView_Base::rowsAboutToBeRemovedPublic()";
      QListView::rowsAboutToBeRemoved(
        parent, start, end
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
      //qDebug() << "QListView_Base::mouseMoveEventPublic()";
      QListView::mouseMoveEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseReleaseEvent(
      QMouseEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseReleaseEventPublic(
      QMouseEvent* e
    ) {
      //qDebug() << "QListView_Base::mouseReleaseEventPublic()";
      QListView::mouseReleaseEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void wheelEvent(
      QWheelEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void wheelEventPublic(
      QWheelEvent* e
    ) {
      //qDebug() << "QListView_Base::wheelEventPublic()";
      QListView::wheelEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeEvent(
      QResizeEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeEventPublic(
      QResizeEvent* e
    ) {
      //qDebug() << "QListView_Base::resizeEventPublic()";
      QListView::resizeEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void dropEvent(
      QDropEvent* e
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void dropEventPublic(
      QDropEvent* e
    ) {
      //qDebug() << "QListView_Base::dropEventPublic()";
      QListView::dropEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void startDrag(
      Qt::DropActions supportedActions
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void startDragPublic(
      Qt::DropActions supportedActions
    ) {
      //qDebug() << "QListView_Base::startDragPublic()";
      QListView::startDrag(
        supportedActions
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
      //qDebug() << "QListView_Base::paintEventPublic()";
      QListView::paintEvent(
        e
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    int horizontalOffset(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE int horizontalOffsetPublic(
      
    ) {
      //qDebug() << "QListView_Base::horizontalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::horizontalOffset(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    int verticalOffset(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE int verticalOffsetPublic(
      
    ) {
      //qDebug() << "QListView_Base::verticalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::verticalOffset(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QRect rectForIndex(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QRect rectForIndexPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "QListView_Base::rectForIndexPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::rectForIndex(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setPositionForIndex(
      const QPoint& position, const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setPositionForIndexPublic(
      const QPoint& position, const QModelIndex& index
    ) {
      //qDebug() << "QListView_Base::setPositionForIndexPublic()";
      QListView::setPositionForIndex(
        position, index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void updateGeometries(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void updateGeometriesPublic(
      
    ) {
      //qDebug() << "QListView_Base::updateGeometriesPublic()";
      QListView::updateGeometries(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    bool isIndexHidden(
      const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE bool isIndexHiddenPublic(
      const QModelIndex& index
    ) {
      //qDebug() << "QListView_Base::isIndexHiddenPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::isIndexHidden(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void currentChanged(
      const QModelIndex& current, const QModelIndex& previous
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void currentChangedPublic(
      const QModelIndex& current, const QModelIndex& previous
    ) {
      //qDebug() << "QListView_Base::currentChangedPublic()";
      QListView::currentChanged(
        current, previous
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QSize viewportSizeHint(
      
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QSize viewportSizeHintPublic(
      
    ) {
      //qDebug() << "QListView_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QListView::viewportSizeHint(
        
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
  