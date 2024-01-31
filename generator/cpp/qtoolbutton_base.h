

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
  