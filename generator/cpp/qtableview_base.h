

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QTABLEVIEW_H_BASE
  #define QTABLEVIEW_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QHeaderView>
  
    #include <QQmlEngine>

    
        #include <QTableView>
      
    // Base class for QTableView
      class QTableView_Base : public QTableView {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
#if QT_CONFIG(abstractbutton)

#endif

  // Class: QTableView
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QTableView_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QTableView(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(abstractbutton)

#endif

    // destructor:
    virtual ~QTableView_Base() { }

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
      //qDebug() << "QTableView_Base::actionEventPublic()";
      QTableView::actionEvent(
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
      //qDebug() << "QTableView_Base::setViewportMarginsPublic()";
      QTableView::setViewportMargins(
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
      //qDebug() << "QTableView_Base::setViewportMarginsPublic()";
      QTableView::setViewportMargins(
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
      //qDebug() << "QTableView_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::viewportMargins(
        
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
      //qDebug() << "QTableView_Base::eventFilterPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::eventFilter(
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
      //qDebug() << "QTableView_Base::eventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::event(
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
      //qDebug() << "QTableView_Base::viewportEventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::viewportEvent(
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
      //qDebug() << "QTableView_Base::mousePressEventPublic()";
      QTableView::mousePressEvent(
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
      //qDebug() << "QTableView_Base::mouseReleaseEventPublic()";
      QTableView::mouseReleaseEvent(
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
      //qDebug() << "QTableView_Base::mouseDoubleClickEventPublic()";
      QTableView::mouseDoubleClickEvent(
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
      //qDebug() << "QTableView_Base::wheelEventPublic()";
      QTableView::wheelEvent(
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
      //qDebug() << "QTableView_Base::dragEnterEventPublic()";
      QTableView::dragEnterEvent(
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
      //qDebug() << "QTableView_Base::keyPressEventPublic()";
      QTableView::keyPressEvent(
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
      //qDebug() << "QTableView_Base::pressedPublic()";
      QTableView::pressed(
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
      //qDebug() << "QTableView_Base::clickedPublic()";
      QTableView::clicked(
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
      //qDebug() << "QTableView_Base::activatedPublic()";
      QTableView::activated(
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
      //qDebug() << "QTableView_Base::enteredPublic()";
      QTableView::entered(
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
      //qDebug() << "QTableView_Base::viewportEnteredPublic()";
      QTableView::viewportEntered(
        
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
      //qDebug() << "QTableView_Base::iconSizeChangedPublic()";
      QTableView::iconSizeChanged(
        size
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseMoveEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseMoveEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QTableView_Base::mouseMoveEventPublic()";
      QTableView::mouseMoveEvent(
        event
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
      //qDebug() << "QTableView_Base::resizeEventPublic()";
      QTableView::resizeEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void rowMoved(
      int row, int oldIndex, int newIndex
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void rowMovedPublic(
      int row, int oldIndex, int newIndex
    ) {
      //qDebug() << "QTableView_Base::rowMovedPublic()";
      QTableView::rowMoved(
        row, oldIndex, newIndex
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void columnMoved(
      int column, int oldIndex, int newIndex
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void columnMovedPublic(
      int column, int oldIndex, int newIndex
    ) {
      //qDebug() << "QTableView_Base::columnMovedPublic()";
      QTableView::columnMoved(
        column, oldIndex, newIndex
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void rowResized(
      int row, int oldHeight, int newHeight
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void rowResizedPublic(
      int row, int oldHeight, int newHeight
    ) {
      //qDebug() << "QTableView_Base::rowResizedPublic()";
      QTableView::rowResized(
        row, oldHeight, newHeight
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void columnResized(
      int column, int oldWidth, int newWidth
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void columnResizedPublic(
      int column, int oldWidth, int newWidth
    ) {
      //qDebug() << "QTableView_Base::columnResizedPublic()";
      QTableView::columnResized(
        column, oldWidth, newWidth
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void rowCountChanged(
      int oldCount, int newCount
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void rowCountChangedPublic(
      int oldCount, int newCount
    ) {
      //qDebug() << "QTableView_Base::rowCountChangedPublic()";
      QTableView::rowCountChanged(
        oldCount, newCount
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void columnCountChanged(
      int oldCount, int newCount
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void columnCountChangedPublic(
      int oldCount, int newCount
    ) {
      //qDebug() << "QTableView_Base::columnCountChangedPublic()";
      QTableView::columnCountChanged(
        oldCount, newCount
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
      //qDebug() << "QTableView_Base::scrollContentsByPublic()";
      QTableView::scrollContentsBy(
        dx, dy
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
      //qDebug() << "QTableView_Base::paintEventPublic()";
      QTableView::paintEvent(
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
      //qDebug() << "QTableView_Base::horizontalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::horizontalOffset(
        
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
      //qDebug() << "QTableView_Base::verticalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::verticalOffset(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void setSelection(
      const QRect& rect, QItemSelectionModel::SelectionFlags command
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void setSelectionPublic(
      const QRect& rect, QItemSelectionModel::SelectionFlags command
    ) {
      //qDebug() << "QTableView_Base::setSelectionPublic()";
      QTableView::setSelection(
        rect, command
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    QRegion visualRegionForSelection(
      const QItemSelection& selection
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE QRegion visualRegionForSelectionPublic(
      const QItemSelection& selection
    ) {
      //qDebug() << "QTableView_Base::visualRegionForSelectionPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::visualRegionForSelection(
        selection
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
      //qDebug() << "QTableView_Base::updateGeometriesPublic()";
      QTableView::updateGeometries(
        
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
      //qDebug() << "QTableView_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::viewportSizeHint(
        
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void verticalScrollbarAction(
      int action
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void verticalScrollbarActionPublic(
      int action
    ) {
      //qDebug() << "QTableView_Base::verticalScrollbarActionPublic()";
      QTableView::verticalScrollbarAction(
        action
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void horizontalScrollbarAction(
      int action
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void horizontalScrollbarActionPublic(
      int action
    ) {
      //qDebug() << "QTableView_Base::horizontalScrollbarActionPublic()";
      QTableView::horizontalScrollbarAction(
        action
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
      //qDebug() << "QTableView_Base::isIndexHiddenPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableView::isIndexHidden(
        index
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void selectionChanged(
      const QItemSelection& selected, const QItemSelection& deselected
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void selectionChangedPublic(
      const QItemSelection& selected, const QItemSelection& deselected
    ) {
      //qDebug() << "QTableView_Base::selectionChangedPublic()";
      QTableView::selectionChanged(
        selected, deselected
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
      //qDebug() << "QTableView_Base::currentChangedPublic()";
      QTableView::currentChanged(
        current, previous
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
  