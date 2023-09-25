

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QWIDGET_H_BASE
  #define QWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QLayout>
  
    #include <QStyle>
  
    #include <QAction>
  
    #include <QVariant>
  
    #include <QWindow>
  
    #include <QActionEvent>
  
    #include <QMouseEvent>
  
    #include <QWheelEvent>
  
    #include <QHoverEvent>
  
    #include <QKeyEvent>
  
    #include <QFocusEvent>
  
    #include <QPaintEvent>
  
    #include <QMoveEvent>
  
    #include <QResizeEvent>
  
    #include <QCloseEvent>
  
    #include <QContextMenuEvent>
  
    #include <QInputMethodEvent>
  
    #include <QTabletEvent>
  
    #include <QDragEnterEvent>
  
    #include <QDragMoveEvent>
  
    #include <QDragLeaveEvent>
  
    #include <QDropEvent>
  
    #include <QScreen>
  
    #include <QShowEvent>
  
    #include <QHideEvent>
  
    #include <QIcon>
  
    #include <QBackingStore>
  
    #include <QLocale>
  
    #include <QGraphicsProxyWidget>
  
    #include <QGraphicsEffect>
  
    #include <QPixmap>
  
    #include <QDebug>
  
    #include <QQmlEngine>

    
        #include <QWidget>
      
    // Base class for QWidget
      class QWidget_Base : public QWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
#ifndef QT_NO_CURSOR

#endif

#ifndef QT_NO_TOOLTIP

#endif

#if QT_CONFIG(statustip)

#endif

#if QT_CONFIG(whatsthis)

#endif

#ifndef QT_NO_ACCESSIBILITY

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

  // Class: QWidget
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr, Qt::WindowFlags f=Qt::WindowFlags()
      )
      
        : QWidget(
          parent, f
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#ifndef QT_NO_CURSOR

#endif

#if QT_CONFIG(tooltip)

#endif

#if QT_CONFIG(statustip)

#endif

#if QT_CONFIG(whatsthis)

#endif

#ifndef QT_NO_ACCESSIBILITY

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifdef Q_QDOC

#endif

#ifndef QT_NO_CURSOR

#endif

#if QT_CONFIG(graphicseffect)

#endif

#ifndef QT_NO_GESTURES

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifndef QT_NO_STYLE_STYLESHEET

#endif

#ifndef QT_NO_TOOLTIP

#endif

#if QT_CONFIG(statustip)

#endif

#if QT_CONFIG(whatsthis)

#endif

#ifndef QT_NO_ACCESSIBILITY

#endif

#ifndef QT_NO_CURSOR

#endif

#ifndef QT_NO_SHORTCUT

#endif

#if QT_CONFIG(graphicsview)

#endif

#ifndef QT_NO_ACTION

#if QT_VERSION>=QT_VERSION_CHECK(6,0,0)

#else

#endif

#endif

#ifdef QT_KEYPAD_NAVIGATION

#endif

#if QT_CONFIG(wheelevent)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(tabletevent)

#endif

#ifndef QT_NO_ACTION

#endif

#if QT_CONFIG(draganddrop)

#endif

#if QT_VERSION>=QT_VERSION_CHECK(6,0,0)

#else

#endif

#ifndef QT_NO_GESTURES

#endif

#ifdef Q_OS_MAC

#endif

    // destructor:
    virtual ~QWidget_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mousePressEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mousePressEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QWidget_Base::mousePressEventPublic()";
      QWidget::mousePressEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void mouseReleaseEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void mouseReleaseEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QWidget_Base::mouseReleaseEventPublic()";
      QWidget::mouseReleaseEvent(
        event
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
      //qDebug() << "QWidget_Base::mouseMoveEventPublic()";
      QWidget::mouseMoveEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void paintEvent(
      QPaintEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void paintEventPublic(
      QPaintEvent* event
    ) {
      //qDebug() << "QWidget_Base::paintEventPublic()";
      QWidget::paintEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual void resizeEvent(
      QResizeEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual void resizeEventPublic(
      QResizeEvent* event
    ) {
      //qDebug() << "QWidget_Base::resizeEventPublic()";
      QWidget::resizeEvent(
        event
      );
    }
  
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
      //qDebug() << "QWidget_Base::actionEventPublic()";
      QWidget::actionEvent(
        event
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
  