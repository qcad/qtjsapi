

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QTABLEWIDGET_H_BASE
  #define QTABLEWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QTableWidget>
  
    #include <QQmlEngine>

    
        #include <QTableWidgetItem>
      
    #include <QQmlEngine>

    
        #include <QTableWidget>
      
    // Base class for QTableWidget
      class QTableWidget_Base : public QTableWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QTableWidget
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
QTableWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          int rows, int columns, QWidget* parent=nullptr
      )
      
        : QTableWidget(
          rows, columns, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QTableWidget
  // Function: 
  // Parameters: 1
  // preceding Parameters: 3
QTableWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QTableWidget(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(draganddrop)

#endif

    // destructor:
    virtual ~QTableWidget_Base() { }

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
      //qDebug() << "QTableWidget_Base::actionEventPublic()";
      QTableWidget::actionEvent(
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
      //qDebug() << "QTableWidget_Base::setViewportMarginsPublic()";
      QTableWidget::setViewportMargins(
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
      //qDebug() << "QTableWidget_Base::setViewportMarginsPublic()";
      QTableWidget::setViewportMargins(
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
      //qDebug() << "QTableWidget_Base::viewportMarginsPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableWidget::viewportMargins(
        
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
      //qDebug() << "QTableWidget_Base::eventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableWidget::event(
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
      //qDebug() << "QTableWidget_Base::viewportEventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableWidget::viewportEvent(
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
      //qDebug() << "QTableWidget_Base::mousePressEventPublic()";
      QTableWidget::mousePressEvent(
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
      //qDebug() << "QTableWidget_Base::mouseReleaseEventPublic()";
      QTableWidget::mouseReleaseEvent(
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
      //qDebug() << "QTableWidget_Base::mouseDoubleClickEventPublic()";
      QTableWidget::mouseDoubleClickEvent(
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
      //qDebug() << "QTableWidget_Base::wheelEventPublic()";
      QTableWidget::wheelEvent(
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
      //qDebug() << "QTableWidget_Base::dragEnterEventPublic()";
      QTableWidget::dragEnterEvent(
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
      //qDebug() << "QTableWidget_Base::keyPressEventPublic()";
      QTableWidget::keyPressEvent(
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
      //qDebug() << "QTableWidget_Base::pressedPublic()";
      QTableWidget::pressed(
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
      //qDebug() << "QTableWidget_Base::clickedPublic()";
      QTableWidget::clicked(
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
      //qDebug() << "QTableWidget_Base::activatedPublic()";
      QTableWidget::activated(
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
      //qDebug() << "QTableWidget_Base::enteredPublic()";
      QTableWidget::entered(
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
      //qDebug() << "QTableWidget_Base::viewportEnteredPublic()";
      QTableWidget::viewportEntered(
        
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
      //qDebug() << "QTableWidget_Base::iconSizeChangedPublic()";
      QTableWidget::iconSizeChanged(
        size
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseMoveEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseMoveEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QTableWidget_Base::mouseMoveEventPublic()";
      QTableWidget::mouseMoveEvent(
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
      //qDebug() << "QTableWidget_Base::resizeEventPublic()";
      QTableWidget::resizeEvent(
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
      //qDebug() << "QTableWidget_Base::rowMovedPublic()";
      QTableWidget::rowMoved(
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
      //qDebug() << "QTableWidget_Base::columnMovedPublic()";
      QTableWidget::columnMoved(
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
      //qDebug() << "QTableWidget_Base::rowResizedPublic()";
      QTableWidget::rowResized(
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
      //qDebug() << "QTableWidget_Base::columnResizedPublic()";
      QTableWidget::columnResized(
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
      //qDebug() << "QTableWidget_Base::rowCountChangedPublic()";
      QTableWidget::rowCountChanged(
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
      //qDebug() << "QTableWidget_Base::columnCountChangedPublic()";
      QTableWidget::columnCountChanged(
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
      //qDebug() << "QTableWidget_Base::scrollContentsByPublic()";
      QTableWidget::scrollContentsBy(
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
      //qDebug() << "QTableWidget_Base::paintEventPublic()";
      QTableWidget::paintEvent(
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
      //qDebug() << "QTableWidget_Base::horizontalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableWidget::horizontalOffset(
        
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
      //qDebug() << "QTableWidget_Base::verticalOffsetPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableWidget::verticalOffset(
        
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
      //qDebug() << "QTableWidget_Base::setSelectionPublic()";
      QTableWidget::setSelection(
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
      //qDebug() << "QTableWidget_Base::visualRegionForSelectionPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableWidget::visualRegionForSelection(
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
      //qDebug() << "QTableWidget_Base::updateGeometriesPublic()";
      QTableWidget::updateGeometries(
        
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
      //qDebug() << "QTableWidget_Base::viewportSizeHintPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableWidget::viewportSizeHint(
        
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
      //qDebug() << "QTableWidget_Base::verticalScrollbarActionPublic()";
      QTableWidget::verticalScrollbarAction(
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
      //qDebug() << "QTableWidget_Base::horizontalScrollbarActionPublic()";
      QTableWidget::horizontalScrollbarAction(
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
      //qDebug() << "QTableWidget_Base::isIndexHiddenPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QTableWidget::isIndexHidden(
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
      //qDebug() << "QTableWidget_Base::selectionChangedPublic()";
      QTableWidget::selectionChanged(
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
      //qDebug() << "QTableWidget_Base::currentChangedPublic()";
      QTableWidget::currentChanged(
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
  