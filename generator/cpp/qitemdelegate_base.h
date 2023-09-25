

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
  