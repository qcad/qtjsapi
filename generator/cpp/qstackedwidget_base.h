

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QSTACKEDWIDGET_H_BASE
  #define QSTACKEDWIDGET_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QQmlEngine>

    
        #include <QStackedWidget>
      
    // Base class for QStackedWidget
      class QStackedWidget_Base : public QStackedWidget {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QStackedWidget
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QStackedWidget_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QStackedWidget(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QStackedWidget_Base() { }

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
      //qDebug() << "QStackedWidget_Base::mousePressEventPublic()";
      QStackedWidget::mousePressEvent(
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
      //qDebug() << "QStackedWidget_Base::mouseReleaseEventPublic()";
      QStackedWidget::mouseReleaseEvent(
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
      //qDebug() << "QStackedWidget_Base::actionEventPublic()";
      QStackedWidget::actionEvent(
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
      //qDebug() << "QStackedWidget_Base::paintEventPublic()";
      QStackedWidget::paintEvent(
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
      //qDebug() << "QStackedWidget_Base::mouseMoveEventPublic()";
      QStackedWidget::mouseMoveEvent(
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
      //qDebug() << "QStackedWidget_Base::resizeEventPublic()";
      QStackedWidget::resizeEvent(
        event
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
      //qDebug() << "QStackedWidget_Base::eventPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QStackedWidget::event(
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
  