

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QITEMDELEGATE_H_BASE
  #define QITEMDELEGATE_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QItemEditorFactory>
  
    #include <QQmlEngine>

    
        #include <QItemDelegate>
      
    // Base class for QItemDelegate
      class QItemDelegate_Base : public QItemDelegate {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QItemDelegate
  // Function: 
  // Parameters: 1
  // preceding Parameters: -1
QItemDelegate_Base
        
      (

        
          RJSApi& _h
          
            ,
          QObject* parent=nullptr
      )
      
        : QItemDelegate(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QItemDelegate_Base() { }

    public:
      // set handler:
      //void setHandler(RJSApi* h) {
      //  handler = h;
      //}
    
      // protected overwritten functions / events and their public invokable counterparts:
      
    protected:
    // implementation of protected function
    // calls JS implementation if available
    virtual QWidget* createEditor(
      QWidget* parent, const QStyleOptionViewItem& option, const QModelIndex& index
    );
  
    public:
    // this can be called from JS to call the parent implementation (e.g. Parent.prototype.call(this, ...)):
    // TODO: convert arguments to QJSValue:
    Q_INVOKABLE virtual QWidget* createEditorPublic(
      QWidget* parent, const QStyleOptionViewItem& option, const QModelIndex& index
    ) {
      //qDebug() << "QItemDelegate_Base::createEditorPublic()";
      
        // TODO: convert return value to QJSValue:
        return
      QItemDelegate::createEditor(
        parent, option, index
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
  