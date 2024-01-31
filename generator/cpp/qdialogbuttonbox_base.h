

  // Auto generated
  // Adds public versions for event handlers to be called from 
  // JS implementation of these event handlers.
  
  #ifndef QDIALOGBUTTONBOX_H_BASE
  #define QDIALOGBUTTONBOX_H_BASE

  // include header:
  //#include "header_h.h"
    
        #include "../RJSHelper.h"
      
    #include <QAbstractButton>
  
    #include <QPushButton>
  
    #include <QQmlEngine>

    
        #include <QDialogButtonBox>
      
    // Base class for QDialogButtonBox
      class QDialogButtonBox_Base : public QDialogButtonBox {

      
        //Q_OBJECT
      

      public:
    

    // constructors:
    
  // Class: QDialogButtonBox
  // Function: 
  // Parameters: 3
  // preceding Parameters: -1
QDialogButtonBox_Base
        
      (

        
          RJSApi& _h
          
            ,
          QDialogButtonBox::StandardButtons buttons, Qt::Orientation orientation, QWidget* parent=nullptr
      )
      
        : QDialogButtonBox(
          buttons, orientation, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QDialogButtonBox
  // Function: 
  // Parameters: 2
  // preceding Parameters: 3
QDialogButtonBox_Base
        
      (

        
          RJSApi& _h
          
            ,
          QDialogButtonBox::StandardButtons buttons, QWidget* parent=nullptr
      )
      
        : QDialogButtonBox(
          buttons, parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
  // Class: QDialogButtonBox
  // Function: 
  // Parameters: 1
  // preceding Parameters: 2
QDialogButtonBox_Base
        
      (

        
          RJSApi& _h
          
            ,
          QWidget* parent=nullptr
      )
      
        : QDialogButtonBox(
          parent
        ) 
        
          , handler(_h) /*, recFlag(false)*/
        
        {}
      
    // destructor:
    virtual ~QDialogButtonBox_Base() { }

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
  