

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QMESSAGEBOX_H_BASE
  #define QMESSAGEBOX_H_BASE

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    
    #include <QLabel>
  
    #include <QAbstractButton>
  
    #include <QCheckBox>
  
    #include <QQmlEngine>

    
        #include <QMessageBox>
      
    // Base class for QMessageBox
      class QMessageBox_Base : public QMessageBox {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
#if QT_CONFIG(textedit)

#endif

  // Class: QMessageBox
  // Function: 
  // Parameters: 6
  // preceding Parameters: -1
QMessageBox_Base
        
      (

        
          RJSApi& _h
          
            ,
          QMessageBox::Icon icon, const QString& title, const QString& text, QMessageBox::StandardButtons buttons=QMessageBox::NoButton, QWidget* parent=nullptr, Qt::WindowFlags flags=Qt::Dialog|Qt::MSWindowsFixedSizeDialogHint
      )
      
        : QMessageBox(
          icon, title, text, buttons, parent, flags
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QMessageBox
  // Function: 
  // Parameters: 1
  // preceding Parameters: 6
QMessageBox_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QMessageBox(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif

#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif

#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#endif

#if QT_CONFIG(textedit)

#endif

    // destructor:
    virtual ~QMessageBox_Base() { }

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
      //qDebug() << "QMessageBox_Base::mousePressEventPublic()";
      QMessageBox::mousePressEvent(
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
      //qDebug() << "QMessageBox_Base::mouseReleaseEventPublic()";
      QMessageBox::mouseReleaseEvent(
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
      //qDebug() << "QMessageBox_Base::mouseMoveEventPublic()";
      QMessageBox::mouseMoveEvent(
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
      //qDebug() << "QMessageBox_Base::paintEventPublic()";
      QMessageBox::paintEvent(
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
      //qDebug() << "QMessageBox_Base::actionEventPublic()";
      QMessageBox::actionEvent(
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
      //qDebug() << "QMessageBox_Base::resizeEventPublic()";
      QMessageBox::resizeEvent(
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
  