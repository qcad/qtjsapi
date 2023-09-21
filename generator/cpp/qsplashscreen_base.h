

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QSPLASHSCREEN_H_BASE
  #define QSPLASHSCREEN_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QQmlEngine>

    
        #include <QSplashScreen>
      
    // Base class for QSplashScreen
      class QSplashScreen_Base : public QSplashScreen {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QSplashScreen
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
QSplashScreen_Base
        
      (

        
          RJSApi& _h
          
            ,
          QScreen* screen, const QPixmap& pixmap, Qt::WindowFlags f=Qt::WindowFlags()
      )
      
        : QSplashScreen(
          screen, pixmap, f
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QSplashScreen
  // Function: 
  // Parameters: 2
  // preceding Parameters: 3
QSplashScreen_Base
        
      (

        
          RJSApi& _h
          
            ,
          const QPixmap& pixmap, Qt::WindowFlags f=Qt::WindowFlags()
      )
      
        : QSplashScreen(
          pixmap, f
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QSplashScreen_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
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
      //qDebug() << "QSplashScreen_Base::mouseReleaseEventPublic()";
      QSplashScreen::mouseReleaseEvent(
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
      //qDebug() << "QSplashScreen_Base::mouseMoveEventPublic()";
      QSplashScreen::mouseMoveEvent(
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
      //qDebug() << "QSplashScreen_Base::paintEventPublic()";
      QSplashScreen::paintEvent(
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
      //qDebug() << "QSplashScreen_Base::resizeEventPublic()";
      QSplashScreen::resizeEvent(
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
      //qDebug() << "QSplashScreen_Base::actionEventPublic()";
      QSplashScreen::actionEvent(
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
  