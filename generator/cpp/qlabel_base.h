

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QLABEL_H_BASE
  #define QLABEL_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QQmlEngine>

    
        #include <QLabel>
      
    // Base class for QLabel
      class QLabel_Base : public QLabel {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QLabel
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
QLabel_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QString& text, QWidget* parent=nullptr, Qt::WindowFlags f=Qt::WindowFlags()
      )
      
        : QLabel(
          text, parent, f
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QLabel
  // Function: 
  // Parameters: 2
  // preceding Parameters: 3
QLabel_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr, Qt::WindowFlags f=Qt::WindowFlags()
      )
      
        : QLabel(
          parent, f
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_DEPRECATED_SINCE(6,6)

#endif

#ifndef QT_NO_PICTURE

#if QT_DEPRECATED_SINCE(6,6)

#endif

#endif

#if QT_CONFIG(movie)

#endif

#ifndef QT_NO_SHORTCUT

#endif

#ifndef QT_NO_PICTURE

#endif

#if QT_CONFIG(movie)

#endif

#ifndef QT_NO_CONTEXTMENU

#endif

#if QT_CONFIG(movie)

#endif

#ifndef QT_NO_SHORTCUT

#endif

    // destructor:
    virtual ~QLabel_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
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
      //qDebug() << "QLabel_Base::paintEventPublic()";
      QLabel::paintEvent(
        a1
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void mouseMoveEvent(
      QMouseEvent* ev
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void mouseMoveEventPublic(
      QMouseEvent* ev
    ) {
      //qDebug() << "QLabel_Base::mouseMoveEventPublic()";
      QLabel::mouseMoveEvent(
        ev
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
  