

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QFONTCOMBOBOX_H_BASE
  #define QFONTCOMBOBOX_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QQmlEngine>

    
        #include <QFontComboBox>
      
    // Base class for QFontComboBox
      class QFontComboBox_Base : public QFontComboBox {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QFontComboBox
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QFontComboBox_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QFontComboBox(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QFontComboBox_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
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
      //qDebug() << "QFontComboBox_Base::mouseMoveEventPublic()";
      QFontComboBox::mouseMoveEvent(
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
      //qDebug() << "QFontComboBox_Base::actionEventPublic()";
      QFontComboBox::actionEvent(
        event
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
      //qDebug() << "QFontComboBox_Base::resizeEventPublic()";
      QFontComboBox::resizeEvent(
        e
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
      //qDebug() << "QFontComboBox_Base::paintEventPublic()";
      QFontComboBox::paintEvent(
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
  