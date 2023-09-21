

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QLINEEDIT_H_BASE
  #define QLINEEDIT_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QValidator>
  
    #include <QMenu>
  
    #include <QCompleter>
  
    #include <QStyleOptionFrame>
  
    #include <QAbstractSpinBox>
  
    #include <QDateTimeEdit>
  
    #include <QIcon>
  
    #include <QToolButton>
  
    #include <QQmlEngine>

    
        #include <QLineEdit>
      
    // Base class for QLineEdit
      class QLineEdit_Base : public QLineEdit {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QLineEdit
  // Function: 
  // Parameters: 2
  // preceding Parameters: -1
QLineEdit_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& a1, QWidget* parent=nullptr
      )
      
        : QLineEdit(
          a1, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QLineEdit
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QLineEdit_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QLineEdit(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#ifndef QT_NO_VALIDATOR

#endif

#if QT_CONFIG(completer)

#endif

#if QT_CONFIG(action)

#endif

#ifndef QT_NO_CLIPBOARD

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(draganddrop)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#ifdef QT_KEYPAD_NAVIGATION

#endif

#if QT_CONFIG(completer)

#endif

#ifdef QT_KEYPAD_NAVIGATION

#endif

    // destructor:
    virtual ~QLineEdit_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
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
      //qDebug() << "QLineEdit_Base::resizeEventPublic()";
      QLineEdit::resizeEvent(
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
      //qDebug() << "QLineEdit_Base::actionEventPublic()";
      QLineEdit::actionEvent(
        event
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
      //qDebug() << "QLineEdit_Base::mouseMoveEventPublic()";
      QLineEdit::mouseMoveEvent(
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
      //qDebug() << "QLineEdit_Base::paintEventPublic()";
      QLineEdit::paintEvent(
        a1
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
  