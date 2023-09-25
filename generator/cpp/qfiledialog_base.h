

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QFILEDIALOG_H_BASE
  #define QFILEDIALOG_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QModelIndex>
  
    #include <QItemSelection>
  
    #include <QAbstractFileIconProvider>
  
    #include <QAbstractItemDelegate>
  
    #include <QAbstractProxyModel>
  
    #include <QQmlEngine>

    
        #include <QFileDialog>
      
    // Base class for QFileDialog
      class QFileDialog_Base : public QFileDialog {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QFileDialog
  // Function: 
  // Parameters: 4
  // preceding Parameters: -1
QFileDialog_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr, const QString& caption=QString(), const QString& directory=QString(), const QString& filter=QString()
      )
      
        : QFileDialog(
          parent, caption, directory, filter
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QFileDialog
  // Function: 
  // Parameters: 2
  // preceding Parameters: 4
QFileDialog_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent, Qt::WindowFlags f
      )
      
        : QFileDialog(
          parent, f
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
#if QT_CONFIG(mimetype)

#endif

#if QT_CONFIG(proxymodel)

#endif

    // destructor:
    virtual ~QFileDialog_Base() { }

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
      //qDebug() << "QFileDialog_Base::mousePressEventPublic()";
      QFileDialog::mousePressEvent(
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
      //qDebug() << "QFileDialog_Base::mouseReleaseEventPublic()";
      QFileDialog::mouseReleaseEvent(
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
      //qDebug() << "QFileDialog_Base::mouseMoveEventPublic()";
      QFileDialog::mouseMoveEvent(
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
      //qDebug() << "QFileDialog_Base::paintEventPublic()";
      QFileDialog::paintEvent(
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
      //qDebug() << "QFileDialog_Base::actionEventPublic()";
      QFileDialog::actionEvent(
        event
      );
    }
  
    protected:
    // implementation of protected function
    // calls JS implementation if available
    void resizeEvent(
      QResizeEvent* a1
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE void resizeEventPublic(
      QResizeEvent* a1
    ) {
      //qDebug() << "QFileDialog_Base::resizeEventPublic()";
      QFileDialog::resizeEvent(
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
  