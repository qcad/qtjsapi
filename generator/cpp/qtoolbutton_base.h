

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QTOOLBUTTON_H_BASE
  #define QTOOLBUTTON_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QMenu>
  
    #include <QStyleOptionToolButton>
  
    #include <QQmlEngine>

    
        #include <QToolButton>
      
    // Base class for QToolButton
      class QToolButton_Base : public QToolButton {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QToolButton
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QToolButton_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QToolButton(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(menu)

#endif

#if QT_CONFIG(menu)

#endif

    // destructor:
    virtual ~QToolButton_Base() { }

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
      //qDebug() << "QToolButton_Base::mousePressEventPublic()";
      QToolButton::mousePressEvent(
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
      //qDebug() << "QToolButton_Base::mouseReleaseEventPublic()";
      QToolButton::mouseReleaseEvent(
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
      //qDebug() << "QToolButton_Base::mouseMoveEventPublic()";
      QToolButton::mouseMoveEvent(
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
      //qDebug() << "QToolButton_Base::paintEventPublic()";
      QToolButton::paintEvent(
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
      //qDebug() << "QToolButton_Base::resizeEventPublic()";
      QToolButton::resizeEvent(
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
      //qDebug() << "QToolButton_Base::actionEventPublic()";
      QToolButton::actionEvent(
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
  