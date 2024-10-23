

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QSPINBOX_H_BASE
  #define QSPINBOX_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QQmlEngine>

    
        #include <QSpinBox>
      
    // Base class for QSpinBox
      class QSpinBox_Base : public QSpinBox {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QSpinBox
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QSpinBox_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QSpinBox(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QSpinBox_Base() { }

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
      //qDebug() << "QSpinBox_Base::actionEventPublic()";
      QSpinBox::actionEvent(
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
      //qDebug() << "QSpinBox_Base::resizeEventPublic()";
      QSpinBox::resizeEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void keyPressEvent(
      QKeyEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void keyPressEventPublic(
      QKeyEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::keyPressEventPublic()";
      QSpinBox::keyPressEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void keyReleaseEvent(
      QKeyEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void keyReleaseEventPublic(
      QKeyEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::keyReleaseEventPublic()";
      QSpinBox::keyReleaseEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void wheelEvent(
      QWheelEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void wheelEventPublic(
      QWheelEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::wheelEventPublic()";
      QSpinBox::wheelEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void focusInEvent(
      QFocusEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void focusInEventPublic(
      QFocusEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::focusInEventPublic()";
      QSpinBox::focusInEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void focusOutEvent(
      QFocusEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void focusOutEventPublic(
      QFocusEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::focusOutEventPublic()";
      QSpinBox::focusOutEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void contextMenuEvent(
      QContextMenuEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void contextMenuEventPublic(
      QContextMenuEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::contextMenuEventPublic()";
      QSpinBox::contextMenuEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void changeEvent(
      QEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void changeEventPublic(
      QEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::changeEventPublic()";
      QSpinBox::changeEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mousePressEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mousePressEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::mousePressEventPublic()";
      QSpinBox::mousePressEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseReleaseEvent(
      QMouseEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseReleaseEventPublic(
      QMouseEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::mouseReleaseEventPublic()";
      QSpinBox::mouseReleaseEvent(
        event
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
      //qDebug() << "QSpinBox_Base::mouseMoveEventPublic()";
      QSpinBox::mouseMoveEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void paintEvent(
      QPaintEvent* event
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void paintEventPublic(
      QPaintEvent* event
    ) {
      //qDebug() << "QSpinBox_Base::paintEventPublic()";
      QSpinBox::paintEvent(
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
    
    #include <QQmlEngine>

    
        #include <QDoubleSpinBox>
      
  #endif
  